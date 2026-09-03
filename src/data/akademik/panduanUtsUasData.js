/**
 * Panduan Ujian Tengah Semester dan Ujian Akhir Semester — MKn UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "Panduan Ujian UTS_UAS MKn UNISSULA.docx".
 * Seluruh klausul disalin verbatim, termasuk penanda sumber ketentuannya.
 *
 * DWIBAHASA: teks ditulis sebagai string biasa, bukan objek { id, en }.
 * pick() menerima keduanya, jadi berkas ini tetap berfungsi dan bisa
 * dimigrasikan per-butir saat versi Inggris disiapkan.
 * Lihat docs/panduan-dwibahasa.md.
 *
 * PERHATIAN: butir bertanda [Usulan] BELUM diatur dalam Pedoman Akademik dan
 * memerlukan penetapan Program Studi sebelum diberlakukan.
 */

export const metaDokumen = [
  {
    label: "Nama Dokumen",
    nilai:
      "Panduan Ujian Tengah Semester (UTS) dan Ujian Akhir Semester (UAS)",
  },
  { label: "Program Studi", nilai: "Magister Kenotariatan (M.Kn.), Fakultas Hukum UNISSULA" },
  { label: "Basis Kurikulum", nilai: "Kurikulum OBE Tahun 2026 (41 sks, 4 semester)" },
  {
    label: "Dasar Penyusunan",
    nilai:
      "Buku Pedoman Akademik MKN Tahun 2021, Bab V tentang Perkuliahan, Ujian, dan Penilaian",
  },
  {
    label: "Moda Pelaksanaan",
    nilai: "Luring, daring, dan ujian praktik Laboratorium Kenotariatan",
  },
  { label: "Revisi / Tanggal", nilai: "01 / ............................" },
];

export const ketentuanUmum = [
  {
    teks:
      "Ujian Tengah Semester (UTS) adalah evaluasi sumatif yang diselenggarakan pada pertengahan semester untuk mengukur ketercapaian Sub-CPMK paruh pertama.",
    sumber: "Kurikulum OBE 2026",
  },
  {
    teks:
      "Ujian Akhir Semester (UAS) adalah evaluasi sumatif yang diselenggarakan pada akhir semester untuk mengukur ketercapaian Sub-CPMK paruh kedua dan capaian mata kuliah secara keseluruhan.",
    sumber: "Kurikulum OBE 2026",
  },
  {
    teks:
      "Setiap akhir semester diadakan evaluasi terhadap perkembangan studi mahasiswa melalui penilaian atas ujian tertulis, pembuatan makalah, tugas pembuatan akta, maupun tugas lain.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Ujian praktik adalah ujian berbentuk unjuk kerja penyusunan minuta akta yang diselenggarakan di Laboratorium Kenotariatan.",
    sumber: "Usulan",
  },
];

export const dasarPenyusunan = [
  { teks: "Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;", sumber: "Peraturan" },
  { teks: "Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi;", sumber: "Peraturan" },
  {
    teks:
      "Undang-Undang Nomor 2 Tahun 2014 tentang Perubahan atas Undang-Undang Nomor 30 Tahun 2004 tentang Jabatan Notaris;",
    sumber: "Peraturan",
  },
  {
    teks: "Peraturan Presiden Nomor 8 Tahun 2012 tentang Kerangka Kualifikasi Nasional Indonesia;",
    sumber: "Peraturan",
  },
  {
    teks:
      "Peraturan Menteri Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi;",
    sumber: "Peraturan",
  },
  {
    teks:
      "Keputusan Rektor UNISSULA Nomor 8415/D.1/SA/IX/2025 tentang Pedoman Penyusunan Kurikulum Berbasis *Outcome-based Education* (OBE) Program Studi;",
    sumber: "Peraturan",
  },
  {
    teks:
      "Buku Pedoman Akademik Program Magister (S2) Kenotariatan Fakultas Hukum UNISSULA Tahun 2021;",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Dokumen Kurikulum *Outcome Based Education* Program Studi Magister Kenotariatan UNISSULA Tahun 2026;",
    sumber: "Kurikulum OBE 2026",
  },
  {
    teks:
      "*Standards and Guidelines for Quality Assurance in the European Higher Education Area* (ESG) sebagai rujukan asesmen ACQUIN.",
    sumber: "Peraturan",
  },
];

