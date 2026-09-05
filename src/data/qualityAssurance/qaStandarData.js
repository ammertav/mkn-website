/**
 * Standar Mutu — Fakultas Hukum UNISSULA.
 *
 * SUMBER: 21 dokumen standar SPMI Fakultas Hukum UNISSULA, seluruhnya Revisi 03
 * tertanggal 30 September 2025, disahkan dengan Keputusan Dekan Nomor
 * 1098/A.1/SA-H/X/2025 tanggal 2 Oktober 2025.
 *
 * Kode dan judul diambil dari halaman identitas MASING-MASING dokumen standar,
 * bukan dari lampiran SK. Alasannya:
 *
 *   PERBEDAAN YANG PERLU DIKONFIRMASI PRODI —
 *   Lampiran SK Nomor 1098/A.1/SA-H/X/2025 mencantumkan STD/SA-FH/A.1/06
 *   sebagai "Standar Isi Pembelajaran", sedangkan dokumen berkode sama berjudul
 *   "Standar Dosen dan Tenaga Kependidikan". Tidak ada berkas berjudul Standar
 *   Isi Pembelajaran pada himpunan yang diterima. Lampiran SK juga menulis
 *   "Standar Ketenagaan dan Kesejahteraan" untuk STD/SA-FH/NA/04, sedangkan
 *   dokumennya berjudul "Standar Ketenagakerjaan dan Kesejahteraan".
 */

import { BERKAS } from "./berkas";

export const standarMeta = {
  total: 21,
  revisi: "Revisi 03",
  tanggal: "30 September 2025",
  sk: "Keputusan Dekan Nomor 1098/A.1/SA-H/X/2025 tanggal 2 Oktober 2025",
};

/** Setiap dokumen standar memuat sepuluh pokok yang sama. */
export const standarStructure = [
  "Visi, misi, tujuan, dan sasaran Fakultas Hukum",
  "Rasional penetapan standar",
  "Pihak yang bertanggung jawab memenuhi standar",
  "Definisi istilah",
  "Pernyataan isi standar",
  "Indikator ketercapaian",
  "Strategi pencapaian standar",
  "Dokumen terkait",
  "Referensi",
  "Formulir yang digunakan",
];

/**
 * Empat kelompok standar.
 *
 * Kode A.1 = pendidikan, A.2 = penelitian, A.3 = pengabdian kepada masyarakat,
 * NA = non-akademik.
 */
