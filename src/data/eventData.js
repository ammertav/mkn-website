/**
 * Data Event & Kalender Agenda Magister Kenotariatan UNISSULA
 */
import yudisium from "../assets/images/agenda/yudisium.jpg";
import funrun from "../assets/images/agenda/funrun.jpg";
import kuliah from "../assets/images/agenda/agenda-1.jpg"

export const eventCategories = [
  "Semua Kategori",
  "Seminar & Konferensi",
  "Kuliah Pakar",
  "Workshop & Praktik",
  "Ujian & Tesis",
  "Akademik & Kemahasiswaan",
];

export const eventData = [
  {
    id: 1,
    slug: "penglepasan-lulusan-ke-98-september-2026",
    title: "Penglepasan Lulusan Ke-98 Periode September 2026",
    date: "2026-09-18",
    time: "14:00 sampai selesai",
    category: "Akademik & Kemahasiswaan",
    venue:
      "Gedung MAC (Majapahit Convention) / MAC Ballroom, Jl. Majapahit No.168, Gayamsari, Kota Semarang",
    organizer: "Program Studi Magister Kenotariatan FH UNISSULA",
    description:
      "Penglepasan Lulusan Ke-98 Periode September 2026 sebagai bentuk penghargaan atas capaian akademik para lulusan Program Magister Kenotariatan, sekaligus ruang silaturahmi antara pimpinan, dosen, tenaga kependidikan, lulusan, dan keluarga.",
    fullDescription:
      "Fakultas Hukum Universitas Islam Sultan Agung (MKn FH UNISSULA) akan menyelenggarakan " +
      "Penglepasan Lulusan Ke-98 Periode September 2026 sebagai rangkaian kegiatan akademik " +
      "sekaligus bentuk penghargaan kepada para lulusan yang telah menyelesaikan seluruh proses " +
      "pendidikan pada Program Magister Kenotariatan.\n\n" +
      "Kegiatan penglepasan lulusan akan dilaksanakan di Gedung MAC (Majapahit Convention) atau " +
      "MAC Ballroom, yang berlokasi di Jl. Majapahit No.168, Gayamsari, Kota Semarang. Acara " +
      "dijadwalkan berlangsung mulai pukul 14.00 hingga 17.30 WIB.\n\n" +
      "Penglepasan lulusan merupakan momentum penting bagi Program Studi MKn FH UNISSULA untuk " +
      "memberikan apresiasi atas capaian akademik para lulusan, sekaligus menjadi ruang silaturahmi " +
      "antara pimpinan, dosen, tenaga kependidikan, lulusan, dan keluarga. Kegiatan ini juga menandai " +
      "berakhirnya satu tahapan pendidikan dan dimulainya perjalanan baru bagi para lulusan untuk " +
      "mengimplementasikan ilmu pengetahuan, keterampilan, serta nilai-nilai yang diperoleh selama " +
      "menempuh pendidikan.\n\n" +
      "Melalui pendidikan di Magister Kenotariatan FH UNISSULA, para lulusan diharapkan mampu " +
      "mengembangkan kompetensi di bidang hukum kenotariatan serta menerapkannya secara profesional, " +
      "berintegritas, dan bertanggung jawab dalam kehidupan bermasyarakat maupun dalam menjalankan " +
      "profesi.\n\n" +
      "Momentum Penglepasan Lulusan Ke-98 Periode September 2026 juga diharapkan semakin mempererat " +
      "hubungan antara alumni dan almamater. Para lulusan tidak hanya menjadi bagian dari keluarga " +
      "besar UNISSULA, tetapi juga diharapkan berperan sebagai mitra strategis dalam membangun " +
      "jejaring profesi, memberikan kontribusi bagi pengembangan Program Studi, serta membawa nama " +
      "baik almamater di tengah masyarakat.\n\n" +
      "Dengan semangat Bismillah Membangun Generasi Khaira Ummah, MKn FH UNISSULA mengucapkan selamat " +
      "kepada seluruh lulusan Periode September 2026. Semoga ilmu dan pengalaman yang diperoleh selama " +
      "menempuh pendidikan menjadi bekal untuk berkarya, mengabdi, serta memberikan kemanfaatan yang " +
      "sebesar-besarnya bagi masyarakat, bangsa, dan negara.",
    image: yudisium,
    cp: "+62 823-1222-8181 (Ikrom, S.H., M.H.)",
    isFeatured: true,
  },
  {
    id: 3,
    slug: "sultan-agung-fun-run-2026",
    title: "Sultan Agung Fun Run 5.5K",
    date: "2026-09-27",
    time: "05.00 WIB sampai selesai",
    category: "Akademik & Kemahasiswaan",
    venue:
      "Halaman Kantor Gubernur Jawa Tengah, Jl. Pahlawan No.9, Kota Semarang",
    organizer: "Universitas Islam Sultan Agung (UNISSULA)",
    description:
      "Lari bersama sejauh 5,5 kilometer bertajuk “Bergerak Tanpa Batas”, dengan titik " +
      "start dan finis di Kantor Gubernur Jawa Tengah, Kota Semarang.",
    fullDescription:
      "Dalam rangka membangun semangat hidup sehat, kebersamaan, dan mempererat silaturahmi " +
      "keluarga besar Sultan Agung bersama masyarakat, Sultan Agung Fun Run 5.5K akan " +
      "diselenggarakan pada Minggu, 27 September 2026, mulai pukul 05.00 WIB hingga selesai, " +
      "dengan titik start dan finish di Kantor Gubernur Jawa Tengah, Kota Semarang. Mengusung " +
      "semangat “Bergerak Tanpa Batas”, kegiatan ini mengajak seluruh peserta menikmati " +
      "olahraga lari sejauh 5,5 kilometer dalam suasana yang sehat, menyenangkan, dan penuh " +
      "kebersamaan.\n\n" +
      "Rute Fun Run akan melintasi sejumlah ruas utama Kota Semarang, dimulai dari Kantor " +
      "Gubernur Jawa Tengah menuju Jl. Gajah Mada, Jl. Depok, Jl. Pemuda, Tugu Muda, " +
      "Jl. Pandanaran, Jl. Tri Lomba Juang, Taman Indonesia Kaya, Jl. Pahlawan, kemudian " +
      "kembali finis di Kantor Gubernur Jawa Tengah.\n\n" +
      "Dengan biaya pendaftaran sebesar Rp125.000, peserta akan memperoleh berbagai fasilitas, " +
      "antara lain jersey, medali, BIB, goodie bag, voucher MCU, refreshment, official photo, " +
      "serta kesempatan mendapatkan beragam doorprize menarik. Hadiah yang disiapkan antara lain " +
      "2 tiket umrah, 5 motor Scoopy, 10 sepeda listrik, 10 kulkas, 10 mesin cuci, 10 rice " +
      "cooker, 10 LED TV, serta 10 logam mulia.\n\n" +
      "Program Studi Magister Kenotariatan Fakultas Hukum UNISSULA turut mendukung semangat " +
      "Sultan Agung Fun Run sebagai bagian dari upaya membangun budaya hidup sehat, memperkuat " +
      "kebersamaan, serta menghadirkan interaksi positif antara sivitas akademika dan " +
      "masyarakat. Melalui kegiatan ini, diharapkan semangat “Bergerak Tanpa Batas” " +
      "tidak hanya diwujudkan melalui aktivitas olahraga, tetapi juga menjadi inspirasi untuk " +
      "terus bergerak, berkarya, dan memberikan manfaat bagi sesama.",
    image: funrun,
    cp: "+62 823-1222-8181 (Ikrom, S.H., M.H.)",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "kuliah-umum-bersertifikat-september-2026",
    title: "Kuliah Umum Bersertifikat MKn UNISSULA 2026",
    date: "2026-09-26",
    time: "13.00–15.00 WIB",
    category: "Kuliah Pakar",
    // Lokasi belum disebutkan pada pengumuman resmi; diisi sementara agar
    // halaman tidak menampilkan lokasi acara lain.
    venue: "Akan diinformasikan lebih lanjut oleh panitia",
    organizer: "Program Studi Magister Kenotariatan Fakultas Hukum UNISSULA",
    speaker:
      "Dr. Arief Muliawan, S.H., M.H., QGIA — Direktur Jenderal Pengadaan Tanah dan " +
      "Pengembangan Pertanahan Kementerian ATR/BPN",
    registrationUrl: "https://bit.ly/kuliahumum-sept2026",
    description:
      "Kuliah umum bersertifikat bersama Direktur Jenderal Pengadaan Tanah dan Pengembangan " +
      "Pertanahan Kementerian ATR/BPN, membahas mitigasi risiko hukum dalam peralihan dan " +
      "pembebanan hak atas tanah.",
    fullDescription:
      "Program Magister Kenotariatan Fakultas Hukum UNISSULA menyelenggarakan Kuliah Umum " +
      "Bersertifikat pada Sabtu, 26 September 2026, pukul 13.00–15.00 WIB.\n\n" +
      "Kuliah umum ini menghadirkan Dr. Arief Muliawan, S.H., M.H., QGIA, Direktur Jenderal " +
      "Pengadaan Tanah dan Pengembangan Pertanahan Kementerian ATR/BPN, dengan tema " +
      "“Mitigasi Risiko Hukum dalam Peralihan dan Pembebanan Hak: Sinergi ATR/BPN dan " +
      "Notaris/PPAT dalam Pencegahan Sengketa dan Mafia Tanah.”\n\n" +
      "Kegiatan ini bertujuan memperkuat pemahaman mahasiswa mengenai risiko hukum dalam " +
      "praktik pertanahan, pentingnya asas kehati-hatian, serta sinergi antara ATR/BPN dan " +
      "Notaris/PPAT dalam mewujudkan kepastian hukum dan mencegah sengketa pertanahan.\n\n" +
      "Biaya pendaftaran sebesar Rp250.000,- dengan fasilitas peserta sebagai berikut:\n\n" +
      "• Sertifikat kegiatan (syarat wisuda)\n\n" +
      "• Materi dalam bentuk PDF\n\n" +
      "• Snack\n\n" +
      "• Terdaftar sebagai peserta Sultan Agung Fun Run 2026\n\n" +
      "Sultan Agung Fun Run 2026 akan dilaksanakan pada Minggu, 27 September 2026, di Kantor " +
      "Gubernur Jawa Tengah, Kota Semarang, untuk kategori 5,5K, dengan benefit berupa jersey, " +
      "medali, BIB, goodie bag, refreshment, official photo, dan doorprize.\n\n" +
      "Pendaftaran dilakukan melalui dua langkah:\n\n" +
      "• Transfer biaya Rp250.000,- ke rekening BSI nomor 8383885575 atas nama Magister " +
      "Kenotariatan UNISSULA.\n\n" +
      "• Mengisi data pendaftaran melalui tautan https://bit.ly/kuliahumum-sept2026 secara " +
      "lengkap dan benar, serta mengunggah bukti pembayaran pada formulir yang tersedia.\n\n" +
      "Catatan: pendaftaran Fun Run paling lambat tanggal 20 September 2026. Pendaftar Kuliah " +
      "Umum setelah tanggal tersebut tidak memperoleh fasilitas Fun Run.",
    image: kuliah,
    cp: "+62 823-1222-8181 (Ikrom, S.H., M.H.)",
    isFeatured: true,
  },
];

