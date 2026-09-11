import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import imgDekan from "../../assets/images/struktur-organisasi/dekan.png";
import imgKaprodi from "../../assets/images/struktur-organisasi/kaprodi.png";
import imgSekprodi from "../../assets/images/struktur-organisasi/sekprodi.png";
import imgDenny from "../../assets/images/struktur-organisasi/denny.png";
import imgSoegianto from "../../assets/images/struktur-organisasi/soegianto.png";
import imgSurya from "../../assets/images/struktur-organisasi/anugrah-surya-kusuma.png";
import ZoomableImg from "../../components/ui/ZoomableImg";
import { tenagaKependidikan } from "../../data/profil/tendikData";
import { useT } from "../../i18n/languageContext";

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
    jabatan: {
      id: "Dekan Fakultas Hukum UNISSULA",
      en: "Dean of Faculty of Law UNISSULA",
    },
    tanggungJawab: {
      id: "Penanggung jawab utama kebijakan dan penyelenggaraan pendidikan Fakultas Hukum dan Pascasarjana Kenotariatan.",
      en: "Principal officer in charge of policy and educational delivery of the Faculty of Law and Postgraduate Notarial Studies.",
    },
  },
  {
    jabatan: {
      id: "Ketua Program Studi Magister (S2) Kenotariatan",
      en: "Head of Master of Notarial Law Programme",
    },
    tanggungJawab: {
      id: "Kebijakan akademik, penetapan standar mutu, kurikulum, kepemimpinan prodi, dan hubungan kelembagaan.",
      en: "Academic policy, quality standards setting, curriculum, study programme leadership, and institutional relations.",
    },
  },
  {
    jabatan: {
      id: "Sekretaris Program Studi Magister (S2) Kenotariatan",
      en: "Secretary of Master of Notarial Law Programme",
    },
    tanggungJawab: {
      id: "Penyelenggaraan perkuliahan harian, penjadwalan dosen/mahasiswa, ujian, dan dokumentasi akademik.",
      en: "Daily lecture operations, faculty/student scheduling, examinations, and academic documentation.",
    },
  },
  {
    jabatan: {
      id: "Gugus Penjaminan Mutu",
      en: "Quality Assurance Unit",
    },
    tanggungJawab: {
      id: "Pengawalan mutu akademik, audit mutu internal, dan pendampingan akreditasi program studi.",
      en: "Academic quality oversight, internal quality audits, and study programme accreditation assistance.",
    },
  },
  {
    jabatan: {
      id: "Koordinator Tata Usaha",
      en: "Administrative Coordinator",
    },
    tanggungJawab: {
      id: "Koordinasi operasional ketatausahaan, layanan administratif terpadu, dan pengelolaan staf.",
      en: "Coordination of operational administration, integrated administrative services, and staff management.",
    },
  },
  {
    jabatan: {
      id: "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
      en: "Director of Deed Laboratory & Notary Office Management",
    },
    tanggungJawab: {
      id: "Pengelolaan laboratorium akta, pembinaan praktik pembuatan akta, dan simulasi manajemen kantor notaris.",
      en: "Management of deed laboratory, supervision of deed drafting practice, and notary office management simulation.",
    },
  },
  {
    jabatan: {
      id: "Kepala Perpustakaan",
      en: "Head of Library",
    },
    tanggungJawab: {
      id: "Pengelolaan koleksi pustaka hukum kenotariatan, layanan referensi, dan dukungan literatur penelitian tesis.",
      en: "Management of notarial legal library collections, reference services, and literature support for thesis research.",
    },
  },
  {
    jabatan: {
      id: "Bidang Akademik",
      en: "Academic Affairs Staff",
    },
    tanggungJawab: {
      id: "Layanan administrasi akademik mahasiswa, registrasi, penjadwalan perkuliahan, dan dokumentasi ujian.",
      en: "Student academic administrative services, registration, lecture scheduling, and examination documentation.",
    },
  },
  {
    jabatan: {
      id: "Bidang Keuangan",
      en: "Financial Affairs Staff",
    },
    tanggungJawab: {
      id: "Administrasi keuangan mahasiswa, pembiayaan kegiatan akademik, dan pengelolaan anggaran program studi.",
      en: "Student financial administration, academic activity funding, and study programme budget management.",
    },
  },
  {
    jabatan: {
      id: "Bidang Promosi & Humas",
      en: "Promotion & Public Relations Staff",
    },
    tanggungJawab: {
      id: "Melaksanakan sosialisasi program studi, promosi penerimaan mahasiswa baru, pengelolaan publikasi dan media, serta membangun dan mengembangkan jejaring hubungan dengan alumni.",
      en: "Disseminating study programme information, promoting new student admissions, managing publications and media, and developing alumni relations.",
    },
  },
  {
    jabatan: {
      id: "Bidang Sarana Prasarana",
      en: "Facilities & Infrastructure Staff",
    },
    tanggungJawab: {
      id: "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
      en: "Management of lecture halls, notarial laboratories, and study programme supporting facilities.",
    },
  },
];

