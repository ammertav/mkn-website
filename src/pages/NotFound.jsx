import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiCornerUpLeft } from "react-icons/fi";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useT, useLanguage } from "../i18n/languageContext";

/**
 * Teks antarmuka halaman 404.
 */
const halaman = {
  judul: {
    id: "Halaman Tidak Ditemukan",
    en: "Page Not Found",
  },
  keterangan: {
    id: "Halaman yang Anda cari tidak tersedia, telah dipindahkan, atau alamatnya keliru.",
    en: "The page you are looking for is unavailable, has been moved, or the address is incorrect.",
  },
  kembaliKeBeranda: {
    id: "Kembali ke Beranda",
    en: "Back to Home",
  },
  halamanSebelumnya: {
    id: "Halaman Sebelumnya",
    en: "Previous Page",
  },
  atauKunjungi: {
    id: "Atau kunjungi",
    en: "Or visit",
  },
};

/** Tujuan yang paling mungkin dicari pengunjung yang tersesat. */
const tautanPopuler = [
  { label: { id: "Profil Program Studi", en: "Program Profile" }, to: "/profil/sejarah" },
  { label: { id: "Kurikulum", en: "Curriculum" }, to: "/akademik/kurikulum" },
  { label: { id: "Penerimaan Mahasiswa", en: "Admissions" }, to: "/informasi/penerimaan-mahasiswa" },
  { label: { id: "Berita & Wawasan", en: "News & Insights" }, to: "/berita" },
];

/**
 * Halaman 404 untuk alamat yang tidak cocok dengan rute mana pun.
 *
 * Tampilannya disamakan dengan halaman "tidak ditemukan" di detail Berita dan
 * Event. Karena situs ini SPA, server tetap membalas HTTP 200 untuk alamat
 * apa pun; meta noindex mencegah mesin pencari mengindeks halaman ini sebagai
 * halaman sungguhan.
 */
export default function NotFound() {
  const t = useT();
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // React Router mencatat urutan riwayat di history.state.idx. Bila bernilai 0,
  // pengunjung datang langsung ke alamat ini — mundur justru meninggalkan situs,
  // jadi tombolnya tidak ditampilkan.
  const bisaMundur = (window.history.state?.idx ?? 0) > 0;

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{`${t(halaman.judul)} | MKn UNISSULA`}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-white font-body text-body">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-grow w-full max-w-4xl mx-auto px-4 py-20 text-center space-y-6"
        >
          <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase block">
            404
          </span>

          <h1 className="text-3xl font-heading font-bold text-heading">{t(halaman.judul)}</h1>

          <div className="space-y-2">
            <p className="text-gray-600">{t(halaman.keterangan)}</p>
            <p className="text-xs text-gray-400 font-mono break-all">{pathname}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#680000] text-white text-sm font-semibold rounded-xs transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>{t(halaman.kembaliKeBeranda)}</span>
            </Link>

            {bisaMundur && (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 hover:border-primary hover:text-primary text-heading text-sm font-semibold rounded-xs transition-colors cursor-pointer"
              >
                <FiCornerUpLeft className="w-4 h-4" />
                <span>{t(halaman.halamanSebelumnya)}</span>
              </button>
            )}
          </div>

          <nav
            aria-label={t(halaman.atauKunjungi)}
            className="pt-8 mt-4 border-t border-gray-100"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {t(halaman.atauKunjungi)}
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {tautanPopuler.map((tautan) => (
                <li key={tautan.to}>
                  <Link
                    to={tautan.to}
                    className="text-sm font-semibold text-primary hover:text-[#680000] hover:underline underline-offset-4"
                  >
                    {t(tautan.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <Footer />
      </div>
    </>
  );
}
