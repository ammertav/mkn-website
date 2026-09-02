/**
 * Linimasa perjalanan Program Studi Magister Kenotariatan UNISSULA.
 *
 * TINGKAT KEPERCAYAAN SUMBER — mohon diperiksa sebelum tayang:
 *
 * TERVERIFIKASI (ada nomor SK / pemberitaan resmi):
 *   - 2018  Akreditasi A, SK 1696/SK/BAN-PT/Akred/M/VII/2018, berlaku 9 Jul 2018–9 Jul 2023
 *   - 2020  ASIC level Premier, diumumkan Januari 2020, visitasi asesor 25–28 November 2019
 *   - 2023  Akreditasi Unggul, SK 2512/SK/BAN-PT/Ak.Ppj/M/VI/2023, berlaku s.d. 10 Juli 2028
 *
 * PERLU KONFIRMASI PRODI (belum ditemukan nomor SK-nya):
 *   - Tanggal pendirian 27 Desember 2012 — bersumber dari basis data pihak ketiga
 *   - Tahun mulai penyelenggaraan 2013
 *   - Akreditasi pertama sebelum 2018 belum ditemukan; kemungkinan ada, mohon dilengkapi
 *
 * Rujukan: lp3m.unissula.ac.id/akpro · unissula.ac.id/sebelas-prodi-unissula-terakreditasi-internasional
 */

export const timeline = [
  {
    year: "2012",
    title: { id: "Pendirian Program Studi", en: "" },
    desc: {
      id:
        "Fakultas Hukum UNISSULA mendirikan Program Studi Magister (S2) Kenotariatan untuk " +
        "menjawab kebutuhan tenaga Notaris dan pelaksana hukum profesional, didukung sumber " +
        "daya insani serta sarana prasarana yang telah dimiliki fakultas.",
      en: "",
    },
    meta: {
      id: "Surat keputusan pendirian tertanggal 27 Desember 2012",
      en: "",
    },
    needsConfirmation: true,
  },
  {
    year: "2013",
    title: { id: "Penyelenggaraan Perdana", en: "" },
    desc: {
      id:
        "Program studi mulai menyelenggarakan pendidikan dan menerima angkatan pertama " +
        "mahasiswa Magister Kenotariatan.",
      en: "",
    },
    meta: null,
    needsConfirmation: true,
  },
  {
    year: "2018",
    title: { id: "Akreditasi BAN-PT Peringkat A", en: "" },
    desc: {
      id:
        "Badan Akreditasi Nasional Perguruan Tinggi menetapkan peringkat A bagi Program Studi " +
        "Magister Kenotariatan, berlaku hingga 9 Juli 2023.",
      en: "",
    },
    meta: {
      id: "SK No. 1696/SK/BAN-PT/Akred/M/VII/2018 · 9 Juli 2018",
      en: "",
    },
    needsConfirmation: false,
  },
  {
    year: "2020",
    title: { id: "Akreditasi Internasional ASIC", en: "" },
    desc: {
      id:
        "Magister Kenotariatan memperoleh akreditasi internasional dari *Accreditation Service " +
        "for International Schools, Colleges and Universities* (ASIC), London, pada level " +
        "*Premier*, level tertinggi yang diberikan ASIC.",
      en: "",
    },
    meta: { id: "Diumumkan Januari 2020 · ASIC, Inggris", en: "" },
    needsConfirmation: false,
  },
  {
    year: "2023",
    title: { id: "Akreditasi BAN-PT Peringkat Unggul", en: "" },
    desc: {
      id:
        "Peringkat akreditasi meningkat dari A menjadi Unggul, peringkat tertinggi dalam " +
        "sistem akreditasi nasional yang berlaku saat ini. Berlaku hingga 10 Juli 2028.",
      en: "",
    },
    meta: { id: "SK No. 2512/SK/BAN-PT/Ak.Ppj/M/VI/2023", en: "" },
    needsConfirmation: false,
    highlight: true,
  },
];

/** Ringkasan status akreditasi terkini — ditampilkan sebagai penutup linimasa. */
export const statusAkreditasi = [
  {
    label: { id: "Akreditasi Nasional", en: "" },
    value: "Unggul",
    detail: { id: "BAN-PT, berlaku s.d. 10 Juli 2028", en: "" },
  },
  {
    label: { id: "Akreditasi Internasional", en: "" },
    value: "ASIC Premier",
    detail: { id: "ASIC London, sejak Januari 2020", en: "" },
  },
];
