import { Helmet } from "react-helmet-async";

export default function QaStandar() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Standar (Standar Mutu) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Standar Mutu Pendidikan, Penelitian, Pengabdian Masyarakat, Tata Pamong, dan Sarana Prasarana MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Quality Assurance Documents
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            QA Standar (Standar Mutu)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Standar mutu internal MKn UNISSULA yang mencakup Standar Pendidikan, Standar Penelitian, Standar Pengabdian Masyarakat, Standar Tata Pamong, serta Standar Sarana dan Prasarana.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten dokumen Standar Mutu akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
