import { Helmet } from "react-helmet-async";
import { FiAward } from "react-icons/fi";
import { graduateProfiles } from "../../data/academicsData";

export default function ProfilLulusan() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Profil Lulusan Magister Kenotariatan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Profil lulusan, prospek karir Notaris/PPAT, Legal Counsel, Akademisi Hukum, dan kompetensi unggul lulusan MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Profil Lulusan Magister Kenotariatan
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-3xl">
            Lulusan Program Studi Magister Kenotariatan (MKn) UNISSULA dipersiapkan untuk menjadi praktisi
            dan pakar hukum yang berintegritas tinggi, berakhlak mulia, serta memiliki kompetensi unggul
            dalam perancangan dokumen hukum dan kenotariatan di tingkat nasional dan internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 max-w-3xl">
          {graduateProfiles.map((p, idx) => (
            <div key={idx} className="p-6 border border-gray-200 rounded-sm bg-white hover:border-primary/40 transition-colors shadow-2xs space-y-3">
              <div className="flex items-center space-x-2 text-primary">
                <FiAward className="text-xl shrink-0" />
                <h3 className="font-heading font-semibold text-base text-heading">{p.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-body leading-relaxed">{p.desc}</p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {p.skills.map((skill, si) => (
                  <span key={si} className="text-[11px] bg-gray-100 text-heading px-2 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
