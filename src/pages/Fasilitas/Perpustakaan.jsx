import { Helmet } from "react-helmet-async";

export default function Perpustakaan() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Perpustakaan Hukum & Digital Library | MKn UNISSULA</title>
        <meta
          name="description"
          content="Perpustakaan fakultas dengan koleksi ribuan literatur hukum, jurnal terakreditasi, akses repositori digital, serta database hukum internasional MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Campus Facilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Perpustakaan Hukum & Digital Library
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Perpustakaan fakultas dengan koleksi ribuan literatur hukum, jurnal terakreditasi, akses repositori digital, serta database hukum internasional.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm">
          <p className="text-sm font-medium">
            Konten fasilitas perpustakaan akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
