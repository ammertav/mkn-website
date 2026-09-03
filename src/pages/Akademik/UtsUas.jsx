import { Helmet } from "react-helmet-async";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  DaftarSyarat,
  BolehDilarang,
  SanksiTingkat,
  CatatanDokumen,
} from "../../components/Akademik/panduan/PanduanSorot";
import {
  sorotUtsUas,
  jenisUjian,
  syaratPeserta,
  modaPelaksanaan,
  wajibDipatuhi,
  dilarangSaatUjian,
  sanksiRingkas,
  nilaiKeberatan,
} from "../../data/akademik/panduanUtsUasData";

export default function UtsUas() {
  return (
    <>
      <Helmet>
        <title>Panduan Ujian UTS & UAS | MKn UNISSULA</title>
        <meta
          name="description"
          content="Pokok-pokok panduan Ujian Tengah Semester dan Ujian Akhir Semester Program Studi Magister Kenotariatan UNISSULA — jadwal, syarat, tata tertib, dan sanksi."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Angka kunci */}
        <KartuSorot butir={sorotUtsUas} />

        {/* Dua jenis ujian */}
        <section className="space-y-5">
          <JudulSeksi
            judul="Dua Jenis Ujian Semester"
            keterangan="Ujian semester dilaksanakan dua kali, masing-masing mengukur ketercapaian Sub-CPMK pada paruh yang berbeda."
          />
          <KartuRingkas butir={jenisUjian} kolom={2} />
        </section>

        {/* Syarat peserta */}
        <section className="space-y-5">
          <JudulSeksi
            judul="Syarat Mengikuti Ujian"
            keterangan="Seluruh syarat berikut harus dipenuhi sebelum peserta diperkenankan mengikuti ujian."
          />
          <DaftarSyarat butir={syaratPeserta} />
        </section>

        {/* Moda pelaksanaan */}
        <section className="space-y-5">
          <JudulSeksi
            judul="Tiga Moda Pelaksanaan"
            keterangan="Ujian dapat diselenggarakan secara luring, daring, maupun sebagai ujian praktik di Laboratorium Kenotariatan."
          />
          <KartuRingkas butir={modaPelaksanaan} kolom={3} />
        </section>

        {/* Tata tertib */}
        <section className="space-y-5">
          <JudulSeksi judul="Tata Tertib Selama Ujian" />
          <BolehDilarang wajib={wajibDipatuhi} dilarang={dilarangSaatUjian} />
        </section>

        {/* Sanksi */}
        <section className="space-y-5">
          <JudulSeksi
            judul="Sanksi Pelanggaran"
            keterangan="Sanksi dikenakan secara bertingkat sesuai berat pelanggaran."
          />
          <SanksiTingkat tingkat={sanksiRingkas} />
        </section>

        {/* Nilai dan keberatan */}
        <section className="space-y-5">
          <JudulSeksi judul="Nilai, Ujian Susulan, dan Keberatan" />
          <KartuRingkas butir={nilaiKeberatan} kolom={3} />
        </section>

        <CatatanDokumen nama="Panduan Ujian Tengah Semester dan Ujian Akhir Semester" />
      </div>
    </>
  );
}
