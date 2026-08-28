import { Helmet } from "react-helmet-async";
import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

const educationStandards = [
  {
    code: "SP-01",
    name: "Standar kompetensi lulusan",
    indicator: "Ketercapaian CPL, masa tunggu kerja",
  },
  {
    code: "SP-02",
    name: "Standar isi pembelajaran",
    indicator: "Peninjauan kurikulum dua tahunan",
  },
  {
    code: "SP-03",
    name: "Standar proses pembelajaran",
    indicator: "Pertemuan terlaksana, kehadiran",
  },
  {
    code: "SP-04",
    name: "Standar penilaian pembelajaran",
    indicator: "Rubrik penilaian, ketepatan nilai",
  },
  {
    code: "SP-05",
    name: "Standar dosen dan tenaga kependidikan",
    indicator: "Kualifikasi, rasio dosen mahasiswa",
  },
  {
    code: "SP-06",
    name: "Standar sarana dan prasarana",
    indicator: "Kelayakan ruang dan laboratorium",
  },
  {
    code: "SP-07",
    name: "Standar pengelolaan pembelajaran",
    indicator: "Ketersediaan RPS, monitoring",
  },
  {
    code: "SP-08",
    name: "Standar pembiayaan pembelajaran",
    indicator: "Kecukupan dan realisasi anggaran",
  },
];

const researchStandards = [
  {
    code: "SL-01",
    name: "Standar hasil penelitian",
    indicator: "Publikasi jurnal bereputasi, sitasi",
  },
  {
    code: "SL-02",
    name: "Standar isi penelitian",
    indicator: "Kesesuaian roadmap riset kenotariatan",
  },
  {
    code: "SL-03",
    name: "Standar proses penelitian",
    indicator: "Peer review, kepatuhan etika riset",
  },
  {
    code: "SL-04",
    name: "Standar penilaian penelitian",
    indicator: "Kualitas luaran dan dampak ilmiah",
  },
  {
    code: "SL-05",
    name: "Standar peneliti",
    indicator: "Keterlibatan dosen dan mahasiswa tesis",
  },
  {
    code: "SL-06",
    name: "Standar sarana prasarana penelitian",
    indicator: "Akses repositori dan basis data hukum",
  },
  {
    code: "SL-07",
    name: "Standar pengelolaan penelitian",
    indicator: "Monitoring dan evaluasi hibah riset",
  },
  {
    code: "SL-08",
    name: "Standar pendanaan penelitian",
    indicator: "Alokasi dana riset internal & eksternal",
  },
];

const communityServiceStandards = [
  {
    code: "SM-01",
    name: "Standar hasil pengabdian",
    indicator: "Penyuluhan hukum, kemanfaatan publik",
  },
  {
    code: "SM-02",
    name: "Standar isi pengabdian",
    indicator: "Penerapan keilmuan kenotariatan & agraria",
  },
  {
    code: "SM-03",
    name: "Standar proses pengabdian",
    indicator: "Partisipasi mitra dan masyarakat binaan",
  },
  {
    code: "SM-04",
    name: "Standar penilaian pengabdian",
    indicator: "Evaluasi dampak dan kepuasan mitra",
  },
  {
    code: "SM-05",
    name: "Standar pelaksana pengabdian",
    indicator: "Kompetensi tim pelaksana PkM",
  },
  {
    code: "SM-06",
    name: "Standar sarana prasarana pengabdian",
    indicator: "Fasilitas pendukung konsultasi hukum",
  },
  {
    code: "SM-07",
    name: "Standar pengelolaan pengabdian",
    indicator: "Tata kelola program PkM berkelanjutan",
  },
  {
    code: "SM-08",
    name: "Standar pendanaan pengabdian",
    indicator: "Kecukupan anggaran kegiatan PkM",
  },
];

const standardDocuments = [
  {
    id: 1,
    title: "Buku Standar Mutu Pendidikan, Penelitian, dan PkM",
    meta: "PDF • 3,2 MB • Diperbarui 12 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Buku-Standar-Mutu-MKn-UNISSULA.pdf",
  },
  {
    id: 2,
    title: "Indikator Kinerja Utama dan Tambahan SPMI",
    meta: "PDF • 1,4 MB • Diperbarui 16 Feb 2024",
    fileUrl: samplePdf,
    fileName: "IKU-IKT-SPMI-MKn.pdf",
  },
  {
    id: 3,
    title: "Matriks Evaluasi Ketercapaian Standar Mutu",
    meta: "PDF • 0,8 MB • Diperbarui 18 Okt 2024",
    fileUrl: samplePdf,
    fileName: "Matriks-Ketercapaian-Standar-MKn.pdf",
  },
];

export default function QaStandar() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Standar | MKn UNISSULA</title>
        <meta
          name="description"
          content="Standar Penjaminan Mutu (QA Standar) Program Studi Magister Kenotariatan (MKn) UNISSULA: 24 Standar Mutu Pendidikan, Penelitian, dan Pengabdian kepada Masyarakat."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 font-body text-body">
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            QA DOCUMENTS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            QA Standar
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Dua puluh empat standar mutu program studi terbagi atas delapan standar pendidikan, delapan standar penelitian, dan delapan standar pengabdian kepada masyarakat. Setiap standar memuat pernyataan, indikator, dan target capaian yang diukur setiap tahun.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* STANDAR PENDIDIKAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Standar Pendidikan
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/6">KODE</th>
                  <th className="py-3.5 px-5 font-bold w-1/2">STANDAR</th>
                  <th className="py-3.5 px-5 font-bold w-1/3">INDIKATOR UTAMA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {educationStandards.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-heading whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.name}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.indicator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STANDAR PENELITIAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Standar Penelitian
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/6">KODE</th>
                  <th className="py-3.5 px-5 font-bold w-1/2">STANDAR</th>
                  <th className="py-3.5 px-5 font-bold w-1/3">INDIKATOR UTAMA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {researchStandards.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-heading whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.name}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.indicator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STANDAR PENGABDIAN KEPADA MASYARAKAT */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Standar Pengabdian kepada Masyarakat
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/6">KODE</th>
                  <th className="py-3.5 px-5 font-bold w-1/2">STANDAR</th>
                  <th className="py-3.5 px-5 font-bold w-1/3">INDIKATOR UTAMA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {communityServiceStandards.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-heading whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.name}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.indicator}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOKUMEN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Dokumen
            </h2>
          </div>

          <div className="divide-y divide-gray-200 bg-white border border-gray-200 shadow-2xs">
            {standardDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors group"
              >
                {/* Sisi Kiri: Ikon + Judul + Info */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-8 h-9 border-2 border-primary text-primary rounded-xs flex flex-col justify-between p-1 shrink-0 mt-0.5 group-hover:bg-primary/5 transition-colors">
                    <div className="w-3 h-0.5 bg-primary rounded-full"></div>
                    <div className="w-full h-3 bg-primary/80 rounded-2xs"></div>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-heading font-normal text-base sm:text-[17px] text-heading leading-snug group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-body">
                      {doc.meta}
                    </p>
                  </div>
                </div>

                {/* Sisi Kanan: Tombol Unduh */}
                <div className="shrink-0 flex items-center self-start sm:self-center pl-12 sm:pl-0">
                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-300 hover:border-primary hover:bg-primary hover:text-white text-heading rounded-xs text-xs font-medium transition-all duration-150 shadow-2xs cursor-pointer active:scale-98"
                  >
                    <span>Unduh</span>
                    <span className="text-xs">↓</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
