import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import { prestasiEvents } from "../../data/prestasiGalleryData";
import { useT, useLanguage } from "../../i18n/languageContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";

const viewportSettings = { once: true, amount: 0.1 };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Prestasi() {
  const t = useT();
  const { lang } = useLanguage();

  // lightbox state: { eventIdx, fotoIdx } | null
  const [lightbox, setLightbox] = useState(null);

  // Build flat foto list for keyboard nav
  const allFotos = prestasiEvents.flatMap((ev, ei) =>
    ev.foto.map((f, fi) => ({ ...f, eventIdx: ei, fotoIdx: fi }))
  );

  const openLightbox = (eventIdx, fotoIdx) => {
    setLightbox({ eventIdx, fotoIdx });
  };

  const closeLightbox = () => setLightbox(null);

  const flatIndex =
    lightbox !== null
      ? prestasiEvents
          .slice(0, lightbox.eventIdx)
          .reduce((acc, ev) => acc + ev.foto.length, 0) + lightbox.fotoIdx
      : -1;

  const goNext = useCallback(() => {
    if (flatIndex === -1) return;
    const nextFlat = (flatIndex + 1) % allFotos.length;
    setLightbox({ eventIdx: allFotos[nextFlat].eventIdx, fotoIdx: allFotos[nextFlat].fotoIdx });
  }, [flatIndex, allFotos]);

  const goPrev = useCallback(() => {
    if (flatIndex === -1) return;
    const prevFlat = (flatIndex - 1 + allFotos.length) % allFotos.length;
    setLightbox({ eventIdx: allFotos[prevFlat].eventIdx, fotoIdx: allFotos[prevFlat].fotoIdx });
  }, [flatIndex, allFotos]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, goNext, goPrev]);

  const currentFoto =
    lightbox !== null
      ? prestasiEvents[lightbox.eventIdx]?.foto[lightbox.fotoIdx]
      : null;

  const totalFoto = prestasiEvents.reduce((acc, ev) => acc + ev.foto.length, 0);

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Student Achievements Gallery | MKn UNISSULA"
            : "Gallery Prestasi Mahasiswa | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Photo gallery of achievements by MKn UNISSULA students at national and regional competitions."
              : "Gallery foto prestasi mahasiswa MKn UNISSULA dalam berbagai lomba tingkat nasional dan regional."
          }
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb />

          <div className="space-y-10 mt-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-bold tracking-wider uppercase text-primary block"
          >
            {t({ id: "MAHASISWA", en: "STUDENTS" })}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t({ id: "Gallery Prestasi", en: "Achievements Gallery" })}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="h-[2px] bg-primary"
          />

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-body leading-relaxed max-w-2xl"
          >
            {t({
              id: `Dokumentasi prestasi mahasiswa MKn UNISSULA dalam berbagai ajang lomba kenotariatan tingkat nasional dan regional. Total ${totalFoto} foto dari ${prestasiEvents.length} event.`,
              en: `Photo documentation of MKn UNISSULA student achievements at national and regional notarial competitions. A total of ${totalFoto} photos from ${prestasiEvents.length} events.`,
            })}
          </motion.p>
        </motion.div>

        {/* Events */}
        {prestasiEvents.map((event, eventIdx) => (
          <motion.section
            key={event.id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-5"
          >
            {/* Event Header */}
            <div className="space-y-1 pb-3 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-heading">
                {t(event.nama)}
              </h2>
              <p className="text-sm text-body">{t(event.keterangan)}</p>
              <span className="text-xs text-body/60">
                {event.foto.length} {t({ id: "foto", en: "photos" })}
              </span>
            </div>

            {/* Photo Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            >
              {event.foto.map((foto, fotoIdx) => (
                <motion.button
                  key={fotoIdx}
                  variants={itemVariants}
                  onClick={() => openLightbox(eventIdx, fotoIdx)}
                  className="relative aspect-square overflow-hidden rounded-xs bg-gray-100 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={t(foto.caption)}
                  id={`prestasi-photo-${event.id}-${fotoIdx}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={foto.src}
                    alt={t(foto.caption)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <FiImage className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl drop-shadow-lg" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.section>
        ))}
          </div>
        </div>

        <Footer />
      </main>

      {/* Lightbox — di luar main agar z-index overlay tidak tertimpa */}
      <AnimatePresence>
        {lightbox !== null && currentFoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={t({ id: "Lightbox foto prestasi", en: "Achievement photo lightbox" })}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label={t({ id: "Tutup", en: "Close" })}
              id="lightbox-close-btn"
            >
              <FiX className="text-xl" />
            </button>

            {/* Prev */}
            {allFotos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label={t({ id: "Foto sebelumnya", en: "Previous photo" })}
                id="lightbox-prev-btn"
              >
                <FiChevronLeft className="text-xl" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={`${lightbox.eventIdx}-${lightbox.fotoIdx}`}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentFoto.src}
                alt={t(currentFoto.caption)}
                className="max-h-[75vh] max-w-full object-contain rounded-xs shadow-2xl"
              />
              {/* Caption + counter */}
              <div className="text-center space-y-1">
                <p className="text-white/90 text-sm font-medium">{t(currentFoto.caption)}</p>
                <p className="text-white/50 text-xs">
                  {flatIndex + 1} / {allFotos.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            {allFotos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label={t({ id: "Foto berikutnya", en: "Next photo" })}
                id="lightbox-next-btn"
              >
                <FiChevronRight className="text-xl" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
