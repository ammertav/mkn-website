import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";

const halaman = {
  meta: {
    title: {
      id: "Rencana Pembelajaran Semester | MKn UNISSULA",
      en: "Semester Learning Plan | MKn UNISSULA",
    },
    description: {
      id:
        "Rencana Pembelajaran Semester (RPS) mata kuliah Program Studi Magister " +
        "Kenotariatan UNISSULA.",
      en:
        "Semester Learning Plans (RPS) for the courses of the UNISSULA Master of Notarial " +
        "Law Study Programme.",
    },
  },
  judul: {
    id: "Rencana Pembelajaran Semester",
    en: "Semester Learning Plan",
  },
  intro: {
    id:
      "Rencana Pembelajaran Semester memuat capaian pembelajaran, bahan kajian, bentuk " +
      "pembelajaran, dan rencana asesmen setiap mata kuliah pada Kurikulum OBE Tahun 2026.",
    en:
      "The Semester Learning Plan sets out the learning outcomes, subject matter, modes of " +
      "learning, and assessment plan for each course under the 2026 OBE curriculum.",
  },
  kosong: {
    id: "Konten akan segera ditambahkan.",
    en: "Content will be added soon.",
  },
};

export default function Rps() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">{t(halaman.intro)}</p>
        </div>

        <div className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs">
          <p className="text-sm font-medium text-gray-500">{t(halaman.kosong)}</p>
        </div>
      </div>
    </>
  );
}
