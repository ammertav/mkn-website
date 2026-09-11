import { Helmet } from "react-helmet-async";
import { useT, useLanguage } from "../../i18n/languageContext";

export default function Dosen() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Faculty & Teaching Staff Directory | MKn UNISSULA"
            : "Daftar Dosen & Tenaga Pengajar | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Directory of faculty members, professors, and notarial law experts of Master of Notarial Law (MKn) UNISSULA."
              : "Direktori profil dosen, guru besar, dan pakar hukum kenotariatan Program Studi Magister Kenotariatan (MKn) UNISSULA."
          }
        />
      </Helmet>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-primary">
            {t({ id: "Direktori Dosen", en: "Faculty Directory" })}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            {t({
              id: "Daftar Dosen & Tenaga Pengajar",
              en: "Faculty & Teaching Staff Directory",
            })}
          </h1>
        </div>

        <hr className="border-t border-gray-800 my-4" />

        <p className="text-sm sm:text-base text-body text-justify leading-relaxed">
          {t({
            id: "Dosen dan pakar hukum kenotariatan Program Studi Magister Kenotariatan (MKn) UNISSULA yang berpengalaman di bidang akademis dan praktisi.",
            en: "Faculty members and notarial law experts of Master of Notarial Law (MKn) UNISSULA with extensive experience in academic and practical fields.",
          })}
        </p>

        <div className="p-16 text-center text-gray-400 border border-dashed border-gray-200 rounded-sm bg-white">
          <p className="text-sm font-medium">
            {t({
              id: "Konten daftar dosen akan segera ditampilkan di sini.",
              en: "Faculty directory content will be displayed here soon.",
            })}
          </p>
        </div>
      </div>
    </>
  );
}
