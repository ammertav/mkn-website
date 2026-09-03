import {
  JudulSeksi,
  DaftarSyarat,
  KartuRingkas,
  BobotPenilaian,
  CatatanDokumen,
} from "../../components/Akademik/panduan/PanduanSorot";
import {
  tesisSyaratRingkas,
  timPengujiRingkas,
  komponenPenilaian,
  tataTertibRingkas,
  yudisiumRingkas,
  halamanTesis,
} from "../../data/akademik/panduanTesisData";

export default function TesisUjian() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <section className="space-y-5">
        <JudulSeksi
          judul={halamanTesis.seksi.syaratTesis}
          keterangan={halamanTesis.seksi.syaratTesisKeterangan}
        />
        <DaftarSyarat butir={tesisSyaratRingkas} />
      </section>

      <section className="space-y-5">
        <JudulSeksi
          judul={halamanTesis.seksi.timPengujiTesis}
          keterangan={halamanTesis.seksi.timPengujiTesisKeterangan}
        />
        <KartuRingkas butir={timPengujiRingkas} kolom={3} />
      </section>

      <section className="space-y-5">
        <JudulSeksi
          judul={halamanTesis.seksi.komponen}
          keterangan={halamanTesis.seksi.komponenKeterangan}
        />
        <BobotPenilaian komponen={komponenPenilaian} />
      </section>

      <section className="space-y-5">
        <JudulSeksi judul={halamanTesis.seksi.tataTertib} />
        <KartuRingkas butir={tataTertibRingkas} kolom={2} />
      </section>

      <section className="space-y-5">
        <JudulSeksi judul={halamanTesis.seksi.yudisium} />
        <KartuRingkas butir={yudisiumRingkas} kolom={3} />
      </section>

      <CatatanDokumen nama={halamanTesis.namaDokumen} />
    </div>
  );
}