export const waktuKolom = ["Jenis Ujian", "Waktu", "Bentuk", "Fungsi"];
export const waktuBaris = [
  [
    "Ujian Tengah Semester",
    "Minggu ke-8 perkuliahan",
    "Tes tertulis berbasis kasus dan/atau ujian praktik drafting",
    "Mengukur Sub-CPMK paruh pertama",
  ],
  [
    "Ujian Akhir Semester",
    "Minggu ke-16 perkuliahan",
    "Tes tertulis analitis, ujian praktik komprehensif, dan penilaian portofolio",
    "Mengukur Sub-CPMK paruh kedua dan capaian mata kuliah",
  ],
];

export const waktuButir = [
  {
    teks:
      "Jadwal ujian ditetapkan dalam kalender akademik dan diumumkan kepada mahasiswa sekurang-kurangnya 14 hari sebelum pelaksanaan.",
    sumber: "Usulan",
  },
  {
    teks:
      "Setiap mata kuliah diberikan sekurang-kurangnya dalam 12 kali sesi sebelum Ujian Akhir Semester dapat diselenggarakan.",
    sumber: "Pedoman 2021",
  },
];

export const persyaratanPeserta = [
  {
    teks:
      "Ujian akhir semester hanya dapat diikuti oleh peserta yang telah menghadiri sekurang-kurangnya 75% dari kegiatan perkuliahan terjadwal.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Peserta ujian wajib membawa Kartu Ujian dan Kartu Tanda Mahasiswa yang masih berlaku untuk semester yang bersangkutan.",
    sumber: "Pedoman 2021",
  },
  {
    teks: "Peserta ujian yang tidak membawa identitas apapun tidak diperkenankan mengikuti ujian.",
    sumber: "Pedoman 2021",
  },
  {
    teks: "Peserta ujian telah menyelesaikan kewajiban administrasi dan keuangan pada semester berjalan.",
    sumber: "Usulan",
  },
];

export const penyusunanSoal = [
  {
    teks:
      "Soal ujian disusun oleh dosen pengampu dengan mengacu pada kisi-kisi yang diturunkan dari Sub-CPMK sebagaimana tercantum dalam Rencana Pembelajaran Semester.",
    sumber: "Usulan",
  },
  {
    teks:
      "Soal ujian mata kuliah rumpun Teknik Pembuatan Akta dan Laboratorium Akta wajib memuat komponen unjuk kerja penyusunan minuta akta.",
    sumber: "Usulan",
  },
  {
    teks:
      "Soal dan kunci penskoran diserahkan kepada Koordinator Mata Kuliah untuk ditelaah sekurang-kurangnya 7 hari sebelum pelaksanaan ujian.",
    sumber: "Usulan",
  },
  {
    teks:
      "Ujian praktik dinilai dengan rubrik analitik *legal drafting* akta yang berlaku seragam pada seluruh mata kuliah rumpun Teknik Pembuatan Akta.",
    sumber: "Usulan",
  },
  {
    teks: "Bobot UTS dan UAS terhadap nilai akhir mengikuti Panduan Evaluasi Pembelajaran.",
    sumber: "Kurikulum OBE 2026",
  },
];

export const luringSebelum = [
  { teks: "Peserta ujian harus berada di kampus sekurang-kurangnya 15 menit sebelum ujian dimulai.", sumber: "Pedoman 2021" },
  { teks: "Sepuluh menit sebelum ujian dimulai, peserta ujian sudah berada di ruang ujian.", sumber: "Pedoman 2021" },
  { teks: "Peserta ujian wajib melengkapi diri dengan alat tulis yang diperlukan dan yang diperkenankan.", sumber: "Pedoman 2021" },
  { teks: "Peserta ujian tidak diperkenankan menggeser kursi atau meja yang telah diatur.", sumber: "Pedoman 2021" },
  { teks: "Peserta ujian yang datang terlambat tidak diberikan tambahan waktu penyelesaian ujian.", sumber: "Pedoman 2021" },
  {
    teks: "Peserta ujian yang datang terlambat lebih dari 30 menit setelah ujian dimulai tidak diperkenankan mengikuti ujian.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Peserta wajib berpakaian sopan dan bersepatu serta tidak diperkenankan memakai sandal. Pengawas wajib mengeluarkan peserta yang tidak mematuhi ketentuan ini.",
    sumber: "Pedoman 2021",
  },
];

