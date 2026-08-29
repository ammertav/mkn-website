import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiSearch, FiArrowRight, FiClock, FiCalendar, FiUser } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { beritaList, beritaCategories } from "../../data/beritaData";

export default function BeritaIndex() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredBerita = useMemo(() => {
    return beritaList.filter((item) => {
      const matchCategory =
        selectedCategory === "Semua Kategori" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    // Tampilkan featured hanya jika kategori Semua dan tidak sedang cari
    if (selectedCategory === "Semua Kategori" && !searchQuery.trim()) {
      return beritaList.find((b) => b.featured) || beritaList[0];
    }
    return null;
  }, [selectedCategory, searchQuery]);

  // Daftar artikel untuk grid (jika ada featuredArticle, kecualikan dari grid utama saat di halaman awal)
  const gridArticles = useMemo(() => {
    if (featuredArticle) {
      return filteredBerita.filter((b) => b.id !== featuredArticle.id);
    }
    return filteredBerita;
  }, [filteredBerita, featuredArticle]);

  const displayedArticles = gridArticles.slice(0, visibleCount);

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Berita, Opini & Publikasi | Magister Kenotariatan UNISSULA</title>
        <meta
          name="description"
          content="Kumpulan berita terkini, publikasi riset hukum, agenda simposium, dan opini pakar Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Header Section */}
          <div className="pb-8 border-b border-gray-200">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
              INFORMASI & PUBLIKASI
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-heading tracking-normal">
              Berita & Wawasan
            </h1>
            <p className="mt-3 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
              Informasi terkini mengenai kegiatan akademik, publikasi riset ilmiah, pandangan pakar hukum,
              serta agenda resmi Program Studi Magister Kenotariatan UNISSULA.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
              {beritaCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleCount(6);
                    }}
                    className={`text-xs font-semibold px-4 py-2 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-white text-heading border border-gray-200 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Cari topik atau kata kunci..."
                className="w-full bg-white border border-gray-200 rounded-xs pl-9 pr-4 py-2 text-xs sm:text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Featured Hero Article */}
          {featuredArticle && (
            <div className="my-8">
              <article className="bg-white border border-gray-200 rounded-xs overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-primary/40 transition-colors">
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                    BERITA UTAMA
                  </span>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                      {featuredArticle.category}
                    </span>
                    <Link to={`/berita/${featuredArticle.slug}`}>
                      <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading hover:text-primary transition-colors leading-snug">
                        {featuredArticle.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-body leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="text-primary text-xs" />
                        {featuredArticle.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiClock className="text-primary text-xs" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <Link
                      to={`/berita/${featuredArticle.slug}`}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-primary hover:text-[#680000] uppercase group/btn"
                    >
                      <span>BACA SELENGKAPNYA</span>
                      <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Grid Articles */}
          <div className="mt-8">
            {displayedArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {displayedArticles.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white border border-gray-200 rounded-xs overflow-hidden flex flex-col group hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    {/* Thumbnail Image */}
                    <Link
                      to={`/berita/${article.slug}`}
                      className="relative block aspect-[16/10] bg-gray-100 overflow-hidden"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-heading/85 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                        {article.category}
                      </span>
                    </Link>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center space-x-2 text-[11px] text-gray-400">
                          <span className="flex items-center gap-1">
                            <FiCalendar className="text-xs text-primary" />
                            {article.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <FiClock className="text-xs text-primary" />
                            {article.readTime}
                          </span>
                        </div>

                        <Link to={`/berita/${article.slug}`}>
                          <h3 className="font-heading font-medium text-lg sm:text-xl text-heading leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                        </Link>

                        <p className="text-xs sm:text-[13px] text-body leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium truncate max-w-[65%]">
                          {article.author}
                        </span>
                        <Link
                          to={`/berita/${article.slug}`}
                          className="inline-flex items-center text-xs font-bold text-primary group-hover:underline"
                        >
                          <span>Baca</span>
                          <FiArrowRight className="ml-1 text-xs transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white border border-gray-200 rounded-xs">
                <p className="text-base text-body font-medium">
                  Tidak ada berita yang sesuai dengan filter atau kata kunci &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("Semua Kategori");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs text-primary font-semibold underline cursor-pointer"
                >
                  Reset Filter & Pencarian
                </button>
              </div>
            )}

            {/* Load More Button */}
            {visibleCount < gridArticles.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="bg-white border border-gray-300 text-heading hover:bg-gray-50 hover:border-gray-400 text-xs font-semibold py-2.5 px-8 rounded-xs shadow-2xs transition-colors cursor-pointer"
                >
                  Muat Berita Lainnya
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
