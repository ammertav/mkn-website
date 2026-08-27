import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { semesters } from "../../data/academicsData";

export default function Kurikulum() {
  const [openSemester, setOpenSemester] = useState(1);

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Kurikulum & Struktur Program Studi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Struktur kurikulum, sebaran mata kuliah per semester, dan silabus Program Studi Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Kurikulum & Program Studi
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-3xl">
            The Master of Notary program at UNISSULA is designed to foster profound legal expertise and
            academic rigor. Rooted in an editorial tradition of excellence, our curriculum meticulously bridges
            foundational legal theory with advanced practical application, preparing graduates to navigate
            complex institutional landscapes and uphold the highest standards of international academic scrutiny.
          </p>
        </div>

        <div className="space-y-4 pt-4 max-w-3xl">
          {semesters.map((sem) => {
            const isOpen = openSemester === sem.id;
            return (
              <div key={sem.id} className="border border-gray-200/90 rounded-xs bg-white shadow-2xs overflow-hidden">
                <button
                  onClick={() => setOpenSemester(isOpen ? null : sem.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-heading">{sem.title}</span>
                  {isOpen
                    ? <FiChevronUp className="text-primary text-lg" />
                    : <FiChevronDown className="text-primary text-lg" />
                  }
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/30 overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 text-gray-500 font-medium">
                          <th className="py-2.5">Kode</th>
                          <th className="py-2.5">Mata Kuliah</th>
                          <th className="py-2.5 text-right">SKS</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {sem.courses.map((c, idx) => (
                          <tr key={idx} className="text-body hover:bg-white/60">
                            <td className="py-2.5 font-mono text-xs text-gray-600">{c.code}</td>
                            <td className="py-2.5 font-medium text-heading">{c.name}</td>
                            <td className="py-2.5 text-right font-semibold text-primary">{c.sks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
