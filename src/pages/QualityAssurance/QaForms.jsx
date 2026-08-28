import { Helmet } from "react-helmet-async";
import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

const formList = [
  {
    code: "FM-01",
    name: "Formulir monitoring perkuliahan",
    user: "Koordinator mata kuliah",
    period: "Tiap pertemuan",
  },
  {
    code: "FM-02",
    name: "Formulir berita acara ujian",
    user: "Pengawas ujian",
    period: "UTS dan UAS",
  },
  {
    code: "FM-03",
    name: "Formulir bimbingan tesis",
    user: "Dosen pembimbing",
    period: "Tiap bimbingan",
  },
  {
    code: "FM-04",
    name: "Formulir tindak lanjut temuan audit",
    user: "Ketua Program Studi",
    period: "Setelah audit",
  },
  {
    code: "FM-05",
    name: "Formulir survei kepuasan mahasiswa",
    user: "Gugus Penjaminan Mutu",
    period: "Akhir semester",
  },
  {
    code: "FM-06",
    name: "Formulir survei pengguna lulusan",
    user: "Gugus Penjaminan Mutu",
    period: "Tahunan",
  },
  {
    code: "FM-07",
    name: "Formulir peninjauan kurikulum",
    user: "Tim kurikulum",
    period: "Dua tahunan",
  },
];

const downloadableForms = [
  {
    id: 1,
    title: "Paket Formulir Mutu Lengkap (FM-01 s.d. FM-07)",
    meta: "ZIP • 1,4 MB • Diperbarui 22 Jul 2024",
    fileUrl: samplePdf,
    fileName: "Paket-Formulir-Mutu-MKn.zip",
  },
  {
    id: 2,
    title: "Formulir Monitoring Perkuliahan (FM-01)",
    meta: "DOCX • 0,1 MB • Diperbarui 22 Jul 2024",
    fileUrl: samplePdf,
    fileName: "FM-01-Monitoring-Perkuliahan.docx",
  },
  {
    id: 3,
    title: "Formulir Tindak Lanjut Temuan Audit (FM-04)",
    meta: "DOCX • 0,2 MB • Diperbarui 15 Jan 2024",
    fileUrl: samplePdf,
    fileName: "FM-04-Tindak-Lanjut-Audit.docx",
  },
  {
    id: 4,
    title: "Formulir Survei Kepuasan Mahasiswa (FM-05)",
    meta: "DOCX • 0,2 MB • Diperbarui 10 Jan 2024",
    fileUrl: samplePdf,
    fileName: "FM-05-Survei-Kepuasan-Mahasiswa.docx",
  },
];

export default function QaForms() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Forms | MKn UNISSULA</title>
        <meta
          name="description"
          content="Kumpulan formulir mutu dan berkas instrumen SPMI (QA Forms) Program Studi Magister Kenotariatan (MKn) UNISSULA."
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
            QA Forms
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Formulir mutu dipakai untuk mencatat bukti pelaksanaan standar: monitoring perkuliahan, berita acara, tindak lanjut temuan audit, hingga survei kepuasan. Seluruh formulir tersedia dalam format yang dapat disunting dan wajib diarsipkan Gugus Penjaminan Mutu setiap akhir semester.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DAFTAR FORMULIR */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Daftar Formulir
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/6">KODE</th>
                  <th className="py-3.5 px-5 font-bold w-2/5">FORMULIR</th>
                  <th className="py-3.5 px-5 font-bold w-1/4">DIGUNAKAN OLEH</th>
                  <th className="py-3.5 px-5 font-bold w-1/6">PERIODE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {formList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-heading whitespace-nowrap align-top">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.name}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.user}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BERKAS UNDUHAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Berkas Unduhan
            </h2>
          </div>

          <div className="divide-y divide-gray-200 bg-white border border-gray-200 shadow-2xs">
            {downloadableForms.map((doc) => (
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
