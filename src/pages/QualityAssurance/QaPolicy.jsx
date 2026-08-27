import { Helmet } from "react-helmet-async";

export default function QaPolicy() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Policy (Kebijakan Mutu) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Dokumen Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Quality Assurance Documents
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            QA Policy (Kebijakan Mutu)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Dokumen Kebijakan Mutu Sistem Penjaminan Mutu Internal (SPMI) Program Studi Magister Kenotariatan (MKn) UNISSULA sebagai pedoman dasar pencapaian standar mutu akademik dan tata kelola berintegritas.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten dokumen Kebijakan Mutu (QA Policy) akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
