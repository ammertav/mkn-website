/**
 * Jalur menjadi Notaris — bahan halaman Pusat Karir.
 *
 * SUMBER: Pengumuman Direktorat Jenderal Administrasi Hukum Umum,
 * Kementerian Hukum Republik Indonesia, tanggal 25 November 2025, tentang
 * "Pendaftaran Pengangkatan dan Pindah Wilayah Jabatan Notaris secara Online
 * Tahun 2025", beserta peraturan yang dirujuknya.
 */

export const sumberResmi = {
  nama: {
    id: "Direktorat Jenderal Administrasi Hukum Umum, Kementerian Hukum RI",
    en: "Directorate General of General Legal Administration, Ministry of Law RI",
  },
  laman: "https://ahu.go.id/",
  dokumen: {
    id: "Pengumuman Pendaftaran Pengangkatan dan Pindah Wilayah Jabatan Notaris secara Online Tahun 2025, Jakarta, 25 November 2025",
    en: "Announcement of Online Registration for Appointment and Transfer of Notary Regional Office Year 2025, Jakarta, 25 November 2025",
  },
};

export const angkaKunci = [
  {
    angka: "27",
    satuan: { id: "tahun", en: "years" },
    label: {
      id: "Usia minimal pengangkatan",
      en: "Minimum appointment age",
    },
  },
  {
    angka: "24",
    satuan: { id: "bulan", en: "months" },
    label: {
      id: "Magang setelah lulus M.Kn.",
      en: "Internship after M.Kn. graduation",
    },
  },
  {
    angka: "11",
    satuan: { id: "berkas", en: "files" },
    label: {
      id: "Dokumen yang dilampirkan",
      en: "Attached documents",
    },
  },
  {
    angka: "2",
    satuan: { id: "bulan", en: "months" },
    label: {
      id: "Batas pengucapan sumpah",
      en: "Oath-taking time limit",
    },
  },
];

export const pengantar = {
  id: "Notaris diangkat dan diberhentikan oleh Menteri berdasarkan Pasal 2 Undang-Undang Nomor 30 Tahun 2004 tentang Jabatan Notaris sebagaimana diubah dengan Undang-Undang Nomor 2 Tahun 2014. Lulus Magister Kenotariatan adalah langkah pertama, bukan langkah terakhir. Berikut jalur yang ditempuh lulusan hingga resmi menjabat.",
  en: "Notaries are appointed and dismissed by the Minister based on Article 2 of Law Number 30 of 2004 concerning the Position of Notary as amended by Law Number 2 of 2014. Graduating from Master of Notarial Law is the first step, not the final step. Here is the path taken by graduates until officially serving.",
};

/** Tiga prasyarat yang harus dipenuhi sebelum pendaftaran dibuka. */
export const prasyarat = [
  {
    nomor: "1",
    judul: {
      id: "Lulus Magister Kenotariatan",
      en: "Graduated with Master of Notarial Law",
    },
    desc: {
      id: "Berijazah sarjana hukum dan lulusan jenjang strata dua kenotariatan atau pendidikan spesialis notariat.",
      en: "Holding a Bachelor of Law degree and graduate of master's level notarial studies or specialist notarial education.",
    },
    dasar: {
      id: "Pasal 2 ayat (1) huruf e Permenkum 22/2025",
      en: "Article 2 paragraph (1) letter e Permenkum 22/2025",
    },
  },
  {
    nomor: "2",
    judul: {
      id: "Magang 24 bulan berturut-turut",
      en: "Consecutive 24-month Internship",
    },
    desc: {
      id: "Menjalani magang atau nyata-nyata bekerja sebagai karyawan Notaris pada kantor Notaris selama paling singkat 24 bulan berturut-turut, atas prakarsa sendiri maupun atas rekomendasi Organisasi Notaris. Surat keterangannya harus diketahui dan direkomendasikan Organisasi Notaris.",
      en: "Undergoing internship or genuinely working as a Notary employee at a Notary office for at least 24 consecutive months, either on own initiative or upon recommendation of the Notary Organization. The certificate must be acknowledged and recommended by the Notary Organization.",
    },
    dasar: {
      id: "Pasal 2 ayat (1) huruf f dan ayat (2) huruf f Permenkum 22/2025",
      en: "Article 2 paragraph (1) letter f and paragraph (2) letter f Permenkum 22/2025",
    },
  },
  {
    nomor: "3",
    judul: {
      id: "Sertifikat kode etik",
      en: "Code of Ethics Certificate",
    },
    desc: {
      id: "Memiliki sertifikat Ujian Kode Etik Notaris (UKEN) yang dikeluarkan Organisasi Notaris, atau Sertifikat Computer Assisted Test (CAT) Seleksi Pengangkatan Calon Notaris yang dikeluarkan Ditjen AHU. Sertifikat CAT tetap diakui sebagai pengganti UKEN.",
      en: "Holding a Notary Code of Ethics Examination (UKEN) certificate issued by the Notary Organization, or a Computer Assisted Test (CAT) Certificate for Notary Candidate Appointment Selection issued by DG AHU. The CAT certificate is recognized as a substitute for UKEN.",
    },
    dasar: {
      id: "Pasal 2 ayat (3) huruf a Permenkum 22/2025",
      en: "Article 2 paragraph (3) letter a Permenkum 22/2025",
    },
  },
];

