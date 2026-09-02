import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { studentOrganizationsData } from "../../data/studentOrganizationsData";

export default function StudentOrganizationDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const organization = studentOrganizationsData[0];

  return (
    <>
      <Helmet>
        <title>{`${organization.title} | MKn UNISSULA`}</title>
        <meta name="description" content={organization.description} />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body overflow-x-hidden">
        {/* Navbar */}
        <Navbar />

        {/* ========================================================================= */}
        {/* BREADCRUMB (Aligned with 1600px Max-Width) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-2">
          <Breadcrumb />
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
                  {organization.category || "ORGANISASI MAHASISWA"}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold text-heading leading-[1.15] tracking-normal">
                  {organization.title}
                </h1>
                <div className="w-full max-w-xl h-[2px] bg-primary mt-4 mb-5" />
                <p className="text-sm sm:text-base text-body leading-relaxed max-w-xl">
                  {organization.description}
                </p>
              </div>

              {/* Metadata Table */}
              {organization.meta && organization.meta.length > 0 && (
                <div className="w-full max-w-xl border-t border-gray-200 divide-y divide-gray-200 text-xs sm:text-sm pt-1">
                  {organization.meta.map((m, idx) => (
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
              <img
                src={organization.image}
                alt={organization.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MIDDLE 2-COLUMN MAIN CONTENT: Left Content Sections & Right Sidebar */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-10 sm:my-14 items-start">
            {/* Left Column (8 cols): Narrative, Quote, Bidang Kerja, Program Kerja, Aspirasi */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16 text-sm sm:text-base text-body leading-relaxed">
              {/* Narrative & Quote */}
              <div className="space-y-6">
                {organization.narrative?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                {/* Quote Block */}
                {organization.quote && (
                  <blockquote className="border-l-2 border-primary pl-5 sm:pl-6 py-2 my-8 space-y-2">
                    <p className="font-heading italic text-lg sm:text-xl md:text-[22px] text-special leading-snug">
                      “{organization.quote.text}”
                    </p>
                    {organization.quote.author && (
                      <footer className="text-xs sm:text-sm text-body font-normal">
                        {organization.quote.author}
                      </footer>
                    )}
                  </blockquote>
                )}
              </div>

              {/* BIDANG KERJA */}
              {organization.bidangKerja && organization.bidangKerja.length > 0 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
                    Bidang Kerja
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[550px]">
                      <thead>
                        <tr className="border-b-2 border-gray-900 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                          <th className="py-3 pr-4 w-1/4">Bidang</th>
                          <th className="py-3 px-4 w-1/2">Lingkup Kerja</th>
                          <th className="py-3 pl-4 w-1/4">Koordinator</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                        {organization.bidangKerja.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                            <td className="py-4 pr-4 font-bold text-heading align-top">{row.bidang}</td>
                            <td className="py-4 px-4 text-body leading-relaxed align-top">{row.lingkupKerja}</td>
                            <td className="py-4 pl-4 font-medium text-heading align-top">{row.koordinator}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* PROGRAM KERJA */}
              {organization.programKerja && organization.programKerja.length > 0 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
                    Program Kerja 2026/2027
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[550px]">
                      <thead>
                        <tr className="border-b-2 border-gray-900 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                          <th className="py-3 pr-4 w-5/12">Kegiatan</th>
                          <th className="py-3 px-4 w-3/12">Waktu</th>
                          <th className="py-3 pl-4 w-4/12">Bidang</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                        {organization.programKerja.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                            <td className="py-4 pr-4 font-bold text-heading align-top">{row.kegiatan}</td>
                            <td className="py-4 px-4 text-body align-top">{row.waktu}</td>
                            <td className="py-4 pl-4 text-body align-top">{row.bidang}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* CARA MENYAMPAIKAN ASPIRASI */}
              {organization.aspirasi && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-4 border-b-2 border-gray-900">
                    Cara Menyampaikan Aspirasi
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    {organization.aspirasi}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Summary & Contact Sidebar */}
            <aside className="lg:col-span-4 space-y-8 pl-0 lg:pl-6 lg:border-l border-gray-200 lg:sticky lg:top-24">
              {/* RINGKASAN */}
              {organization.summary && organization.summary.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] uppercase text-body pb-3 border-b border-gray-200">
                    RINGKASAN
                  </h3>
                  <div className="space-y-5">
                    {organization.summary.map((stat, idx) => (
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

              {/* KONTAK */}
              {organization.contact && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] uppercase text-body pb-3 border-b border-gray-200">
                    KONTAK
                  </h3>
                  <div className="text-xs sm:text-sm text-body space-y-1.5 leading-relaxed">
                    {organization.contact.lines?.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULL BLEED GALLERY: Mentok Kanan & Kiri Layar Penuh (Edge-to-Edge) */}
        {/* ========================================================================= */}
        {organization.gallery && organization.gallery.length > 0 && (
          <section className="w-full my-8 sm:my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
              {organization.gallery.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[380px] xl:h-[440px] bg-gray-200 overflow-hidden border-r border-white/20 last:border-r-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
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
        {/* BOTTOM CONTAINER (Pengurus Inti & Back Link) */}
        {/* ========================================================================= */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          {/* PENGURUS INTI */}
          {organization.pengurusInti && organization.pengurusInti.length > 0 && (
            <section className="mt-6 sm:mt-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
                Pengurus Inti 2026/2027
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {organization.pengurusInti.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col bg-white border border-gray-200/90 rounded-sm overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="aspect-[3/4] bg-[#eaeaea] overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
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

          {/* Navigasi Kemahasiswaan Lainnya */}
          <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between text-xs sm:text-sm">
            <Link
              to="/mahasiswa/ukm"
              className="inline-flex items-center font-semibold text-primary hover:underline transition-colors"
            >
              Unit Kegiatan Mahasiswa (UKM) →
            </Link>
            <Link
              to="/mahasiswa/akomodasi"
              className="inline-flex items-center font-medium text-body hover:text-primary transition-colors"
            >
              Informasi Akomodasi Mahasiswa →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
