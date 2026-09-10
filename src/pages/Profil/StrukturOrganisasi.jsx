import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FiBook,
  FiBookOpen,
  FiDollarSign,
  FiEdit3,
  FiGlobe,
  FiHome,
} from "react-icons/fi";

import imgDekan from "../../assets/images/struktur-organisasi/dekan.png";
import imgKaprodi from "../../assets/images/struktur-organisasi/kaprodi.png";
import imgSekprodi from "../../assets/images/struktur-organisasi/sekprodi.png";
import imgDenny from "../../assets/images/struktur-organisasi/denny.png";
import imgSoegianto from "../../assets/images/struktur-organisasi/soegianto.png";
import imgSurya from "../../assets/images/struktur-organisasi/anugrah-surya-kusuma.png";
import ZoomableImg from "../../components/ui/ZoomableImg";
import { tenagaKependidikan } from "../../data/profil/tendikData";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

// Container animation
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Standard item animation
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const strukturPejabat = [
  {
    jabatan: "Dekan Fakultas Hukum UNISSULA",
    tanggungJawab:
      "Penanggung jawab utama kebijakan dan penyelenggaraan pendidikan Fakultas Hukum dan Pascasarjana Kenotariatan.",
  },
  {
    jabatan: "Ketua Program Studi Magister (S2) Kenotariatan",
    tanggungJawab:
      "Kebijakan akademik, penetapan standar mutu, kurikulum, kepemimpinan prodi, dan hubungan kelembagaan.",
  },
  {
    jabatan: "Sekretaris Program Studi Magister (S2) Kenotariatan",
    tanggungJawab:
      "Penyelenggaraan perkuliahan harian, penjadwalan dosen/mahasiswa, ujian, dan dokumentasi akademik.",
  },
  {
    jabatan: "Gugus Penjaminan Mutu",
    tanggungJawab:
      "Pengawalan mutu akademik, audit mutu internal, dan pendampingan akreditasi program studi.",
  },
  {
    jabatan: "Koordinator Tata Usaha",
    tanggungJawab:
      "Koordinasi operasional ketatausahaan, layanan administratif terpadu, dan pengelolaan staf.",
  },
  {
    jabatan: "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
    tanggungJawab:
      "Pengelolaan laboratorium akta, pembinaan praktik pembuatan akta, dan simulasi manajemen kantor notaris.",
  },
  {
    jabatan: "Kepala Perpustakaan",
    tanggungJawab:
      "Pengelolaan koleksi pustaka hukum kenotariatan, layanan referensi, dan dukungan literatur penelitian tesis.",
  },
  {
    jabatan: "Bidang Akademik",
    tanggungJawab:
      "Layanan administrasi akademik mahasiswa, registrasi, penjadwalan perkuliahan, dan dokumentasi ujian.",
  },
  {
    jabatan: "Bidang Keuangan",
    tanggungJawab:
      "Administrasi keuangan mahasiswa, pembiayaan kegiatan akademik, dan pengelolaan anggaran program studi.",
  },
  {
    jabatan: "Bidang Promosi & Humas",
    tanggungJawab:
      "Melaksanakan sosialisasi program studi, promosi penerimaan mahasiswa baru, pengelolaan publikasi dan media, serta membangun dan mengembangkan jejaring hubungan dengan alumni.",
  },
  {
    jabatan: "Bidang Sarana Prasarana",
    tanggungJawab:
      "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
  },
];

/**
 * Sumber untuk section "Pejabat dan Pelaksana" di bawah bagan. Dikelompokkan
 * per unit, bukan per baris tabel, karena beberapa unit beranggota lebih dari
 * satu orang (mis. GPM, Promosi & Humas, Sarana Prasarana).
 *
 * `photo: null` berarti foto belum tersedia — kartu jatuh ke inisial nama
 * sebagai gantinya (lihat komponen InitialsAvatar).
 */
