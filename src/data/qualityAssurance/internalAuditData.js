/**
 * Laporan Audit Mutu Internal (AMI) Program Studi Magister Kenotariatan UNISSULA.
 *
 * SUMBER: "Laporan Audit Mutu Internal (AMI) Tahun 2023", "... Tahun 2024", dan
 * "... Tahun 2025", beserta lampiran formulir Temuan Audit Mutu Internal LP3M
 * UNISSULA (FORM/SA-LP3M/LP3M/0019).
 *
 * PRINSIP: setiap teks yang tampil disalin dari laporan. Yang dirapikan hanya
 * huruf kapital, tanda baca, ejaan nama bulan ("Nopember", "Pebruari"), dan
 * salah ketik yang tidak mengubah isi ("mencantukan", "penilain",
 * "impementasi"). Nama lembaga, angka, dan istilah dibiarkan seperti aslinya.
 *
 * CATATAN:
 *   - Nomor siklus di sampul tidak ditampilkan karena tidak berurutan
 *     (2023: III, 2024: I, 2025: V); tahun akademiknya ditampilkan.
 *   - AMI 2024: tabel ketidaksesuaian di laporan menulis hasil tracer studi
 *     "belum" disosialisasikan, sedangkan formulir temuan menulis "telah". Yang
 *     dipakai tabel laporan, sejalan dengan saran perbaikannya.
 *   - AMI 2024: pilihan pada bagian Kesimpulan Audit tidak dicentang, sehingga
 *     tidak ditampilkan.
 *   - AMI 2024: "kanwil BPR ATR" disalin apa adanya; kemungkinan maksudnya
 *     BPN/ATR, mohon dikonfirmasi.
 *   - AMI 2024: jumlah profil lulusan, beban 56 sks, dan rencana berlaku 2025
 *     adalah kondisi saat audit; berbeda dengan Kurikulum OBE 2026 di situs.
 *   - AMI 2025: halaman identitas, lingkup, dan temuan tertutup blok hitam pada
 *     berkas yang diterima. Yang ditampilkan hanya sampul dan kesimpulan butir
 *     b–d yang terbaca; butir a dan tanggal audit tidak terbaca.
 *   - Status verifikasi pada formulir LP3M masih kosong, jadi tidak ada temuan
 *     yang dinyatakan selesai.
 */

export const KATEGORI_TEMUAN = {
  OB: { id: "Observasi", en: "Observation" },
  KTS_MINOR: { id: "KTS minor", en: "Minor nonconformity" },
};

const STANDAR = {
  kompetensi: { id: "Kompetensi lulusan", en: "Graduate competence" },
  isi: { id: "Isi pembelajaran", en: "Learning content" },
  proses: { id: "Proses pembelajaran", en: "Learning process" },
  penilaian: { id: "Penilaian pembelajaran", en: "Learning assessment" },
};

const LABEL = {
  unit: { id: "Unit", en: "Unit" },
  ketuaUnit: { id: "Ketua unit", en: "Head of unit" },
  ketuaAuditor: { id: "Ketua tim auditor", en: "Lead auditor" },
  anggotaAuditor: { id: "Anggota auditor", en: "Audit team member" },
  ta: { id: "Tahun akademik", en: "Academic year" },
  tanggal: { id: "Tanggal audit", en: "Audit date" },
  lingkup: { id: "Lingkup audit", en: "Audit scope" },
};

const YA = { id: "Ya", en: "Yes" };
const OBSERVASI = { id: "Observasi", en: "Observation" };

/** Kesimpulan Audit, kalimat pada formulir laporan. */
const PERNYATAAN = {
  a: {
    id: "Sistem dokumentasi cukup lengkap dan terstruktur untuk mendukung pelaksanaan Sistem Penjaminan Mutu Internal Unit",
    en: "The documentation system is sufficiently complete and structured to support the implementation of the unit's Internal Quality Assurance System",
  },
  b: {
    id: "Unit telah menjalankan Sistem Penjaminan Mutu Internal secara konsisten dan berkelanjutan",
    en: "The unit has run the Internal Quality Assurance System consistently and continuously",
  },
  c: {
    id: "Temuan pada periode audit ini adalah",
    en: "Findings in this audit period are",
  },
  d: {
    id: "Ka. Unit menunjukkan komitmennya terhadap implementasi Sistem Penjaminan Mutu Internal untuk tercapainya kepuasan stakeholder",
    en: "The head of unit shows commitment to implementing the Internal Quality Assurance System to achieve stakeholder satisfaction",
  },
};

