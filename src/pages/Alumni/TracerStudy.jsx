import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useT, useLanguage } from "../../i18n/languageContext";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TracerStudy() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Alumni Career Tracking (Tracer Study) | MKn UNISSULA"
            : "Penelusuran Alumni | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Tracer Study report, graduate career path tracking, and alumni survey of Master of Notarial Law (MKn) UNISSULA."
              : "Laporan Tracer Study, pelacakan jejak karir lulusan, dan survei alumni Magister Kenotariatan (MKn) UNISSULA."
          }
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={viewportSettings}
        className="space-y-6"
      >
        <div className="space-y-2">
          <motion.span
            variants={itemVariants}
            className="text-xs font-bold tracking-wider uppercase text-primary block"
          >
            {t({ id: "Alumni & Karier", en: "Alumni & Careers" })}
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t({
              id: "Penelusuran Alumni (Tracer Study) MKn UNISSULA",
              en: "Alumni Career Tracking (Tracer Study) MKn UNISSULA",
            })}
          </motion.h1>
        </div>

        <motion.div
          variants={lineVariants}
          className="w-full h-[1px] bg-gray-800 my-4"
        />

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-body text-justify leading-relaxed"
        >
          {t({
            id: "Pemantauan berkala dan pelacakan jejak karir lulusan guna mengevaluasi efektivitas kurikulum, menjamin mutu lulusan, dan memperluas jejaring profesional kenotariatan di seluruh Indonesia.",
            en: "Periodic monitoring and tracking of graduates' career paths to evaluate curriculum effectiveness, guarantee graduate quality, and expand notarial professional networks across Indonesia.",
          })}
        </motion.p>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white shadow-2xs hover:border-primary/40 transition-colors"
        >
          <p className="text-sm font-medium">
            {t({
              id: "Informasi penelusuran alumni akan segera diperbarui di sini.",
              en: "Alumni career tracking information will be updated here soon.",
            })}
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
