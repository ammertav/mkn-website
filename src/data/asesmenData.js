/**
 * Data Asesmen & Penilaian Pembelajaran
 * Memenuhi ESG Standard 1.3 (ACQUIN) — Student Assessment
 */

export const assessmentOverview = {
  category: "ACADEMIC",
  title: "Sistem Asesmen & Regulasi Penilaian",
  description:
    "Sistem penilaian pembelajaran pada Program Studi Magister Kenotariatan (MKn) UNISSULA diselenggarakan secara objektif, transparan, dan akuntabel sesuai standar ESG 1.3 (ACQUIN). Mahasiswa berhak mengetahui kriteria asesmen di awal perkuliahan serta memiliki hak formal untuk mengajukan banding nilai apabila ditemukan ketidaksesuaian evaluasi.",
};

// Seksi 1: Metode & Kriteria Penilaian
export const komponenPenilaian = [
  {
    id: 1,
    komponen: "Partisipasi & Diskusi Interaktif",
    bobot: "10%",
    kriteria: "Keaktifan dalam analisis studi kasus kenotariatan, kehadiran kuliah tatap muka & hybrid, serta kontribusi dalam forum diskusi kelas.",
    bentuk: "Presensi & Rubrik Partisipasi Kelas",
  },
  {
    id: 2,
    komponen: "Tugas Terstruktur & Legal Drafting",
    bobot: "25%",
    kriteria: "Kualitas penyusunan legal memorandum, drafting akta autentik (akta notariil & akta PPAT), ketepatan telaah yuridis, dan orisinalitas analisis.",
    bentuk: "Tugas Individu / Kelompok & Penugasan Akta",
  },
  {
    id: 3,
    komponen: "Ujian Tengah Semester (UTS)",
    bobot: "25%",
    kriteria: "Penguasaan konsep teoritis dan yuridis doktrinal hukum kenotariatan, hukum agraria, hukum jaminan, dan hukum perseroan.",
    bentuk: "Ujian Tertulis (Esai Analitis / Studi Kasus Tertulis)",
  },
  {
    id: 4,
    komponen: "Ujian Akhir Semester (UAS)",
    bobot: "30%",
    kriteria: "Kemampuan komprehensif memecahkan sengketa kenotariatan, penerapan hukum materiil & formil, serta simulasi pembuatan akta kompleks.",
    bentuk: "Ujian Komprehensif / Praktik Simulasi Kasus",
  },
  {
    id: 5,
    komponen: "Simulasi Praktik & Presentasi",
    bobot: "10%",
    kriteria: "Keterampilan komunikasi hukum, argumentasi yuridis dalam presentasi, dan simulasi penandatanganan serta pembacaan akta notaris.",
    bentuk: "Presentasi Kelompok / Ujian Praktik Mandiri",
  },
];

// Seksi 2: Regulasi Ujian & Remedial
export const regulasiUjian = [
  {
    id: 1,
    aturan: "Syarat Kehadiran Minimal Ujian",
    keterangan:
      "Mahasiswa wajib menghadiri perkuliahan sekurang-kurangnya 75% dari total pertemuan efektif perkuliahan semester berjalan untuk berhak mengikuti UTS dan UAS.",
    status: "Wajib Dipenuhi",
  },
  {
    id: 2,
    aturan: "Tata Tertib & Integritas Akademik",
    keterangan:
      "Peserta ujian wajib hadir 15 menit sebelum ujian dimulai, mengenakan pakaian formal rapi, membawa kartu ujian resmi, serta dilarang keras melakukan plagiarisme atau kecurangan akademik.",
    status: "Ketentuan Mutlak",
  },
  {
    id: 3,
    aturan: "Ujian Susulan (Incomplete Exam)",
    keterangan:
      "Ujian susulan hanya dapat diberikan kepada mahasiswa yang berhalangan hadir karena alasan sah (sakit rawat inap atau tugas kedinasan) dengan melampirkan bukti resmi maksimal 3 hari kerja pasca jadwal ujian.",
    status: "Dengan Dispensasi Resmi",
  },
  {
    id: 4,
    aturan: "Perbaikan Nilai (Remedial / Retake)",
    keterangan:
      "Mahasiswa yang memperoleh nilai di bawah batas minimum kelulusan mata kuliah diperkenankan mengulang mata kuliah pada semester berikutnya. Nilai tertinggi yang akan dicantumkan dalam Transkrip Akademik.",
    status: "Hak Mahasiswa",
  },
  {
    id: 5,
    aturan: "Publikasi Nilai Akhir (Transparansi)",
    keterangan:
      "Dosen pengampu wajib mempublikasikan rekapitulasi nilai akhir melalui Sistem Informasi Akademik (SIAKAD) paling lambat 14 hari kerja setelah pelaksanaan UAS berakhir.",
    status: "Kewajiban Dosen",
  },
];

