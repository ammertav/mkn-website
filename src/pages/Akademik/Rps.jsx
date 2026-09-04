import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiSearch,
  FiFolder,
  FiExternalLink,
} from "react-icons/fi";
import { useT } from "../../i18n/languageContext";
import KartuRpsAccordion from "../../components/Akademik/rps/KartuRpsAccordion";
import {
  daftarSemesterRps,
  daftarMataKuliahRps,
  GDRIVE_RPS_ROOT_URL,
} from "../../data/akademik/rpsData";

const halaman = {
  meta: {
    title: {
      id: "Rencana Pembelajaran Semester (RPS) | MKn UNISSULA",
      en: "Semester Learning Plans (RPS) | MKn UNISSULA",
    },
    description: {
      id: "Katalog Rencana Pembelajaran Semester (RPS), bahan tayang perkuliahan, kuis, serta naskah ujian UTS/UAS Program Studi Magister Kenotariatan UNISSULA berbasis Kurikulum OBE 2026.",
      en: "Semester Learning Plans (RPS) catalogue, lecture slides, quizzes, and midterm/final examination papers of the UNISSULA Master of Notarial Law Study Programme under the 2026 OBE Curriculum.",
    },
  },
  label: {
    id: "AKADEMIK",
    en: "ACADEMIC",
  },
  judul: {
    id: "Rencana Pembelajaran Semester (RPS)",
    en: "Semester Learning Plans (RPS)",
  },
  intro: {
    id: "Rencana Pembelajaran Semester (RPS) dan paket instrumen perkuliahan memuat capaian pembelajaran lulusan (CPL), bahan kajian, slide perkuliahan 1 semester, kuis, serta naskah evaluasi UTS dan UAS pada Kurikulum OBE Tahun 2026. Seluruh berkas resmi dapat diunduh langsung melalui repositori Google Drive program studi.",
    en: "The Semester Learning Plans (RPS) and teaching instrument suites establish intended learning outcomes, subject matter, 1-semester lecture slide packages, quizzes, and midterm/final examination papers under the 2026 OBE Curriculum. Official documents can be downloaded directly from the study programme Google Drive repository.",
  },
  cariPlaceholder: {
    id: "Cari mata kuliah atau kode MK...",
    en: "Search courses or course code...",
  },
  tidakDitemukan: {
    id: "Tidak ada mata kuliah yang cocok dengan kata kunci pencarian Anda.",
    en: "No courses match your search criteria.",
  },
  resetCari: {
    id: "Reset Pencarian",
    en: "Reset Search",
  },
  gdriveBanner: {
    judul: {
      id: "Repositori Induk Dokumen RPS & Pembelajaran di Google Drive",
      en: "Central Master RPS & Course Documents Google Drive Repository",
    },
    deskripsi: {
      id: "Dosen dan mahasiswa dapat menelusuri seluruh direktori berkas per semester (RPS, Slide Bahan Tayang .pptx, Kuis, Soal UTS & UAS) secara terpusat melalui Google Drive resmi Program Studi Magister Kenotariatan FH UNISSULA.",
      en: "Faculty and students can navigate all semester directories (RPS syllabi, .pptx slides, quizzes, and midterm/final exam papers) centrally via the official UNISSULA Notarial Law Master's Google Drive.",
    },
    tombol: {
      id: "Buka Google Drive RPS",
      en: "Open RPS Google Drive",
    },
  },
};

export default function Rps() {
  const t = useT();
  const [semesterAktif, setSemesterAktif] = useState("all");
  const [kataKunci, setKataKunci] = useState("");

  // Filter Mata Kuliah berdasarkan semester & kata kunci pencarian
  const mataKuliahTerfilter = useMemo(() => {
    return daftarMataKuliahRps.filter((mk) => {
      const matchSemester =
        semesterAktif === "all" || String(mk.semester) === semesterAktif;

      const q = kataKunci.toLowerCase().trim();
      const matchSearch =
        !q ||
        mk.kode.toLowerCase().includes(q) ||
        mk.nama.id.toLowerCase().includes(q) ||
        mk.nama.en.toLowerCase().includes(q) ||
        mk.deskripsi.id.toLowerCase().includes(q) ||
        mk.deskripsi.en.toLowerCase().includes(q);

      return matchSemester && matchSearch;
    });
  }, [semesterAktif, kataKunci]);

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-10 font-body text-body">
        {/* Header Title Section */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            {t(halaman.label)}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
        </div>

        {/* Toolbar Interaktif: Filter Tab Semester + Search Bar */}
        <div className="space-y-5 pt-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Tabs Navigasi Semester */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-gray-200 md:border-b-0">
              {daftarSemesterRps.map((sem) => {
                const isActive = semesterAktif === sem.id;
                return (
                  <button
                    key={sem.id}
                    type="button"
                    onClick={() => setSemesterAktif(sem.id)}
                    className={`shrink-0 px-4 py-2 rounded-xs text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-2xs"
                        : "bg-white border border-gray-200 text-body hover:text-heading hover:border-gray-300"
                    }`}
                  >
                    {t(sem.label)}
                  </button>
                );
              })}
            </div>

            {/* Kolom Pencarian Mata Kuliah */}
            <div className="relative w-full md:w-72 lg:w-80">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="text"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                placeholder={t(halaman.cariPlaceholder)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xs text-xs sm:text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Baris Informasi Hasil */}
          <div className="flex items-center justify-between text-xs text-body px-1">
            <span>
              Menampilkan <strong>{mataKuliahTerfilter.length}</strong> mata kuliah
              {semesterAktif !== "all" ? ` pada Semester ${semesterAktif}` : ""}
            </span>
          </div>
        </div>

        {/* Daftar Kartu Mata Kuliah */}
        {mataKuliahTerfilter.length > 0 ? (
          <div className="space-y-4">
            {mataKuliahTerfilter.map((mk) => (
              <KartuRpsAccordion key={mk.id} mk={mk} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-gray-300 rounded-xs p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto text-xl">
              <FiSearch />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-heading">
                {t(halaman.tidakDitemukan)}
              </p>
              <p className="text-xs text-body">
                Coba gunakan kata kunci lain atau pilih tab "Semua Semester".
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setKataKunci("");
                setSemesterAktif("all");
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xs text-xs font-semibold hover:bg-primary/90 transition-colors"
            >
              {t(halaman.resetCari)}
            </button>
          </div>
        )}

        {/* Banner Repositori Google Drive Terpusat */}
        <div className="bg-primary/5 border border-primary/30 rounded-xs p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
            <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0 p-3 bg-white border border-primary/20 rounded-xs shadow-2xs">
              <FiFolder />
            </div>
            <div className="space-y-1.5 min-w-0">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-heading">
                {t(halaman.gdriveBanner.judul)}
              </h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed max-w-3xl">
                {t(halaman.gdriveBanner.deskripsi)}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center self-start lg:self-center">
            <a
              href={GDRIVE_RPS_ROOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white hover:bg-primary/90 rounded-xs text-xs sm:text-sm font-semibold transition-colors shadow-2xs group"
            >
              <FiFolder className="text-base" />
              <span>{t(halaman.gdriveBanner.tombol)}</span>
              <FiExternalLink className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
