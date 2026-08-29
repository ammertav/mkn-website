import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

export const learningMetrics = [
  {
    value: "98%",
    label: "PERTEMUAN TERLAKSANA",
  },
  {
    value: "94%",
    label: "CPMK TERCAPAI",
  },
  {
    value: "96%",
    label: "KEHADIRAN MAHASISWA",
  },
  {
    value: "100%",
    label: "RPS TERUNGGAH",
  },
];

export const learningIndicators = [
  {
    indicator: "Pertemuan terlaksana sesuai jadwal",
    gasal2024: "98%",
    genap2024: "97%",
    gasal2023: "95%",
  },
  {
    indicator: "Rencana pembelajaran terunggah sebelum kuliah",
    gasal2024: "100%",
    genap2024: "96%",
    gasal2023: "92%",
  },
  {
    indicator: "Capaian pembelajaran mata kuliah tercapai",
    gasal2024: "94%",
    genap2024: "92%",
    gasal2023: "89%",
  },
  {
    indicator: "Kehadiran mahasiswa rata-rata",
    gasal2024: "96%",
    genap2024: "95%",
    gasal2023: "93%",
  },
  {
    indicator: "Nilai diumumkan tepat waktu",
    gasal2024: "97%",
    genap2024: "93%",
    gasal2023: "90%",
  },
  {
    indicator: "Mata kuliah dengan metode studi kasus",
    gasal2024: "18 dari 20",
    genap2024: "17 dari 20",
    gasal2023: "15 dari 20",
  },
];

export const improvementRecommendations = [
  {
    recommendation: "Menambah porsi praktik drafting pada mata kuliah teknik pembuatan akta",
    responsible: "Koordinator rumpun akta",
    target: "Genap 2025",
  },
  {
    recommendation: "Menyeragamkan rubrik penilaian tugas antar dosen pengampu",
    responsible: "Gugus Penjaminan Mutu",
    target: "Gasal 2025",
  },
  {
    recommendation: "Menjadwalkan kuliah tamu praktisi pada setiap mata kuliah praktik",
    responsible: "Ketua Program Studi",
    target: "Genap 2025",
  },
];

export const reportDocuments = [
  {
    id: 1,
    title: "Learning and Teaching Report Semester Gasal 2024",
    meta: "PDF • 1,7 MB • Diperbarui 20 Feb 2025",
    fileUrl: samplePdf,
    fileName: "Learning-Teaching-Report-Gasal-2024-MKn.pdf",
  },
  {
    id: 2,
    title: "Learning and Teaching Report Semester Genap 2024",
    meta: "PDF • 1,6 MB • Diperbarui 12 Agu 2024",
    fileUrl: samplePdf,
    fileName: "Learning-Teaching-Report-Genap-2024-MKn.pdf",
  },
  {
    id: 3,
    title: "Rekapitulasi Ketercapaian CPMK 2024",
    meta: "XLSX • 0,5 MB • Diperbarui 20 Feb 2025",
    fileUrl: samplePdf,
    fileName: "Rekapitulasi-CPMK-2024-MKn.xlsx",
  },
];
