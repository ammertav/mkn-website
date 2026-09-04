import { Helmet } from "react-helmet-async";
import {
  featuredActivities,
  // reportsAndOutputs, // di-hide sementara
  supportingDocuments,
} from "../../data/informasi/communityServiceData";

export default function CommunityService() {
  return (
    <>
      <Helmet>
        <title>Pengabdian Dosen | MKn UNISSULA</title>
        <meta
          name="description"
          content="Program kegiatan pengabdian kepada masyarakat (PkM), penyuluhan hukum pertanahan PTSL, pendampingan UMKM, laporan luaran, dan dokumen pendukung dosen MKn UNISSULA."
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
            Pengabdian Dosen
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-3xl">
            Pengabdian kepada masyarakat diselenggarakan sebagai penerjemahan keilmuan kenotariatan ke dalam layanan hukum yang dapat diakses masyarakat: penyuluhan pertanahan desa, pendampingan legalitas usaha mikro, dan konsultasi pembuatan perjanjian.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* KEGIATAN TERPILIH */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Kegiatan Terpilih
            </h2>
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-heading text-xs font-bold tracking-wider text-heading uppercase">
                  <th className="py-3.5 px-5 font-bold">KEGIATAN</th>
                  <th className="py-3.5 px-5 font-bold w-1/4 sm:w-1/3">LOKASI</th>
                  <th className="py-3.5 px-5 font-bold w-1/4 whitespace-nowrap">KETUA PELAKSANA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {featuredActivities.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 text-heading leading-relaxed font-medium">
                      {item.activity}
                    </td>
                    <td className="py-4 px-5 text-body">
                      {item.location}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {item.lead}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LAPORAN DAN LUARAN (DI-HIDE SEMENTARA) */}
        {/* ========================================================================= */}
        {/*
        <section className="space-y-4">
          <div className="pb-2 border-b-2 border-heading">
            <h2 className="text-2xl font-heading font-normal text-heading tracking-tight">
              Laporan dan Luaran
            </h2>
          </div>

          <div className="divide-y divide-gray-200 pt-1">
            {reportsAndOutputs.map((item) => (
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
        */}

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
                  <th className="py-3.5 px-5 font-bold">JUDUL DOKUMEN</th>
                  <th className="py-3.5 px-5 font-bold w-36 whitespace-nowrap">TANGGAL</th>
                  <th className="py-3.5 px-5 font-bold w-28 whitespace-nowrap">UNDUH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {supportingDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 text-heading font-medium">
                      {doc.title}
                    </td>
                    <td className="py-4 px-5 text-body whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-4 px-5 whitespace-nowrap">
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
