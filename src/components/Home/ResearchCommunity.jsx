import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function ResearchCommunity() {
  return (
    <section className="w-full bg-white font-body">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
          Penelitian & Pengabdian Dosen
        </h2>
      </div>

      {/* 2-Column Split Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* Card 1: Legal Scholarship & Publications */}
        <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 overflow-hidden group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
            alt="Legal Scholarship and Publications"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark Charcoal / Black Vignette Overlay */}
          <div className="absolute inset-0 bg-neutral-900/75 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10">
            {/* Red Accent Bar */}
            <div className="w-10 h-1 bg-primary mb-6" />

            <h3 className="font-heading font-normal text-2xl sm:text-3xl text-white leading-snug">
              Legal Scholarship & <br />
              Publications
            </h3>

            <p className="mt-4 text-sm sm:text-base text-hero-description leading-relaxed max-w-lg">
              Exploring advancing jurisprudential thought through rigorous peer-reviewed research and
              scholarly monographs authored by our distinguished faculty.
            </p>

            <Link
              to="/informasi/penelitian-dosen"
              className="mt-8 inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-hero-description group/btn transition-colors"
            >
              <span>Access Journals</span>
              <FiArrowRight className="text-base transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Card 2: Community Legal Empowerment */}
        <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 overflow-hidden group">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
            alt="Community Legal Empowerment"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Deep Maroon / Crimson Overlay */}
          <div className="absolute inset-0 bg-overlay/85 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10">
            {/* White Accent Bar */}
            <div className="w-10 h-1 bg-white mb-6" />

            <h3 className="font-heading font-normal text-2xl sm:text-3xl text-white leading-snug">
              Community Legal <br />
              Empowerment
            </h3>

            <p className="mt-4 text-sm sm:text-base text-hero-description leading-relaxed max-w-lg">
              Translating legal theory into social impact through pro-bono consultation, legal
              literacy programs, and community advocacy initiatives.
            </p>

            <Link
              to="/informasi/pengabdian-dosen"
              className="mt-8 inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-hero-description group/btn transition-colors"
            >
              <span>View Impact Reports</span>
              <FiArrowRight className="text-base transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
