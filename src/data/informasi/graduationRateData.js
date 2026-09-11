import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

export const graduationMetrics = [
  {
    value: "89%",
    label: {
      id: "LULUS TEPAT WAKTU 2024",
      en: "ON-TIME GRADUATION 2024",
    },
  },
  {
    value: "3,62",
    label: {
      id: "RATA-RATA IPK",
      en: "AVERAGE GPA",
    },
  },
  {
    value: "4,3",
    label: {
      id: "SEMESTER RATA-RATA",
      en: "AVERAGE SEMESTERS",
    },
  },
  {
    value: "41%",
    label: {
      id: "PREDIKAT PUJIAN",
      en: "HONORS PREDICATE",
    },
  },
];

export const academicYearRecap = [
  {
    year: "2023/2024",
    students: 124,
    graduated: 62,
    onTime: "89%",
    avgGpa: "3,62",
    studyDuration: {
      id: "4,3 semester",
      en: "4.3 semesters",
    },
  },
  {
    year: "2022/2023",
    students: 118,
    graduated: 58,
    onTime: "86%",
    avgGpa: "3,58",
    studyDuration: {
      id: "4,5 semester",
      en: "4.5 semesters",
    },
  },
  {
    year: "2021/2022",
    students: 112,
    graduated: 54,
    onTime: "82%",
    avgGpa: "3,55",
    studyDuration: {
      id: "4,7 semester",
      en: "4.7 semesters",
    },
  },
  {
    year: "2020/2021",
    students: 105,
    graduated: 49,
    onTime: "78%",
    avgGpa: "3,51",
    studyDuration: {
      id: "4,9 semester",
      en: "4.9 semesters",
    },
  },
  {
    year: "2019/2020",
    students: 98,
    graduated: 46,
    onTime: "74%",
    avgGpa: "3,48",
    studyDuration: {
      id: "5,1 semester",
      en: "5.1 semesters",
    },
  },
];

export const predicateAndDurationDistribution = [
  {
    group: {
      id: "Dengan pujian",
      en: "With honors (Cum Laude)",
    },
    graduates2024: 25,
    proportion: "41%",
    notes: {
      id: "IPK 3,75 dan masa studi paling lama empat semester",
      en: "GPA ≥ 3.75 and study period of at most four semesters",
    },
  },
  {
    group: {
      id: "Sangat memuaskan",
      en: "Very satisfactory (Magna Cum Laude)",
    },
    graduates2024: 29,
    proportion: "47%",
    notes: {
      id: "IPK 3,50 sampai 3,74",
      en: "GPA 3.50 to 3.74",
    },
  },
  {
    group: {
      id: "Memuaskan",
      en: "Satisfactory",
    },
    graduates2024: 8,
    proportion: "12%",
    notes: {
      id: "IPK 3,00 sampai 3,49",
      en: "GPA 3.00 to 3.49",
    },
  },
  {
    group: {
      id: "Lulus empat semester",
      en: "Graduated in four semesters",
    },
    graduates2024: 55,
    proportion: "89%",
    notes: {
      id: "Sesuai rancangan kurikulum",
      en: "In accordance with curriculum design",
    },
  },
  {
    group: {
      id: "Lulus lima semester atau lebih",
      en: "Graduated in five semesters or more",
    },
    graduates2024: 7,
    proportion: "11%",
    notes: {
      id: "Umumnya karena penyelesaian tesis",
      en: "Generally due to thesis completion",
    },
  },
];

export const supportingDocuments = [
  {
    id: 1,
    title: {
      id: "Laporan Kelulusan Tahun Akademik 2023/2024",
      en: "Graduation Report Academic Year 2023/2024",
    },
    version: "v1.0",
    date: {
      id: "30 Sep 2024",
      en: "30 Sep 2024",
    },
    fileType: "PDF",
    fileUrl: samplePdf,
    fileName: "Laporan-Kelulusan-2023-2024-MKn.pdf",
  },
  {
    id: 2,
    title: {
      id: "Rekapitulasi Masa Studi Lima Tahun Terakhir",
      en: "Recapitulation of Study Duration in the Last Five Years",
    },
    version: "v1.2",
    date: {
      id: "30 Sep 2024",
      en: "30 Sep 2024",
    },
    fileType: "XLSX",
    fileUrl: samplePdf,
    fileName: "Rekapitulasi-Masa-Studi-5-Tahun-MKn.xlsx",
  },
];
