import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiPaperclip,
  FiFileText,
  FiClock,
} from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { useT, useLanguage } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import { berita as beritaTerurut, pengumuman as pengumumanTerurut } from "../../data/beritaSelectors";
import { getBeritaImage } from "../../utils/imageResolver";
import { generateSlug } from "../../utils/slugHelper";
import Img from "../../components/ui/Img";

/* =========================================================
   ANIMATION
========================================================= */

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -35,
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

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 35,
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

const ITEMS_PER_PAGE = 10;

/**
 * Teks antarmuka halaman Berita.
 */
const halaman = {
  meta: {
    title: {
      id: "Berita & Pengumuman | Magister Kenotariatan UNISSULA",
      en: "News & Announcements | Master of Notarial Law UNISSULA",
    },
    description: {
      id:
        "Kabar terbaru, hasil penelitian, agenda kegiatan, pengabdian masyarakat,  dan pengumuman resmi Program " +
        "Studi Magister Kenotariatan (MKn) UNISSULA.",
      en:
        "Latest news, research findings, activities, and official announcements of the " +
        "UNISSULA Master of Notarial Law (MKn) Study Programme.",
    },
  },

  breadcrumb: {
    id: "Berita & Pengumuman",
    en: "News & Announcements",
  },

  eyebrow: {
    id: "BERITA & PENGUMUMAN",
    en: "NEWS & ANNOUNCEMENTS",
  },

  judul: {
    id: "Kabar Terbaru",
    en: "Latest Updates",
  },

  intro: {
    id:
      "Kegiatan akademik, hasil penelitian, pengabdian masyarakat, agenda, dan pengumuman resmi Program Studi " +
      "Magister Kenotariatan.",
    en:
      "Academic activities, research findings, events, and official announcements of the " +
      "Master of Notarial Law Study Programme.",
  },

  ariaKategori: {
    id: "Kategori Berita dan Pengumuman",
    en: "News and Announcements categories",
  },

  beritaUtama: {
    id: "BERITA UTAMA",
    en: "FEATURED",
  },

  bacaSelengkapnya: {
    id: "BACA SELENGKAPNYA",
    en: "READ MORE",
  },

  beritaLainnya: {
    id: "Berita Lainnya",
    en: "More News",
  },

  judulPengumuman: {
    id: "Pengumuman",
    en: "Announcements",
  },

  pengumumanKosong: {
    id: "Belum ada pengumuman yang diterbitkan.",
    en: "No announcements have been published yet.",
  },

  pengumumanKosongDetail: {
    id: "Pengumuman resmi program studi akan ditampilkan di sini.",
    en: "Official study programme announcements will appear here.",
  },
};

const KATEGORI_TABS = [
  {
    key: "berita",
    label: {
      id: "Berita",
      en: "News",
    },
  },
  {
    key: "pengumuman",
    label: {
      id: "Pengumuman",
      en: "Announcements",
    },
  },
];

/**
 * Satu baris pengumuman, dengan dua varian tampilan.
 *
 * Tidak semua pengumuman menyertakan flyer. Entri tanpa gambar karena itu tidak
 * dipaksa memakai kotak placeholder kosong: kartunya memakai lebar penuh dan
 * diberi pita aksen di tepi kiri supaya bobot visualnya tetap setara dengan
 * kartu bergambar. Bagian lainnya — kategori, tanggal, masa berlaku, judul,
 * ringkasan, lampiran, dan tautan detail — identik di kedua varian sehingga
 * daftarnya tetap terbaca sebagai satu ritme.
 */
