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
 *
 * DWIBAHASA: teks Indonesia adalah rumusan resmi dokumen sumber; teks Inggris
 * adalah terjemahan kerja, bukan versi resmi. Sel berisi angka, kode Sub-CPMK,
 * dan rentang nilai tetap string biasa karena sama di kedua bahasa.
 */

export const sorotAsesmen = [
  { angka: "8", label: { id: "Komponen halaman asesmen", en: "Assessment page components" } },
  { angka: "9", label: { id: "Teknik asesmen", en: "Assessment techniques" } },
  { angka: "4", label: { id: "CPL yang diukur", en: "Learning outcomes measured" } },
  { angka: "100%", label: { id: "Jumlah bobot butir penilaian", en: "Total item weight" } },
];

/** Pasal 1 — kedudukan halaman asesmen. */
export const kedudukan = [
  {
    id:
      "Halaman asesmen adalah bagian Rencana Pembelajaran Semester yang memuat rencana " +
      "pengukuran ketercapaian Sub-CPMK dan CPL pada suatu mata kuliah.",
    en:
      "The assessment page is the part of the Semester Learning Plan setting out how the " +
      "attainment of Sub-CLOs and learning outcomes will be measured in a given course.",
  },
  {
    id:
      "Pada Pedoman Akademik Tahun 2021, setiap RPS telah memuat baris Assessment yang " +
      "mencantumkan teknik penilaian, yaitu tes tulis, tes lisan, dan presentasi.",
    en:
      "Under the 2021 Academic Guidelines, every Semester Learning Plan already contained an " +
      "Assessment row listing the assessment techniques: written tests, oral tests, and " +
      "presentations.",
  },
  {
    id:
      "Pada Kurikulum OBE Tahun 2026, baris tersebut dikembangkan menjadi halaman asesmen yang " +
      "menjelaskan keterkaitan butir penilaian dengan Sub-CPMK, teknik, instrumen, rubrik, " +
      "bobot, dan bukti asesmen.",
    en:
      "Under the 2026 OBE curriculum, that row is expanded into an assessment page setting out " +
      "how each assessment item relates to the Sub-CLO, technique, instrument, rubric, weight, " +
      "and assessment evidence.",
  },
  {
    id:
      "Penilaian terhadap proses pembelajaran dilakukan dengan instrumen rubrik penilaian yang " +
      "ditetapkan dalam Rencana Pembelajaran Semester.",
    en:
      "The learning process is assessed using the rubric instruments laid down in the Semester " +
      "Learning Plan.",
  },
];

/** Pasal 2 — komponen halaman asesmen. */
export const komponenKolom = [
  { id: "No.", en: "No." },
  { id: "Komponen", en: "Component" },
  { id: "Uraian", en: "Description" },
];
export const komponenBaris = [
  [
    "1",
    { id: "Identitas mata kuliah", en: "Course identity" },
    {
      id: "Kode, nama, bobot sks, semester, dan dosen pengampu",
      en: "Code, title, credit weight, semester, and teaching staff",
    },
  ],
  [
    "2",
    { id: "Peta CPL–CPMK–Sub-CPMK", en: "CPL–CLO–Sub-CLO map" },
    {
      id: "Daftar CPL yang dibebankan beserta CPMK dan Sub-CPMK turunannya",
      en: "The learning outcomes assigned, with the CLOs and Sub-CLOs derived from them",
    },
  ],
  [
    "3",
    { id: "Butir penilaian", en: "Assessment items" },
    {
      id: "Rincian tugas, ujian, dan unjuk kerja yang akan dinilai",
      en: "Details of the assignments, examinations, and performances to be assessed",
    },
  ],
  [
    "4",
    { id: "Teknik dan instrumen", en: "Techniques and instruments" },
    {
      id: "Teknik penilaian dan instrumen yang digunakan pada setiap butir",
      en: "The assessment technique and instrument used for each item",
    },
  ],
  [
    "5",
    { id: "Rubrik", en: "Rubrics" },
    {
      id: "Rubrik holistik dan/atau analitik yang menjadi dasar penskoran",
      en: "The holistic and/or analytic rubrics on which scoring is based",
    },
  ],
  [
    "6",
    { id: "Bobot", en: "Weights" },
    {
      id: "Persentase setiap butir penilaian terhadap nilai akhir, berjumlah 100%",
      en: "Each item’s percentage of the final mark, totalling 100%",
    },
  ],
  [
    "7",
    { id: "Bukti asesmen", en: "Assessment evidence" },
    {
      id: "Jenis bukti yang dihimpun sebagai dasar penelusuran ketercapaian",
      en: "The kinds of evidence collected as the basis for tracing attainment",
    },
  ],
  [
    "8",
    { id: "Jadwal", en: "Schedule" },
    {
      id: "Minggu pelaksanaan penilaian dan batas waktu umpan balik",
      en: "The week in which assessment takes place and the deadline for feedback",
    },
  ],
];

