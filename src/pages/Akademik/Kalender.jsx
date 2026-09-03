import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";

const halaman = {
  meta: {
    title: { id: "Kalender Akademik | MKn UNISSULA", en: "Academic Calendar | MKn UNISSULA" },
    description: {
      id:
        "Jadwal penting kegiatan perkuliahan, registrasi, ujian semester, serta periode " +
        "pendaftaran sidang tesis dan wisuda MKn UNISSULA.",
      en:
        "Key dates for teaching, registration, semester examinations, and the registration " +
        "periods for thesis defence and graduation at MKn UNISSULA.",
    },
  },
  judul: { id: "Kalender Akademik", en: "Academic Calendar" },
  intro: {
    id:
      "Jadwal penting kegiatan perkuliahan, her-registrasi, ujian semester, serta periode " +
      "pendaftaran sidang tesis dan wisuda Program Studi Magister Kenotariatan UNISSULA.",
    en:
      "Key dates for teaching, re-registration, semester examinations, and the registration " +
      "periods for thesis defence and graduation at the UNISSULA Master of Notarial Law " +
      "Study Programme.",
  },
  kosong: { id: "Konten akan segera ditambahkan.", en: "Content will be added soon." },
};

export default function Kalender() {
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
