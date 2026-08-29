import { Helmet } from "react-helmet-async";
import {
  learningMetrics,
  learningIndicators,
  improvementRecommendations,
  reportDocuments,
} from "../../data/qualityAssurance/learningTeachingData";

export default function LearningTeachingReport() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Learning and Teaching Report | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laporan Pembelajaran dan Pengajaran (Learning and Teaching Report) Program Studi Magister Kenotariatan (MKn) UNISSULA: indikator ketercapaian CPMK dan rekomendasi perbaikan."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 font-body text-body">
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            QUALITY ASSURANCE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            Learning and Teaching Report
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Laporan pembelajaran disusun setiap akhir semester dan memuat capaian pelaksanaan perkuliahan, ketercapaian capaian pembelajaran mata kuliah, hasil monitoring kehadiran, serta rekomendasi perbaikan metode pengajaran untuk semester berikutnya.
          </p>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mt-8 rounded-xs shadow-2xs">
            {learningMetrics.map((metric, idx) => (
              <div key={idx} className="p-5 sm:p-6 text-left flex flex-col justify-center">
                <span className="font-heading italic font-normal text-3xl sm:text-4xl text-primary block leading-none">
                  {metric.value}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-body mt-2 block">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INDIKATOR PEMBELAJARAN PER SEMESTER */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Indikator Pembelajaran per Semester
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/2">INDIKATOR</th>
                  <th className="py-3.5 px-5 font-bold text-center">GASAL 2024</th>
                  <th className="py-3.5 px-5 font-bold text-center">GENAP 2024</th>
                  <th className="py-3.5 px-5 font-bold text-center">GASAL 2023</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {learningIndicators.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-heading">
                      {item.indicator}
                    </td>
                    <td className="py-4 px-5 text-body text-center font-medium">
                      {item.gasal2024}
                    </td>
                    <td className="py-4 px-5 text-body text-center font-medium">
                      {item.genap2024}
                    </td>
                    <td className="py-4 px-5 text-body text-center font-medium">
                      {item.gasal2023}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* REKOMENDASI PERBAIKAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Rekomendasi Perbaikan
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/2">REKOMENDASI</th>
                  <th className="py-3.5 px-5 font-bold w-1/4">PENANGGUNG JAWAB</th>
                  <th className="py-3.5 px-5 font-bold w-1/4">TARGET</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {improvementRecommendations.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-heading leading-relaxed">
                      {item.recommendation}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.responsible}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LAPORAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Laporan
            </h2>
          </div>

          <div className="divide-y divide-gray-200 bg-white border border-gray-200 shadow-2xs">
            {reportDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors group"
              >
                {/* Sisi Kiri: Ikon + Judul + Info */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-8 h-9 border-2 border-primary text-primary rounded-xs flex flex-col justify-between p-1 shrink-0 mt-0.5 group-hover:bg-primary/5 transition-colors">
                    <div className="w-3 h-0.5 bg-primary rounded-full"></div>
                    <div className="w-full h-3 bg-primary/80 rounded-2xs"></div>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-heading font-normal text-base sm:text-[17px] text-heading leading-snug group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-body">
                      {doc.meta}
                    </p>
                  </div>
                </div>

                {/* Sisi Kanan: Tombol Unduh */}
                <div className="shrink-0 flex items-center self-start sm:self-center pl-12 sm:pl-0">
                  <a
                    href={doc.fileUrl}
                    download={doc.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white border border-gray-300 hover:border-primary hover:bg-primary hover:text-white text-heading rounded-xs text-xs font-medium transition-all duration-150 shadow-2xs cursor-pointer active:scale-98"
                  >
                    <span>Unduh</span>
                    <span className="text-xs">↓</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