/** Tabel 1 — teknik asesmen, instrumen, dan penggunaannya. */
export const teknikKolom = [
  { id: "Teknik", en: "Technique" },
  { id: "Instrumen", en: "Instrument" },
  { id: "Penggunaan Utama", en: "Primary Use" },
  { id: "CPL yang Diukur", en: "Outcomes Measured" },
];
export const teknikBaris = [
  [
    { id: "Tes tulis", en: "Written test" },
    {
      id: "Soal esai berbasis kasus, kunci penskoran analitis",
      en: "Case-based essay questions with an analytic scoring key",
    },
    {
      id: "UTS dan UAS mata kuliah teori",
      en: "Midterm and final examinations in theory courses",
    },
    "CPL 2",
  ],
  [
    { id: "Tes lisan", en: "Oral test" },
    {
      id: "Panduan tanya jawab dan rubrik penilaian lisan",
      en: "Question-and-answer guide and oral assessment rubric",
    },
    {
      id: "Responsi, ujian proposal, ujian tesis",
      en: "Response sessions, proposal examination, thesis examination",
    },
    "CPL 2, CPL 4",
  ],
  [
    { id: "Presentasi", en: "Presentation" },
    { id: "Rubrik presentasi dan diskusi", en: "Presentation and discussion rubric" },
    {
      id: "Seminar kelas, presentasi portofolio",
      en: "Class seminars, portfolio presentations",
    },
    "CPL 2, CPL 4",
  ],
  [
    { id: "Portofolio", en: "Portfolio" },
    {
      id: "Rubrik portofolio dan daftar kelengkapan",
      en: "Portfolio rubric and completeness checklist",
    },
    {
      id: "Himpunan minuta akta dan laporan sepanjang semester",
      en: "A collection of deed minutes and reports across the semester",
    },
    "CPL 3",
  ],
  [
    { id: "Unjuk kerja (praktik)", en: "Performance (practice)" },
    {
      id: "Rubrik analitik *legal drafting* akta",
      en: "Analytic rubric for legal drafting of deeds",
    },
    {
      id: "Praktikum Laboratorium Kenotariatan, ujian praktik",
      en: "Notarial Laboratory practicum, practical examinations",
    },
    "CPL 3",
  ],
  [
    { id: "Projek", en: "Project" },
    {
      id: "Rubrik projek dan lembar penilaian kelompok",
      en: "Project rubric and group assessment sheet",
    },
    {
      id: "Penyusunan paket dokumen hukum secara berkelompok",
      en: "Preparing a package of legal documents as a group",
    },
    "CPL 3",
  ],
  [
    { id: "Observasi", en: "Observation" },
    { id: "Rubrik keaktifan dan partisipasi", en: "Engagement and participation rubric" },
    {
      id: "Diskusi kelas, simulasi, *roleplay*",
      en: "Class discussion, simulation, role play",
    },
    "CPL 1, CPL 2",
  ],
  [
    { id: "Studi kasus", en: "Case study" },
    { id: "Rubrik analisis kasus", en: "Case analysis rubric" },
    {
      id: "*Case method* dan anotasi putusan",
      en: "Case method and annotation of court decisions",
    },
    "CPL 2, CPL 3",
  ],
  [
    { id: "Refleksi tertulis", en: "Written reflection" },
    { id: "Panduan refleksi dan rubrik", en: "Reflection guide and rubric" },
    {
      id: "Refleksi etika jabatan dan nilai keislaman",
      en: "Reflection on professional ethics and Islamic values",
    },
    "CPL 1",
  ],
];

