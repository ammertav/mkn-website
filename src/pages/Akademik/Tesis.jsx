import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  AlurTahap,
} from "../../components/Akademik/panduan/PanduanSorot";
import { sorotTesis, alurTahap, tigaUjian } from "../../data/akademik/panduanTesisData";

const subTab = [
  { path: "pra-proposal", label: "Pra Proposal" },
  { path: "proposal", label: "Proposal" },
  { path: "ujian-tesis", label: "Tesis" },
];

/**
 * Induk Panduan Ujian Tesis.
 *
 * Bagian yang berlaku untuk ketiga ujian — angka kunci, alur delapan tahap, dan
 * gambaran ketiga ujian — ditampilkan di sini. Ketentuan khusus tiap ujian
 * berada di tab masing-masing.
 */
export default function Tesis() {
  return (
    <>
      <Helmet>
        <title>Panduan Ujian Tesis | MKn UNISSULA</title>
        <meta
          name="description"
          content="Pokok-pokok panduan Ujian Pra Proposal, Usulan Proposal, dan Ujian Tesis Program Studi Magister Kenotariatan UNISSULA."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Angka kunci */}
        <KartuSorot butir={sorotTesis} />

        {/* Alur delapan tahap */}
        <section className="space-y-6">
          <JudulSeksi
            judul="Alur Penyelesaian Tesis"
            keterangan="Delapan tahap sejak pengajuan judul hingga ujian tesis, ditempuh dalam waktu dua semester."
          />
          <AlurTahap tahap={alurTahap} />
        </section>

        {/* Tiga jenis ujian */}
        <section className="space-y-5">
          <JudulSeksi
            judul="Tiga Ujian dalam Penyelesaian Tesis"
            keterangan="Seluruh pembimbing tesis bergelar Doktor, dan setiap ujian memiliki ketentuannya sendiri."
          />
          <KartuRingkas butir={tigaUjian} kolom={3} />
        </section>

        {/* Ketentuan khusus tiap ujian */}
        <div className="space-y-7 pt-1">
          <nav
            className="flex gap-2 border-b border-gray-200 overflow-x-auto scrollbar-none"
            aria-label="Jenis Ujian Tesis"
          >
            {subTab.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `shrink-0 whitespace-nowrap px-4 py-3 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase transition-colors border-b-2 ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-body hover:text-heading hover:border-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Outlet />
        </div>
      </div>
    </>
  );
}
