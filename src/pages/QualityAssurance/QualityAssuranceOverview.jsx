import { Helmet } from "react-helmet-async";
import {
  qualityMetrics,
  committeeMembers,
  qualityCycles,
  policyDocuments,
} from "../../data/qualityAssurance/qaOverviewData";

export default function QualityAssuranceOverview() {
  return (
    <>
      <Helmet>
        <title>Gugus Penjaminan Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Gugus Penjaminan Mutu Program Studi Magister Kenotariatan (MKn) UNISSULA: struktur gugus, siklus PPEPP, dan dokumen kebijakan mutu resmi."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 font-body text-body">
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            PENJAMINAN MUTU
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            Gugus Penjaminan Mutu
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Gugus Penjaminan Mutu Program Studi Magister Kenotariatan bertugas merencanakan, melaksanakan, mengevaluasi, mengendalikan, dan meningkatkan mutu penyelenggaraan pendidikan. Unit ini bekerja di bawah koordinasi Badan Penjaminan Mutu Universitas dan melaporkan capaian mutu kepada Ketua Program Studi setiap semester.
          </p>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mt-8 rounded-xs shadow-2xs">
            {qualityMetrics.map((metric, idx) => (
              <div key={idx} className="p-5 sm:p-6 text-left flex flex-col justify-center">
                <span className="font-heading font-normal text-2xl sm:text-3xl text-primary block leading-none">
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
        {/* SUSUNAN GUGUS */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Susunan Gugus
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/4">NAMA</th>
                  <th className="py-3.5 px-5 font-bold w-1/4">KEDUDUKAN</th>
                  <th className="py-3.5 px-5 font-bold w-1/2">TUGAS UTAMA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {committeeMembers.map((member, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-heading">
                      {member.name}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {member.position}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {member.duty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SIKLUS PENJAMINAN MUTU */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Siklus Penjaminan Mutu
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/5">TAHAP</th>
                  <th className="py-3.5 px-5 font-bold w-3/5">KEGIATAN</th>
                  <th className="py-3.5 px-5 font-bold w-1/5">WAKTU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {qualityCycles.map((cycle, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-heading">
                      {cycle.stage}
                    </td>
                    <td className="py-4 px-5 text-body leading-relaxed">
                      {cycle.activity}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {cycle.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DOKUMEN KEBIJAKAN MUTU */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Dokumen Kebijakan Mutu
            </h2>
          </div>

          <div className="divide-y divide-gray-200 bg-white border border-gray-200 shadow-2xs">
            {policyDocuments.map((doc) => (
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
