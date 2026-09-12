import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { admissionRequirements } from "../../data/penerimaanData";
import Img from "../../components/ui/Img";
import { useT, useLanguage } from "../../i18n/languageContext";
import fotoPmb from "../../assets/images/foto-pmb.jpeg";
import { biayaKelas } from "../../data/biayaPMBData";

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

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const accordionItemVariants = {
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

export default function StudentAdmission() {
  const t = useT();
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "New Student Admission | MKn UNISSULA"
            : "Penerimaan Mahasiswa Baru | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "New student admission information, academic requirements, selection schedule, and online registration of Master of Notarial Law (MKn) UNISSULA."
              : "Informasi pendaftaran mahasiswa baru, persyaratan akademik, jadwal seleksi, dan registrasi online Magister Kenotariatan (MKn) UNISSULA."
          }
        />
      </Helmet>

      <div className="space-y-8">
        {/* Top Header & Intro Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header Eyebrow & Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-xs font-bold tracking-wider uppercase text-primary">
              {t({ id: "PENERIMAAN", en: "ADMISSIONS" })}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
              {t({
                id: "Penerimaan Mahasiswa Baru",
                en: "New Student Admission",
              })}
            </h1>
          </motion.div>

          {/* Horizontal Divider */}
          <motion.hr variants={lineVariants} className="border-t border-gray-800 my-4" />

          {/* Description */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-body text-justify leading-relaxed">
            {t({
              id: "Program Studi Magister Kenotariatan (MKn) Universitas Islam Sultan Agung (UNISSULA) menyelenggarakan penerimaan mahasiswa baru bagi sarjana hukum yang ingin mendalami keilmuan dan profesi kenotariatan dengan standar akademik yang ketat dan berwawasan global.",
              en: "The Master of Notarial Law (MKn) Study Programme of Sultan Agung Islamic University (UNISSULA) organizes new student admissions for law graduates who wish to deepen their knowledge and pursue the notarial profession with rigorous academic standards and a global perspective.",
            })}
          </motion.p>

          {/* Hero Banner Image */}
          <motion.div
            variants={itemVariants}
            className="w-full aspect-[21/9] sm:aspect-[16/7] rounded-xs overflow-hidden bg-gray-100 shadow-2xs"
          >
            <Img
              src={fotoPmb}
              alt={t({
                id: "Penerimaan Mahasiswa Baru MKn UNISSULA",
                en: "New Student Admission MKn UNISSULA",
              })}
              className="w-full h-full object-cover object-center rounded-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* CTA Box Pendaftaran Online */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="p-6 border border-primary/20 bg-primary/5 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300"
          >
            <div className="space-y-1">
              <h3 className="font-heading font-semibold text-base text-heading">
                {t({
                  id: "Pendaftaran Online PMB UNISSULA 2025/2026 Telah Dibuka",
                  en: "Online Registration for UNISSULA Admissions 2025/2026 is Open",
                })}
              </h3>
              <p className="text-xs sm:text-sm text-body">
                {t({
                  id: "Daftarkan diri Anda sekarang melalui portal resmi penerimaan mahasiswa baru UNISSULA.",
                  en: "Register now through the official UNISSULA new student admission portal.",
                })}
              </p>
            </div>
            <motion.a
              href="https://pmb.unissula.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 bg-primary hover:bg-[#570000] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <span>{t({ id: "Daftar Sekarang", en: "Apply Now" })}</span>
              <FiExternalLink />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Section Biaya Pendidikan */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="pt-2 space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-heading font-bold text-heading tracking-normal"
          >
            {t({ id: "Biaya Pendidikan", en: "Tuition Fees" })}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-sm text-body">
            {t({
              id: "Biaya pendidikan disesuaikan dengan kelas yang dipilih. Untuk informasi lebih lanjut, silakan hubungi admin Program Studi.",
              en: "Tuition fees vary according to the selected class. For further information, please contact the Study Programme administration.",
            })}
          </motion.p>

          {/* 3 Kartu Kelas */}
          <motion.div
            variants={listContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {biayaKelas.map((kelas) => (
              <motion.div
                key={kelas.id}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="border border-gray-200 rounded-xs p-6 space-y-4 bg-white shadow-2xs hover:border-primary/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-heading">
                    {t(kelas.nama)}
                  </h3>
                  <p className="text-xs text-body leading-relaxed">
                    {t(kelas.deskripsi)}
                  </p>
                </div>

                <div className="divide-y divide-gray-100">
                  {kelas.komponen.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start py-3 gap-2"
                    >
                      <div className="space-y-0.5">
                        <span className="text-xs text-body block">{t(item.label)}</span>
                        {item.frekuensi && (
                          <span className="inline-block text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-body/70 leading-tight">
                            {t(item.frekuensi)}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-primary text-right shrink-0">
                        {t(item.nilai)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Header & Accordion */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="pt-2 space-y-6"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-heading font-bold text-heading tracking-normal"
          >
            {t({
              id: "Persyaratan & Prosedur Pendaftaran",
              en: "Admission Requirements & Procedures",
            })}
          </motion.h2>

          {/* Accordion List */}
          <motion.div
            variants={listContainerVariants}
            className="divide-y divide-gray-200 border-t border-b border-gray-200"
          >
            {admissionRequirements.map((item) => {
              const isOpen = openIndex === item.id;
              return (
                <motion.div
                  key={item.id}
                  variants={accordionItemVariants}
                  className="py-1"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 flex items-center justify-between text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-medium text-base sm:text-lg text-heading group-hover:text-primary transition-colors">
                      {t(item.title)}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-gray-400 group-hover:text-primary text-xl shrink-0"
                    >
                      <FiChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pt-1 text-body leading-relaxed space-y-3">
                          {item.points && (
                            <ul className="list-disc pl-5 space-y-2 text-sm text-body">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx}>{t(pt)}</li>
                              ))}
                            </ul>
                          )}

                          {item.description && (
                            <p className="text-sm text-body">{t(item.description)}</p>
                          )}

                          {item.steps && (
                            <ol className="list-decimal pl-5 space-y-1.5 text-sm text-body">
                              {item.steps.map((st, sIdx) => (
                                <li key={sIdx}>{t(st)}</li>
                              ))}
                            </ol>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
