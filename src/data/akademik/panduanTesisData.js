/**
 * Panduan Ujian Tesis (Pra Proposal, Proposal, dan Tesis) — MKn UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "Panduan Ujian Tesis MKn UNISSULA.docx".
 * Seluruh klausul disalin verbatim, termasuk penanda sumber ketentuannya.
 *
 * DWIBAHASA: teks ditulis sebagai string biasa; pick() menerima bentuk ini dan
 * bisa dimigrasikan per-butir saat versi Inggris disiapkan.
 *
 * PERHATIAN: butir bertanda [Usulan] BELUM diatur dalam Pedoman Akademik dan
 * memerlukan penetapan Program Studi sebelum diberlakukan.
 */

export const metaDokumen = [
  {
    label: "Nama Dokumen",
    nilai: "Panduan Ujian Tesis (Pra Proposal, Proposal, dan Tesis)",
  },
  { label: "Program Studi", nilai: "Magister Kenotariatan (M.Kn.), Fakultas Hukum UNISSULA" },
  { label: "Bobot Tesis", nilai: "4 sks (HN268012001), ditempuh pada Semester IV" },
  {
    label: "CPL yang Ditopang",
    nilai:
      "CPL 2 (penguasaan ilmu dan berpikir kritis) dan CPL 4 (penelitian interdisipliner dan publikasi ilmiah)",
  },
  {
    label: "Dasar Penyusunan",
    nilai:
      "Buku Pedoman Akademik MKN Tahun 2021, Bab V tentang Perkuliahan, Ujian, dan Penilaian serta Penulisan Tesis",
  },
  { label: "Revisi / Tanggal", nilai: "01 / ............................" },
];