/** Tabel 2 — teknik asesmen utama untuk setiap CPL. */
export const pemetaanCpl = [
  {
    tanda: "1",
    judul: {
      id: "CPL 1 — Etika religius, moral, dan tanggung jawab sosial",
      en: "CPL 1 — Religious and moral ethics and social responsibility",
    },
    keterangan: {
      id: "Observasi partisipasi, refleksi tertulis, penilaian sikap pada praktik dan magang.",
      en:
        "Observation of participation, written reflection, and assessment of conduct during " +
        "practice and internship.",
    },
    rincian: [
      { id: "Status bukti: langsung dan penunjang", en: "Evidence status: direct and supporting" },
    ],
  },
  {
    tanda: "2",
    judul: {
      id: "CPL 2 — Penguasaan ilmu dan teori hukum kenotariatan serta berpikir kritis",
      en: "CPL 2 — Command of notarial law and theory, and critical thinking",
    },
    keterangan: {
      id: "Tes tulis berbasis kasus, tes lisan, studi kasus, presentasi seminar.",
      en: "Case-based written tests, oral tests, case studies, and seminar presentations.",
    },
    rincian: [{ id: "Status bukti: langsung", en: "Evidence status: direct" }],
  },
  {
    tanda: "3",
    judul: {
      id: "CPL 3 — Perancangan akta autentik dan etika jabatan Notaris/PPAT",
      en: "CPL 3 — Drafting authentic deeds and the professional ethics of the Notary/PPAT",
    },
    keterangan: {
      id:
        "Portofolio minuta akta, unjuk kerja praktik, ujian praktik *drafting*, audit legal dan " +
        "etik.",
      en:
        "Portfolio of deed minutes, practical performance, practical drafting examinations, and " +
        "legal and ethical audit.",
    },
    rincian: [{ id: "Status bukti: langsung", en: "Evidence status: direct" }],
  },
  {
    tanda: "4",
    judul: {
      id: "CPL 4 — Penelitian interdisipliner dan publikasi ilmiah",
      en: "CPL 4 — Interdisciplinary research and scholarly publication",
    },
    keterangan: {
      id: "Proposal dan naskah tesis, artikel ilmiah, presentasi seminar hasil.",
      en: "Thesis proposal and manuscript, scholarly articles, and results seminar presentations.",
    },
    rincian: [{ id: "Status bukti: langsung", en: "Evidence status: direct" }],
  },
];

export const catatanBukti = [
  {
    id:
      "Sertifikat kegiatan ilmiah, sertifikat Kuliah Kerja Lapangan, dan sertifikat keanggotaan " +
      "organisasi profesi berkedudukan sebagai bukti penunjang dan tidak dapat menjadi " +
      "satu-satunya bukti ketercapaian CPL.",
    en:
      "Certificates from academic events, field study certificates, and professional membership " +
      "certificates count as supporting evidence and cannot serve as the sole evidence of " +
      "learning outcome attainment.",
  },
];

/** Pasal 5 — keselarasan konstruktif. */
export const keselarasan = [
  {
    id: "Setiap Sub-CPMK wajib diukur oleh sekurang-kurangnya satu butir penilaian.",
    en: "Every Sub-CLO must be measured by at least one assessment item.",
  },
  {
    id:
      "Setiap butir penilaian wajib menunjuk kepada Sub-CPMK tertentu; tidak boleh ada butir " +
      "penilaian yang tidak berpangkal pada Sub-CPMK.",
    en:
      "Every assessment item must point to a specific Sub-CLO; no assessment item may exist " +
      "that is not grounded in a Sub-CLO.",
  },
  {
    id:
      "Kata kerja operasional pada Sub-CPMK menentukan teknik penilaian; Sub-CPMK dengan kata " +
      "kerja menyusun atau merancang wajib dinilai melalui unjuk kerja atau portofolio, bukan " +
      "semata tes tulis.",
    en:
      "The operational verb in the Sub-CLO determines the assessment technique; a Sub-CLO using " +
      "the verb to compose or to design must be assessed through performance or portfolio, not " +
      "by written test alone.",
  },
  {
    id: "Tingkat kognitif penilaian mengikuti trajektori Bloom per semester.",
    en: "The cognitive level of assessment follows a Bloom trajectory across the semesters.",
  },
];

