import { Helmet } from "react-helmet-async";
import { useUi } from "../../i18n/useUi";
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
} from "../../data/akademik/panduanEvaluasiData";

export default function PanduanEvaluasi() {
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>Panduan Evaluasi Pembelajaran | MKn UNISSULA</title>
        <meta
          name="description"
          content="Panduan Evaluasi Pembelajaran Program Studi Magister Kenotariatan UNISSULA — bobot komponen penilaian, skala nilai, ketercapaian CPL, remidiasi, dan predikat kelulusan."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Kepala */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            {ui("sectionAcademic")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Panduan Evaluasi Pembelajaran
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
         
        </div>

        <KartuSorot butir={sorotEvaluasi} />

        <section className="space-y-5">
          <JudulSeksi judul="Sifat Penilaian" />
          <KartuRingkas butir={prinsipPenilaian} kolom={3} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Teknik dan Instrumental Penilaian Tiap Mata Kuliah"
          />
          <TabelPanduan kolom={bobotKolom} baris={bobotBaris} />
          <Klausul butir={bobotCatatan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Skala Nilai dan Batas Kelulusan" />
          <TabelPanduan kolom={skalaKolom} baris={skalaBaris} />
          <Klausul butir={batasKelulusan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Perhitungan Ketercapaian"
            keterangan="Perhitungan dilakukan berjenjang dari butir penilaian sampai tingkat program studi."
          />
          <AlurTahap tahap={langkahKetercapaian} />
          <Klausul butir={catatanKetercapaian} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Kategori Ketercapaian dan Tindak Lanjut" />
          <TabelPanduan kolom={kategoriKolom} baris={kategoriBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Remidiasi dan Perbaikan Nilai" />
          <Klausul butir={remidiasi} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Syarat Kelulusan dan Predikat"
            keterangan="Mahasiswa berhak menyandang gelar Magister Kenotariatan (M.Kn.) apabila memenuhi seluruh syarat berikut."
          />
          <DaftarSyarat butir={syaratKelulusan} />
          <TabelPanduan kolom={predikatKolom} baris={predikatBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Siklus Evaluasi dan Perbaikan Berkelanjutan" />
          <TabelPanduan kolom={siklusKolom} baris={siklusBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026"
            keterangan="Berlaku bagi mahasiswa angkatan Kurikulum 2021 (36 sks) yang belum menyelesaikan studi. Mata kuliah yang dinyatakan setara diakui tanpa perlu ditempuh kembali; selisih beban studi dipenuhi dengan menempuh mata kuliah yang belum berpadanan."
          />
          <TabelPanduan kolom={ekuivalensiKolom} baris={ekuivalensiBaris} />
          <Klausul butir={ekuivalensiCatatan} />
        </section>

        <CatatanDokumen nama="Panduan Evaluasi Pembelajaran" />
      </div>
    </>
  );
}