export const luringSelama = [
  { teks: "Peserta menandatangani daftar hadir ujian dan memperlihatkan Kartu Ujian.", sumber: "Pedoman 2021" },
  {
    teks:
      "Peserta dapat mengajukan pertanyaan kepada pengawas hanya mengenai hal yang menyangkut redaksional dan teks soal, serta tidak mengganggu kelancaran ujian.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Peserta yang telah menyelesaikan pekerjaannya memberitahukan kepada pengawas dengan mengangkat tangan dan menyerahkan lembar jawaban kepada pengawas.",
    sumber: "Pedoman 2021",
  },
  {
    teks: "Peserta tidak diperkenankan menggunakan alat bantu, kecuali diperbolehkan oleh dosen pengampu mata kuliah.",
    sumber: "Pedoman 2021",
  },
];

export const luringLarangan = [
  {
    teks:
      "saling berhubungan secara lisan, tulisan, maupun kode atau tanda lain dengan sesama peserta maupun pihak lain di luar ruang ujian;",
    sumber: "Pedoman 2021",
  },
  { teks: "pinjam meminjam alat yang diperlukan selama ujian;", sumber: "Pedoman 2021" },
  { teks: "mencontoh, baik dari catatan sendiri, milik orang lain, maupun pekerjaan orang lain;", sumber: "Pedoman 2021" },
  {
    teks:
      "meninggalkan ruang ujian tanpa izin pengawas — peserta yang meninggalkan ruang tanpa izin dianggap telah menyelesaikan ujiannya;",
    sumber: "Pedoman 2021",
  },
  { teks: "mengaktifkan telepon seluler dan alat komunikasi lainnya selama ujian berlangsung.", sumber: "Pedoman 2021" },
];

export const tataTertibDaring = [
  {
    teks: "Peserta memperoleh pemberitahuan jadwal ujian semester untuk setiap mata kuliah sebelum ujian berlangsung.",
    sumber: "Pedoman 2021",
  },
  { teks: "Ujian semester secara daring diakses melalui laman sim.unissula.ac.id.", sumber: "Pedoman 2021" },
  { teks: "Soal ujian setiap mata kuliah diunduh sesuai jadwal ujian yang telah ditetapkan.", sumber: "Pedoman 2021" },
  {
    teks:
      "Jawaban ujian dikumpulkan melalui laman sim.unissula.ac.id dengan menggunakan akun masing-masing sesuai mata kuliah yang diujikan.",
    sumber: "Pedoman 2021",
  },
  { teks: "Jawaban ujian dibuat dalam format PDF.", sumber: "Pedoman 2021" },
  {
    teks:
      "Peserta wajib menyalakan kamera selama ujian daring dengan pengawasan sinkron apabila ditentukan demikian oleh dosen pengampu.",
    sumber: "Usulan",
  },
  {
    teks:
      "Keterlambatan pengunggahan jawaban melebihi batas waktu yang ditetapkan mengakibatkan jawaban tidak dinilai, kecuali terdapat gangguan sistem yang dibuktikan dengan tangkapan layar dan dilaporkan pada hari yang sama.",
    sumber: "Usulan",
  },
];

export const tataTertibPraktik = [
  {
    teks:
      "Ujian praktik diselenggarakan di Laboratorium Kenotariatan dengan menggunakan komputer, printer khusus akta, dan/atau mesin ketik manual sesuai ketentuan dosen pengampu.",
    sumber: "Pedoman 2021",
  },
  { teks: "Peserta wajib berpakaian rapi dan sopan sebagaimana ketentuan ujian luring.", sumber: "Pedoman 2021" },
  {
    teks:
      "Peserta hanya diperkenankan membawa peraturan perundang-undangan tercetak apabila dinyatakan sebagai ujian bersifat terbuka (*open regulation*) oleh dosen pengampu.",
    sumber: "Usulan",
  },
  {
    teks: "Peserta dilarang membawa contoh minuta akta jadi, baik cetak maupun digital, ke dalam ruang ujian praktik.",
    sumber: "Usulan",
  },
  {
    teks:
      "Hasil ujian praktik diserahkan dalam bentuk cetak dan berkas digital, serta ditandatangani peserta pada lembar pernyataan keaslian karya.",
    sumber: "Usulan",
  },
];

