import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import faqImage from "../../assets/images/beranda/faq-1.jpeg";
import { useT } from "../../i18n/languageContext";

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

const leftItemVariants = {
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

const rightItemVariants = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const faqData = [
  {
    id: 1,
    category: { id: "Beasiswa", en: "Scholarships" },
    question: {
      id: "Apa saja jenis beasiswa yang tersedia untuk mahasiswa?",
      en: "What scholarships are available for students?",
    },
    answer: {
      id: "Tersedia berbagai program beasiswa seperti Beasiswa Prestasi, Beasiswa Kemitraan, serta bantuan biaya pendidikan bagi mahasiswa yang memenuhi persyaratan akademik maupun non-akademik.",
      en: "Various scholarship schemes are available, such as Academic Achievement Scholarships, Partnership Scholarships, and educational financial assistance for students meeting specific criteria.",
    },
  },
  {
    id: 2,
    category: { id: "Fasilitas", en: "Facilities" },
    question: {
      id: "Apa saja fasilitas yang dapat digunakan oleh mahasiswa?",
      en: "What facilities can students access and utilize?",
    },
    answer: {
      id: "Mahasiswa dapat memanfaatkan perpustakaan, ruang diskusi, laboratorium, akses database hukum, fasilitas akademik, serta berbagai fasilitas pendukung kegiatan pembelajaran.",
      en: "Students have full access to specialized libraries, discussion rooms, authentic deed laboratories, legal databases, modern classrooms, and comprehensive learning amenities.",
    },
  },
  {
    id: 3,
    category: { id: "Kurikulum", en: "Curriculum" },
    question: {
      id: "Bagaimana sistem pembelajaran dan kurikulum yang diterapkan?",
      en: "How is the learning system and curriculum structured?",
    },
    answer: {
      id: "Kurikulum dirancang untuk menggabungkan pemahaman teori dengan praktik melalui perkuliahan, studi kasus, diskusi, simulasi, penelitian, serta kegiatan praktik lapangan.",
      en: "The curriculum combines rigorous theoretical legal foundations with practical exercises, case studies, deed-drafting simulations, research, and field practice.",
    },
  },
  {
    id: 4,
    category: { id: "Praktik", en: "Practical Training" },
    question: {
      id: "Apakah mahasiswa mendapatkan kesempatan magang atau PKL?",
      en: "Do students receive internship or practical training opportunities?",
    },
    answer: {
      id: "Ya. Mahasiswa mendapatkan kesempatan untuk mengikuti praktik kerja lapangan di berbagai institusi seperti kantor hukum, pengadilan, lembaga pemerintahan, maupun organisasi mitra.",
      en: "Yes. Students undertake practical internships at notary/PPAT offices, law firms, courts, land registry offices (BPN), and partner institutions.",
    },
  },
  {
    id: 5,
    category: { id: "Pendaftaran", en: "Admissions" },
    question: {
      id: "Bagaimana prosedur pendaftaran mahasiswa baru?",
      en: "What is the procedure for new student admissions?",
    },
    answer: {
      id: "Pendaftaran dilakukan secara daring melalui jalur penerimaan yang tersedia. Informasi mengenai persyaratan, jadwal, biaya, dan tahapan seleksi dapat dilihat pada halaman penerimaan mahasiswa baru.",
      en: "Admissions are conducted online through the official portal. Details regarding entry requirements, schedules, tuition fees, and selection stages can be viewed on the admissions page.",
    },
  },
];

const teksFaq = {
  judul: {
    id: "Pertanyaan yang Sering Ditanyakan",
    en: "Frequently Asked Questions",
  },
  keteranganGambar: {
    id: "Temukan informasi seputar akademik, fasilitas, pendaftaran, dan kehidupan mahasiswa.",
    en: "Discover comprehensive information on academics, facilities, admissions, and student life.",
  },
};

export default function FAQ() {
  const t = useT();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-hero-heading font-body py-16 sm:py-20 lg:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="
            flex flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-6
            pb-7
            border-b border-gray-200
          "
        >
          <motion.div
            variants={leftItemVariants}
            className="max-w-2xl"
          >
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-[42px] font-heading font-normal text-heading leading-tight">
              {t(teksFaq.judul)}
            </h2>
          </motion.div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-12
            gap-10
            lg:gap-16
            pt-10
            lg:pt-14
            items-start
          "
        >

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
            className="md:col-span-7 my-auto"
          >
            <div className="relative w-full overflow-hidden rounded-md">

              {/* Image Reveal */}
              <motion.img
                src={faqImage}
                alt="Mahasiswa fakultas hukum sedang berdiskusi"
                initial={{
                  opacity: 0,
                  scale: 1.08,
                  filter: "grayscale(100%) blur(4px)",
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
                className="
                  block
                  w-full
                  h-auto
                  object-contain
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-105
                "
              />

              {/* Image Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                viewport={viewportSettings}
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Image Caption */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
              >
                <motion.div
                  variants={leftItemVariants}
                  className="w-10 h-px bg-white/70 mb-4"
                />

                <motion.p
                  variants={leftItemVariants}
                  className="
                    text-white
                    text-sm
                    sm:text-base
                    font-heading
                    leading-relaxed
                    max-w-sm
                  "
                >
                  {t(teksFaq.keteranganGambar)}
                </motion.p>
              </motion.div>

            </div>
          </motion.div>

          {/* ================= QUESTIONS ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="md:col-span-5 lg:pl-2"
          >
            <div className="divide-y divide-gray-200 border-t border-gray-200">

              {faqData.map((item) => {
                const isOpen = openFAQ === item.id;

                return (
                  <motion.article
                    key={item.id}
                    variants={rightItemVariants}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={isOpen}
                      className="
                        w-full
                        text-left
                        py-7
                        sm:py-8
                        group
                      "
                    >
                      <div className="flex items-start gap-5 sm:gap-8">

                        {/* Number */}
                        <motion.span
                          animate={{
                            color: isOpen ? "#8B0000" : undefined,
                          }}
                          className={`
                            shrink-0
                            pt-1
                            text-xs
                            font-semibold
                            tracking-wider
                            transition-colors
                            duration-300
                            ${
                              isOpen
                                ? "text-primary"
                                : "text-gray-300 group-hover:text-primary"
                            }
                          `}
                        >
                          {String(item.id).padStart(2, "0")}
                        </motion.span>

                        {/* Question */}
                        <div className="flex-1 min-w-0">

                          {/* Category */}
                          <span
                            className="
                              text-[10px]
                              sm:text-xs
                              font-bold
                              tracking-[0.16em]
                              text-primary
                              uppercase
                            "
                          >
                            {t(item.category)}
                          </span>

                          {/* Question */}
                          <h3
                            className={`
                              mt-2.5
                              font-heading
                              font-normal
                              text-lg
                              sm:text-xl
                              lg:text-[22px]
                              leading-snug
                              transition-colors
                              duration-300
                              ${
                                isOpen
                                  ? "text-primary"
                                  : "text-heading group-hover:text-primary"
                              }
                            `}
                          >
                            {t(item.question)}
                          </h3>

                          {/* Answer */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeOut",
                                }}
                                className="overflow-hidden"
                              >
                                <motion.p
                                  initial={{
                                    opacity: 0,
                                    y: -8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    delay: 0.05,
                                  }}
                                  className="
                                    pt-4
                                    pr-4
                                    text-sm
                                    sm:text-[15px]
                                    text-gray-500
                                    leading-7
                                    max-w-2xl
                                  "
                                >
                                  {t(item.answer)}
                                </motion.p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Plus */}
                        <motion.span
                          animate={{
                            rotate: isOpen ? 45 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className="
                            shrink-0
                            flex
                            items-center
                            justify-center
                            w-8
                            h-8
                            mt-0.5
                            border
                            border-gray-200
                            rounded-full
                            transition-colors
                            duration-300
                            group-hover:border-primary
                          "
                        >
                          <FiPlus
                            className={`
                              text-sm
                              transition-colors
                              duration-300
                              ${
                                isOpen
                                  ? "text-primary"
                                  : "text-gray-400 group-hover:text-primary"
                              }
                            `}
                          />
                        </motion.span>

                      </div>
                    </button>
                  </motion.article>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}