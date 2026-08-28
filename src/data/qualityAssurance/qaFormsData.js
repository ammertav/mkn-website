import samplePdf from "../../assets/pdf/2. Pedoman Akademik MKN.pdf";

export const formList = [
  {
    code: "FM-01",
    name: "Formulir monitoring perkuliahan",
    user: "Koordinator mata kuliah",
    period: "Tiap pertemuan",
  },
  {
    code: "FM-02",
    name: "Formulir berita acara ujian",
    user: "Pengawas ujian",
    period: "UTS dan UAS",
  },
  {
    code: "FM-03",
    name: "Formulir bimbingan tesis",
    user: "Dosen pembimbing",
    period: "Tiap bimbingan",
  },
  {
    code: "FM-04",
    name: "Formulir tindak lanjut temuan audit",
    user: "Ketua Program Studi",
    period: "Setelah audit",
  },
  {
    code: "FM-05",
    name: "Formulir survei kepuasan mahasiswa",
    user: "Gugus Penjaminan Mutu",
    period: "Akhir semester",
  },
  {
    code: "FM-06",
    name: "Formulir survei pengguna lulusan",
    user: "Gugus Penjaminan Mutu",
    period: "Tahunan",
  },
  {
    code: "FM-07",
    name: "Formulir peninjauan kurikulum",
    user: "Tim kurikulum",
    period: "Dua tahunan",
  },
];

export const downloadableForms = [
  {
    id: 1,
    title: "Paket Formulir Mutu Lengkap (FM-01 s.d. FM-07)",
    meta: "ZIP • 1,4 MB • Diperbarui 22 Jul 2024",
    fileUrl: samplePdf,
    fileName: "Paket-Formulir-Mutu-MKn.zip",
  },
  {
    id: 2,
    title: "Formulir Monitoring Perkuliahan (FM-01)",
    meta: "DOCX • 0,1 MB • Diperbarui 22 Jul 2024",
    fileUrl: samplePdf,
    fileName: "FM-01-Monitoring-Perkuliahan.docx",
  },
  {
    id: 3,
    title: "Formulir Tindak Lanjut Temuan Audit (FM-04)",
    meta: "DOCX • 0,2 MB • Diperbarui 15 Jan 2024",
    fileUrl: samplePdf,
    fileName: "FM-04-Tindak-Lanjut-Audit.docx",
  },
  {
    id: 4,
    title: "Formulir Survei Kepuasan Mahasiswa (FM-05)",
    meta: "DOCX • 0,2 MB • Diperbarui 10 Jan 2024",
    fileUrl: samplePdf,
    fileName: "FM-05-Survei-Kepuasan-Mahasiswa.docx",
  },
];