/**
 * Format tanggal ke format Indonesia lengkap
 * Contoh: "2026-09-01" -> "1 September 2026"
 */
export function formatIndoDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const mIndex = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)} ${monthNames[mIndex]} ${year}`;
}

/**
 * Format nama hari dalam Bahasa Indonesia
 */
export function getIndoDayName(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00");
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[date.getDay()];
}

/**
 * Generate Google Calendar URL
 */
export function generateGoogleCalendarUrl(event) {
  if (!event) return "#";
  const dateClean = event.date.replace(/-/g, "");
  // Default waktu jika parsing gagal
  let startTime = "090000";
  let endTime = "120000";

  if (event.time) {
    const match = event.time.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
    if (match) {
      startTime = `${match[1]}${match[2]}00`;
      endTime = `${match[3]}${match[4]}00`;
    }
  }

  // Waktu format Google Calendar (UTC offset +7 WIB -> kurangi 7 jam atau gunakan format lokal dengan timezone)
  const startParam = `${dateClean}T${startTime}`;
  const endParam = `${dateClean}T${endTime}`;

  const title = encodeURIComponent(event.title || "Agenda MKn UNISSULA");
  const details = encodeURIComponent(
    `${event.fullDescription || event.description || ""}\n\nPenyelenggara: ${event.organizer || "MKn UNISSULA"}`
  );
  const location = encodeURIComponent(event.venue || "MKn UNISSULA");

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startParam}/${endParam}&details=${details}&location=${location}&ctz=Asia/Jakarta`;
}

/**
 * Download file .ics untuk Apple Calendar / Outlook
 */
export function downloadIcsFile(event) {
  if (!event) return;
  const dateClean = event.date.replace(/-/g, "");
  let startTime = "090000";
  let endTime = "120000";

  if (event.time) {
    const match = event.time.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
    if (match) {
      startTime = `${match[1]}${match[2]}00`;
      endTime = `${match[3]}${match[4]}00`;
    }
  }

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//MKn UNISSULA//Event Calendar//ID",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:event-${event.id || Date.now()}@unissula.ac.id`,
    `DTSTAMP:${dateClean}T000000Z`,
    `DTSTART;TZID=Asia/Jakarta:${dateClean}T${startTime}`,
    `DTEND;TZID=Asia/Jakarta:${dateClean}T${endTime}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${(event.fullDescription || event.description || "").replace(/\n/g, "\\n")}`,
    `LOCATION:${event.venue || "MKn UNISSULA"}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.slug || "agenda-mkn"}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

