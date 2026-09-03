/**
 * Tebaran Mata Kuliah Kurikulum 2026 — MKn UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "TEBARAN MATA KULIAH KURIKULUM 2026".
 * Kode, bobot sks, dan urutan baris disalin apa adanya — termasuk urutan
 * Semester 2 yang menempatkan HN268008003 pada baris kelima.
 *
 * Mata kuliah pilihan Semester 2 tidak bersks pada dokumen sumber; bobot 2 sks
 * melekat pada baris "Mata Kuliah Pilihan". Bobot per mata kuliah pilihan
 * (2 sks) dikuatkan Lampiran B Panduan Evaluasi Pembelajaran.
 *
 * DWIBAHASA: nama mata kuliah versi Indonesia adalah nama resmi pada dokumen
 * sumber. Nama Inggris adalah terjemahan kerja untuk pembaca internasional dan
 * bukan nama resmi; penanda "(P)" untuk mata kuliah pilihan diterjemahkan
 * menjadi "(Elective)".
 */

export const sorotKurikulum = [
  { angka: "41", label: { id: "Total sks", en: "Total credits" } },
  { angka: "4", label: { id: "Semester", en: "Semesters" } },
  { angka: "18", label: { id: "Mata kuliah wajib", en: "Compulsory courses" } },
  { angka: "5", label: { id: "Mata kuliah pilihan", en: "Elective courses" } },
];

export const kolomMataKuliah = [
  { id: "No.", en: "No." },
  { id: "Kode", en: "Code" },
  { id: "Mata Kuliah", en: "Course" },
  { id: "sks", en: "Credits" },
];

export const semester = [
  {
    nama: { id: "Semester 1", en: "Semester 1" },
    jumlahSks: 12,
    baris: [
      [
        "1",
        "HN268008001",
        {
          id: "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum",
          en: "Legal Theory, Legal Discovery, and Legal Research Methods",
        },
        "2",
      ],
      [
        "2",
        "HN268008002",
        {
          id: "Hukum Perikatan, Perjanjian dan Jaminan",
          en: "Law of Obligations, Contracts, and Securities",
        },
        "2",
      ],
      [
        "3",
        "HN268008004",
        {
          id: "Peraturan Jabatan Notaris dan Kode Etik Notaris",
          en: "Notarial Office Regulations and the Notarial Code of Ethics",
        },
        "2",
      ],
      [
        "4",
        "HN268008005",
        {
          id: "Teknik Pembuatan Akta Umum (TPA I)",
          en: "Drafting of General Deeds (TPA I)",
        },
        "3",
      ],
      [
        "5",
        "HN268008006",
        { id: "Laboratorium Akta 1", en: "Deed Drafting Laboratory 1" },
        "1",
      ],
      [
        "6",
        "HN268008007",
        {
          id: "Hukum Perusahaan dan Perkembangan Pasar Modal",
          en: "Company Law and Capital Market Developments",
        },
        "2",
      ],
    ],
  },
  {
    nama: { id: "Semester 2", en: "Semester 2" },
    jumlahSks: 14,
    baris: [
      [
        "1",
        "HN268008008",
        { id: "Hukum Keluarga dan Waris", en: "Family and Inheritance Law" },
        "2",
      ],
      [
        "2",
        "HN268008009",
        {
          id: "Teknik Pembuatan Akta Badan Usaha (TPA II)",
          en: "Drafting of Business Entity Deeds (TPA II)",
        },
        "3",
      ],
      [
        "3",
        "HN268008010",
        {
          id: "Politik Hukum kePPATan, Kode Etik PPAT",
          en: "Legal Policy on the PPAT Office and the PPAT Code of Ethics",
        },
        "2",
      ],
      [
        "4",
        "HN268008011",
        { id: "Laboratorium Akta 2", en: "Deed Drafting Laboratory 2" },
        "1",
      ],
      [
        "5",
        "HN268008003",
        {
          id: "Hukum Perbankan dan Perbankan Syariah",
          en: "Banking Law and Islamic Banking",
        },
        "2",
      ],
      ["6", "HN268008012", { id: "Hukum Pertanahan", en: "Land Law" }, "2"],
      [
        "7",
        "—",
        {
          id: "Mata Kuliah Pilihan (mengambil 2 sks)",
          en: "Elective Course (2 credits to be taken)",
        },
        "2",
      ],
    ],
    pilihan: {
      keterangan: {
        id:
          "Mahasiswa memilih satu mata kuliah dari lima pilihan berikut, masing-masing " +
          "berbobot 2 sks.",
        en:
          "Students choose one course from the five electives below, each carrying 2 credits.",
      },
      baris: [
        [
          "a",
          "HN268009001",
          { id: "Filsafat Hukum Islam (P)", en: "Islamic Legal Philosophy (Elective)" },
          "2",
        ],
        [
          "b",
          "HN268009002",
          {
            id: "Hukum Pajak, Kepailitan dan Lelang (P)",
            en: "Tax Law, Bankruptcy, and Auctions (Elective)",
          },
          "2",
        ],
        [
          "c",
          "HN268009005",
          {
            id: "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)",
            en: "Cyber Administration of Legal Entities and International Business (Elective)",
          },
          "2",
        ],
        [
          "d",
          "HN268009003",
          {
            id: "Hak Kekayaan Intelektual (HAKI) (P)",
            en: "Intellectual Property Rights (HAKI) (Elective)",
          },
          "2",
        ],
        [
          "e",
          "HN268009004",
          { id: "Hukum Ekonomi Syariah (P)", en: "Islamic Economic Law (Elective)" },
          "2",
        ],
      ],
    },
  },
  {
    nama: { id: "Semester 3", en: "Semester 3" },
    jumlahSks: 11,
    baris: [
      [
        "1",
        "HN268008013",
        {
          id: "Teknik Pembuatan Akta Khusus (TPA III)",
          en: "Drafting of Special Deeds (TPA III)",
        },
        "3",
      ],
      [
        "2",
        "HN268007011",
        { id: "Islam Disiplin Ilmu", en: "Islam as a Discipline of Knowledge" },
        "3",
      ],
      [
        "3",
        "HN268008014",
        { id: "Laboratorium Akta 3", en: "Deed Drafting Laboratory 3" },
        "1",
      ],
      [
        "4",
        "HN268008015",
        { id: "Pembuatan Kontrak Internasional", en: "International Contract Drafting" },
        "2",
      ],
      [
        "5",
        "HN268008016",
        { id: "Teknik Pembuatan Akta PPAT", en: "Drafting of PPAT Deeds" },
        "2",
      ],
    ],
  },
  {
    nama: { id: "Semester 4", en: "Semester 4" },
    jumlahSks: 4,
    baris: [["1", "HN268012001", { id: "Tesis", en: "Thesis" }, "4"]],
  },
];

