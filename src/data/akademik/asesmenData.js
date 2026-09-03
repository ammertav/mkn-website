/**
 * Materi Halaman Asesmen — MKn UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "Materi Halaman Asesmen MKn UNISSULA.docx".
 * Seluruh tabel disalin utuh, termasuk Lampiran A dan Lampiran B.
 *
 * KEDUDUKAN: dokumen ini mengatur penyusunan halaman asesmen yang menjadi
 * BAGIAN WAJIB Rencana Pembelajaran Semester — bukan sistem penilaian yang
 * berdiri sendiri. Karena itu halamannya berada satu rumpun dengan RPS.
 *
 * TIDAK DITAMPILKAN: sembilan dasar hukum (identik dengan dokumen panduan lain).
 * Butir bertanda [Usulan] pada dokumen BELUM ditetapkan Program Studi;
 * penandanya tidak dirender.
 */

export const sorotAsesmen = [
  { angka: "8", label: "Komponen halaman asesmen" },
  { angka: "9", label: "Teknik asesmen" },
  { angka: "4", label: "CPL yang diukur" },
  { angka: "100%", label: "Jumlah bobot butir penilaian" },
];

/** Pasal 1 — kedudukan halaman asesmen. */
export const kedudukan = [
  "Halaman asesmen adalah bagian Rencana Pembelajaran Semester yang memuat rencana pengukuran ketercapaian Sub-CPMK dan CPL pada suatu mata kuliah.",
  "Pada Pedoman Akademik Tahun 2021, setiap RPS telah memuat baris Assessment yang mencantumkan teknik penilaian, yaitu tes tulis, tes lisan, dan presentasi.",
  "Pada Kurikulum OBE Tahun 2026, baris tersebut dikembangkan menjadi halaman asesmen yang menjelaskan keterkaitan butir penilaian dengan Sub-CPMK, teknik, instrumen, rubrik, bobot, dan bukti asesmen.",
  "Penilaian terhadap proses pembelajaran dilakukan dengan instrumen rubrik penilaian yang ditetapkan dalam Rencana Pembelajaran Semester.",
];

/** Pasal 2 — komponen halaman asesmen. */
export const komponenKolom = ["No.", "Komponen", "Uraian"];
export const komponenBaris = [
  ["1", "Identitas mata kuliah", "Kode, nama, bobot sks, semester, dan dosen pengampu"],
  ["2", "Peta CPL–CPMK–Sub-CPMK", "Daftar CPL yang dibebankan beserta CPMK dan Sub-CPMK turunannya"],
  ["3", "Butir penilaian", "Rincian tugas, ujian, dan unjuk kerja yang akan dinilai"],
  ["4", "Teknik dan instrumen", "Teknik penilaian dan instrumen yang digunakan pada setiap butir"],
  ["5", "Rubrik", "Rubrik holistik dan/atau analitik yang menjadi dasar penskoran"],
  ["6", "Bobot", "Persentase setiap butir penilaian terhadap nilai akhir, berjumlah 100%"],
  ["7", "Bukti asesmen", "Jenis bukti yang dihimpun sebagai dasar penelusuran ketercapaian"],
  ["8", "Jadwal", "Minggu pelaksanaan penilaian dan batas waktu umpan balik"],
];

/** Tabel 1 — teknik asesmen, instrumen, dan penggunaannya. */
export const teknikKolom = ["Teknik", "Instrumen", "Penggunaan Utama", "CPL yang Diukur"];
export const teknikBaris = [
  ["Tes tulis", "Soal esai berbasis kasus, kunci penskoran analitis", "UTS dan UAS mata kuliah teori", "CPL 2"],
  ["Tes lisan", "Panduan tanya jawab dan rubrik penilaian lisan", "Responsi, ujian proposal, ujian tesis", "CPL 2, CPL 4"],
  ["Presentasi", "Rubrik presentasi dan diskusi", "Seminar kelas, presentasi portofolio", "CPL 2, CPL 4"],
  ["Portofolio", "Rubrik portofolio dan daftar kelengkapan", "Himpunan minuta akta dan laporan sepanjang semester", "CPL 3"],
  ["Unjuk kerja (praktik)", "Rubrik analitik *legal drafting* akta", "Praktikum Laboratorium Kenotariatan, ujian praktik", "CPL 3"],
  ["Projek", "Rubrik projek dan lembar penilaian kelompok", "Penyusunan paket dokumen hukum secara berkelompok", "CPL 3"],
  ["Observasi", "Rubrik keaktifan dan partisipasi", "Diskusi kelas, simulasi, *roleplay*", "CPL 1, CPL 2"],
  ["Studi kasus", "Rubrik analisis kasus", "*Case method* dan anotasi putusan", "CPL 2, CPL 3"],
  ["Refleksi tertulis", "Panduan refleksi dan rubrik", "Refleksi etika jabatan dan nilai keislaman", "CPL 1"],
];

