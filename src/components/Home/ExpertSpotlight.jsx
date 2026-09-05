import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import professorImg from "../../assets/images/dosen/Dr. Nanang Sri Darmadi, S.H., M.H..jpg";
import Img from "../ui/Img";

const viewportSettings = {
  once: true,
  amount: 0.2,
};


export default function ExpertSpotlight() {
  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="bg-white w-full max-w-sm sm:max-w-md">
              <div className="aspect-[9/14] w-full overflow-hidden bg-gray-100 rounded-md">
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
                    delay: 0.2,
                  }}
                  viewport={viewportSettings}
                  className="w-full h-full"
                >
                  <Img
                    src={professorImg}
                    alt="Prof. Dr. Nanang Sri Darmadi, S.H., M.H."
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="lg:col-span-7 flex flex-col justify-center"
          >

            {/* Label */}
            <span
              className="text-xs font-semibold tracking-wider text-primary uppercase block mb-5"
            >
              SOROTAN PAKAR
            </span>

            {/* Quote */}
            <blockquote
              className="font-heading italic text-xl sm:text-2xl lg:text-[26px] text-heading font-normal leading-relaxed"
            >
              &ldquo;Menjadi seorang Notaris bukan sekadar tentang melegalisasi
              dokumen, melainkan tentang menjaga kepastian hukum dan keadilan
              di tengah masyarakat dengan landasan etika profesi yang tak
              tergoyahkan.&rdquo;
            </blockquote>

            {/* Divider */}
            <div
              className="w-full border-b border-gray-200 my-8"
            />

            {/* Identity */}
            <div >
              <h3 className="font-heading font-semibold text-lg text-heading">
                Dr. Nanang Sri Darmadi, S.H., M.H.
              </h3>

              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mt-1">
                KAPRODI MAGISTER KENOTARIATAN
              </p>
            </div>

            {/* Link */}
            <div
              className="mt-8"
            >
              <Link
                to="/staff/faculty-directory"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-heading hover:text-primary uppercase transition-colors group"
              >
                <span>LIHAT DIREKTORI DOSEN</span>

                <FiArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
