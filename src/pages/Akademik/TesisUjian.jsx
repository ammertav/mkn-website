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
} from "../../data/akademik/panduanTesisData";

export default function TesisUjian() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <section className="space-y-5">
        <JudulSeksi
          judul="Delapan Syarat Ujian Tesis"
          keterangan="Ujian tesis hanya dapat dilaksanakan apabila seluruh syarat berikut telah dipenuhi."
        />
        <DaftarSyarat butir={tesisSyaratRingkas} />
      </section>

      <section className="space-y-5">
        <JudulSeksi
          judul="Tim Penguji"
          keterangan="Ujian berbentuk seminar terbuka di hadapan sekurang-kurangnya tiga orang penguji."
        />
        <KartuRingkas butir={timPengujiRingkas} kolom={3} />
      </section>

      <section className="space-y-5">
        <JudulSeksi
          judul="Komponen Penilaian"
          keterangan="Lima komponen penilaian beserta bobotnya. Mahasiswa dinyatakan lulus apabila memperoleh nilai sekurang-kurangnya B."
        />
        <BobotPenilaian komponen={komponenPenilaian} />
      </section>

      <section className="space-y-5">
        <JudulSeksi judul="Tata Tertib Ujian" />
        <KartuRingkas butir={tataTertibRingkas} kolom={2} />
      </section>

      <section className="space-y-5">
        <JudulSeksi judul="Perbaikan, Yudisium, dan Predikat" />
        <KartuRingkas butir={yudisiumRingkas} kolom={3} />
      </section>

      <CatatanDokumen nama="Panduan Ujian Tesis" />
    </div>
  );
}
