import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiImage } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { studentOrganizationsData } from "../../data/studentOrganizationsData";
import Img from "../../components/ui/Img";

/** Judul seksi dengan garis tebal, dipakai berulang di kolom utama. */
function JudulSeksi({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 mb-6 border-b-2 border-gray-900">
      {children}
    </h2>
  );
}

/**
 * Satu baris nama pengurus. NIM ditampilkan hanya bila dokumen sumber
 * mencantumkannya — beberapa nama memang belum memilikinya.
 */
function BarisNama({ name, nim, role }) {
  return (
    <div className="py-2.5 flex items-baseline justify-between gap-4">
      <div className="min-w-0">
        {role && (
          <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-primary mb-0.5">
            {role}
          </span>
        )}
        <span className="text-sm sm:text-[15px] font-medium text-heading leading-snug">
          {name}
        </span>
      </div>
      {nim && (
        <span className="text-xs text-body tabular-nums shrink-0">{nim}</span>
      )}
    </div>
  );
}

export default function StudentOrganizationDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const organization = studentOrganizationsData[0];

  return (
    <>
      <Helmet>
        <title>{`${organization.shortName} | MKn UNISSULA`}</title>
        <meta name="description" content={organization.description} />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body overflow-x-hidden">
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
                  {organization.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold text-heading leading-[1.15] tracking-normal">
                  {organization.shortName}
                </h1>
                <p className="mt-2 text-sm sm:text-base font-heading text-special leading-snug max-w-xl">
                  {organization.title}
                </p>
                <div className="w-full max-w-xl h-[2px] bg-primary mt-4 mb-5" />
                <p className="text-sm sm:text-base text-body leading-relaxed max-w-xl">
                  {organization.description}
                </p>
              </div>

              {/* Metadata Table */}
              {organization.meta?.length > 0 && (
                <div className="w-full max-w-xl border-t border-gray-200 divide-y divide-gray-200 text-xs sm:text-sm pt-1">
                  {organization.meta.map((m) => (
                    <div key={m.label} className="py-2.5 flex items-center justify-between gap-4">
                      <span className="text-body font-normal">{m.label}</span>
                      <span className="font-semibold text-heading text-right">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Photo Column (5 cols): Full Bleed Right */}
            <div className="lg:col-span-5 w-full bg-[#eaeaea] relative min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden flex items-center justify-center">
              <Img
                src={organization.image}
                alt={organization.imageCaption || organization.title}
                className="w-full h-full object-cover object-center rounded-md hover:scale-105 transition-transform duration-500"
                eager
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MIDDLE 2-COLUMN MAIN CONTENT: Left Content Sections & Right Sidebar */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 my-10 sm:my-14 items-start">
            {/* Left Column (8 cols): Sejarah, Fungsi & Tujuan, Program Kerja */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16 text-sm sm:text-base text-body leading-relaxed">
              {/* SEJARAH */}
              {organization.narrative?.length > 0 && (
                <div>
                  <JudulSeksi>Sejarah</JudulSeksi>
                  <div className="space-y-5">
                    {organization.narrative.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* FUNGSI DAN TUJUAN */}
              {organization.fungsi?.length > 0 && (
                <div>
                  <JudulSeksi>Fungsi dan Tujuan</JudulSeksi>
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-gray-200 bg-white">
                    {organization.fungsi.map((fungsi, idx) => (
                      <div
                        key={fungsi}
                        className="p-5 sm:p-6 border-r border-b border-gray-200 space-y-2"
                      >
                        <span className="text-sm font-bold text-primary tabular-nums">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm text-body leading-relaxed">{fungsi}</p>
                      </div>
                    ))}
                  </div>
                  {organization.tujuan && (
                    <p className="mt-6 text-sm sm:text-base leading-relaxed">
                      {organization.tujuan}
                    </p>
                  )}
                </div>
              )}

              {/* PROGRAM KERJA — dikelompokkan per divisi, sesuai hasil RAKER */}
              {organization.programKerja?.length > 0 && (
                <div>
                  <JudulSeksi>Program Kerja {organization.periode}</JudulSeksi>
                  <div className="space-y-8">
                    {organization.programKerja.map((group, idx) => (
                      <div key={group.divisi}>
                        <div className="flex items-baseline gap-3 pb-2 mb-3 border-b border-gray-200">
                          <span className="font-heading text-lg font-bold text-primary tabular-nums leading-none">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-heading font-bold text-base sm:text-lg text-heading leading-snug">
                            {group.divisi}
                          </h3>
                        </div>
                        <ul className="space-y-2.5 pl-1">
                          {group.items.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-relaxed">
                              <span className="text-primary shrink-0 mt-[3px]">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Ringkasan & Landasan */}
            <aside className="lg:col-span-4 space-y-8 pl-0 lg:pl-6 lg:border-l border-gray-200 lg:sticky lg:top-[calc(var(--header-h)+0.5rem)] lg:self-start">
              {/* RINGKASAN */}
              {organization.summary?.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] uppercase text-body pb-3 border-b border-gray-200">
                    RINGKASAN
                  </h3>
                  <div className="space-y-5">
                    {organization.summary.map((stat) => (
                      <div key={stat.label} className="space-y-0.5">
                        <div className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-none">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-body">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LANDASAN */}
              {organization.landasan?.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-[11px] font-bold tracking-[0.16em] uppercase text-body pb-3 border-b border-gray-200">
                    LANDASAN
                  </h3>
                  <ul className="space-y-2">
                    {organization.landasan.map((nilai) => (
                      <li
                        key={nilai}
                        className="text-xs sm:text-sm text-heading font-medium border-l-2 border-primary pl-3 py-0.5"
                      >
                        {nilai}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULL BLEED GALLERY: Mentok Kanan & Kiri Layar Penuh (Edge-to-Edge) */}
        {/* Selama `image` kosong, tampil bingkai penampung agar tata letaknya   */}
        {/* sudah terlihat sebelum foto asli dipasang.                           */}
        {/* ========================================================================= */}
        {organization.gallery?.length > 0 && (
          <section className="w-full my-8 sm:my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
              {organization.gallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[380px] xl:h-[440px] bg-gray-200 overflow-hidden border-r border-white/20 last:border-r-0"
                >
                  {item.image ? (
                    <>
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
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center gap-2 p-6">
                      <FiImage className="text-3xl text-gray-300" />
                      <span className="text-sm sm:text-base font-medium text-heading">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-400 uppercase tracking-[0.14em]">
                        Foto menyusul
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* STRUKTUR ORGANISASI (Pengurus Inti & Divisi) */}
        {/* ========================================================================= */}
        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <section>
            <JudulSeksi>Struktur Organisasi {organization.periode}</JudulSeksi>

            {/* Pengurus Inti — tanpa foto, program studi belum menyerahkan pas foto */}
            {organization.pengurusInti?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200 bg-white">
                {organization.pengurusInti.map((member) => (
                  <div
                    key={member.role}
                    className="px-5 py-4 sm:px-6 sm:py-5 border-r border-b border-gray-200"
                  >
                    <BarisNama {...member} />
                  </div>
                ))}
              </div>
            )}

            {/* Divisi beserta koordinator dan anggotanya */}
            {organization.divisi?.length > 0 && (
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {organization.divisi.map((div) => (
                  <div
                    key={div.nama}
                    className="bg-white border border-gray-200 rounded-xs p-6 flex flex-col"
                  >
                    <h3 className="font-heading font-bold text-base sm:text-lg text-heading leading-snug pb-3 border-b-2 border-primary">
                      {div.nama}
                    </h3>

                    <div className="mt-4">
                      <BarisNama
                        role="Koordinator"
                        name={div.koordinator.name}
                        nim={div.koordinator.nim}
                      />
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-body mb-1">
                        Anggota
                      </span>
                      <ol className="divide-y divide-gray-100">
                        {div.anggota.map((anggota, idx) => (
                          <li key={anggota.name} className="flex gap-3 items-baseline">
                            <span className="text-xs text-gray-400 tabular-nums w-4 shrink-0">
                              {idx + 1}.
                            </span>
                            <div className="flex-1 min-w-0">
                              <BarisNama name={anggota.name} nim={anggota.nim} />
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Navigasi Kemahasiswaan Lainnya */}
          <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-end text-xs sm:text-sm">
            <Link
              to="/mahasiswa/akomodasi"
              className="inline-flex items-center font-semibold text-primary hover:underline transition-colors"
            >
              Informasi Akomodasi Mahasiswa →
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
