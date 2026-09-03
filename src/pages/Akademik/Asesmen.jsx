import { Helmet } from "react-helmet-async";
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
} from "../../data/akademik/asesmenData";

export default function Asesmen() {
  return (
    <>
      <Helmet>
        <title>Asesmen | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ketentuan penyusunan halaman asesmen Rencana Pembelajaran Semester Magister Kenotariatan UNISSULA — teknik asesmen, pemetaan CPL, rubrik, dan bukti asesmen."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Kepala */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Asesmen
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">
            Halaman asesmen merupakan bagian wajib Rencana Pembelajaran Semester. Ketentuan berikut
            mengatur cara setiap mata kuliah merencanakan pengukuran Sub-CPMK dan CPL, mulai dari
            pemilihan teknik, penyusunan rubrik, penetapan bobot, hingga bukti asesmen yang
            dihimpun.
          </p>
        </div>

        <KartuSorot butir={sorotAsesmen} />

        <section className="space-y-5">
          <JudulSeksi judul="Kedudukan Halaman Asesmen" />
          <Klausul butir={kedudukan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Delapan Komponen Halaman Asesmen"
            keterangan="Setiap halaman asesmen sekurang-kurangnya memuat komponen berikut."
          />
          <TabelPanduan kolom={komponenKolom} baris={komponenBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Teknik dan Instrumen Asesmen"
            keterangan="Sembilan teknik yang digunakan pada Kurikulum OBE Tahun 2026 beserta instrumen dan penggunaannya."
          />
          <TabelPanduan kolom={teknikKolom} baris={teknikBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Pemetaan Teknik Asesmen terhadap CPL"
            keterangan="Teknik asesmen utama yang digunakan untuk mengukur setiap Capaian Pembelajaran Lulusan."
          />
          <KartuRingkas butir={pemetaanCpl} kolom={2} />
          <Klausul butir={catatanBukti} />
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Keselarasan Konstruktif"
            keterangan="Kaidah yang menjaga agar penilaian benar-benar mengukur capaian yang dirumuskan."
          />
          <Klausul butir={keselarasan} />
          <TabelPanduan kolom={bloomKolom} baris={bloomBaris} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Ketentuan Rubrik" />
          <Klausul butir={ketentuanRubrik} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Bobot dan Rekonsiliasi" />
          <Klausul butir={bobotRekonsiliasi} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Ketentuan Penulisan" />
          <Klausul butir={ketentuanPenulisan} />
        </section>

        <section className="space-y-5">
          <JudulSeksi judul="Contoh Halaman Asesmen Mata Kuliah" keterangan={contohKeterangan} />
          <TabelPanduan kolom={contohKolom} baris={contohBaris} />
          <p className="text-sm text-body leading-relaxed max-w-5xl">{contohCatatan}</p>
        </section>

        <section className="space-y-5">
          <JudulSeksi
            judul="Rubrik Analitik Penilaian Legal Drafting Akta"
            keterangan="Berlaku seragam pada seluruh mata kuliah rumpun Teknik Pembuatan Akta dan Laboratorium Akta."
          />
          <TabelPanduan kolom={rubrikKolom} baris={rubrikBaris} />
        </section>

        <CatatanDokumen nama="Materi Halaman Asesmen" />
      </div>
    </>
  );
}
