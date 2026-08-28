import { Helmet } from "react-helmet-async";
import { FiBookOpen, FiDownload } from "react-icons/fi";
import skKurikulumPdf from "../../assets/pdf/SK-REKTOR-Kurikulum-MKN-2023.pdf";

const curriculumDocuments = [
  {
    id: 1,
    title: "Surat Keputusan Rektor tentang Kurikulum Program Studi Magister Kenotariatan",
    desc: "Dokumen resmi Surat Keputusan (SK) Rektor Universitas Islam Sultan Agung tentang penetapan, struktur kurikulum, sebaran mata kuliah, beban SKS, dan silabus Program Studi Magister Kenotariatan (MKn).",
    fileType: "PDF",
    fileSize: "1.4 MB",
    downloadUrl: skKurikulumPdf,
    fileName: "SK-REKTOR-Kurikulum-MKN-2023.pdf",
  },
];

export default function Kurikulum() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Kurikulum Program Studi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Dokumen resmi SK Rektor penetapan struktur kurikulum, sebaran mata kuliah, dan silabus Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-10 font-body text-body">
        {/* Header Title Section */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            Kurikulum
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Kurikulum Program Studi Magister Kenotariatan UNISSULA dirancang untuk membekali mahasiswa dengan keahlian hukum teoretis yang mendalam serta kemahiran praktis dalam pembuatan akta autentik dan hukum kenotariatan. Seluruh ketentuan kurikulum ditetapkan secara resmi melalui Surat Keputusan Rektor berikut.
          </p>
        </div>

        {/* List Card Dokumen Kurikulum */}
        <div className="space-y-4">
          {curriculumDocuments.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12 hover:border-gray-300 transition-all duration-200 shadow-2xs group"
            >
              {/* Sisi Kiri: Ikon Buku + Judul + Deskripsi + File Info */}
              <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
                  <FiBookOpen />
                </div>

                <div className="space-y-2 flex-1 min-w-0 max-w-2xl">
                  <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium tracking-wide pt-0.5">
                    {item.fileType} ({item.fileSize})
                  </p>
                </div>
              </div>

              {/* Sisi Kanan: Tombol Unduh Lebih Proporsional */}
              <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
                <a
                  href={item.downloadUrl}
                  download={item.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-gray-300 hover:border-primary hover:bg-primary hover:text-white text-heading rounded-xs text-xs sm:text-sm font-semibold transition-all duration-150 shadow-2xs cursor-pointer active:scale-98"
                >
                  <span>Unduh</span>
                  <FiDownload className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
