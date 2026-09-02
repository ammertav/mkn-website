import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import { peoIntro, peoItems } from "../../data/profil/peoData";

export default function Tujuan() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>Program Educational Objectives (PEO) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Program Educational Objectives (PEO) Program Studi Magister Kenotariatan UNISSULA dan integrasinya dengan European Purposes of Higher Education (EPHE)."
        />
      </Helmet>

      <div className="space-y-14 sm:space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            TUJUAN PENDIDIKAN
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Program Educational Objectives
              </h2>
            </div>

            <div className="lg:col-span-7 text-sm sm:text-base text-body leading-relaxed">
              <p>
                <RichText>{t(peoIntro)}</RichText>
              </p>
            </div>
          </div>
        </section>

        {/* Empat PEO berpasangan dengan capaian EPHE */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading tracking-normal">
              Rumusan PEO dan Relevansinya
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3" />
          </div>

          <div className="space-y-5">
            {peoItems.map((item) => (
              <article
                key={item.code}
                className="bg-white border border-gray-200 rounded-xs shadow-2xs hover:border-primary/40 transition-colors overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
                  {/* Rumusan PEO */}
                  <div className="p-6 sm:p-7 space-y-3.5">
                    <span className="inline-block px-3 py-1.5 rounded-xs bg-primary/10 text-primary font-heading font-bold text-sm tracking-wide">
                      {item.code}
                    </span>
                    <p className="text-sm sm:text-base text-body leading-relaxed">
                      <RichText>{t(item.objective)}</RichText>
                    </p>
                  </div>

                  {/* Capaian EPHE — kutipan berbahasa Inggris dari kerangka Eropa */}
                  <div
                    lang="en"
                    className="p-6 sm:p-7 space-y-2.5 bg-gray-50/70 border-t border-gray-200 lg:border-t-0 lg:border-l"
                  >
                    <span
                      lang="id"
                      className="text-[10px] font-bold tracking-[0.14em] text-gray-400 uppercase block"
                    >
                      Capaian EPHE
                    </span>
                    <h3 className="font-heading font-semibold text-base text-heading leading-snug">
                      {item.ephe.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {item.ephe.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