export const bloomKolom = [
  { id: "Semester", en: "Semester" },
  { id: "Tingkat Kognitif Penilaian", en: "Cognitive Level of Assessment" },
];
export const bloomBaris = [
  [{ id: "Semester I", en: "Semester I" }, "C2 – C4"],
  [{ id: "Semester II", en: "Semester II" }, "C3 – C5"],
  [{ id: "Semester III", en: "Semester III" }, "C4 – C6"],
  [{ id: "Semester IV", en: "Semester IV" }, "C5 – C6"],
];

/** Pasal 6 — ketentuan rubrik. */
export const ketentuanRubrik = [
  {
    id:
      "Rubrik holistik digunakan untuk menilai ketercapaian CPMK secara menyeluruh dengan " +
      "delapan tingkatan predikat, yaitu E, D, CD, C, BC, B, AB, dan A.",
    en:
      "Holistic rubrics are used to assess CLO attainment as a whole, across eight descriptor " +
      "levels: E, D, CD, C, BC, B, AB, and A.",
  },
  {
    id:
      "Rubrik analitik digunakan untuk menilai unjuk kerja yang memiliki beberapa kriteria " +
      "terpisah, terutama penyusunan minuta akta.",
    en:
      "Analytic rubrics are used to assess performance with several separate criteria, above " +
      "all the drafting of deed minutes.",
  },
  {
    id:
      "Rubrik analitik *legal drafting* akta berlaku seragam pada seluruh mata kuliah rumpun " +
      "Teknik Pembuatan Akta dan Laboratorium Akta, dengan lima kriteria sebagaimana Lampiran B.",
    en:
      "The analytic rubric for legal drafting of deeds applies uniformly across all courses in " +
      "the Deed Drafting cluster and the Deed Drafting Laboratory, with the five criteria set " +
      "out in Annex B.",
  },
  {
    id: "Rubrik wajib dibagikan kepada mahasiswa pada awal semester bersama kontrak perkuliahan.",
    en:
      "Rubrics must be shared with students at the start of the semester together with the " +
      "course contract.",
  },
  {
    id:
      "Dosen pengampu mata kuliah serumpun melakukan kalibrasi penilaian sekurang-kurangnya " +
      "sekali dalam satu semester agar penilaian unjuk kerja seragam antardosen.",
    en:
      "Lecturers teaching courses in the same cluster calibrate their marking at least once per " +
      "semester so that performance assessment is consistent between them.",
  },
];

/** Pasal 7 — bobot dan rekonsiliasi. */
export const bobotRekonsiliasi = [
  {
    id: "Jumlah bobot seluruh butir penilaian pada halaman asesmen adalah 100%.",
    en: "The weights of all assessment items on the assessment page total 100%.",
  },
  {
    id:
      "Bobot mingguan pada tabel rencana pembelajaran wajib direkonsiliasi dengan bobot " +
      "komponen penilaian, sehingga jumlah keduanya sama-sama 100%.",
    en:
      "The weekly weights in the learning plan table must be reconciled with the assessment " +
      "component weights so that both total 100%.",
  },
  {
    id:
      "Bobot setiap CPMK terhadap nilai akhir dicantumkan secara eksplisit agar ketercapaian " +
      "CPL dapat dihitung tanpa penafsiran tambahan.",
    en:
      "Each CLO’s weight in the final mark is stated explicitly so that learning outcome " +
      "attainment can be calculated without further interpretation.",
  },
];