/** Ketentuan magang, disalin dari rumusan peraturan. */
export const catatanMagang = {
  judul: {
    id: "Kapan Magang 24 Bulan Dihitung",
    en: "When the 24-Month Internship Is Counted",
  },
  butir: [
    {
      isi: {
        id: "Calon Notaris telah menjalani magang atau nyata-nyata telah bekerja sebagai karyawan Notaris dalam waktu paling singkat 24 (dua puluh empat) bulan berturut-turut pada kantor Notaris, atas prakarsa sendiri atau atas rekomendasi Organisasi Notaris, setelah lulus strata dua kenotariatan.",
        en: "Notary candidates have completed an internship or genuinely worked as a Notary employee for at least 24 (twenty-four) consecutive months at a Notary office, on their own initiative or upon recommendation of the Notary Organization, after graduating with a master's degree in notarial studies.",
      },
      dasar: {
        id: "Pasal 2 ayat (1) huruf f Permenkum 22/2025",
        en: "Article 2 paragraph (1) letter f Permenkum 22/2025",
      },
    },
    {
      isi: {
        id: "Asli surat keterangan magang di kantor Notaris atau keterangan telah bekerja sebagai karyawan Notaris harus diketahui oleh Organisasi Notaris dan mendapatkan rekomendasi dari Organisasi Notaris, dalam waktu paling singkat 24 (dua puluh empat) bulan berturut-turut setelah lulus strata dua kenotariatan atau pendidikan spesialis notariat.",
        en: "Original certificate of internship at a Notary office or certificate of employment as a Notary employee must be acknowledged and recommended by the Notary Organization, for at least 24 (twenty-four) consecutive months after graduating with a master's degree in notarial studies or specialist notarial education.",
      },
      dasar: {
        id: "Pasal 2 ayat (2) huruf f Permenkum 22/2025",
        en: "Article 2 paragraph (2) letter f Permenkum 22/2025",
      },
    },
  ],
};

/** Pasal 2 ayat (1) Permenkum 22/2025 — delapan syarat pengangkatan. */
export const syaratPengangkatan = [
  {
    id: "Warga negara Indonesia",
    en: "Indonesian citizen",
  },
  {
    id: "Bertakwa kepada Tuhan Yang Maha Esa",
    en: "Faithful to the Almighty God",
  },
  {
    id: "Berumur paling sedikit 27 tahun",
    en: "At least 27 years of age",
  },
  {
    id: "Sehat jasmani dan rohani",
    en: "Physically and mentally healthy",
  },
  {
    id: "Berijazah sarjana hukum dan lulusan jenjang strata dua kenotariatan",
    en: "Holding a Bachelor of Law degree and graduate of master of notarial law program",
  },
  {
    id: "Telah menjalani magang atau nyata-nyata bekerja sebagai karyawan Notaris paling singkat 24 bulan berturut-turut setelah lulus strata dua kenotariatan",
    en: "Having completed an internship or genuinely worked as a Notary employee for at least 24 consecutive months after graduating with a master of notarial law",
  },
  {
    id: "Tidak berstatus sebagai pegawai negeri, pejabat negara, advokat, atau memangku jabatan lain yang dilarang undang-undang untuk dirangkap dengan jabatan Notaris",
    en: "Not holding civil servant, state official, advocate status, or holding other offices prohibited by law to be held concurrently with the Notary office",
  },
  {
    id: "Tidak pernah dijatuhi pidana penjara berdasarkan putusan yang berkekuatan hukum tetap karena tindak pidana yang diancam pidana penjara 5 tahun atau lebih",
    en: "Never sentenced to imprisonment based on a legally binding court verdict for criminal offenses punishable by imprisonment of 5 years or more",
  },
];

