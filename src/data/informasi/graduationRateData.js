import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

export const graduationMetrics = [
  {
    value: "89%",
    label: "LULUS TEPAT WAKTU 2024",
  },
  {
    value: "3,62",
    label: "RATA-RATA IPK",
  },
  {
    value: "4,3",
    label: "SEMESTER RATA-RATA",
  },
  {
    value: "41%",
    label: "PREDIKAT PUJIAN",
  },
];

export const academicYearRecap = [
  {
    year: "2023/2024",
    students: 124,
    graduated: 62,
    onTime: "89%",
    avgGpa: "3,62",
    studyDuration: "4,3 semester",
  },
  {
    year: "2022/2023",
    students: 118,
    graduated: 58,
    onTime: "86%",
    avgGpa: "3,58",
    studyDuration: "4,5 semester",
  },
  {
    year: "2021/2022",
    students: 112,
    graduated: 54,
    onTime: "82%",
    avgGpa: "3,55",
    studyDuration: "4,7 semester",
  },
  {
    year: "2020/2021",
    students: 105,
    graduated: 49,
    onTime: "78%",
    avgGpa: "3,51",
    studyDuration: "4,9 semester",
  },
  {
    year: "2019/2020",
    students: 98,
    graduated: 46,
    onTime: "74%",
    avgGpa: "3,48",
    studyDuration: "5,1 semester",
  },
];

export const predicateAndDurationDistribution = [
  {
    group: "Dengan pujian",
    graduates2024: 25,
    proportion: "41%",
    notes: "IPK 3,75 dan masa studi paling lama empat semester",
  },
  {
    group: "Sangat memuaskan",
    graduates2024: 29,
    proportion: "47%",
    notes: "IPK 3,50 sampai 3,74",
  },
  {
    group: "Memuaskan",
    graduates2024: 8,
    proportion: "12%",
    notes: "IPK 3,00 sampai 3,49",
  },
  {
    group: "Lulus empat semester",
    graduates2024: 55,
    proportion: "89%",
    notes: "Sesuai rancangan kurikulum",
  },
  {
    group: "Lulus lima semester atau lebih",
    graduates2024: 7,
    proportion: "11%",
    notes: "Umumnya karena penyelesaian tesis",
  },
];

export const supportingDocuments = [
  {
    id: 1,
    title: "Laporan Kelulusan Tahun Akademik 2023/2024",
    version: "v1.0",
    date: "30 Sep 2024",
    fileType: "PDF",
    fileUrl: samplePdf,
    fileName: "Laporan-Kelulusan-2023-2024-MKn.pdf",
  },
  {
    id: 2,
    title: "Rekapitulasi Masa Studi Lima Tahun Terakhir",
    version: "v1.2",
    date: "30 Sep 2024",
    fileType: "XLSX",
    fileUrl: samplePdf,
    fileName: "Rekapitulasi-Masa-Studi-5-Tahun-MKn.xlsx",
  },
];
