import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Img from "../../components/ui/Img";
import imgIkanotsula from "../../assets/images/ikanotsula-1.jpeg";

// Data resmi IKANOTSULA & Lowongan Pekerjaan
const ikanotsulaData = {
  title: "IKANOTSULA (Ikatan Alumni Magister Kenotariatan UNISSULA)",
  category: "ORGANISASI ALUMNI",
  image: imgIkanotsula,
  meta: [
    { label: "Tanggal Berdiri", value: "21 November 2015" },
    { label: "SK Pengesahan", value: "1056/A.1/SA-H/V/2024" },
    { label: "Periode Kepengurusan", value: "2024 – 2028" },
    { label: "Ketua Umum", value: "Fatiroh, S.H., M.Hum., M.Kn." },
  ],
  narrative: [
    "Ikatan Alumni Magister Kenotariatan UNISSULA (IKANOTSULA) dibentuk pertama kali pada tanggal 21 November 2015 oleh para alumni angkatan pertama dan ketiga. Awalnya bernama IKAMANOTSULA, kemudian disederhanakan menjadi IKANOTSULA agar lebih mudah dikenal dan diingat.",
    "IKANOTSULA hadir sebagai wadah pemersatu resmi untuk menjembatani para fresh graduate dalam masa transisi memasuki dunia kerja, mempersiapkan alumni menjadi Anggota Luar Biasa (ALB) Ikatan Notaris Indonesia (INI), serta menjadi media pertukaran pengalaman praktik kenotariatan dan pertanahan antar-generasi.",
    "Sebagai bagian integral dari almamater Universitas Islam Sultan Agung, IKANOTSULA berkomitmen mewujudkan generasi Khaira Ummah dengan menjunjung tinggi nilai-nilai keunggulan, kepeloporan, perjuangan, dan pengabdian bagi kemajuan ilmu pengetahuan dan masyarakat.",
  ],
  quote: {
    text: "Menjadi pelopor kemajuan peradaban dan berkontribusi nyata pada peningkatan daya saing bangsa di bidang ilmu hukum kenotariatan dan pertanahan.",
    author: "Profil IKANOTSULA UNISSULA",
  },
  bidangKerja: [
    {
      bidang: "Pendidikan & Pelatihan",
      lingkupKerja: "Penyelenggaraan bimtek, pelatihan ujian PPAT, dan ujian Kode Etik Notaris.",
      koordinator: "Laeli Nurchamidah, S.H., M.Kn.",
    },
    {
      bidang: "Humas & Publikasi",
      lingkupKerja: "Pengelolaan media informasi, komunikasi alumni, dan publisitas kegiatan.",
      koordinator: "Moch. Nur Ali Zamroni, S.H., M.Kn.",
    },
    {
      bidang: "Sosial & Pengabdian",
      lingkupKerja: "Bakti sosial, kepedulian kemasyarakat, serta pengabdian masyarakat.",
      koordinator: "Sri Harsi Kusumawardani, S.H., M.Kn.",
    },
    {
      bidang: "Pengayoman & Hukum",
      lingkupKerja: "Bantuan advokasi, pengayoman anggota, dan perlindungan profesi alumni.",
      koordinator: "Dedy Haryanto, S.H., M.Kn.",
    },
    {
      bidang: "Koordinator Daerah",
      lingkupKerja: "Jejaring antar-alumni di tingkat Kabupaten/Kota seluruh Indonesia.",
      koordinator: "Edy Sutrisno, S.H., M.Kn.",
    },
  ],
  programKerja: [
    {
      kegiatan: "Bimtek & Pelatihan Ujian PPAT",
      waktu: "Periodik / Tahunan",
      bidang: "Pendidikan & Pelatihan",
    },
    {
      kegiatan: "Pelatihan Ujian Kode Etik Notaris (UKEN)",
      waktu: "Periodik",
      bidang: "Pendidikan & Pelatihan",
    },
    {
      kegiatan: "Program Bakti Sosial & Kepedulian Masyarakat",
      waktu: "Insidental / Tahunan",
      bidang: "Sosial & Pengabdian",
    },
    {
      kegiatan: "Konsolidasi & Silaturahmi Alumni Nasional",
      waktu: "Berkala",
      bidang: "Koordinator Daerah",
    },
  ],
  summary: [
    { number: "2015", label: "Tahun Berdiri Organisasi" },
    { number: "50+", label: "Koordinator Daerah Se-Indonesia" },
    { number: "2024–2028", label: "Masa Bakti Kepengurusan" },
  ],
  gallery: [
    { id: 1, title: "Kegiatan Pelatihan Ujian PPAT", image: "/images/alumni/gallery-1.jpg" },
    { id: 2, title: "Bakti Sosial Alumni UNISSULA", image: "/images/alumni/gallery-2.jpg" },
    { id: 3, title: "Silaturahmi Pengurus IKANOTSULA", image: "/images/alumni/gallery-3.jpg" },
  ],
  pengurusInti: [
    {
      id: "1",
      name: "Fatiroh, S.H., M.Hum., M.Kn.",
      role: "Ketua Umum",
      image: "/images/alumni/fatiroh.jpg",
    },
    {
      id: "2",
      name: "Frans Ferbianto, S.H., M.Kn.",
      role: "Wakil Ketua Umum",
      image: "/images/alumni/frans.jpg",
    },
    {
      id: "3",
      name: "Eka Hendra Muspiyanto, S.H., M.Kn.",
      role: "Sekretaris Jenderal",
      image: "/images/alumni/eka-hendra.jpg",
    },
    {
      id: "4",
      name: "Rustiana Apri Setiaji, S.H., M.Kn.",
      role: "Bendahara",
      image: "/images/alumni/rustiana.jpg",
    },
  ],
};

