import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";
import { useLanguage } from "../../i18n/languageContext";

export default function InternalAuditReport() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Internal Quality Audit Report | MKn UNISSULA"
            : "Laporan Audit Mutu Internal | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Internal quality audit results of Master of Notarial Law Program UNISSULA along with findings and follow-ups."
              : "Hasil audit mutu internal Program Studi Magister Kenotariatan UNISSULA beserta temuan dan tindak lanjutnya."
          }
        />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu
          judul={{
            id: "Laporan Audit Mutu Internal",
            en: "Internal Quality Audit Report",
          }}
          pengantar={{
            id: "Laporan audit mutu internal merekam temuan atas pelaksanaan standar, permintaan tindakan koreksi, serta verifikasi tindak lanjutnya. Instrumen yang dipakai adalah formulir tahap Evaluasi (C-02, C-03) dan Pengendalian (D-01 sampai D-04).",
            en: "The internal quality audit report records findings on standards implementation, correction action requests, and follow-up verifications. Instruments used are Evaluation phase forms (C-02, C-03) and Control phase forms (D-01 to D-04).",
          }}
        />

        <BelumTersedia
          keterangan={{
            id: "Laporan audit mutu internal belum diterima dari Gugus Penjaminan Mutu.",
            en: "Internal quality audit report has not yet been received from the Quality Assurance Committee.",
          }}
        />
      </div>
    </>
  );
}
