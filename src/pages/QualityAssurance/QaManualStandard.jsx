import { Helmet } from "react-helmet-async";
import {
  KepalaMutu,
  JudulMutu,
  KartuMutu,
  DaftarNomor,
  DaftarDokumen,
} from "../../components/QualityAssurance/MutuBagian";
import {
  manualDocuments,
  manualStages,
  manualStructure,
  manualScope,
} from "../../data/qualityAssurance/qaManualStandardData";
import { useLanguage } from "../../i18n/languageContext";

export default function QaManualStandard() {
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {lang === "en"
            ? "Quality Manual | MKn UNISSULA"
            : "Manual Mutu | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "SPMI Manual and SPMI Cycle Guidelines of Faculty of Law UNISSULA — operational mechanisms for each phase: determination, implementation, evaluation, control, and improvement of standards."
              : "Manual SPMI dan Pedoman Penerapan Siklus SPMI Fakultas Hukum UNISSULA — cara kerja setiap tahap penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan standar."
          }
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow={{ id: "DOKUMEN MUTU", en: "QUALITY DOCUMENTS" }}
          judul={{ id: "Manual Mutu", en: "Quality Manual" }}
          pengantar={{
            id: "Manual mutu menjelaskan cara kerja setiap tahap siklus penjaminan mutu: siapa yang berwenang, apa batas kegiatannya, dan langkah apa yang harus ditempuh. Dua dokumen menopang bagian ini — Manual SPMI dan Pedoman Penerapan Siklus SPMI.",
            en: "The quality manual details operational procedures for every quality assurance cycle phase: authorized personnel, boundaries of activities, and mandatory procedural steps. Two core documents underpin this section — the SPMI Manual and Guidelines for Implementation of SPMI Cycle.",
          }}
        />

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Dokumen Manual",
              en: "Manual Documents",
            }}
          />
          <DaftarDokumen butir={manualDocuments} />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Lima Manual Siklus PPEPP",
              en: "Five PPEPP Cycle Manuals",
            }}
            keterangan={{
              id: "Setiap tahap siklus memiliki satu bab manual tersendiri pada kedua dokumen.",
              en: "Each cycle stage has a dedicated manual chapter across both documents.",
            }}
          />
          <KartuMutu
            butir={manualStages.map((m) => ({
              code: m.bab.replace("Bab ", lang === "en" ? "Ch. " : "Bab "),
              title: m.stage,
              desc: m.desc,
            }))}
            kolom={3}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Isi Setiap Manual",
              en: "Contents of Each Manual",
            }}
            keterangan={{
              id: "Empat pokok bahasan yang selalu ada pada tiap bab manual.",
              en: "Four core discussion topics consistently present in every manual chapter.",
            }}
          />
          <KartuMutu
            butir={manualStructure.map((s, idx) => ({ ...s, code: String(idx + 1) }))}
            kolom={4}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul={{
              id: "Luas Lingkup Manual",
              en: "Scope of the Manual",
            }}
            keterangan={{
              id: "Bab pengantar yang sama pada Manual SPMI dan Pedoman Penerapan Siklus SPMI.",
              en: "Common introductory chapter in both SPMI Manual and Guidelines for Implementation of SPMI Cycle.",
            }}
          />
          <DaftarNomor butir={manualScope} />
        </section>
      </div>
    </>
  );
}
