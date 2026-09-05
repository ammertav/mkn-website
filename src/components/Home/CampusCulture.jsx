import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Img from "../ui/Img";
import Ormawa from "../../assets/images/beranda/ormawa.jpg"
import Lab from "../../assets/images/fasilitas/lab-akta/lab-akta-1.png"
import Stude from "../../assets/images/fasilitas/student/student.jpeg"
import Perpus from "../../assets/images/fasilitas/perpus/perpus1.png"

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const campusCultureData = [
  {
    id: 1,
    title: "Organisasi Mahasiswa",
    description:
      "Wadah kepemimpinan mahasiswa melalui ikatan mahasiswa dan kegiatan keorganisasian.",
    image:
      Ormawa,
    linkText: "Kenali Pengurus",
    linkHref: "/mahasiswa/organisasi",
  },
  {
    id: 2,
    title: "Laboratorium",
    description:
      "Laboratorium Akta merupakan pusat simulasi taktis bagi mahasiswa Magister Kenotariatan UNISSULA untuk mematangkan keahlian dalam merancang, membuat, hingga membacakan draf akta autentik.",
    image:
      Lab,
    linkText: "Jadwal Laboratorium",
    linkHref: "/fasilitas/laboratorium",
  },
  {
    id: 3,
    title: "Pusat Riset Mahasiswa (SRC)",
    description:
      "Ruang kerja bersama untuk kajian hukum tingkat lanjut.",
    image:
      Stude,
    linkText: "Lihat Kegiatan",
    linkHref: "/fasilitas/student-research-center",
  },
  {
    id: 4,
    title: "Perpustakaan",
    description:
      "Koleksi cetak yang luas serta akses ke basis data hukum internasional.",
    image:
      Perpus,
    linkText: "Jelajahi Katalog",
    linkHref: "/fasilitas/perpustakaan",
  },
];

export default function CampusCulture() {
  return (
    <section className="w-full bg-hero-heading font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
            Fasilitas & Budaya
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {campusCultureData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              viewport={viewportSettings}
              className="flex flex-col group h-full"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden rounded-md">
                <motion.div
                  initial={{
                    filter: "grayscale(100%)",
                  }}
                  whileInView={{
                    filter: "grayscale(0%)",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.12,
                  }}
                  viewport={viewportSettings}
                  className="w-full h-full"
                >
                  <Img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      contrast-110
                      transition-transform
                      duration-500
                      group-hover:scale-105
                      rounded-md
                    "
                  />
                </motion.div>
              </div>

              {/* Card Content */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.3 + index * 0.12,
                }}
                viewport={viewportSettings}
                className="pt-5 flex flex-col flex-grow justify-between"
              >
                <div>
                  <h3 className="font-heading font-normal text-xl sm:text-2xl text-heading leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Link Action */}
                <div className="pt-4 mt-auto">
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center space-x-1 text-xs font-semibold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/link"
                  >
                    <span>{item.linkText}</span>

                    <FiChevronRight className="text-sm transition-transform duration-150 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}