/** II. Tujuan Audit — kalimat sama pada laporan 2023 dan 2024. */
export const tujuanAudit = [
  {
    id: "Memastikan kesesuaian arah dan pelaksanaan penjaminan mutu unit terhadap Dokumen Mutu Perguruan Tinggi",
    en: "Ensure the direction and implementation of the unit's quality assurance conform to the University Quality Documents",
  },
  {
    id: "Memastikan kesiapan unit dalam pengembangan Tugas Pokok dan Fungsi",
    en: "Ensure the unit's readiness in developing its main duties and functions",
  },
  { id: "Memetakan peluang peningkatan mutu", en: "Map opportunities for quality improvement" },
  { id: "Menyadari adanya ancaman resiko", en: "Recognise the presence of risk threats" },
];

export const siklusAudit = [
  {
    tahun: "2025",
    ketuaAuditor: "Agustin Handayani, S.Psi, M.Si",
    ringkasanTemuan: OBSERVASI,
    identitas: [
      { label: LABEL.unit, value: "Prodi S2 Kenotariatan" },
      { label: LABEL.ketuaUnit, value: "Dr. Nanang Sri Darmadi, S.H, M.H" },
      { label: LABEL.ketuaAuditor, value: "Agustin Handayani, S.Psi, M.Si" },
      { label: LABEL.ta, value: "2024-2025" },
    ],
    praktikBaik: [],
    temuan: [],
    kesimpulan: [
      { pernyataan: PERNYATAAN.b, jawaban: YA },
      { pernyataan: PERNYATAAN.c, jawaban: OBSERVASI },
      { pernyataan: PERNYATAAN.d, jawaban: YA },
    ],
    catatan: {
      id: "Rincian praktik baik dan temuan Audit Mutu Internal 2025 akan segera ditambahkan.",
      en: "Details of the good practices and findings of the 2025 Internal Quality Audit will be added soon.",
    },
  },
  {
    tahun: "2024",
    ketuaAuditor: "Dr. Apt. Naniek Widyaningrum, M.Sc.",
    ringkasanTemuan: { id: "2 observasi, 1 KTS minor", en: "2 observations, 1 minor nonconformity" },
    identitas: [
      { label: LABEL.unit, value: "S2 Kenotariatan" },
      { label: LABEL.ketuaUnit, value: "Dr. Nanang Sri Darmadi, S.H., M.H." },
      { label: LABEL.ketuaAuditor, value: "Dr. Apt. Naniek Widyaningrum, M.Sc." },
      { label: LABEL.anggotaAuditor, value: "Dr. Mochamad Abdul Basir, M.Pd" },
      { label: LABEL.ta, value: "2023-2024" },
      { label: LABEL.tanggal, value: { id: "Kamis, 21 November 2024", en: "Thursday, 21 November 2024" } },
      {
        label: LABEL.lingkup,
        value: {
          id: "Kompetensi lulusan; isi pembelajaran; proses pembelajaran; penilaian proses pembelajaran",
          en: "Graduate competence; learning content; learning process; assessment of the learning process",
        },
      },
    ],
    praktikBaik: [
      {
        standar: STANDAR.kompetensi,
        butir: [
          {
            id: "Sudah mempunyai update profil lulusan = 4 (notaris PPAT, aparatur penegak hukum, birokrasi, penggiat masyarakat); dan mempunyai 4 CPL",
            en: "Has an updated graduate profile = 4 (notary/PPAT, law enforcement officer, bureaucracy, community activist); and has 4 programme learning outcomes",
          },
          { id: "Rerata IPK lulusan MKn = 3.72", en: "Average GPA of MKn graduates = 3.72" },
          { id: "Kelulusan tepat waktu MKn mencapai 57,52%", en: "On-time graduation of MKn reached 57.52%" },
          { id: "Keberhasilan studi MKn mencapai 85%", en: "Study success of MKn reached 85%" },
          {
            id: "Terdapat laporan tracer studi tahun 2023 yang ditargetkan pada lulusan 2022",
            en: "There is a 2023 tracer study report targeting 2022 graduates",
          },
        ],
      },
      {
        standar: STANDAR.isi,
        butir: [
          {
            id: "Evaluasi dan pemutakhiran kurikulum dilaksanakan 4 tahun sekali",
            en: "Curriculum evaluation and updating are carried out once every 4 years",
          },
          {
            id:
              "Lokakarya kurikulum dihadiri oleh pemangku kepentingan internal (pimpinan, dosen, tendik, " +
              "mahasiswa) dan eksternal (alumni, pengguna, KUBOTA, Jateng Land, kanwil BPR ATR, asosiasi " +
              "penyelenggara PS kenotariatan) dengan unggulan perbankan syariah dan akta syariah dan sudah " +
              "direview oleh pakar keilmuan Dr. Habib Adjie (Ketua Forum MKn PTS se-Indonesia)",
            en:
              "The curriculum workshop was attended by internal stakeholders (leadership, lecturers, staff, " +
              "students) and external stakeholders (alumni, graduate users, KUBOTA, Jateng Land, kanwil BPR " +
              "ATR, association of notarial study programme providers) with Islamic banking and Islamic deeds " +
              "as its distinction, and has been reviewed by subject expert Dr. Habib Adjie (Chair of the Forum " +
              "of Private University MKn Programmes in Indonesia)",
          },
          {
            id:
              "Kurikulum baru akan diberlakukan untuk tahun 2025, sudah berbasis OBE dan beban belajar " +
              "mahasiswa sebanyak 56 sks sesuai dengan Permendikbud 53/2023",
            en:
              "The new curriculum will take effect for 2025, is outcome-based (OBE), and has a student " +
              "learning load of 56 credits in line with Permendikbud 53/2023",
          },
          {
            id: "Sumber belajar pada dokumen RPS telah memanfaatkan hasil penelitian dan hasil PkM",
            en: "Learning resources in the course plan documents draw on research and community service outputs",
          },
        ],
      },
      {
        standar: STANDAR.proses,
        butir: [
          {
            id:
              "Nilai mahasiswa selalu memenuhi standar, kehadiran 25%, tugas 35%, UAS 40% = komposisi " +
              "penilaian pada kurikulum baru telah memenuhi",
            en:
              "Student grades always meet the standard, attendance 25%, assignments 35%, final exam 40% = " +
              "the assessment composition in the new curriculum complies",
          },
        ],
      },
      {
        standar: STANDAR.penilaian,
        butir: [
          {
            id: "Setiap semester telah dilakukan perencanaan dan evaluasi proses pembelajaran",
            en: "Planning and evaluation of the learning process are carried out every semester",
          },
        ],
      },
    ],
    temuan: [
      {
        kategori: "OB",
        standar: STANDAR.kompetensi,
        temuan: {
          id: "Hasil tracer studi belum disosialisasikan kepada pemangku kepentingan",
          en: "Tracer study results have not been disseminated to stakeholders",
        },
        penyebab: {
          id: "PS tidak memahami pentingnya publikasi hasil laporan tracer studi",
          en: "The study programme did not understand the importance of publishing the tracer study report",
        },
        rencana: {
          id: "PS akan mempublikasikan hasil laporan tracer studi ke website www.mkn.unissula.ac.id",
          en: "The study programme will publish the tracer study report on the website www.mkn.unissula.ac.id",
        },
        saran: {
          id: "Hasil tracer disosialisasikan pada website www.mkn.unissula.ac.id",
          en: "Tracer results are disseminated on the website www.mkn.unissula.ac.id",
        },
        tanggalPenyelesaian: { id: "21 November 2024", en: "21 November 2024" },
      },
      {
        kategori: "OB",
        standar: STANDAR.isi,
        temuan: {
          id: "Draft kurikulum baru sudah ada, namun belum direview pakar",
          en: "The new curriculum draft exists but has not been reviewed by an expert",
        },
        penyebab: {
          id: "Review kurikulum sudah ada dalam perencanaan",
          en: "A curriculum review is already planned",
        },
        rencana: {
          id: "Review kurikulum sudah ada dalam perencanaan",
          en: "A curriculum review is already planned",
        },
        saran: {
          id: "Draft direview oleh pakar kurikulum",
          en: "The draft is reviewed by a curriculum expert",
        },
        tanggalPenyelesaian: { id: "21 November 2024", en: "21 November 2024" },
      },
      {
        kategori: "KTS_MINOR",
        standar: STANDAR.proses,
        temuan: {
          id: "Setiap semester telah dilakukan perencanaan dan evaluasi proses pembelajaran, namun belum dilakukan dokumentasi secara terstruktur",
          en: "Planning and evaluation of the learning process are carried out every semester, but have not been documented in a structured way",
        },
        penyebab: {
          id: "Tidak tersedia format atau pedoman yang jelas mengenai bagaimana perencanaan dan evaluasi harus didokumentasikan",
          en: "No clear format or guideline is available on how planning and evaluation should be documented",
        },
        rencana: {
          id: "PS akan membuat format atau pedoman yang jelas mengenai bagaimana perencanaan dan evaluasi harus didokumentasikan",
          en: "The study programme will create a clear format or guideline on how planning and evaluation should be documented",
        },
        saran: {
          id: "Dilakukan dokumentasi pada kegiatan perencanaan dan evaluasi sehingga RTL secara continue dapat terus dimonitoring",
          en: "Planning and evaluation activities are documented so that follow-up plans can be monitored continuously",
        },
        tanggalPenyelesaian: { id: "21 Februari 2025", en: "21 February 2025" },
      },
    ],
    kesimpulan: [],
  },
  {
    tahun: "2023",
    ketuaAuditor: "Inhastuti Sugiasih, S.Psi, M.Psi",
    ringkasanTemuan: { id: "2 observasi", en: "2 observations" },
    identitas: [
      { label: LABEL.unit, value: "Prodi Magister Kenotariatan" },
      { label: LABEL.ketuaUnit, value: "Dr. Jawade Hafidz" },
      { label: LABEL.ketuaAuditor, value: "Inhastuti Sugiasih, S.Psi, M.Psi" },
      { label: LABEL.ta, value: "2022-2023" },
      { label: LABEL.tanggal, value: { id: "17 November 2023", en: "17 November 2023" } },
      {
        label: LABEL.lingkup,
        value: {
          id: "Kompetensi lulusan; isi pembelajaran; proses pembelajaran; penilaian pembelajaran",
          en: "Graduate competence; learning content; learning process; learning assessment",
        },
      },
    ],
    praktikBaik: [
      {
        standar: STANDAR.kompetensi,
        butir: [
          { id: "Lulusan tepat waktu", en: "Graduates on time" },
          { id: "IPK lulusan sudah sesuai", en: "Graduate GPA is appropriate" },
          { id: "Tracer studi dilakukan setiap tahun", en: "A tracer study is conducted every year" },
        ],
      },
      {
        standar: STANDAR.isi,
        butir: [
          {
            id: "Peninjauan kurikulum dilakukan setiap 2 tahun sekali",
            en: "The curriculum is reviewed once every 2 years",
          },
        ],
      },
      {
        standar: STANDAR.proses,
        butir: [{ id: "Tersedianya RPS pada setiap matkul", en: "A course plan is available for every course" }],
      },
      {
        standar: STANDAR.penilaian,
        butir: [
          { id: "Penilaian dilakukan secara transparan", en: "Assessment is conducted transparently" },
          { id: "Terdapat rubrik penilaian", en: "There are assessment rubrics" },
          {
            id: "Pelaksanaan penilaian sesuai dengan CPMK",
            en: "Assessment is carried out in line with course learning outcomes (CPMK)",
          },
        ],
      },
    ],
    temuan: [
      {
        kategori: "OB",
        standar: STANDAR.proses,
        temuan: {
          id: "Belum semua RPS mencantumkan rubrik penilaian",
          en: "Not all course plans include assessment rubrics",
        },
        penyebab: {
          id: "Belum semua dosen mengerti mengenai rubrik penilaian",
          en: "Not all lecturers understand assessment rubrics",
        },
        rencana: {
          id: "Menghimbau kepada dosen untuk mencantumkan rubrik penilaian pada RPS",
          en: "Encourage lecturers to include assessment rubrics in their course plans",
        },
      },
      {
        kategori: "OB",
        standar: STANDAR.penilaian,
        temuan: {
          id: "Belum ada SOP terkait complain nilai mahasiswa",
          en: "There is no SOP for student grade complaints",
        },
        rencana: {
          id: "Membuat SOP complain nilai",
          en: "Create an SOP for grade complaints",
        },
      },
    ],
    kesimpulan: [
      { pernyataan: PERNYATAAN.a, jawaban: YA },
      { pernyataan: PERNYATAAN.b, jawaban: YA },
      { pernyataan: PERNYATAAN.c, jawaban: OBSERVASI },
      { pernyataan: PERNYATAAN.d, jawaban: YA },
    ],
  },
];
