import { Helmet } from "react-helmet-async";

export default function LearningTeachingReport() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Learning & Teaching Report | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laporan evaluasi proses belajar mengajar, efektivitas perkuliahan, dan ketercapaian Capaian Pembelajaran Lulusan (CPL) MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Academic Evaluation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Learning and Teaching Report (Laporan Pembelajaran)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Laporan evaluasi proses belajar mengajar, efektivitas perkuliahan, kehadiran dosen dan mahasiswa, serta pencapaian Capaian Pembelajaran Lulusan (CPL) per semester.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten laporan pembelajaran dan pengajaran akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
