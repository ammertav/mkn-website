import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

export const qualityMetrics = [
  {
    value: "PPEPP",
    label: "SIKLUS MUTU",
  },
  {
    value: "2",
    label: "AUDIT INTERNAL PER TAHUN",
  },
  {
    value: "24",
    label: "STANDAR MUTU",
  },
  {
    value: "5",
    label: "ANGGOTA GUGUS",
  },
];

export const committeeMembers = [
  {
    name: "Dr. Sri Endah Wahyuningsih",
    position: "Ketua",
    duty: "Koordinasi siklus mutu, pelaporan capaian kepada program studi",
  },
  {
    name: "Dr. Achmad Arifullah",
    position: "Sekretaris",
    duty: "Dokumentasi mutu, notulen rapat tinjauan manajemen",
  },
  {
    name: "Dr. Aryani Witasari",
    position: "Anggota bidang pembelajaran",
    duty: "Monitoring rencana pembelajaran dan asesmen",
  },
  {
    name: "Dr. Widhi Handoko",
    position: "Anggota bidang penelitian",
    duty: "Monitoring luaran penelitian dan pengabdian",
  },
  {
    name: "Bayu Setiawan, S.H.",
    position: "Staf penjaminan mutu",
    duty: "Pengelolaan basis data mutu dan berkas audit",
  },
];

export const qualityCycles = [
  {
    stage: "Penetapan",
    activity: "Penetapan standar mutu program studi dan sasaran mutu tahunan",
    period: "Januari",
  },
  {
    stage: "Pelaksanaan",
    activity: "Penyelenggaraan pembelajaran, penelitian, dan pengabdian sesuai standar",
    period: "Sepanjang tahun",
  },
  {
    stage: "Evaluasi",
    activity: "Monitoring perkuliahan, survei mahasiswa, evaluasi capaian pembelajaran",
    period: "Akhir tiap semester",
  },
  {
    stage: "Pengendalian",
    activity: "Audit mutu internal dan rapat tinjauan manajemen",
    period: "Maret dan September",
  },
  {
    stage: "Peningkatan",
    activity: "Tindak lanjut temuan dan penyesuaian standar untuk siklus berikutnya",
    period: "Desember",
  },
];

export const policyDocuments = [
  {
    id: 1,
    title: "Kebijakan Mutu Program Studi Magister Kenotariatan",
    meta: "PDF • 0,9 MB • Diperbarui 12 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Kebijakan-Mutu-MKn-UNISSULA.pdf",
  },
  {
    id: 2,
    title: "Manual Mutu dan Prosedur Operasional Standar",
    meta: "PDF • 2,4 MB • Diperbarui 12 Jan 2024",
    fileUrl: samplePdf,
    fileName: "Manual-Mutu-SOP-MKn-UNISSULA.pdf",
  },
  {
    id: 3,
    title: "Sasaran Mutu dan Indikator Kinerja 2024",
    meta: "PDF • 0,6 MB • Diperbarui 05 Feb 2024",
    fileUrl: samplePdf,
    fileName: "Sasaran-Mutu-2024-MKn.pdf",
  },
  {
    id: 4,
    title: "Notulen Rapat Tinjauan Manajemen Semester Gasal 2024",
    meta: "PDF • 0,4 MB • Diperbarui 18 Okt 2024",
    fileUrl: samplePdf,
    fileName: "Notulen-RTM-Gasal-2024-MKn.pdf",
  },
];
