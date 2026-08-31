import { Helmet } from "react-helmet-async";

const mainProfiles = [
  {
    code: "PL-1",
    title: "Notaris dan Pejabat Pembuat Akta Tanah",
    desc: "Mampu menyusun akta autentik yang sah, cermat, dan berkepastian hukum, serta menjalankan jabatan dengan integritas sesuai Undang-Undang Jabatan Notaris dan kode etik profesi.",
  },
  {
    code: "PL-2",
    title: "Konsultan Hukum Kontrak dan Pertanahan",
    desc: "Mampu memberikan pendapat hukum dan merancang skema transaksi keperdataan, jaminan, serta peralihan hak atas tanah bagi korporasi maupun perorangan.",
  },
  {
    code: "PL-3",
    title: "Peneliti dan Pengajar Hukum Kenotariatan",
    desc: "Mampu melakukan penelitian hukum yang orisinal dengan metodologi yang dapat dipertanggungjawabkan dan mendiseminasikan hasilnya pada jurnal serta forum ilmiah bereputasi.",
  },
  {
    code: "PL-4",
    title: "Legal Officer dan Analis Kepatuhan",
    desc: "Mampu mengelola risiko hukum, menelaah dokumen korporasi, dan memastikan kepatuhan perusahaan terhadap regulasi nasional maupun praktik lintas yurisdiksi.",
  },
];

const profileCplMapping = [
  {
    code: "PL-1",
    cpl: "CPL-1, CPL-2, CPL-4, CPL-7, CPL-8",
    field: "Kantor notaris, kantor PPAT",
  },
  {
    code: "PL-2",
    cpl: "CPL-2, CPL-3, CPL-7, CPL-9",
    field: "Firma hukum, konsultan properti",
  },
  {
    code: "PL-3",
    cpl: "CPL-1, CPL-5, CPL-6, CPL-10",
    field: "Perguruan tinggi, lembaga riset",
  },
  {
    code: "PL-4",
    cpl: "CPL-2, CPL-3, CPL-8, CPL-9",
    field: "Korporasi, perbankan, BUMN",
  },
];

export default function ProfilLulusan() {
  return (
    <>
      <Helmet>
        <title>Profil Lulusan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Profil lulusan Program Studi Magister Kenotariatan (MKn) UNISSULA, empat profil utama, dan keterkaitan profil dengan Capaian Pembelajaran Lulusan."
        />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Profil Lulusan
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-3xl">
            Profil lulusan Program Studi Magister Kenotariatan UNISSULA dirumuskan bersama
            pemangku kepentingan — Ikatan Notaris Indonesia, kantor notaris mitra, pengguna
            lulusan, dan alumni — serta diselaraskan dengan Kerangka Kualifikasi Nasional
            Indonesia jenjang 8 dan Standar Nasional Pendidikan Tinggi. Rumusan ini ditinjau setiap
            dua tahun oleh Gugus Penjaminan Mutu program studi.
          </p>
        </div>

        {/* Section 1: Empat Profil Utama */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Empat Profil Utama
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200 bg-white">
            {mainProfiles.map((item) => (
              <div
                key={item.code}
                className="p-6 sm:p-7 space-y-2.5 border-r border-b border-gray-200"
              >
                <span className="text-sm font-bold tracking-wider text-primary uppercase block">
                  {item.code}
                </span>
                <h3 className="text-base sm:text-xl font-heading font-medium text-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Keterkaitan Profil dengan Capaian Pembelajaran */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Keterkaitan Profil dengan Capaian Pembelajaran
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    PROFIL
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    CAPAIAN PEMBELAJARAN YANG MENOPANG
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    BIDANG KERJA UTAMA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm sm:text-[13px]">
                {profileCplMapping.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.cpl}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.field}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rujukan Footnote */}
          <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
            Rujukan: Peraturan Menteri Pendidikan dan Kebudayaan Nomor 3 Tahun 2020, Perpres
            Nomor 8 Tahun 2012 tentang KKNI, dan Undang-Undang Nomor 2 Tahun 2014 tentang
            Jabatan Notaris.
          </p>
        </div>
      </div>
    </>
  );
}