/**
 * Sumber untuk section "Pejabat dan Pelaksana" di bawah bagan.
 */
const pejabatPelaksana = [
  {
    title: { id: "DEKAN", en: "DEAN" },
    members: [
      {
        jabatan: {
          id: "Dekan Fakultas Hukum UNISSULA",
          en: "Dean of Faculty of Law UNISSULA",
        },
        name: "Prof. Dr. H. Jawade Hafidz, S.H., M.H.",
        photo: imgDekan,
      },
    ],
  },
  {
    title: {
      id: "KETUA DAN SEKRETARIS PROGRAM STUDI",
      en: "HEAD & SECRETARY OF STUDY PROGRAMME",
    },
    members: [
      {
        jabatan: {
          id: "Ketua Program Studi Magister (S2) Kenotariatan",
          en: "Head of Master of Notarial Law Programme",
        },
        name: "Dr. Nanang Sri Darmadi, S.H., M.H.",
        photo: imgKaprodi,
      },
      {
        jabatan: {
          id: "Sekretaris Program Studi Magister (S2) Kenotariatan",
          en: "Secretary of Master of Notarial Law Programme",
        },
        name: "Dr. Toni Triyanto, S.H., M.H.",
        photo: imgSekprodi,
      },
    ],
  },
  {
    title: {
      id: "GUGUS PENJAMINAN MUTU",
      en: "QUALITY ASSURANCE UNIT",
    },
    members: [
      {
        jabatan: {
          id: "Ketua Gugus Penjaminan Mutu",
          en: "Head of Quality Assurance Unit",
        },
        name: "Prof. Dr. Soegianto, S.H., M.Kn.",
        photo: imgSoegianto,
      },
      {
        jabatan: {
          id: "Sekretaris Gugus Penjaminan Mutu",
          en: "Secretary of Quality Assurance Unit",
        },
        name: "Dr. Denny Suwondo, S.H., M.H.",
        photo: imgDenny,
      },
      {
        jabatan: {
          id: "Anggota Gugus Penjaminan Mutu",
          en: "Member of Quality Assurance Unit",
        },
        name: "Anugrah Surya Kusuma, S.H., M.H.",
        photo: imgSurya,
      },
    ],
  },
  {
    title: {
      id: "TATA USAHA DAN ADMINISTRASI",
      en: "ADMINISTRATIVE & SECRETARIAT STAFF",
    },
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
  const t = useT();

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
            caption={`${name} — ${t(jabatan)}`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span className="font-heading text-lg sm:text-xl font-bold text-gray-400">
            {initialsOf(name)}
          </span>
        )}
      </div>
      <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary block mb-1 leading-snug">
        {t(jabatan)}
      </span>
      <p className="font-heading text-xs sm:text-sm font-bold text-heading leading-snug">
        {name}
      </p>
    </motion.div>
  );
}

