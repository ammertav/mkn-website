import { useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

import logoUnissula from "../../assets/images/logo-unissula-crest.png";
import Img from "../ui/Img";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section className="w-full relative">
      {/* Background Video Container */}
      <div className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[780px] w-full flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          src="/videos/vid-hero-home.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-105"
        />

        {/* Subtle Dark / Warm Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          
          {/* UNISSULA Crest */}
          <Img
            eager
            src={logoUnissula}
            alt="Lambang UNISSULA"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-8 sm:mb-10 drop-shadow-lg"
          />

          {/* Main Title: MAGISTER KENOTARIATAN */}
          <h1 className="font-heading font-extrabold text-hero-heading tracking-normal uppercase leading-[1.08] drop-shadow-md">
            <span className="block text-3xl sm:text-5xl md:text-6xl">
              MAGISTER KENOTARIATAN
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl tracking-wide">
              UNISSULA
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-hero-description font-normal max-w-2xl leading-relaxed tracking-wide drop-shadow-sm">
            Fostering legal excellence through rigorous scholarship, ethical practice, and
            an unwavering commitment to justice.
          </p>

        </div>

        {/* Video Play / Pause Control */}
        <button
          type="button"
          onClick={toggleVideo}
          aria-label={isPlaying ? "Jeda video latar" : "Putar video latar"}
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 w-11 h-11 rounded-full border border-white/70 bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200 cursor-pointer"
        >
          {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5 ml-0.5" />}
        </button>
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
