import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import {
  profilLulusanIntro,
  mainProfiles,
  halaman,
} from "../../data/akademik/profilLulusanData";

export default function ProfilLulusan() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">
            <RichText>{t(profilLulusanIntro)}</RichText>
          </p>
        </div>

        {/* Section 1: Empat Profil Utama */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              {t(halaman.judulSeksi)}
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200 bg-white">
            {mainProfiles.map((item) => (
              <div
                key={item.code}
                className="p-6 sm:p-7 space-y-2.5 border-r border-b border-gray-200"
              >
                <span className="text-sm font-bold tracking-wider text-primary uppercase block">
                  {item.code}
                </span>
                <h3 className="text-base sm:text-xl font-heading font-medium text-heading leading-snug">
                  <RichText>{t(item.title)}</RichText>
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  <RichText>{t(item.desc)}</RichText>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
