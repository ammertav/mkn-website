import { Helmet } from "react-helmet-async";

export default function InternalAuditReport() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Internal Audit Report (Laporan AMI) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Laporan hasil Audit Mutu Internal (AMI) berkala dan target pencapaian standar mutu akademik di MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Audit & Assessment
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Internal Audit Report (Laporan Audit Mutu Internal)
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Laporan hasil Audit Mutu Internal (AMI) berkala yang dilaksanakan oleh auditor bersertifikat untuk memastikan ketercapaian target standar mutu akademik dan tindak lanjut perbaikan berkelanjutan.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            Konten laporan audit mutu internal akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
