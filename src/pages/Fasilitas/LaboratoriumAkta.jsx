import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { laboratoriumAktaData } from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

export default function LaboratoriumAkta() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Laboratorium Akta | MKn UNISSULA",
            en: "Deed Laboratory | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Laboratorium Akta Magister Kenotariatan UNISSULA: pusat simulasi perancangan, pembuatan, dan pembacaan draf akta autentik dengan pendampingan Notaris/PPAT.",
            en: "Master of Notarial Law Deed Laboratory at UNISSULA: tactical simulation centre for drafting, preparing, and reading authentic deeds mentored by licensed Notaries/PPAT.",
          })}
        />
      </Helmet>

      <FacilityContent data={laboratoriumAktaData} />
    </>
  );
}
