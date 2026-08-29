import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { facultyData } from "../../data/facultyData";

export default function FacultyDetail() {
  const { slug } = useParams();

  // Cari dosen berdasarkan slug atau id
  const faculty = facultyData.find(
    (f) => f.slug === slug || String(f.id) === slug
  );

  // Jika tidak ditemukan, redirect kembali ke direktori dosen
  if (!faculty) {
    return <Navigate to="/staff/dosen" replace />;
  }

  // Ambil 3 rekomendasi dosen lain
  const otherLecturers = facultyData
    .filter((f) => f.id !== faculty.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>{`${faculty.name} | MKn UNISSULA`}</title>
        <meta
          name="description"
          content={`Profil ${faculty.name}, ${faculty.title} Program Studi Magister Kenotariatan (MKn) UNISSULA.`}
        />
      </Helmet>

      <div className="w-full font-body text-body">
        {/* ========================================================================= */}
        {/* HERO SECTION: Asymmetrical Layout (Left Aligned Container, Right Full-Bleed) */}
        {/* ========================================================================= */}
        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Kolom Kiri (7 Cols): Teks & Data Rapat Sejajar Margin Container 1600px */}
            <div className="lg:col-span-7 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-1600px)/2+2rem))] pr-4 sm:pr-8 lg:pr-14 py-6 sm:py-8 space-y-6">
              <div className="space-y-2.5">
                <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
                  STAF · DOSEN
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
                  {faculty.name}
                </h1>

                <p className="font-heading italic text-lg sm:text-xl text-special">
                  {faculty.title}
                </p>

                <div className="w-full max-w-xl h-[2px] bg-primary my-3.5" />

                <p className="text-sm sm:text-base text-body leading-relaxed max-w-xl">
                  {faculty.bio}
                </p>
              </div>

              {/* Metadata Rows - Dibatasi max-w-xl agar tidak melebar mendekati foto */}
              <div className="w-full max-w-xl pt-2 divide-y border-gray-100 border-t text-xs sm:text-sm">
                {faculty.nidn && (
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-body font-medium">NIDN</span>
                    <span className="font-semibold text-heading">{faculty.nidn}</span>
                  </div>
                )}
                {faculty.joinedYear && (
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-body font-medium">Bergabung</span>
                    <span className="font-semibold text-heading">{faculty.joinedYear}</span>
                  </div>
                )}
                {faculty.email && (
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-body font-medium">Surel</span>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="font-semibold text-heading hover:text-primary transition-colors"
                    >
                      {faculty.email}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Kolom Kanan (5 Cols): Mentok sampai Ujung Kanan Layar (Full Bleed Right) */}
            <div className="lg:col-span-5 w-full bg-[#eaeaea] relative min-h-75 sm:min-h-90 lg:min-h-full overflow-hidden flex items-center justify-center">
              {faculty.image ? (
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover object-[center_15%] grayscale contrast-105"
                  loading="eager"
                />
              ) : (
                <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                  {faculty.imageCaption || `Potret ${faculty.shortName || faculty.name}`}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* KONTEN UTAMA & SIDEBAR (Di dalam container standar 1600px) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Kolom Kiri (8 Cols): Biografi, Mata Kuliah, Publikasi, Pengabdian */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {/* Paragraf Biografi Lengkap */}
              {faculty.fullBio && faculty.fullBio.length > 0 && (
                <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
                  {faculty.fullBio.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Mata Kuliah yang Diampu */}
              {faculty.courses && faculty.courses.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-heading font-normal text-heading tracking-tight">
                    Mata Kuliah yang Diampu
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                          <th className="py-3 pr-4 font-bold">MATA KULIAH</th>
                          <th className="py-3 px-4 font-bold">PENEMPATAN</th>
                          <th className="py-3 pl-4 font-bold text-right">SKS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {faculty.courses.map((course, idx) => (
                          <tr key={idx} className="text-body">
                            <td className="py-3.5 pr-4 font-medium text-heading">
                              {course.name}
                            </td>
                            <td className="py-3.5 px-4">{course.placement}</td>
                            <td className="py-3.5 pl-4 text-right font-medium">
                              {course.sks}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Publikasi Terpilih */}
              {faculty.publications && faculty.publications.length > 0 && (
                <section className="space-y-4">
                  <div className="pb-2 border-b-2 border-heading">
                    <h2 className="text-2xl sm:text-3xl font-heading font-normal text-heading tracking-tight">
                      Publikasi Terpilih
                    </h2>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {faculty.publications.map((pub, idx) => (
                      <div key={idx} className="py-5 space-y-1.5">
                        <span className="text-xs font-bold text-primary tracking-wider block">
                          {pub.year}
                        </span>
                        <h3 className="font-heading italic text-base sm:text-lg text-heading leading-snug">
                          {pub.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-body leading-relaxed">
                          {pub.journal}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Pengabdian dan Penugasan */}
              {faculty.communityServices && faculty.communityServices.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-heading font-normal text-heading tracking-tight">
                    Pengabdian dan Penugasan
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                          <th className="py-3 pr-4 font-bold">PENUGASAN</th>
                          <th className="py-3 px-4 font-bold">INSTITUSI</th>
                          <th className="py-3 pl-4 font-bold text-right sm:text-left">PERIODE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {faculty.communityServices.map((service, idx) => (
                          <tr key={idx} className="text-body">
                            <td className="py-3.5 pr-4 font-medium text-heading">
                              {service.role}
                            </td>
                            <td className="py-3.5 px-4">{service.institution}</td>
                            <td className="py-3.5 pl-4 text-right sm:text-left">
                              {service.period}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </div>

            {/* Kolom Kanan / Sidebar (4 Cols): Riwayat Pendidikan & Dosen Lain */}
            <aside className="lg:col-span-4 space-y-10 lg:pl-2">
              {/* Riwayat Pendidikan */}
              {faculty.education && faculty.education.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold tracking-[0.14em] uppercase text-body pb-2 border-b border-gray-200">
                    RIWAYAT PENDIDIKAN
                  </h3>
                  <div className="space-y-5 pt-1">
                    {faculty.education.map((edu, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-xs sm:text-sm font-bold text-primary block">
                          {edu.year}
                        </span>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-heading">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-body">
                          {edu.university}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dosen Lain */}
              {otherLecturers.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-xs font-bold tracking-[0.14em] uppercase text-body pb-2 border-b border-gray-200">
                    DOSEN LAIN
                  </h3>
                  <div className="space-y-4 pt-1">
                    {otherLecturers.map((other) => (
                      <Link
                        key={other.id}
                        to={`/staff/dosen/${other.slug || other.id}`}
                        className="block group"
                      >
                        <h4 className="text-xs sm:text-sm font-semibold text-heading group-hover:text-primary transition-colors">
                          {other.shortName || other.name}
                        </h4>
                        <p className="text-xs text-body mt-0.5">
                          {other.title}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/staff/dosen"
                      className="block w-full py-2.5 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-heading text-xs font-medium text-center rounded-xs transition-colors shadow-2xs"
                    >
                      Semua dosen
                    </Link>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