const pejabatPelaksana = [
  {
    title: "DEKAN",
    members: [
      {
        jabatan: "Dekan Fakultas Hukum UNISSULA",
        name: "Prof. Dr. H. Jawade Hafidz, S.H., M.H.",
        photo: imgDekan,
      },
    ],
  },
  {
    title: "KETUA DAN SEKRETARIS PROGRAM STUDI",
    members: [
      {
        jabatan: "Ketua Program Studi Magister (S2) Kenotariatan",
        name: "Dr. Nanang Sri Darmadi, S.H., M.H.",
        photo: imgKaprodi,
      },
      {
        jabatan: "Sekretaris Program Studi Magister (S2) Kenotariatan",
        name: "Dr. Toni Triyanto, S.H., M.H.",
        photo: imgSekprodi,
      },
    ],
  },
  {
    title: "GUGUS PENJAMINAN MUTU",
    members: [
      {
        jabatan: "Ketua Gugus Penjaminan Mutu",
        name: "Prof. Dr. Soegianto, S.H., M.Kn.",
        photo: imgSoegianto,
      },
      {
        jabatan: "Sekretaris Gugus Penjaminan Mutu",
        name: "Dr. Denny Suwondo, S.H., M.H.",
        photo: imgDenny,
      },
      {
        jabatan: "Anggota Gugus Penjaminan Mutu",
        name: "Anugrah Surya Kusuma, S.H., M.H.",
        photo: imgSurya,
      },

    ],
  },
  {
    title: "TATA USAHA DAN ADMINISTRASI",
    // Dibaca dari sumber tunggal; halaman Tenaga Kependidikan memakai daftar
    // yang sama persis, jadi pembaruan cukup dilakukan di satu berkas.
    members: tenagaKependidikan.map(({ jabatan, name, photo }) => ({ jabatan, name, photo })),
  },
];

/** Gelar akademik/jabatan yang diabaikan saat menyusun inisial fallback. */
const GELAR = new Set([
  "dr", "prof", "hc", "drs", "dra", "h", "hj", "ir",
  "sh", "mh", "mkn", "spd", "se", "skom",
]);

function initialsOf(name) {
  const words = name
    .replace(/[.,]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !GELAR.has(w.toLowerCase()));
  return (words.slice(0, 2).map((w) => w[0]) || ["?"]).join("").toUpperCase();
}

