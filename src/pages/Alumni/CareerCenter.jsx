import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiExternalLink,
  FiCheck,
  FiMapPin,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import {
  sumberResmi,
  angkaKunci,
  pengantar,
  prasyarat,
  catatanMagang,
  syaratPengangkatan,
  dokumenKelompok,
  tahapanPendaftaran,
  pindahWilayah,
  biaya,
  dasarHukum,
} from "../../data/alumni/pusatKarirData";

/**
 * Saklar tampilan halaman Pusat Karir.
 *
 * "new" — halaman jalur menjadi Notaris yang dipakai sekarang, datanya dari
 *         src/data/alumni/pusatKarirData.js.
 * "old" — desain awal berupa daftar lowongan kerja beserta data contohnya
 *         (lihat `lowonganContoh`), dipertahankan sebagai bahan pembanding.
 *
 * Ubah nilainya di sini untuk berpindah tampilan.
 */
const TAMPILAN = "old";

/** Data contoh lowongan untuk tampilan lama — bukan lowongan sungguhan. */
const lowonganContoh = [
  {
    id: 1,
    title: "Notary Associate (Corporate & Real Estate)",
    company: "Kantor Notaris & PPAT Dr. Bambang Tri Bawono, S.H., M.H.",
    location: "Semarang, Jawa Tengah",
    type: "Full-Time",
    posted: "2 hari yang lalu",
    desc: "Menangani pembuatan akta pendirian perseroan, perjanjian pembebanan hak tanggungan, dan konsultasi legalitas pertanahan.",
    link: "#",
  },
  {
    id: 2,
    title: "Senior Legal Counsel (Banking & Finance)",
    company: "PT Bank Syariah Mandiri Utama",
    location: "Jakarta Pusat",
    type: "Full-Time",
    posted: "4 hari yang lalu",
    desc: "Penyusunan akad pembiayaan sindikasi, legal drafting jaminan fidusia & hak tanggungan elektronik, serta mitigasi risiko kepatuhan.",
    link: "#",
  },
  {
    id: 3,
    title: "Staff Ahli PPAT & Agraria",
    company: "Kantor Pertanahan (ATR/BPN) Wilayah Jawa Tengah",
    location: "Semarang",
    type: "Contract",
    posted: "1 minggu yang lalu",
    desc: "Pemeriksaan validitas warkah pendaftaran tanah, konversi hak, dan penyelesaian sengketa administrasi pertanahan.",
    link: "#",
  },
  {
    id: 4,
    title: "Junior Notary Officer",
    company: "Kantor Notaris & PPAT Hj. Siti Aminah, S.H., M.Kn.",
    location: "Surabaya, Jawa Timur",
    type: "Full-Time",
    posted: "1 minggu yang lalu",
    desc: "Draf minuta akta partij, legalisasi, waarmerking dokumen, serta pelaporan bulanan ke Majelis Pengawas Daerah (MPD).",
    link: "#",
  },
];

/**
 * Pusat Karir.
 *
 * Isi halaman ini adalah jalur menjadi Notaris, dirangkum dari pengumuman resmi
 * Ditjen AHU beserta peraturan yang dirujuknya. Jadwal siklus dan batas tanggal
 * lahir sengaja tidak dimuat karena hanya berlaku satu tahun — lihat catatan
 * pada src/data/alumni/pusatKarirData.js.
 *
 * Bagian lain yang direncanakan untuk halaman ini — layanan karier prodi, mitra
 * magang, dan angka serapan lulusan — masih menunggu data dari program studi.
 */
