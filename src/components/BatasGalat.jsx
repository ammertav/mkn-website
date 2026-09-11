import { Component } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiRefreshCw } from "react-icons/fi";

import logoUnissula from "../assets/images/logo-unissula-crest.png";
import Loading from "./Loading";
import { useT, useLanguage } from "../i18n/languageContext";

/**
 * Pesan galat yang menandakan berkas chunk hasil build gagal dimuat.
 *
 * Terjadi bila pengunjung masih memegang index.html versi lama saat situs
 * di-deploy ulang: nama chunk ber-hash yang dirujuknya sudah tidak ada di
 * server. Tiap peramban menulis pesannya sendiri, dan Vite menambahkan satu
 * untuk CSS yang gagal dimuat lebih dulu.
 */
const POLA_GALAT_CHUNK =
  /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|Unable to preload CSS/i;

const KUNCI_MUAT_ULANG = "mkn:muat-ulang-chunk";

/**
 * Muat ulang otomatis hanya diizinkan sekali dalam rentang ini. Tanpa batas,
 * chunk yang memang rusak di server akan membuat halaman memuat ulang terus.
 */
const JEDA_MUAT_ULANG = 10_000;

function galatChunk(galat) {
  return galat?.name === "ChunkLoadError" || POLA_GALAT_CHUNK.test(String(galat?.message ?? ""));
}

function bolehMuatUlang() {
  try {
    const terakhir = Number(sessionStorage.getItem(KUNCI_MUAT_ULANG) || 0);
    if (Date.now() - terakhir < JEDA_MUAT_ULANG) return false;

    sessionStorage.setItem(KUNCI_MUAT_ULANG, String(Date.now()));
    return true;
  } catch {
    // sessionStorage bisa diblokir (mode privat tertentu); lebih aman tidak
    // memuat ulang daripada berisiko berulang tanpa henti.
    return false;
  }
}

/**
 * Penangkap galat render.
 *
 * Tanpa ini, satu galat yang lolos di komponen mana pun membongkar seluruh
 * pohon React dan menyisakan layar putih kosong.
 *
 * Rincian galat tidak pernah ditampilkan kepada pengunjung. Jejaknya hanya
 * dicatat ke console peramban untuk keperluan penelusuran.
 *
 * @param {*} [resetKey] - Bila nilainya berubah, galat dilupakan dan anak
 *   dirender ulang. Dipakai untuk memulihkan halaman saat pengguna berpindah rute.
 * @param {boolean} [senyap] - Tidak menampilkan apa pun saat galat, untuk
 *   komponen pendamping yang boleh hilang tanpa mengganggu halaman.
 */
export class BatasGalat extends Component {
  state = { galat: null, chunk: false, menyerah: false };

  static getDerivedStateFromError(galat) {
    return { galat, chunk: galatChunk(galat) };
  }

  componentDidCatch(galat, info) {
    if (galatChunk(galat)) {
      if (bolehMuatUlang()) {
        window.location.reload();
        return;
      }
      this.setState({ menyerah: true });
    }

    console.error("[BatasGalat]", galat, info?.componentStack);
  }

  componentDidUpdate(sebelumnya) {
    if (this.state.galat && sebelumnya.resetKey !== this.props.resetKey) {
      this.setState({ galat: null, chunk: false, menyerah: false });
    }
  }

  render() {
    const { galat, chunk, menyerah } = this.state;

    if (!galat) return this.props.children;
    if (this.props.senyap) return null;

    // Chunk basi: halaman sedang dimuat ulang, jadi tahan dengan indikator
    // pemuatan alih-alih memamerkan halaman galat sesaat sebelum reload.
    if (chunk && !menyerah) return <Loading />;

    return <HalamanGalat chunk={chunk} />;
  }
}

/**
 * Batas galat untuk seluruh rute, yang memulihkan diri saat alamat berganti.
 *
 * useLocation dibaca di pembungkus ini, bukan di App, supaya perpindahan rute
 * hanya merender ulang pembungkusnya — elemen anak yang diteruskan tetap sama
 * sehingga React tidak ikut merender ulang seluruh isi App.
 */
export default function BatasGalatRute({ children }) {
  const { pathname } = useLocation();
  return <BatasGalat resetKey={pathname}>{children}</BatasGalat>;
}

/**
 * Tampilan saat terjadi galat.
 *
 * Gayanya mengikuti halaman "tidak ditemukan" di detail Berita dan Event, tapi
 * sengaja tanpa Navbar dan Footer: galatnya bisa saja justru berasal dari
 * keduanya, dan merendernya ulang di sini akan menjatuhkan halaman galat ini
 * juga. Sebagai gantinya ada kepala sederhana berisi logo.
 *
 * Tautan beranda memakai <a>, bukan <Link>: muat ulang penuh membersihkan
 * keadaan aplikasi yang mungkin sudah rusak.
 */
function HalamanGalat({ chunk }) {
  const t = useT();
  const { lang } = useLanguage();

  const judul = t({ id: "Terjadi Kesalahan", en: "Something Went Wrong" });

  return (
    <main className="flex flex-col min-h-screen bg-white font-body text-body">
      <Helmet>
        <html lang={lang} />
        <title>{`${judul} | MKn UNISSULA`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <header className="w-full border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <a href="/" className="flex items-center gap-2.5 hover:opacity-95 transition-opacity">
            <img
              src={logoUnissula}
              alt=""
              aria-hidden="true"
              className="h-10 w-auto object-contain shrink-0"
            />
            <span className="flex flex-col justify-center text-primary font-heading font-bold leading-tight">
              <span className="text-[13px] sm:text-[15px]">MAGISTER KENOTARIATAN</span>
              <span className="text-[13px] sm:text-[15px]">FAKULTAS HUKUM UNISSULA</span>
            </span>
          </a>
        </div>
      </header>

      <div className="flex-grow w-full max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-heading font-bold text-heading">{judul}</h1>

        <p className="text-gray-600">
          {chunk
            ? t({
                id: "Situs baru saja diperbarui dan halaman ini gagal dimuat. Muat ulang untuk mendapatkan versi terbaru.",
                en: "The site was just updated and this page failed to load. Reload to get the latest version.",
              })
            : t({
                id: "Halaman ini tidak dapat ditampilkan karena terjadi kesalahan. Silakan muat ulang, atau kembali ke beranda.",
                en: "This page could not be displayed due to an error. Please reload, or return to the home page.",
              })}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#680000] text-white text-sm font-semibold rounded-xs transition-colors cursor-pointer"
          >
            <FiRefreshCw className="w-4 h-4" />
            <span>{t({ id: "Muat Ulang Halaman", en: "Reload Page" })}</span>
          </button>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-primary hover:text-primary text-heading text-sm font-semibold rounded-xs transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>{t({ id: "Kembali ke Beranda", en: "Back to Home" })}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
