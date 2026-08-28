import { Helmet } from "react-helmet-async";
import { FiBookOpen, FiDownload } from "react-icons/fi";
import pedomanPdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

const academicGuidelines = [
  {
    id: 1,
    title: "Buku Pedoman Akademik Program MKn 2024/2025",
    desc: "Panduan lengkap mengenai kurikulum, sistem kredit semester (SKS), evaluasi belajar, dan tata tertib akademik.",
    fileType: "PDF",
    fileSize: "3.2 MB",
    downloadUrl: pedomanPdf,
    fileName: "Pedoman-Akademik-MKN-UNISSULA.pdf",
  },
  {
    id: 2,
    title: "Panduan Penulisan & Prosedur Ujian Tesis",
    desc: "Format baku penulisan usulan penelitian (proposal), bimbingan, ujian komprehensif, dan sidang tesis.",
    fileType: "PDF",
    fileSize: "1.8 MB",
    downloadUrl: pedomanPdf,
    fileName: "Panduan-Penulisan-Tesis-MKN.pdf",
  },
  {
    id: 3,
    title: "Pedoman Magang Laboratorium Kenotariatan & Kantor Notaris/PPAT",
    desc: "Tata cara dan lembar kerja pelaksanaan magang praktik kemahiran kenotariatan.",
    fileType: "PDF",
    fileSize: "1.2 MB",
    downloadUrl: pedomanPdf,
    fileName: "Pedoman-Magang-Kenotariatan-MKN.pdf",
  },
  {
    id: 4,
    title: "Standar Operasional Prosedur (SOP) Yudisium & Wisuda",
    desc: "Syarat administratif, bebas pustaka, dan publikasi ilmiah untuk kelulusan program magister.",
    fileType: "PDF",
    fileSize: "950 KB",
    downloadUrl: pedomanPdf,
    fileName: "SOP-Yudisium-Wisuda-MKN.pdf",
  },
];

export default function Panduan() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Panduan Akademik & Prosedur | MKn UNISSULA</title>
        <meta
          name="description"
          content="Unduh buku panduan resmi, standar operasional prosedur penulisan tesis, dan regulasi akademik untuk menunjang kelancaran studi mahasiswa Program Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <div className="space-y-10 font-body text-body">
        {/* Header Title Section */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold text-heading tracking-tight leading-tight">
            Panduan Akademik
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Panduan akademik memuat ketentuan penyelenggaraan pendidikan Magister Kenotariatan: beban dan masa studi, registrasi, perkuliahan, cuti akademik, hingga kelulusan. Seluruh dokumen di bawah ini merupakan versi resmi yang berlaku pada tahun akademik 2024/2025.
          </p>
        </div>

        {/* List Card Panduan Akademik */}
        <div className="space-y-4">
          {academicGuidelines.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xs p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-gray-300 transition-all duration-200 shadow-2xs group"
            >
              {/* Sisi Kiri: Ikon Buku + Judul + Deskripsi + File Info */}
              <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                <div className="text-primary text-xl sm:text-2xl mt-0.5 shrink-0">
                  <FiBookOpen />
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <h2 className="font-heading font-bold text-base sm:text-[17px] text-heading leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium tracking-wide pt-1">
                    {item.fileType} ({item.fileSize})
                  </p>
                </div>
              </div>

              {/* Sisi Kanan: Tombol Unduh */}
              <div className="shrink-0 flex items-center self-start sm:self-center pl-9 sm:pl-0">
                <a
                  href={item.downloadUrl}
                  download={item.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-primary/50 text-primary hover:bg-primary hover:text-white rounded-xs text-xs font-medium transition-all duration-150 shadow-2xs cursor-pointer active:scale-98"
                >
                  <FiDownload className="text-xs" />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