function TampilanBaru() {
  return (
    <>
      <Helmet>
        <title>Pusat Karir &amp; Jejaring Alumni | MKn UNISSULA</title>
        <meta
          name="description"
          content="Jalur menjadi Notaris bagi lulusan Magister Kenotariatan UNISSULA — syarat pengangkatan, dokumen, tahapan pendaftaran daring, dan pindah wilayah jabatan."
        />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Alumni &amp; Karier
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Pusat Karir &amp; Jejaring Alumni
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body text-justify leading-relaxed">{pengantar}</p>

        {/* Angka kunci */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {angkaKunci.map((a, idx) => (
            <div
              key={idx}
              className="p-5 border border-gray-200 bg-white rounded-xs shadow-2xs space-y-1"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-2xl sm:text-3xl text-primary leading-none">
                  {a.angka}
                </span>
                <span className="text-xs font-semibold text-gray-500">{a.satuan}</span>
              </div>
              <p className="text-[11px] font-medium tracking-wide uppercase text-gray-500 leading-snug">
                {a.label}
              </p>
            </div>
          ))}
        </div>

        {/* Prasyarat */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Tiga Prasyarat Sebelum Mendaftar
          </h2>

          <div className="space-y-4">
            {prasyarat.map((p) => (
              <div
                key={p.nomor}
                className="p-6 border border-gray-200 bg-white rounded-xs space-y-3 shadow-2xs hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-xs bg-primary/10 text-primary font-heading font-bold text-sm">
                    {p.nomor}
                  </span>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-heading font-bold text-lg text-heading leading-snug">
                      {p.judul}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto text-justify">{p.desc}</p>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">{p.dasar}</p>
              </div>
            ))}
          </div>

          {/* Ketentuan magang, dikutip dari peraturan */}
          <div className="p-6 border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 rounded-xs space-y-4">
            <p className="text-xs font-bold tracking-wider uppercase text-heading">
              {catatanMagang.judul}
            </p>
            {catatanMagang.butir.map((b, idx) => (
              <div key={idx} className="space-y-1.5">
                <p className="text-xs sm:text-sm text-body text-justify leading-relaxed">{b.isi}</p>
                <p className="text-[11px] text-gray-500">{b.dasar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Syarat pengangkatan */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Delapan Syarat Pengangkatan
          </h2>
          <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto max-w-4xl">
            Seluruh syarat berikut harus dipenuhi calon Notaris menurut Pasal 2 ayat (1) Permenkum
            22/2025.
          </p>

          <div className="p-6 border border-gray-200 bg-white rounded-xs shadow-2xs">
            <ul className="space-y-3">
              {syaratPengangkatan.map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-50 text-primary flex items-center justify-center">
                    <FiCheck className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Dokumen */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Dokumen yang Dilampirkan
          </h2>

          <div className="space-y-4">
            {dokumenKelompok.map((k) => (
              <div
                key={k.judul}
                className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <h3 className="font-heading font-bold text-lg text-heading leading-snug">
                    {k.judul}
                  </h3>
                  <span className="self-start px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 rounded-xs whitespace-nowrap">
                    {k.butir.length} berkas
                  </span>
                </div>

                <ol className="space-y-2.5">
                  {k.butir.map((b, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="shrink-0 tabular-nums text-gray-400 text-xs pt-0.5 select-none">
                        {idx + 1}.
                      </span>
                      <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{b}</span>
                    </li>
                  ))}
                </ol>

                <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">{k.dasar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tahapan pendaftaran */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Tahapan Pendaftaran Daring
          </h2>
          <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto max-w-4xl">
            Seluruh permohonan diajukan secara elektronik melalui ahu.go.id. Jadwal tiap tahap
            ditetapkan Ditjen AHU pada setiap pembukaan pendaftaran.
          </p>

          <ol className="relative border-l-2 border-gray-200 ml-3 space-y-6">
            {tahapanPendaftaran.map((t) => (
              <li key={t.nomor} className="relative pl-7 sm:pl-9">
                <span
                  aria-hidden="true"
                  className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-heading font-bold flex items-center justify-center border-4 border-banner tabular-nums"
                >
                  {t.nomor}
                </span>
                <h3 className="font-heading font-bold text-base text-heading leading-snug">
                  {t.judul}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto max-w-4xl">
                  {t.desc}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pindah wilayah */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Pindah Wilayah Jabatan
          </h2>

          <div className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs">
            <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{pindahWilayah.ringkas}</p>

            <div className="pt-2 border-t border-gray-100 space-y-2.5">
              <p className="text-xs font-bold tracking-wider uppercase text-heading">
                Dokumen pendukung
              </p>
              <ol className="space-y-2.5">
                {pindahWilayah.dokumen.map((d, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="shrink-0 tabular-nums text-gray-400 text-xs pt-0.5 select-none">
                      {idx + 1}.
                    </span>
                    <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{d}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">
              {pindahWilayah.dasar}
            </p>
          </div>
        </section>

        {/* Biaya */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Biaya
          </h2>

          <div className="border border-gray-200 bg-white rounded-xs overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70">
                  <th className="py-3 px-5 text-[11px] font-bold tracking-wider uppercase text-heading">
                    Jenis
                  </th>
                  <th className="py-3 px-5 text-[11px] font-bold tracking-wider uppercase text-heading text-right w-48">
                    Tarif
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {biaya.butir.map((b, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-5 text-body leading-relaxed">{b.jenis}</td>
                    <td className="py-3.5 px-5 text-right font-semibold text-heading tabular-nums whitespace-nowrap">
                      {b.tarif}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-body leading-relaxed text-justify hyphens-auto">{biaya.catatan}</p>
          <p className="text-[11px] text-gray-500 leading-relaxed">{biaya.dasar}</p>
        </section>

        {/* Dasar hukum & rujukan resmi */}
        <section className="space-y-4 pt-6">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight">
            Dasar Hukum
          </h2>

          <ol className="space-y-2.5">
            {dasarHukum.map((d, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="shrink-0 tabular-nums text-gray-400 text-xs pt-0.5 select-none">
                  {idx + 1}.
                </span>
                <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{d}</span>
              </li>
            ))}
          </ol>

          <div className="p-6 border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 rounded-xs space-y-3">
            <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">
              Halaman ini merupakan rangkuman yang disusun program studi dari {sumberResmi.dokumen}.
              Persyaratan, jadwal, formasi wilayah, dan tarif dapat berubah mengikuti peraturan
              terbaru. Rujukan resmi dan terkini adalah laman {sumberResmi.nama}.
            </p>
            <a
              href={sumberResmi.laman}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-primary hover:text-[#570000] font-semibold text-xs sm:text-sm"
            >
              <span>Buka ahu.go.id</span>
              <FiExternalLink />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

/**
 * Tampilan lama: daftar lowongan kerja dengan data contoh.
 *
 * Disalin apa adanya dari desain awal halaman ini (commit pertama) agar bisa
 * dibandingkan dengan tampilan sekarang. Semua lowongan di sini fiktif.
 */
function TampilanLama() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    if (visibleCount >= lowonganContoh.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount(lowonganContoh.length);
    }
  };

  return (
    <>
      <Helmet>
        <title>Pusat Karir &amp; Bursa Kerja | MKn UNISSULA</title>
        <meta
          name="description"
          content="Layanan pusat karir, lowongan magang, dan peluang kerja profesional bidang notariat dan hukum bagi alumni MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading tracking-tight leading-tight">
            Pusat Karir &amp; Jejaring Alumni
          </h1>
          <p className="text-sm sm:text-base text-body text-justify leading-relaxed">
            Menghubungkan lulusan Magister Kenotariatan UNISSULA dengan jejaring kantor Notaris/PPAT,
            firma hukum, perbankan, dan institusi pemerintahan terkemuka di Indonesia.
          </p>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        {/* Featured Listings */}
        <div className="space-y-4 pt-2">
          {lowonganContoh.slice(0, visibleCount).map((job) => (
            <div
              key={job.id}
              className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-heading leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-primary">{job.company}</p>
                </div>
                <span className="self-start px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-gray-100 text-gray-600 rounded-xs">
                  {job.type}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-body leading-relaxed">{job.desc}</p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-100 text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <FiMapPin className="text-primary" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FiClock className="text-primary" />
                    <span>{job.posted}</span>
                  </span>
                </div>
                <a
                  href={job.link}
                  className="inline-flex items-center space-x-1 text-primary hover:text-[#570000] font-semibold"
                >
                  <span>Lihat Detail</span>
                  <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="pt-8 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
          >
            {visibleCount >= lowonganContoh.length
              ? "TAMPILKAN LEBIH SEDIKIT"
              : "MUAT LEBIH BANYAK"}
          </button>
        </div>
      </div>
    </>
  );
}

export default function CareerCenter() {
  return TAMPILAN === "old" ? <TampilanLama /> : <TampilanBaru />;
}
