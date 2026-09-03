import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  DaftarSyarat,
  AlurTahap,
  CatatanDokumen,
} from "../../components/Akademik/panduan/PanduanSorot";
import { TabelPanduan, Klausul } from "../../components/Akademik/panduan/PanduanBagian";
import {
  sorotEvaluasi,
  prinsipPenilaian,
  bobotKolom,
  bobotBaris,
  bobotCatatan,
  skalaKolom,
  skalaBaris,
  batasKelulusan,
  langkahKetercapaian,
  catatanKetercapaian,
  kategoriKolom,
  kategoriBaris,
  remidiasi,
  syaratKelulusan,
  predikatKolom,
  predikatBaris,
  siklusKolom,
  siklusBaris,
  ekuivalensiKolom,
  ekuivalensiBaris,
  ekuivalensiCatatan,
  halaman,
} from "../../data/akademik/panduanEvaluasiData";

export default function PanduanEvaluasi() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Kepala */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">{t(halaman.intro)}</p>
        </div>

        <KartuSorot butir={sorotEvaluasi} />

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.prinsip} />
          <KartuRingkas butir={prinsipPenilaian} kolom={3} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.bobot}
            keterangan={halaman.seksi.bobotKeterangan}
          />
          <TabelPanduan kolom={bobotKolom} baris={bobotBaris} />
          <Klausul butir={bobotCatatan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.skala} />
          <TabelPanduan kolom={skalaKolom} baris={skalaBaris} />
          <Klausul butir={batasKelulusan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.ketercapaian}
            keterangan={halaman.seksi.ketercapaianKeterangan}
          />
          <AlurTahap tahap={langkahKetercapaian} />
          <Klausul butir={catatanKetercapaian} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.kategori} />
          <TabelPanduan kolom={kategoriKolom} baris={kategoriBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.remidiasi} />
          <Klausul butir={remidiasi} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.kelulusan}
            keterangan={halaman.seksi.kelulusanKeterangan}
          />
          <DaftarSyarat butir={syaratKelulusan} />
          <TabelPanduan kolom={predikatKolom} baris={predikatBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.siklus} />
          <TabelPanduan kolom={siklusKolom} baris={siklusBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.ekuivalensi}
            keterangan={halaman.seksi.ekuivalensiKeterangan}
          />
          <TabelPanduan kolom={ekuivalensiKolom} baris={ekuivalensiBaris} />
          <Klausul butir={ekuivalensiCatatan} />
        </section>

        <CatatanDokumen nama={halaman.namaDokumen} />
      </div>
    </>
  );
}
