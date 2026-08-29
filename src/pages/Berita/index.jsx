import { useState, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import beritaList from "../../data/berita.json";
import { getBeritaImage } from "../../utils/imageResolver";
import { generateSlug } from "../../utils/slugHelper";

const ITEMS_PER_PAGE = 10;

const announcements = [
  {
    date: "24 Agu 2026",
    title: "Jadwal perkuliahan semester gasal 2026/2027 telah terbit",
    category: "Akademik",
    validUntil: "—",
  },
  {
    date: "20 Agu 2026",
    title: "Pendaftaran gelombang dua dibuka sampai 12 September",
    category: "Penerimaan",
    validUntil: "12 Sep 2026",
  },
  {
    date: "15 Agu 2026",
    title: "Batas akhir pengajuan judul tesis semester ini",
    category: "Tesis",
    validUntil: "30 Sep 2026",
  },
  {
    date: "11 Agu 2026",
    title: "Pendaftaran anggota unit kegiatan mahasiswa dibuka",
    category: "Kemahasiswaan",
    validUntil: "19 Sep 2026",
  },
  {
    date: "04 Agu 2026",
    title: "Survei kepuasan mahasiswa semester genap dapat diisi",
    category: "Penjaminan mutu",
    validUntil: "10 Sep 2026",
  },
];

const agendaList = [
  {
    date: "12 Sep 2026",
    activity: "Orientasi mahasiswa baru semester gasal",
    location: "Aula Pascasarjana",
  },
  {
    date: "26 Sep 2026",
    activity: "Kuliah tamu: notaris dan transaksi lintas negara",
    location: "Ruang MKn 3.03",
  },
  {
    date: "17 Okt 2026",
    activity: "Seminar proposal tesis gelombang satu",
    location: "Ruang MKn 3.04",
  },
  {
    date: "08 Nov 2026",
    activity: "Asesmen lapangan ACQUIN",
    location: "Gedung Pascasarjana",
  },
  {
    date: "05 Des 2026",
    activity: "Temu pengguna lulusan dan mitra magang",
    location: "Aula Pascasarjana",
  },
];

export default function BeritaIndex() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsSectionRef = useRef(null);

  const featuredNews = beritaList[0];
  const allOtherNews = useMemo(() => beritaList.slice(1), []);

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
        <html lang="id" />
        <title>Berita & Pengumuman | Magister Kenotariatan UNISSULA</title>
        <meta
          name="description"
          content="Kabar terbaru, hasil penelitian, agenda kegiatan, dan pengumuman resmi Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-white font-body text-body">
        {/* Header Navbar */}
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20">
          {/* Breadcrumb & Main Header */}
          <section className="space-y-6">
            <Breadcrumb customTitle="Berita & Pengumuman" />

            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
                BERITA & PENGUMUMAN
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-normal text-heading tracking-tight">
                Kabar Terbaru
              </h1>
              <div className="w-full max-w-sm h-[2.5px] bg-primary mt-3 mb-4" />
              <p className="text-base sm:text-lg text-body leading-relaxed max-w-3xl">
                Kegiatan akademik, hasil penelitian, agenda, dan pengumuman resmi Program Studi
                Magister Kenotariatan.
              </p>
            </div>
          </section>

          {/* Section Berita Utama (Featured News dari item pertama berita.json) */}
          {featuredNews && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Image Box */}
              <div className="lg:col-span-6">
                <Link
                  to={`/berita/${generateSlug(featuredNews.title, featuredNews.slug)}`}
                  className="block w-full aspect-[4/3] bg-[#E8E6E1] rounded-xs relative overflow-hidden border border-gray-200 group"
                >
                  <img
                    src={getBeritaImage(featuredNews.gambar)}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 flex items-center justify-center p-4">
                    <span className="text-xs sm:text-sm text-gray-700 bg-white/90 px-4 py-2 rounded-xs shadow-xs backdrop-blur-xs font-medium">
                      Foto berita utama
                    </span>
                  </div>
                </Link>
              </div>

              {/* Right Column: Article Details */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                  BERITA UTAMA · {featuredNews.tanggal ? featuredNews.tanggal.toUpperCase() : "OKTOBER 2022"}
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
                    <span>BACA SELENGKAPNYA</span>
                    <span className="ml-1.5 transition-transform group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Section Berita Lainnya dengan Pagination Max 10 per halaman */}
          {allOtherNews.length > 0 && (
            <section ref={newsSectionRef} className="space-y-6 pt-4 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-heading pb-3">
                <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                  Berita Lainnya
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
                    aria-label="Halaman Sebelumnya"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-primary active:scale-98 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all shadow-2xs"
                  >
                    <FiChevronLeft className="mr-1 text-sm" />
                    <span>Sebelumnya</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        aria-label={`Halaman ${pageNum}`}
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
                    aria-label="Halaman Selanjutnya"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xs border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-primary active:scale-98 disabled:opacity-40 disabled:pointer-events-none cursor-pointer transition-all shadow-2xs"
                  >
                    <span>Selanjutnya</span>
                    <FiChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
              )}
            </section>
          )}

          {/* Section Pengumuman Table */}
          <section className="space-y-6">
            <div>
              <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                Pengumuman
              </h2>
              <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
            </div>

            <div className="border border-gray-200 bg-white overflow-x-auto rounded-xs shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36 sm:w-44">
                      TANGGAL
                    </th>
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                      PENGUMUMAN
                    </th>
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36 sm:w-44">
                      KATEGORI
                    </th>
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36 sm:w-44">
                      BERLAKU HINGGA
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm sm:text-[13.5px]">
                  {announcements.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-5 sm:px-6 font-semibold text-heading whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-heading font-medium">
                        {item.title}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                        {item.validUntil}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section Agenda Kegiatan Table */}
          <section className="space-y-6">
            <div>
              <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                Agenda Kegiatan
              </h2>
              <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
            </div>

            <div className="border border-gray-200 bg-white overflow-x-auto rounded-xs shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36 sm:w-44">
                      TANGGAL
                    </th>
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                      KEGIATAN
                    </th>
                    <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-48 sm:w-60">
                      TEMPAT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm sm:text-[13.5px]">
                  {agendaList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-5 sm:px-6 font-semibold text-heading whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-heading font-medium">
                        {item.activity}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                        {item.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