/** Tabel 2 — teknik asesmen utama untuk setiap CPL. */
export const pemetaanCpl = [
  {
    tanda: "1",
    judul: "CPL 1 — Etika religius, moral, dan tanggung jawab sosial",
    keterangan:
      "Observasi partisipasi, refleksi tertulis, penilaian sikap pada praktik dan magang.",
    rincian: ["Status bukti: langsung dan penunjang"],
  },
  {
    tanda: "2",
    judul: "CPL 2 — Penguasaan ilmu dan teori hukum kenotariatan serta berpikir kritis",
    keterangan: "Tes tulis berbasis kasus, tes lisan, studi kasus, presentasi seminar.",
    rincian: ["Status bukti: langsung"],
  },
  {
    tanda: "3",
    judul: "CPL 3 — Perancangan akta autentik dan etika jabatan Notaris/PPAT",
    keterangan:
      "Portofolio minuta akta, unjuk kerja praktik, ujian praktik *drafting*, audit legal dan etik.",
    rincian: ["Status bukti: langsung"],
  },
  {
    tanda: "4",
    judul: "CPL 4 — Penelitian interdisipliner dan publikasi ilmiah",
    keterangan: "Proposal dan naskah tesis, artikel ilmiah, presentasi seminar hasil.",
    rincian: ["Status bukti: langsung"],
  },
];

export const catatanBukti = [
  "Sertifikat kegiatan ilmiah, sertifikat Kuliah Kerja Lapangan, dan sertifikat keanggotaan organisasi profesi berkedudukan sebagai bukti penunjang dan tidak dapat menjadi satu-satunya bukti ketercapaian CPL.",
];

/** Pasal 5 — keselarasan konstruktif. */
export const keselarasan = [
  "Setiap Sub-CPMK wajib diukur oleh sekurang-kurangnya satu butir penilaian.",
  "Setiap butir penilaian wajib menunjuk kepada Sub-CPMK tertentu; tidak boleh ada butir penilaian yang tidak berpangkal pada Sub-CPMK.",
  "Kata kerja operasional pada Sub-CPMK menentukan teknik penilaian; Sub-CPMK dengan kata kerja menyusun atau merancang wajib dinilai melalui unjuk kerja atau portofolio, bukan semata tes tulis.",
  "Tingkat kognitif penilaian mengikuti trajektori Bloom per semester.",
];

export const bloomKolom = ["Semester", "Tingkat Kognitif Penilaian"];
export const bloomBaris = [
  ["Semester I", "C2 – C4"],
  ["Semester II", "C3 – C5"],
  ["Semester III", "C4 – C6"],
  ["Semester IV", "C5 – C6"],
];

/** Pasal 6 — ketentuan rubrik. */
export const ketentuanRubrik = [
  "Rubrik holistik digunakan untuk menilai ketercapaian CPMK secara menyeluruh dengan delapan tingkatan predikat, yaitu E, D, CD, C, BC, B, AB, dan A.",
  "Rubrik analitik digunakan untuk menilai unjuk kerja yang memiliki beberapa kriteria terpisah, terutama penyusunan minuta akta.",
  "Rubrik analitik *legal drafting* akta berlaku seragam pada seluruh mata kuliah rumpun Teknik Pembuatan Akta dan Laboratorium Akta, dengan lima kriteria sebagaimana Lampiran B.",
  "Rubrik wajib dibagikan kepada mahasiswa pada awal semester bersama kontrak perkuliahan.",
  "Dosen pengampu mata kuliah serumpun melakukan kalibrasi penilaian sekurang-kurangnya sekali dalam satu semester agar penilaian unjuk kerja seragam antardosen.",
];

/** Pasal 7 — bobot dan rekonsiliasi. */
export const bobotRekonsiliasi = [
  "Jumlah bobot seluruh butir penilaian pada halaman asesmen adalah 100%.",
  "Bobot mingguan pada tabel rencana pembelajaran wajib direkonsiliasi dengan bobot komponen penilaian, sehingga jumlah keduanya sama-sama 100%.",
  "Bobot setiap CPMK terhadap nilai akhir dicantumkan secara eksplisit agar ketercapaian CPL dapat dihitung tanpa penafsiran tambahan.",
];

