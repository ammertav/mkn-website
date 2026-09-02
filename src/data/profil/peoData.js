/**
 * Program Educational Objectives (PEO) dan integrasinya dengan
 * European Purposes of Higher Education (EPHE).
 *
 * SUMBER: dokumen resmi prodi "0 PROGRAM EDUCATIONAL OBJECTIVES.docx" dari klien.
 * Teks disalin verbatim.
 *
 * DWIBAHASA: rumusan PEO berbahasa Indonesia memakai bentuk { id, en }.
 * Blok EPHE TIDAK memakai bentuk dua bahasa karena aslinya memang kutipan
 * berbahasa Inggris dari kerangka Eropa — teksnya sama di kedua bahasa situs.
 *
 * Tanda bintang pada teks Indonesia menandai istilah asing yang dicetak miring,
 * mengikuti dokumen sumber. Lihat docs/panduan-dwibahasa.md.
 */

export const peoIntro = {
  id:
    "Kurikulum Magister Kenotariatan UNISSULA selain dirancang dengan pendekatan OBE, juga " +
    "berpedoman pada kerangka kurikulum standar internasional, khususnya *European Standards " +
    "and Guidelines* (ESG) dan berorientasi pada pemenuhan 4 tujuan utama dari *European " +
    "Purposes Of Higher Education* (EPHE). *Program Educational Objectives* (PEO) dirumuskan " +
    "untuk mengukur pencapaian profesional dan kontribusi alumni dalam jangka menengah atau " +
    "3-5 tahun setelah kelulusan.",
  en: "",
};

export const peoItems = [
  // PENOMORAN DISELARASKAN dengan Profil Lulusan (PL-1..PL-4) atas keputusan tim:
  //   PEO 1 -> PL-1 Notaris/PPAT      PEO 3 -> PL-3 Akademisi
  //   PEO 2 -> PL-2 Aparatur Negara   PEO 4 -> PL-4 Penggiat Masyarakat
  //
  // CATATAN: pada dokumen sumber prodi, dua rumusan terakhir bernomor terbalik —
  // Akademisi tercatat sebagai PEO 4 dan Penggiat Masyarakat sebagai PEO 3.
  // Teks rumusan dan pasangan EPHE-nya tetap verbatim; yang berubah hanya nomornya.
  // Sebaiknya prodi diberi tahu agar dokumen sumber ikut disesuaikan.

  {
    code: "PEO 1",
    objective: {
      id:
        "Menghasilkan lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum " +
        "UNISSULA yang memiliki kemampuan dan keahlian menerapkan ilmu hukum kenotariatan " +
        "dalam membuat akta autentik berdasarkan peraturan dan etika jabatan yang dilandasi " +
        "nilai-nilai kebaikan dan kejujuran, serta disesuaikan dengan kebutuhan nasional dan " +
        "internasional.",
      en: "",
    },
    ephe: {
      title: "Preparation for sustainable employment",
      desc:
        "Equipping students with knowledge, adaptable competencies, and practical skills to " +
        "match the changing labor market and secure long-term careers.",
    },
  },

  {
    code: "PEO 2",
    objective: {
      id:
        "Menghasilkan lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum " +
        "UNISSULA yang mampu mengelola penyelenggaraan pemerintahan dan pelayanan " +
        "masyarakat, baik sebagai eksekutif, legislatif dan yudikatif yang dijiwai nilai " +
        "keadilan Islam.",
      en: "",
    },
    ephe: {
      title: "Preparation for life as active citizens",
      desc:
        "Teaching students how to participate constructively, think critically, and defend " +
        "human rights within democratic societies.",
    },
  },

  {
    code: "PEO 3",
    objective: {
      id:
        "Membentuk Lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA " +
        "yang mampu mengembangkan profesi sebagai dosen dan/atau peneliti, menguasai konsep " +
        "teoritis ilmu hukum kenotariatan, menganalisis teori serta memformulasikan " +
        "penyelesaian masalah konseptual dan prosedural dengan mengintegrasikan ilmu " +
        "pengetahuan modern yang berlandaskan kejujuran dan keadilan.",
      en: "",
    },
    ephe: {
      title: "Development and maintenance of a broad, advanced knowledge base",
      desc:
        "Supporting pure and applied research, driving innovation, and preserving high-level " +
        "scholarship through teaching and learning.",
    },
  },

  {
    code: "PEO 4",
    objective: {
      id:
        "Menghasilkan lulusan Program Studi Magister (S2) Kenotariatan Fakultas Hukum " +
        "UNISSULA yang mampu menjadi motivator, inspirator dan dinamisator dalam " +
        "menyelesaikan persoalan-persoalan hukum kenotariatan dalam masyarakat yang didasari " +
        "nilai kejujuran, keadilan dan kebaikan.",
      en: "",
    },
    ephe: {
      title: "Personal development",
      desc:
        "Helping individuals grow emotionally, intellectually, and ethically so they can lead " +
        "fulfilling, reflective lives.",
    },
  },
];