/** Pasal 2 ayat (2) dan ayat (3) Permenkum 22/2025 — dokumen yang dilampirkan. */
export const dokumenKelompok = [
  {
    judul: {
      id: "Dokumen pendukung",
      en: "Supporting Documents",
    },
    dasar: {
      id: "Pasal 2 ayat (2) Permenkum 22/2025",
      en: "Article 2 paragraph (2) Permenkum 22/2025",
    },
    butir: [
      {
        id: "Fotokopi kartu tanda penduduk",
        en: "Photocopy of national identity card (KTP)",
      },
      {
        id: "Fotokopi akta lahir yang telah dilegalisasi",
        en: "Legalized photocopy of birth certificate",
      },
      {
        id: "Asli surat keterangan sehat jasmani dari dokter rumah sakit, berlaku paling lama 1 tahun sejak diterbitkan",
        en: "Original physical health certificate from a hospital doctor, valid for a maximum of 1 year from issuance",
      },
      {
        id: "Asli surat keterangan sehat rohani dari psikiater atau dokter spesialis kejiwaan rumah sakit, berlaku paling lama 1 tahun sejak diterbitkan",
        en: "Original mental health certificate from a psychiatrist or hospital psychiatric specialist, valid for a maximum of 1 year from issuance",
      },
      {
        id: "Fotokopi ijazah sarjana hukum dan magister kenotariatan atau spesialis notariat yang telah dilegalisasi",
        en: "Legalized photocopies of Bachelor of Law and Master of Notarial Law or notarial specialist diplomas",
      },
      {
        id: "Asli surat keterangan magang di kantor Notaris yang diketahui Organisasi Notaris, atau keterangan bekerja sebagai karyawan Notaris yang direkomendasikan Organisasi Notaris, paling singkat 24 bulan berturut-turut setelah lulus",
        en: "Original certificate of internship at a Notary office acknowledged by the Notary Organization, or certificate of employment recommended by the Notary Organization, for at least 24 consecutive months after graduation",
      },
      {
        id: "Asli surat pernyataan tidak berstatus sebagai pegawai negeri, pejabat negara, advokat, atau memangku jabatan rangkap yang dilarang, bermeterai Rp10.000",
        en: "Original statement letter not holding status as civil servant, state official, advocate, or prohibited concurrent positions, stamped with Rp10,000 duty",
      },
      {
        id: "Asli surat keterangan catatan kepolisian setempat yang masih berlaku saat pendaftaran",
        en: "Original police clearance certificate (SKCK) valid at the time of registration",
      },
    ],
  },
  {
    judul: {
      id: "Dokumen tambahan",
      en: "Additional Documents",
    },
    dasar: {
      id: "Pasal 2 ayat (3) Permenkum 22/2025",
      en: "Article 2 paragraph (3) Permenkum 22/2025",
    },
    butir: [
      {
        id: "Fotokopi sertifikat kode etik yang dilegalisir Organisasi Notaris, atau Sertifikat CAT Seleksi Pengangkatan Calon Notaris dari Ditjen AHU",
        en: "Legalized photocopy of code of ethics certificate by Notary Organization, or DG AHU Notary Candidate CAT Certificate",
      },
      {
        id: "Asli surat pernyataan kesediaan sebagai pemegang protokol, bermeterai Rp10.000",
        en: "Original statement letter of willingness to be a protocol custodian, stamped with Rp10,000 duty",
      },
      {
        id: "Fotokopi Nomor Pokok Wajib Pajak yang telah dilegalisasi",
        en: "Legalized photocopy of Tax Identification Number (NPWP)",
      },
    ],
  },
];

