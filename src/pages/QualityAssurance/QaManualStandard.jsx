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

export default function QaManualStandard() {
  return (
    <>
      <Helmet>
        <title>Manual Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Manual SPMI dan Pedoman Penerapan Siklus SPMI Fakultas Hukum UNISSULA — cara kerja setiap tahap penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan standar."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow="DOKUMEN MUTU"
          judul="Manual Mutu"
          pengantar="Manual mutu menjelaskan cara kerja setiap tahap siklus penjaminan mutu: siapa yang berwenang, apa batas kegiatannya, dan langkah apa yang harus ditempuh. Dua dokumen menopang bagian ini — Manual SPMI dan Pedoman Penerapan Siklus SPMI."
        />

        <section className="space-y-5">
          <JudulMutu judul="Dokumen Manual" />
          <DaftarDokumen butir={manualDocuments} />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul="Lima Manual Siklus PPEPP"
            keterangan="Setiap tahap siklus memiliki satu bab manual tersendiri pada kedua dokumen."
          />
          <KartuMutu
            butir={manualStages.map((m) => ({
              code: m.bab.replace("Bab ", ""),
              title: m.stage,
              desc: m.desc,
            }))}
            kolom={3}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul="Isi Setiap Manual"
            keterangan="Empat pokok bahasan yang selalu ada pada tiap bab manual."
          />
          <KartuMutu
            butir={manualStructure.map((s, idx) => ({ ...s, code: String(idx + 1) }))}
            kolom={4}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul="Luas Lingkup Manual"
            keterangan="Bab pengantar yang sama pada Manual SPMI dan Pedoman Penerapan Siklus SPMI."
          />
          <DaftarNomor butir={manualScope} />
        </section>
      </div>
    </>
  );
}
