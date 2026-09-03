/**
 * Profil Lulusan — Program Studi Magister Kenotariatan UNISSULA.
 *
 * SUMBER: dokumen resmi prodi "1 Profil Lulusan.docx" yang diterima dari klien.
 * Teks disalin verbatim, bukan parafrase.
 *
 * DWIBAHASA: teks Indonesia verbatim dari dokumen sumber; teks Inggris adalah
 * terjemahan kerja untuk pembaca internasional. Versi Indonesia tetap rujukan
 * resmi bila terjadi perbedaan penafsiran.
 */

export const profilLulusanIntro = {
  id:
    "Profil lulusan Program Magister Kenotariatan UNISSULA adalah menjadi Magister " +
    "Kenotariatan yang bertaqwa kepada Allah SWT, berakhlak mulia, berintegritas, dan " +
    "profesional dalam menjalankan jabatan publik, serta memiliki kompetensi akademik dan " +
    "praktis di bidang kenotariatan dan pertanahan. Lulusan Magister Kenotariatan UNISSULA " +
    "berorientasi pada profesionalisme berbasis *Outcome-Based Education* (OBE), adaptif " +
    "terhadap perkembangan regulasi dan transformasi digital layanan hukum, serta mampu " +
    "berkontribusi secara nasional dan global tanpa meninggalkan identitas keislaman dan " +
    "nilai-nilai perjuangan UNISSULA.",
  en: 
    "The graduate profile of the UNISSULA Master of Notarial Law programme is a Master " +
    "of Notarial Law who is devoted to Allah SWT, of noble character, of integrity, and " +
    "professional in holding public office, with both academic and practical competence " +
    "in notarial law and land law. Graduates of the UNISSULA Master of Notarial Law " +
    "programme are oriented towards professionalism grounded in Outcome-Based Education " +
    "(OBE), adaptive to regulatory change and to the digital transformation of legal " +
    "services, and able to contribute nationally and globally without relinquishing " +
    "their Islamic identity and the founding values of UNISSULA.",
};

/** Tabel 1 pada dokumen sumber — Profil Lulusan dan deskripsinya. */
export const mainProfiles = [
  {
    code: "PL-1",
    title: {
      id: "Notaris dan atau Pejabat Pembuat Akta Tanah (PPAT)",
      en: "Notary and/or Land Deed Official (PPAT)",
    },
    desc: {
      id:
        "Lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA yang " +
        "memiliki kemampuan dan keahlian menerapkan ilmu hukum kenotariatan dalam membuat " +
        "akta autentik berdasarkan peraturan dan etika jabatan yang dilandasi nilai-nilai " +
        "kebaikan dan kejujuran, serta disesuaikan dengan kebutuhan nasional dan internasional.",
      en: 
        "Graduates of the Master’s (S2) Programme in Notarial Law, Faculty of Law, " +
        "UNISSULA who possess the ability and expertise to apply notarial law in drawing " +
        "up authentic deeds in accordance with the regulations and professional ethics of " +
        "the office, grounded in the values of virtue and honesty, and attuned to national " +
        "and international needs.",
    },
  },
  {
    code: "PL-2",
    title: { id: "Aparatur Negara", en: "State Officials" },
    desc: {
      id:
        "Lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA yang " +
        "mampu mengelola penyelenggaraan pemerintahan dan pelayanan masyarakat, baik sebagai " +
        "eksekutif, legislatif dan yudikatif yang dijiwai nilai keadilan Islam.",
      en: 
        "Graduates of the Master’s (S2) Programme in Notarial Law, Faculty of Law, " +
        "UNISSULA who are able to administer governance and public service, whether in " +
        "executive, legislative, or judicial capacities, imbued with the Islamic value of " +
        "justice.",
    },
  },
  {
    code: "PL-3",
    title: { id: "Akademisi", en: "Academics" },
    desc: {
      id:
        "Lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA yang " +
        "mampu mengembangkan profesi sebagai dosen dan/atau peneliti, menguasai konsep " +
        "teoritis ilmu hukum kenotariatan, menganalisis teori serta memformulasikan " +
        "penyelesaian masalah konseptual dan prosedural dengan mengintegrasikan ilmu " +
        "pengetahuan modern yang berlandaskan kejujuran dan keadilan.",
      en: 
        "Graduates of the Master’s (S2) Programme in Notarial Law, Faculty of Law, " +
        "UNISSULA who are able to build a career as lecturers and/or researchers, to " +
        "master the theoretical concepts of notarial law, to analyse theory, and to " +
        "formulate solutions to conceptual and procedural problems by integrating modern " +
        "scholarship grounded in honesty and justice.",
    },
  },
  {
    code: "PL-4",
    title: { id: "Penggiat Masyarakat", en: "Community Advocates" },
    desc: {
      id:
        "Lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA yang " +
        "mampu menjadi motivator, inspirator dan dinamisator dalam menyelesaikan " +
        "persoalan-persoalan hukum kenotariatan dalam masyarakat yang didasari nilai " +
        "kejujuran, keadilan dan kebaikan.",
      en: 
        "Graduates of the Master’s (S2) Programme in Notarial Law, Faculty of Law, " +
        "UNISSULA who are able to act as motivators, sources of inspiration, and driving " +
        "forces in resolving notarial law problems within society, grounded in the values " +
        "of honesty, justice, and virtue.",
    },
  },
];

/** Teks halaman Profil Lulusan. */
export const halaman = {
  meta: {
    title: { id: "Profil Lulusan | MKn UNISSULA", en: "Graduate Profiles | MKn UNISSULA" },
    description: {
      id:
        "Profil lulusan Program Studi Magister Kenotariatan (MKn) UNISSULA — " +
        "Notaris/PPAT, Aparatur Negara, Akademisi, dan Penggiat Masyarakat.",
      en:
        "Graduate profiles of the UNISSULA Master of Notarial Law (MKn) Study Programme " +
        "— Notary/PPAT, State Officials, Academics, and Community Advocates.",
    },
  },
  judul: { id: "Profil Lulusan", en: "Graduate Profiles" },
  judulSeksi: { id: "Empat Profil Utama", en: "Four Principal Profiles" },
};
