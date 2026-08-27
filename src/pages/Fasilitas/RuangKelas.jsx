import { Helmet } from "react-helmet-async";

export default function RuangKelas() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Ruang Kelas & Hybrid Learning | MKn UNISSULA</title>
        <meta
          name="description"
          content="Fasilitas ruang kuliah ber-AC, teknologi smart display, audio visual modern, dan koneksi internet cepat Program Studi MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Campus Facilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Ruang Kelas & Hybrid Learning
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Ruang kuliah ber-AC yang dilengkapi dengan teknologi smart display, audio visual modern, dan koneksi internet cepat untuk menunjang perkuliahan interaktif.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm">
          <p className="text-sm font-medium">
            Konten fasilitas ruang kelas akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
