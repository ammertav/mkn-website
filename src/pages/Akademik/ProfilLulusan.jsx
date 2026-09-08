import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import RichText from "../../components/ui/RichText";
import {
  mainProfiles,
  halaman,
} from "../../data/akademik/profilLulusanData";

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
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const codeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProfilLulusan() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta
          name="description"
          content={t(halaman.meta.description)}
        />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.span
            variants={headerItemVariants}
            className="text-xs font-bold tracking-[0.16em] uppercase text-primary block"
          >
            {ui("sectionAcademic")}
          </motion.span>

          <motion.h1
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t(halaman.judul)}
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={viewportSettings}
            className="h-[2px] bg-primary mt-4 mb-5"
          />
        </motion.div>

        {/* Section 1: Empat Profil Utama */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="space-y-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200 bg-white"
          >
            {mainProfiles.map((item) => (
              <motion.div
                key={item.code}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="p-6 sm:p-7 space-y-2.5 border-r border-b border-gray-200"
              >
                <motion.span
                  variants={codeVariants}
                  className="text-sm font-bold tracking-wider text-primary uppercase block"
                >
                  {item.code}
                </motion.span>

                <motion.h3
                  variants={cardVariants}
                  className="text-base sm:text-xl font-heading font-medium text-heading leading-snug"
                >
                  <RichText>{t(item.title)}</RichText>
                </motion.h3>

                <motion.p
                  variants={cardVariants}
                  className="text-sm text-body text-justify leading-relaxed"
                >
                  <RichText>{t(item.desc)}</RichText>
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}