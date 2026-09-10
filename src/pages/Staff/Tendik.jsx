import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ZoomableImg from "../../components/ui/ZoomableImg";
import { tenagaKependidikan } from "../../data/profil/tendikData";
import { useT } from "../../i18n/languageContext";

/** Gelar akademik yang diabaikan saat menyusun inisial pengganti foto. */
const GELAR = new Set([
  "dr", "prof", "hc", "drs", "dra", "h", "hj", "ir",
  "sh", "mh", "mkn", "spd", "se", "skom",
]);

function inisial(nama) {
  const kata = nama
    .replace(/[.,]/g, " ")
    .split(/\s+/)
    .filter((k) => k && !GELAR.has(k.toLowerCase()));
  return kata.slice(0, 2).map((k) => k[0]).join("").toUpperCase() || "?";
}

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
      staggerChildren: 0.08,
      delayChildren: 0.05,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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

const tendikText = {
  metaTitle: {
    id: "Tenaga Kependidikan | MKn UNISSULA",
    en: "Administrative & Support Staff | MKn UNISSULA",
  },
  metaDesc: {
    id: "Direktori Tenaga Kependidikan Program Studi Magister Kenotariatan (MKn) UNISSULA: kepala tata usaha, direktur laboratorium dan perpustakaan, serta bidang akademik, keuangan, promosi & humas, dan sarana prasarana.",
    en: "Directory of Administrative & Support Staff of Master of Notarial Law Programme (MKn) UNISSULA: Head of Administration, Lab & Library Directors, and Academic, Finance, PR, & Facilities Staff.",
  },
  badge: {
    id: "STAF",
    en: "STAFF",
  },
  title: {
    id: "Tenaga Kependidikan",
    en: "Administrative & Support Staff",
  },
  desc: {
    id: "Tenaga kependidikan menopang penyelenggaraan akademik program studi: ketatausahaan dan layanan administratif, pengelolaan laboratorium akta dan perpustakaan, serta empat bidang pelaksana — akademik, keuangan, promosi & humas, dan sarana prasarana.",
    en: "Administrative and support staff facilitate the academic delivery of the study programme: secretariat and administrative services, deed laboratory and library management, and four operational divisions — academic, financial, promotion & PR, and facilities.",
  },
  dirTitle: {
    id: "Direktori Tenaga Kependidikan",
    en: "Support Staff Directory",
  },
  tugasTitle: {
    id: "Pembagian Tugas",
    en: "Role & Task Distribution",
  },
  colJabatan: {
    id: "JABATAN",
    en: "POSITION",
  },
  colPelaksana: {
    id: "PELAKSANA",
    en: "STAFF MEMBER",
  },
  colTugas: {
    id: "LINGKUP TUGAS",
    en: "SCOPE OF DUTIES",
  },
};

export default function Tendik() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(tendikText.metaTitle)}</title>
        <meta
          name="description"
          content={t(tendikText.metaDesc)}
        />
      </Helmet>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 space-y-10">
        {/* Kepala halaman */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2"
          >
            {t(tendikText.badge)}
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal"
          >
            {t(tendikText.title)}
          </motion.h1>
          <motion.div variants={lineVariants} className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <motion.p
            variants={itemVariants}
            className="text-base text-body leading-relaxed max-w-3xl"
          >
            {t(tendikText.desc)}
          </motion.p>
        </motion.div>

        {/* Direktori — kartu berfoto, dikelompokkan mengikuti struktur organisasi */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              {t(tendikText.dirTitle)}
            </h2>
            <motion.div variants={lineVariants} className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <motion.div
            variants={listContainerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {tenagaKependidikan.map((orang, idx) => (
              <motion.div
                key={`${orang.name}-${idx}`}
                variants={cardVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="border border-gray-200 bg-white rounded-xs shadow-2xs p-5 flex gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-20 h-24 rounded-xs overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  {orang.photo ? (
                    <ZoomableImg
                      src={orang.photo}
                      alt={orang.name}
                      caption={`${orang.name} — ${t(orang.jabatan)}`}
                      className="w-full h-full object-cover object-top rounded-md hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="font-heading text-lg font-bold text-gray-400">
                      {inisial(orang.name)}
                    </span>
                  )}
                </div>

                <div className="min-w-0 space-y-1.5">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary block leading-snug">
                    {t(orang.jabatan)}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-heading leading-snug">
                    {orang.name}
                  </h3>
                  <p className="text-xs text-body leading-relaxed">{t(orang.tugas)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Ringkasan tugas per jabatan */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              {t(tendikText.tugasTitle)}
            </h2>
            <motion.div variants={lineVariants} className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <motion.div variants={itemVariants} className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-64">
                    {t(tendikText.colJabatan)}
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    {t(tendikText.colPelaksana)}
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    {t(tendikText.colTugas)}
                  </th>
                </tr>
              </thead>
              <motion.tbody
                variants={listContainerVariants}
                className="divide-y divide-gray-100 text-sm"
              >
                {tenagaKependidikan.map((orang, idx) => (
                  <motion.tr
                    key={`${orang.name}-${idx}`}
                    variants={rowVariants}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading align-top leading-snug">
                      {t(orang.jabatan)}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body align-top leading-snug">
                      {orang.name}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body align-top leading-relaxed">
                      {t(orang.tugas)}
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