const strukturText = {
  metaTitle: {
    id: "Struktur Organisasi | MKn UNISSULA",
    en: "Organisational Structure | MKn UNISSULA",
  },
  metaDesc: {
    id: "Struktur Organisasi Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA: Dekan, Kaprodi, Sekprodi, Koordinator Tata Usaha, dan Tim Administrasi.",
    en: "Organisational Structure of Master of Notarial Law Programme (MKn) Faculty of Law UNISSULA: Dean, Head of Programme, Secretary, Administrative Coordinator, and Administration Team.",
  },
  badge: {
    id: "STRUKTUR ORGANISASI DAN TATA KELOLA",
    en: "ORGANISATIONAL STRUCTURE & GOVERNANCE",
  },
  heading: {
    id: "Garis tanggung jawab yang jelas dan terstruktur",
    en: "Clear and structured lines of responsibility",
  },
  desc: {
    id: "Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA dipimpin oleh Ketua Program Studi yang bertanggung jawab langsung kepada Dekan Fakultas Hukum. Sekretaris Program Studi mengoordinasi penyelenggaraan akademik harian, didukung oleh Koordinator Tata Usaha beserta empat bidang pelaksana administrasi.",
    en: "The Master of Notarial Law Programme at the Faculty of Law UNISSULA is led by the Head of Study Programme, who reports directly to the Dean of the Faculty of Law. The Programme Secretary coordinates daily academic operations, supported by the Administrative Coordinator and four administrative divisions.",
  },
  chartTitle: {
    id: "Bagan Struktur Organisasi",
    en: "Organisational Structure Chart",
  },
  scrollHelper: {
    id: "Geser ke samping",
    en: "Scroll horizontally",
  },
  chartDekan: {
    id: "DEKAN FAKULTAS HUKUM",
    en: "DEAN FACULTY OF LAW",
  },
  chartSupport: {
    id: "UNIT PENUNJANG AKADEMIK",
    en: "ACADEMIC SUPPORT UNIT",
  },
  chartKaprodi: {
    id: "KETUA PROGRAM STUDI (KAPRODI)",
    en: "HEAD OF STUDY PROGRAMME",
  },
  chartGpm: {
    id: "GUGUS PENJAMIN MUTU",
    en: "QUALITY ASSURANCE UNIT",
  },
  chartSekprodi: {
    id: "SEKRETARIS PRODI (SEKPRODI)",
    en: "PROGRAMME SECRETARY",
  },
  chartTu: {
    id: "KOORDINATOR TATA USAHA",
    en: "ADMINISTRATIVE COORDINATOR",
  },
  chartAkademik: {
    id: "BIDANG AKADEMIK",
    en: "ACADEMIC AFFAIRS",
  },
  chartKeuangan: {
    id: "BIDANG KEUANGAN",
    en: "FINANCIAL AFFAIRS",
  },
  chartPromosi: {
    id: "PROMOSI & HUMAS",
    en: "PROMOTION & PR",
  },
  chartSarpras: {
    id: "SARANA PRASARANA",
    en: "FACILITIES & INFRASTRUCTURE",
  },
  chartPerpus: {
    id: "KEPALA PERPUSTAKAAN",
    en: "HEAD OF LIBRARY",
  },
  chartLab: {
    id: "DIREKTUR LAB",
    en: "LAB DIRECTOR",
  },
  pejabatTitle: {
    id: "Pejabat dan Pelaksana",
    en: "Officials and Executives",
  },
  tanggungJawabTitle: {
    id: "Pejabat dan Tanggung Jawab",
    en: "Officials and Responsibilities",
  },
  colJabatan: {
    id: "JABATAN",
    en: "POSITION",
  },
  colTanggungJawab: {
    id: "TANGGUNG JAWAB UTAMA",
    en: "PRIMARY RESPONSIBILITIES",
  },
  footnote: {
    id: "Struktur organisasi Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA disusun untuk menjamin akuntabilitas, tata kelola akademik yang kredibel, serta pelayanan prima kepada seluruh mahasiswa dan pemangku kepentingan.",
    en: "The organisational structure of the Master of Notarial Law Programme at the Faculty of Law UNISSULA is designed to ensure accountability, credible academic governance, and excellent service to all students and stakeholders.",
  },
};

