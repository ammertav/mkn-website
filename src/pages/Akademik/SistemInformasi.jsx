import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";

import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import {
  halaman,
  sistemInformasi,
} from "../../data/akademik/sistemInformasiData";

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

/** Tombol menuju sistem; jatuh ke penanda non-aktif bila tautannya kosong. */
function TombolSistem({ link, terang = false }) {
  const t = useT();

  if (!link) {
    return (
      <span className="inline-flex items-center justify-center px-5 py-2.5 border border-dashed border-gray-300 bg-gray-50 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
        {t(halaman.belumTersedia)}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xs text-xs sm:text-sm font-semibold transition-colors ${
        terang
          ? "bg-white text-heading group-hover:bg-white/90"
          : "bg-primary text-white group-hover:bg-[#680000]"
      }`}
    >
      <span>{t(halaman.labelBuka)}</span>
      <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

/**
 * Sistem utama — berlatar gelap dan selebar penuh supaya terbaca sebagai pintu
 * masuk pertama, sekaligus memberi ruang bagi daftar cakupan layanannya.
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
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
        <span className="w-12 h-12 shrink-0 rounded-xs bg-white/10 flex items-center justify-center text-2xl">
          <Ikon />
        </span>

        <div className="flex-1 min-w-0 space-y-3">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/60 block">
            {t(halaman.labelUtama)}
          </span>

          <div>
            <h2 className="font-heading font-bold text-xl sm:text-2xl leading-snug">
              {t(item.nama)}
            </h2>
            <p className="text-sm text-white/60 mt-1">{t(item.subjudul)}</p>
          </div>

          <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
            {t(item.deskripsi)}
          </p>

          {item.cakupan && (
            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/50 block mb-2.5">
                {t(halaman.labelCakupan)}
              </span>

              <ul className="flex flex-wrap gap-2">
                {item.cakupan.map((bidang) => (
                  <li
                    key={bidang.id}
                    className="text-xs font-medium bg-white/10 border border-white/15 px-2.5 py-1 rounded-xs"
                  >
                    {t(bidang)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="shrink-0 lg:self-center">
          <TombolSistem link={item.link} terang />
        </div>
      </div>
    </motion.a>
  );
}

function KartuSistem({ item }) {
  const t = useT();
  const Ikon = item.icon;

  return (
    <motion.a
      variants={cardVariants}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-xs shadow-2xs p-6 sm:p-7 hover:border-primary/40 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
        <span className="w-12 h-12 shrink-0 rounded-xs bg-red-50 border border-primary/15 text-primary flex items-center justify-center text-2xl">
          <Ikon />
        </span>

        <div className="flex-1 min-w-0 space-y-2">
          <div>
            <h2 className="font-heading font-bold text-lg sm:text-xl text-heading leading-snug group-hover:text-primary transition-colors">
              {t(item.nama)}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">{t(item.subjudul)}</p>
          </div>

          <p className="text-sm text-body leading-relaxed max-w-2xl">
            {t(item.deskripsi)}
          </p>
        </div>

        <div className="shrink-0 self-start sm:self-center">
          <TombolSistem link={item.link} />
        </div>
      </div>
    </motion.a>
  );
}

export default function SistemInformasi() {
  const t = useT();
  const ui = useUi();

  const utama = sistemInformasi.find((item) => item.utama);
  const lainnya = sistemInformasi.filter((item) => !item.utama);

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

        {/* Daftar sistem */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-5"
        >
          {utama && <KartuUtama item={utama} />}

          {lainnya.map((item) => (
            <KartuSistem key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Bantuan akun */}
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
            <p className="text-xs text-gray-500 pt-0.5">
              {halaman.bantuan.narahubung}
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
