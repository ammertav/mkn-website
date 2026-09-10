import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  featuredActivities,
  supportingDocuments,
} from "../../data/informasi/communityServiceData";
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

export default function CommunityService() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Lecturer Community Service | MKn UNISSULA"
            : "Pengabdian Dosen | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Community service programs (PkM), PTSL land legal counseling, MSME assistance, output reports, and supporting documents for MKn UNISSULA lecturers."
              : "Program kegiatan pengabdian kepada masyarakat (PkM), penyuluhan hukum pertanahan PTSL, pendampingan UMKM, laporan luaran, dan dokumen pendukung dosen MKn UNISSULA."
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
            {t({ id: "Pengabdian Dosen", en: "Community Service" })}
          </motion.h1>
          <motion.div variants={lineVariants} className="w-full h-[2px] bg-primary my-4" />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-body text-justify leading-relaxed"
          >
            {t({
              id: "Pengabdian kepada masyarakat diselenggarakan sebagai penerjemahan keilmuan kenotariatan ke dalam layanan hukum yang dapat diakses masyarakat: penyuluhan pertanahan desa, pendampingan legalitas usaha mikro, dan konsultasi pembuatan perjanjian.",
              en: "Community service is conducted as the translation of notarial knowledge into accessible legal services for the community: village land counseling, micro-business legality mentoring, and agreement drafting consultation.",
            })}
          </motion.p>
        </motion.div>

        {/* ========================================================================= */}
        {/* KEGIATAN TERPILIH */}
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
              {t({ id: "Kegiatan Terpilih", en: "Selected Activities" })}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[550px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "KEGIATAN", en: "ACTIVITY" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold w-1/4 sm:w-1/3">
                    {t({ id: "LOKASI", en: "LOCATION" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold w-1/4 whitespace-nowrap">
                    {t({ id: "KETUA PELAKSANA", en: "LEAD / SPEAKER" })}
                  </th>
                </tr>
              </thead>
              <motion.tbody
                variants={listContainerVariants}
                className="divide-y divide-gray-200"
              >
                {featuredActivities.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    variants={rowVariants}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 text-heading leading-relaxed font-medium">
                      {t(item.activity)}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {t(item.location)}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.lead}
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
              {t({ id: "Dokumen Pendukung", en: "Supporting Documents" })}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold">
                    {t({ id: "JUDUL DOKUMEN", en: "DOCUMENT TITLE" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold w-36 whitespace-nowrap">
                    {t({ id: "TANGGAL", en: "DATE" })}
                  </th>
                  <th className="py-3.5 px-5 font-bold w-28 whitespace-nowrap">
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
                    <td className="py-4 px-5 text-heading font-medium">
                      {t(doc.title)}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {t(doc.date)}
                    </td>
                    <td className="py-4 px-5 whitespace-nowrap">
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
