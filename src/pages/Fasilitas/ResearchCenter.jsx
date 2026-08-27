import { Helmet } from "react-helmet-async";

export default function ResearchCenter() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Student Research Center | MKn UNISSULA</title>
        <meta
          name="description"
          content="Pusat riset dan inkubasi kajian hukum kenotariatan bagi mahasiswa magister untuk penulisan tesis dan publikasi ilmiah internasional MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            Campus Facilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Student Research Center
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
          Pusat riset dan inkubasi kajian hukum kenotariatan bagi mahasiswa magister untuk penulisan tesis, publikasi ilmiah internasional, dan diskusi panel.
        </p>

        <div className="p-12 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm">
          <p className="text-sm font-medium">
            Konten Student Research Center akan segera ditampilkan di sini.
          </p>
        </div>
      </div>
    </>
  );
}
