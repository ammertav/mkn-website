import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

export const auditRecap = [
  {
    period: "Semester Gasal 2024",
    leadAuditor: "Dr. Hj. Widayati",
    majorFindings: 0,
    minorFindings: 4,
    followUpStatus: "Selesai 4 dari 4",
  },
  {
    period: "Semester Genap 2024",
    leadAuditor: "Dr. Denny Suwondo",
    majorFindings: 1,
    minorFindings: 6,
    followUpStatus: "Selesai 7 dari 7",
  },
  {
    period: "Semester Gasal 2023",
    leadAuditor: "Dr. Hj. Widayati",
    majorFindings: 1,
    minorFindings: 8,
    followUpStatus: "Selesai 9 dari 9",
  },
  {
    period: "Semester Genap 2023",
    leadAuditor: "Dr. Andri Winjaya",
    majorFindings: 2,
    minorFindings: 9,
    followUpStatus: "Selesai 11 dari 11",
  },
];

export const latestFindings = [
  {
    code: "TM-01",
    finding: "Dua rencana pembelajaran semester belum memuat rubrik penilaian rinci",
    action: "Perbaikan rencana pembelajaran sebelum semester berikutnya",
    status: "Selesai",
  },
  {
    code: "TM-02",
    finding: "Rekam kehadiran dosen tamu belum terdokumentasi seragam",
    action: "Penerapan formulir kehadiran tunggal pada semua mata kuliah",
    status: "Selesai",
  },
  {
    code: "TM-03",
    finding: "Sebagian berita acara bimbingan tesis belum lengkap",
    action: "Pencatatan bimbingan dipindahkan ke sistem akademik",
    status: "Selesai",
  },
  {
    code: "TM-04",
    finding: "Jadwal pemeliharaan laboratorium belum tertulis",
    action: "Penyusunan jadwal pemeliharaan berkala setiap triwulan",
    status: "Selesai",
  },
];

export const auditReports = [
  {
    id: 1,
    title: "Laporan Audit Mutu Internal Semester Gasal 2024",
    meta: "PDF • 1,3 MB • Diperbarui 28 Okt 2024",
    fileUrl: samplePdf,
    fileName: "Laporan-AMI-Gasal-2024-MKn.pdf",
  },
  {
    id: 2,
    title: "Laporan Audit Mutu Internal Semester Genap 2024",
    meta: "PDF • 1,4 MB • Diperbarui 22 Apr 2024",
    fileUrl: samplePdf,
    fileName: "Laporan-AMI-Genap-2024-MKn.pdf",
  },
  {
    id: 3,
    title: "Laporan Audit Mutu Internal 2023",
    meta: "PDF • 2,1 MB • Diperbarui 15 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Laporan-AMI-2023-MKn.pdf",
  },
  {
    id: 4,
    title: "Formulir Tindak Lanjut Temuan Audit",
    meta: "DOCX • 0,2 MB • Diperbarui 15 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Formulir-Tindak-Lanjut-Audit.docx",
  },
];