/** Pasal 8 — ketentuan penulisan. */
export const ketentuanPenulisan = [
  {
    id:
      "Halaman asesmen ditulis pada Rencana Pembelajaran Semester dengan format baku " +
      "Form/RPS/SA-LP3M/SPMI.",
    en:
      "The assessment page is written into the Semester Learning Plan using the standard form " +
      "Form/RPS/SA-LP3M/SPMI.",
  },
  {
    id:
      "Halaman asesmen diserahkan bersama Rencana Pembelajaran Semester paling lambat 14 hari " +
      "sebelum perkuliahan dimulai.",
    en:
      "The assessment page is submitted together with the Semester Learning Plan no later than " +
      "14 days before teaching begins.",
  },
  {
    id: "Halaman asesmen ditelaah Koordinator Mata Kuliah dan disetujui Ketua Program Studi.",
    en:
      "The assessment page is reviewed by the Course Coordinator and approved by the Head of " +
      "the Study Programme.",
  },
  {
    id:
      "Salinan digital halaman asesmen diunggah ke LMS SINAU UNISSULA sebagai rujukan mahasiswa.",
    en:
      "A digital copy of the assessment page is uploaded to the SINAU UNISSULA learning " +
      "management system for students to consult.",
  },
];

/** Lampiran A — contoh halaman asesmen mata kuliah. */
export const contohKeterangan = {
  id:
    "Contoh diisi dengan data mata kuliah Teknik Pembuatan Akta Khusus (TPA III), " +
    "HN268008013, 3 sks (teori 1 / praktik 2), Semester III, CPL 3 sebagai capaian utama dan " +
    "CPL 1 sebagai capaian penunjang.",
  en:
    "The example uses the course Drafting of Special Deeds (TPA III), HN268008013, 3 credits " +
    "(1 theory / 2 practice), Semester III, with CPL 3 as the principal outcome and CPL 1 as a " +
    "supporting outcome.",
};

export const contohKolom = [
  { id: "No.", en: "No." },
  { id: "Butir Penilaian", en: "Assessment Item" },
  { id: "Bobot (%)", en: "Weight (%)" },
  { id: "Sub-CPMK yang Diukur", en: "Sub-CLOs Measured" },
  { id: "Teknik", en: "Technique" },
  { id: "Instrumen", en: "Instrument" },
  { id: "Bukti Asesmen", en: "Assessment Evidence" },
];
export const contohBaris = [
  [
    "1",
    { id: "Partisipasi dan diskusi kelas", en: "Participation and class discussion" },
    "10",
    "Sub-CPMK 1.1–1.3",
    { id: "Observasi", en: "Observation" },
    { id: "Rubrik keaktifan", en: "Engagement rubric" },
    { id: "Catatan observasi", en: "Observation records" },
  ],
  [
    "2",
    {
      id: "Tugas terstruktur dan portofolio legal drafting",
      en: "Structured assignments and legal drafting portfolio",
    },
    "25",
    "Sub-CPMK 2.1–3.3",
    { id: "Portofolio", en: "Portfolio" },
    { id: "Rubrik analitik drafting", en: "Analytic drafting rubric" },
    { id: "Minuta akta", en: "Deed minutes" },
  ],
  [
    "3",
    { id: "Unjuk kerja praktik laboratorium", en: "Laboratory practical performance" },
    "20",
    "Sub-CPMK 2.2, 2.4, 3.1",
    { id: "Unjuk kerja", en: "Performance" },
    { id: "Rubrik unjuk kerja", en: "Performance rubric" },
    { id: "Lembar penilaian praktik", en: "Practical assessment sheet" },
  ],
  [
    "4",
    { id: "Ujian Tengah Semester", en: "Midterm Examination" },
    "20",
    "Sub-CPMK 1.1–2.3",
    { id: "Tes tulis dan ujian praktik", en: "Written test and practical examination" },
    { id: "Kunci penskoran dan rubrik", en: "Scoring key and rubric" },
    { id: "Berkas ujian", en: "Examination scripts" },
  ],
  [
    "5",
    { id: "Ujian Akhir Semester", en: "Final Examination" },
    "25",
    "Sub-CPMK 2.4–4.1",
    { id: "Tes tulis dan ujian praktik", en: "Written test and practical examination" },
    { id: "Kunci penskoran dan rubrik", en: "Scoring key and rubric" },
    { id: "Berkas ujian dan portofolio", en: "Examination scripts and portfolio" },
  ],
  ["", { id: "Jumlah", en: "Total" }, "100", "", "", "", ""],
];

export const contohCatatan = {
  id: "Bobot CPMK terhadap nilai akhir: CPMK 1 = 18%; CPMK 2 = 38%; CPMK 3 = 30%; CPMK 4 = 14%.",
  en: "CLO weights in the final mark: CLO 1 = 18%; CLO 2 = 38%; CLO 3 = 30%; CLO 4 = 14%.",
};

