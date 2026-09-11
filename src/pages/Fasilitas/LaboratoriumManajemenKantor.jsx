import { Helmet } from "react-helmet-async";
import FacilityContent from "../../components/Fasilitas/FacilityContent";
import { laboratoriumManajemenKantorData } from "../../data/fasilitasData";
import { useT } from "../../i18n/languageContext";

export default function LaboratoriumManajemenKantor() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t({
            id: "Laboratorium Manajemen Kantor Notaris/PPAT | MKn UNISSULA",
            en: "Notary/PPAT Office Management Laboratory | MKn UNISSULA",
          })}
        </title>
        <meta
          name="description"
          content={t({
            id: "Laboratorium Manajemen Kantor Notaris/PPAT Magister Kenotariatan UNISSULA: simulasi tata kelola administrasi, kearsipan protokol, dan pelayanan klien.",
            en: "Notary/PPAT Office Management Laboratory at UNISSULA Master of Notarial Law: simulations of administrative governance, protocol archiving, and client reception.",
          })}
        />
      </Helmet>

      <FacilityContent data={laboratoriumManajemenKantorData} />
    </>
  );
}
