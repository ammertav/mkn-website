import { Helmet } from "react-helmet-async";

export default function StudentSurveyReport() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Student Survey Report | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laporan hasil survei kepuasan mahasiswa terhadap perkuliahan, dosen, dan sarana prasarana akademik di MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Satisfaction Survey
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Student Survey Report (Survei Kepuasan Mahasiswa)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Hasil survei kepuasan mahasiswa terhadap kinerja dosen, layanan administrasi akademik, fasilitas sarana prasarana, dan sistem pembelajaran daring/luring di MKn UNISSULA.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten laporan survei kepuasan mahasiswa akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
