import { Helmet } from "react-helmet-async";
import { FiBookOpen, FiDownload } from "react-icons/fi";
import { academicGuidelines } from "../../data/academicsData";

export default function Panduan() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Panduan Akademik & SOP | MKn UNISSULA</title>
        <meta
          name="description"
          content="Buku panduan akademik resmi, standar operasional prosedur penulisan tesis, evaluasi pembelajaran, dan regulasi mahasiswa MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-[28px] font-heading font-normal text-heading tracking-normal">
            Panduan Akademik & Prosedur
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] text-body leading-relaxed max-w-3xl">
            Unduh buku panduan resmi, standar operasional prosedur penulisan tesis, dan regulasi akademik
            untuk menunjang kelancaran studi mahasiswa Program Magister Kenotariatan UNISSULA.
          </p>
        </div>

        <div className="space-y-3 pt-3 max-w-3xl">
          {academicGuidelines.map((guide, idx) => (
            <div key={idx} className="p-5 border border-gray-200 rounded-sm bg-white flex items-center justify-between shadow-2xs hover:border-primary/40 transition-colors gap-4">
              <div className="flex items-start space-x-3.5">
                <FiBookOpen className="text-primary text-xl shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-sm sm:text-[15px] text-heading">{guide.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{guide.desc}</p>
                  <span className="text-[11px] text-gray-400 block pt-0.5">{guide.size}</span>
                </div>
              </div>
              <button
                onClick={() => alert(`Mengunduh: ${guide.title}`)}
                className="shrink-0 flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-semibold text-primary border border-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <FiDownload />
                <span>Unduh</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
