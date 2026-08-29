import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import {
  featuredNews,
  otherNews,
  announcements,
  agendaList,
} from "../../data/beritaData";

export default function BeritaIndex() {
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

          {/* Section Berita Utama (Featured News) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Image Box */}
            <div className="lg:col-span-6">
              <Link
                to={`/berita/${featuredNews.slug}`}
                className="block w-full aspect-[4/3] bg-[#E8E6E1] rounded-xs relative overflow-hidden border border-gray-200 group"
              >
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/15 flex items-center justify-center p-4">
                  <span className="text-xs sm:text-sm text-gray-700 bg-white/90 px-4 py-2 rounded-xs shadow-xs backdrop-blur-xs font-medium">
                    {featuredNews.placeholderText}
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Column: Article Details */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-wider text-primary uppercase block">
                {featuredNews.category} · {featuredNews.date.toUpperCase()}
              </span>

              <Link to={`/berita/${featuredNews.slug}`}>
                <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading leading-tight hover:text-primary transition-colors">
                  {featuredNews.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-body leading-relaxed pt-1">
                {featuredNews.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  to={`/berita/${featuredNews.slug}`}
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

          {/* Section Berita Lainnya */}
          <section className="space-y-6">
            <div>
              <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
                Berita Lainnya
              </h2>
              <div className="w-full h-[1.5px] bg-heading mt-3 mb-4" />
            </div>

            <div className="divide-y divide-gray-200">
              {otherNews.map((news) => (
                <article key={news.id} className="py-6 sm:py-7 space-y-2 group first:pt-2">
                  <span className="text-xs text-gray-500 block">
                    {news.date} · {news.category}
                  </span>

                  <Link to={`/berita/${news.slug}`}>
                    <h3 className="font-heading font-semibold text-lg sm:text-xl text-heading leading-snug group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                  </Link>

                  <p className="text-sm sm:text-[15px] text-body leading-relaxed max-w-5xl">
                    {news.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>

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