export const standarGroups = [
  {
    group: "Standar Pendidikan",
    code: "A.1",
    desc: "Delapan standar yang mengatur luaran, proses, dan masukan penyelenggaraan pendidikan.",
    items: [
      {
        code: "STD/SA-FH/A.1/01",
        name: "Standar Kompetensi Lulusan",
        cluster: "Luaran pendidikan",
        file: BERKAS + "STD-SA-FH-A1-01-Standar-Kompetensi-Lulusan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/02",
        name: "Standar Proses Pembelajaran",
        cluster: "Proses pendidikan",
        file: BERKAS + "STD-SA-FH-A1-02-Standar-Proses-Pembelajaran.pdf",
      },
      {
        code: "STD/SA-FH/A.1/03",
        name: "Standar Penilaian",
        cluster: "Proses pendidikan",
        file: BERKAS + "STD-SA-FH-A1-03-Standar-Penilaian.pdf",
      },
      {
        code: "STD/SA-FH/A.1/04",
        name: "Standar Pengelolaan",
        cluster: "Proses pendidikan",
        file: BERKAS + "STD-SA-FH-A1-04-Standar-Pengelolaan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/05",
        name: "Standar Isi Pendidikan",
        cluster: "Masukan pendidikan",
        file: BERKAS + "STD-SA-FH-A1-05-Standar-Isi-Pendidikan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/06",
        name: "Standar Dosen dan Tenaga Kependidikan",
        cluster: "Masukan pendidikan",
        file: BERKAS + "STD-SA-FH-A1-06-Standar-Dosen-dan-Tenaga-Kependidikan.pdf",
      },
      {
        code: "STD/SA-FH/A.1/07",
        name: "Standar Sarana dan Prasarana",
        cluster: "Masukan pendidikan",
        file: BERKAS + "STD-SA-FH-A1-07-Standar-Sarana-dan-Prasarana.pdf",
      },
      {
        code: "STD/SA-FH/A.1/08",
        name: "Standar Pembiayaan",
        cluster: "Masukan pendidikan",
        file: BERKAS + "STD-SA-FH-A1-08-Standar-Pembiayaan.pdf",
      },
    ],
  },
  {
    group: "Standar Penelitian",
    code: "A.2",
    desc: "Tiga standar yang mengatur luaran, proses, dan masukan kegiatan penelitian.",
    items: [
      {
        code: "STD/SA-FH/A.2/01",
        name: "Standar Luaran Penelitian",
        cluster: "Luaran",
        file: BERKAS + "STD-SA-FH-A2-01-Standar-Luaran-Penelitian.pdf",
      },
      {
        code: "STD/SA-FH/A.2/02",
        name: "Standar Proses Penelitian",
        cluster: "Proses",
        file: BERKAS + "STD-SA-FH-A2-02-Standar-Proses-Penelitian.pdf",
      },
      {
        code: "STD/SA-FH/A.2/03",
        name: "Standar Masukan Penelitian",
        cluster: "Masukan",
        file: BERKAS + "STD-SA-FH-A2-03-Standar-Masukan-Penelitian.pdf",
      },
    ],
  },
  {
    group: "Standar Pengabdian kepada Masyarakat",
    code: "A.3",
    desc: "Tiga standar yang mengatur luaran, proses, dan masukan pengabdian kepada masyarakat.",
    items: [
      {
        code: "STD/SA-FH/A.3/01",
        name: "Standar Luaran Pengabdian kepada Masyarakat",
        cluster: "Luaran",
        file: BERKAS + "STD-SA-FH-A3-01-Standar-Luaran-PkM.pdf",
      },
      {
        code: "STD/SA-FH/A.3/02",
        name: "Standar Proses Pengabdian kepada Masyarakat",
        cluster: "Proses",
        file: BERKAS + "STD-SA-FH-A3-02-Standar-Proses-PkM.pdf",
      },
      {
        code: "STD/SA-FH/A.3/03",
        name: "Standar Masukan Pengabdian kepada Masyarakat",
        cluster: "Masukan",
        file: BERKAS + "STD-SA-FH-A3-03-Standar-Masukan-PkM.pdf",
      },
    ],
  },
  {
    group: "Standar Non-Akademik",
    code: "NA",
    desc:
      "Tujuh standar yang mengatur tata kelola, sumber daya, dan kekhasan UNISSULA di luar " +
      "kegiatan tridarma.",
    items: [
      {
        code: "STD/SA-FH/NA/01",
        name: "Standar Organisasi",
        cluster: "Tata kelola",
        file: BERKAS + "STD-SA-FH-NA-01-Standar-Organisasi.pdf",
      },
      {
        code: "STD/SA-FH/NA/02",
        name: "Standar Keuangan",
        cluster: "Tata kelola",
        file: BERKAS + "STD-SA-FH-NA-02-Standar-Keuangan.pdf",
      },
      {
        code: "STD/SA-FH/NA/03",
        name: "Standar Kemahasiswaan",
        cluster: "Sumber daya",
        file: BERKAS + "STD-SA-FH-NA-03-Standar-Kemahasiswaan.pdf",
      },
      {
        code: "STD/SA-FH/NA/04",
        name: "Standar Ketenagakerjaan dan Kesejahteraan",
        cluster: "Sumber daya",
        file: BERKAS + "STD-SA-FH-NA-04-Standar-Ketenagakerjaan-dan-Kesejahteraan.pdf",
      },
      {
        code: "STD/SA-FH/NA/05",
        name: "Standar Sarana dan Prasarana",
        cluster: "Sumber daya",
        file: BERKAS + "STD-SA-FH-NA-05-Standar-Sarana-dan-Prasarana.pdf",
      },
      {
        code: "STD/SA-FH/NA/06",
        name: "Standar Budaya Akademik Islami (BudAI) dan Birrul Walidain",
        cluster: "Kekhasan UNISSULA",
        file: BERKAS + "STD-SA-FH-NA-06-Standar-BudAI-dan-Birrul-Walidain.pdf",
      },
      {
        code: "STD/SA-FH/NA/07",
        name: "Standar Kerjasama",
        cluster: "Tata kelola",
        file: BERKAS + "STD-SA-FH-NA-07-Standar-Kerjasama.pdf",
      },
    ],
  },
];
