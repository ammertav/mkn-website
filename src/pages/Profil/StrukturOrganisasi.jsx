import { Helmet } from "react-helmet-async";
import {
  FiBookOpen,
  FiDollarSign,
  FiGlobe,
  FiHome,
} from "react-icons/fi";

import imgDekan from "../../assets/images/struktur-organisasi/Dekan Fakultas Hukum UNISSULA.jpg";
import imgKaprodi from "../../assets/images/dosen/Dr.NanangSriDarmadi,S.H.,M.H..jpg";
import imgSekprodi from "../../assets/images/struktur-organisasi/Sekprodi a- Dr. Toni Triyanto, S.H., M.jpeg";
import Img from "../../components/ui/Img";

const strukturPejabat = [
  {
    jabatan: "Dekan Fakultas Hukum UNISSULA",
    pejabat: "Prof. Dr. H. Jawade Hafidz, S.H., M.H.",
    tanggungJawab:
      "Penanggung jawab utama kebijakan dan penyelenggaraan pendidikan Fakultas Hukum dan Pascasarjana Kenotariatan.",
  },
  {
    jabatan: "Ketua Program Studi Magister (S2) Kenotariatan",
    pejabat: "Dr. Nanang Sri Darmadi, S.H., M.H.",
    tanggungJawab:
      "Kebijakan akademik, penetapan standar mutu, kurikulum, kepemimpinan prodi, dan hubungan kelembagaan.",
  },
  {
    jabatan: "Sekretaris Program Studi Magister (S2) Kenotariatan",
    pejabat: "Dr. Toni Triyanto, S.H., M.H.",
    tanggungJawab:
      "Penyelenggaraan perkuliahan harian, penjadwalan dosen/mahasiswa, ujian, dan dokumentasi akademik.",
  },
  {
    jabatan: "Koordinator Tata Usaha",
    pejabat: "Ikrom, S.H., M.H.",
    tanggungJawab:
      "Koordinasi operasional ketatausahaan, layanan administratif terpadu, dan pengelolaan staf.",
  },
  {
    jabatan: "Bidang Akademik",
    pejabat: "—",
    tanggungJawab:
      "Layanan administrasi akademik mahasiswa, registrasi, penjadwalan perkuliahan, dan dokumentasi ujian.",
  },
  {
    jabatan: "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
    pejabat: "—",
    tanggungJawab:
      "Pengelolaan laboratorium akta, pembinaan praktik pembuatan akta, dan simulasi manajemen kantor notaris.",
  },
  {
    jabatan: "Direktur Perpustakaan",
    pejabat: "—",
    tanggungJawab:
      "Pengelolaan koleksi pustaka hukum kenotariatan, layanan referensi, dan dukungan literatur penelitian tesis.",
  },
  {
    jabatan: "Bidang Keuangan",
    pejabat: "—",
    tanggungJawab:
      "Administrasi keuangan mahasiswa, pembiayaan kegiatan akademik, dan pengelolaan anggaran program studi.",
  },
  {
    jabatan: "Bidang Promosi & Humas",
    pejabat: "—",
    tanggungJawab:
      "Sosialisasi program studi, promosi penerimaan mahasiswa baru, serta pengelolaan publikasi dan media.",
  },
  {
    jabatan: "Bidang Sarana Prasarana",
    pejabat: "—",
    tanggungJawab:
      "Pengelolaan ruang kuliah, laboratorium kenotariatan, dan fasilitas penunjang program studi.",
  },
];

