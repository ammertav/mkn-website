import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useT, useLanguage } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiUser,
  FiShare2,
  FiCheck,
  FiArrowRight,
  FiDownload,
  FiPaperclip,
  FiFileText,
} from "react-icons/fi";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import beritaList from "../../data/berita.json";
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
      staggerChildren: 0.12,
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
      duration: 0.75,
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

const scaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const formatArticleDate = (dateStr, lang) => {
  if (!dateStr || lang !== "en") return dateStr;
  const monthMap = {
    Januari: "January",
    Februari: "February",
    Maret: "March",
    April: "April",
    Mei: "May",
    Juni: "June",
    Juli: "July",
    Agustus: "August",
    September: "September",
    Oktober: "October",
    November: "November",
    Desember: "December",
  };
  return dateStr.replace(
    /Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember/g,
    (m) => monthMap[m] || m
  );
};


/**
 * Teks antarmuka halaman detail berita.
 */
const halaman = {
  tidakDitemukan: {
    id: "Artikel Tidak Ditemukan",
    en: "Article Not Found",
  },

  tidakDitemukanDetail: {
    id: "Artikel yang Anda cari tidak tersedia atau telah dipindahkan.",
    en: "The article you are looking for is unavailable or has been moved.",
  },

  kembaliKeIndeks: {
    id: "Kembali ke Indeks Berita",
    en: "Back to News Index",
  },

  bagikan: {
    id: "Bagikan:",
    en: "Share:",
  },

  bagikanWhatsapp: {
    id: "Bagikan ke WhatsApp",
    en: "Share on WhatsApp",
  },

  bagikanX: {
    id: "Bagikan ke X / Twitter",
    en: "Share on X / Twitter",
  },

  salinTautan: {
    id: "Salin Tautan",
    en: "Copy link",
  },

  beritaLainnya: {
    id: "Berita Lainnya",
    en: "More News",
  },

  redaksi: {
    id: "Redaksi MKn UNISSULA",
    en: "MKn UNISSULA Editorial Team",
  },

  waktuBaca: {
    id: "3 menit baca",
    en: "3 min read",
  },
};

