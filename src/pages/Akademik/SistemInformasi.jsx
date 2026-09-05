import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import RichText from "../../components/ui/RichText";
import {
  halaman,
} from "../../data/akademik/capaianPembelajaranData";

export default function SistemInformasi() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-primary block">
            {ui("sectionAcademic")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
            Sistem Informasi
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
        </div>

      </div>
    </>
  );
}
