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
};
