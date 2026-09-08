import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import RichText from "../../components/ui/RichText";
import {
  cplStats,
  cplItems,
  halaman,
} from "../../data/akademik/capaianPembelajaranData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const tableRowVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function CapaianPembelajaran() {
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

        {/* Stats Grid 4 Kolom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200 bg-white"
        >
          {cplStats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="p-6 sm:p-7 space-y-2 border-r border-b border-gray-200"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="text-3xl sm:text-4xl font-heading text-primary leading-none"
              >
                {stat.value}
              </motion.div>

              <motion.p
                variants={cardVariants}
                className="text-[11px] font-medium tracking-wider text-gray-500 uppercase"
              >
                {t(stat.label)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabel CPL dan Deskriptor KKNI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="space-y-4"
        >
          {/* Table Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.h2
              variants={headerItemVariants}
              className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal"
            >
              {t(halaman.judulTabel)}
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.15,
              }}
              viewport={viewportSettings}
              className="h-[1.5px] bg-heading mt-2.5"
            />
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
            className="border border-gray-200 bg-white overflow-x-auto"
          >
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    {t(halaman.kolom.no)}
                  </th>

                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/2">
                    {t(halaman.kolom.deskripsi)}
                  </th>

                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    {t(halaman.kolom.kkni)}
                  </th>
                </tr>
              </thead>

              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                {cplItems.map((item) => (
                  <motion.tr
                    key={item.code}
                    variants={tableRowVariants}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading whitespace-nowrap align-top">
                      {item.code}
                    </td>

                    <td className="py-4 px-5 sm:px-6 text-sm text-body text-justify leading-relaxed align-top">
                      <RichText>{t(item.desc)}</RichText>
                    </td>

                    <td className="py-4 px-5 sm:px-6 text-sm text-body text-justify leading-relaxed align-top">
                      <RichText>{t(item.kkni)}</RichText>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}