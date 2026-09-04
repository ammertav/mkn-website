import { useState, useMemo, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import beritaList from "../../data/berita.json";
import { getBeritaImage } from "../../utils/imageResolver";
import { generateSlug } from "../../utils/slugHelper";
import Img from "../../components/ui/Img";

const ITEMS_PER_PAGE = 10;

/**
 * Kategori dibedakan lewat kolom `tags` di src/data/berita.json.
 * Entri tanpa tags dianggap Berita, sehingga data lama tetap tampil.
 */
const TAG_PENGUMUMAN = "Pengumuman";

/**
 * Teks antarmuka halaman Berita.
 *
 * Isi berita dan pengumuman sendiri (judul, tanggal, naskah) TIDAK diterjemahkan
 * di sini — keduanya data dinamis yang versi bahasanya dibuat saat penulisan
 * lewat dashboard admin.
 */
const halaman = {
  meta: {
    title: {
      id: "Berita & Pengumuman | Magister Kenotariatan UNISSULA",
      en: "News & Announcements | Master of Notarial Law UNISSULA",
    },
    description: {
      id:
        "Kabar terbaru, hasil penelitian, agenda kegiatan, dan pengumuman resmi Program " +
        "Studi Magister Kenotariatan (MKn) UNISSULA.",
      en:
        "Latest news, research findings, activities, and official announcements of the " +
        "UNISSULA Master of Notarial Law (MKn) Study Programme.",
    },
  },
  breadcrumb: { id: "Berita & Pengumuman", en: "News & Announcements" },
  eyebrow: { id: "BERITA & PENGUMUMAN", en: "NEWS & ANNOUNCEMENTS" },
  judul: { id: "Kabar Terbaru", en: "Latest Updates" },
  intro: {
    id:
      "Kegiatan akademik, hasil penelitian, agenda, dan pengumuman resmi Program Studi " +
      "Magister Kenotariatan.",
    en:
      "Academic activities, research findings, events, and official announcements of the " +
      "Master of Notarial Law Study Programme.",
  },
  ariaKategori: {
    id: "Kategori Berita dan Pengumuman",
    en: "News and Announcements categories",
  },
  beritaUtama: { id: "BERITA UTAMA", en: "FEATURED" },
  bacaSelengkapnya: { id: "BACA SELENGKAPNYA", en: "READ MORE" },
  beritaLainnya: { id: "Berita Lainnya", en: "More News" },
  judulPengumuman: { id: "Pengumuman", en: "Announcements" },
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
  { key: "berita", label: { id: "Berita", en: "News" } },
  { key: "pengumuman", label: { id: "Pengumuman", en: "Announcements" } },
];

export default function BeritaIndex() {
  const t = useT();
  const ui = useUi();
  const [currentPage, setCurrentPage] = useState(1);
  const newsSectionRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Kategori aktif dibaca dari URL supaya tautannya bisa dibagikan
  // dan tombol kembali peramban tetap berfungsi.
  const kategori =
    searchParams.get("kategori") === "pengumuman" ? "pengumuman" : "berita";
  const isBerita = kategori === "berita";

  const beritaItems = useMemo(
    () => beritaList.filter((item) => item.tags !== TAG_PENGUMUMAN),
    []
  );
  const pengumumanItems = useMemo(
    () => beritaList.filter((item) => item.tags === TAG_PENGUMUMAN),
    []
  );

  const handleKategoriChange = (key) => {
    setSearchParams(key === "berita" ? {} : { kategori: key });
  };

  // Halaman kembali ke awal setiap berpindah kategori.
  useEffect(() => setCurrentPage(1), [kategori]);

  const featuredNews = beritaItems[0];
  const allOtherNews = useMemo(() => beritaItems.slice(1), [beritaItems]);

  const totalPages = Math.ceil(allOtherNews.length / ITEMS_PER_PAGE);

  const currentNewsList = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allOtherNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [allOtherNews, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-white font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20">
          {/* Breadcrumb & Main Header */}
          <section className="space-y-6">
            <Breadcrumb customTitle={t(halaman.breadcrumb)} />

            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
                {t(halaman.eyebrow)}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-normal text-heading tracking-tight">
                {t(halaman.judul)}
              </h1>
              <div className="w-full max-w-sm h-[2.5px] bg-primary mt-3 mb-4" />
              <p className="text-base sm:text-lg text-body leading-relaxed max-w-3xl">
                {t(halaman.intro)}
              </p>
            </div>
          </section>

          {/* Pemisah kategori: Berita / Pengumuman */}
          <nav
            className="flex items-center gap-6 sm:gap-10 border-b border-gray-200 -mt-10 sm:-mt-14 overflow-x-auto scrollbar-none"
            aria-label={t(halaman.ariaKategori)}
          >
            {KATEGORI_TABS.map((tab) => {
              const active = kategori === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => handleKategoriChange(tab.key)}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-colors border-b-2 cursor-pointer ${
                    active
                      ? "border-primary text-primary"
                      : "border-transparent text-body hover:text-heading hover:border-gray-300"
                  }`}
                >
                  {t(tab.label)}
                </button>
              );
            })}
          </nav>

          {/* Section Berita Utama (Featured News dari item pertama berita.json) */}
          {isBerita && featuredNews && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Image Box */}
              <div className="lg:col-span-6">
                <Link
                  to={`/berita/${generateSlug(featuredNews.title, featuredNews.slug)}`}
                  className="block w-full aspect-[4/3] bg-[#E8E6E1] rounded-xs relative overflow-hidden border border-gray-200 group"
                >
                  <Img
                    eager
                    src={getBeritaImage(featuredNews.gambar)}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </Link>
              </div>

              {/* Right Column: Article Details */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                  {t(halaman.beritaUtama)} · {featuredNews.tanggal ? featuredNews.tanggal.toUpperCase() : "OKTOBER 2022"}
                </span>

                <Link to={`/berita/${generateSlug(featuredNews.title, featuredNews.slug)}`}>
                  <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight hover:text-primary transition-colors">
                    {featuredNews.title}
                  </h2>
                </Link>

                <p className="text-sm sm:text-base text-body leading-relaxed pt-1 line-clamp-4">
                  {featuredNews.content}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/berita/${generateSlug(featuredNews.title, featuredNews.slug)}`}
                    className="inline-flex items-center text-xs font-bold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/btn"
                  >
                    <span>{t(halaman.bacaSelengkapnya)}</span>
                    <span className="ml-1.5 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Section Berita Lainnya dengan Pagination Max 10 per halaman */}
          {isBerita && allOtherNews.length > 0 && (
            <section ref={newsSectionRef} className="space-y-6 pt-4 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-heading pb-3">
                <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                  {t(halaman.beritaLainnya)}
                </h2>
                <span className="text-xs text-gray-500 font-medium">
                  Menampilkan {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
                  {Math.min(currentPage * ITEMS_PER_PAGE, allOtherNews.length)} dari {allOtherNews.length} berita
                </span>
              </div>

              <div className="divide-y divide-gray-200">
                {currentNewsList.map((news) => (
                  <article key={news.id} className="py-6 sm:py-7 space-y-2 group first:pt-2">
                    <span className="text-xs text-gray-500 block">
                      {news.tanggal || "Oktober 2022"} · {news.tags || "News"}
                    </span>

                    <Link to={`/berita/${generateSlug(news.title, news.slug)}`}>
                      <h3 className="font-heading font-semibold text-lg sm:text-xl text-heading leading-snug group-hover:text-primary transition-colors">
                        {news.title}
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-[15px] text-body leading-relaxed max-w-5xl line-clamp-3">
                      {news.content}
                    </p>
                  </article>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pt-8 pb-4 flex items-center justify-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label={ui("previous")}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-primary active:scale-98 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all shadow-2xs"
                  >
                    <FiChevronLeft className="mr-1 text-sm" />
                    <span>{ui("previous")}</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        aria-label={`${ui("page")} ${pageNum}`}
                        aria-current={currentPage === pageNum ? "page" : undefined}
                        className={`min-w-[38px] h-9 flex items-center justify-center text-xs font-bold rounded-xs border transition-all cursor-pointer select-none ${
                          currentPage === pageNum
                            ? "bg-primary text-white border-primary shadow-xs"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-primary hover:text-primary active:scale-95 shadow-2xs"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label={ui("next")}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-primary active:scale-98 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all shadow-2xs"
                  >
                    <span>{ui("next")}</span>
                    <FiChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
              )}
            </section>
          )}

          {/* Tab Pengumuman — daftar tanggal + judul bertaut, setiap entri punya halaman detail */}
          {!isBerita && (
            <section className="space-y-6">
              <div className="border-b border-heading pb-3">
                <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                  {t(halaman.judulPengumuman)}
                </h2>
              </div>

              {pengumumanItems.length > 0 ? (
                <ul className="divide-y divide-gray-200 border-b border-gray-200">
                  {pengumumanItems.map((item) => (
                    <li key={item.id} className="py-5 sm:py-6 group">
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-1.5">
                        <span className="text-xs font-bold tracking-wider text-primary uppercase tabular-nums">
                          {item.tanggal}
                        </span>
                        {item.kategori && (
                          <>
                            <span aria-hidden="true" className="text-gray-300">
                              &middot;
                            </span>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">
                              {item.kategori}
                            </span>
                          </>
                        )}
                      </div>

                      <Link
                        to={`/berita/${generateSlug(item.title, item.slug)}`}
                        className="font-heading text-lg sm:text-xl text-heading leading-snug hover:text-primary transition-colors inline-flex items-start gap-2"
                      >
                        <span>{item.title}</span>
                        <span
                          aria-hidden="true"
                          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                        >
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs">
                  <p className="text-sm font-medium text-gray-500">
                    {t(halaman.pengumumanKosong)}
                  </p>
                  <p className="mt-1.5 text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                    {t(halaman.pengumumanKosongDetail)}
                  </p>
                </div>
              )}
            </section>
          )}

        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