/** Tahapan pendaftaran daring melalui ahu.go.id. */
export const tahapanPendaftaran = [
  {
    nomor: "1",
    judul: {
      id: "Registrasi akun",
      en: "Account Registration",
    },
    desc: {
      id: "Melalui menu Pendaftaran Notaris di ahu.go.id, mengisi nama, NIK, tanggal lahir, surel, serta nama pengguna dan kata sandi. Nama harus sesuai data Dukcapil dan ditulis tanpa gelar akademis. Akun diaktifkan lewat tautan yang dikirim ke surel.",
      en: "Via the Notary Registration menu on ahu.go.id, fill in name, NIK, date of birth, email, username, and password. Name must match Dukcapil data and be entered without academic titles. The account is activated via the link sent to email.",
    },
  },
  {
    nomor: "2",
    judul: {
      id: "Pembayaran biaya akses",
      en: "Access Fee Payment",
    },
    desc: {
      id: "Pemohon yang akunnya sudah aktif membayar biaya akses melalui menu SIMPADHU. Pembayaran sebelum akun aktif berisiko dan tidak menjadi tanggung jawab Ditjen AHU.",
      en: "Applicants with active accounts pay the access fee through the SIMPADHU menu. Payment before account activation is risky and not the responsibility of DG AHU.",
    },
  },
  {
    nomor: "3",
    judul: {
      id: "Pengisian format isian",
      en: "Form Submission",
    },
    desc: {
      id: "Masuk dengan akun, memasukkan nomor voucher pembayaran, mengisi format isian, dan memilih wilayah kedudukan sesuai kategori daerah yang dibuka. Tidak ada perbaikan setelah format isian dikirim.",
      en: "Log in with the account, enter payment voucher number, complete the form, and select domicile jurisdiction according to available region categories. No revisions are permitted once submitted.",
    },
  },
  {
    nomor: "4",
    judul: {
      id: "Unggah dokumen persyaratan",
      en: "Upload Required Documents",
    },
    desc: {
      id: "Setelah permohonan dikirim, pemohon keluar lalu masuk kembali untuk mengunggah seluruh dokumen persyaratan.",
      en: "After application submission, applicant logs out and logs back in to upload all required supporting documents.",
    },
  },
  {
    nomor: "5",
    judul: {
      id: "Pemeriksaan dokumen",
      en: "Document Verification",
    },
    desc: {
      id: "Diperiksa oleh 2 korektor dan 1 verifikator. Notifikasi perbaikan dapat muncul lebih dari sekali, sehingga akun wajib dicek berkala. Permohonan yang tidak diperbaiki sampai batas waktu dinyatakan gagal.",
      en: "Examined by 2 correctors and 1 verifier. Revision notifications may appear more than once, so the account must be checked periodically. Applications not revised by the deadline are disqualified.",
    },
  },
  {
    nomor: "6",
    judul: {
      id: "Pembayaran PNBP",
      en: "PNBP Fee Payment",
    },
    desc: {
      id: "Pemohon yang lolos verifikasi menerima notifikasi untuk membayar PNBP pengangkatan. Pembayaran di luar tanggal yang ditetapkan menyebabkan permohonan ditolak.",
      en: "Applicants who pass verification receive notifications to pay appointment non-tax state revenue (PNBP). Payment outside stipulated dates results in application rejection.",
    },
  },
  {
    nomor: "7",
    judul: {
      id: "Penerbitan SK dan sumpah jabatan",
      en: "Decree Issuance & Oath Taking",
    },
    desc: {
      id: "Surat Keputusan elektronik diterbitkan serentak dan diunduh melalui akun pemohon. Sumpah atau janji jabatan diucapkan di hadapan Menteri atau pejabat yang ditunjuk paling lambat 2 bulan sejak tanggal SK; bila tidak, SK dapat dibatalkan.",
      en: "Electronic Decree is issued concurrently and downloaded through applicant's account. Oath or pledge of office is taken before the Minister or designated official within 2 months of Decree date; otherwise, Decree may be revoked.",
    },
  },
];

