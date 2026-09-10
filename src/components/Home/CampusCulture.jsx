import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Img from "../ui/Img";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";

import Ormawa from "../../assets/images/beranda/ormawa.jpg";
import Lab from "../../assets/images/fasilitas/lab-akta/lab-akta-1.png";
import Stude from "../../assets/images/fasilitas/student/src-1.png";
import Perpus from "../../assets/images/fasilitas/perpus/perpus-1.png";

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

const itemVariants = {
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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const campusCultureData = [
  {
    id: 1,
    title: { id: "Organisasi Mahasiswa", en: "Student Organisations" },
    description: {
      id: "Wadah kepemimpinan mahasiswa melalui ikatan mahasiswa dan kegiatan keorganisasian.",
      en: "A forum for student leadership through student associations and organizational activities.",
    },
    image: Ormawa,
    linkText: { id: "Kenali Pengurus", en: "Meet the Team" },
    linkHref: "/mahasiswa/organisasi",
  },
  {
    id: 2,
    title: { id: "Laboratorium", en: "Laboratories" },
    description: {
      id: "Laboratorium Akta merupakan pusat simulasi taktis bagi mahasiswa Magister Kenotariatan UNISSULA untuk mematangkan keahlian dalam merancang, membuat, hingga membacakan draf akta autentik.",
      en: "The Deed Laboratory is a tactical simulation hub for UNISSULA Master of Notarial Law students to hone their skills in drafting, preparing, and executing authentic deeds.",
    },
    image: Lab,
    linkText: { id: "Jadwal Laboratorium", en: "Laboratory Schedule" },
    linkHref: "/fasilitas/laboratorium",
  },
  {
    id: 3,
    title: { id: "Pusat Riset Mahasiswa (SRC)", en: "Student Research Center (SRC)" },
    description: {
      id: "Ruang kerja bersama untuk kajian hukum tingkat lanjut.",
      en: "A collaborative workspace for advanced legal studies and research.",
    },
    image: Stude,
    linkText: { id: "Lihat Kegiatan", en: "View Activities" },
    linkHref: "/fasilitas/student-research-center",
  },
  {
    id: 4,
    title: { id: "Perpustakaan", en: "Library" },
    description: {
      id: "Koleksi cetak yang luas serta akses ke basis data hukum internasional.",
      en: "An extensive collection of legal literature with access to international legal databases.",
    },
    image: Perpus,
    linkText: { id: "Jelajahi Katalog", en: "Explore Catalogue" },
    linkHref: "/fasilitas/perpustakaan",
  },
];

export default function CampusCulture() {
  const t = useT();
  const ui = useUi();

  return (
    <section className="w-full bg-hero-heading font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
              {ui("facilitiesAndCulture")}
            </h2>
          </motion.div>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start"
        >
          {campusCultureData.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="flex flex-col group h-full"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden rounded-md">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    filter: "grayscale(100%) blur(3px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "grayscale(0%) blur(0px)",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  viewport={viewportSettings}
                  className="w-full h-full"
                >
                  <Img
                    src={item.image}
                    alt={t(item.title)}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      contrast-110
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                      rounded-md
                    "
                  />
                </motion.div>
              </div>

              {/* Card Content */}
              <motion.div
                variants={containerVariants}
                className="pt-5 flex flex-col flex-grow justify-between"
              >
                <div>
                  {/* Title */}
                  <motion.div variants={itemVariants}>
                    <h3 className="font-heading font-normal text-xl sm:text-2xl text-heading leading-snug group-hover:text-primary transition-colors">
                      {t(item.title)}
                    </h3>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="mt-3 text-sm text-body leading-relaxed"
                  >
                    {t(item.description)}
                  </motion.p>
                </div>

                {/* Link Action */}
                <motion.div
                  variants={itemVariants}
                  className="pt-4 mt-auto"
                >
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center space-x-1 text-xs font-semibold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/link"
                  >
                    <span>{t(item.linkText)}</span>

                    <FiChevronRight className="text-sm transition-transform duration-150 group-hover/link:translate-x-0.5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}