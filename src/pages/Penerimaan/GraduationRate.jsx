import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  graduationMetrics,
  academicYearRecap,
  predicateAndDurationDistribution,
  supportingDocuments,
} from "../../data/informasi/graduationRateData";

const viewportSettings = {
  once: true,
  amount: 0.15,
};

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

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GraduationRate() {
  return (
    <>
      <Helmet>
        <title>Tingkat Kelulusan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Data statistik tingkat kelulusan, rata-rata IPK, sebaran predikat kelulusan, dan masa studi mahasiswa Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 font-body text-body">
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2"
          >
            INFORMASI
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            Tingkat Kelulusan
          </motion.h1>
          <motion.div variants={lineVariants} className="w-full h-[2px] bg-primary my-4" />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-body text-justify leading-relaxed"
          >
            Data kelulusan dihimpun setiap akhir tahun akademik oleh Gugus Penjaminan Mutu dari basis data akademik program studi. Indikator yang dipantau meliputi ketepatan masa studi, indeks prestasi kumulatif, predikat kelulusan, dan lama penyelesaian tesis.
          </motion.p>

          {/* Metric Stats Cards */}
          <motion.div
            variants={listContainerVariants}
            className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mt-8 rounded-xs shadow-2xs overflow-hidden"
          >
            {graduationMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={statCardVariants}
                whileHover={{ y: -2 }}
                className="p-5 sm:p-6 text-left flex flex-col justify-center transition-colors hover:bg-gray-50/70"
              >
                <span className="font-heading italic font-normal text-3xl sm:text-4xl text-primary block leading-none">
                  {metric.value}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-body mt-2 block">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* REKAPITULASI PER TAHUN AKADEMIK */}
        {/* ========================================================================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Rekapitulasi per Periode Akademik
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold">PERIODE AKADEMIK</th>
                  <th className="py-3.5 px-5 font-bold">MAHASISWA</th>
                  <th className="py-3.5 px-5 font-bold">LULUS</th>
                  <th className="py-3.5 px-5 font-bold">TEPAT WAKTU</th>
                  <th className="py-3.5 px-5 font-bold">RATA IPK</th>
                  <th className="py-3.5 px-5 font-bold">MASA STUDI</th>
                </tr>
              </thead>
              <motion.tbody
                variants={listContainerVariants}
                className="divide-y divide-gray-200"
              >
                {academicYearRecap.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    variants={rowVariants}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 text-heading whitespace-nowrap">
                      {item.year}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.students}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.graduated}
                    </td>
                    <td className="py-4 px-5 text-body font-medium">
                      {item.onTime}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.avgGpa}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.studyDuration}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* ========================================================================= */}
        {/* SEBARAN PREDIKAT DAN MASA STUDI */}
        {/* ========================================================================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Sebaran Predikat dan Masa Studi
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[550px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/4">KELOMPOK</th>
                  <th className="py-3.5 px-5 font-bold">LULUSAN 2024</th>
                  <th className="py-3.5 px-5 font-bold">PROPORSI</th>
                  <th className="py-3.5 px-5 font-bold w-2/5">KETERANGAN</th>
                </tr>
              </thead>
              <motion.tbody
                variants={listContainerVariants}
                className="divide-y divide-gray-200"
              >
                {predicateAndDurationDistribution.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    variants={rowVariants}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 text-heading whitespace-nowrap">
                      {item.group}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.graduates2024}
                    </td>
                    <td className="py-4 px-5 text-body font-medium">
                      {item.proportion}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.notes}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>
        </motion.section>

        {/* ========================================================================= */}
        {/* DOKUMEN PENDUKUNG */}
        {/* ========================================================================= */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Dokumen Pendukung
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/2">JUDUL DOKUMEN</th>
                  <th className="py-3.5 px-5 font-bold">VERSI</th>
                  <th className="py-3.5 px-5 font-bold">TANGGAL</th>
                  <th className="py-3.5 px-5 font-bold">UNDUH</th>
                </tr>
              </thead>
              <motion.tbody
                variants={listContainerVariants}
                className="divide-y divide-gray-200"
              >
                {supportingDocuments.map((doc) => (
                  <motion.tr
                    key={doc.id}
                    variants={rowVariants}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 text-heading">
                      {doc.title}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {doc.version}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-4 px-5">
                      <motion.a
                        href={doc.fileUrl}
                        download={doc.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-primary font-bold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{doc.fileType}</span>
                        <span className="text-xs">↓</span>
                      </motion.a>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
