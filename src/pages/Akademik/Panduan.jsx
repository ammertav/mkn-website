import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { FiBookOpen, FiFileText } from "react-icons/fi";

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
    title: "Pedoman Akademik",
    desc: "Ketentuan penyelenggaraan pendidikan: beban dan masa studi, registrasi, perkuliahan, evaluasi hasil belajar, cuti akademik, hingga kelulusan.",
  },
  {
    id: 2,
    title: "Pedoman Praktek Laboratorium Manajemen Kantor Notaris/PPAT",
    desc: "Tata cara dan lembar kerja pelaksanaan praktik laboratorium manajemen kantor Notaris/PPAT.",
  },
  {
    id: 3,
    title: "Pedoman Penulisan Proposal & Tesis",
    desc: "Format baku dan sistematika penulisan usulan penelitian (proposal) serta naskah tesis.",
    // Jalan masuk pengajuan izin riset diletakkan tepat setelah kartu ini agar
    // berurutan dengan pedoman penulisan proposal dan tesis.
    diikutiFormIzinRiset: true,
  },
  {
    id: 4,
    title: "Standar Operasional Prosedur (SOP) Yudisium & Wisuda",
    desc: "Prosedur dan persyaratan administratif yudisium serta wisuda program magister.",
  },
];

/** Satu kartu dokumen pedoman beserta keadaan ketersediaan berkasnya. */
function KartuPedoman({ item }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12 hover:border-gray-300 transition-all duration-200 shadow-2xs group">
      {/* Sisi Kiri: Ikon Buku + Judul + Deskripsi */}
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
          <FiBookOpen />
        </div>

        <div className="space-y-2 flex-1 min-w-0 max-w-2xl">
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug group-hover:text-primary transition-colors">
            {item.title}
          </h2>
          <p className="text-xs sm:text-sm text-body leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Sisi Kanan: Keadaan berkas */}
      <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
        <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-dashed border-gray-300 bg-gray-50 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
          Belum tersedia
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
  return (
    <div className="bg-primary/5 border border-primary/30 rounded-xs p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 lg:gap-12">
      <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
        <div className="text-primary text-2xl sm:text-3xl mt-0.5 shrink-0">
          <FiFileText />
        </div>

        <div className="space-y-2 flex-1 min-w-0 max-w-2xl">
          <h2 className="font-heading font-bold text-base sm:text-[18px] text-heading leading-snug">
            Pengajuan Izin Riset, Wawancara, dan Penelitian
          </h2>
          <p className="text-xs sm:text-sm text-body leading-relaxed">
            Permohonan surat izin riset, wawancara, dan penelitian diajukan secara daring melalui
            formulir yang disediakan program studi. Berkas pengajuan diperiksa dan ditindaklanjuti
            oleh bagian akademik.
          </p>
        </div>
      </div>

      <div className="shrink-0 flex items-center self-start sm:self-center pl-10 sm:pl-0">
        <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-dashed border-gray-300 bg-white/60 text-gray-400 rounded-xs text-xs sm:text-sm font-semibold cursor-not-allowed select-none">
          Formulir akan segera tersedia
        </span>
      </div>
    </div>
  );
}

export default function Panduan() {
  return (
    <>
      <Helmet>
        <title>Panduan Akademik & Prosedur | MKn UNISSULA</title>
        <meta
          name="description"
          content="Daftar dokumen pedoman akademik Program Studi Magister Kenotariatan UNISSULA serta pengajuan izin riset, wawancara, dan penelitian."
        />
      </Helmet>

      <div className="space-y-10 font-body text-body">
        {/* Header Title Section */}
        <div>
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-bold text-heading tracking-tight leading-tight">
            Panduan Akademik
          </h1>
          <div className="w-full h-[2px] bg-primary my-4" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-5xl">
            Panduan akademik memuat ketentuan penyelenggaraan pendidikan Magister Kenotariatan: beban dan masa studi, registrasi, perkuliahan, cuti akademik, hingga kelulusan.
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
