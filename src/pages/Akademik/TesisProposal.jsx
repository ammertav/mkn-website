import { JudulSeksi, DaftarSyarat } from "../../components/Akademik/panduan/PanduanSorot";
import { proposalRingkas } from "../../data/akademik/panduanTesisData";

export default function TesisProposal() {
  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <JudulSeksi judul="Susunan Tim Penguji" />
        <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-5 rounded-xs">
          <p className="text-sm sm:text-[15px] text-body leading-relaxed">
            {proposalRingkas.penguji}
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <JudulSeksi
          judul="Yang Dinilai"
          keterangan="Penilaian mencakup kesatuan konstruksi pemikiran serta penguasaan materi. Mahasiswa dinyatakan lulus apabila memperoleh nilai sekurang-kurangnya B."
        />
        <DaftarSyarat butir={proposalRingkas.dinilai} />
      </section>
    </div>
  );
}
