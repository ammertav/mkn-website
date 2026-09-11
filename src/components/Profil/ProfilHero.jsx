import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPause, FiPlay, FiVolume2, FiVolumeX } from "react-icons/fi";

import heroBackdrop from "../../assets/images/profil/hero-backdrop.webp";
import { useT } from "../../i18n/languageContext";

const SUMBER_VIDEO = "/videos/profile-mkn-terbaru-4.mp4";

/**
 * Salinan 320x180 15fps tanpa audio (1,5 MB dari 45 MB) khusus untuk lapis
 * latar. Kualitasnya kasar dengan sengaja — gambarnya toh direntangkan lalu
 * diburamkan, jadi yang tersisa hanya gerak dan warnanya.
 */
const SUMBER_VIDEO_LATAR = "/videos/profile-mkn-terbaru-4-latar.mp4";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Text animation
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const profilHeroText = {
  label: {
    id: "PROFIL PROGRAM STUDI",
    en: "STUDY PROGRAMME PROFILE",
  },
  title: {
    id: "Tentang Kami",
    en: "About Us",
  },
  desc: {
    id: "Program Studi Magister Kenotariatan UNISSULA berdiri untuk memenuhi kebutuhan notaris yang menguasai hukum keperdataan sekaligus memegang etika jabatan.",
    en: "The Master of Notarial Law Study Programme at UNISSULA was established to meet the demand for notaries who master civil law while upholding high professional ethics.",
  },
  mute: {
    id: "Matikan suara",
    en: "Mute audio",
  },
  unmute: {
    id: "Nyalakan suara",
    en: "Unmute audio",
  },
  pauseVideo: {
    id: "Jeda video",
    en: "Pause video",
  },
  playVideo: {
    id: "Putar video",
    en: "Play video",
  },
};

export default function ProfilHero() {
  const t = useT();
  const videoRef = useRef(null);
  const videoLatarRef = useRef(null);
  const [sedangMain, setSedangMain] = useState(false);
  // Autoplay hanya diizinkan browser bila video bisu, jadi mulai dari senyap
  // dan biarkan pengunjung menyalakan suaranya sendiri.
  const [bersuara, setBersuara] = useState(false);

  /*
    Lapis latar hanya dipasang mulai md. Menyembunyikannya dengan CSS saja tidak
    cukup: elemen video yang display:none tetap ikut diunduh, dan tidak ada
    gunanya menghabiskan kuota ponsel untuk lapis yang memang tak terlihat.
  */
  const [layarLebar, setLayarLebar] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const kueri = window.matchMedia("(min-width: 768px)");
    const saatBerubah = (e) => setLayarLebar(e.matches);
    kueri.addEventListener("change", saatBerubah);
    return () => kueri.removeEventListener("change", saatBerubah);
  }, []);

  const alihkanPutar = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const alihkanSuara = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setBersuara(!video.muted);
  };

  const tombolKendali =
    "inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white border border-white/30 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <section className="w-full bg-white font-body overflow-hidden">

      {/* =========================
          HERO VIDEO
      ========================= */}
      {/*
        Di bawah md tinggi bingkai mengikuti rasio videonya sendiri (16:9),
        sehingga video mengisi penuh dan latar buram tidak pernah terlihat.
        Mulai md tingginya dipatok 820px dan barulah tersisa ruang di kiri-kanan.
      */}
      <div className="w-full aspect-video md:aspect-auto md:h-[760px] bg-[#E8E6E1] relative overflow-hidden flex items-center justify-center">

        {/*
          Pengisi ruang kosong di sisi video.

          Salinan video yang sama dalam resolusi rendah, direntangkan memenuhi
          bingkai. Buramnya sengaja tipis (8px): gambar 320px yang ditarik ke
          selebar layar sudah lembut dengan sendirinya, dan radius kecil jauh
          lebih murah dihitung daripada blur tebal yang dipakai sebelumnya.
          Posisinya tidak diselaraskan dengan video utama — selisih beberapa
          detik tidak kelihatan pada gambar seburam ini.
        */}
        {layarLebar && (
          <video
            ref={videoLatarRef}
            src={SUMBER_VIDEO_LATAR}
            poster={heroBackdrop}
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center scale-105 blur-[8px] brightness-75 saturate-[1.1] pointer-events-none"
            aria-hidden="true"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          />
        )}

        {/* Video Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={viewportSettings}
          className="relative w-full h-full"
        >
          {/*
            Tanpa filter CSS apa pun: contrast/brightness memaksa satu lintasan
            pemrosesan tiap frame untuk selisih warna yang nyaris tak terlihat.
            Peredupannya sudah ditangani lapis overlay di bawah.
          */}
          <video
            ref={videoRef}
            src={SUMBER_VIDEO}
            className="w-full h-full object-contain object-center"
            autoPlay
            loop
            playsInline
            preload="auto"
            onPlay={() => {
              setSedangMain(true);
              videoLatarRef.current?.play().catch(() => {});
            }}
            onPause={() => {
              setSedangMain(false);
              videoLatarRef.current?.pause();
            }}
            onVolumeChange={(e) => setBersuara(!e.currentTarget.muted)}
          />
        </motion.div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Kendali video hero */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={alihkanSuara}
            aria-label={t(bersuara ? profilHeroText.mute : profilHeroText.unmute)}
            title={t(bersuara ? profilHeroText.mute : profilHeroText.unmute)}
            className={tombolKendali}
          >
            {bersuara ? <FiVolume2 /> : <FiVolumeX />}
          </button>

          <button
            type="button"
            onClick={alihkanPutar}
            aria-label={t(sedangMain ? profilHeroText.pauseVideo : profilHeroText.playVideo)}
            title={t(sedangMain ? profilHeroText.pauseVideo : profilHeroText.playVideo)}
            className={tombolKendali}
          >
            {sedangMain ? <FiPause /> : <FiPlay />}

            {/* Lebar teks dikunci agar tombol tidak bergeser saat labelnya
                berganti antara "Pause" dan "Play". */}
            <span className="text-xs sm:text-sm font-semibold tracking-wide w-[3.1rem] text-left">
              {sedangMain ? "Pause" : "Play"}
            </span>
          </button>
        </div>
      </div>


      {/* =========================
          HEADER TITLE
      ========================= */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="
          max-w-[1600px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          pt-10
          sm:pt-14
          pb-8
        "
      >

        {/* Label */}
        <motion.span
          variants={itemVariants}
          className="
            text-xs
            font-bold
            tracking-[0.18em]
            uppercase
            text-primary
            block
            mb-2
          "
        >
          {t(profilHeroText.label)}
        </motion.span>


        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="
            text-4xl
            sm:text-5xl
            lg:text-[56px]
            font-heading
            font-medium
            text-heading
            tracking-tight
          "
        >
          {t(profilHeroText.title)}
        </motion.h1>


        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="
            w-full
            max-w-sm
            h-[2.5px]
            bg-primary
            mt-4
            mb-4
          "
        />


        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="
            text-base
            sm:text-lg
            text-body
            text-justify
            leading-relaxed
          "
        >
          {t(profilHeroText.desc)}
        </motion.p>

      </motion.div>
    </section>
  );
}