export default function StrukturOrganisasi() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(strukturText.metaTitle)}</title>
        <meta
          name="description"
          content={t(strukturText.metaDesc)}
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
            {t(strukturText.badge)}
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            {/* Left Column: Heading */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                {t(strukturText.heading)}
              </h2>
            </motion.div>

            {/* Right Column: Paragraph */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 text-sm sm:text-base text-body leading-relaxed space-y-4"
            >
              <p>
                {t(strukturText.desc)}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section Bagan Organisasi Visual */}
        <section className="space-y-6">
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
                {t(strukturText.chartTitle)}
              </span>
              <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium bg-gray-50 px-2.5 py-1 rounded border border-gray-200">
                <span>{t(strukturText.scrollHelper)}</span>
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

                {/* LEVEL 1 — DEKAN */}
                <div
                  className="absolute bg-white border-2 border-primary/80 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 22, left: 500, width: 320, height: 92 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-tight mb-1.5">
                    {t(strukturText.chartDekan)}
                  </span>
                </div>

                {/* LEVEL 2A — UNIT PENUNJANG AKADEMIK */}
                <div
                  className="absolute bg-gradient-to-br from-red-50 via-red to-amber-50/30 border-2 border-red-300 p-4 text-center rounded-xs shadow-2xs flex flex-col items-center justify-center hover:border-primary/50 transition-colors"
                  style={{ top: 158, left: 50, width: 280, height: 100 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block mb-1">
                    {t(strukturText.chartSupport)}
                  </span>
                </div>

                {/* LEVEL 2B — KAPRODI */}
                <div
                  className="absolute bg-white border-2 border-primary p-4 text-center rounded-xs shadow-sm flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 158, left: 506, width: 308, height: 100 }}
                >
                  <span className="text-lg font-bold tracking-[0.12em] uppercase text-primary block leading-tight mb-1.5">
                    {t(strukturText.chartKaprodi)}
                  </span>
                </div>

                {/* LEVEL 2C — GUGUS PENJAMIN MUTU */}
                <div
                  className="absolute bg-gradient-to-br from-red-50 via-red to-amber-50/30 border-2 border-red-300 p-4 text-center rounded-xs shadow-2xs flex flex-col items-center justify-center hover:border-primary/50 transition-colors"
                  style={{ top: 158, left: 1002, width: 280, height: 100 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block mb-1">
                    {t(strukturText.chartGpm)}
                  </span>
                </div>

                {/* LEVEL 3 — SEKPRODI */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 300, left: 506, width: 308, height: 92 }}
                >
                  <span className="text-lg font-bold tracking-[0.12em] uppercase text-primary block leading-tight mb-1.5">
                    {t(strukturText.chartSekprodi)}
                  </span>
                </div>

                {/* LEVEL 4 — KEPALA TATA USAHA */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 432, left: 520, width: 280, height: 64 }}
                >
                  <span className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none mb-1">
                    {t(strukturText.chartTu)}
                  </span>
                </div>

                {/* LEVEL 5 — 4 BIDANG */}
                {/* Bidang 1: Akademik */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 346, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    {t(strukturText.chartAkademik)}
                  </p>
                </div>

                {/* Bidang 2: Keuangan */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 558, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    {t(strukturText.chartKeuangan)}
                  </p>
                </div>

                {/* Bidang 3: Promosi & Humas */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 770, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    {t(strukturText.chartPromosi)}
                  </p>
                </div>

                {/* Bidang 4: Sarana Prasarana */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 544, left: 974, width: 196, height: 120 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    {t(strukturText.chartSarpras)}
                  </p>
                </div>

                {/* LEVEL 6 — UNIT PENUNJANG AKADEMIK (children) */}
                {/* A. Perpustakaan */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 716, left: 14, width: 220, height: 118 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    {t(strukturText.chartPerpus)}
                  </p>
                </div>

                {/* B. Direktur Lab */}
                <div
                  className="absolute bg-white border-2 border-primary/70 p-4 text-center rounded-xs shadow-xs flex flex-col items-center justify-center hover:border-primary transition-colors"
                  style={{ top: 716, left: 346, width: 196, height: 118 }}
                >
                  <p className="text-lg font-bold tracking-[0.14em] uppercase text-primary block leading-none">
                    {t(strukturText.chartLab)}
                  </p>
                </div>
              </div>{/* /relative canvas */}
            </div>{/* /overflow-x-auto */}
          </motion.div>{/* /card */}
        </section>

        {/* Section Pejabat dan Pelaksana */}
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
              {t(strukturText.pejabatTitle)}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-full h-[1.5px] bg-heading mt-3 mb-8"
            />
          </motion.div>

          <div className="space-y-10">
            {pejabatPelaksana.map((group, gIdx) => (
              <motion.div
                key={group.title.id || gIdx}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <motion.span
                  variants={itemVariants}
                  className="text-lg flex justify-center font-bold tracking-wider text-primary uppercase mb-4"
                >
                  {t(group.title)}
                </motion.span>
                <div className="flex flex-wrap justify-center gap-3">
                  {group.members.map((member, mIdx) => (
                    <PersonCard
                      key={`${member.name}-${mIdx}`}
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
              {t(strukturText.tanggungJawabTitle)}
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
                    {t(strukturText.colJabatan)}
                  </th>
                  <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    {t(strukturText.colTanggungJawab)}
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
                      {t(item.jabatan)}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body leading-relaxed align-top">
                      {t(item.tanggungJawab)}
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
            {t(strukturText.footnote)}
          </motion.p>
        </motion.section>
      </div>
    </>
  );
}
