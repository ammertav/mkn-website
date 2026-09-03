import {
  JudulSeksi,
  DaftarSyarat,
  KartuRingkas,
} from "../../components/Akademik/panduan/PanduanSorot";
import { praProposalRingkas } from "../../data/akademik/panduanTesisData";

export default function TesisPraProposal() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <JudulSeksi
          judul="Isi Pra Proposal"
          keterangan="Pra proposal adalah bimbingan untuk membangun kerangka berpikir sebelum proposal disusun. Naskahnya memuat lima hal berikut."
        />
        <DaftarSyarat butir={praProposalRingkas.isi} />
      </section>

      <section className="space-y-5">
        <JudulSeksi judul="Ketentuan Pelaksanaan" />
        <KartuRingkas butir={praProposalRingkas.catatan} kolom={3} />
      </section>
    </div>
  );
}
