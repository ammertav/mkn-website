import { motion } from "framer-motion";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const eventsData = [
  {
    id: 1,
    slug: "seminar-nasional-pendaftaran-tanah-elektronik-2026",
    title:
      "Seminar Nasional: Implikasi Yuridis Pendaftaran Tanah Elektronik bagi Notaris & PPAT",
    date: "2026-09-01",
    time: "09:00 - 12:00 WIB",
    category: "Seminar & Konferensi",
    venue:
      "Auditorium Utama Lantai 3 Gedung Pascasarjana / Hybrid Zoom",
    speaker:
      "Prof. Dr. H. Ahmad Fauzan, S.H., M.Hum. & Dirjen Penetapan Hak dan Pendaftaran Tanah ATR/BPN",
    organizer: "Program Studi Magister Kenotariatan UNISSULA",
    description:
      "Membahas secara mendalam pergeseran kewenangan PPAT dalam era sertifikat tanah elektronik serta mitigasi risiko hukum atas potensi sengketa kepemilikan dan pembuktian di pengadilan.",
    fullDescription:
      "Seminar nasional ini menghadirkan regulator dari Kementerian ATR/BPN serta pakar hukum pertanahan untuk mengkaji kesiapan profesi notaris/PPAT dalam mengimplementasikan peralihan hak secara digital, kepastian hukum warkah elektronik, dan perlindungan bagi pembeli beriktikad baik.",
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://unissula.ac.id/pendaftaran-seminar",
    cp: "Sekretariat MKn: 0812-3456-7890 (Ibu Fitri)",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "stadium-generale-etika-profesi-notaris-modern",
    title:
      "Stadium Generale: Integritas & Tantangan Etika Profesi Notaris di Era Kecerdasan Buatan",
    date: "2026-09-01",
    time: "14:00 - 16:30 WIB",
    category: "Kuliah Pakar",
    venue:
      "Ruang Seminar MKn 3.01 / Live YouTube MKn UNISSULA",
    speaker:
      "Dr. Toni Triyanto, S.H., M.H. & Pengurus Pusat Ikatan Notaris Indonesia (PP INI)",
    organizer: "HMP MKn UNISSULA & Prodi MKn",
    description:
      "Kuliah umum perdana semester gasal yang mengupas tuntas batasan etik, kerahasiaan protokol notaris, dan penerapan teknologi AI tanpa melanggar Undang-Undang Jabatan Notaris (UUJN).",
    fullDescription:
      "Perkembangan teknologi generatif menuntut calon notaris memahami batasan antara otomasi administrasi dan keharusan kehadiran fisik para pihak serta pembacaan akta secara langsung di hadapan notaris.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://unissula.ac.id/stadium-generale",
    cp: "HMP MKn: 0813-9876-5432 (Sdr. Rizky)",
    isFeatured: true,
  },
  {
    id: 3,
    slug: "workshop-bedah-kasus-akta-perbankan-syariah",
    title:
      "Workshop & Praktik: Teknik Penyusunan Akta Pembiayaan Perbankan Syariah & Hak Tanggungan",
    date: "2026-09-02",
    time: "08:30 - 15:00 WIB",
    category: "Workshop & Praktik",
    venue:
      "Laboratorium Kenotariatan & Peradilan Semu MKn UNISSULA",
    speaker:
      "Praktisi Notaris Mitra Perbankan Syariah & Dosen Pengampu Hukum Perbankan",
    organizer: "Laboratorium Kenotariatan UNISSULA",
    description:
      "Sesi simulasi intensif penyusunan klausula perjanjian murabahah, musyarakah mutanaqisah, dan proses pemasangan APHT elektronik terintegrasi.",
    fullDescription:
      "Peserta dibimbing langsung oleh notaris senior perbankan syariah dalam menelaah draf minuta, memeriksa syarat formal dan materiil, serta mencegah celah cacat yuridis dalam akta jaminan syariah.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    registrationUrl: "https://unissula.ac.id/workshop-akta",
    cp: "Lab Kenotariatan: 0857-1234-5678",
    isFeatured: false,
  },
];

export default function Events() {
  const formatDateBadge = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getDate().toString().padStart(2, "0");
    const month = dateObj.toLocaleDateString("id-ID", {
      month: "short",
    });

    return `${day} ${month}`;
  };

  const formatDateFull = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={viewportSettings}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
            Agenda & Kegiatan Mendatang
          </h2>
        </motion.div>

        {/* Grid 3-Kolom Acara */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-stretch">
          {eventsData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={viewportSettings}
              className="flex flex-col justify-between h-full bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <div>
                {/* Visual Header / Gambar Acara */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <motion.div
                    initial={{
                      filter: "grayscale(100%)",
                      scale: 1.02,
                    }}
                    whileInView={{
                      filter: "grayscale(0%)",
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.3,
                      ease: "easeOut",
                      delay: 0.15 + index * 0.15,
                    }}
                    viewport={viewportSettings}
                    className="w-full h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </motion.div>

                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full text-heading shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Card Content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: 0.25 + index * 0.15,
                  }}
                  viewport={viewportSettings}
                  className="p-6 space-y-4"
                >
                  {/* Date */}
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                    {formatDateBadge(item.date)}
                  </span>

                  {/* Judul Acara */}
                  <h3 className="font-heading font-bold text-base lg:text-lg text-heading leading-snug group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Ringkasan Deskripsi */}
                  <p className="text-xs sm:text-sm text-body line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}