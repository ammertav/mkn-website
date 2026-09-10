import logoUnissula from "../../assets/images/logo-unissula-crest.png";
import Img from "../ui/Img";
import Bg from "../../assets/images/beranda/hero.jpg";
import { useT } from "../../i18n/languageContext";

const heroText = {
  tagline: {
    id: "Unggul, Berintegritas dan Berdaya Saing Global",
    en: "Excellence, Integrity, and Global Competitiveness",
  },
  akreditasiBanPt: {
    id: "AKREDITASI UNGGUL BAN-PT",
    en: "BAN-PT ACCREDITATION: UNGGUL (EXCELLENT)",
  },
  akreditasiAsic: {
    id: "AKREDITASI INTERNASIONAL ASIC DENGAN PREDIKAT PREMIER",
    en: "ASIC PREMIER INTERNATIONAL ACCREDITATION",
  },
  diversifikasiAlumni: {
    id: "DIVERSIFIKASI PROFESI ALUMNI",
    en: "ALUMNI CAREER DIVERSIFICATION",
  },
};

export default function Hero() {
  const t = useT();

  return (
    <section className="w-full relative">
      {/* =========================================================
          HERO
      ========================================================== */}
      <div className="hero-viewport relative w-full flex items-center justify-center bg-neutral-900 overflow-hidden">
        <img className="absolute inset-0 w-full h-full object-cover" src={Bg} alt="" />

        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          {/* UNISSULA Crest */}
          <Img
            eager
            src={logoUnissula}
            alt="Lambang UNISSULA"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-56 md:h-56 object-contain mb-8 sm:mb-10 drop-shadow-lg"
          />

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base md:text-3xl font-sans text-white max-w-3xl leading-relaxed tracking-wide drop-shadow-sm">
            {t(heroText.tagline)}
          </p>
        </div>
      </div>

      {/* =========================================================
          ACCREDITATION & STATS BAR
      ========================================================== */}
      <div className="w-full bg-white border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 py-4 sm:py-5">
          {/* Accreditation */}
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              {t(heroText.akreditasiBanPt)}
            </span>
          </div>

          {/* ACQUIN */}
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              {t(heroText.akreditasiAsic)}
            </span>
          </div>

          {/* Alumni */}
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              {t(heroText.diversifikasiAlumni)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}