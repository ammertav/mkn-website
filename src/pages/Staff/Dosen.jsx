import { Helmet } from "react-helmet-async";

export default function Dosen() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Daftar Dosen & Tenaga Pengajar | MKn UNISSULA</title>
        <meta
          name="description"
          content="Direktori profil dosen, guru besar, dan pakar hukum kenotariatan Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Faculty Directory
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Daftar Dosen & Tenaga Pengajar
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Dosen dan pakar hukum kenotariatan Program Studi Magister Kenotariatan (MKn) UNISSULA yang berpengalaman di bidang akademis dan praktisi.
        </p>

        <div className="p-16 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten daftar dosen akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
