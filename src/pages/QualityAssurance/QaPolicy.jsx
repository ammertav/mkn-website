import { Helmet } from "react-helmet-async";
import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

const policyPoints = [
  {
    point: "Ruang lingkup",
    statement: "Pendidikan, penelitian, pengabdian kepada masyarakat, serta tata kelola program studi",
  },
  {
    point: "Asas penyelenggaraan",
    statement: "Nilai keislaman, integritas akademik, transparansi, dan akuntabilitas",
  },
  {
    point: "Mekanisme",
    statement: "Siklus penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan standar",
  },
  {
    point: "Pelibatan pemangku kepentingan",
    statement: "Mahasiswa, alumni, pengguna lulusan, organisasi profesi, dan mitra praktik",
  },
  {
    point: "Peninjauan",
    statement: "Kebijakan ditinjau setiap empat tahun atau bila terjadi perubahan regulasi",
  },
];

const policyDocuments = [
  {
    id: 1,
    title: "Kebijakan Mutu Universitas Islam Sultan Agung",
    meta: "PDF • 0,8 MB • Diperbarui 04 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Kebijakan-Mutu-UNISSULA.pdf",
  },
  {
    id: 2,
    title: "Kebijakan Mutu Program Studi Magister Kenotariatan",
    meta: "PDF • 0,9 MB • Diperbarui 12 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Kebijakan-Mutu-MKn-UNISSULA.pdf",
  },
  {
    id: 3,
    title: "Surat Keputusan Penetapan Kebijakan Mutu",
    meta: "PDF • 0,3 MB • Diperbarui 12 Jan 2024",
    fileUrl: samplePdf,
    fileName: "SK-Penetapan-Kebijakan-Mutu-MKn.pdf",
  },
];

export default function QaPolicy() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Policy | MKn UNISSULA</title>
        <meta
          name="description"
          content="Dokumen Kebijakan Mutu (QA Policy) Program Studi Magister Kenotariatan (MKn) UNISSULA: pokok kebijakan mutu dan berkas regulasi resmi."
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
            QA Policy
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Kebijakan mutu menetapkan arah penjaminan mutu program studi: komitmen terhadap standar nasional pendidikan tinggi, penerapan siklus penetapan hingga peningkatan, serta pelibatan pemangku kepentingan dalam setiap peninjauan. Kebijakan ini disahkan Rektor dan ditinjau setiap empat tahun.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* POKOK KEBIJAKAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Pokok Kebijakan
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/3">BUTIR KEBIJAKAN</th>
                  <th className="py-3.5 px-5 font-bold w-2/3">RUMUSAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {policyPoints.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-heading align-top">
                      {item.point}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.statement}
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
            {policyDocuments.map((doc) => (
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
