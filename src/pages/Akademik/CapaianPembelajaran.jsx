import { Helmet } from "react-helmet-async";
import { ilos } from "../../data/academicsData";

export default function CapaianPembelajaran() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Capaian Pembelajaran Lulusan (ILOs) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Capaian Pembelajaran Lulusan (Intended Learning Outcomes) Program Studi Magister Kenotariatan (MKn) UNISSULA berdasarkan KKNI Jenjang 8."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Capaian Pembelajaran Lulusan (ILOs)
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-3xl">
            Intended Learning Outcomes (ILOs) program studi MKn UNISSULA menetapkan standar kompetensi yang
            harus dikuasai mahasiswa saat menyelesaikan studi, berpedoman pada Kerangka Kualifikasi Nasional
            Indonesia (KKNI) Jenjang 8 dan standar akreditasi internasional.
          </p>
        </div>

        <div className="space-y-3 pt-3 max-w-3xl">
          {ilos.map((item, idx) => (
            <div key={idx} className="p-5 border border-gray-200 rounded-sm bg-white flex items-start space-x-4 shadow-2xs hover:border-gray-300 transition-colors">
              <span className="bg-primary/10 text-primary font-bold text-xs px-2.5 py-1 rounded shrink-0 mt-0.5">
                {item.code}
              </span>
              <div className="space-y-1">
                <h3 className="font-heading font-semibold text-sm sm:text-[15px] text-heading">{item.category}</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