/** Lampiran B — rubrik analitik penilaian legal drafting akta. */
export const rubrikKolom = [
  { id: "Kriteria (bobot)", en: "Criterion (weight)" },
  { id: "Sangat Baik (85–100)", en: "Excellent (85–100)" },
  { id: "Baik (70–84)", en: "Good (70–84)" },
  { id: "Cukup (55–69)", en: "Satisfactory (55–69)" },
  { id: "Kurang (< 55)", en: "Poor (< 55)" },
];
export const rubrikBaris = [
  [
    {
      id: "Ketepatan dasar hukum dan kewenangan (20%)",
      en: "Accuracy of legal basis and authority (20%)",
    },
    {
      id: "Dasar hukum tepat, mutakhir, kewenangan akurat",
      en: "Legal basis accurate and current; authority correctly identified",
    },
    {
      id: "Dasar hukum tepat, kurang mutakhir pada satu bagian",
      en: "Legal basis accurate but not current in one respect",
    },
    {
      id: "Sebagian tepat; batas kewenangan belum diperhatikan",
      en: "Partly accurate; limits of authority not observed",
    },
    {
      id: "Dasar hukum keliru atau kewenangan dilampaui",
      en: "Legal basis mistaken or authority exceeded",
    },
  ],
  [
    { id: "Kelengkapan anatomi akta (20%)", en: "Completeness of deed structure (20%)" },
    {
      id: "Awal, komparisi, premisse, isi, dan akhir akta lengkap dan berurutan",
      en: "Opening, appearance clause, recitals, body, and closing all present and in order",
    },
    {
      id: "Seluruh bagian ada, kekurangan minor pada satu unsur",
      en: "All parts present, with a minor shortcoming in one element",
    },
    {
      id: "Ada bagian hilang atau tidak berurutan",
      en: "A part is missing or out of order",
    },
    { id: "Anatomi akta tidak terbentuk", en: "The structure of the deed is not formed" },
  ],
  [
    { id: "Ketepatan klausul substantif (25%)", en: "Accuracy of substantive clauses (25%)" },
    {
      id: "Klausul esensial lengkap, presisi, sesuai kehendak para pihak",
      en: "Essential clauses complete, precise, and matching the parties’ intent",
    },
    {
      id: "Klausul lengkap, rumusan masih dapat dipertajam",
      en: "Clauses complete, though the wording could be sharpened",
    },
    {
      id: "Beberapa klausul tidak ada atau ambigu",
      en: "Some clauses are missing or ambiguous",
    },
    {
      id: "Klausul esensial tidak ada atau bertentangan dengan hukum",
      en: "Essential clauses are absent or contrary to law",
    },
  ],
  [
    {
      id: "Bahasa hukum dan teknik penulisan (20%)",
      en: "Legal language and drafting technique (20%)",
    },
    {
      id: "Bahasa lugas; renvoi, angka-huruf, dan penomoran benar seluruhnya",
      en: "Language plain; renvoi, figures in words, and numbering all correct",
    },
    {
      id: "Bahasa baik dengan satu sampai dua kesalahan teknik",
      en: "Language sound, with one or two technical errors",
    },
    {
      id: "Bahasa berbelit; beberapa kesalahan teknik",
      en: "Language convoluted; several technical errors",
    },
    { id: "Bahasa tidak dapat dipahami", en: "The language cannot be understood" },
  ],
  [
    {
      id: "Kepatuhan etik dan mitigasi risiko (15%)",
      en: "Ethical compliance and risk mitigation (15%)",
    },
    {
      id: "Bebas konflik kepentingan, memuat klausul mitigatif",
      en: "Free of conflicts of interest and containing mitigating clauses",
    },
    {
      id: "Patuh secara etik, mitigasi belum menyeluruh",
      en: "Ethically compliant, though mitigation is not comprehensive",
    },
    {
      id: "Terdapat potensi pelanggaran etik yang belum disadari",
      en: "A potential ethical breach is present but unrecognised",
    },
    {
      id: "Melanggar kode etik atau memuat klausul yang berpotensi disalahgunakan",
      en: "Breaches the code of ethics or contains clauses open to misuse",
    },
  ],
];

