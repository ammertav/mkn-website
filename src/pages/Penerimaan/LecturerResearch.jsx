import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  featuredPublications,
  supportingDocuments,
} from "../../data/informasi/lecturerResearchData";
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
      staggerChildren: 0.12,
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

const publicationCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rowVariants = {
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

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LecturerResearch() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Lecturer Research | MKn UNISSULA"
            : "Penelitian Dosen | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Research publications, SINTA/Scopus indexed articles, proceedings, books, and research funding schemes for lecturers of Master of Notarial Law (MKn) UNISSULA."
              : "Publikasi riset, artikel terindeks SINTA/Scopus, prosiding, buku, dan skema pendanaan penelitian dosen Program Studi Magister Kenotariatan (MKn) UNISSULA."
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
            {t({ id: "Penelitian Dosen", en: "Lecturer Research" })}
          </motion.h1>
          <motion.div variants={lineVariants} className="w-full h-[2px] bg-primary my-4" />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-body text-justify leading-relaxed"
          >
            {t({
              id: "Penelitian dosen diarahkan pada empat peta jalan program studi: kepastian hukum akta autentik, pendaftaran tanah dan hukum agraria, hukum perusahaan dan kepailitan, serta digitalisasi jabatan notaris. Setiap penelitian diwajibkan menghasilkan luaran publikasi dan bahan ajar.",
              en: "Lecturer research is directed towards four study programme roadmaps: legal certainty of authentic deeds, land registration and agrarian law, corporate and bankruptcy law, and digitalization of the notarial profession. Every research project is required to produce publication outputs and teaching materials.",
            })}
          </motion.p>
        </motion.div>

        {/* ========================================================================= */}
        {/* PUBLIKASI TERPILIH */}
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
              {t({ id: "Publikasi Terpilih", en: "Selected Publications" })}
            </h2>
          </motion.div>

          <motion.div
            variants={listContainerVariants}
            className="divide-y divide-gray-200 pt-1"
          >
            {featuredPublications.map((item) => (
              <motion.div
                key={item.id}
                variants={publicationCardVariants}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="py-6 first:pt-2 last:pb-2 space-y-1.5 transition-colors hover:bg-white/60 px-3 -mx-3 rounded-xs"
              >
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary block">
                  {t(item.category)}
                </span>
                <h3 className="font-heading italic font-normal text-base sm:text-[18px] text-heading leading-snug">
                  {t(item.title)}
                </h3>
                <p className="text-xs sm:text-sm text-body">
                  <span className="text-heading font-medium">{item.authors}</span> ({item.year}).
                </p>
                {item.citation && (
                  <p className="text-xs sm:text-sm text-body">
                    {t(item.citation)}
                  </p>
                )}
              </motion.div>
            ))}
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
