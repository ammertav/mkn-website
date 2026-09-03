/**
 * Linimasa perjalanan Program Studi Magister Kenotariatan UNISSULA.
 *
 * TINGKAT KEPERCAYAAN SUMBER — mohon diperiksa sebelum tayang:
 *
 * TERVERIFIKASI (ada nomor SK / pemberitaan resmi):
 *   - 2018  Akreditasi A, SK 1696/SK/BAN-PT/Akred/M/VII/2018, berlaku 9 Jul 2018–9 Jul 2023
 *   - 2020  ASIC level Premier, diumumkan Januari 2020, visitasi asesor 25–28 November 2019
 *   - 2023  Akreditasi Unggul, SK 2512/SK/BAN-PT/Ak.Ppj/M/VI/2023, berlaku s.d. 10 Juli 2028
 *
 * PERLU KONFIRMASI PRODI (belum ditemukan nomor SK-nya):
 *   - Tanggal pendirian 27 Desember 2012 — bersumber dari basis data pihak ketiga
 *   - Tahun mulai penyelenggaraan 2013
 *   - Akreditasi pertama sebelum 2018 belum ditemukan; kemungkinan ada, mohon dilengkapi
 *
 * Rujukan: lp3m.unissula.ac.id/akpro · unissula.ac.id/sebelas-prodi-unissula-terakreditasi-internasional
 */

export const timeline = [
  {
    year: "2012",
    title: { id: "Pendirian Program Studi", en: "Establishment of the Study Programme" },
    desc: {
      id:
        "Fakultas Hukum UNISSULA mendirikan Program Studi Magister (S2) Kenotariatan untuk " +
        "menjawab kebutuhan tenaga Notaris dan pelaksana hukum profesional, didukung sumber " +
        "daya insani serta sarana prasarana yang telah dimiliki fakultas.",
      en: 
        "The Faculty of Law of UNISSULA established the Master’s (S2) Programme in " +
        "Notarial Law to meet the need for professional notaries and legal practitioners, " +
        "drawing on the human resources and facilities the faculty already held.",
    },
    meta: {
      id: "Surat keputusan pendirian tertanggal 27 Desember 2012",
      en: 
      "Founding decree dated 27 December 2012",
    },
    needsConfirmation: true,
  },
  {
    year: "2013",
    title: { id: "Penyelenggaraan Perdana", en: "First Intake" },
    desc: {
      id:
        "Program studi mulai menyelenggarakan pendidikan dan menerima angkatan pertama " +
        "mahasiswa Magister Kenotariatan.",
      en: 
        "The programme began delivering its education and admitted its first cohort of " +
        "Master of Notarial Law students.",
    },
    meta: null,
    needsConfirmation: true,
  },
  {
    year: "2018",
    title: { id: "Akreditasi BAN-PT Peringkat A", en: "BAN-PT Accreditation, Grade A" },
    desc: {
      id:
        "Badan Akreditasi Nasional Perguruan Tinggi menetapkan peringkat A bagi Program Studi " +
        "Magister Kenotariatan, berlaku hingga 9 Juli 2023.",
      en: 
        "The National Accreditation Board for Higher Education (BAN-PT) awarded grade A " +
        "to the Master of Notarial Law study programme, valid until 9 July 2023.",
    },
    meta: {
      id: "SK No. 1696/SK/BAN-PT/Akred/M/VII/2018 · 9 Juli 2018",
      en: 
      "Decree No. 1696/SK/BAN-PT/Akred/M/VII/2018 · 9 July 2018",
    },
    needsConfirmation: false,
  },
  {
    year: "2020",
    title: { id: "Akreditasi Internasional ASIC", en: "ASIC International Accreditation" },
    desc: {
      id:
        "Magister Kenotariatan memperoleh akreditasi internasional dari *Accreditation Service " +
        "for International Schools, Colleges and Universities* (ASIC), London, pada level " +
        "*Premier*, level tertinggi yang diberikan ASIC.",
      en: 
        "The Master of Notarial Law programme received international accreditation from " +
        "the Accreditation Service for International Schools, Colleges and Universities " +
        "(ASIC), London, at Premier level, the highest level ASIC awards.",
    },
    meta: { id: "Diumumkan Januari 2020 · ASIC, Inggris", en: "Announced January 2020 · ASIC, United Kingdom" },
    needsConfirmation: false,
  },
  {
    year: "2023",
    title: { id: "Akreditasi BAN-PT Peringkat Unggul", en: "BAN-PT Accreditation, Grade Unggul (Excellent)" },
    desc: {
      id:
        "Peringkat akreditasi meningkat dari A menjadi Unggul, peringkat tertinggi dalam " +
        "sistem akreditasi nasional yang berlaku saat ini. Berlaku hingga 10 Juli 2028.",
      en: 
        "The accreditation grade rose from A to Unggul (Excellent), the highest grade in " +
        "the national accreditation system currently in force. Valid until 10 July 2028.",
    },
    meta: { id: "SK No. 2512/SK/BAN-PT/Ak.Ppj/M/VI/2023", en: "Decree No. 2512/SK/BAN-PT/Ak.Ppj/M/VI/2023" },
    needsConfirmation: false,
    highlight: true,
  },
];

