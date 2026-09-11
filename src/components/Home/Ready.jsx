import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Img from "../ui/Img";
import bgKampus from "../../assets/images/gedung.jpg";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";

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
    y: 30,
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

const teksReady = {
  judul: {
    id: "Siap Memulai Langkah Menjadi Notaris & PPAT?",
    en: "Ready to Begin Your Journey as a Notary & PPAT?",
  },
  deskripsi: {
    id: "Bergabunglah dengan Program Studi Magister Kenotariatan dan kembangkan keahlian hukum profesional Anda bersama para ahli dan praktisi unggul.",
    en: "Join the Master of Notarial Law Study Programme and cultivate your professional legal expertise alongside distinguished scholars and leading practitioners.",
  },
};

export default function Ready() {
  const t = useT();
  const ui = useUi();

  return (
    <section className="w-full bg-white font-body py-16 sm:py-20 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="
            relative
            w-full
            bg-neutral-900
            overflow-hidden
            rounded-xs
            py-16
            sm:py-24
            px-6
            sm:px-12
            text-center
            flex
            flex-col
            items-center
            justify-center
          "
        >
          {/* Background Image */}
          <motion.div
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
              duration: 1.6,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
            className="absolute inset-0 w-full h-full"
          >
            <Img
              src={bgKampus}
              alt=""
              aria-hidden="true"
              className="
                w-full
                h-full
                object-cover
                object-center
                rounded-md
              "
            />
          </motion.div>

          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={viewportSettings}
            className="absolute inset-0 bg-neutral-900/80"
          />

          {/* Gradient Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.45,
            }}
            viewport={viewportSettings}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"
          />

          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative z-10 max-w-3xl mx-auto space-y-6"
          >
            {/* Judul */}
            <motion.h2
              variants={itemVariants}
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-heading
                font-normal
                text-white
                leading-tight
              "
            >
              {t(teksReady.judul)}
            </motion.h2>

            {/* Deskripsi */}
            <motion.p
              variants={itemVariants}
              className="
                text-base
                sm:text-lg
                text-gray-300
                leading-relaxed
                max-w-2xl
                mx-auto
              "
            >
              {t(teksReady.deskripsi)}
            </motion.p>

            {/* Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <Link
                to="/pendaftaran"
                className="
                  inline-flex
                  items-center
                  space-x-2
                  px-8
                  py-3.5
                  bg-primary
                  hover:bg-[#680000]
                  text-white
                  text-xs
                  font-bold
                  tracking-wider
                  uppercase
                  transition-all
                  duration-300
                  rounded-xs
                  group
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-0.5
                "
              >
                <span>{ui("applyNow")}</span>

                <FiArrowRight
                  className="
                    text-sm
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}