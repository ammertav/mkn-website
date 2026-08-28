import { Helmet } from "react-helmet-async";

export default function Tendik() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Tenaga Kependidikan (Tendik) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Direktori staf administrasi, pelayanan akademik, teknisi laboratorium, dan tenaga kependidikan MKn UNISSULA."
        />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Staff & Administration
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Tenaga Kependidikan (Tendik)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Staf administrasi, pelayanan akademik, dan teknisi laboratorium yang mendukung kelancaran kegiatan tridharma di MKn UNISSULA.
        </p>

        <div className="p-16 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten tenaga kependidikan akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