export const ketentuanUmum = [
  {
    teks:
      "Ujian dalam rangka penyelesaian Tesis meliputi Ujian Pra Proposal, Ujian Usulan Proposal Tesis, dan Ujian Tesis.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Kegiatan penyelesaian Tesis dihargai 4 (empat) sks sejak perencanaan, penyusunan, sampai dengan ujiannya, dengan lama penyelesaian dua semester.",
    sumber: "Pedoman 2021",
  },
  { teks: "Seluruh pembimbing Tesis bergelar Doktor.", sumber: "Pedoman 2021" },
  {
    teks:
      "Format penyusunan usulan penelitian dan penulisan Tesis mengacu pada Pedoman Penulisan Tesis yang ditetapkan Program Studi.",
    sumber: "Pedoman 2021",
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

export const tahapanKolom = ["No.", "Tahap", "Uraian", "Luaran"];
export const tahapanBaris = [
  [
    "1",
    "Pengajuan Judul",
    "Mahasiswa yang telah menyelesaikan kuliah Semester II mengajukan judul usulan Proposal Tesis kepada Ketua Program Studi c.q. Sekretaris Program Studi",
    "Judul disetujui Tim Penjamin Mutu Tesis",
  ],
  [
    "2",
    "Penetapan Pembimbing",
    "Sekretaris Bidang Akademik menetapkan dosen pembimbing dan dimintakan persetujuan Ketua Program",
    "Surat penetapan pembimbing",
  ],
  [
    "3",
    "Ujian Pra Proposal",
    "Ujian berupa bimbingan atas kerangka berpikir proposal dan tesis",
    "Berita acara dan catatan perbaikan",
  ],
  [
    "4",
    "Penyusunan Proposal",
    "Mahasiswa menyusun usulan penelitian di bawah bimbingan dosen pembimbing",
    "Draf proposal disetujui pembimbing",
  ],
  [
    "5",
    "Ujian Usulan Proposal",
    "Diseminarkan di hadapan sekurang-kurangnya 3 orang penguji",
    "Berita acara dan nilai proposal",
  ],
  [
    "6",
    "Pelaksanaan Penelitian",
    "Mahasiswa melakukan penelitian setelah usulan disetujui penguji dan mengurus perizinan penelitian",
    "Data penelitian",
  ],
  ["7", "Penulisan Tesis", "Penulisan di bawah bimbingan dosen pembimbing", "Naskah Tesis"],
  [
    "8",
    "Ujian Tesis",
    "Seminar terbuka di hadapan sekurang-kurangnya 3 orang penguji",
    "Berita acara dan nilai Tesis",
  ],
];

/* ── 4. Ujian Pra Proposal ─────────────────────────────────────────────── */
export const praProposal = [
  {
    teks:
      "Ujian Pra Proposal dapat dilaksanakan setelah judul penelitian yang diajukan mahasiswa disetujui oleh Sekretaris Program Studi dan diketahui oleh Ketua Program Studi.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Ujian Pra Proposal berupa bimbingan untuk membangun kerangka berpikir proposal maupun tesis yang akan ditulis, dengan tujuan memudahkan mahasiswa menyusun tesis.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Isi pra proposal memuat judul, latar belakang singkat yang menjelaskan ketidaksesuaian antara *das sein* dan *das sollen*, rumusan masalah, kerangka teori, dan metode pendekatan yang akan digunakan.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Setelah Ujian Pra Proposal dilaksanakan, Sekretaris Program Studi menunjuk pembimbing yang akan membantu mahasiswa menulis Proposal Tesis dan Tesis.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Mahasiswa yang telah memiliki ijazah Spesialis Kenotariatan (Sp.N.) atau berasal dari Notaris dan telah menyelesaikan kuliah Semester I dapat mengajukan judul usulan Proposal Tesis.",
    sumber: "Pedoman 2021",
  },
];

/* ── 5. Ujian Usulan Proposal Tesis ────────────────────────────────────── */
export const usulanProposal = [
  {
    teks:
      "Ujian Usulan Proposal Tesis hanya dapat dilakukan setelah usulan disetujui oleh Pembimbing Tesis dan diketahui oleh Ketua Program Studi, mengenai materi Ilmu Kenotariatan.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Pelaksanaan ujian dilakukan dengan cara diseminarkan, dihadiri sekurang-kurangnya 3 orang penguji termasuk pembimbing Tesis, terdiri atas 2 orang bukan pembimbing sebagai Ketua Tim Penguji dan anggota, serta 1 orang pembimbing sebagai anggota tim penguji.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Penilaian terhadap usulan Proposal Tesis mencakup kesatuan konstruksi pemikiran yang meliputi latar belakang masalah, rumusan masalah, tujuan penulisan, kerangka konseptual, kerangka teori, metode penelitian, sistematika penulisan, dan kepustakaan.",
    sumber: "Pedoman 2021",
  },
  {
    teks: "Penilaian juga mencakup penguasaan materi Proposal Tesis yang berkaitan dengan Ilmu Kenotariatan.",
    sumber: "Pedoman 2021",
  },
  { teks: "Mahasiswa dinyatakan lulus apabila memperoleh nilai sekurang-kurangnya B.", sumber: "Pedoman 2021" },
];

/* ── 6. Ujian Tesis ────────────────────────────────────────────────────── */
export const tesisPersyaratan = [
  { teks: "Seluruh mata kuliah yang diambil oleh peserta telah lulus;", sumber: "Pedoman 2021" },
  {
    teks: "Penulisan Tesis telah disetujui oleh pembimbing Tesis dan diketahui Ketua Program Studi;",
    sumber: "Pedoman 2021",
  },
  { teks: "Telah menyerahkan salinan sertifikat kegiatan ilmiah dan Kuliah Kerja Lapangan;", sumber: "Pedoman 2021" },
  {
    teks: "Telah menyerahkan salinan Sertifikat TOEFL LIKE dengan nilai sekurang-kurangnya 525;",
    sumber: "Pedoman 2021",
  },
  { teks: "Telah menyerahkan salinan publikasi karya ilmiah pada jurnal cetak maupun daring;", sumber: "Pedoman 2021" },
  {
    teks:
      "Telah mendapatkan rekomendasi dari Lembaga Penjamin Mutu Tesis tentang kelayakan persyaratan tesis;",
    sumber: "Pedoman 2021",
  },
  { teks: "Telah menyelesaikan kewajiban administrasi dan keuangan;", sumber: "Pedoman 2021" },
  {
    teks:
      "Telah menyerahkan salinan Sertifikat Magang sebagaimana diatur dalam Panduan Magang dan Ujian Magang.",
    sumber: "Pedoman 2021",
  },
];

export const tesisTimPenguji = [
  {
    teks:
      "Pelaksanaan Ujian Tesis dilakukan dengan cara seminar terbuka yang dihadiri sekurang-kurangnya 3 orang penguji.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Tim penguji terdiri atas 1 (satu) orang Ketua Penguji yang berasal dari luar komisi pembimbing atau penguji eksternal yang sesuai kompetensi dan memenuhi syarat jenjang kepangkatan akademik, serta 2 (dua) orang anggota yang terdiri atas Pembimbing dan Penguji.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Tim penguji disyaratkan memiliki jabatan fungsional sekurang-kurangnya Lektor dan bergelar Doktor (S3) Ilmu Hukum.",
    sumber: "Pedoman 2021",
  },
];

export const penilaianKolom = ["No.", "Komponen Penilaian", "Bobot", "Aspek yang Dinilai"];
export const penilaianBaris = [
  [
    "1",
    "Konsistensi konstruksi pemikiran dari pendahuluan sampai dengan penutup",
    "25%",
    "Keterhubungan latar belakang, rumusan masalah, pembahasan, dan simpulan",
  ],
  ["2", "Orisinalitas hasil penelitian", "20%", "Kebaruan dan kontribusi terhadap ilmu kenotariatan"],
  ["3", "Metode penulisan", "15%", "Ketepatan metode penelitian hukum dan teknik penulisan ilmiah"],
  ["4", "Kajian pustaka", "15%", "Kemutakhiran, relevansi, dan kedalaman rujukan"],
  ["5", "Penguasaan materi", "25%", "Ketepatan dan kedalaman jawaban atas pertanyaan penguji"],
  ["", "Jumlah", "100%", ""],
];

export const penilaianButir = [
  {
    teks:
      "Lima komponen penilaian tersebut ditetapkan dalam Pedoman Akademik; pembobotan pada kolom ketiga merupakan usulan agar penilaian antarpenguji seragam.",
    sumber: "Usulan",
  },
  {
    teks: "Mahasiswa dinyatakan lulus Ujian Tesis apabila memperoleh nilai sekurang-kurangnya B.",
    sumber: "Pedoman 2021",
  },
];

/* ── 7. Tata Tertib Ujian ──────────────────────────────────────────────── */
export const tesisLuring = [
  { teks: "Peserta hadir 15 menit sebelum ujian dimulai.", sumber: "Pedoman 2021" },
  {
    teks:
      "Peserta pria mengenakan baju putih, berdasi, celana hitam, dan jas almamater; peserta wanita mengenakan baju putih, rok hitam, jas almamater, dan kerudung merah.",
    sumber: "Pedoman 2021",
  },
  {
    teks: "Peserta menyiapkan naskah Tesis dan bahan presentasi dalam jumlah yang cukup bagi seluruh penguji.",
    sumber: "Usulan",
  },
];

export const tesisDaring = [
  { teks: "Peserta memperoleh jadwal ujian tesis 3 (tiga) hari sebelum ujian dilaksanakan.", sumber: "Pedoman 2021" },
  {
    teks:
      "Pelaksanaan ujian melalui *zoom meeting*; peserta memperoleh tautan atau ID *zoom meeting* 30 menit sebelum ujian dilaksanakan.",
    sumber: "Pedoman 2021",
  },
  { teks: "Peserta mengenakan pakaian sebagaimana ketentuan ujian luring.", sumber: "Pedoman 2021" },
  { teks: "Peserta menyiapkan bahan presentasi untuk ujian tesis.", sumber: "Pedoman 2021" },
  {
    teks: "Peserta memastikan perangkat komputer, laptop, atau ponsel tersambung dengan internet.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Saat bergabung, peserta menggunakan nama lengkap, wajib menyalakan video, menjaga agar suara dari luar tidak masuk ke ruang *zoom*, serta menjaga sopan santun.",
    sumber: "Pedoman 2021",
  },
];

/* ── 8. Perbaikan, Yudisium, dan Predikat ──────────────────────────────── */
export const perbaikanYudisium = [
  {
    teks:
      "Peserta yang dinyatakan lulus dengan perbaikan wajib menyelesaikan perbaikan dan memperoleh tanda tangan seluruh penguji paling lambat 30 hari kalender setelah ujian.",
    sumber: "Usulan",
  },
  {
    teks:
      "Yudisium adalah keputusan rapat akademik tentang kelulusan program pendidikan seorang mahasiswa beserta predikatnya, yang diumumkan pada setiap akhir semester.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Predikat Dengan Pujian (*Cum Laude*) hanya diberikan kepada peserta yang menyelesaikan studi dalam waktu paling lama 2 (dua) tahun dengan nilai Ujian Tesis A, dihitung sejak tanggal pendaftaran resmi sebagai mahasiswa sampai dinyatakan lulus Ujian Tesis.",
    sumber: "Pedoman 2021",
  },
  {
    teks:
      "Peserta yang telah dinyatakan lulus berhak mengikuti wisuda setelah menyerahkan Tesis yang telah diperbaiki dan ditandatangani Pembimbing, Penguji, dan Ketua Program Studi, serta menyelesaikan seluruh kewajiban administrasi dan keuangan.",
    sumber: "Pedoman 2021",
  },
];

export const lampiranA = {
  kode: "Lampiran A",
  judul: "Format Berita Acara Ujian Tesis",
  isian: [
    "Nama Mahasiswa / NIM",
    "Judul Tesis",
    "Hari, Tanggal / Waktu",
    "Tempat / Moda",
    "Ketua Penguji",
    "Anggota Penguji I",
    "Anggota Penguji II (Pembimbing)",
  ],
  catatan:
    "Disertai tabel komponen penilaian beserta kolom Nilai (0–100) dan Nilai Terbobot, keputusan tim penguji (lulus tanpa perbaikan / lulus dengan perbaikan / tidak lulus), serta kolom Catatan Perbaikan.",
};

/* ══════════════════════════════════════════════════════════════════════════
   RINGKASAN UNTUK HALAMAN WEB
   ══════════════════════════════════════════════════════════════════════════ */

export const sorotTesis = [
  { angka: "4 sks", label: "Bobot tesis" },
  { angka: "IV", label: "Semester penempuhan" },
  { angka: "2", label: "Semester waktu penyelesaian" },
  { angka: "B", label: "Nilai minimum kelulusan" },
];

export const alurTahap = tahapanBaris.map((r) => ({
  tahap: r[1],
  uraian: r[2],
  luaran: r[3],
}));

export const tigaUjian = [
  {
    tanda: "1",
    judul: "Ujian Pra Proposal",
    keterangan: "Bimbingan untuk membangun kerangka berpikir proposal dan tesis.",
    rincian: ["Setelah judul disetujui Sekretaris Program Studi"],
  },
  {
    tanda: "2",
    judul: "Ujian Usulan Proposal",
    keterangan: "Diseminarkan di hadapan sekurang-kurangnya tiga orang penguji.",
    rincian: ["Lulus bila memperoleh nilai sekurang-kurangnya B"],
  },
  {
    tanda: "3",
    judul: "Ujian Tesis",
    keterangan: "Seminar terbuka di hadapan sekurang-kurangnya tiga orang penguji.",
    rincian: ["Lulus bila memperoleh nilai sekurang-kurangnya B"],
  },
];

export const praProposalRingkas = {
  isi: [
    "Judul penelitian",
    "Latar belakang singkat yang menjelaskan ketidaksesuaian *das sein* dan *das sollen*",
    "Rumusan masalah",
    "Kerangka teori",
    "Metode pendekatan yang akan digunakan",
  ],
  catatan: [
    {
      tanda: "A",
      judul: "Syarat Pelaksanaan",
      keterangan:
        "Judul penelitian telah disetujui Sekretaris Program Studi dan diketahui Ketua Program Studi.",
    },
    {
      tanda: "B",
      judul: "Setelah Ujian",
      keterangan:
        "Sekretaris Program Studi menunjuk pembimbing yang akan membantu penulisan Proposal Tesis dan Tesis.",
    },
    {
      tanda: "C",
      judul: "Jalur Khusus",
      keterangan:
        "Pemegang ijazah Spesialis Kenotariatan (Sp.N.) atau Notaris dapat mengajukan judul setelah Semester I.",
    },
  ],
};

export const proposalRingkas = {
  penguji:
    "Diseminarkan di hadapan sekurang-kurangnya 3 orang penguji: 2 orang bukan pembimbing sebagai Ketua Tim Penguji dan anggota, serta 1 orang pembimbing sebagai anggota.",
  dinilai: [
    "Latar belakang dan rumusan masalah",
    "Tujuan penulisan",
    "Kerangka konseptual dan kerangka teori",
    "Metode penelitian",
    "Sistematika penulisan dan kepustakaan",
    "Penguasaan materi Ilmu Kenotariatan",
  ],
};

export const tesisSyaratRingkas = [
  "Seluruh mata kuliah telah lulus",
  "Penulisan tesis disetujui pembimbing dan diketahui Ketua Program Studi",
  "Sertifikat kegiatan ilmiah dan Kuliah Kerja Lapangan",
  "Sertifikat TOEFL LIKE dengan nilai sekurang-kurangnya 525",
  "Publikasi karya ilmiah pada jurnal cetak maupun daring",
  "Rekomendasi Lembaga Penjamin Mutu Tesis",
  "Kewajiban administrasi dan keuangan telah diselesaikan",
  "Sertifikat Magang sesuai Panduan Magang dan Ujian Magang",
];

export const timPengujiRingkas = [
  {
    tanda: "1",
    judul: "Ketua Penguji",
    keterangan:
      "Berasal dari luar komisi pembimbing atau penguji eksternal yang sesuai kompetensi dan memenuhi syarat kepangkatan akademik.",
  },
  {
    tanda: "2",
    judul: "Dua Anggota",
    keterangan: "Terdiri atas Pembimbing dan Penguji.",
  },
  {
    tanda: "3",
    judul: "Syarat Penguji",
    keterangan:
      "Jabatan fungsional sekurang-kurangnya Lektor dan bergelar Doktor (S3) Ilmu Hukum.",
  },
];

export const komponenPenilaian = [
  // Urutan mengikuti Tabel 6.3 dokumen sumber, bukan diurutkan menurut bobot,
  // agar penomorannya tetap cocok saat dibandingkan dengan dokumen.
  {
    nama: "Konsistensi konstruksi pemikiran",
    bobot: 25,
    aspek: "Keterhubungan latar belakang, rumusan masalah, pembahasan, dan simpulan",
  },
  {
    nama: "Orisinalitas hasil penelitian",
    bobot: 20,
    aspek: "Kebaruan dan kontribusi terhadap ilmu kenotariatan",
  },
  {
    nama: "Metode penulisan",
    bobot: 15,
    aspek: "Ketepatan metode penelitian hukum dan teknik penulisan ilmiah",
  },
  {
    nama: "Kajian pustaka",
    bobot: 15,
    aspek: "Kemutakhiran, relevansi, dan kedalaman rujukan",
  },
  {
    nama: "Penguasaan materi",
    bobot: 25,
    aspek: "Ketepatan dan kedalaman jawaban atas pertanyaan penguji",
  },
];

export const tataTertibRingkas = [
  {
    tanda: "L",
    judul: "Ujian Luring",
    rincian: [
      "Hadir 15 menit sebelum ujian dimulai",
      "Pria: baju putih, berdasi, celana hitam, jas almamater",
      "Wanita: baju putih, rok hitam, jas almamater, kerudung merah",
      "Menyiapkan naskah tesis dan bahan presentasi bagi seluruh penguji",
    ],
  },
  {
    tanda: "D",
    judul: "Ujian Daring",
    rincian: [
      "Jadwal diterima 3 hari sebelum ujian",
      "Tautan *zoom meeting* diterima 30 menit sebelum ujian",
      "Menggunakan nama lengkap dan wajib menyalakan video",
      "Pakaian mengikuti ketentuan ujian luring",
    ],
  },
];

export const yudisiumRingkas = [
  {
    tanda: "1",
    judul: "Perbaikan",
    keterangan:
      "Lulus dengan perbaikan wajib menyelesaikan revisi dan memperoleh tanda tangan seluruh penguji paling lambat 30 hari kalender setelah ujian.",
  },
  {
    tanda: "2",
    judul: "Yudisium",
    keterangan:
      "Keputusan rapat akademik tentang kelulusan beserta predikatnya, diumumkan setiap akhir semester.",
  },
  {
    tanda: "3",
    judul: "Predikat Cum Laude",
    keterangan:
      "Hanya bagi yang menyelesaikan studi paling lama 2 tahun dengan nilai Ujian Tesis A, dihitung sejak pendaftaran resmi.",
  },
];
