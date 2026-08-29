import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full relative">
      {/* Background Image Container */}
      <div className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[780px] w-full flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Grand Law Library Background Photo */}
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=85"
          alt="Magister Kenotariatan UNISSULA Library"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-105"
        />

        {/* Subtle Dark / Warm Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          
          {/* Classical University / Law Landmark Icon in Circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[1.5px] border-white/90 flex items-center justify-center bg-black/20 backdrop-blur-[2px] mb-8 sm:mb-10 shadow-lg">
            <svg
              className="w-10 h-10 sm:w-11 sm:h-11 text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Roof / Pediment */}
              <path d="M12 2L2 7v2.5h20V7L12 2z" />
              {/* Columns */}
              <rect x="4.5" y="11" width="2.5" height="7.5" rx="0.5" />
              <rect x="10.75" y="11" width="2.5" height="7.5" rx="0.5" />
              <rect x="17" y="11" width="2.5" height="7.5" rx="0.5" />
              {/* Base */}
              <rect x="2" y="19.5" width="20" height="2.5" rx="0.5" />
            </svg>
          </div>

          {/* Main Title: MAGISTER KENOTARIATAN */}
          <h1 className="font-heading font-extrabold text-hero-heading text-4xl sm:text-6xl md:text-7xl tracking-normal uppercase leading-[1.08] drop-shadow-md">
            MAGISTER <br />
            KENOTARIATAN
          </h1>

          {/* Subtitle / Tagline */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-hero-description font-normal max-w-2xl leading-relaxed tracking-wide drop-shadow-sm">
            Fostering legal excellence through rigorous scholarship, ethical practice, and
            an unwavering commitment to justice.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8 sm:mt-10">
            <Link
              to="/akademik"
              className="inline-block bg-white hover:bg-neutral-100 text-primary font-semibold text-xs sm:text-sm px-7 sm:px-9 py-3.5 rounded-none shadow-md transition-transform duration-200 hover:scale-105 tracking-wide"
            >
              Explore the Program
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Accreditation & Stats Bar */}
      <div className="w-full bg-white border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 py-4 sm:py-5">
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              AKREDITASI UNGGUL BAN-PT
            </span>
          </div>
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              SERTIFIKASI INTERNASIONAL ACQUIN
            </span>
          </div>
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              500+ ALUMNI BERKARIR GLOBAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
