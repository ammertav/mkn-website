/**
 * Capaian Pembelajaran Lulusan (CPL) — Prodi Magister Kenotariatan UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "2 Rumusan CPL.docx" yang diterima dari klien.
 * Teks disalin verbatim, termasuk variasi ejaan yang ada di dokumen aslinya
 * (lihat catatan di bawah).
 *
 * DWIBAHASA: kolom `en` sengaja dikosongkan; useT() jatuh ke bahasa Indonesia
 * selama masih kosong.
 *
 * CATATAN VARIASI EJAAN DI DOKUMEN SUMBER — sengaja tidak diseragamkan:
 *   - Deskriptor KKNI 1 tertulis "praktik profesionalnya" pada daftar pengantar,
 *     tetapi "praktek profesionalnya" pada tabel CPL 3.
 *   - Deskriptor KKNI 3 tertulis "bermanfaat bagi masyarakat dan profesi" pada
 *     daftar pengantar, tetapi "bermanfaat bagi masyarakat dan keilmuan" pada
 *     tabel CPL 4.
 * Mohon dikonfirmasi ke prodi mana yang baku sebelum tayang.
 */

export const cplIntro = {
  id:
    "Penyusunan CPL Program Studi Magister Kenotariatan UNISSULA disesuaikan dengan " +
    "Kerangka Kualifikasi Nasional Indonesia (KKNI) Level 8 berdasar Peraturan Presiden " +
    "Republik Indonesia Nomor 8 Tahun 2012, Tentang Kerangka Kualifikasi Nasional " +
    "Indonesia (KKNI) yaitu:",
  en: "",
};

/** Tiga deskriptor KKNI Level 8 yang menjadi acuan penyusunan CPL. */
export const kkniDescriptors = [
  {
    id:
      "Mampu mengembangkan pengetahuan, teknologi, dan/atau seni di dalam bidang " +
      "keilmuannya atau praktik profesionalnya melalui riset, hingga menghasilkan karya " +
      "inovatif dan teruji.",
    en: "",
  },
  {
    id:
      "Mampu memecahkan permasalahan ilmu pengetahuan, teknologi, dan/atau seni di dalam " +
      "bidang keilmuannya melalui pendekatan inter atau multidisipliner.",
    en: "",
  },
  {
    id:
      "Mampu mengelola riset dan pengembangan yang bermanfaat bagi masyarakat dan profesi, " +
      "serta mampu mendapat pengakuan nasional maupun internasional.",
    en: "",
  },
];

/** Angka ringkas — seluruhnya terverifikasi dari dokumen sumber. */
export const cplStats = [
  { value: "4", label: { id: "RUMUSAN CPL", en: "" } },
  { value: "8", label: { id: "LEVEL KKNI", en: "" } },
  { value: "3", label: { id: "DESKRIPTOR KKNI", en: "" } },
  { value: "2012", label: { id: "PERPRES KKNI", en: "" } },
];

/** Tabel 2 pada dokumen sumber — CPL beserta deskriptor KKNI yang menopangnya. */
export const cplItems = [
  {
    code: "CPL 1",
    desc: {
      id:
        "Bertakwa kepada Tuhan Yang Maha Esa dan mampu menunjukkan sikap jujur, adil, dan " +
        "berbuat kebaikan dalam menjalankan kewenangan berdasarkan nilai moral dan etika " +
        "untuk mewujudkan kesejahteraan masyarakat, bangsa dan negara.",
      en: "",
    },
    kkni: {
      id:
        "Mampu memecahkan permasalahan ilmu pengetahuan, teknologi, dan/atau seni di dalam " +
        "bidang keilmuannya melalui pendekatan inter atau multidisipliner.",
      en: "",
    },
  },
  {
    code: "CPL 2",
    desc: {
      id:
        "Menguasai bidang ilmu dan teori hukum kenotariatan secara mendalam dan holistik, " +
        "sehingga mampu untuk berpikir kritis terhadap penyelesaian permasalahan atau kasus " +
        "hukum kenotariatan dengan mengintegrasikan sains modern dan keilmuan Islam.",
      en: "",
    },
    kkni: {
      id:
        "Mampu memecahkan permasalahan ilmu pengetahuan, teknologi, dan/atau seni di dalam " +
        "bidang keilmuannya melalui pendekatan inter atau multidisipliner.",
      en: "",
    },
  },
  {
    code: "CPL 3",
    desc: {
      id:
        "Mampu membuat akta autentik berdasarkan peraturan perundang-undangan serta kode " +
        "etik notaris dan PPAT sesuai kebutuhan nasional dan internasional dengan " +
        "menggunakan teknologi informasi.",
      en: "",
    },
    kkni: {
      id:
        "Mampu mengembangkan pengetahuan, teknologi, dan/atau seni di dalam bidang " +
        "keilmuannya atau praktek profesionalnya melalui riset, hingga menghasilkan karya " +
        "inovatif dan teruji.",
      en: "",
    },
  },
  {
    code: "CPL 4",
    desc: {
      id:
        "Mampu melakukan penelitian dan pengabdian yang tepat guna, terkini, termaju, dan " +
        "memberikan kemaslahatan pada umat manusia melalui pendekatan interdisipliner dalam " +
        "rangka mengembangkan ilmu pengetahuan di bidang kenotariatan, serta mampu " +
        "mempublikasikan hasil penelitian dalam jurnal nasional atau internasional.",
      en: "",
    },
    kkni: {
      id:
        "Mampu mengelola riset dan pengembangan yang bermanfaat bagi masyarakat dan " +
        "keilmuan, serta mampu mendapat pengakuan nasional dan internasional.",
      en: "",
    },
  },
];