/** Teks halaman Asesmen. */
export const halaman = {
  meta: {
    title: { id: "Asesmen | MKn UNISSULA", en: "Assessment | MKn UNISSULA" },
    description: {
      id:
        "Ketentuan penyusunan halaman asesmen Rencana Pembelajaran Semester Magister " +
        "Kenotariatan UNISSULA — teknik asesmen, pemetaan CPL, rubrik, dan bukti asesmen.",
      en:
        "Provisions for drawing up the assessment page of the Semester Learning Plan at " +
        "UNISSULA Master of Notarial Law — assessment techniques, outcome mapping, rubrics, and " +
        "assessment evidence.",
    },
  },
  judul: { id: "Asesmen", en: "Assessment" },
  intro: {
    id:
      "Halaman asesmen merupakan bagian wajib Rencana Pembelajaran Semester. Ketentuan berikut " +
      "mengatur cara setiap mata kuliah merencanakan pengukuran Sub-CPMK dan CPL, mulai dari " +
      "pemilihan teknik, penyusunan rubrik, penetapan bobot, hingga bukti asesmen yang dihimpun.",
    en:
      "The assessment page is a required part of the Semester Learning Plan. The provisions " +
      "below govern how each course plans the measurement of Sub-CLOs and learning outcomes, " +
      "from choosing techniques and drawing up rubrics to setting weights and collecting " +
      "assessment evidence.",
  },
  seksi: {
    kedudukan: { id: "Kedudukan Halaman Asesmen", en: "Status of the Assessment Page" },
    komponen: {
      id: "Delapan Komponen Halaman Asesmen",
      en: "Eight Components of the Assessment Page",
    },
    komponenKeterangan: {
      id: "Setiap halaman asesmen sekurang-kurangnya memuat komponen berikut.",
      en: "Every assessment page contains at least the following components.",
    },
    teknik: { id: "Teknik dan Instrumen Asesmen", en: "Assessment Techniques and Instruments" },
    teknikKeterangan: {
      id:
        "Sembilan teknik yang digunakan pada Kurikulum OBE Tahun 2026 beserta instrumen dan " +
        "penggunaannya.",
      en:
        "The nine techniques used under the 2026 OBE curriculum, with their instruments and " +
        "uses.",
    },
    pemetaan: {
      id: "Pemetaan Teknik Asesmen terhadap CPL",
      en: "Mapping Assessment Techniques to Learning Outcomes",
    },
    pemetaanKeterangan: {
      id:
        "Teknik asesmen utama yang digunakan untuk mengukur setiap Capaian Pembelajaran " +
        "Lulusan.",
      en: "The principal assessment techniques used to measure each Intended Learning Outcome.",
    },
    keselarasan: { id: "Keselarasan Konstruktif", en: "Constructive Alignment" },
    keselarasanKeterangan: {
      id: "Kaidah yang menjaga agar penilaian benar-benar mengukur capaian yang dirumuskan.",
      en:
        "The rules that keep assessment genuinely measuring the outcomes that have been " +
        "formulated.",
    },
    rubrik: { id: "Ketentuan Rubrik", en: "Rubric Provisions" },
    bobot: { id: "Bobot dan Rekonsiliasi", en: "Weights and Reconciliation" },
    penulisan: { id: "Ketentuan Penulisan", en: "Drafting Provisions" },
    contoh: {
      id: "Contoh Halaman Asesmen Mata Kuliah",
      en: "Example of a Course Assessment Page",
    },
    rubrikAnalitik: {
      id: "Rubrik Analitik Penilaian Legal Drafting Akta",
      en: "Analytic Rubric for Assessing the Legal Drafting of Deeds",
    },
    rubrikAnalitikKeterangan: {
      id:
        "Berlaku seragam pada seluruh mata kuliah rumpun Teknik Pembuatan Akta dan Laboratorium " +
        "Akta.",
      en:
        "Applies uniformly to all courses in the Deed Drafting cluster and the Deed Drafting " +
        "Laboratory.",
    },
  },
  namaDokumen: { id: "Materi Halaman Asesmen", en: "Assessment Page Material" },
};
