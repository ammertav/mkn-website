/**
 * Data Rencana Pembelajaran Semester (RPS) & Instrumen Pembelajaran
 * Program Studi Magister Kenotariatan (MKn) FH UNISSULA.
 *
 * Mengacu pada Kurikulum OBE 2026. Berkas RPS resmi diambil dari repositori aset
 * PDF program studi (src/assets/pdf/rps/).
 */

// Tautan folder induk repositori RPS di Google Drive MKn UNISSULA
export const GDRIVE_RPS_ROOT_URL =
  "https://drive.google.com/drive/folders/1dwwQ72FLTz1GU0mSkQX4akZUtwbOZPIu?usp=drive_link";

export const daftarSemesterRps = [
  { id: "all", label: { id: "Semua Semester", en: "All Semesters" } },
  { id: "1", label: { id: "Semester 1", en: "Semester 1" } },
  { id: "2", label: { id: "Semester 2", en: "Semester 2" } },
  { id: "3", label: { id: "Semester 3", en: "Semester 3" } },
  { id: "4", label: { id: "Semester 4", en: "Semester 4" } },
];

/**
 * Daftar Mata Kuliah & Dokumen RPS
 */
export const daftarMataKuliahRps = [
  // =========================================================================
  // SEMESTER 1
  // =========================================================================
  {
    id: "mk-01",
    kode: "HN268008001",
    semester: 1,
    sks: 2,
    nama: {
      id: "Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum",
      en: "Legal Theory, Legal Discovery, and Legal Research Methods",
    },
    deskripsi: {
      id: "Mengkaji filsafat dan teori hukum modern, metodologi hermeneutika penemuan hukum oleh notaris/hakim, serta metodologi penelitian tesis hukum kenotariatan.",
      en: "Covers modern legal theory, judicial and notarial legal interpretation methods, and legal research methodology for master's theses.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS Teori Hukum, Penemuan Hukum dan Metode Penelitian Hukum.pdf",
  },
  {
    id: "mk-02",
    kode: "HN268008005",
    semester: 1,
    sks: 3,
    nama: {
      id: "Teknik Pembuatan Akta Umum (TPA I)",
      en: "Drafting of General Deeds (TPA I)",
    },
    deskripsi: {
      id: "Prinsip dasar anatomi akta notaris (awal, badan, penutup akta), komparisi para pihak, premisse, dan klausula baku dalam akta perjanjian umum otentik.",
      en: "Foundational anatomy of notarial deeds (heading, body, closing), legal comparition, recitals, and standard clauses in general authentic deeds.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS Teknik Pembuatan Akta Umum (TPA I).pdf",
  },
  {
    id: "mk-03",
    kode: "HN268008004",
    semester: 1,
    sks: 2,
    nama: {
      id: "Peraturan Jabatan Notaris dan Kode Etik Notaris",
      en: "Notarial Office Regulations and the Notarial Code of Ethics",
    },
    deskripsi: {
      id: "Kajian mendalam mengenai UU Jabatan Notaris (UUJN), batas wewenang, hak dan kewajiban notaris, tanggung jawab hukum perdata/pidana/administratif, serta kode etik INI.",
      en: "In-depth examination of the Notary Law (UUJN), jurisdictional scope, rights and obligations, civil/criminal/administrative liabilities, and the INI ethics code.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS MK Peraturan Jabatan Notaris dan Kode Etik Notaris.pdf",
  },
  {
    id: "mk-04",
    kode: "HN268008002",
    semester: 1,
    sks: 2,
    nama: {
      id: "Materi Hukum Perikatan, Jaminan dan Jaminan",
      en: "Law of Obligations, Contracts, and Securities",
    },
    deskripsi: {
      id: "Analisis doktrin perikatan, asas-asas perjanjian KUHPerdata, jaminan kebendaan (hak tanggungan, fidusia, gadai, hipotek), dan jaminan perorangan (borgtocht).",
      en: "Analysis of the doctrine of obligations, Civil Code contract principles, real security rights (mortgage, fiduciary, pledge), and personal guarantees.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS MK Hukum Perikatan, perjanjian, dan Jaminan.pdf",
  },
  {
    id: "mk-05",
    kode: "HN268008006",
    semester: 1,
    sks: 1,
    nama: {
      id: "Laboratorium Akta I",
      en: "Deed Drafting Laboratory 1",
    },
    deskripsi: {
      id: "Praktik langsung simulasi kantor notaris: penerimaan klien, pemeriksaan identitas dan keabsahan dokumen, pengetikan draf akta umum, pembacaan, dan penandatanganan akta.",
      en: "Direct clinical simulation of notarial office procedures: client consultation, document verification, deed drafting, recital, and formal signing.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS MK Laboratorium Akta I.pdf",
  },
  {
    id: "mk-06",
    kode: "HN268008007",
    semester: 1,
    sks: 2,
    nama: {
      id: "Hukum Perusahaan dan Perkembangan Pasar Modal",
      en: "Company Law and Capital Market Developments",
    },
    deskripsi: {
      id: "Aspek hukum perseroan terbatas (PT, PT Perorangan), aksi korporasi (merger, akuisisi, konsolidasi, spin-off), serta peran notaris dalam transaksi pasar modal dan emisi efek.",
      en: "Corporate law aspects (limited liability companies), corporate actions (M&A, consolidation, spin-offs), and the notary's role in capital markets.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS Hukum Perusahaan dan Perkembangan Pasar Modal.pdf",
  },
  {
    id: "mk-07",
    kode: "HN268008003",
    semester: 1,
    sks: 2,
    nama: {
      id: "Hukum Perbankan dan Perbankan Syariah",
      en: "Banking Law and Islamic Banking",
    },
    deskripsi: {
      id: "Kaidah hukum pembiayaan perbankan konvensional dan perbankan syariah (murabahah, mudharabah, musyarakah, ijarah), prinsip kehati-hatian, dan pembuatan akta pembiayaan perbankan.",
      en: "Legal norms of conventional and Islamic banking financing, prudential banking standards, and notarial deed drafting for banking financing contracts.",
    },
    folderUrl: "/pdf/rps/semester-1/RPS MK Hukum Perbankan dan Perbankan Syariah.pdf",
  },
  // =========================================================================
  // SEMESTER 2
  // =========================================================================
  {
    id: "mk-08",
    kode: "HN268008009",
    semester: 2,
    sks: 3,
    nama: {
      id: "Teknik Pembuatan Akta Badan Usaha (TPA II)",
      en: "Drafting of Business Entity Deeds (TPA II)",
    },
    deskripsi: {
      id: "Penyusunan akta pendirian, anggaran dasar, perubahan modal, berita acara RUPS PT tertutup & terbuka, CV, Firma, Persekutuan Perdata, Yayasan, dan Koperasi.",
      en: "Drafting deeds of establishment, articles of association, capital amendments, shareholder meeting minutes for corporations, partnerships, foundations, and cooperatives.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS MK Teknik Pembuatan Akta Badan Usaha (TPA II).pdf",
  },
  {
    id: "mk-09",
    kode: "HN268008010",
    semester: 2,
    sks: 2,
    nama: {
      id: "Politik Hukum Ke-PPAT-an dan Kode Etik PPAT",
      en: "Legal Policy on the PPAT Office and the PPAT Code of Ethics",
    },
    deskripsi: {
      id: "Regulasi pendaftaran tanah, status hukum dan kewenangan PPAT/PPAT Sementara, prosedur pembuatan akta peralihan hak atas tanah, serta kode etik IPPAT.",
      en: "Land registration regulations, statutory authority of PPATs, procedures for drafting land transfer deeds, and the IPPAT ethics code.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS MK Politik Hukum Ke-PPAT-an & Kode Etik PPAT.pdf",
  },
  {
    id: "mk-10",
    kode: "HN268008011",
    semester: 2,
    sks: 1,
    nama: {
      id: "Laboratorium Akta II",
      en: "Deed Drafting Laboratory 2",
    },
    deskripsi: {
      id: "Simulasi praktik kantor notaris lanjutan: penyusunan draf akta badan hukum, legal due diligence korporasi, serta penggunaan sistem pendaftaran AHU Online Kemenkumham.",
      en: "Advanced notarial office simulation: drafting corporate deeds, conducting legal due diligence, and navigating the Ministry of Law AHU Online platform.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS MK Laboratorium Akta II.pdf",
  },
  {
    id: "mk-11",
    kode: "HN268008012",
    semester: 2,
    sks: 2,
    nama: {
      id: "Hukum Pertanahan",
      en: "Land Law",
    },
    deskripsi: {
      id: "UUPA No. 5 Tahun 1960, hak-hak atas tanah (HM, HGU, HGB, HP), pengadaan tanah untuk kepentingan umum, reforma agraria, dan penyelesaian sengketa pertanahan.",
      en: "Basic Agrarian Law (UUPA), land tenure types, land procurement for public interest, agrarian reform, and land dispute resolution mechanisms.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS Hukum Pertanahan.pdf",
  },
  {
    id: "mk-12",
    kode: "HN268009002",
    semester: 2,
    sks: 2,
    nama: {
      id: "Hukum Pajak, Kepailitan dan Lelang (P)",
      en: "Tax Law, Bankruptcy, and Auctions (Elective)",
    },
    deskripsi: {
      id: "Kewajiban perpajakan dalam transaksi notaris/PPAT (BPHTB, PPh), akibat hukum kepailitan dan PKPU terhadap harta debitur, serta prosedur lelang eksekusi hak tanggungan.",
      en: "Tax compliance in notarial transactions, legal consequences of bankruptcy and debt restructuring, and public auction execution procedures.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS Hukum Pajak, Kepailitan dan Lelang - UTS UAS KUIS.pdf",
  },
  {
    id: "mk-13",
    kode: "HN268008008",
    semester: 2,
    sks: 2,
    nama: {
      id: "Hukum Keluarga dan Waris",
      en: "Family and Inheritance Law",
    },
    deskripsi: {
      id: "Ketentuan hukum keluarga, pemisahan harta perkawinan, hukum waris perdata barat (BW), hukum waris Islam (faraidh), dan hukum waris adat dalam pembuatan surat keterangan waris.",
      en: "Family and matrimonial property law, Dutch-derived civil inheritance law (BW), Islamic inheritance jurisprudence, and customary inheritance certification.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS MK Hukum Keluarga dan Waris.pdf",
  },
  {
    id: "mk-14",
    kode: "HN268009003",
    semester: 2,
    sks: 2,
    nama: {
      id: "Hak Kekayaan Intelektual (HAKI) (P)",
      en: "Intellectual Property Rights (HAKI) (Elective)",
    },
    deskripsi: {
      id: "Kajian perlindungan hukum hak cipta, paten, merek, rahasia dagang, desain industri, serta peran notaris dalam pembuatan akta lisensi dan pengalihan hak kekayaan intelektual.",
      en: "Protection of copyright, patent, trademark, trade secret, industrial design, and notarial deed drafting for IP licensing and transfer.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS Hukum Kekayaan Intelektual.pdf",
  },
  {
    id: "mk-15",
    kode: "HN268009004",
    semester: 2,
    sks: 2,
    nama: {
      id: "Hukum Ekonomi Syariah (P)",
      en: "Islamic Economic Law (Elective)",
    },
    deskripsi: {
      id: "Prinsip dasar akad muamalah kontemporer, regulasi industri halal, pasar modal syariah, sukuk, asuransi syariah, dan penyelesaian sengketa di Pengadilan Agama / Basyarnas.",
      en: "Foundations of contemporary Islamic commercial contracts, halal industry, Islamic capital markets, sukuk, and Islamic arbitration.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS Hukum Ekonomi Syariah - Uts Uas Kuis.pdf",
  },
  {
    id: "mk-16",
    kode: "HN268009001",
    semester: 2,
    sks: 2,
    nama: {
      id: "Filsafat Hukum Islam (P)",
      en: "Islamic Legal Philosophy (Elective)",
    },
    deskripsi: {
      id: "Kajian maqashid al-syari'ah, ushul fiqh, qawa'id fiqhiyyah, dan ijtihad kontemporer dalam perumusan norma hukum kenotariatan berkeadilan substantif.",
      en: "Investigation of Maqasid al-Shariah, legal maxims, and contemporary juristic reasoning in notarial legal justice.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS Filsafat Hukum Islam UAS UTS KUIS.pdf",
  },
  {
    id: "mk-17",
    kode: "HN268009005",
    semester: 2,
    sks: 2,
    nama: {
      id: "Cyber Administrasi Badan Hukum dan Bisnis Internasional (P)",
      en: "Cyber Administration of Legal Entities and International Business (Elective)",
    },
    deskripsi: {
      id: "Penyelenggaraan administrasi badan hukum digital, pendaftaran OSS, cyber notary, tanda tangan elektronik tersertifikasi, dan kepatuhan transaksi e-commerce internasional.",
      en: "Digital corporate administration, OSS systems, cyber notaries, digital signatures, and cross-border e-commerce compliance.",
    },
    folderUrl: "/pdf/rps/semester-2/RPS Cyber Administrasi Badan Hukum dan Bisnis Internasional UTS UAS KUIS.pdf",
  },
  // =========================================================================
  // SEMESTER 3
  // =========================================================================
  {
    id: "mk-18",
    kode: "HN268008016",
    semester: 3,
    sks: 2,
    nama: {
      id: "Teknik Pembuatan Akta PPAT",
      en: "Drafting of PPAT Deeds",
    },
    deskripsi: {
      id: "Praktik penyusunan 8 akta PPAT resmi: Akta Jual Beli (AJB), Tukar Menukar, Hibah, Inbreng, Pembagian Hak Bersama (APHB), Pemberian HT (APHT), SKMHT, dan Pemberian HGB/HP di atas HM.",
      en: "Authentic drafting of the 8 statutory PPAT deeds: Sale and Purchase (AJB), Exchange, Grant, Inbreng, Common Rights Division (APHB), Mortgage (APHT), SKMHT, and Sub-Lease.",
    },
    folderUrl: "/pdf/rps/semester-3/RPS Teknik pembuatan akta ppat - UTS UAS Kuis.pdf",
  },
  {
    id: "mk-19",
    kode: "HN268008013",
    semester: 3,
    sks: 3,
    nama: {
      id: "Teknik Pembuatan Akta Khusus (TPA III)",
      en: "Drafting of Special Deeds (TPA III)",
    },
    deskripsi: {
      id: "Pembuatan akta-akta khusus: akta perjanjian perkawinan, akta hibah wasiat/testamen, akta pengakuan utang perbankan sindikasi, fidusia, dan akta-akta hukum perdata internasional.",
      en: "Drafting of specialised notarial instruments: prenuptial agreements, wills/testaments, syndicated debt acknowledgements, and private international deeds.",
    },
    folderUrl: "/pdf/rps/semester-3/RPS Teknik Pembuatan Akta 3.pdf",
  },
  {
    id: "mk-20",
    kode: "HN268008015",
    semester: 3,
    sks: 2,
    nama: {
      id: "Pembuatan Kontrak Internasional",
      en: "International Contract Drafting",
    },
    deskripsi: {
      id: "Kaidah kontrak lintas batas negara, hukum yang berlaku (choice of law), pilihan yurisdiksi (choice of forum), klausula arbitrase internasional, dan perjanjian berbahasa Inggris.",
      en: "Cross-border contract principles, choice of law, dispute resolution clauses, international arbitration, and bilingual/English contract drafting.",
    },
    folderUrl: "/pdf/rps/semester-3/RPS MK pembuatan kontrak internasional - UTS UAS KUIS.docx.pdf",
  },
  {
    id: "mk-21",
    kode: "HN268007011",
    semester: 3,
    sks: 3,
    nama: {
      id: "Islam Disiplin Ilmu",
      en: "Islam as a Discipline of Knowledge",
    },
    deskripsi: {
      id: "Integrasi nilai-nilai keislaman, etika moral hukum Islam, keadilan substantif, kejujuran, dan amanah dalam mengemban amanat jabatan profesi notaris/PPAT.",
      en: "Integration of Islamic jurisprudence values, moral ethics, substantive justice, and integrity in the discharge of notarial and PPAT public offices.",
    },
    folderUrl: "/pdf/rps/semester-3/RPS Islam Disiplin Ilmu Uts Uas Kuis.pdf",
  },
  {
    id: "mk-22",
    kode: "HN268008014",
    semester: 3,
    sks: 1,
    nama: {
      id: "Laboratorium Akta 3",
      en: "Deed Drafting Laboratory 3",
    },
    deskripsi: {
      id: "Praktik klinis akta tingkat tinggi: penyusunan draf akta pembiayaan syariah, sindikasi, akta perjanjian perdata internasional, serta simulasi sengketa akta di peradilan.",
      en: "High-level clinical notarial practice: drafting Islamic financing deeds, syndicated loans, international private contracts, and evidentiary deed dispute simulation.",
    },
    folderUrl: "/pdf/rps/semester-3/RPS Laboratorium Akta 3 - UTS - UAS - Kuis - Rubrik Penilaian.pdf",
  },

];
