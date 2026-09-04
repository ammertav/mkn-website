import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  CatatanDokumen,
} from "../../components/Akademik/panduan/PanduanSorot";
import { TabelPanduan, Klausul } from "../../components/Akademik/panduan/PanduanBagian";
import {
  sorotAsesmen,
  kedudukan,
  komponenKolom,
  komponenBaris,
  teknikKolom,
  teknikBaris,
  pemetaanCpl,
  catatanBukti,
  keselarasan,
  bloomKolom,
  bloomBaris,
  ketentuanRubrik,
  bobotRekonsiliasi,
  ketentuanPenulisan,
  contohKeterangan,
  contohKolom,
  contohBaris,
  contohCatatan,
  rubrikKolom,
  rubrikBaris,
  halaman,
} from "../../data/akademik/asesmenData";

export default function Asesmen() {
  const t = useT();
  const ui = useUi();

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
            {ui("sectionAcademic")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">{t(halaman.intro)}</p>
        </div>

        <KartuSorot butir={sorotAsesmen} />

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.kedudukan} />
          <Klausul butir={kedudukan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.komponen}
            keterangan={halaman.seksi.komponenKeterangan}
          />
          <TabelPanduan kolom={komponenKolom} baris={komponenBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.teknik}
            keterangan={halaman.seksi.teknikKeterangan}
          />
          <TabelPanduan kolom={teknikKolom} baris={teknikBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.pemetaan}
            keterangan={halaman.seksi.pemetaanKeterangan}
          />
          <KartuRingkas butir={pemetaanCpl} kolom={2} />
          <Klausul butir={catatanBukti} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.keselarasan}
            keterangan={halaman.seksi.keselarasanKeterangan}
          />
          <Klausul butir={keselarasan} />
          <TabelPanduan kolom={bloomKolom} baris={bloomBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.rubrik} />
          <Klausul butir={ketentuanRubrik} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.bobot} />
          <Klausul butir={bobotRekonsiliasi} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.penulisan} />
          <Klausul butir={ketentuanPenulisan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul={halaman.seksi.contoh} keterangan={contohKeterangan} />
          <TabelPanduan kolom={contohKolom} baris={contohBaris} />
          <p className="text-sm text-body leading-relaxed max-w-5xl">{t(contohCatatan)}</p>
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.seksi.rubrikAnalitik}
            keterangan={halaman.seksi.rubrikAnalitikKeterangan}
          />
          <TabelPanduan kolom={rubrikKolom} baris={rubrikBaris} />
        </section>

        <CatatanDokumen nama={halaman.namaDokumen} />
      </div>
    </>
  );
}
