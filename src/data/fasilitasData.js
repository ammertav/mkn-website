export const ruangKelasData = {
  header: {
    category: "RUANG KELAS",
    title: "Kelas kecil, diskusi yang menuntut kesiapan",
    paragraphs: [
      "Seluruh perkuliahan Magister Kenotariatan berlangsung dalam kelas berkapasitas paling banyak tiga puluh mahasiswa. Tata letak meja tapal kuda menempatkan pengajar dan mahasiswa pada jarak percakapan, sehingga metode sokratik dan pembahasan kasus akta dapat berjalan tanpa jeda.",
      "Setiap ruang dilengkapi proyektor resolusi tinggi, papan tulis lebar, sambungan nirkabel, dan perekam kuliah yang tersimpan pada kanal e-learning program studi.",
    ],
  },
  standard: {
    title: "Enam ruang, satu standar",
    description:
      "Ruang kelas berada di lantai tiga Gedung Pascasarjana, berdampingan dengan ruang dosen dan laboratorium kenotariatan agar perpindahan antar sesi praktik berlangsung singkat.",
    specs: [
      { label: "Kapasitas per ruang", value: "24 – 30 mahasiswa" },
      { label: "Luas rata-rata", value: "64 m²" },
      { label: "Rasio dosen dan mahasiswa", value: "1 : 12" },
      { label: "Jam operasional", value: "07.00 – 21.00" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      alt: "Foto ruang kelas dengan tata letak tapal kuda",
      caption: "Foto ruang kelas dengan tata letak tapal kuda",
    },
  },
  ruangList: [
    {
      code: "MKn 3.01",
      kapasitas: "30",
      peruntukan: "Perkuliahan reguler semester satu dan dua",
      perangkat: "Proyektor, perekam kuliah",
    },
    {
      code: "MKn 3.02",
      kapasitas: "30",
      peruntukan: "Perkuliahan reguler semester tiga",
      perangkat: "Proyektor, perekam kuliah",
    },
    {
      code: "MKn 3.03",
      kapasitas: "24",
      peruntukan: "Kelas kelas internasional dan kuliah tamu",
      perangkat: "Proyektor, sistem penerjemahan",
    },
    {
      code: "MKn 3.04",
      kapasitas: "24",
      peruntukan: "Seminar proposal dan seminar hasil",
      perangkat: "Proyektor, konferensi video",
    },
    {
      code: "MKn 3.05",
      kapasitas: "16",
      peruntukan: "Bimbingan tesis dan diskusi kelompok",
      perangkat: "Papan tulis, layar sentuh",
    },
    {
      code: "Ruang Sidang",
      kapasitas: "40",
      peruntukan: "Ujian tesis tertutup dan terbuka",
      perangkat: "Meja sidang, tata suara",
    },
  ],
};

export const laboratoriumData = {
  header: {
    category: "LABORATORIUM",
    title: "Tempat teori diuji pada dokumen sungguhan",
    paragraphs: [
      "Tiga laboratorium menopang pembelajaran praktik: laboratorium kenotariatan untuk penyusunan akta, ruang peradilan semu untuk simulasi persidangan dan pembacaan akta, serta laboratorium komputer hukum untuk penelusuran basis data peraturan dan putusan.",
      "Setiap sesi praktik dipandu satu dosen dan satu asisten praktisi, dengan berkas kasus yang diperbarui setiap semester dari perkembangan praktik di kantor notaris mitra.",
    ],
  },
  standard: {
    title: "Laboratorium Kenotariatan",
    description:
      "Dua puluh empat stasiun kerja dengan berkas kasus, buku daftar akta, dan perangkat lunak penyusunan minuta. Mahasiswa mengerjakan berkas dari penerimaan klien hingga penyimpanan protokol.",
    specs: [
      { label: "Stasiun kerja", value: "24 unit" },
      { label: "Sesi praktik per pekan", value: "8 sesi" },
      { label: "Pendamping", value: "Dosen dan asisten praktisi" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      alt: "Foto laboratorium kenotariatan atau ruang peradilan semu",
      caption: "Foto laboratorium kenotariatan atau ruang peradilan semu",
    },
  },
  labList: [
    {
      nama: "Laboratorium Kenotariatan",
      kapasitas: "24",
      penggunaan:
        "Teknik pembuatan akta, praktik protokol notaris, simulasi penerimaan klien",
    },
    {
      nama: "Ruang Peradilan Semu",
      kapasitas: "40",
      penggunaan:
        "Simulasi persidangan perdata, pembacaan akta, latihan kompetisi peradilan semu",
    },
    {
      nama: "Laboratorium Komputer Hukum",
      kapasitas: "30",
      penggunaan:
        "Penelusuran basis data peraturan, putusan, dan jurnal hukum berlangganan",
    },
  ],
  gallery: [
    {
      title: "Praktik penyusunan akta",
      image:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Simulasi persidangan",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Laboratorium komputer hukum",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const researchCenterData = {
  header: {
    category: "STUDENT RESEARCH CENTER",
    title: "Ruang kerja bagi riset yang sedang berjalan",
    paragraphs: [
      "Student Research Center menyediakan meja kerja tetap bagi mahasiswa yang sedang menyusun tesis, ruang diskusi kelompok kecil, dan layanan pendampingan metodologi oleh dosen jaga pada jam yang telah ditentukan.",
      "Pusat ini juga mengelola klinik penulisan artikel ilmiah, pemeriksaan kemiripan naskah, dan pendampingan pengiriman artikel ke jurnal bereputasi.",
    ],
  },
  servicesSection: {
    title: "Layanan yang tersedia",
    services: [
      {
        title: "Meja riset tetap",
        description:
          "Dua puluh meja dengan loker, dialokasikan satu semester bagi mahasiswa semester akhir melalui pendaftaran daring.",
      },
      {
        title: "Klinik metodologi",
        description:
          "Konsultasi rancangan penelitian dan teknik pengumpulan data setiap Senin dan Rabu, 13.00 hingga 16.00.",
      },
      {
        title: "Pendampingan publikasi",
        description:
          "Penyuntingan bahasa, pemeriksaan kemiripan, dan penyesuaian gaya penulisan sesuai ketentuan jurnal tujuan.",
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      alt: "Foto ruang kerja riset mahasiswa",
      caption: "Foto ruang kerja riset mahasiswa",
    },
  },
  scheduleList: [
    {
      layanan: "Ruang kerja riset",
      waktu: "Senin – Sabtu, 08.00 – 20.00",
      ketentuan: "Pendaftaran per semester, wajib mengisi catatan kunjungan",
    },
    {
      layanan: "Ruang diskusi kelompok",
      waktu: "Senin – Jumat, 09.00 – 17.00",
      ketentuan:
        "Pemesanan paling lambat satu hari sebelumnya, maksimal dua jam",
    },
    {
      layanan: "Klinik metodologi",
      waktu: "Senin dan Rabu, 13.00 – 16.00",
      ketentuan: "Membawa rancangan penelitian dan lembar konsultasi",
    },
    {
      layanan: "Pemeriksaan kemiripan naskah",
      waktu: "Selasa dan Kamis, 10.00 – 15.00",
      ketentuan:
        "Satu berkas per kunjungan, hasil diterima dalam dua hari kerja",
    },
  ],
};

export const perpustakaanData = {
  header: {
    category: "PERPUSTAKAAN",
    title: "Koleksi hukum untuk penelitian tingkat magister",
    paragraphs: [
      "Perpustakaan Pascasarjana menyimpan koleksi hukum perdata, agraria, dan kenotariatan, termasuk himpunan peraturan lama, kumpulan yurisprudensi, dan arsip tesis program studi sejak tahun dua ribu delapan.",
      "Mahasiswa memperoleh akses ke basis data hukum berlangganan dari dalam maupun luar kampus melalui sambungan jaringan pribadi virtual.",
    ],
  },
  bannerImage: {
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1800&q=80",
    alt: "Foto rak dan ruang baca perpustakaan",
    caption: "Foto rak dan ruang baca perpustakaan",
  },
  stats: [
    { value: "12.400", label: "Judul Buku Hukum" },
    { value: "9", label: "Basis Data Berlangganan" },
    { value: "860", label: "Arsip Tesis" },
    { value: "96", label: "Kursi Ruang Baca" },
  ],
  servicesList: [
    {
      layanan: "Peminjaman koleksi",
      ketentuan: "4 judul, 14 hari",
      keterangan: "Dapat diperpanjang satu kali melalui katalog daring",
    },
    {
      layanan: "Koleksi rujukan",
      ketentuan: "Baca di tempat",
      keterangan: "Himpunan peraturan, ensiklopedia hukum, kamus istilah",
    },
    {
      layanan: "Arsip tesis dan disertasi",
      ketentuan: "Baca di tempat",
      keterangan: "Salinan digital tersedia melalui repositori institusi",
    },
    {
      layanan: "Akses basis data",
      ketentuan: "Kampus dan jaringan pribadi virtual",
      keterangan: "Akun diberikan pada pekan orientasi",
    },
    {
      layanan: "Bimbingan penelusuran",
      ketentuan: "Jumat, 13.00 – 15.00",
      keterangan: "Teknik penelusuran peraturan, putusan, dan jurnal",
    },
  ],
};