export default function IkanotsulaDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const organization = ikanotsulaData;


  return (
    <>
      <Helmet>
        <title>{`${organization.title} | MKn UNISSULA`}</title>
        <meta name="description" content={organization.description} />
      </Helmet>

        <section className="w-full">
          <div className="mx-auto space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-primary">
                {organization.category || "ORGANISASI ALUMNI"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
                {organization.title}
              </h1>
            </div>

            {/* Gambar Utama Memanjang Full-Width */}
            <div className="w-full h-[300px] sm:h-[420px] lg:h-[480px] bg-[#eaeaea] overflow-hidden rounded-md border border-gray-200">
              <Img
                src={organization.image}
                alt={organization.title}
                className="w-full h-full object-cover object-center"
                eager
              />
            </div>

            {/* Metadata Bar Horizontal */}
            {organization.meta && organization.meta.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                {organization.meta.map((m, idx) => (
                  <div key={idx} className="p-3 bg-gray-50/80 rounded border border-gray-100 flex flex-col justify-between">
                    <span className="text-xs text-body font-normal uppercase tracking-wider mb-1">{m.label}</span>
                    <span className="font-semibold text-heading text-sm sm:text-base">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* KONTEN UTAMA (1 KOLOM TUNGGAL MEMANJANG) */}
        {/* ========================================================================= */}
        <div className="w-full mx-auto py-10 sm:py-14 space-y-12 sm:space-y-16">
          
          {/* RINGKASAN ORGANISASI (STRIP STATISTIK HORIZONTAL) */}
          {organization.summary && organization.summary.length > 0 && (
            <section className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-2xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {organization.summary.map((stat, idx) => (
                  <div key={idx} className={`space-y-1 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-body font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NARASI & KUTIPAN */}
          <section className="space-y-6 text-sm sm:text-base text-body leading-relaxed">
            {organization.narrative?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {organization.quote && (
              <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 bg-white/50 rounded-r-lg">
                <p className="font-heading italic text-lg sm:text-xl md:text-2xl text-special leading-snug">
                  “{organization.quote.text}”
                </p>
                {organization.quote.author && (
                  <footer className="text-xs sm:text-sm text-body font-normal mt-2">
                    — {organization.quote.author}
                  </footer>
                )}
              </blockquote>
            )}
          </section>

          {/* BIDANG KERJA */}
          {organization.bidangKerja && organization.bidangKerja.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Bidang Kerja
              </h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                      <th className="py-3 px-4 w-1/4">Bidang</th>
                      <th className="py-3 px-4 w-1/2">Lingkup Kerja</th>
                      <th className="py-3 px-4 w-1/4">Koordinator</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                    {organization.bidangKerja.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 px-4 font-bold text-heading align-top">{row.bidang}</td>
                        <td className="py-4 px-4 text-body leading-relaxed align-top">{row.lingkupKerja}</td>
                        <td className="py-4 px-4 font-medium text-heading align-top">{row.koordinator}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* PROGRAM KERJA UTAMA */}
          {organization.programKerja && organization.programKerja.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Program Kerja Utama
              </h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse min-w-[550px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                      <th className="py-3 px-4 w-5/12">Kegiatan</th>
                      <th className="py-3 px-4 w-3/12">Waktu / Pelaksanaan</th>
                      <th className="py-3 px-4 w-4/12">Bidang</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                    {organization.programKerja.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 px-4 font-bold text-heading align-top">{row.kegiatan}</td>
                        <td className="py-4 px-4 text-body align-top">{row.waktu}</td>
                        <td className="py-4 px-4 text-body align-top">{row.bidang}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* PENGURUS INTI */}
          {organization.pengurusInti && organization.pengurusInti.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Pengurus Inti Periode 2024–2028
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {organization.pengurusInti.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300 group"
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

          {/* GALERI FOTO */}
          {organization.gallery && organization.gallery.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Galeri Kegiatan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {organization.gallery.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="group relative aspect-[4/3] rounded-md bg-gray-200 overflow-hidden border border-gray-200"
                  >
                    <Img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                      <span className="text-sm font-medium text-white tracking-wide drop-shadow-md">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
    </>
  );
}