import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import professorImg from "../../assets/images/beranda/expert.png";
import Img from "../ui/Img";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

// Animation variants for staggering text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each text element animating in
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const sambutan = {
  p1: {
    id: "Selamat datang di situs resmi Program Studi Magister Kenotariatan. Puji syukur ke hadirat Allah SWT atas segala rahmat dan karunia-Nya sehingga kita senantiasa diberikan kesempatan untuk terus berkontribusi dalam pengembangan ilmu hukum kenotariatan.",
    en: "Welcome to the official website of the Master of Notarial Law Study Programme. All praise be to Allah SWT for His blessings and grace, enabling us to continually contribute to the advancement of notarial jurisprudence.",
  },
  p2: {
    id: "Program Studi Magister Kenotariatan berkomitmen tinggi menyelenggarakan pendidikan kenotariatan yang unggul dan relevan dengan dinamika hukum masyarakat. Melalui kurikulum yang komprehensif, kami berupaya mencetak lulusan calon notaris/PPAT yang tidak hanya menguasai keilmuan dan kompetensi profesional, tetapi juga menjunjung tinggi integritas serta tanggung jawab moral dalam memberikan kepastian hukum melalui akta autentik.",
    en: "The Master of Notarial Law Study Programme is deeply committed to providing excellent notarial education that is closely aligned with societal legal dynamics. Through a comprehensive curriculum, we strive to produce future notaries and land deed officials (PPAT) who not only possess profound legal knowledge and professional skills, but also uphold the highest standards of integrity and moral responsibility in ensuring legal certainty through authentic deeds.",
  },
  p3: {
    id: "Kami terus memperkuat kualitas pendidikan, penelitian, pengabdian masyarakat, serta kolaborasi strategis dengan berbagai pihak untuk merespons kompleksitas kebutuhan pelayanan hukum keperdataan di era transformasi digital.",
    en: "We continuously enhance the quality of education, research, community service, and strategic partnerships to address the complex demands of civil legal services in the era of digital transformation.",
  },
  p4: {
    id: "Semoga informasi yang disajikan dalam website ini memberikan gambaran komprehensif mengenai profil, program studi, kegiatan akademik, serta capaian strategis Magister Kenotariatan. Mari bersama-sama membangun generasi notaris yang berilmu dan berintegritas. Terima kasih atas kepercayaan dan dukungan Anda.",
    en: "We hope this website provides comprehensive insights into our profile, academic curriculum, student activities, and strategic achievements. Together, let us cultivate a knowledgeable and ethical generation of notaries. Thank you for your trust and continuous support.",
  },
  jabatan: {
    id: "KAPRODI MAGISTER KENOTARIATAN",
    en: "HEAD OF MASTER OF NOTARIAL LAW",
  },
  direktoriDosen: {
    id: "LIHAT DIREKTORI DOSEN",
    en: "VIEW FACULTY DIRECTORY",
  },
};

export default function ExpertSpotlight() {
  const t = useT();
  const ui = useUi();

  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-7 flex flex-col justify-center order-2 md:order-none"
          >
            {/* Label */}
            <motion.span
              variants={itemVariants}
              className="text-xs font-semibold tracking-wider text-primary uppercase block mb-5"
            >
              {ui("headOfProgrammeWelcome")}
            </motion.span>

            {/* Sambutan Text */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-sm sm:text-base text-gray-700 font-normal leading-relaxed text-justify"
            >
              <p className="font-semibold text-heading">
                Assalamu’alaikum Warahmatullahi Wabarakatuh.
              </p>
              <p>
                {t(sambutan.p1)}
              </p>
              <p>
                {t(sambutan.p2)}
              </p>
              <p>
                {t(sambutan.p3)}
              </p>
              <p>
                {t(sambutan.p4)}
              </p>
              <p className="font-semibold text-heading pt-2">
                Wassalamu’alaikum Warahmatullahi Wabarakatuh.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="w-full border-b border-gray-200 my-8" />

            {/* Identity */}
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-semibold text-lg text-heading">
                Dr. Nanang Sri Darmadi, S.H., M.H.
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mt-1">
                {t(sambutan.jabatan)}
              </p>
            </motion.div>

            {/* Link */}
            <motion.div variants={itemVariants} className="mt-12 sm:mt-16 flex justify-start">
              <Link
                to="/staff/faculty-directory"
                className="inline-flex gap-2 text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/all"
              >
                <span>{t(sambutan.direktoriDosen)}</span>
                <FiArrowRight className="text-sm transition-transform duration-200 group-hover/all:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-10 lg:mt-0 order-1 md:order-none">
            <div className="relative w-full max-w-sm sm:max-w-md lg:sticky lg:top-10">

              {/* Continuous Floating Effect - Now Animated */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-[9/10] w-full overflow-hidden hover:scale-105 transition-all transform duration-500 rounded-md"
              >
                {/* Reveal Animation */}
                <motion.div
                  initial={{
                    scale: 1.1,
                    filter: "grayscale(100%) blur(4px)"
                  }}
                  whileInView={{
                    scale: 1,
                    filter: "grayscale(0%) blur(0px)"
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
                    src={professorImg}
                    alt="Dr. Nanang Sri Darmadi, S.H., M.H."
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      ease-out
                      hover:scale-110
                    "
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}