export const totalSks = 41;

/** Teks halaman Kurikulum. */
export const halaman = {
  meta: {
    title: {
      id: "Kurikulum Program Studi | MKn UNISSULA",
      en: "Study Programme Curriculum | MKn UNISSULA",
    },
    description: {
      id:
        "Tebaran mata kuliah Kurikulum 2026 Program Studi Magister Kenotariatan UNISSULA " +
        "— 41 sks dalam empat semester, beserta mata kuliah pilihan.",
      en:
        "The 2026 curriculum course distribution of the UNISSULA Master of Notarial Law " +
        "Study Programme — 41 credits across four semesters, including electives.",
    },
  },
  judul: { id: "Kurikulum", en: "Curriculum" },
  intro: {
    id:
      "Kurikulum Program Studi Magister Kenotariatan UNISSULA membekali mahasiswa dengan " +
      "penguasaan teori hukum yang mendalam sekaligus kemahiran praktis merancang akta " +
      "autentik. Beban studi 41 sks ditempuh dalam empat semester, memadukan mata kuliah " +
      "teori, rumpun Teknik Pembuatan Akta, Laboratorium Akta, mata kuliah pilihan, dan " +
      "Tesis.",
    en:
      "The curriculum of the UNISSULA Master of Notarial Law Study Programme equips " +
      "students with a deep command of legal theory alongside the practical skill of " +
      "drafting authentic deeds. Its 41-credit study load is completed over four " +
      "semesters, combining theory courses, the Deed Drafting cluster, the Deed Drafting " +
      "Laboratory, electives, and the Thesis.",
  },
  judulTebaran: {
    id: "Tebaran Mata Kuliah Kurikulum 2026",
    en: "2026 Curriculum Course Distribution",
  },
  keteranganTebaran: {
    id: "Sebaran mata kuliah per semester beserta kode dan bobot sks.",
    en: "Course distribution by semester, with course codes and credit weights.",
  },
  labelJumlahSks: { id: "Jumlah sks", en: "Total credits" },
  labelSks: { id: "sks", en: "credits" },
  totalProdi: { id: "Total sks Program Studi", en: "Total Study Programme Credits" },
  ekuivalensiCatatan: {
    id:
      "Mahasiswa angkatan Kurikulum 2021 yang belum menyelesaikan studi mengacu pada tabel " +
      "ekuivalensi mata kuliah untuk mengetahui padanan dan selisih beban studinya.",
    en:
      "Students admitted under the 2021 curriculum who have not yet completed their studies " +
      "should consult the course equivalence table for their course matches and any " +
      "difference in study load.",
  },
  ekuivalensiTautan: {
    id: "Lihat tabel ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026",
    en: "View the 2021 to OBE 2026 curriculum equivalence table",
  },
  judulDokumen: { id: "Dokumen Kurikulum", en: "Curriculum Documents" },
  dokumenKosong: {
    id: "Dokumen akan segera ditambahkan.",
    en: "Documents will be added soon.",
  },
};