function PengumumanCard({ item }) {
  const t = useT();
  // getBeritaImage() punya fallback ke gambar berita utama saat path tidak
  // ketemu, jadi "tanpa gambar" harus ditentukan dari datanya, bukan dari
  // hasil resolusi path.
  const itemImage = item.gambar ? getBeritaImage(item.gambar) : "";
  const itemSlug = generateSlug(item.title, item.slug);
  const lampiran = Array.isArray(item.lampiran) ? item.lampiran : [];

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-white border border-gray-200 rounded-xs overflow-hidden hover:border-primary/40 hover:shadow-xs transition-all flex flex-col md:flex-row"
    >
      {itemImage ? (
        /* Varian bergambar: kolom flyer di kiri (di atas pada layar kecil) */
        <Link
          to={`/berita/${itemSlug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="relative shrink-0 overflow-hidden bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200 h-48 sm:h-56 md:h-auto md:w-64 lg:w-72"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.08, filter: "grayscale(100%) blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0%) blur(0px)" }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={viewportSettings}
            className="absolute inset-0"
          >
            <Img
              src={itemImage}
              alt=""
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </Link>
      ) : (
        /* Varian tanpa gambar: pita aksen sebagai pengganti kolom flyer */
        <div
          aria-hidden="true"
          className="shrink-0 bg-primary h-1 w-full md:h-auto md:w-1.5"
        />
      )}

      {/* Konten & Lampiran Pengumuman */}
      <div className="p-5 sm:p-6 lg:p-7 flex-grow min-w-0 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          {/* Metadata bar — kategori ikut di sini supaya entri tanpa flyer
              tetap menampilkannya */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-500">
            {item.kategori && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary bg-red-50 border border-primary/20 px-2 py-0.5 rounded-xs">
                <FiFileText className="text-[11px]" />
                {item.kategori}
              </span>
            )}
            <span className="font-bold text-primary uppercase tracking-wider tabular-nums">
              {item.tanggal}
            </span>
            {item.berlakuHingga && item.berlakuHingga !== "—" && (
              <>
                <span className="text-gray-300">&bull;</span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-xs">
                  <FiClock className="text-xs" />
                  {t({ id: "Berlaku s.d.", en: "Valid until" })} {item.berlakuHingga}
                </span>
              </>
            )}
          </div>

          {/* Judul Pengumuman */}
          <h3 className="font-heading text-xl sm:text-2xl text-heading font-normal leading-snug group-hover:text-primary transition-colors">
            <Link to={`/berita/${itemSlug}`}>{item.title}</Link>
          </h3>

          {/* Ringkasan Konten — kartu tanpa flyer punya ruang lebih lega,
              jadi ringkasannya boleh satu baris lebih panjang */}
          {item.content && (
            <p
              className={`text-sm text-body/80 leading-relaxed ${
                itemImage
                  ? "line-clamp-2 sm:line-clamp-3"
                  : "line-clamp-3 sm:line-clamp-4"
              }`}
            >
              {item.content}
            </p>
          )}
        </div>

        {/* Section Lampiran & Tombol Aksi */}
        <div
          className={`pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3 ${
            lampiran.length > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {lampiran.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <FiPaperclip className="text-primary text-xs" />
                {t({ id: "Lampiran:", en: "Attachments:" })}
              </span>
              {lampiran.map((file, idx) => (
                <a
                  key={idx}
                  href={file.url}
                  download={file.nama}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50/70 hover:bg-primary text-primary hover:text-white border border-primary/20 text-xs font-semibold rounded-xs transition-colors"
                  title={`${t({ id: "Unduh", en: "Download" })} ${file.nama}`}
                >
                  <FiFileText className="text-xs" />
                  <span className="truncate max-w-[150px] sm:max-w-[200px]">
                    {file.judul || file.nama}
                  </span>
                  {file.ukuran && (
                    <span className="text-[10px] opacity-75 font-normal">
                      ({file.ukuran})
                    </span>
                  )}
                  <FiDownload className="text-xs shrink-0" />
                </a>
              ))}
            </div>
          )}

          {/* Tautan detail */}
          <Link
            to={`/berita/${itemSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-[#680000] transition-colors shrink-0 self-start sm:self-auto"
          >
            <span>{t({ id: "Selengkapnya", en: "Read more" })}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BeritaIndex() {
  const t = useT();
  const ui = useUi();
  const { lang } = useLanguage();

  const [currentPage, setCurrentPage] = useState(1);

  const newsSectionRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const kategori =
    searchParams.get("kategori") === "pengumuman"
      ? "pengumuman"
      : "berita";

  const isBerita = kategori === "berita";

  // Pemilahan dan pengurutannya kini tinggal di data/beritaSelectors, dipakai
  // bersama section Berita dan Pengumuman di Beranda.
  const beritaItems = beritaTerurut;
  const pengumumanItems = pengumumanTerurut;

  const handleKategoriChange = (key) => {
    setSearchParams(key === "berita" ? {} : { kategori: key });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [kategori]);

  const featuredNews = beritaItems[0];

  const allOtherNews = useMemo(
    () => beritaItems.slice(1),
    [beritaItems]
  );

  const totalPages = Math.ceil(
    allOtherNews.length / ITEMS_PER_PAGE
  );

  const currentNewsList = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return allOtherNews.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [allOtherNews, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    if (newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t(halaman.meta.title)}</title>
        <meta
          name="description"
          content={t(halaman.meta.description)}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-white font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6"
          >
            <motion.div variants={leftVariants}>
              <Breadcrumb
                customTitle={t(halaman.breadcrumb)}
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-3"
            >
              <motion.span
                variants={leftVariants}
                className="text-xs font-bold tracking-[0.16em] uppercase text-primary block"
              >
                {t(halaman.eyebrow)}
              </motion.span>

              <motion.h1
                variants={leftVariants}
                className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-normal text-heading tracking-tight"
              >
                {t(halaman.judul)}
              </motion.h1>

              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                whileInView={{
                  opacity: 1,
                  width: "100%",
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="max-w-sm h-[2.5px] bg-primary mt-3 mb-4"
              />

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-body text-justify leading-relaxed"
              >
                {t(halaman.intro)}
              </motion.p>
            </motion.div>
          </motion.section>

          {/* =====================================================
              CATEGORY TABS
          ===================================================== */}

          <motion.nav
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex items-center gap-6 sm:gap-10 border-b border-gray-200 -mt-10 sm:-mt-14 overflow-x-auto scrollbar-none"
            aria-label={t(halaman.ariaKategori)}
          >
            {KATEGORI_TABS.map((tab) => {
              const active = kategori === tab.key;

              return (
                <motion.button
                  key={tab.key}
                  variants={itemVariants}
                  type="button"
                  onClick={() =>
                    handleKategoriChange(tab.key)
                  }
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`shrink-0 whitespace-nowrap py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-colors border-b-2 cursor-pointer ${
                    active
                      ? "border-primary text-primary"
                      : "border-transparent text-body hover:text-heading hover:border-gray-300"
                  }`}
                >
                  {t(tab.label)}
                </motion.button>
              );
            })}
          </motion.nav>

          {/* =====================================================
              FEATURED NEWS
          ===================================================== */}

          {isBerita && featuredNews && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* IMAGE */}

              <motion.div
                variants={leftVariants}
                className="lg:col-span-6"
              >
                <Link
                  to={`/berita/${generateSlug(
                    featuredNews.title,
                    featuredNews.slug
                  )}`}
                  className="block w-full aspect-[4/3] bg-[#E8E6E1] rounded-xs relative overflow-hidden group"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                      filter:
                        "grayscale(100%) blur(4px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      filter:
                        "grayscale(0%) blur(0px)",
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                    viewport={viewportSettings}
                    className="w-full h-full"
                  >
                    <Img
                      eager
                      src={getBeritaImage(
                        featuredNews.gambar
                      )}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 rounded-md"
                      onError={(e) => {
                        e.currentTarget.style.display =
                          "none";
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* CONTENT */}

              <motion.div
                variants={rightVariants}
                className="lg:col-span-6 space-y-4"
              >
                <motion.span
                  variants={itemVariants}
                  className="text-xs font-bold tracking-wider text-primary uppercase block"
                >
                  {t(halaman.beritaUtama)} ·{" "}
                  {featuredNews.tanggal
                    ? featuredNews.tanggal.toUpperCase()
                    : "OKTOBER 2022"}
                </motion.span>

                <motion.div variants={itemVariants}>
                  <Link
                    to={`/berita/${generateSlug(
                      featuredNews.title,
                      featuredNews.slug
                    )}`}
                  >
                    <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                  </Link>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-sm sm:text-base text-body leading-relaxed pt-1 line-clamp-4"
                >
                  {featuredNews.content}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="pt-2"
                >
                  <Link
                    to={`/berita/${generateSlug(
                      featuredNews.title,
                      featuredNews.slug
                    )}`}
                    className="inline-flex items-center text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/btn"
                  >
                    <span>
                      {t(halaman.bacaSelengkapnya)}
                    </span>

                    <span className="ml-1.5 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.section>
          )}

          {/* =====================================================
              MORE NEWS
          ===================================================== */}

          {isBerita && allOtherNews.length > 0 && (
            <motion.section
              ref={newsSectionRef}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-6 pt-4 scroll-mt-20"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-heading pb-3"
              >
                <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                  {t(halaman.beritaLainnya)}
                </h2>

                <span className="text-xs text-gray-500 font-medium">
                  {lang === "en" ? (
                    <>
                      Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
                      {Math.min(currentPage * ITEMS_PER_PAGE, allOtherNews.length)}{" "}
                      of {allOtherNews.length} news
                    </>
                  ) : (
                    <>
                      Menampilkan {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
                      {Math.min(currentPage * ITEMS_PER_PAGE, allOtherNews.length)}{" "}
                      dari {allOtherNews.length} berita
                    </>
                  )}
                </span>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="divide-y divide-gray-200"
              >
                {currentNewsList.map((news) => (
                  <motion.article
                    key={news.id}
                    variants={itemVariants}
                    className="py-6 sm:py-7 space-y-2 group first:pt-2"
                  >
                    <span className="text-xs text-gray-500 block">
                      {news.tanggal || "Oktober 2022"} ·{" "}
                      {news.tags || "News"}
                    </span>

                    <Link
                      to={`/berita/${generateSlug(
                        news.title,
                        news.slug
                      )}`}
                    >
                      <h3 className="font-heading font-semibold text-lg sm:text-xl text-heading leading-snug group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-[15px] text-body leading-relaxed max-w-5xl line-clamp-3">
                      {news.content}
                    </p>
                  </motion.article>
                ))}
              </motion.div>

              {/* PAGINATION */}

              {totalPages > 1 && (
                <motion.div
                  variants={itemVariants}
                  className="pt-8 pb-4 flex items-center justify-center gap-2"
                >
                  <button
                    onClick={() =>
                      handlePageChange(
                        currentPage - 1
                      )
                    }
                    disabled={currentPage === 1}
                    aria-label={ui("previous")}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-primary active:scale-98 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all shadow-2xs"
                  >
                    <FiChevronLeft className="mr-1 text-sm" />
                    <span>{ui("previous")}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from(
                      { length: totalPages },
                      (_, i) => i + 1
                    ).map((pageNum) => (
                      <motion.button
                        key={pageNum}
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        onClick={() =>
                          handlePageChange(pageNum)
                        }
                        aria-label={`${ui(
                          "page"
                        )} ${pageNum}`}
                        aria-current={
                          currentPage === pageNum
                            ? "page"
                            : undefined
                        }
                        className={`min-w-[38px] h-9 flex items-center justify-center text-xs font-bold rounded-xs border transition-all cursor-pointer select-none ${
                          currentPage === pageNum
                            ? "bg-primary text-white border-primary shadow-xs"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-primary hover:text-primary active:scale-95 shadow-2xs"
                        }`}
                      >
                        {pageNum}
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      handlePageChange(
                        currentPage + 1
                      )
                    }
                    disabled={
                      currentPage === totalPages
                    }
                    aria-label={ui("next")}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-primary active:scale-98 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all shadow-2xs"
                  >
                    <span>{ui("next")}</span>
                    <FiChevronRight className="ml-1 text-sm" />
                  </button>
                </motion.div>
              )}
            </motion.section>
          )}

          {/* =====================================================
              ANNOUNCEMENTS
          ===================================================== */}

          {!isBerita && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-6"
            >
              {/* HEADER */}

              <motion.div
                variants={itemVariants}
                className="border-b border-heading pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
              >
                <div>
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                    {t(halaman.judulPengumuman)}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {t({
                      id: "Pengumuman resmi dan edaran akademik Program Studi Magister Kenotariatan UNISSULA.",
                      en: "Official announcements and academic notices of the UNISSULA Master of Notary Program.",
                    })}
                  </p>
                </div>

                <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-red-50 border border-primary/20 px-3 py-1 rounded-xs w-fit">
                  {pengumumanItems.length}{" "}
                  {t({ id: "Pengumuman", en: "Announcements" })}
                </span>
              </motion.div>

              {pengumumanItems.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {pengumumanItems.map((item) => (
                    <PengumumanCard key={item.id} item={item} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {t(halaman.pengumumanKosong)}
                  </p>

                  <p className="mt-1.5 text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                    {t(
                      halaman.pengumumanKosongDetail
                    )}
                  </p>
                </motion.div>
              )}
            </motion.section>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}