function PersonCard({ jabatan, name, photo }) {
  return (
    // Akar kartu memakai motion agar bisa distagger induknya; tanpa induk
    // bervarian, kartu ini tampil apa adanya.
    <motion.div
      variants={cardVariants}
      className="w-32 sm:w-36 lg:w-40 border border-gray-200 bg-white rounded-xs shadow-2xs p-3 flex flex-col items-center text-center hover:border-primary/40 transition-colors"
    >
      <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xs overflow-hidden bg-gray-100 mb-3 border border-gray-200 flex items-center justify-center shrink-0">
        {photo ? (
          <ZoomableImg
            src={photo}
            alt={name}
            caption={`${name} — ${jabatan}`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span className="font-heading text-lg sm:text-xl font-bold text-gray-400">
            {initialsOf(name)}
          </span>
        )}
      </div>
      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary block mb-1 leading-snug">
        {jabatan}
      </span>
      <p className="font-heading text-xs sm:text-sm font-bold text-heading leading-snug">
        {name}
      </p>
    </motion.div>
  );
}

const adminUnits = [
  {
    icon: FiEdit3,
    name: "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
  },
  {
    icon: FiBook,
    name: "Direktur Perpustakaan",
  },
  {
    icon: FiBookOpen,
    name: "Akademik",
  },
  {
    icon: FiDollarSign,
    name: "Keuangan",
  },
  {
    icon: FiGlobe,
    name: "Promosi & Humas",
  },
  {
    icon: FiHome,
    name: "Sarana Prasarana",
  },
];

export default function StrukturOrganisasi() {
  return (
    <>
      <Helmet>
        <title>Struktur Organisasi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Struktur Organisasi Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA: Dekan, Kaprodi, Sekprodi, Koordinator Tata Usaha, dan Tim Administrasi."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Section STRUKTUR ORGANISASI Header */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-4"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold tracking-wider text-primary uppercase block"
          >
            STRUKTUR ORGANISASI DAN TATA KELOLA
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            {/* Left Column: Heading */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Garis tanggung jawab yang jelas dan terstruktur
              </h2>
            </motion.div>

            {/* Right Column: Paragraph */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 text-sm sm:text-base text-body leading-relaxed space-y-4"
            >
              <p>
                Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA
                dipimpin oleh Ketua Program Studi yang bertanggung jawab
                langsung kepada Dekan Fakultas Hukum. Sekretaris Program Studi
                mengoordinasi penyelenggaraan akademik harian, didukung oleh
                Koordinator Tata Usaha beserta empat bidang pelaksana administrasi.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section Bagan Organisasi Visual */}
        <section className="space-y-6">
          {/* ============================================================
              BAGAN STRUKTUR ORGANISASI
              Hirarki: Dekan → Kaprodi → Sekprodi → Kepala TU → Bidang
              Koordinasi: Gugus Penjamin Mutu (garis putus-putus merah)
              Unit Penunjang: Lab Akta & Perpustakaan (kiri / bawah)
          ============================================================ */}
          {/*
            Bagan dianimasikan sebagai satu blok utuh. Menganimasikan tiap
            kotaknya sendiri-sendiri akan memutus garis penghubung yang
            digambar dengan posisi absolut, karena garisnya tidak ikut bergeser.
          */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="bg-white border border-gray-200 p-4 sm:p-8 lg:p-10 rounded-xs shadow-2xs overflow-hidden"
          >

            {/* Petunjuk scroll untuk layar kecil */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 lg:hidden">
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                Bagan Struktur Organisasi
              </span>
              <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium bg-gray-50 px-2.5 py-1 rounded border border-gray-200">
                <span>Geser ke samping</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
            </div>

            {/* ── Kanvas yang dapat di-scroll secara horizontal ── */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
              <div className="relative w-[1340px] h-[860px] mx-auto select-none">

                {/* ════════════════════════════════════════════════
                    SVG: GARIS PENGHUBUNG ANTAR JABATAN
                    • Solid (#94A3B8)  = garis komando / struktural
                    • Dashed (#B91C1C) = garis koordinasi / mutu
                    Canvas: 1340 × 860
                ════════════════════════════════════════════════ */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 1340 860"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ── STRUKTURAL (SOLID) ── */}

                  {/* 1. Dekan → Kaprodi */}
                  <line x1="660" y1="112" x2="660" y2="158"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                  {/* 2. Unit Penunjang ↔ Kaprodi (horizontal) */}
                  <line x1="330" y1="207" x2="506" y2="207"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                  {/* 3. Kaprodi → Sekprodi */}
                  <line x1="660" y1="258" x2="660" y2="300"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                  {/* 4. Sekprodi → Kepala Tata Usaha */}
                  <line x1="660" y1="392" x2="660" y2="432"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                  {/* 5. Kepala TU → Bus Bar → 4 Bidang */}
                  <line x1="660" y1="496" x2="660" y2="522"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  {/* Bus bar horizontal */}
                  <line x1="444" y1="522" x2="1072" y2="522"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  {/* Drop ke setiap bidang */}
                  <line x1="444" y1="522" x2="444" y2="544"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="656" y1="522" x2="656" y2="544"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="868" y1="522" x2="868" y2="544"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  <line x1="1072" y1="522" x2="1072" y2="544"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                  {/* 6. Unit Penunjang → Lab Akta & Perpustakaan */}
                  {/* Batang vertikal turun */}
                  <line x1="196" y1="258" x2="196" y2="696"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  {/* Bus bar horizontal ke dua child */}
                  <line x1="124" y1="696" x2="382" y2="696"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  {/* Drop ke Direktur Lab Akta */}
                  <line x1="124" y1="696" x2="124" y2="716"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  {/* Drop ke Direktur Perpustakaan */}
                  <line x1="382" y1="696" x2="382" y2="716"
                    stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

                  {/* ── KOORDINASI / PENJAMINAN MUTU (DASHED MERAH) ── */}

                  {/* A. Kaprodi ←- - -→ Gugus Penjamin Mutu */}
                  <line x1="814" y1="207" x2="1002" y2="207"
                    stroke="#B91C1C" strokeWidth="2"
                    strokeDasharray="6 4" strokeLinecap="round" />

                  {/* B. Gugus Penjamin Mutu → batang vertikal kanan */}
                  <line x1="1212" y1="258" x2="1212" y2="776"
                    stroke="#B91C1C" strokeWidth="2"
                    strokeDasharray="6 4" strokeLinecap="round" />

                  {/* C. Bidang Akademik - - → Direktur Perpustakaan */}
                  <line x1="444" y1="664" x2="444" y2="716"
                    stroke="#B91C1C" strokeWidth="2"
                    strokeDasharray="5 4" strokeLinecap="round" />

                  {/* D. Direktur Perpustakaan - - → Gugus Penjamin Mutu (bawah) */}
                  <line x1="538" y1="776" x2="1212" y2="776"
                    stroke="#B91C1C" strokeWidth="2"
                    strokeDasharray="6 4" strokeLinecap="round" />
                </svg>

                {/* ════════════════════════════════════════════════
                    LEVEL 1 — DEKAN FAKULTAS HUKUM UNISSULA
                    Kotak: 320×92, tengah horizontal di x=660
                ════════════════════════════════════════════════ */}
                <div
                  className="absolute bg-white border-2 border-primary/80 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 22, left: 500, width: 320, height: 92 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-tight mb-1.5">
                    DEKAN
                    <p>FAKULTAS HUKUM</p>
                  </span>
                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 2A — UNIT PENUNJANG AKADEMIK (kiri)
                    Kotak: 280×100
                ════════════════════════════════════════════════ */}
                <div
                  className="absolute bg-gradient-to-br from-red-50 via-red to-amber-50/30 border-2 border-red-300 p-4 text-center rounded-xs shadow-2xs flex flex-col items-center justify-center hover:border-primary/50 transition-colors"
                  style={{ top: 158, left: 50, width: 280, height: 100 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block mb-1">
                    UNIT PENUNJANG AKADEMIK
                  </span>
                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 2B — KETUA PROGRAM STUDI / KAPRODI (tengah)
                    Kotak: 308×100
                ════════════════════════════════════════════════ */}
                <div
                  className="absolute bg-white border-2 border-primary p-4 text-center rounded-xs shadow-sm flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 158, left: 506, width: 308, height: 100 }}
                >
                  <span className="text-lg font-bold tracking-[0.12em] uppercase text-primary block leading-tight mb-1.5">
                    KETUA PROGRAM STUDI (KAPRODI)
                  </span>

                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 2C — GUGUS PENJAMIN MUTU (kanan)
                    Kotak: 270×100, kiri mulai x=1002
                ════════════════════════════════════════════════ */}
                <div
                  className="absolute bg-gradient-to-br from-red-50 via-red to-amber-50/30 border-2 border-red-300 p-4 text-center rounded-xs shadow-2xs flex flex-col items-center justify-center hover:border-primary/50 transition-colors"
                  style={{ top: 158, left: 1002, width: 280, height: 100 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block mb-1">
                    GUGUS PENJAMIN MUTU
                  </span>
                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 3 — SEKRETARIS PROGRAM STUDI (tengah)
                    Kotak: 308×92
                ════════════════════════════════════════════════ */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 300, left: 506, width: 308, height: 92 }}
                >
                  <span className="text-lg font-bold tracking-[0.12em] uppercase text-primary block leading-tight mb-1.5">
                    SEKRETARIS PRODI (SEKPRODI)
                  </span>
                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 4 — KEPALA TATA USAHA (tengah)
                    Kotak: 280×64
                ════════════════════════════════════════════════ */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 432, left: 520, width: 280, height: 64 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none mb-1">
                    KOORDINATOR
                    <p>TATA USAHA</p>
                  </span>

                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 5 — 4 BIDANG PELAKSANA ADMINISTRASI
                    Tersambung dari Kepala TU via bus bar horizontal
                    Kotak masing-masing: 196×120
                ════════════════════════════════════════════════ */}

                {/* Bidang 1: Akademik */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 346, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    BIDANG AKADEMIK
                  </p>

                </div>

                {/* Bidang 2: Keuangan */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 558, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    BIDANG KEUANGAN
                  </p>

                </div>

                {/* Bidang 3: Promosi & Humas */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 770, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    PROMOSI &amp; HUMAS
                  </p>

                </div>

                {/* Bidang 4: Sarana Prasarana */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 974, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    SARANA PRASARANA
                  </p>

                </div>

                {/* ════════════════════════════════════════════════
                    LEVEL 6 — UNIT PENUNJANG AKADEMIK (children)
                    Tersambung dari Unit Penunjang via batang vertikal kiri
                    Kotak: 220×118
                ════════════════════════════════════════════════ */}

                {/* A. Direktur Laboratorium Akta & Manajemen Kantor Notaris */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 716, left: 14, width: 220, height: 118 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    KEPALA PERPUSTAKAAN
                  </p>
                </div>

                {/* B. Direktur Perpustakaan */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 716, left: 346, width: 196, height: 118 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    DIREKTUR LAB
                  </p>

                </div>

              </div>{/* /relative canvas */}
            </div>{/* /overflow-x-auto */}

            {/* ── Legenda (non-aktif, aktifkan jika diperlukan) ──
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 bg-slate-400 rounded-full" />
                <span className="font-medium text-heading">Garis Komando / Hirarkis Struktural</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 border-t-2 border-dashed border-red-600"
                  style={{ borderDasharray: "4 3" }} />
                <span className="font-medium text-heading">Garis Koordinasi / Penjaminan Mutu &amp; Akademik</span>
              </div>
            </div>
            */}

          </motion.div>{/* /card */}
        </section>

        {/* Section Pejabat dan Pelaksana: foto per orang, dikelompokkan per
            unit. Terpisah dari bagan di atas — bagan menunjukkan garis
            komando, section ini menunjukkan orangnya. */}
        <section className="space-y-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.h2
              variants={itemVariants}
              className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal"
            >
              Pejabat dan Pelaksana
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-full h-[1.5px] bg-heading mt-3 mb-8"
            />
          </motion.div>

          <div className="space-y-10">
            {/*
              Tiap grup memicu animasinya sendiri, bukan diikat ke satu induk
              di puncak bagian ini: daftarnya panjang, dan dengan satu pemicu
              grup paling bawah sudah selesai beranimasi jauh sebelum terlihat.
            */}
            {pejabatPelaksana.map((group) => (
              <motion.div
                key={group.title}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <motion.span
                  variants={itemVariants}
                  className="text-lg flex justify-center font-bold tracking-wider text-primary uppercase mb-4"
                >
                  {group.title}
                </motion.span>
                {/* flex-wrap + justify-center: grup 1-3 anggota tampil
                    terpusat, grup besar (Tata Usaha & Administrasi) mengalir
                    ke baris berikutnya tanpa perlu penanganan khusus. */}
                <div className="flex flex-wrap justify-center gap-3">
                  {group.members.map((member) => (
                    <PersonCard
                      key={`${member.jabatan}-${member.name}`}
                      {...member}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Pejabat dan Tanggung Jawab Table */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-6"
        >
          <div>
            <motion.h2
              variants={itemVariants}
              className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal"
            >
              Pejabat dan Tanggung Jawab
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-full h-[1.5px] bg-heading mt-3 mb-8"
            />
          </div>

          <motion.div
            variants={cardVariants}
            className="border border-gray-200 bg-white overflow-x-auto rounded-xs shadow-2xs"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/3">
                    JABATAN
                  </th>
                  <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    TANGGUNG JAWAB UTAMA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm sm:text-[13.5px]">
                {strukturPejabat.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 sm:px-6 font-semibold text-heading align-top">
                      {item.jabatan}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body leading-relaxed align-top">
                      {item.tanggungJawab}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Footnote Notice */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-gray-500 leading-relaxed pt-2"
          >
            Struktur organisasi Program Studi Magister (S2) Kenotariatan
            Fakultas Hukum UNISSULA disusun untuk menjamin akuntabilitas, tata
            kelola akademik yang kredibel, serta pelayanan prima kepada seluruh
            mahasiswa dan pemangku kepentingan.
          </motion.p>
        </motion.section>
      </div>
    </>
  );
}
