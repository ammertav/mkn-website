import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useT } from "../../i18n/languageContext";

const JEDA_MS = 3000;

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Hero halaman dengan latar foto yang berganti sendiri.
 *
 * Fotonya murni dekoratif — judul dan deskripsi yang membawa maknanya, dan
 * keterangan tiap foto tetap tampil di galeri pada isi halaman — jadi semua
 * gambar di sini disembunyikan dari pembaca layar.
 *
 * Dipakai bersama oleh halaman Fasilitas dan Akomodasi. Pergantian slide
 * berhenti sendiri bila fotonya cuma satu, sehingga pemanggil tidak perlu
 * menjaga jumlah foto minimum.
 */
export default function HeroSlideshow({
  fotoLatar = [],
  eyebrow,
  judul,
  deskripsi,
}) {
  const t = useT();
  const [aktif, setAktif] = useState(0);

  // Kunci dari daftar sumber foto, bukan dari array-nya langsung: pemanggil
  // yang menyusun array baru tiap render (mis. saat berpindah tab) tidak
  // membuat interval-nya terus disetel ulang.
  const kunci = fotoLatar.map((foto) => foto.src).join("|");

  useEffect(() => {
    // Kembali ke foto pertama setiap kumpulan fotonya berganti, supaya indeks
    // lama tidak menunjuk ke luar daftar yang baru.
    setAktif(0);

    const jumlah = kunci ? kunci.split("|").length : 0;
    if (jumlah <= 1) return;

    const interval = setInterval(() => {
      setAktif((prev) => (prev + 1) % jumlah);
    }, JEDA_MS);

    return () => clearInterval(interval);
  }, [kunci]);

  return (
    <section className="relative w-full bg-neutral-900 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {fotoLatar.map((foto, idx) => (
          <img
            key={foto.src || idx}
            src={foto.src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover object-center brightness-50 contrast-105 transition-opacity duration-1000 ease-in-out ${
              idx === aktif ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-4"
        >
          <motion.span
            variants={textItemVariants}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-300"
          >
            {t(eyebrow)}
          </motion.span>

          <motion.h1
            variants={textItemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-hero-heading leading-tight tracking-tight"
          >
            {t(judul)}
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-sm sm:text-base lg:text-lg text-hero-description font-normal leading-relaxed pt-2"
          >
            {t(deskripsi)}
          </motion.p>
        </motion.div>
      </div>

      {/* Indicators */}
      {fotoLatar.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {fotoLatar.map((foto, idx) => (
            <button
              key={foto.src || idx}
              type="button"
              onClick={() => setAktif(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === aktif
                  ? "w-7 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={t({
                id: `Tampilkan foto ${idx + 1}`,
                en: `Show photo ${idx + 1}`,
              })}
              aria-current={idx === aktif}
            />
          ))}
        </div>
      )}
    </section>
  );
}
