/**
 * Akomodasi UNISSULA — asrama mahasiswa dan wisma tamu.
 *
 * SUMBER: dokumen resmi "akomodasi.docx" dari program studi. Deskripsi dan
 * daftar fasilitas disalin dari dokumen tersebut, hanya dirapikan ejaannya.
 *
 * Dokumen sumber tidak memuat tarif, tipe kamar, alamat, maupun narahubung
 * pengelola, sehingga bagian-bagian itu tidak dicantumkan di sini — bukan
 * dikira-kira. Foto kedua akomodasi juga belum diserahkan.
 */
export const akomodasiData = {
  asrama: {
    id: "asrama",
    title: "Sultan Agung Boarding House",
    shortName: "Asrama Mahasiswa",
    header: {
      category: "ASRAMA MAHASISWA",
      title: "Hunian jangka panjang berbudaya islami",
      paragraphs: [
        "Fasilitas akomodasi ini ditujukan untuk hunian jangka panjang bagi mahasiswa maupun tamu, dengan pengelolaan lingkungan yang kental dengan budaya islami.",
        "Selain sebagai tempat tinggal, asrama ini berfungsi sebagai Pesantren Mahasiswa yang bertujuan membentuk karakter khaira ummah berakhlakul karimah serta membiasakan kedisiplinan beribadah.",
      ],
    },
    fasilitas: [
      "Kamar asrama yang didesain nyaman untuk kebutuhan istirahat mahasiswa.",
      "Ruang tunggu tamu.",
      "Area parkir kendaraan yang terjamin keamanannya.",
      "Fasilitas hot spot (Wi-Fi) untuk menunjang kebutuhan belajar.",
      "Area olahraga, seperti lapangan basket dan bola voli.",
      "Program internal berupa bimbingan pengamalan agama Islam serta pembelajaran berbagai bahasa.",
    ],
  },

  guestHouse: {
    id: "guest-house",
    title: "Sultan Agung Guest House",
    shortName: "Guest House",
    header: {
      category: "GUEST HOUSE",
      title: "Penginapan resmi bagi tamu akademik",
      paragraphs: [
        "Sultan Agung Guest House adalah fasilitas akomodasi resmi yang diperuntukkan bagi tamu akademik, dosen tamu, peneliti, maupun peserta seminar.",
        "Guest house ini menyediakan tempat menginap yang nyaman dan strategis bagi tamu universitas, sekaligus menjadi lokasi transit praktis untuk acara wisuda, seminar nasional, atau kunjungan kerja.",
      ],
    },
    fasilitas: [
      "Kamar nyaman yang dilengkapi AC, televisi, dan kamar mandi dalam.",
      "Restoran atau kantin yang menyediakan layanan konsumsi dan sarapan bagi para tamu.",
      "Akses strategis menuju fakultas, rektorat, dan fasilitas umum kota.",
    ],
  },
};
