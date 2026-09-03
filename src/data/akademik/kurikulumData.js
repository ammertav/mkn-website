/**
 * Tebaran Mata Kuliah Kurikulum 2026 — MKn UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "TEBARAN MATA KULIAH KURIKULUM 2026".
 * Kode, nama mata kuliah, bobot sks, dan urutan baris disalin apa adanya —
 * termasuk urutan Semester 2 yang menempatkan HN268008003 pada baris kelima.
 *
 * Mata kuliah pilihan Semester 2 tidak bersks pada dokumen sumber; bobot 2 sks
 * melekat pada baris "Mata Kuliah Pilihan". Bobot per mata kuliah pilihan
 * (2 sks) dikuatkan Lampiran B Panduan Evaluasi Pembelajaran.
 */

export const sorotKurikulum = [
  { angka: "41", label: "Total sks" },
  { angka: "4", label: "Semester" },
  { angka: "18", label: "Mata kuliah wajib" },
  { angka: "5", label: "Mata kuliah pilihan" },
];

export const kolomMataKuliah = ["No.", "Kode", "Mata Kuliah", "sks"];

export const semester = [
  {
    nama: "Semester 1",
    jumlahSks: 12,
    baris: [
      ["1", "HN268008001", "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum", "2"],
      ["2", "HN268008002", "Hukum Perikatan, Perjanjian dan Jaminan", "2"],
      ["3", "HN268008004", "Peraturan Jabatan Notaris dan Kode Etik Notaris", "2"],
      ["4", "HN268008005", "Teknik Pembuatan Akta Umum (TPA I)", "3"],
      ["5", "HN268008006", "Laboratorium Akta 1", "1"],
      ["6", "HN268008007", "Hukum Perusahaan dan Perkembangan Pasar Modal", "2"],
    ],
  },
  {
    nama: "Semester 2",
    jumlahSks: 14,
    baris: [
      ["1", "HN268008008", "Hukum Keluarga dan Waris", "2"],
      ["2", "HN268008009", "Teknik Pembuatan Akta Badan Usaha (TPA II)", "3"],
      ["3", "HN268008010", "Politik Hukum kePPATan, Kode Etik PPAT", "2"],
      ["4", "HN268008011", "Laboratorium Akta 2", "1"],
      ["5", "HN268008003", "Hukum Perbankan dan Perbankan Syariah", "2"],
      ["6", "HN268008012", "Hukum Pertanahan", "2"],
      ["7", "—", "Mata Kuliah Pilihan (mengambil 2 sks)", "2"],
    ],
    pilihan: {
      keterangan:
        "Mahasiswa memilih satu mata kuliah dari lima pilihan berikut, masing-masing berbobot 2 sks.",
      baris: [
        ["a", "HN268009001", "Filsafat Hukum Islam (P)", "2"],
        ["b", "HN268009002", "Hukum Pajak, Kepailitan dan Lelang (P)", "2"],
        ["c", "HN268009005", "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)", "2"],
        ["d", "HN268009003", "Hak Kekayaan Intelektual (HAKI) (P)", "2"],
        ["e", "HN268009004", "Hukum Ekonomi Syariah (P)", "2"],
      ],
    },
  },
  {
    nama: "Semester 3",
    jumlahSks: 11,
    baris: [
      ["1", "HN268008013", "Teknik Pembuatan Akta Khusus (TPA III)", "3"],
      ["2", "HN268007011", "Islam Disiplin Ilmu", "3"],
      ["3", "HN268008014", "Laboratorium Akta 3", "1"],
      ["4", "HN268008015", "Pembuatan Kontrak Internasional", "2"],
      ["5", "HN268008016", "Teknik Pembuatan Akta PPAT", "2"],
    ],
  },
  {
    nama: "Semester 4",
    jumlahSks: 4,
    baris: [["1", "HN268012001", "Tesis", "4"]],
  },
];

export const totalSks = 41;
