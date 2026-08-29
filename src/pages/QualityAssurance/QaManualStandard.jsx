import { Helmet } from "react-helmet-async";
import {
  manualStructure,
  manualDocuments,
} from "../../data/qualityAssurance/qaManualStandardData";

export default function QaManualStandard() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Manual Standard | MKn UNISSULA</title>
        <meta
          name="description"
          content="Manual Standar Penjaminan Mutu (QA Manual Standard) Program Studi Magister Kenotariatan (MKn) UNISSULA: struktur manual PPEPP dan berkas prosedur operasional standar."
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
            QA Manual Standard
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Manual mutu menjabarkan cara setiap standar dijalankan: siapa yang bertanggung jawab, prosedur yang ditempuh, formulir yang dipakai, dan bukti yang harus tersimpan. Manual menjadi rujukan utama auditor internal saat memeriksa kesesuaian penyelenggaraan program studi.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* STRUKTUR MANUAL */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Struktur Manual
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/6">BAGIAN</th>
                  <th className="py-3.5 px-5 font-bold w-1/2">ISI</th>
                  <th className="py-3.5 px-5 font-bold w-1/3">PENANGGUNG JAWAB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {manualStructure.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-heading whitespace-nowrap align-top">
                      {item.chapter}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.content}
                    </td>
                    <td className="py-4 px-5 text-body align-top">
                      {item.responsible}
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
            {manualDocuments.map((doc) => (
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
