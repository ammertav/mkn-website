import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import { visi } from "../../data/profil/visiData";

export default function VisiMisi() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>Visi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Visi Program Studi Magister Kenotariatan (MKn) UNISSULA: bereputasi Asia dengan dijiwai nilai-nilai Islam untuk menghasilkan generasi khaira ummah."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            VISI
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-4">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Visi Program Studi
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white border-l-4 border-l-primary border-y border-r border-gray-200 p-6 sm:p-8 shadow-2xs">
                <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
                  RUMUSAN VISI RESMI
                </span>
                <blockquote className="font-heading text-lg sm:text-2xl text-heading leading-relaxed">
                  &ldquo;<RichText>{t(visi)}</RichText>&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
