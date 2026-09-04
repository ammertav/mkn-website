import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

import logoUnissula from "../../assets/images/logo-unissula-crest.png";
import Img from "../ui/Img";

export default function Hero() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Only autoplay if the user has not manually paused the video
          if (!isUserPaused) {
            const playPromise = video.play();

            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log(
                  "Autoplay with sound was blocked by the browser:",
                  error
                );
              });
            }
          }
        } else {
          // Pause when Hero is outside the viewport
          video.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isUserPaused]);

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      // User explicitly clicked Play
      setIsUserPaused(false);

      try {
        await video.play();
      } catch (error) {
        console.error("Unable to play video:", error);
      }
    } else {
      // User explicitly clicked Pause
      setIsUserPaused(true);
      video.pause();
    }
  };

  return (
    <section className="w-full relative">
      {/* =========================================================
          HERO
      ========================================================== */}
      <div className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[780px] w-full flex items-center justify-center bg-neutral-900 overflow-hidden">

        {/* =====================================================
            BACKGROUND VIDEO
        ====================================================== */}
        <video
          ref={videoRef}
          src="/videos/profile-mkn-terbaru-4.mp4"
          autoPlay
          
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-105"
        />

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
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-8 sm:mb-10 drop-shadow-lg"
          />

          {/* Main Title */}
          <h1 className="font-heading font-extrabold text-hero-heading tracking-normal uppercase leading-[1.08] drop-shadow-md">
            <span className="block text-3xl sm:text-5xl md:text-6xl">
              MAGISTER KENOTARIATAN
            </span>

            <span className="block text-2xl sm:text-4xl md:text-5xl tracking-wide">
              FAKULTAS HUKUM UNISSULA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-hero-description font-normal max-w-2xl leading-relaxed tracking-wide drop-shadow-sm">
            Fostering legal excellence through rigorous scholarship, ethical
            practice, and an unwavering commitment to justice.
          </p>
        </div>

        {/* =====================================================
            VIDEO PLAY / PAUSE BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={toggleVideo}
          aria-label={
            isPlaying ? "Jeda video latar" : "Putar video latar"
          }
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 w-11 h-11 rounded-full border border-white/70 bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200 cursor-pointer"
        >
          {isPlaying ? (
            <FiPause className="w-5 h-5" />
          ) : (
            <FiPlay className="w-5 h-5 ml-0.5" />
          )}
        </button>
      </div>

      {/* =========================================================
          ACCREDITATION & STATS BAR
      ========================================================== */}
      <div className="w-full bg-white border-y border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 py-4 sm:py-5">

          {/* Accreditation */}
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              AKREDITASI UNGGUL BAN-PT
            </span>
          </div>

          {/* ACQUIN */}
          <div className="px-4 py-2 sm:py-1 text-center">
            <span className="text-xs font-semibold tracking-widest text-heading uppercase">
              SERTIFIKASI INTERNASIONAL ACQUIN
            </span>
          </div>

          {/* Alumni */}
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