const adminUnits = [
  {
    icon: FiBookOpen,
    name: "Akademik",
    children: [
      "Direktur Laboratorium Akta & Manajemen Kantor Notaris",
      "Direktur Perpustakaan",
    ],
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
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            STRUKTUR ORGANISASI DAN TATA KELOLA
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Garis tanggung jawab yang jelas dan terstruktur
              </h2>
            </div>

            {/* Right Column: Paragraph */}
            <div className="lg:col-span-7 text-sm sm:text-base text-body leading-relaxed space-y-4">
              <p>
                Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA
                dipimpin oleh Ketua Program Studi yang bertanggung jawab
                langsung kepada Dekan Fakultas Hukum. Sekretaris Program Studi
                mengoordinasi penyelenggaraan akademik harian, didukung oleh
                Koordinator Tata Usaha beserta empat bidang pelaksana administrasi.
              </p>
            </div>
          </div>
        </section>

        {/* Section Bagan Organisasi Visual */}
        <section className="space-y-6">
          <div className="bg-white border border-gray-200 p-6 sm:p-12 rounded-xs shadow-2xs">
            <div className="flex flex-col items-center">
              {/* Level 1: Dekan Fakultas Hukum UNISSULA (Top Card with Photo) */}
              <div className="w-full max-w-sm bg-white border-2 border-primary/80 p-6 text-center rounded-xs shadow-sm flex flex-col items-center">
                {/* Photo Dekan */}
                <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xs overflow-hidden bg-gray-100 mb-4 border border-gray-200 shadow-2xs">
                  <Img
                    src={imgDekan}
                    alt="Prof. Dr. H. Jawade Hafidz, S.H., M.H."
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-primary block mb-1">
                  DEKAN FAKULTAS HUKUM UNISSULA
                </span>
                <p className="font-heading text-base sm:text-lg font-bold text-heading">
                  Prof. Dr. H. Jawade Hafidz, S.H., M.H.
                </p>
              </div>

              {/* Connecting Line 1 */}
              <div className="w-px h-8 bg-gray-300" />

              {/* Level 2: Kaprodi */}
              <div className="w-full max-w-sm bg-white border-2 border-primary p-6 text-center rounded-xs shadow-sm flex flex-col items-center">
                <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xs overflow-hidden bg-gray-100 mb-4 border border-gray-200 shadow-2xs">
                  <Img
                    src={imgKaprodi}
                    alt="Dr. Nanang Sri Darmadi, S.H., M.H."
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-primary block mb-1">
                  KETUA PROGRAM STUDI MAGISTER (S2) KENOTARIATAN
                </span>
                <p className="font-heading text-base sm:text-lg font-bold text-heading">
                  Dr. Nanang Sri Darmadi, S.H., M.H.
                </p>
              </div>

              {/* Persimpangan: garis Kaprodi → Koordinator TU, dengan Sekprodi
                  sebagai cabang mendatar ke kiri (posisi staf, bukan mata rantai). */}
              <div className="relative w-full max-w-5xl flex flex-col items-center">
                {/* Spine vertikal yang menembus blok ini (desktop) */}
                <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-300" />

                {/* Mobile: cabang mendatar tidak muat, jadi dirantai vertikal biasa */}
                <div className="md:hidden w-px h-8 bg-gray-300" />

                <div className="w-full flex md:py-8">
                  {/* Separuh kiri: kartu Sekprodi menempel ke spine lewat garis mendatar */}
                  <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
                    <div className="w-full max-w-sm bg-white border-2 border-primary/70 p-6 text-center rounded-xs shadow-sm flex flex-col items-center">
                      <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xs overflow-hidden bg-gray-100 mb-4 border border-gray-200 shadow-2xs">
                        <Img
                          src={imgSekprodi}
                          alt="Dr. Toni Triyanto, S.H., M.H."
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-primary block mb-1">
                        SEKRETARIS PROGRAM STUDI MAGISTER (S2) KENOTARIATAN
                      </span>
                      <p className="font-heading text-base sm:text-lg font-bold text-heading">
                        Dr. Toni Triyanto, S.H., M.H.
                      </p>
                    </div>
                    <div className="hidden md:block w-10 lg:w-16 h-px bg-gray-300 shrink-0" />
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>

                <div className="md:hidden w-px h-8 bg-gray-300" />
              </div>

              {/* Level 3: Koordinator Tata Usaha */}
              <div className="w-full max-w-md bg-red-50/70 border border-primary/30 p-4 text-center rounded-xs shadow-2xs">
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-primary block mb-0.5">
                  KOORDINATOR TATA USAHA
                </span>
                <p className="font-heading text-sm sm:text-base font-semibold text-heading">
                  Ikrom, S.H., M.H.
                </p>
              </div>

              {/* Connecting Line 3 */}
              <div className="w-px h-8 bg-gray-300" />

              {/* Level 4: 4 Bidang Pelaksana */}
              <div className="w-full max-w-5xl">
                <div className="text-center mb-3">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 bg-gray-50 px-3 py-1 border border-gray-200 rounded-full">
                    PELAKSANA ADMINISTRASI
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2 items-start">
                  {adminUnits.map((unit, idx) => {
                    const Icon = unit.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="w-full min-h-[104px] border border-gray-200 bg-white p-4 text-center rounded-xs shadow-2xs space-y-2 hover:border-primary/40 transition-colors flex flex-col items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base shrink-0">
                            <Icon />
                          </div>
                          <p className="font-heading text-xs sm:text-sm font-bold text-heading">
                            {unit.name}
                          </p>
                        </div>

                        {/* Sub-unit di bawah bidang ini. Ditumpuk vertikal agar
                            lebarnya tetap sama dengan kotak bidang dan barisan
                            bidang tetap simetris terhadap garis di atasnya. */}
                        {unit.children && (
                          <>
                            <div className="w-px h-4 bg-gray-300" />
                            <div className="w-full space-y-3">
                              {unit.children.map((child) => (
                                <div
                                  key={child}
                                  className="border border-gray-200 bg-gray-50/70 p-4 text-center rounded-xs shadow-2xs"
                                >
                                  <p className="font-heading text-xs sm:text-sm font-bold text-heading leading-snug">
                                    {child}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Pejabat dan Tanggung Jawab Table */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              Pejabat dan Tanggung Jawab
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto rounded-xs shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/4">
                    JABATAN
                  </th>
                  <th className="py-3.5 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/3">
                    PEJABAT / UNIT
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
                    <td className="py-4 px-5 sm:px-6 text-heading font-medium align-top">
                      {item.pejabat}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body leading-relaxed align-top">
                      {item.tanggungJawab}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footnote Notice */}
          <p className="text-xs text-gray-500 leading-relaxed pt-2">
            Struktur organisasi Program Studi Magister (S2) Kenotariatan
            Fakultas Hukum UNISSULA disusun untuk menjamin akuntabilitas, tata
            kelola akademik yang kredibel, serta pelayanan prima kepada seluruh
            mahasiswa dan pemangku kepentingan.
          </p>
        </section>
      </div>
    </>
  );
}
