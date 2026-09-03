import {
  JudulSeksi,
  DaftarSyarat,
  KartuRingkas,
} from "../../components/Akademik/panduan/PanduanSorot";
import {
  praProposalRingkas,
  halamanTesis,
} from "../../data/akademik/panduanTesisData";

export default function TesisPraProposal() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <JudulSeksi
          judul={halamanTesis.seksi.isiPraProposal}
          keterangan={halamanTesis.seksi.isiPraProposalKeterangan}
        />
        <DaftarSyarat butir={praProposalRingkas.isi} />
      </section>

      <section className="space-y-5">
        <JudulSeksi judul={halamanTesis.seksi.ketentuanPelaksanaan} />
        <KartuRingkas butir={praProposalRingkas.catatan} kolom={3} />
      </section>
    </div>
  );
}
