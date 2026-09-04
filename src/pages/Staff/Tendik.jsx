import { Helmet } from "react-helmet-async";
import Img from "../../components/ui/Img";
import { tenagaKependidikan } from "../../data/profil/tendikData";

/** Gelar akademik yang diabaikan saat menyusun inisial pengganti foto. */
const GELAR = new Set([
  "dr", "prof", "hc", "drs", "dra", "h", "hj", "ir",
  "sh", "mh", "mkn", "spd", "se", "skom",
]);

function inisial(nama) {
  const kata = nama
    .replace(/[.,]/g, " ")
    .split(/\s+/)
    .filter((k) => k && !GELAR.has(k.toLowerCase()));
  return kata.slice(0, 2).map((k) => k[0]).join("").toUpperCase() || "?";
}

export default function Tendik() {
  return (
    <>
      <Helmet>
        <title>Tenaga Kependidikan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Direktori Tenaga Kependidikan Program Studi Magister Kenotariatan (MKn) UNISSULA: kepala tata usaha, direktur laboratorium dan perpustakaan, serta bidang akademik, keuangan, promosi & humas, dan sarana prasarana."
        />
      </Helmet>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16 space-y-10">
        {/* Kepala halaman */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            STAF
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Tenaga Kependidikan
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-3xl">
            Tenaga kependidikan menopang penyelenggaraan akademik program studi: ketatausahaan
            dan layanan administratif, pengelolaan laboratorium akta dan perpustakaan, serta
            empat bidang pelaksana — akademik, keuangan, promosi &amp; humas, dan sarana
            prasarana.
          </p>
        </div>

        {/* Direktori — kartu berfoto, dikelompokkan mengikuti struktur organisasi */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Direktori Tenaga Kependidikan
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tenagaKependidikan.map((orang) => (
              <div
                key={`${orang.jabatan}-${orang.name}`}
                className="border border-gray-200 bg-white rounded-xs shadow-2xs p-5 flex gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-20 h-24 rounded-xs overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  {orang.photo ? (
                    <Img
                      src={orang.photo}
                      alt={orang.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="font-heading text-lg font-bold text-gray-400">
                      {inisial(orang.name)}
                    </span>
                  )}
                </div>

                <div className="min-w-0 space-y-1.5">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary block leading-snug">
                    {orang.jabatan}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-heading leading-snug">
                    {orang.name}
                  </h3>
                  <p className="text-xs text-body leading-relaxed">{orang.tugas}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ringkasan tugas per jabatan */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Pembagian Tugas
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-64">
                    JABATAN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    PELAKSANA
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    LINGKUP TUGAS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {tenagaKependidikan.map((orang) => (
                  <tr
                    key={`${orang.jabatan}-${orang.name}`}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 sm:px-6 font-bold text-heading align-top leading-snug">
                      {orang.jabatan}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body align-top leading-snug">
                      {orang.name}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body align-top leading-relaxed">
                      {orang.tugas}
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
