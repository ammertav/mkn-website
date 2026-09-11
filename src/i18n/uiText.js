/**
 * Kamus label antarmuka — teks yang bukan konten, melainkan bagian dari UI:
 * tombol, placeholder, status, label navigasi.
 *
 * Konten (judul dokumen, deskripsi fasilitas, profil dosen, dst.) TIDAK
 * diletakkan di sini. Konten tetap tinggal di file `src/data/*` memakai bentuk
 * dua bahasa `{ id, en }`, lalu dibaca dengan useT().
 *
 * Cara pakai:
 *   const ui = useUi();
 *   <button>{ui("download")}</button>
 */
export const uiText = {
  // Navigasi & umum
  home: { id: "Beranda", en: "Home" },
  search: { id: "Cari", en: "Search" },
  searchPlaceholder: { id: "Cari...", en: "Search..." },
  webmail: { id: "Webmail", en: "Webmail" },
  backTo: { id: "Kembali ke", en: "Back to" },
  readMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
  viewAll: { id: "Lihat Semua", en: "View All" },

  // Label seksi di kepala halaman (teks kecil di atas judul)
  sectionAcademic: { id: "AKADEMIK", en: "ACADEMIC" },

  // Dokumen & unduhan
  download: { id: "Unduh", en: "Download" },
  notAvailable: { id: "Belum tersedia", en: "Not yet available" },
  fileNotUploaded: { id: "Berkas belum diunggah", en: "File not uploaded yet" },
  documents: { id: "Dokumen", en: "Documents" },

  // Status konten
  emptyContent: { id: "Konten belum tersedia.", en: "Content is not available yet." },
  emptyDocuments: { id: "Daftar dokumen belum tersedia.", en: "No documents available yet." },
  loading: { id: "Memuat...", en: "Loading..." },

  // Paginasi
  previous: { id: "Sebelumnya", en: "Previous" },
  next: { id: "Berikutnya", en: "Next" },
  page: { id: "Halaman", en: "Page" },

  // Halaman error
  notFoundTitle: { id: "Halaman Tidak Ditemukan", en: "Page Not Found" },
  notFoundBody: {
    id: "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
    en: "The page you are looking for does not exist or has been moved.",
  },

  // Beranda & Footer
  followUs: { id: "Ikuti Kami", en: "Follow Us" },
  allRightsReserved: { id: "Hak Cipta Dilindungi.", en: "All Rights Reserved." },
  viewAllNews: { id: "LIHAT SEMUA BERITA", en: "VIEW ALL NEWS" },
  viewAllAnnouncements: { id: "LIHAT SEMUA PENGUMUMAN", en: "VIEW ALL ANNOUNCEMENTS" },
  viewAllEvents: { id: "LIHAT SEMUA AGENDA", en: "VIEW ALL EVENTS" },
  applyNow: { id: "DAFTAR SEKARANG", en: "APPLY NOW" },
  readMoreSimple: { id: "Baca selengkapnya", en: "Read more" },
  showLess: { id: "Tutup", en: "Show less" },
  latestNews: { id: "Berita Terbaru", en: "Latest News" },
  latestAnnouncements: { id: "Pengumuman Terbaru", en: "Latest Announcements" },
  upcomingEvents: { id: "Agenda & Kegiatan Mendatang", en: "Upcoming Events & Activities" },
  facilitiesAndCulture: { id: "Fasilitas & Budaya", en: "Facilities & Culture" },
  faqTitle: { id: "Pertanyaan yang Sering Diajukan", en: "Frequently Asked Questions" },
  faqSubtitle: {
    id: "Temukan jawaban atas pertanyaan umum seputar program studi, beasiswa, perkuliahan, dan pendaftaran.",
    en: "Find answers to frequently asked questions regarding study programmes, scholarships, academics, and admissions.",
  },
  alumniTestimonials: { id: "Kata Alumni", en: "Alumni Testimonials" },
  viewFullProfile: { id: "Lihat Profil Lengkap", en: "View Full Profile" },
  headOfProgrammeWelcome: { id: "SAMBUTAN KETUA PROGRAM STUDI", en: "HEAD OF STUDY PROGRAMME WELCOME" },
};