export const pengawasUjian = [
  {
    teks: "Pengawas ujian ditetapkan oleh Program Studi dan hadir sekurang-kurangnya 15 menit sebelum ujian dimulai.",
    sumber: "Usulan",
  },
  {
    teks:
      "Pengawas memeriksa kelengkapan identitas peserta, mengedarkan daftar hadir, membagikan dan mengumpulkan berkas ujian, serta menyusun Berita Acara Pelaksanaan Ujian.",
    sumber: "Usulan",
  },
  {
    teks:
      "Pengawas berwenang menegur, mencatat, dan mengeluarkan peserta yang melanggar tata tertib serta mencatat pelanggaran tersebut dalam Berita Acara.",
    sumber: "Usulan",
  },
  { teks: "Pengawas tidak diperkenankan menjawab pertanyaan yang menyangkut substansi soal.", sumber: "Usulan" },
];

export const sanksiKolom = ["Tingkat", "Sanksi", "Kualifikasi Pelanggaran"];
export const sanksiBaris = [
  [
    "1",
    "Mahasiswa diberi nilai E dan dinyatakan tidak lulus untuk mata kuliah yang bersangkutan.",
    "Pelanggaran tata tertib ujian yang bersifat administratif atau pelanggaran pertama.",
  ],
  [
    "2",
    "Mahasiswa diberi nilai E dan dinyatakan tidak lulus untuk seluruh mata kuliah yang diambil pada semester tersebut.",
    "Kecurangan yang terbukti selama ujian berlangsung.",
  ],
  [
    "3",
    "Mahasiswa diberi nilai E untuk seluruh mata kuliah pada semester tersebut dan dikenakan skorsing selama satu semester berikutnya.",
    "Pengulangan kecurangan atau kecurangan yang melibatkan pihak lain (sebagai sanksi terakhir).",
  ],
];

export const sanksiButir = [
  {
    teks:
      "Peserta ujian yang kedapatan melakukan kecurangan selama ujian berlangsung didiskualifikasi dari ujian yang diikutinya.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Bertindak sebagai pengganti peserta ujian (joki) dikenakan sanksi skorsing selama-lamanya dua semester sesuai ketentuan disiplin mahasiswa UNISSULA.",
    sumber: "Pedoman 2021",
  },
];

export const ujianSusulan = [
  {
    teks:
      "Ujian susulan hanya diberikan kepada peserta yang berhalangan karena sakit dengan surat keterangan dokter, tugas dari institusi, atau musibah keluarga inti, dan diajukan paling lambat 7 hari setelah tanggal ujian.",
    sumber: "Usulan",
  },
  { teks: "Nilai ujian diumumkan secara terbuka melalui Sistem Informasi Akademik.", sumber: "Pedoman 2021" },
  {
    teks:
      "Mahasiswa dapat mengajukan keberatan atas hasil penilaian kepada dosen pengampu melalui Koordinator Mata Kuliah paling lambat 7 hari setelah nilai diumumkan, dengan menyertakan alasan dan bukti pendukung.",
    sumber: "Usulan",
  },
  {
    teks:
      "Dosen pengampu menyampaikan hasil penelaahan keberatan paling lambat 7 hari setelah keberatan diterima; hasil penelaahan bersifat final.",
    sumber: "Usulan",
  },
];

export const lampiranA = {
  kode: "Lampiran A",
  judul: "Format Berita Acara Pelaksanaan Ujian",
  isian: [
    "Mata Kuliah / Kode",
    "Semester / Tahun Akademik",
    "Jenis Ujian (UTS/UAS)",
    "Hari, Tanggal / Waktu",
    "Ruang / Moda",
    "Jumlah Peserta Terdaftar",
    "Jumlah Peserta Hadir",
    "Nama Pengawas",
  ],
  catatan: "Disertai kolom Catatan Kejadian Selama Ujian.",
};

export const lampiranBKolom = [
  "No.",
  "Sub-CPMK yang Diukur",
  "Indikator",
  "Bentuk Soal",
  "Nomor Soal",
  "Bobot (%)",
];

/* ══════════════════════════════════════════════════════════════════════════
   RINGKASAN UNTUK HALAMAN WEB
   Pokok-pokok yang paling dibutuhkan mahasiswa. Dokumen lengkap di atas tetap
   menjadi rujukan resmi dan tersedia bila sewaktu-waktu ingin ditampilkan utuh.
   ══════════════════════════════════════════════════════════════════════════ */

export const sorotUtsUas = [
  { angka: "Ke-8", label: "Minggu pelaksanaan UTS" },
  { angka: "Ke-16", label: "Minggu pelaksanaan UAS" },
  { angka: "75%", label: "Kehadiran minimum untuk ikut UAS" },
  { angka: "12", label: "Sesi minimum sebelum UAS" },
];