/** Pasal 8 — ketentuan penulisan. */
export const ketentuanPenulisan = [
  "Halaman asesmen ditulis pada Rencana Pembelajaran Semester dengan format baku Form/RPS/SA-LP3M/SPMI.",
  "Halaman asesmen diserahkan bersama Rencana Pembelajaran Semester paling lambat 14 hari sebelum perkuliahan dimulai.",
  "Halaman asesmen ditelaah Koordinator Mata Kuliah dan disetujui Ketua Program Studi.",
  "Salinan digital halaman asesmen diunggah ke LMS SINAU UNISSULA sebagai rujukan mahasiswa.",
];

/** Lampiran A — contoh halaman asesmen mata kuliah. */
export const contohKeterangan =
  "Contoh diisi dengan data mata kuliah Teknik Pembuatan Akta Khusus (TPA III), HN268008013, 3 sks (teori 1 / praktik 2), Semester III, CPL 3 sebagai capaian utama dan CPL 1 sebagai capaian penunjang.";

export const contohKolom = [
  "No.",
  "Butir Penilaian",
  "Bobot (%)",
  "Sub-CPMK yang Diukur",
  "Teknik",
  "Instrumen",
  "Bukti Asesmen",
];
export const contohBaris = [
  ["1", "Partisipasi dan diskusi kelas", "10", "Sub-CPMK 1.1–1.3", "Observasi", "Rubrik keaktifan", "Catatan observasi"],
  ["2", "Tugas terstruktur dan portofolio legal drafting", "25", "Sub-CPMK 2.1–3.3", "Portofolio", "Rubrik analitik drafting", "Minuta akta"],
  ["3", "Unjuk kerja praktik laboratorium", "20", "Sub-CPMK 2.2, 2.4, 3.1", "Unjuk kerja", "Rubrik unjuk kerja", "Lembar penilaian praktik"],
  ["4", "Ujian Tengah Semester", "20", "Sub-CPMK 1.1–2.3", "Tes tulis dan ujian praktik", "Kunci penskoran dan rubrik", "Berkas ujian"],
  ["5", "Ujian Akhir Semester", "25", "Sub-CPMK 2.4–4.1", "Tes tulis dan ujian praktik", "Kunci penskoran dan rubrik", "Berkas ujian dan portofolio"],
  ["", "Jumlah", "100", "", "", "", ""],
];

export const contohCatatan =
  "Bobot CPMK terhadap nilai akhir: CPMK 1 = 18%; CPMK 2 = 38%; CPMK 3 = 30%; CPMK 4 = 14%.";

/** Lampiran B — rubrik analitik penilaian legal drafting akta. */
export const rubrikKolom = [
  "Kriteria (bobot)",
  "Sangat Baik (85–100)",
  "Baik (70–84)",
  "Cukup (55–69)",
  "Kurang (< 55)",
];
export const rubrikBaris = [
  [
    "Ketepatan dasar hukum dan kewenangan (20%)",
    "Dasar hukum tepat, mutakhir, kewenangan akurat",
    "Dasar hukum tepat, kurang mutakhir pada satu bagian",
    "Sebagian tepat; batas kewenangan belum diperhatikan",
    "Dasar hukum keliru atau kewenangan dilampaui",
  ],
  [
    "Kelengkapan anatomi akta (20%)",
    "Awal, komparisi, premisse, isi, dan akhir akta lengkap dan berurutan",
    "Seluruh bagian ada, kekurangan minor pada satu unsur",
    "Ada bagian hilang atau tidak berurutan",
    "Anatomi akta tidak terbentuk",
  ],
  [
    "Ketepatan klausul substantif (25%)",
    "Klausul esensial lengkap, presisi, sesuai kehendak para pihak",
    "Klausul lengkap, rumusan masih dapat dipertajam",
    "Beberapa klausul tidak ada atau ambigu",
    "Klausul esensial tidak ada atau bertentangan dengan hukum",
  ],
  [
    "Bahasa hukum dan teknik penulisan (20%)",
    "Bahasa lugas; renvoi, angka-huruf, dan penomoran benar seluruhnya",
    "Bahasa baik dengan satu sampai dua kesalahan teknik",
    "Bahasa berbelit; beberapa kesalahan teknik",
    "Bahasa tidak dapat dipahami",
  ],
  [
    "Kepatuhan etik dan mitigasi risiko (15%)",
    "Bebas konflik kepentingan, memuat klausul mitigatif",
    "Patuh secara etik, mitigasi belum menyeluruh",
    "Terdapat potensi pelanggaran etik yang belum disadari",
    "Melanggar kode etik atau memuat klausul yang berpotensi disalahgunakan",
  ],
];
