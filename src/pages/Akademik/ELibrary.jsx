import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight, FiMail, FiPhone, FiSmartphone } from "react-icons/fi";

import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import {
  halaman,
  layananPerpustakaan,
} from "../../data/akademik/perpustakaanData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/**
 * Kartu portal utama — dibuat selebar penuh dan berlatar gelap agar terbaca
 * sebagai pintu masuk pertama, bukan sekadar salah satu dari empat tautan.
 */
function KartuUtama({ item }) {
  const t = useT();
  const Ikon = item.icon;

  return (
    <motion.a
      variants={cardVariants}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-heading text-white rounded-xs p-6 sm:p-8 hover:bg-primary transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
        <span className="w-12 h-12 shrink-0 rounded-xs bg-white/10 flex items-center justify-center text-2xl">
          <Ikon />
        </span>

        <div className="flex-1 min-w-0 space-y-2">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/60 block">
            {t(halaman.labelUtama)}
          </span>

          <h2 className="font-heading font-bold text-xl sm:text-2xl leading-snug">
            {t(item.nama)}
          </h2>

          <p className="text-sm text-white/75 leading-relaxed max-w-2xl">
            {t(item.deskripsi)}
          </p>
        </div>

        <span className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold self-start sm:self-center">
          <span>{t(halaman.labelBuka)}</span>
          <FiArrowUpRight className="text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.a>
  );
}

function KartuLayanan({ item }) {
  const t = useT();
  const Ikon = item.icon;

  return (
    <motion.a
      variants={cardVariants}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white border border-gray-200 rounded-xs shadow-2xs p-6 hover:border-primary/40 transition-colors"
    >
      <span className="w-11 h-11 rounded-xs bg-red-50 border border-primary/15 text-primary flex items-center justify-center text-xl mb-4">
        <Ikon />
      </span>

      <h3 className="font-heading font-bold text-base sm:text-lg text-heading leading-snug group-hover:text-primary transition-colors">
        {t(item.nama)}
      </h3>

      <p className="mt-2 text-sm text-body leading-relaxed">
        {t(item.deskripsi)}
      </p>

      {/* mt-auto: baris tautan sejajar di dasar kartu walau deskripsinya
          berbeda panjang. */}
      <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-primary">
        <span>{t(halaman.labelBuka)}</span>
        <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export default function ELibrary() {
  const t = useT();
  const ui = useUi();

  const utama = layananPerpustakaan.find((item) => item.utama);
  const lainnya = layananPerpustakaan.filter((item) => !item.utama);

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.span
            variants={headerItemVariants}
            className="text-xs font-bold tracking-[0.16em] uppercase text-primary block"
          >
            {ui("sectionAcademic")}
          </motion.span>

          <motion.h1
            variants={headerItemVariants}
            className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight"
          >
            {t(halaman.judul)}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={viewportSettings}
            className="h-[2px] bg-primary mt-4 mb-5"
          />

          <motion.p
            variants={headerItemVariants}
            className="text-sm sm:text-base text-body text-justify leading-relaxed"
          >
            {t(halaman.intro)}
          </motion.p>
        </motion.div>

        {/* Portal utama + layanan pendamping */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          {utama && <KartuUtama item={utama} />}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lainnya.map((item) => (
              <KartuLayanan key={item.id} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Bantuan akses */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="bg-primary/5 border border-primary/25 rounded-xs p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
        >
          <div className="space-y-1.5">
            <h2 className="font-heading font-bold text-base sm:text-lg text-heading">
              {t(halaman.bantuan.judul)}
            </h2>
            <p className="text-sm text-body leading-relaxed max-w-2xl">
              {t(halaman.bantuan.teks)}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-x-6 gap-y-2 text-sm">
            <a
              href={`tel:${halaman.bantuan.telepon.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-heading hover:text-primary transition-colors"
            >
              <FiPhone className="text-primary shrink-0" />
              <span className="font-medium">{halaman.bantuan.telepon}</span>
            </a>

            <a
              href={`tel:${halaman.bantuan.hotline.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-heading hover:text-primary transition-colors"
            >
              <FiSmartphone className="text-primary shrink-0" />
              <span className="font-medium">
                Hotline {halaman.bantuan.hotline}
              </span>
            </a>

            <a
              href={`mailto:${halaman.bantuan.surel}`}
              className="inline-flex items-center gap-2 text-heading hover:text-primary transition-colors"
            >
              <FiMail className="text-primary shrink-0" />
              <span className="font-medium">{halaman.bantuan.surel}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