export default function BeritaDetail() {
  const t = useT();
  const ui = useUi();
  const { lang } = useLanguage();
  const { slug } = useParams();
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  const rawArticle = useMemo(() => {
    return (beritaList || []).find(
      (b) =>
        generateSlug(b.title, b.slug) === slug ||
        b.slug === slug ||
        String(b.id) === slug
    );
  }, [slug]);

  const article = useMemo(() => {
    if (!rawArticle) return null;

    const paragraphs =
      typeof rawArticle.content === "string"
        ? rawArticle.content
            .split(/\n+/)
            .map((p) => p.trim())
            .filter(Boolean)
        : Array.isArray(rawArticle.content)
        ? rawArticle.content
        : [rawArticle.content];

    return {
      ...rawArticle,
      image: getBeritaImage(rawArticle.gambar),
      category: rawArticle.tags || "News",
      date: rawArticle.tanggal || "Oktober 2022",
      readTime: halaman.waktuBaca,
      author: rawArticle.author || "admkn",
      authorRole: halaman.redaksi,
      paragraphs,
      tags: Array.isArray(rawArticle.tags)
        ? rawArticle.tags
        : [rawArticle.tags || "News"],
      lampiran: Array.isArray(rawArticle.lampiran)
        ? rawArticle.lampiran
        : [],
    };
  }, [rawArticle]);

  /* =========================================================
     RELATED ARTICLES
  ========================================================= */

  const relatedArticles = useMemo(() => {
    if (!article) return [];

    const currentSlug = generateSlug(
      article.title,
      article.slug
    );

    return (beritaList || [])
      .filter(
        (b) =>
          generateSlug(b.title, b.slug) !== currentSlug &&
          b.id !== article.id
      )
      .slice(0, 3)
      .map((item) => ({
        ...item,
        image: getBeritaImage(item.gambar),
        slug: generateSlug(item.title, item.slug),
      }));
  }, [article]);

  /* =========================================================
     SHARE
  ========================================================= */

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  /* =========================================================
     NOT FOUND
  ========================================================= */

  if (!article) {
    return (
      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Helmet>
          <html lang={lang} />
          <title>
            {t(halaman.tidakDitemukan)} | MKn UNISSULA
          </title>
        </Helmet>
        <Navbar />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full flex-grow max-w-[1200px] mx-auto px-4 py-20 text-center"
        >
          <h1 className="font-heading text-3xl font-bold text-heading">
            {t(halaman.tidakDitemukan)}
          </h1>

          <p className="mt-3 text-body">
            {t(halaman.tidakDitemukanDetail)}
          </p>

          <Link
            to="/berita"
            className="mt-6 inline-flex items-center space-x-2 bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-xs"
          >
            <FiArrowLeft />
            <span>{t(halaman.kembaliKeIndeks)}</span>
          </Link>
        </motion.div>

        <Footer />
      </main>
    );
  }

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = encodeURIComponent(
    `${article.title} - MKn UNISSULA`
  );

  const isAnnouncement =
    article.category === "Pengumuman" ||
    article.tags?.includes("Pengumuman");

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {article.title} | {lang === "en" ? "MKn UNISSULA News" : "Berita MKn UNISSULA"}
        </title>

        <meta
          name="description"
          content={article.paragraphs[0]}
        />

        <meta
          property="og:title"
          content={article.title}
        />

        <meta
          property="og:description"
          content={article.paragraphs[0]}
        />

        <meta
          property="og:image"
          content={article.image}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* =====================================================
              BREADCRUMB
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
          >
            <Breadcrumb
              customTitle={article.title}
            />
          </motion.div>

          {/* =====================================================
              BACK BUTTON
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            viewport={viewportSettings}
            className="mb-6"
          >
            <button
              onClick={() =>
                navigate(
                  isAnnouncement
                    ? "/berita?kategori=pengumuman"
                    : "/berita"
                )
              }
              className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-500 hover:text-primary transition-colors cursor-pointer"
            >
              <FiArrowLeft className="text-sm" />

              <span>
                {isAnnouncement
                  ? t({
                      id: "KEMBALI KE SEMUA PENGUMUMAN",
                      en: "BACK TO ALL ANNOUNCEMENTS",
                    })
                  : t({
                      id: "KEMBALI KE SEMUA BERITA",
                      en: "BACK TO ALL NEWS",
                    })}
              </span>
            </button>
          </motion.div>

          {/* =====================================================
              ARTICLE
          ===================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={viewportSettings}
            className="bg-white border border-gray-200 rounded-xs p-6 sm:p-10 lg:p-14 shadow-2xs"
          >
            {/* ===================================================
                HEADER
            =================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-4 pb-6 border-b border-gray-200"
            >
              {/* CATEGORY */}

              <motion.span
                variants={scaleVariants}
                className="inline-block bg-red-50 text-primary border border-primary/20 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-xs"
              >
                {article.category === "Pengumuman"
                  ? t({ id: "Pengumuman", en: "Announcement" })
                  : article.category === "Berita"
                  ? t({ id: "Berita", en: "News" })
                  : article.category}
              </motion.span>

              {/* TITLE */}

              <motion.h1
                variants={leftVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-heading font-normal text-heading leading-tight tracking-tight"
              >
                {article.title}
              </motion.h1>

              {/* AUTHOR & DATE */}

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs sm:text-[13px] text-gray-500"
              >
                <div className="flex flex-wrap items-center gap-4">

                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <FiUser />
                    </div>

                    <div>
                      <p className="font-semibold text-heading">
                        {article.author}
                      </p>

                      <p className="text-[11px] text-gray-400">
                        {t(article.authorRole)}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline text-gray-300">
                    |
                  </span>

                  <div className="flex items-center space-x-3 text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-primary text-xs" />
                      {formatArticleDate(article.date, lang)}
                    </span>

                    <span>•</span>

                    <span className="flex items-center gap-1.5">
                      <FiClock className="text-primary text-xs" />
                      {t(article.readTime)}
                    </span>
                  </div>
                </div>

                {/* SHARE */}

                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 mr-1">
                    {t(halaman.bagikan)}
                  </span>

                  <a
                    href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-xs bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    title={t(halaman.bagikanWhatsapp)}
                  >
                    <FaWhatsapp className="text-sm" />
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-xs bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    title={t(halaman.bagikanX)}
                  >
                    <FaTwitter className="text-xs" />
                  </a>

                  <button
                    onClick={handleCopyLink}
                    className="w-7 h-7 rounded-xs bg-gray-600 text-white flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                    title={t(halaman.salinTautan)}
                  >
                    {copied ? (
                      <FiCheck className="text-xs" />
                    ) : (
                      <FiShare2 className="text-xs" />
                    )}
                  </button>

                  {copied && (
                    <span className="text-[11px] text-green-600 font-semibold animate-fade-in">
                      {t({ id: "Tersalin!", en: "Copied!" })}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ===================================================
                FEATURED IMAGE
            =================================================== */}

            {article.image && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 1.04,
                  filter:
                    "grayscale(100%) blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter:
                    "grayscale(0%) blur(0px)",
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="my-8 overflow-hidden rounded-xs bg-gray-100 border border-gray-200"
              >
                <Img
                  eager
                  src={article.image}
                  alt={article.title}
                  className="w-full max-h-[520px] object-cover object-center"
                />

                <p className="p-3 text-center text-xs text-gray-500 bg-gray-50/80 italic border-t border-gray-100">
                  {t({
                    id: "Dokumentasi Program Studi Magister Kenotariatan (MKn) Fakultas Hukum UNISSULA Semarang.",
                    en: "Documentation of the Master of Notarial Law (MKn) Programme, Faculty of Law, UNISSULA Semarang.",
                  })}
                </p>
              </motion.div>
            )}

            {/* ===================================================
                MAIN CONTENT
            =================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="py-6 space-y-5 text-base sm:text-[16.5px] text-body leading-relaxed"
            >
              {article.paragraphs.length > 0 ? (
                article.paragraphs.map(
                  (paragraph, idx) => (
                    <motion.p
                      key={idx}
                      variants={itemVariants}
                      className="leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  )
                )
              ) : (
                <motion.p
                  variants={itemVariants}
                  className="text-sm text-gray-500 italic"
                >
                  {t({
                    id: "Isi lengkap belum tersedia.",
                    en: "Full content is not yet available.",
                  })}
                </motion.p>
              )}
            </motion.div>

            {/* ===================================================
                GALLERY
            =================================================== */}

            {article.galeri?.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6"
              >
                {article.galeri.map((foto) => (
                  <motion.figure
                    key={foto.gambar}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="border border-gray-200 bg-white rounded-xs overflow-hidden"
                  >
                    <div className="overflow-hidden">
                      <Img
                        src={getBeritaImage(
                          foto.gambar
                        )}
                        alt={foto.keterangan}
                        className="w-full aspect-4/3 object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <figcaption className="p-3 text-xs text-gray-500 leading-relaxed border-t border-gray-100">
                      {foto.keterangan}
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            )}

            {/* ===================================================
                SOURCE
            =================================================== */}

            {article.sumber && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="pb-6 text-sm text-body"
              >
                {t({ id: "Sumber:", en: "Source:" })}{" "}
                <a
                  href={article.sumber.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline underline-offset-4"
                >
                  {article.sumber.nama}
                </a>
              </motion.p>
            )}

            {/* ===================================================
                ATTACHMENTS
            =================================================== */}

            {article.lampiran?.length > 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="my-8 pt-6 border-t border-gray-200"
              >
                <div className="bg-red-50/40 border border-primary/20 rounded-xs p-5 sm:p-7">

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <motion.div
                      variants={itemVariants}
                      className="flex items-center gap-2.5 mb-2 text-heading font-heading text-lg sm:text-xl font-normal"
                    >
                      <FiPaperclip className="text-primary text-xl" />

                      <span>
                        {t({
                          id: "Dokumen & Berkas Lampiran",
                          en: "Attached Documents & Files",
                        })}
                      </span>
                    </motion.div>

                    <motion.p
                      variants={itemVariants}
                      className="text-xs sm:text-sm text-body/80 mb-5"
                    >
                      {t({
                        id: "Silakan unduh dokumen resmi terkait pengumuman ini melalui tautan di bawah:",
                        en: "Please download the official documents related to this announcement via the links below:",
                      })}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    className="space-y-3"
                  >
                    {article.lampiran.map(
                      (file, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          whileHover={{
                            y: -2,
                          }}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xs hover:border-primary/50 transition-colors shadow-2xs"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <motion.div
                              whileHover={{
                                scale: 1.05,
                              }}
                              className="w-11 h-11 rounded-xs bg-red-50 border border-primary/20 text-primary flex items-center justify-center shrink-0"
                            >
                              <FiFileText className="text-xl" />
                            </motion.div>

                            <div className="min-w-0">
                              <h4 className="text-sm sm:text-base font-semibold text-heading truncate">
                                {file.judul ||
                                  file.nama}
                              </h4>

                              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mt-0.5">
                                <span className="uppercase font-bold text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                                  {file.format ||
                                    "PDF"}
                                </span>

                                <span>
                                  &bull;
                                </span>

                                <span>
                                  {file.ukuran}
                                </span>

                                {file.nama && (
                                  <>
                                    <span className="hidden sm:inline">
                                      &bull;
                                    </span>

                                    <span className="hidden sm:inline truncate max-w-[280px] text-gray-400">
                                      {file.nama}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={file.url}
                              download={file.nama}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-[#680000] text-white text-xs font-semibold rounded-xs transition-colors shadow-2xs"
                            >
                              <FiDownload className="text-sm" />

                              <span>
                                {t({ id: "Unduh Berkas", en: "Download File" })}
                              </span>
                            </a>
                          </div>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* ===================================================
                TAGS
            =================================================== */}

            {article.tags &&
              article.tags.length > 0 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2"
                >
                  <motion.span
                    variants={itemVariants}
                    className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2"
                  >
                    TAGS:
                  </motion.span>

                  {article.tags.map(
                    (tag, idx) => (
                      <motion.span
                        key={idx}
                        variants={scaleVariants}
                        whileHover={{
                          y: -2,
                        }}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-xs font-medium"
                      >
                        #{tag}
                      </motion.span>
                    )
                  )}
                </motion.div>
              )}

            {/* ===================================================
                AUTHOR PROFILE
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={viewportSettings}
              className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-xs flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={viewportSettings}
                className="w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-2xl flex items-center justify-center shrink-0"
              >
                <FiUser />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="space-y-1 text-center sm:text-left"
              >
                <motion.span
                  variants={itemVariants}
                  className="text-[10px] font-bold tracking-wider uppercase text-primary block"
                >
                  {t({
                    id: "PENULIS / KONTRIBUTOR",
                    en: "AUTHOR / CONTRIBUTOR",
                  })}
                </motion.span>

                <motion.h4
                  variants={itemVariants}
                  className="font-heading font-semibold text-base text-heading"
                >
                  {article.author}
                </motion.h4>

                <motion.p
                  variants={itemVariants}
                  className="text-xs text-gray-500"
                >
                  {t(article.authorRole)}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-xs text-body leading-relaxed pt-1"
                >
                  {t({
                    id: "Kabar berita dan publikasi kegiatan Program Studi Magister (S2) Kenotariatan Fakultas Hukum Universitas Islam Sultan Agung (UNISSULA) Semarang.",
                    en: "News and activity publications of the Master of Notarial Law Programme, Faculty of Law, Sultan Agung Islamic University (UNISSULA) Semarang.",
                  })}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.article>

          {/* =====================================================
              RELATED ARTICLES
          ===================================================== */}

          {relatedArticles.length > 0 && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-14 space-y-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between border-b border-gray-200 pb-3"
              >
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-heading">
                  {t(halaman.beritaLainnya)}
                </h3>

                <Link
                  to="/berita"
                  className="text-xs font-semibold text-primary hover:underline flex items-center space-x-1"
                >
                  <span>{ui("viewAll")}</span>
                  <FiArrowRight />
                </Link>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {relatedArticles.map((rel) => (
                  <motion.div
                    key={rel.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={`/berita/${rel.slug}`}
                      className="bg-white border border-gray-200 rounded-xs overflow-hidden group hover:border-primary/50 transition-colors flex flex-col shadow-2xs h-full"
                    >
                      {/* IMAGE */}

                      <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
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
                            duration: 1.2,
                            ease: "easeOut",
                          }}
                          viewport={viewportSettings}
                          className="w-full h-full"
                        >
                          <Img
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-md"
                            onError={(e) => {
                              e.currentTarget.style.display =
                                "none";
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* CONTENT */}

                      <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                        <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block">
                          {rel.tags || "NEWS"}
                        </span>

                        <h4 className="font-heading font-semibold text-sm sm:text-base text-heading group-hover:text-primary transition-colors line-clamp-2">
                          {rel.title}
                        </h4>

                        <span className="text-[11px] text-gray-400 block pt-1">
                          {rel.author || "admkn"}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}