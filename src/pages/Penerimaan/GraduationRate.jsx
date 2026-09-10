import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  graduationMetrics,
  academicYearRecap,
  predicateAndDurationDistribution,
  supportingDocuments,
} from "../../data/informasi/graduationRateData";
import { useT, useLanguage } from "../../i18n/languageContext";

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
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Graduation Rate | MKn UNISSULA"
            : "Tingkat Kelulusan | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Statistical data on graduation rates, average GPA, distribution of graduation predicates, and study periods for students of the Master of Notarial Law (MKn) UNISSULA."
              : "Data statistik tingkat kelulusan, rata-rata IPK, sebaran predikat kelulusan, dan masa studi mahasiswa Program Studi Magister Kenotariatan (MKn) UNISSULA."
          }
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
            {t({ id: "INFORMASI", en: "INFORMATION" })}
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t({ id: "Tingkat Kelulusan", en: "Graduation Rate" })}
          </motion.h1>
          <motion.div variants={lineVariants} className="w-full h-[2px] bg-primary my-4" />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-body text-justify leading-relaxed"
          >
            {t({
              id: "Data kelulusan dihimpun setiap akhir tahun akademik oleh Gugus Penjaminan Mutu dari basis data akademik program studi. Indikator yang dipantau meliputi ketepatan masa studi, indeks prestasi kumulatif, predikat kelulusan, dan lama penyelesaian tesis.",
              en: "Graduation data is compiled at the end of each academic year by the Quality Assurance Team from the study programme's academic database. Monitored indicators include study duration timeliness, cumulative GPA, graduation honors predicate, and thesis completion time.",
            })}
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
                  {t(metric.label)}
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
              {t({
                id: "Rekapitulasi per Periode Akademik",
                en: "Recapitulation by Academic Period",
              })}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "PERIODE AKADEMIK", en: "ACADEMIC PERIOD" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "MAHASISWA", en: "STUDENTS" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "LULUS", en: "GRADUATED" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "TEPAT WAKTU", en: "ON TIME" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "RATA IPK", en: "AVG GPA" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "MASA STUDI", en: "STUDY DURATION" })}
                  </th>
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
                      {t(item.studyDuration)}
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
              {t({
                id: "Sebaran Predikat dan Masa Studi",
                en: "Distribution of Predicates and Study Duration",
              })}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[550px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/4">
                    {t({ id: "KELOMPOK", en: "CATEGORY" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "LULUSAN 2024", en: "2024 GRADUATES" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "PROPORSI", en: "PROPORTION" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold w-2/5">
                    {t({ id: "KETERANGAN", en: "REMARKS" })}
                  </th>
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
                      {t(item.group)}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.graduates2024}
                    </td>
                    <td className="py-4 px-5 text-body font-medium">
                      {item.proportion}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {t(item.notes)}
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
              {t({
                id: "Dokumen Pendukung",
                en: "Supporting Documents",
              })}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/2">
                    {t({ id: "JUDUL DOKUMEN", en: "DOCUMENT TITLE" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "VERSI", en: "VERSION" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "TANGGAL", en: "DATE" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "UNDUH", en: "DOWNLOAD" })}
                  </th>
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
                      {t(doc.title)}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {doc.version}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {t(doc.date)}
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
