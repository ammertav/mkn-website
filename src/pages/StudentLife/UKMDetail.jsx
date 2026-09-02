import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { ukmData } from "../../data/ukmData";
import Img from "../../components/ui/Img";

export default function UKMDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  // Cari UKM berdasarkan slug atau alternateSlugs
  const ukm =
    ukmData.find(
      (item) =>
        item.slug === slug ||
        item.alternateSlugs?.includes(slug) ||
        String(item.id) === slug
    ) || ukmData[0]; // fallback ke klinik hukum

  if (!ukm && slug) {
    return <Navigate to="/mahasiswa/ukm" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${ukm.title} | MKn UNISSULA`}</title>
        <meta name="description" content={ukm.description} />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* ========================================================================= */}
        {/* BREADCRUMB (Aligned with 1600px Max-Width) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-2">
          <Breadcrumb customTitle={ukm.title} />
        </div>

        {/* ========================================================================= */}
        {/* HERO SECTION: Asymmetrical Layout (Left in Container, Right Full Bleed) */}
        {/* ========================================================================= */}
        <section className="w-full border-b border-gray-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Info Column (7 cols): Aligned with 1600px grid margin */}
            <div className="lg:col-span-7 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-1600px)/2+2rem))] pr-4 sm:pr-8 lg:pr-14 py-6 sm:py-10 space-y-6 flex flex-col justify-center">
              <div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-primary block mb-2">
                  {ukm.category || "UNIT KEGIATAN MAHASISWA"}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold text-heading leading-[1.15] tracking-normal">
                  {ukm.title}
                </h1>
                <div className="w-full max-w-xl h-[2px] bg-primary mt-4 mb-5" />
                <p className="text-sm sm:text-base text-body leading-relaxed max-w-xl">
                  {ukm.description}
                </p>
              </div>

              {/* Metadata Table */}
              {ukm.meta && ukm.meta.length > 0 && (
                <div className="w-full max-w-xl border-t border-gray-200 divide-y divide-gray-200 text-xs sm:text-sm pt-1">
                  {ukm.meta.map((m, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between">
                      <span className="text-body font-normal">{m.label}</span>
                      <span className="font-semibold text-heading text-right">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Photo Column (5 cols): Mentok Sampai Ujung Kanan Layar (Full Bleed Right) */}
            <div className="lg:col-span-5 w-full bg-[#eaeaea] relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden flex items-center justify-center">
              <Img
                src={ukm.image}
                alt={ukm.title}
                className="w-full h-full object-cover object-center"
                eager
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MIDDLE 2-COLUMN MAIN CONTENT: Narrative, Quote, and Sidebar */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-10 sm:my-14 items-start">
            {/* Left Column (8 cols): Narrative & Quote */}
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-body leading-relaxed">
              {ukm.narrative?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Quote Block */}
              {ukm.quote && (
                <blockquote className="border-l-2 border-primary pl-5 sm:pl-6 py-2 my-8 space-y-2">
                  <p className="font-heading italic text-lg sm:text-xl md:text-[22px] text-special leading-snug">
                    “{ukm.quote.text}”
                  </p>
                  {ukm.quote.author && (
                    <footer className="text-xs sm:text-sm text-body font-normal">
                      {ukm.quote.author}
                    </footer>
                  )}
                </blockquote>
              )}

              {/* Narrative After Quote */}
              {ukm.narrativeAfterQuote?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Right Column (4 cols): Summary & CTA Sidebar */}
            <aside className="lg:col-span-4 space-y-8 pl-0 lg:pl-6 lg:border-l border-gray-200 lg:sticky lg:top-24">
              {/* RINGKASAN */}
              {ukm.summary && ukm.summary.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] uppercase text-body pb-3 border-b border-gray-200">
                    {ukm.summaryTitle || "RINGKASAN"}
                  </h3>
                  <div className="space-y-5">
                    {ukm.summary.map((stat, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-none">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-body">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#formulir-pendaftaran"
                  className="block w-full text-center bg-primary hover:bg-[#6b0f1a] text-white px-5 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors rounded-sm shadow-xs"
                >
                  DAFTAR JADI ANGGOTA
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULL BLEED GALLERY: Mentok Kanan & Kiri Layar Penuh (Edge-to-Edge) */}
        {/* ========================================================================= */}
        {ukm.gallery && ukm.gallery.length > 0 && (
          <section className="w-full my-8 sm:my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
              {ukm.gallery.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[380px] xl:h-[440px] bg-gray-200 overflow-hidden border-r border-white/20 last:border-r-0"
                >
                  <Img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-6 sm:p-8">
                    <span className="text-sm sm:text-base md:text-lg font-medium text-white tracking-wide drop-shadow-md">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* BOTTOM CONTENT CONTAINER (Layanan, Agenda, Pengurus, CTA Box) */}
        {/* ========================================================================= */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 space-y-12 sm:space-y-16">
          {/* LAYANAN YANG DIBERIKAN */}
          {ukm.layanan && ukm.layanan.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
                Layanan yang Diberikan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ukm.layanan.map((srv, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-sm p-6 sm:p-7 space-y-3 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block">
                        {srv.badge}
                      </span>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-heading leading-snug">
                        {srv.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13.5px] text-body leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* AGENDA SEMESTER GASAL 2026 */}
          {ukm.agenda && ukm.agenda.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
                {ukm.agendaTitle || "Agenda Semester Gasal 2026"}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="border-b-2 border-gray-900 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                      <th className="py-3 pr-4 w-3/12">Tanggal</th>
                      <th className="py-3 px-4 w-5/12">Kegiatan</th>
                      <th className="py-3 pl-4 w-4/12">Lokasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                    {ukm.agenda.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 pr-4 font-bold text-heading align-top">{row.tanggal}</td>
                        <td className="py-4 px-4 text-body leading-relaxed align-top">{row.kegiatan}</td>
                        <td className="py-4 pl-4 font-medium text-heading align-top">{row.lokasi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* PENGURUS 2026 */}
          {ukm.pengurus && ukm.pengurus.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
                {ukm.pengurusTitle || "Pengurus 2026"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ukm.pengurus.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col bg-white border border-gray-200/90 rounded-sm overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="aspect-[3/4] bg-[#eaeaea] overflow-hidden relative">
                      <Img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-heading leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-bold text-primary tracking-wider uppercase">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* CTA BOX: BERGABUNG */}
          {/* ========================================================================= */}
          {ukm.cta && (
            <section id="formulir-pendaftaran" className="bg-[#f9f9f9] border border-gray-200/90 rounded-sm p-8 sm:p-10 shadow-2xs space-y-4">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-body block">
                {ukm.cta.badge || "BERGABUNG"}
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-heading leading-snug">
                {ukm.cta.title}
              </h3>
              <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
                {ukm.cta.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#formulir"
                  className="inline-flex items-center justify-center bg-primary hover:bg-[#6b0f1a] text-white px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors rounded-sm shadow-xs"
                >
                  {ukm.cta.buttonText || "FORMULIR PENDAFTARAN"}
                </a>
                <Link
                  to="/mahasiswa/ukm"
                  className="inline-flex items-center justify-center bg-white border border-gray-300 hover:border-primary text-heading hover:text-primary px-6 py-3 text-xs sm:text-sm font-semibold transition-colors rounded-sm shadow-2xs"
                >
                  {ukm.cta.secondaryText || "Lihat unit kegiatan lain"}
                </Link>
              </div>
            </section>
          )}

          {/* Back to UKM List Link */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              to="/mahasiswa/ukm"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary hover:underline transition-colors"
            >
              ← Kembali ke Daftar Unit Kegiatan Mahasiswa
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
