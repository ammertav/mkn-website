import { Helmet } from "react-helmet-async";

const featuredStaff = [
  {
    name: "Sri Rahayu, S.E.",
    role: "KEPALA TATA USAHA",
    desc: "Koordinasi administrasi umum, kepegawaian, dan keuangan program studi.",
    meta: "Bergabung 2011 · ext. 511",
  },
  {
    name: "Muhammad Fauzan, S.Kom.",
    role: "ADMINISTRATOR SISTEM AKADEMIK",
    desc: "Pengelolaan SIAKAD, e-learning, dan basis data nilai mahasiswa.",
    meta: "Bergabung 2016 · ext. 512",
  },
  {
    name: "Dewi Lestari, S.H.",
    role: "STAF AKADEMIK DAN UJIAN",
    desc: "Penjadwalan perkuliahan, kartu ujian, dan berita acara ujian tesis.",
    meta: "Bergabung 2014 · ext. 513",
  },
  {
    name: "Anisa Puspitasari, S.I.Pust.",
    role: "PUSTAKAWAN",
    desc: "Layanan sirkulasi, katalog daring, dan bimbingan penelusuran literatur.",
    meta: "Bergabung 2018 · ext. 515",
  },
];

const staffList = [
  {
    name: "Sri Rahayu, S.E.",
    role: "Kepala Tata Usaha",
    education: "S1 Ekonomi",
    ext: "511",
  },
  {
    name: "Muhammad Fauzan, S.Kom.",
    role: "Administrator Sistem Akademik",
    education: "S1 Ilmu Komputer",
    ext: "512",
  },
  {
    name: "Dewi Lestari, S.H.",
    role: "Staf Akademik dan Ujian",
    education: "S1 Hukum",
    ext: "513",
  },
  {
    name: "Bayu Setiawan, S.H.",
    role: "Staf Penjaminan Mutu",
    education: "S1 Hukum",
    ext: "514",
  },
  {
    name: "Anisa Puspitasari, S.I.Pust.",
    role: "Pustakawan",
    education: "S1 Ilmu Perpustakaan",
    ext: "515",
  },
  {
    name: "Rizal Kurniawan, A.Md.",
    role: "Teknisi Laboratorium",
    education: "D3 Teknik Informatika",
    ext: "516",
  },
  {
    name: "Nur Hidayah, S.Pd.",
    role: "Staf Kemahasiswaan dan Alumni",
    education: "S1 Pendidikan",
    ext: "517",
  },
  {
    name: "Ahmad Syaifudin",
    role: "Staf Keuangan",
    education: "SMA",
    ext: "518",
  },
  {
    name: "Siti Aminah",
    role: "Staf Layanan Umum",
    education: "SMA",
    ext: "519",
  },
];

const serviceSLA = [
  {
    service: "Surat keterangan aktif kuliah",
    officer: "Staf Akademik",
    duration: "1 hari kerja",
  },
  {
    service: "Transkrip nilai sementara",
    officer: "Administrator Sistem Akademik",
    duration: "2 hari kerja",
  },
  {
    service: "Surat izin penelitian tesis",
    officer: "Staf Akademik",
    duration: "3 hari kerja",
  },
  {
    service: "Legalisasi ijazah dan transkrip",
    officer: "Kepala Tata Usaha",
    duration: "2 hari kerja",
  },
  {
    service: "Surat bebas pinjaman perpustakaan",
    officer: "Pustakawan",
    duration: "Hari yang sama",
  },
  {
    service: "Peminjaman ruang dan laboratorium",
    officer: "Teknisi Laboratorium",
    duration: "1 hari kerja",
  },
];

const competencyDevelopments = [
  {
    program: "Pelatihan pengelolaan data akademik",
    organizer: "Universitas",
    year: "2024",
    participants: "4 staf",
  },
  {
    program: "Sertifikasi pustakawan tingkat ahli",
    organizer: "Perpustakaan Nasional",
    year: "2024",
    participants: "1 staf",
  },
  {
    program: "Pelatihan pelayanan prima",
    organizer: "Universitas",
    year: "2023",
    participants: "9 staf",
  },
  {
    program: "Pelatihan audit mutu internal",
    organizer: "Badan Penjaminan Mutu",
    year: "2023",
    participants: "2 staf",
  },
];

const downloadDocuments = [
  {
    title: "Standar Pelayanan Administrasi Akademik",
    version: "v2.1",
    date: "22 Jul 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Formulir Permohonan Surat Keterangan",
    version: "v1.5",
    date: "22 Jul 2024",
    format: "DOCX",
    href: "#",
  },
];

export default function Tendik() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Tenaga Kependidikan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Direktori Tenaga Kependidikan (Tendik) Program Studi Magister Kenotariatan (MKn) UNISSULA, layanan administrasi, dan standar waktu penyelesaian."
        />
      </Helmet>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            STAF
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Tenaga Kependidikan
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-3xl">
            Tenaga kependidikan menopang penyelenggaraan akademik program studi: administrasi
            perkuliahan dan ujian, pengelolaan basis data akademik, layanan perpustakaan dan
            laboratorium, serta dukungan penjaminan mutu. Sembilan staf bertugas dengan
            pembagian bidang yang tetap dan digilir pada layanan loket.
          </p>
        </div>

        {/* Featured Staff Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredStaff.map((staff, idx) => (
            <div
              key={idx}
              className="border border-gray-200 bg-white p-6 sm:p-7 flex items-start gap-4 sm:gap-5 transition-colors"
            >
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gray-200/80 flex items-center justify-center text-gray-500 text-xs sm:text-sm shrink-0 font-medium">
                Foto
              </div>
              <div className="space-y-2 flex-grow">
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-heading">
                    {staff.name}
                  </h3>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-primary block mt-0.5">
                    {staff.role}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-body leading-relaxed">
                  {staff.desc}
                </p>
                <span className="text-xs text-gray-500 block pt-1">
                  {staff.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 1: Daftar Tenaga Kependidikan */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Daftar Tenaga Kependidikan
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    NAMA
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    JABATAN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    PENDIDIKAN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-28">
                    EKSTENSI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {staffList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading">
                      {item.name}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.role}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.education}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.ext}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Layanan dan Waktu Penyelesaian */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Layanan dan Waktu Penyelesaian
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    LAYANAN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    PELAKSANA
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-44">
                    WAKTU PENYELESAIAN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {serviceSLA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading">
                      {item.service}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.officer}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Pengembangan Kompetensi */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Pengembangan Kompetensi
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    PROGRAM
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    PENYELENGGARA
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    TAHUN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-28">
                    PESERTA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {competencyDevelopments.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading">
                      {item.program}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.organizer}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.year}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.participants}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Dokumen Unduhan */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Dokumen Unduhan
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    JUDUL DOKUMEN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    VERSI
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36">
                    TANGGAL
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    UNDUH
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {downloadDocuments.map((doc, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 text-heading font-normal">
                      {doc.title}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {doc.version}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-4 px-5 sm:px-6 whitespace-nowrap">
                      <a
                        href={doc.href}
                        onClick={(e) => {
                          if (doc.href === "#") {
                            e.preventDefault();
                            alert(`Mengunduh berkas: ${doc.title}`);
                          }
                        }}
                        className="text-xs font-bold text-primary hover:underline uppercase inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{doc.format}</span>
                        <span>↓</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
