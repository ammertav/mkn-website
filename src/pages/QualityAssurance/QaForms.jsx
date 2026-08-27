import { Helmet } from "react-helmet-async";

export default function QaForms() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>QA Forms (Formulir & Instrumen Mutu) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Kumpulan instrumen, formulir evaluasi, berita acara audit, dan template pelaporan penjaminan mutu di MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Quality Assurance Documents
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            QA Forms (Formulir & Instrumen Mutu)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Kumpulan instrumen, formulir evaluasi, berita acara audit, dan template pelaporan standar operasional penjaminan mutu di Program Studi MKn UNISSULA.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten formulir dan instrumen penjaminan mutu akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
