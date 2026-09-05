import { Helmet } from "react-helmet-async";
import {
  KepalaMutu,
  JudulMutu,
  IdentitasDokumen,
  KartuMutu,
  DaftarNomor,
  DaftarDokumen,
} from "../../components/QualityAssurance/MutuBagian";
import {
  documentIdentity,
  asasMutu,
  prinsipMutu,
  tujuanSpmi,
  policyDocuments,
} from "../../data/qualityAssurance/qaPolicyData";

export default function QaPolicy() {
  return (
    <>
      <Helmet>
        <title>Kebijakan Mutu | MKn UNISSULA</title>
        <meta
          name="description"
          content="Kebijakan Sistem Penjaminan Mutu Internal Fakultas Hukum UNISSULA — asas, prinsip, dan tujuan penjaminan mutu yang menjadi payung seluruh dokumen mutu."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        <KepalaMutu
          eyebrow="DOKUMEN MUTU"
          judul="Kebijakan Mutu"
          pengantar="Kebijakan Sistem Penjaminan Mutu Internal menetapkan arah, asas, prinsip, dan tujuan penjaminan mutu Fakultas Hukum UNISSULA. Dokumen ini menjadi payung bagi manual mutu, standar mutu, dan formulir mutu yang berlaku di seluruh program studi."
        />

        <section className="space-y-5">
          <JudulMutu
            judul="Lima Asas Penjaminan Mutu"
            keterangan="Penjaminan mutu internal di UNISSULA mengedepankan asas berikut, masing-masing berpijak pada rujukan Al-Qur'an sebagaimana dicantumkan dokumen sumber."
          />
          <KartuMutu butir={asasMutu} kolom={3} />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul="Enam Prinsip Pelaksanaan"
            keterangan="Prinsip yang mengikat pelaksanaan SPMI pada seluruh unit kerja."
          />
          <KartuMutu
            butir={prinsipMutu.map((p, idx) => ({ ...p, code: String(idx + 1) }))}
            kolom={3}
          />
        </section>

        <section className="space-y-5">
          <JudulMutu
            judul="Delapan Tujuan SPMI"
            keterangan="Alasan kebijakan mutu disusun dan didokumentasikan secara tertulis."
          />
          <DaftarNomor butir={tujuanSpmi} />
        </section>

        <section className="space-y-5">
          <JudulMutu judul="Berkas Kebijakan" />
          <DaftarDokumen butir={policyDocuments} />
        </section>
      </div>
    </>
  );
}
