import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
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
  halamanUtsUas,
} from "../../data/akademik/panduanUtsUasData";

export default function UtsUas() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halamanUtsUas.meta.title)}</title>
        <meta name="description" content={t(halamanUtsUas.meta.description)} />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Angka kunci */}
        <KartuSorot butir={sorotUtsUas} />

        {/* Dua jenis ujian */}
        <section className="space-y-5">
          <JudulSeksi
            judul={halamanUtsUas.seksi.jenis}
            keterangan={halamanUtsUas.seksi.jenisKeterangan}
          />
          <KartuRingkas butir={jenisUjian} kolom={2} />
        </section>

        {/* Syarat peserta */}
        <section className="space-y-5">
          <JudulSeksi
            judul={halamanUtsUas.seksi.syarat}
            keterangan={halamanUtsUas.seksi.syaratKeterangan}
          />
          <DaftarSyarat butir={syaratPeserta} />
        </section>

        {/* Moda pelaksanaan */}
        <section className="space-y-5">
          <JudulSeksi
            judul={halamanUtsUas.seksi.moda}
            keterangan={halamanUtsUas.seksi.modaKeterangan}
          />
          <KartuRingkas butir={modaPelaksanaan} kolom={3} />
        </section>

        {/* Tata tertib */}
        <section className="space-y-5">
          <JudulSeksi judul={halamanUtsUas.seksi.tataTertib} />
          <BolehDilarang wajib={wajibDipatuhi} dilarang={dilarangSaatUjian} />
        </section>

        {/* Sanksi */}
        <section className="space-y-5">
          <JudulSeksi
            judul={halamanUtsUas.seksi.sanksi}
            keterangan={halamanUtsUas.seksi.sanksiKeterangan}
          />
          <SanksiTingkat tingkat={sanksiRingkas} />
        </section>

        {/* Nilai dan keberatan */}
        <section className="space-y-5">
          <JudulSeksi judul={halamanUtsUas.seksi.nilai} />
          <KartuRingkas butir={nilaiKeberatan} kolom={3} />
        </section>

        <CatatanDokumen nama={halamanUtsUas.namaDokumen} />
      </div>
    </>
  );
}
