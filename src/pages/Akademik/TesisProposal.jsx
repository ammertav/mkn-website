import { JudulSeksi, DaftarSyarat } from "../../components/Akademik/panduan/PanduanSorot";
import { useT } from "../../i18n/languageContext";
import { proposalRingkas, halamanTesis } from "../../data/akademik/panduanTesisData";

export default function TesisProposal() {
  const t = useT();

  return (
    <div className="space-y-10">
      <section className="space-y-5">
        <JudulSeksi judul={halamanTesis.seksi.timPenguji} />
        <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-5 rounded-xs">
          <p className="text-sm sm:text-[15px] text-body leading-relaxed">
            {t(proposalRingkas.penguji)}
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <JudulSeksi
          judul={halamanTesis.seksi.yangDinilai}
          keterangan={halamanTesis.seksi.yangDinilaiKeterangan}
        />
        <DaftarSyarat butir={proposalRingkas.dinilai} />
      </section>
    </div>
  );
}
