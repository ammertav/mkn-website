import { Helmet } from "react-helmet-async";
import {
  surveyMetrics,
  surveyAspects,
  surveyFollowUps,
  surveyReports,
} from "../../data/qualityAssurance/studentSurveyData";

export default function StudentSurveyReport() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Student Survey Report | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laporan Survei Kepuasan Mahasiswa (Student Survey Report) Program Studi Magister Kenotariatan (MKn) UNISSULA: hasil evaluasi per aspek dan tindak lanjut perbaikan sarana."
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
            Student Survey Report
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Survei kepuasan mahasiswa diselenggarakan setiap akhir semester melalui sistem akademik, mencakup mutu pengajaran, layanan administrasi, sarana pembelajaran, dan pembimbingan akademik. Pengisian bersifat anonim dan menjadi prasyarat melihat nilai akhir.
          </p>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mt-8 rounded-xs shadow-2xs">
            {surveyMetrics.map((metric, idx) => (
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
        {/* HASIL PER ASPEK */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Hasil per Aspek
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/2">ASPEK YANG DINILAI</th>
                  <th className="py-3.5 px-5 font-bold text-center">GASAL 2024</th>
                  <th className="py-3.5 px-5 font-bold text-center">GENAP 2024</th>
                  <th className="py-3.5 px-5 font-bold text-center">GASAL 2023</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {surveyAspects.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-heading">
                      {item.aspect}
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
        {/* TINDAK LANJUT HASIL SURVEI */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Tindak Lanjut Hasil Survei
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/4">ASPEK</th>
                  <th className="py-3.5 px-5 font-bold w-3/5">TINDAK LANJUT</th>
                  <th className="py-3.5 px-5 font-bold w-1/6">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {surveyFollowUps.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-heading">
                      {item.aspect}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.action}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.status}
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
            {surveyReports.map((doc) => (
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
