/**
 * Capaian Pembelajaran Lulusan (CPL) — Prodi Magister Kenotariatan UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "2 Rumusan CPL.docx" yang diterima dari klien.
 * Teks disalin verbatim, termasuk variasi ejaan yang ada di dokumen aslinya
 * (lihat catatan di bawah).
 *
 * DWIBAHASA: teks Indonesia verbatim dari dokumen sumber; teks Inggris adalah
 * terjemahan kerja. Variasi ejaan pada deskriptor KKNI (lihat catatan di bawah)
 * tidak terbawa ke bahasa Inggris karena tidak ada padanannya; hanya CPL 4 yang
 * dibedakan (society and scholarship, bukan society and the profession).
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
  en: 
    "The Intended Learning Outcomes of the UNISSULA Master of Notarial Law programme " +
    "are formulated in accordance with Level 8 of the Indonesian National Qualifications " +
    "Framework (KKNI) under Presidential Regulation of the Republic of Indonesia No. 8 " +
    "of 2012 on the Indonesian National Qualifications Framework, namely:",
};

/** Tiga deskriptor KKNI Level 8 yang menjadi acuan penyusunan CPL. */
export const kkniDescriptors = [
  {
    id:
      "Mampu mengembangkan pengetahuan, teknologi, dan/atau seni di dalam bidang " +
      "keilmuannya atau praktik profesionalnya melalui riset, hingga menghasilkan karya " +
      "inovatif dan teruji.",
    en: 
      "Able to develop knowledge, technology, and/or the arts within their field of " +
      "study or their professional practice through research, producing innovative and " +
      "validated work.",
  },
  {
    id:
      "Mampu memecahkan permasalahan ilmu pengetahuan, teknologi, dan/atau seni di dalam " +
      "bidang keilmuannya melalui pendekatan inter atau multidisipliner.",
    en: 
      "Able to solve problems of science, technology, and/or the arts within their " +
      "field of study through an inter- or multidisciplinary approach.",
  },
  {
    id:
      "Mampu mengelola riset dan pengembangan yang bermanfaat bagi masyarakat dan profesi, " +
      "serta mampu mendapat pengakuan nasional maupun internasional.",
    en: 
      "Able to manage research and development that benefits society and the profession, " +
      "and to gain national and international recognition.",
  },
];

/** Angka ringkas — seluruhnya terverifikasi dari dokumen sumber. */
export const cplStats = [
  { value: "4", label: { id: "RUMUSAN CPL", en: "LEARNING OUTCOMES" } },
  { value: "8", label: { id: "LEVEL KKNI", en: "KKNI LEVEL" } },
  { value: "3", label: { id: "DESKRIPTOR KKNI", en: "KKNI DESCRIPTORS" } },
  { value: "2012", label: { id: "PERPRES KKNI", en: "KKNI REGULATION" } },
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
      en: 
        "Devoted to God Almighty and able to demonstrate honesty, fairness, and " +
        "benevolence in exercising authority on the basis of moral and ethical values, in " +
        "order to advance the welfare of society, the nation, and the state.",
    },
    kkni: {
      id:
        "Mampu memecahkan permasalahan ilmu pengetahuan, teknologi, dan/atau seni di dalam " +
        "bidang keilmuannya melalui pendekatan inter atau multidisipliner.",
      en: 
        "Able to solve problems of science, technology, and/or the arts within their " +
        "field of study through an inter- or multidisciplinary approach.",
    },
  },
  {
    code: "CPL 2",
    desc: {
      id:
        "Menguasai bidang ilmu dan teori hukum kenotariatan secara mendalam dan holistik, " +
        "sehingga mampu untuk berpikir kritis terhadap penyelesaian permasalahan atau kasus " +
        "hukum kenotariatan dengan mengintegrasikan sains modern dan keilmuan Islam.",
      en: 
        "Possesses a deep and holistic command of the discipline and theory of notarial " +
        "law, enabling critical thinking in resolving notarial law problems or cases by " +
        "integrating modern science and Islamic scholarship.",
    },
    kkni: {
      id:
        "Mampu memecahkan permasalahan ilmu pengetahuan, teknologi, dan/atau seni di dalam " +
        "bidang keilmuannya melalui pendekatan inter atau multidisipliner.",
      en: 
        "Able to solve problems of science, technology, and/or the arts within their " +
        "field of study through an inter- or multidisciplinary approach.",
    },
  },
  {
    code: "CPL 3",
    desc: {
      id:
        "Mampu membuat akta autentik berdasarkan peraturan perundang-undangan serta kode " +
        "etik notaris dan PPAT sesuai kebutuhan nasional dan internasional dengan " +
        "menggunakan teknologi informasi.",
      en: 
        "Able to draw up authentic deeds in accordance with statutory regulations and the " +
        "codes of ethics of notaries and land deed officials (PPAT), meeting national and " +
        "international needs, with the use of information technology.",
    },
    kkni: {
      id:
        "Mampu mengembangkan pengetahuan, teknologi, dan/atau seni di dalam bidang " +
        "keilmuannya atau praktek profesionalnya melalui riset, hingga menghasilkan karya " +
        "inovatif dan teruji.",
      en: 
        "Able to develop knowledge, technology, and/or the arts within their field of " +
        "study or their professional practice through research, producing innovative and " +
        "validated work.",
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
      en: 
        "Able to conduct research and community service that is fit for purpose, current, " +
        "and advanced, and that brings benefit to humankind through an interdisciplinary " +
        "approach, in order to advance knowledge in the field of notarial law, and able to " +
        "publish research findings in national or international journals.",
    },
    kkni: {
      id:
        "Mampu mengelola riset dan pengembangan yang bermanfaat bagi masyarakat dan " +
        "keilmuan, serta mampu mendapat pengakuan nasional dan internasional.",
      en: 
        "Able to manage research and development that benefits society and scholarship, " +
        "and to gain national and international recognition.",
    },
  },
];

/** Teks halaman Capaian Pembelajaran Lulusan. */
export const halaman = {
  meta: {
    title: {
      id: "Capaian Pembelajaran Lulusan | MKn UNISSULA",
      en: "Intended Learning Outcomes | MKn UNISSULA",
    },
    description: {
      id:
        "Capaian Pembelajaran Lulusan (CPL) Program Studi Magister Kenotariatan (MKn) " +
        "UNISSULA, disusun mengacu pada KKNI Level 8.",
      en:
        "The Intended Learning Outcomes of the UNISSULA Master of Notarial Law (MKn) Study " +
        "Programme, formulated with reference to Level 8 of the Indonesian National " +
        "Qualifications Framework (KKNI).",
    },
  },
  judul: { id: "Capaian Pembelajaran Lulusan", en: "Intended Learning Outcomes" },
  judulTabel: {
    id: "Rumusan Capaian Pembelajaran Lulusan",
    en: "Statements of Intended Learning Outcomes",
  },
  kolom: {
    no: { id: "NO", en: "NO" },
    deskripsi: {
      id: "DESKRIPSI CAPAIAN PEMBELAJARAN LULUSAN",
      en: "DESCRIPTION OF INTENDED LEARNING OUTCOME",
    },
    kkni: { id: "KKNI", en: "KKNI" },
  },
};
