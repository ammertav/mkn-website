import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import faqImage from "../../assets/images/faq/faq.jpg";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const faqData = [
  {
    id: 1,
    category: "Beasiswa",
    question: "Apa saja jenis beasiswa yang tersedia untuk mahasiswa?",
    answer:
      "Tersedia berbagai program beasiswa seperti Beasiswa Prestasi, Beasiswa Kemitraan, serta bantuan biaya pendidikan bagi mahasiswa yang memenuhi persyaratan akademik maupun non-akademik.",
  },
  {
    id: 2,
    category: "Fasilitas",
    question: "Apa saja fasilitas yang dapat digunakan oleh mahasiswa?",
    answer:
      "Mahasiswa dapat memanfaatkan perpustakaan, ruang diskusi, laboratorium, akses database hukum, fasilitas akademik, serta berbagai fasilitas pendukung kegiatan pembelajaran.",
  },
  {
    id: 3,
    category: "Kurikulum",
    question: "Bagaimana sistem pembelajaran dan kurikulum yang diterapkan?",
    answer:
      "Kurikulum dirancang untuk menggabungkan pemahaman teori dengan praktik melalui perkuliahan, studi kasus, diskusi, simulasi, penelitian, serta kegiatan praktik lapangan.",
  },
  {
    id: 4,
    category: "Praktik",
    question: "Apakah mahasiswa mendapatkan kesempatan magang atau PKL?",
    answer:
      "Ya. Mahasiswa mendapatkan kesempatan untuk mengikuti praktik kerja lapangan di berbagai institusi seperti kantor hukum, pengadilan, lembaga pemerintahan, maupun organisasi mitra.",
  },
  {
    id: 5,
    category: "Pendaftaran",
    question: "Bagaimana prosedur pendaftaran mahasiswa baru?",
    answer:
      "Pendaftaran dilakukan secara daring melalui jalur penerimaan yang tersedia. Informasi mengenai persyaratan, jadwal, biaya, dan tahapan seleksi dapat dilihat pada halaman penerimaan mahasiswa baru.",
  },
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full bg-white font-body py-16 sm:py-20 lg:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Bantuan & Informasi
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl md:text-[42px] font-heading font-normal text-heading leading-tight">
              Pertanyaan yang
              <br className="hidden sm:block" />
              Sering Ditanyakan
            </h2>
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-10
          lg:gap-16
          pt-10
          lg:pt-14
          items-start
        ">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={viewportSettings}
            className="lg:col-span-5"
          >
            <div className="
              relative
              overflow-hidden
              rounded-md
              h-[420px]
              sm:h-[500px]
              lg:h-[650px]
              group
            ">
              <motion.img
                src={faqImage}
                alt="Mahasiswa fakultas hukum sedang berdiskusi"
                initial={{
                  filter: "grayscale(100%)",
                  scale: 1.06,
                }}
                whileInView={{
                  filter: "grayscale(0%)",
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Image overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
              " />

              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="w-10 h-px bg-white/70 mb-4" />

                <p className="
                  text-white
                  text-sm
                  sm:text-base
                  font-heading
                  leading-relaxed
                  max-w-sm
                ">
                  Temukan informasi seputar akademik, fasilitas,
                  pendaftaran, dan kehidupan mahasiswa.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= QUESTIONS ================= */}
          <div className="lg:col-span-7 lg:pl-2">

            <div className="divide-y divide-gray-200 border-t border-gray-200">

              {faqData.map((item, index) => {
                const isOpen = openFAQ === item.id;

                return (
                  <motion.article
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    viewport={viewportSettings}
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
                        <span className={`
                          shrink-0
                          pt-1
                          text-xs
                          font-semibold
                          tracking-wider
                          transition-colors
                          duration-300
                          ${isOpen
                            ? "text-primary"
                            : "text-gray-300 group-hover:text-primary"
                          }
                        `}>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}
                        <div className="flex-1 min-w-0">

                          <span className="
                            text-[10px]
                            sm:text-xs
                            font-bold
                            tracking-[0.16em]
                            text-primary
                            uppercase
                          ">
                            {item.category}
                          </span>

                          <h3 className={`
                            mt-2.5
                            font-heading
                            font-normal
                            text-lg
                            sm:text-xl
                            lg:text-[22px]
                            leading-snug
                            transition-colors
                            duration-300
                            ${isOpen
                              ? "text-primary"
                              : "text-heading group-hover:text-primary"
                            }
                          `}>
                            {item.question}
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
                                <p className="
                                  pt-4
                                  pr-4
                                  text-sm
                                  sm:text-[15px]
                                  text-gray-500
                                  leading-7
                                  max-w-2xl
                                ">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Plus */}
                        <span className="
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
                          transition-all
                          duration-300
                          group-hover:border-primary
                        ">
                          <FiPlus
                            className={`
                              text-sm
                              transition-all
                              duration-300
                              ${isOpen
                                ? "rotate-45 text-primary"
                                : "text-gray-400 group-hover:text-primary"
                              }
                            `}
                          />
                        </span>

                      </div>
                    </button>
                  </motion.article>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
