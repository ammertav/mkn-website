import { Helmet } from "react-helmet-async";
import {
  KepalaMutu,
  JudulMutu,
  KartuMutu,
  DaftarNomor,
  DaftarDokumen,
} from "../../components/QualityAssurance/MutuBagian";
import {
  asasMutu,
  prinsipMutu,
  tujuanSpmi,
  policyDocuments,
} from "../../data/qualityAssurance/qaPolicyData";
import { useLanguage } from "../../i18n/languageContext";

export default function QaPolicy() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Quality Policy | MKn UNISSULA"
            : "Kebijakan Mutu | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Internal Quality Assurance System Policy of Faculty of Law UNISSULA — foundations, principles, and goals of quality assurance guiding all quality documents."
              : "Kebijakan Sistem Penjaminan Mutu Internal Fakultas Hukum UNISSULA — asas, prinsip, dan tujuan penjaminan mutu yang menjadi payung seluruh dokumen mutu."
          }
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow={{ id: "DOKUMEN MUTU", en: "QUALITY DOCUMENTS" }}
          judul={{ id: "Kebijakan Mutu", en: "Quality Policy" }}
          pengantar={{
            id: "Kebijakan Sistem Penjaminan Mutu Internal menetapkan arah, asas, prinsip, dan tujuan penjaminan mutu Fakultas Hukum UNISSULA. Dokumen ini menjadi payung bagi manual mutu, standar mutu, dan formulir mutu yang berlaku di seluruh program studi.",
            en: "The Internal Quality Assurance System Policy establishes the direction, foundations, principles, and goals of quality assurance at Faculty of Law UNISSULA. This document serves as the overarching framework for quality manuals, standards, and forms applicable across all study programs.",
          }}
        />

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Lima Asas Penjaminan Mutu",
              en: "Five Quality Assurance Foundations",
            }}
            keterangan={{
              id: "Penjaminan mutu internal di UNISSULA mengedepankan asas berikut, masing-masing berpijak pada rujukan Al-Qur'an sebagaimana dicantumkan dokumen sumber.",
              en: "Internal quality assurance at UNISSULA prioritizes the following foundations, each anchored in Quranic references as stipulated in the source document.",
            }}
          />
          <KartuMutu butir={asasMutu} kolom={3} />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Enam Prinsip Pelaksanaan",
              en: "Six Implementation Principles",
            }}
            keterangan={{
              id: "Prinsip yang mengikat pelaksanaan SPMI pada seluruh unit kerja.",
              en: "Principles governing SPMI execution across all operational units.",
            }}
          />
          <KartuMutu
            butir={prinsipMutu.map((p, idx) => ({ ...p, code: String(idx + 1) }))}
            kolom={3}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Delapan Tujuan SPMI",
              en: "Eight SPMI Objectives",
            }}
            keterangan={{
              id: "Alasan kebijakan mutu disusun dan didokumentasikan secara tertulis.",
              en: "Rationale for formulating and documenting the quality policy in written form.",
            }}
          />
          <DaftarNomor butir={tujuanSpmi} />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Berkas Kebijakan",
              en: "Policy Documents",
            }}
          />
          <DaftarDokumen butir={policyDocuments} />
        </section>
      </div>
    </>
  );
}
