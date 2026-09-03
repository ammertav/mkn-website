import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import { timeline, halaman } from "../../data/profil/sejarahData";

export default function Sejarah() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Latar belakang pendirian */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            {t(halaman.eyebrow)}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                {t(halaman.judulLatar)}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              {halaman.latarBelakang.map((paragraf, idx) => (
                <p key={idx}>
                  <RichText>{t(paragraf)}</RichText>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Linimasa perjalanan program studi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              {t(halaman.judulLinimasa)}
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <ol className="relative border-l-2 border-gray-200 ml-2 space-y-9 sm:space-y-11">
            {timeline.map((item) => (
              <li key={item.year} className="relative pl-7 sm:pl-10">
                {/* Penanda titik pada garis */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-2 rounded-full border-[3px] border-white ${
                    item.highlight
                      ? "w-4 h-4 bg-primary ring-4 ring-primary/15"
                      : "w-3.5 h-3.5 bg-gray-300"
                  }`}
                />

                <div className="font-heading font-bold text-xl sm:text-2xl text-primary leading-none tabular-nums">
                  {item.year}
                </div>

                <h3 className="mt-2 font-heading font-semibold text-base sm:text-lg text-heading leading-snug">
                  <RichText>{t(item.title)}</RichText>
                </h3>

                <p className="mt-1.5 text-sm sm:text-base text-body leading-relaxed max-w-3xl">
                  <RichText>{t(item.desc)}</RichText>
                </p>

                {item.meta && (
                  <p className="mt-2.5 text-xs text-gray-500 leading-relaxed">
                    {t(item.meta)}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