export const jenisUjian = [
  {
    tanda: "UTS",
    judul: "Ujian Tengah Semester",
    keterangan: "Tes tertulis berbasis kasus dan/atau ujian praktik drafting.",
    rincian: ["Minggu ke-8 perkuliahan", "Mengukur Sub-CPMK paruh pertama"],
  },
  {
    tanda: "UAS",
    judul: "Ujian Akhir Semester",
    keterangan:
      "Tes tertulis analitis, ujian praktik komprehensif, dan penilaian portofolio.",
    rincian: ["Minggu ke-16 perkuliahan", "Mengukur Sub-CPMK paruh kedua dan capaian mata kuliah"],
  },
];

export const syaratPeserta = [
  "Menghadiri sekurang-kurangnya 75% kegiatan perkuliahan terjadwal — syarat khusus Ujian Akhir Semester",
  "Membawa Kartu Ujian dan Kartu Tanda Mahasiswa yang masih berlaku",
  "Menyelesaikan kewajiban administrasi dan keuangan semester berjalan",
  "Tanpa identitas, peserta tidak diperkenankan mengikuti ujian",
];

export const modaPelaksanaan = [
  {
    tanda: "1",
    judul: "Luring",
    rincian: [
      "Hadir di kampus 15 menit sebelum ujian",
      "Terlambat lebih dari 30 menit tidak boleh ikut",
      "Berpakaian sopan dan bersepatu",
    ],
  },
  {
    tanda: "2",
    judul: "Daring",
    rincian: [
      "Diakses melalui sim.unissula.ac.id",
      "Jawaban dikumpulkan dalam format PDF",
      "Kamera menyala bila pengawasan sinkron ditentukan",
    ],
  },
  {
    tanda: "3",
    judul: "Praktik Laboratorium",
    rincian: [
      "Unjuk kerja penyusunan minuta akta",
      "Peraturan tercetak hanya bila ujian bersifat terbuka",
      "Dilarang membawa contoh minuta akta jadi",
    ],
  },
];

export const wajibDipatuhi = [
  "Menandatangani daftar hadir dan memperlihatkan Kartu Ujian",
  "Bertanya kepada pengawas hanya soal redaksional teks soal",
  "Mengangkat tangan saat selesai dan menyerahkan lembar jawaban",
  "Membawa alat tulis yang diperlukan dan diperkenankan",
];

export const dilarangSaatUjian = [
  "Berhubungan dengan peserta lain secara lisan, tulisan, atau kode",
  "Pinjam meminjam alat selama ujian",
  "Mencontoh dari catatan sendiri maupun pekerjaan orang lain",
  "Meninggalkan ruang tanpa izin dianggap telah selesai ujian",
  "Mengaktifkan telepon seluler dan alat komunikasi lain",
];

export const sanksiRingkas = [
  {
    sanksi: "Nilai E dan tidak lulus untuk mata kuliah yang bersangkutan",
    pelanggaran: "Pelanggaran tata tertib yang bersifat administratif atau pelanggaran pertama.",
  },
  {
    sanksi: "Nilai E dan tidak lulus untuk seluruh mata kuliah pada semester tersebut",
    pelanggaran: "Kecurangan yang terbukti selama ujian berlangsung.",
  },
  {
    sanksi: "Nilai E seluruh mata kuliah dan skorsing satu semester berikutnya",
    pelanggaran:
      "Pengulangan kecurangan atau kecurangan yang melibatkan pihak lain. Bertindak sebagai joki dikenakan skorsing selama-lamanya dua semester.",
  },
];

export const nilaiKeberatan = [
  {
    tanda: "A",
    judul: "Ujian Susulan",
    keterangan:
      "Hanya untuk yang berhalangan karena sakit dengan surat dokter, tugas institusi, atau musibah keluarga inti.",
    rincian: ["Diajukan paling lambat 7 hari setelah tanggal ujian"],
  },
  {
    tanda: "B",
    judul: "Pengumuman Nilai",
    keterangan: "Nilai diumumkan secara terbuka melalui Sistem Informasi Akademik.",
  },
  {
    tanda: "C",
    judul: "Keberatan Nilai",
    keterangan:
      "Diajukan kepada dosen pengampu melalui Koordinator Mata Kuliah dengan alasan dan bukti pendukung.",
    rincian: [
      "Paling lambat 7 hari setelah nilai diumumkan",
      "Hasil penelaahan disampaikan dalam 7 hari dan bersifat final",
    ],
  },
];
