import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: typeof i === "number" ? i * 0.12 : 0,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (args = 0) => {
    const idx =
      typeof args === "object" && args !== null
        ? args.idx ?? 0
        : typeof args === "number"
        ? args
        : 0;
    const hasLoaded =
      typeof args === "object" && args !== null ? !!args.hasLoaded : false;
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: !hasLoaded ? 0.38 + idx * 0.12 : (idx % 3) * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    };
  },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

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

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-2">
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-bold tracking-wider uppercase text-primary"
          >
            Alumni &amp; Karier
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            Pusat Karir &amp; Jejaring Alumni
          </motion.h1>
        </motion.div>

        <motion.hr variants={lineVariants} className="border-t border-gray-800 my-4" />

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-body text-justify leading-relaxed"
        >
          {pengantar}
        </motion.p>

        {/* Angka kunci */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2"
        >
          {angkaKunci.map((a, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="p-5 border border-gray-200 bg-white rounded-xs shadow-2xs space-y-1 transition-colors hover:border-primary/40"
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
            </motion.div>
          ))}
        </motion.div>

        {/* Prasyarat */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Tiga Prasyarat Sebelum Mendaftar
          </motion.h2>

          <div className="space-y-4">
            {prasyarat.map((p, idx) => (
              <motion.div
                key={p.nomor}
                custom={idx}
                variants={cardVariants}
                whileHover={{ y: -2 }}
                className="p-6 border border-gray-200 bg-white rounded-xs space-y-3 shadow-2xs hover:border-primary/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-xs bg-primary/10 text-primary font-heading font-bold text-sm">
                    {p.nomor}
                  </span>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-heading font-bold text-lg text-heading leading-snug">
                      {p.judul}
                    </h3>
                    <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{p.desc}</p>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">{p.dasar}</p>
              </motion.div>
            ))}
          </div>

          {/* Ketentuan magang, dikutip dari peraturan */}
          <motion.div
            variants={cardVariants}
            className="p-6 border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 rounded-xs space-y-4"
          >
            <p className="text-xs font-bold tracking-wider uppercase text-heading">
              {catatanMagang.judul}
            </p>
            {catatanMagang.butir.map((b, idx) => (
              <motion.div key={idx} custom={idx} variants={itemVariants} className="space-y-1.5">
                <p className="text-xs sm:text-sm text-body text-justify leading-relaxed">{b.isi}</p>
                <p className="text-[11px] text-gray-500">{b.dasar}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Syarat pengangkatan */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Delapan Syarat Pengangkatan
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto max-w-4xl"
          >
            Seluruh syarat berikut harus dipenuhi calon Notaris menurut Pasal 2 ayat (1) Permenkum
            22/2025.
          </motion.p>

          <motion.div
            variants={cardVariants}
            className="p-6 border border-gray-200 bg-white rounded-xs shadow-2xs"
          >
            <ul className="space-y-3">
              {syaratPengangkatan.map((s, idx) => (
                <motion.li key={idx} custom={idx} variants={itemVariants} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-50 text-primary flex items-center justify-center">
                    <FiCheck className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{s}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Dokumen */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Dokumen yang Dilampirkan
          </motion.h2>

          <div className="space-y-4">
            {dokumenKelompok.map((k, idx) => (
              <motion.div
                key={k.judul}
                custom={idx}
                variants={cardVariants}
                whileHover={{ y: -2 }}
                className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs hover:border-primary/40 transition-all"
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
                  {k.butir.map((b, bIdx) => (
                    <li key={bIdx} className="flex gap-3">
                      <span className="shrink-0 tabular-nums text-gray-400 text-xs pt-0.5 select-none">
                        {bIdx + 1}.
                      </span>
                      <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{b}</span>
                    </li>
                  ))}
                </ol>

                <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">{k.dasar}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tahapan pendaftaran */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Tahapan Pendaftaran Daring
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto max-w-4xl"
          >
            Seluruh permohonan diajukan secara elektronik melalui ahu.go.id. Jadwal tiap tahap
            ditetapkan Ditjen AHU pada setiap pembukaan pendaftaran.
          </motion.p>

          <ol className="relative border-l-2 border-gray-200 ml-3 space-y-6">
            {tahapanPendaftaran.map((t, idx) => (
              <motion.li
                key={t.nomor}
                custom={idx}
                variants={itemVariants}
                className="relative pl-7 sm:pl-9"
              >
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
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* Pindah wilayah */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Pindah Wilayah Jabatan
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs"
          >
            <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{pindahWilayah.ringkas}</p>

            <div className="pt-2 border-t border-gray-100 space-y-2.5">
              <p className="text-xs font-bold tracking-wider uppercase text-heading">
                Dokumen pendukung
              </p>
              <ol className="space-y-2.5">
                {pindahWilayah.dokumen.map((d, idx) => (
                  <motion.li key={idx} custom={idx} variants={itemVariants} className="flex gap-3">
                    <span className="shrink-0 tabular-nums text-gray-400 text-xs pt-0.5 select-none">
                      {idx + 1}.
                    </span>
                    <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{d}</span>
                  </motion.li>
                ))}
              </ol>
            </div>

            <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-100">
              {pindahWilayah.dasar}
            </p>
          </motion.div>
        </motion.section>

        {/* Biaya */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Biaya
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="border border-gray-200 bg-white rounded-xs overflow-x-auto shadow-2xs"
          >
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
                  <motion.tr key={idx} custom={idx} variants={itemVariants} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-5 text-body leading-relaxed">{b.jenis}</td>
                    <td className="py-3.5 px-5 text-right font-semibold text-heading tabular-nums whitespace-nowrap">
                      {b.tarif}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xs text-body leading-relaxed text-justify hyphens-auto">{biaya.catatan}</motion.p>
          <motion.p variants={itemVariants} className="text-[11px] text-gray-500 leading-relaxed">{biaya.dasar}</motion.p>
        </motion.section>

        {/* Dasar hukum & rujukan resmi */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4 pt-6"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading font-bold text-xl sm:text-2xl text-heading tracking-tight"
          >
            Dasar Hukum
          </motion.h2>

          <ol className="space-y-2.5">
            {dasarHukum.map((d, idx) => (
              <motion.li key={idx} custom={idx} variants={itemVariants} className="flex gap-3">
                <span className="shrink-0 tabular-nums text-gray-400 text-xs pt-0.5 select-none">
                  {idx + 1}.
                </span>
                <span className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">{d}</span>
              </motion.li>
            ))}
          </ol>

          <motion.div
            variants={cardVariants}
            className="p-6 border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 rounded-xs space-y-3"
          >
            <p className="text-xs sm:text-sm text-body leading-relaxed text-justify hyphens-auto">
              Halaman ini merupakan rangkuman yang disusun program studi dari {sumberResmi.dokumen}.
              Persyaratan, jadwal, formasi wilayah, dan tarif dapat berubah mengikuti peraturan
              terbaru. Rujukan resmi dan terkini adalah laman {sumberResmi.nama}.
            </p>
            <a
              href={sumberResmi.laman}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-primary hover:text-[#570000] font-semibold text-xs sm:text-sm group"
            >
              <span className="group-hover:underline">Buka ahu.go.id</span>
              <FiExternalLink />
            </a>
          </motion.div>
        </motion.section>
      </motion.div>
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
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

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
        {/* Header Container */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-heading tracking-tight leading-tight"
            >
              Pusat Karir &amp; Jejaring Alumni
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-body text-justify leading-relaxed"
            >
              Menghubungkan lulusan Magister Kenotariatan UNISSULA dengan jejaring kantor Notaris/PPAT,
              firma hukum, perbankan, dan institusi pemerintahan terkemuka di Indonesia.
            </motion.p>
          </motion.div>

          <motion.hr variants={lineVariants} className="border-t border-gray-800 my-4" />
        </motion.div>

        {/* Featured Listings */}
        <div className="space-y-4 pt-2">
          <AnimatePresence mode="popLayout">
            {lowonganContoh.slice(0, visibleCount).map((job, idx) => (
              <motion.div
                key={job.id}
                layout
                custom={{ idx, hasLoaded }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                whileHover={{ y: -3 }}
                className="p-6 border border-gray-200 bg-white rounded-xs space-y-4 shadow-2xs hover:border-primary/40 hover:shadow-md transition-all duration-300"
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
                  <motion.a
                    href={job.link}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex items-center space-x-1 text-primary hover:text-[#570000] font-semibold"
                  >
                    <span>Lihat Detail</span>
                    <FiArrowRight />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="pt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLoadMore}
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs"
          >
            {visibleCount >= lowonganContoh.length
              ? "TAMPILKAN LEBIH SEDIKIT"
              : "MUAT LEBIH BANYAK"}
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}

export default function CareerCenter() {
  return TAMPILAN === "old" ? <TampilanLama /> : <TampilanBaru />;
}