/** Pasal 23 ayat (2) UUJN jo. Permenkum 22/2025 dan Permenkum 17/2025. */
export const pindahWilayah = {
  ringkas: {
    id: "Notaris yang telah menjalankan tugas jabatan pada kabupaten/kota tempat kedudukannya selama 3 tahun berturut-turut — tidak termasuk cuti — dapat mengajukan pindah wilayah jabatan. Perpindahan dari Kategori Daerah C ke Kategori Daerah A mensyaratkan masa kerja 4 tahun berturut-turut.",
    en: "Notaries who have served office in their domicile district/city for 3 consecutive years — excluding leave — may apply for office transfer. Transfer from Region Category C to Region Category A requires 4 consecutive years of service.",
  },
  dasar: {
    id: "Pasal 23 ayat (2) UUJN jo. Pasal 38 dan Pasal 40 Permenkum 22/2025 jo. Pasal 12 ayat (3) dan Pasal 13 Permenkum 17/2025",
    en: "Article 23 paragraph (2) UUJN jo. Article 38 & 40 Permenkum 22/2025 jo. Article 12 paragraph (3) & Article 13 Permenkum 17/2025",
  },
  dokumen: [
    {
      id: "Fotokopi keputusan pengangkatan sebagai Notaris yang telah dilegalisasi",
      en: "Legalized photocopy of appointment decree as Notary",
    },
    {
      id: "Fotokopi berita acara sumpah/janji jabatan Notaris yang dilegalisasi",
      en: "Legalized photocopy of minutes of Notary oath/pledge of office",
    },
    {
      id: "Asli surat keterangan dari MPD, MPW, dan MPP tentang konduite Notaris",
      en: "Original certificate from MPD, MPW, and MPP regarding Notary conduct",
    },
    {
      id: "Asli surat keterangan dari MPD, MPW, atau MPP tentang cuti Notaris",
      en: "Original certificate from MPD, MPW, or MPP regarding Notary leave",
    },
    {
      id: "Fotokopi sertifikat cuti",
      en: "Photocopy of leave certificate",
    },
    {
      id: "Asli surat rekomendasi dari pengurus daerah, wilayah, dan pusat Organisasi Notaris",
      en: "Original letter of recommendation from local, regional, and central Notary Organization boards",
    },
    {
      id: "Asli surat keterangan dari MPD bahwa seluruh kewajiban sebagai Notaris telah diselesaikan",
      en: "Original certificate from MPD stating all obligations as Notary have been resolved",
    },
    {
      id: "Asli surat penunjukan dari MPD kepada Notaris lain sebagai pemegang protokol",
      en: "Original appointment letter from MPD designating another Notary as protocol custodian",
    },
  ],
};

/** Tarif PNBP. */
export const biaya = {
  dasar: {
    id: "PP Nomor 45 Tahun 2024 tentang Penerimaan Negara Bukan Pajak, tarif pada siklus 2025",
    en: "Government Regulation No. 45/2024 concerning Non-Tax State Revenue, rates for the 2025 cycle",
  },
  butir: [
    {
      jenis: {
        id: "Biaya akses pendaftaran",
        en: "Registration access fee",
      },
      tarif: "Rp200.000",
    },
    {
      jenis: {
        id: "PNBP pengangkatan Notaris",
        en: "PNBP for Notary appointment",
      },
      tarif: "Rp1.500.000",
    },
    {
      jenis: {
        id: "Pindah wilayah Kategori A",
        en: "Office transfer Category A",
      },
      tarif: "Rp100.000.000",
    },
    {
      jenis: {
        id: "Pindah wilayah Kategori B",
        en: "Office transfer Category B",
      },
      tarif: "Rp50.000.000",
    },
    {
      jenis: {
        id: "Pindah wilayah Kategori C",
        en: "Office transfer Category C",
      },
      tarif: "Rp25.000.000",
    },
    {
      jenis: {
        id: "Pindah wilayah Kategori C ke A",
        en: "Office transfer Category C to A",
      },
      tarif: "Rp150.000.000",
    },
  ],
  catatan: {
    id: "Di luar tarif PNBP tersebut, proses pengangkatan dan pindah wilayah jabatan Notaris tidak dikenakan biaya apa pun.",
    en: "Beyond the aforementioned PNBP rates, no other fees are charged for Notary appointment and office transfer processes.",
  },
};

/** Peraturan yang menjadi dasar seluruh ketentuan di halaman ini. */
export const dasarHukum = [
  {
    id: "Undang-Undang Nomor 30 Tahun 2004 tentang Jabatan Notaris sebagaimana diubah dengan Undang-Undang Nomor 2 Tahun 2014",
    en: "Law Number 30 of 2004 concerning Notary Position as amended by Law Number 2 of 2014",
  },
  {
    id: "Peraturan Menteri Hukum Nomor 17 Tahun 2025 tentang Formasi Jabatan Notaris dan Penentuan Kategori Daerah",
    en: "Minister of Law Regulation Number 17 of 2025 concerning Notary Formations and Regional Category Determination",
  },
  {
    id: "Peraturan Menteri Hukum Nomor 22 Tahun 2025 tentang Syarat dan Tata Cara Pengangkatan, Cuti, Pindah Wilayah, Pemberhentian, dan Perpanjangan Masa Jabatan Notaris",
    en: "Minister of Law Regulation Number 22 of 2025 concerning Terms and Procedures for Appointment, Leave, Transfer, Dismissal, and Extension of Notary Term of Office",
  },
  {
    id: "Peraturan Pemerintah Nomor 45 Tahun 2024 tentang Penerimaan Negara Bukan Pajak",
    en: "Government Regulation Number 45 of 2024 concerning Non-Tax State Revenue",
  },
];