/** Ringkasan status akreditasi terkini — ditampilkan sebagai penutup linimasa. */
export const statusAkreditasi = [
  {
    label: { id: "Akreditasi Nasional", en: "" },
    value: "Unggul",
    detail: { id: "BAN-PT, berlaku s.d. 10 Juli 2028", en: "" },
  },
  {
    label: { id: "Akreditasi Internasional", en: "" },
    value: "ASIC Premier",
    detail: { id: "ASIC London, sejak Januari 2020", en: "" },
  },
];

/** Teks halaman Sejarah — judul, pengantar, dan label seksi. */
export const halaman = {
  meta: {
    title: {
      id: "Sejarah & Latar Belakang | MKn UNISSULA",
      en: "History & Background | MKn UNISSULA",
    },
    description: {
      id:
        "Sejarah pendirian dan perjalanan akreditasi Program Studi Magister Kenotariatan " +
        "Fakultas Hukum UNISSULA — dari pendirian hingga peringkat Unggul BAN-PT dan " +
        "ASIC Premier.",
      en:
        "The founding and accreditation history of the Master of Notarial Law Study " +
        "Programme, Faculty of Law, UNISSULA — from its establishment to BAN-PT " +
        "Unggul and ASIC Premier status.",
    },
  },
  eyebrow: { id: "SEJARAH / LATAR BELAKANG", en: "HISTORY / BACKGROUND" },
  judulLatar: {
    id: "Latar Belakang Pendirian Program Studi",
    en: "Background to the Establishment of the Study Programme",
  },
  latarBelakang: [
    {
      id:
        "Dinamika ekonomi global dan pesatnya iklim investasi menuntut adanya infrastruktur hukum preventif dan responsif. Dalam ekosistem bisnis kontemporer, kepastian hukum bukan sekadar pelengkap administratif, melainkan pilar utama untuk memitigasi risiko dan menjamin keabsahan berbagai transaksi komersial maupun keperdataan. Kompleksitas ini secara langsung berimplikasi pada eskalasi kebutuhan akan profesi Notaris dan Pejabat Pembuat Akta Tanah (PPAT) yang kompeten, berintegritas, serta berwawasan luas. Di Indonesia, lonjakan pembangunan infrastruktur, dinamisnya lalu lintas pertanahan, serta masifnya aksi korporasi membuka lanskap potensi karier yang sangat prospektif dan strategis bagi profesi kenotariatan.",
      en:
        "The dynamics of the global economy and the rapid expansion of the investment climate demand a preventive and responsive legal infrastructure. In the contemporary business ecosystem, legal certainty is not merely an administrative formality, but a fundamental pillar for mitigating risks and ensuring the validity of diverse commercial and civil transactions. This complexity directly leads to an escalating demand for competent, high-integrity, and broad-minded Notaries and Land Deed Officials (PPAT). In Indonesia, surges in infrastructure development, dynamic land transactions, and massive corporate actions open up a highly prospective and strategic career landscape for the notarial profession.",
    },
    {
      id:
        "Menjawab semua kebutuhan tersebut, Fakultas Hukum Universitas Islam Sultan Agung mendirikan Program Studi Magister Kenotariatan, dimana program ini didesain secara komprehensif, tidak sekadar untuk mencetak praktisi yang andal dalam merumuskan akta autentik, tetapi juga untuk melahirkan intelektual hukum yang unggul, berdaya saing internasional dan adaptif dalam mengimplementasikan ilmu pengetahuan serta teknologi di bidang hukum kenotariatan yang dijiwai nilai-nilai etik profesi dan nilai-nilai akhlakul karimah. Kehadiran program studi ini menjadi wujud nyata kontribusi Universitas Islam Sultan Agung dalam mengawal kebutuhan pelaku bisnis, menegakan supremasi hukum, serta didedikasikan untuk membangun generasi khaira ummah yang berintegritas tinggi melalui penerapan Budaya Akademik Islami (BudAI).",
      en:
        "In response to these critical needs, the Faculty of Law of Universitas Islam Sultan Agung established the Master of Notarial Law Study Programme. This programme is designed comprehensively, not only to produce skilled practitioners proficient in drafting authentic deeds, but also to cultivate outstanding legal intellectuals who are internationally competitive and adaptive in implementing science and technology in notarial law, guided by professional ethical values and noble Islamic character (akhlakul karimah). The presence of this study programme represents a concrete contribution of Universitas Islam Sultan Agung in safeguarding the needs of business actors, upholding the supremacy of law, and fostering an exemplary generation of high integrity (khaira ummah) through the implementation of Islamic Academic Culture (BudAI).",
    },
  ],
  judulLinimasa: { id: "Perjalanan Program Studi", en: "The Programme’s Journey" },
};
