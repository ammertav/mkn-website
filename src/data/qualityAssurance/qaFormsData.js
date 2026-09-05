/**
 * Formulir Mutu — Fakultas Hukum UNISSULA.
 *
 * SUMBER: dokumen "Formulir SPMI Fakultas Hukum UNISSULA", Kode
 * FRM/SA-FH/MUTU-02, Revisi 03, 30 September 2025, 31 halaman.
 *
 * Formulir dikelompokkan mengikuti siklus PPEPP: Penetapan (kode A),
 * Pelaksanaan (B), Evaluasi (C), Pengendalian (D), dan Peningkatan (E).
 *
 * CATATAN TRANSKRIPSI: pada daftar isi dokumen sumber, kolom "Tahap" tergeser
 * satu baris sehingga FRM/SA-FH/D-01 tampak tanpa tahap dan FRM/SA-FH/E-01
 * tampak bertahap "Pengendalian". Pengelompokan di bawah ini mengikuti awalan
 * kode formulir, yang konsisten dengan penjelasan tahap pada pengantar dokumen.
 */

import { BERKAS } from "./berkas";

export const formsMeta = {
  code: "FRM/SA-FH/MUTU-02",
  revisi: "Revisi 03",
  tanggal: "30 September 2025",
  halaman: "31 halaman",
  total: 19,
  fileUrl: BERKAS + "FRM-SA-FH-MUTU-02-Formulir-SPMI.pdf",
};

export const formsPengantar =
  "Formulir SPMI adalah naskah tertulis yang dipakai saat standar SPMI dijalankan, berfungsi " +
  "merekam hal, informasi, atau kegiatan tertentu. Setiap formulir dilengkapi kode, petunjuk " +
  "pengisian, kolom isian, dan blok pengesahan sehingga dapat langsung dipakai unit kerja dan " +
  "program studi.";

export const formsPengguna =
  "Formulir digunakan oleh Dekan, para Wakil Dekan, Ketua Program Studi, Unit Penjaminan Mutu, " +
  "Gugus Penjaminan Mutu, Manajer Program Audit Mutu Internal, auditor internal, dosen, dan " +
  "tenaga kependidikan sesuai kewenangan masing-masing.";

export const formsArsip =
  "Formulir yang telah diisi merupakan rekaman mutu yang wajib diarsipkan sekurang-kurangnya " +
  "5 (lima) tahun sebagai bukti pelaksanaan SPMI dan bahan penilaian akreditasi.";

export const formGroups = [
  {
    code: "A",
    stage: "Penetapan",
    items: [
      { code: "FRM/SA-FH/A-01", name: "Formulir Usulan Penetapan/Revisi Standar SPMI" },
      { code: "FRM/SA-FH/A-02", name: "Formulir Berita Acara Rapat Penetapan Standar" },
      { code: "FRM/SA-FH/A-03", name: "Formulir Daftar Hadir Kegiatan SPMI" },
    ],
  },
  {
    code: "B",
    stage: "Pelaksanaan",
    items: [
      { code: "FRM/SA-FH/B-01", name: "Formulir Sosialisasi Standar SPMI" },
      { code: "FRM/SA-FH/B-02", name: "Formulir Rencana Pemenuhan Standar (Program Kerja)" },
      { code: "FRM/SA-FH/B-03", name: "Formulir Berita Acara Perkuliahan" },
      { code: "FRM/SA-FH/B-04", name: "Formulir Rekaman Pelaksanaan Kegiatan" },
    ],
  },
  {
    code: "C",
    stage: "Evaluasi",
    items: [
      { code: "FRM/SA-FH/C-01", name: "Formulir Evaluasi Diri Program Studi/Unit Kerja" },
      { code: "FRM/SA-FH/C-02", name: "Formulir Daftar Tilik (Checklist) Audit Mutu Internal" },
      { code: "FRM/SA-FH/C-03", name: "Formulir Temuan Audit Mutu Internal" },
      { code: "FRM/SA-FH/C-04", name: "Formulir Survei Kepuasan Pemangku Kepentingan" },
      { code: "FRM/SA-FH/C-05", name: "Formulir Evaluasi Dosen oleh Mahasiswa (EDOM)" },
    ],
  },
  {
    code: "D",
    stage: "Pengendalian",
    items: [
      { code: "FRM/SA-FH/D-01", name: "Formulir Permintaan Tindakan Koreksi (PTK)" },
      { code: "FRM/SA-FH/D-02", name: "Formulir Rencana Tindak Lanjut (RTL)" },
      { code: "FRM/SA-FH/D-03", name: "Formulir Notulen Rapat Tinjauan Manajemen" },
      { code: "FRM/SA-FH/D-04", name: "Formulir Verifikasi Tindak Lanjut dan Status Temuan" },
    ],
  },
  {
    code: "E",
    stage: "Peningkatan",
    items: [
      { code: "FRM/SA-FH/E-01", name: "Formulir Usulan Peningkatan Standar (Kaizen)" },
      { code: "FRM/SA-FH/E-02", name: "Formulir Benchmarking Standar" },
      { code: "FRM/SA-FH/E-03", name: "Formulir Laporan Pelaksanaan SPMI Tahunan" },
    ],
  },
];
