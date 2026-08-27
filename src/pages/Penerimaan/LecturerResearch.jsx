import { Helmet } from "react-helmet-async";
import { FiBookOpen, FiUser, FiCalendar } from "react-icons/fi";
import { lecturerResearches } from "../../data/penerimaanData";

export default function LecturerResearch() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Publikasi & Riset Dosen | MKn UNISSULA</title>
        <meta
          name="description"
          content="Publikasi riset hukum kenotariatan, jurnal SINTA, dan artikel bereputasi internasional dosen Program Studi MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Penelitian Dosen Magister Kenotariatan
          </h1>
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            Dosen-dosen Program Studi MKn UNISSULA aktif menghasilkan publikasi riset hukum kenotariatan dan keperdataan
            pada jurnal nasional terakreditasi SINTA serta jurnal internasional bereputasi Scopus/Web of Science.
          </p>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        {/* Research List */}
        <div className="space-y-4 pt-2">
          {lecturerResearches.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-gray-200 bg-white rounded-xs space-y-3 shadow-2xs hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-primary/10 text-primary font-bold px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 font-medium flex items-center gap-1">
                  <FiCalendar className="text-xs" />
                  {item.year}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg sm:text-xl text-heading leading-snug">
                {item.title}
              </h3>

              <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pt-1 text-xs sm:text-[13px] text-gray-500 border-t border-gray-100 pt-3">
                <span className="flex items-center gap-1.5 text-heading font-medium">
                  <FiUser className="text-primary text-sm" />
                  {item.author}
                </span>
                <span className="flex items-center gap-1.5 text-primary font-semibold">
                  <FiBookOpen className="text-sm" />
                  {item.journal}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
