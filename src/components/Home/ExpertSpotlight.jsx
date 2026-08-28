import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import professorImg from "../../assets/images/dosen/Prof. Dr. H. Ahmad Fauzan, S.H., Sp.N., M.Kn..png";

export default function ExpertSpotlight() {
  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photo with Border Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="p-2.5 sm:p-3.5 bg-white border border-gray-200 shadow-sm w-full max-w-sm sm:max-w-md">
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <img
                  src={professorImg}
                  alt="Prof. Dr. Budi Santoso, S.H., M.Kn."
                  className="w-full h-full object-cover object-top grayscale contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Expert Spotlight & Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Label */}
            <span className="text-xs font-semibold tracking-wider text-primary uppercase block mb-5">
              SOROTAN PAKAR
            </span>

            {/* Main Quote */}
            <blockquote className="font-heading italic text-xl sm:text-2xl lg:text-[26px] text-heading font-normal leading-relaxed">
              &ldquo;Menjadi seorang Notaris bukan sekadar tentang melegalisasi dokumen, melainkan
              tentang menjaga kepastian hukum dan keadilan di tengah masyarakat dengan landasan etika
              profesi yang tak tergoyahkan.&rdquo;
            </blockquote>

            {/* Subtle Divider */}
            <div className="w-full border-b border-gray-200 my-8" />

            {/* Lecturer Identity */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-heading">
                Prof. Dr. Budi Santoso, S.H., M.Kn.
              </h3>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mt-1">
                GURU BESAR HUKUM PERDATA
              </p>
            </div>

            {/* Link to Faculty Directory */}
            <div className="mt-8">
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
