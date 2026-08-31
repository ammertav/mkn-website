import { Helmet } from "react-helmet-async";
import {
  researchMetrics,
  featuredPublications,
  fundingSchemes,
  supportingDocuments,
} from "../../data/informasi/lecturerResearchData";

export default function LecturerResearch() {
  return (
    <>
      <Helmet>
        <title>Penelitian Dosen | MKn UNISSULA</title>
        <meta
          name="description"
          content="Publikasi riset, artikel terindeks SINTA/Scopus, prosiding, buku, dan skema pendanaan penelitian dosen Program Studi Magister Kenotariatan (MKn) UNISSULA."
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
            Penelitian Dosen
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Penelitian dosen diarahkan pada empat peta jalan program studi: kepastian hukum akta autentik, pendaftaran tanah dan hukum agraria, hukum perusahaan dan kepailitan, serta digitalisasi jabatan notaris. Setiap penelitian diwajibkan menghasilkan luaran publikasi dan bahan ajar.
          </p>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200 mt-8 rounded-xs shadow-2xs">
            {researchMetrics.map((metric, idx) => (
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
        {/* PUBLIKASI TERPILIH */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Publikasi Terpilih
            </h2>
          </div>

          <div className="divide-y divide-gray-200 pt-1">
            {featuredPublications.map((item) => (
              <div key={item.id} className="py-6 first:pt-2 last:pb-2 space-y-1.5">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary block">
                  {item.category}
                </span>
                <h3 className="font-heading italic font-normal text-base sm:text-[18px] text-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-body">
                  <span className="text-heading">{item.authors}</span> ({item.year}).
                </p>
                <p className="text-xs sm:text-sm text-body">
                  {item.citation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SKEMA PENDANAAN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Skema Pendanaan
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold w-1/3">SKEMA</th>
                  <th className="py-3.5 px-5 font-bold w-1/4">SUMBER DANA</th>
                  <th className="py-3.5 px-5 font-bold">JUMLAH 2024</th>
                  <th className="py-3.5 px-5 font-bold w-1/4">LUARAN WAJIB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fundingSchemes.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 text-heading whitespace-nowrap">
                      {item.scheme}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.source}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.amount2024}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.mandatoryOutput}
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
