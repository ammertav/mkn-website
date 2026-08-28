import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

const cplStats = [
  { value: "10", label: "RUMUSAN CPL" },
  { value: "4", label: "RANAH SN-DIKTI" },
  { value: "8", label: "JENJANG KKNI" },
  { value: "2024", label: "PENINJAUAN TERAKHIR" },
];

const cplSections = [
  {
    category: "RANAH SIKAP",
    items: [
      {
        code: "CPL-1",
        desc: "Menjalankan jabatan dan pekerjaan hukum dengan menjunjung nilai keislaman, integritas, kejujuran, serta kode etik profesi notaris.",
      },
      {
        code: "CPL-2",
        desc: "Menunjukkan tanggung jawab atas pekerjaan mandiri dan kelompok, serta kepekaan terhadap kepentingan masyarakat pencari kepastian hukum.",
      },
    ],
  },
  {
    category: "RANAH PENGETAHUAN",
    items: [
      {
        code: "CPL-3",
        desc: "Menguasai teori hukum perdata, hukum agraria, hukum jaminan, dan hukum perusahaan pada tataran mutakhir serta perkembangan doktrinnya.",
      },
      {
        code: "CPL-4",
        desc: "Menguasai asas, norma, dan teknik pembuatan akta autentik beserta konsekuensi yuridis dari setiap pilihan perumusan.",
      },
      {
        code: "CPL-5",
        desc: "Menguasai metode penelitian hukum normatif dan empiris, termasuk pemanfaatan basis data hukum internasional.",
      },
    ],
  },
  {
    category: "RANAH KETERAMPILAN UMUM",
    items: [
      {
        code: "CPL-6",
        desc: "Mengembangkan pemikiran logis, kritis, dan orisinal melalui riset yang menghasilkan karya ilmiah teruji dan layak dipublikasikan.",
      },
      {
        code: "CPL-7",
        desc: "Mengambil keputusan dalam konteks penyelesaian masalah hukum berdasarkan kajian analitis dan argumentasi yang dapat dipertanggungjawabkan.",
      },
    ],
  },
  {
    category: "RANAH KETERAMPILAN KHUSUS",
    items: [
      {
        code: "CPL-8",
        desc: "Merancang dan menyusun akta notaris beserta dokumen pendukungnya secara mandiri, sistematis, dan sesuai kaidah kenotariatan.",
      },
      {
        code: "CPL-9",
        desc: "Menganalisis transaksi keperdataan dan korporasi lintas yurisdiksi serta menyusun pendapat hukum atasnya.",
      },
      {
        code: "CPL-10",
        desc: "Menyampaikan gagasan hukum secara tertulis dan lisan kepada masyarakat akademik maupun pengguna jasa secara terstruktur.",
      },
    ],
  },
];

const instruments = [
  {
    name: "Asesmen mata kuliah (tugas, UTS, UAS)",
    coverage: "CPL-3 s.d. CPL-10",
    period: "Setiap semester",
  },
  {
    name: "Penilaian magang kenotariatan",
    coverage: "CPL-1, CPL-2, CPL-4, CPL-8",
    period: "Semester 3",
  },
  {
    name: "Ujian tesis dan naskah publikasi",
    coverage: "CPL-5, CPL-6, CPL-10",
    period: "Semester 4",
  },
  {
    name: "Survei kepuasan pengguna lulusan",
    coverage: "Seluruh CPL",
    period: "Tahunan",
  },
];

export default function CapaianPembelajaran() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Capaian Pembelajaran Lulusan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Capaian Pembelajaran Lulusan (CPL) Program Studi Magister Kenotariatan (MKn) UNISSULA pada empat ranah SN-DIKTI dan instrumen pengukurannya."
        />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Capaian Pembelajaran Lulusan
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-3xl">
            Capaian Pembelajaran Lulusan (CPL) memuat sepuluh rumusan yang menjadi acuan
            penyusunan mata kuliah, rencana pembelajaran semester, dan instrumen penilaian.
            Setiap rumusan dipetakan pada empat ranah Standar Nasional Pendidikan Tinggi dan
            diukur melalui asesmen yang terdokumentasi pada setiap mata kuliah.
          </p>
        </div>

        {/* Stats Grid 4 Kolom */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-gray-200 bg-white">
          {cplStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 space-y-2 border-r border-b border-gray-200"
            >
              <div className="text-3xl sm:text-4xl font-heading text-primary leading-none">
                {stat.value}
              </div>
              <p className="text-[11px] font-medium tracking-wider text-gray-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tabel CPL Berdasarkan Ranah */}
        <div className="border border-gray-200 bg-white overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-heading">
                <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                  KODE
                </th>
                <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                  RUMUSAN CAPAIAN PEMBELAJARAN
                </th>
              </tr>
            </thead>
            <tbody>
              {cplSections.map((section, sIdx) => (
                <Fragment key={sIdx}>
                  <tr className="bg-gray-50/90 border-y border-gray-200">
                    <td
                      colSpan={2}
                      className="px-5 sm:px-6 py-2.5 text-[11px] font-bold tracking-wider text-heading uppercase"
                    >
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item, iIdx) => (
                    <tr
                      key={iIdx}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-5 sm:px-6 font-bold text-heading whitespace-nowrap align-top">
                        {item.code}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-sm text-body leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 2: Instrumen Pengukuran */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Instrumen Pengukuran
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    INSTRUMEN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    CAKUPAN CPL
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    PERIODE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {instruments.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 text-heading font-normal">
                      {item.name}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.coverage}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