// Seksi 3: Prosedur Banding Nilai (Grade Appeal Process)
export const prosedurBanding = [
  {
    langkah: 1,
    tahap: "Pengajuan Permohonan Keberatan",
    pelaksana: "Mahasiswa",
    tenggat: "Maksimal 7 hari kerja",
    detail:
      "Mahasiswa mengisi Formulir Sanggahan/Banding Nilai secara tertulis atau melalui portal akademik dengan melampirkan berkas bukti pendukung (tugas, catatan ujian, atau rekap presensi).",
  },
  {
    langkah: 2,
    tahap: "Verifikasi Berkas & Rekonsiliasi",
    pelaksana: "Sekretariat Prodi MKn",
    tenggat: "2 hari kerja",
    detail:
      "Sekretariat Program Studi memeriksa kelayakan administratif dan meneruskan permohonan banding kepada Dosen Pengampu Mata Kuliah terkait beserta arsip penilaian.",
  },
  {
    langkah: 3,
    tahap: "Klarifikasi & Re-Evaluasi Asesmen",
    pelaksana: "Dosen Pengampu & Tim Kurikulum",
    tenggat: "3 hari kerja",
    detail:
      "Dosen pengampu bersama tim asesmen melakukan pemeriksaan ulang lembar jawaban ujian/rubrik tugas secara objektif disaksikan oleh perwakilan Gugus Penjaminan Mutu jika diperlukan.",
  },
  {
    langkah: 4,
    tahap: "Penerbitan Keputusan & Berita Acara",
    pelaksana: "Ketua Program Studi MKn",
    tenggat: "2 hari kerja",
    detail:
      "Ketua Program Studi menerbitkan Surat Keputusan / Berita Acara Perubahan Nilai resmi. Hasil keputusan banding bersifat final dan mengikat bagi seluruh pihak.",
  },
  {
    langkah: 5,
    tahap: "Pembaruan Nilai Resmi di SIAKAD",
    pelaksana: "Bagian Akademik & IT",
    tenggat: "1 hari kerja",
    detail:
      "Jika sanggahan diterima, nilai yang telah direvisi segera diperbarui pada basis data SIAKAD dan Kartu Hasil Studi (KHS) mahasiswa secara otomatis terbarukan.",
  },
];

// Seksi 4: Dokumen Terkait Asesmen & Penilaian
export const dokumenAsesmen = [
  {
    id: "pedoman-penilaian",
    title: "Buku Pedoman Asesmen & Penilaian Pembelajaran Mahasiswa MKn",
    format: "PDF",
    version: "v2.3 (2024)",
    date: "12 Januari 2024",
    size: "1.8 MB",
    url: "",
  },
  {
    id: "form-banding-nilai",
    title: "Formulir Resmi Pengajuan Banding / Sanggahan Nilai Mahasiswa",
    format: "DOCX",
    version: "v1.4",
    date: "05 Februari 2024",
    size: "245 KB",
    url: "",
  },
  {
    id: "rubrik-legal-drafting",
    title: "Standar Rubrik Penilaian Legal Drafting Akta Notaris & PPAT",
    format: "PDF",
    version: "v1.2",
    date: "18 Agustus 2024",
    size: "950 KB",
    url: "",
  },
  {
    id: "sop-ujian-evaluasi",
    title: "SOP Pelaksanaan Ujian, Ujian Susulan, dan Tata Tertib Akademik",
    format: "PDF",
    version: "v2.0",
    date: "20 Agustus 2024",
    size: "1.2 MB",
    url: "",
  },
];
