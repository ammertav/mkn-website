import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { FiBookOpen, FiFileText } from "react-icons/fi";
import { useT } from "../../i18n/languageContext";

/**
 * Dokumen pedoman akademik.
 *
 * Berkas PDF-nya belum diterima dari program studi, sehingga tidak ada
 * `downloadUrl` maupun ukuran berkas — keduanya diisi setelah dokumen asli
 * tersedia. Sampai saat itu tombolnya menampilkan keadaan "Belum tersedia".
 */
const academicGuidelines = [
  {
    id: 1,
    title: { id: "Pedoman Akademik", en: "Academic Guidelines" },
    desc: {
      id:
        "Ketentuan penyelenggaraan pendidikan: beban dan masa studi, registrasi, " +
        "perkuliahan, evaluasi hasil belajar, cuti akademik, hingga kelulusan.",
      en:
        "Provisions governing the delivery of education: study load and duration, " +
        "registration, teaching, assessment of learning, academic leave, and graduation.",
    },
  },
  {
    id: 2,
    title: {
      id: "Pedoman Praktek Laboratorium Manajemen Kantor Notaris/PPAT",
      en: "Guidelines for the Notary/PPAT Office Management Laboratory",
    },
    desc: {
      id:
        "Tata cara dan lembar kerja pelaksanaan praktik laboratorium manajemen kantor " +
        "Notaris/PPAT.",
      en:
        "Procedures and worksheets for laboratory practice in Notary/PPAT office " +
        "management.",
    },
  },
  {
    id: 3,
    title: {
      id: "Pedoman Penulisan Proposal & Tesis",
      en: "Guidelines for Writing Proposals & Theses",
    },
    desc: {
      id:
        "Format baku dan sistematika penulisan usulan penelitian (proposal) serta naskah " +
        "tesis.",
      en:
        "The standard format and structure for writing research proposals and thesis " +
        "manuscripts.",
    },
    // Jalan masuk pengajuan izin riset diletakkan tepat setelah kartu ini agar
    // berurutan dengan pedoman penulisan proposal dan tesis.
    diikutiFormIzinRiset: true,
  },
  {
    id: 4,
    title: {
      id: "Standar Operasional Prosedur (SOP) Yudisium & Wisuda",
      en: "Standard Operating Procedure (SOP) for Yudisium & Graduation",
    },
    desc: {
      id: "Prosedur dan persyaratan administratif yudisium serta wisuda program magister.",
      en:
        "Procedures and administrative requirements for yudisium (final assessment board) " +
        "and graduation of the master's programme.",
    },
  },
];

/** Teks halaman Panduan Akademik. */
const halaman = {
  meta: {
    title: {
      id: "Panduan Akademik & Prosedur | MKn UNISSULA",
      en: "Academic Guidelines & Procedures | MKn UNISSULA",
    },
    description: {
      id:
        "Daftar dokumen pedoman akademik Program Studi Magister Kenotariatan UNISSULA " +
        "serta pengajuan izin riset, wawancara, dan penelitian.",
      en:
        "The academic guideline documents of the UNISSULA Master of Notarial Law Study " +
        "Programme, together with applications for research and interview permits.",
    },
  },
  judul: { id: "Panduan Akademik", en: "Academic Guidelines" },
  intro: {
    id:
      "Panduan akademik memuat ketentuan penyelenggaraan pendidikan Magister Kenotariatan: " +
      "beban dan masa studi, registrasi, perkuliahan, cuti akademik, hingga kelulusan.",
    en:
      "The academic guidelines set out the provisions for delivering the Master of Notarial " +
      "Law programme: study load and duration, registration, teaching, academic leave, and " +
      "graduation.",
  },
  belumTersedia: { id: "Belum tersedia", en: "Not yet available" },
  izinRiset: {
    judul: {
      id: "Pengajuan Izin Riset, Wawancara, dan Penelitian",
      en: "Applications for Research and Interview Permits",
    },
    keterangan: {
      id:
        "Permohonan surat izin riset, wawancara, dan penelitian diajukan secara daring " +
        "melalui formulir yang disediakan program studi. Berkas pengajuan diperiksa dan " +
        "ditindaklanjuti oleh bagian akademik.",
      en:
        "Applications for research and interview permit letters are submitted online " +
        "through the form provided by the study programme. Submissions are reviewed and " +
        "processed by the academic office.",
    },
    tombol: {
      id: "Formulir akan segera tersedia",
      en: "Form will be available soon",
    },
  },
};

/** Satu kartu dokumen pedoman beserta keadaan ketersediaan berkasnya. */
function KartuPedoman({ item }) {
  const t = useT();

  return (
    <div className="bg-white border border-gray-200 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12 hover:border-gray-300 transition-all duration-200 shadow-2xs group">
      {/* Sisi Kiri: Ikon Buku + Judul + Deskripsi */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
          <FiBookOpen />
        </div>

        <div className="space-y-2 flex-1 min-w-0 max-w-2xl">
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
            {t(item.title)}
          </h2>
          <p className="text-xs sm:text-sm text-body leading-relaxed">{t(item.desc)}</p>
        </div>
      </div>

      {/* Sisi Kanan: Keadaan berkas */}
      <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
        <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-dashed border-gray-300 bg-gray-50 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
          {t(halaman.belumTersedia)}
        </span>
      </div>
    </div>
  );
}

/**
 * Jalan masuk pengajuan izin riset, wawancara, dan penelitian.
 *
 * Formulir dan dashboard pengelolaannya belum dibangun, sehingga tombolnya
 * sengaja tidak aktif — lebih baik daripada tautan yang menuju halaman kosong.
 */
function PengajuanIzinRiset() {
  const t = useT();

  return (
    <div className="bg-primary/5 border border-primary/30 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12">
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
          <FiFileText />
        </div>

        <div className="space-y-2 flex-1 min-w-0 max-w-2xl">
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug">
            {t(halaman.izinRiset.judul)}
          </h2>
          <p className="text-xs sm:text-sm text-body leading-relaxed">
            {t(halaman.izinRiset.keterangan)}
          </p>
        </div>
      </div>

      <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
        <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-dashed border-gray-300 bg-white/60 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
          {t(halaman.izinRiset.tombol)}
        </span>
      </div>
    </div>
  );
}

export default function Panduan() {
  const t = useT();

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
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-5xl">
            {t(halaman.intro)}
          </p>
        </div>

        {/* List Card Panduan Akademik */}
        <div className="space-y-4">
          {academicGuidelines.map((item) => (
            <Fragment key={item.id}>
              <KartuPedoman item={item} />
              {item.diikutiFormIzinRiset && <PengajuanIzinRiset />}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
