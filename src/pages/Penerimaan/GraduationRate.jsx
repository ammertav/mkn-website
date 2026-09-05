import { Helmet } from "react-helmet-async";
import {
  graduationMetrics,
  academicYearRecap,
  predicateAndDurationDistribution,
  supportingDocuments,
} from "../../data/informasi/graduationRateData";

export default function GraduationRate() {
  return (
    <>
      <Helmet>
        <title>Tingkat Kelulusan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Data statistik tingkat kelulusan, rata-rata IPK, sebaran predikat kelulusan, dan masa studi mahasiswa Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 font-body text-body">
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            INFORMASI
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            Tingkat Kelulusan
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Data kelulusan dihimpun setiap akhir tahun akademik oleh Gugus Penjaminan Mutu dari basis data akademik program studi. Indikator yang dipantau meliputi ketepatan masa studi, indeks prestasi kumulatif, predikat kelulusan, dan lama penyelesaian tesis.
          </p>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mt-8 rounded-xs shadow-2xs">
            {graduationMetrics.map((metric, idx) => (
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
        {/* REKAPITULASI PER TAHUN AKADEMIK */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Rekapitulasi per Periode Akademik
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold">PERIODE AKADEMIK</th>
                  <th className="py-3.5 px-5 font-bold">MAHASISWA</th>
                  <th className="py-3.5 px-5 font-bold">LULUS</th>
                  <th className="py-3.5 px-5 font-bold">TEPAT WAKTU</th>
                  <th className="py-3.5 px-5 font-bold">RATA IPK</th>
                  <th className="py-3.5 px-5 font-bold">MASA STUDI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {academicYearRecap.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 text-heading whitespace-nowrap">
                      {item.year}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.students}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.graduated}
                    </td>
                    <td className="py-4 px-5 text-body font-medium">
                      {item.onTime}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.avgGpa}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.studyDuration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEBARAN PREDIKAT DAN MASA STUDI */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Sebaran Predikat dan Masa Studi
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/4">KELOMPOK</th>
                  <th className="py-3.5 px-5 font-bold">LULUSAN 2024</th>
                  <th className="py-3.5 px-5 font-bold">PROPORSI</th>
                  <th className="py-3.5 px-5 font-bold w-2/5">KETERANGAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {predicateAndDurationDistribution.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 text-heading whitespace-nowrap">
                      {item.group}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.graduates2024}
                    </td>
                    <td className="py-4 px-5 text-body font-medium">
                      {item.proportion}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOKUMEN PENDUKUNG */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Dokumen Pendukung
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/2">JUDUL DOKUMEN</th>
                  <th className="py-3.5 px-5 font-bold">VERSI</th>
                  <th className="py-3.5 px-5 font-bold">TANGGAL</th>
                  <th className="py-3.5 px-5 font-bold">UNDUH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {supportingDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 text-heading">
                      {doc.title}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {doc.version}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-4 px-5">
                      <a
                        href={doc.fileUrl}
                        download={doc.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>{doc.fileType}</span>
                        <span className="text-xs">↓</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
