/**
 * Data biaya pendidikan PMB MKn UNISSULA.
 *
 * Struktur komponen biaya per kelas:
 *   - Biaya Pendaftaran   : dibayar sekali saat mendaftar
 *   - Uang Pembangunan    : dibayar sekali saat pertama masuk
 *   - UKT / SPP           : dibayar tiap semester
 *
 * ⚠️  Nilai di bawah adalah DUMMY — ganti dengan nominal resmi sebelum publish.
 */
export const biayaKelas = [
  {
    id: "ekstensi",
    nama: { id: "Kelas Ekstensi", en: "Extension Class" },
    deskripsi: {
      id: "Diperuntukkan bagi lulusan sarjana non-hukum yang ingin melanjutkan ke Magister Kenotariatan.",
      en: "For graduates from non-law programmes wishing to pursue a Master of Notarial Law degree.",
    },
    komponen: [
      {
        label: { id: "Biaya Pendaftaran", en: "Registration Fee" },
        frekuensi: { id: "sekali bayar", en: "one-time" },
        nilai: { id: "Rp 500.000", en: "IDR 500,000" },
      },
      {
        label: { id: "Uang Pembangunan", en: "Development Fund" },
        frekuensi: { id: "sekali bayar", en: "one-time" },
        nilai: { id: "Rp 15.000.000", en: "IDR 15,000,000" },
      },
      {
        label: { id: "UKT / SPP", en: "Tuition Fee (UKT/SPP)" },
        frekuensi: { id: "per semester", en: "per semester" },
        nilai: { id: "Rp 9.000.000", en: "IDR 9,000,000" },
      },
    ],
    catatan: null,
  },
  {
    id: "reguler-a",
    nama: { id: "Kelas Reguler A", en: "Regular Class A" },
    deskripsi: {
      id: "Kelas reguler pagi/siang untuk lulusan sarjana hukum yang dapat mengikuti perkuliahan di hari kerja.",
      en: "Morning/afternoon class for law graduates who can attend weekday lectures.",
    },
    komponen: [
      {
        label: { id: "Biaya Pendaftaran", en: "Registration Fee" },
        frekuensi: { id: "sekali bayar", en: "one-time" },
        nilai: { id: "Rp 500.000", en: "IDR 500,000" },
      },
      {
        label: { id: "Uang Pembangunan", en: "Development Fund" },
        frekuensi: { id: "sekali bayar", en: "one-time" },
        nilai: { id: "Rp 12.000.000", en: "IDR 12,000,000" },
      },
      {
        label: { id: "UKT / SPP", en: "Tuition Fee (UKT/SPP)" },
        frekuensi: { id: "per semester", en: "per semester" },
        nilai: { id: "Rp 7.500.000", en: "IDR 7,500,000" },
      },
    ],
    catatan: null,
  },
  {
    id: "reguler-b",
    nama: { id: "Kelas Reguler B", en: "Regular Class B" },
    deskripsi: {
      id: "Kelas reguler sore/malam untuk lulusan sarjana hukum yang berstatus karyawan atau profesional.",
      en: "Evening class for law graduates who are currently working professionals.",
    },
    komponen: [
      {
        label: { id: "Biaya Pendaftaran", en: "Registration Fee" },
        frekuensi: { id: "sekali bayar", en: "one-time" },
        nilai: { id: "Rp 500.000", en: "IDR 500,000" },
      },
      {
        label: { id: "Uang Pembangunan", en: "Development Fund" },
        frekuensi: { id: "sekali bayar", en: "one-time" },
        nilai: { id: "Rp 12.000.000", en: "IDR 12,000,000" },
      },
      {
        label: { id: "UKT / SPP", en: "Tuition Fee (UKT/SPP)" },
        frekuensi: { id: "per semester", en: "per semester" },
        nilai: { id: "Rp 7.500.000", en: "IDR 7,500,000" },
      },
    ],
    catatan: null,
  },
];
