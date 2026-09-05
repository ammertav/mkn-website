import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Img from "../ui/Img";

import Fatiroh from "../../assets/images/testi/fatiroh.png";
import Ismail from "../../assets/images/testi/ismail-fahmi.png";
import Nurizka from "../../assets/images/testi/nurizka-fida.png";
import Wahyu from "../../assets/images/testi/wahyu-noto.png";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const testimonialData = [
  {
    id: 1,
    name: "Fatiroh SH M.HUM M.Kn",
    description:
      "Pendidikan yang menuntut dan pengalaman menangani kasus hukum nyata membekali saya dengan sangat baik untuk berkarier di bidang hukum korporasi.",
    image: Fatiroh,
    role: "Alumni 2018",
    linkHref: "/alumni/andi-wijaya",
  },
  {
    id: 2,
    name: "Ismail Fahmi, SH, MH, M.Kn",
    description:
      "Bimbingan para dosen dan lingkungan yang saling mendukung membuat perjalanan studi hukum saya benar-benar mengubah cara pandang.",
    image: Ismail,
    role: "Alumni 2020",
    linkHref: "/alumni/siti-aminah",
  },
  {
    id: 3,
    name: "Nurizka Firda, S.H., M.Kn., CFP, CWM",
    description:
      "Mengikuti kompetisi peradilan semu memberi saya kepercayaan diri dan keterampilan praktis yang dibutuhkan di ruang sidang.",
    image: Nurizka,
    role: "Mahasiswa Tingkat Akhir",
    linkHref: "/mahasiswa/budi-santoso",
  },
  {
    id: 4,
    name: "Wahyu Noto Wibowo,S.H.,M.Kn",
    description:
      "Institusi yang tidak sekadar mengajarkan hukum, tetapi menanamkan etika, integritas, dan kepedulian pada keadilan kepada setiap mahasiswanya.",
    image: Wahyu,
    role: "Alumni 2015",
    linkHref: "/alumni/diana-putri",
  },
];

export default function Testimoni() {
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
            Kata Mereka
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {testimonialData.map((item, index) => (
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
              <div className="relative w-full aspect-[9/12] md:aspect-[9/16] bg-gray-100 overflow-hidden rounded-xs">
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
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      group-hover:scale-105
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
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-body leading-relaxed italic">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>

                {/* Link */}
                <div className="pt-4 mt-auto">
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center space-x-1 text-xs font-semibold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/link"
                  >
                    <span>{item.role}</span>

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