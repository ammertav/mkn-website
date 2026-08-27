import { Helmet } from "react-helmet-async";

export default function TracerStudy() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Tracer Study Alumni | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laporan Tracer Study, pelacakan jejak karir lulusan, dan survei alumni Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Alumni & Career
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Tracer Study Alumni MKn UNISSULA
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Pemantauan berkala dan pelacakan jejak karir lulusan guna mengevaluasi efektivitas kurikulum,
          menjamin mutu lulusan, dan memperluas jejaring profesional kenotariatan di seluruh Indonesia.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Informasi Tracer Study alumni akan segera diperbarui di sini.
          </p>
        </div>
      </div>
    </>
  );
}
