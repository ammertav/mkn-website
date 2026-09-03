import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import {
  KartuSorot,
  JudulSeksi,
  KartuRingkas,
  AlurTahap,
} from "../../components/Akademik/panduan/PanduanSorot";
import { useT } from "../../i18n/languageContext";
import {
  sorotTesis,
  alurTahap,
  tigaUjian,
  halamanTesis,
} from "../../data/akademik/panduanTesisData";

const ALUR = {
  judul: { id: "Alur Penyelesaian Tesis", en: "The Thesis Pathway" },
  keterangan: {
    id:
      "Delapan tahap sejak pengajuan judul hingga ujian tesis, ditempuh dalam waktu dua " +
      "semester.",
    en:
      "Eight stages from submitting the title to the thesis examination, completed over " +
      "two semesters.",
  },
};

const TIGA = {
  judul: {
    id: "Tiga Ujian dalam Penyelesaian Tesis",
    en: "Three Examinations Along the Thesis Pathway",
  },
  keterangan: {
    id:
      "Seluruh pembimbing tesis bergelar Doktor, dan setiap ujian memiliki ketentuannya " +
      "sendiri.",
    en:
      "Every thesis supervisor holds a doctorate, and each examination has its own rules.",
  },
};

const subTab = [
  { path: "pra-proposal", label: halamanTesis.tab.praProposal },
  { path: "proposal", label: halamanTesis.tab.proposal },
  { path: "ujian-tesis", label: halamanTesis.tab.tesis },
];

/**
 * Induk Panduan Ujian Tesis.
 *
 * Bagian yang berlaku untuk ketiga ujian — angka kunci, alur delapan tahap, dan
 * gambaran ketiga ujian — ditampilkan di sini. Ketentuan khusus tiap ujian
 * berada di tab masing-masing.
 */
export default function Tesis() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halamanTesis.meta.title)}</title>
        <meta name="description" content={t(halamanTesis.meta.description)} />
      </Helmet>

      <div className="space-y-12 sm:space-y-14">
        {/* Angka kunci */}
        <KartuSorot butir={sorotTesis} />

        {/* Alur delapan tahap */}
        <section className="space-y-6">
          <JudulSeksi
            judul={ALUR.judul}
            keterangan={ALUR.keterangan}
          />
          <AlurTahap tahap={alurTahap} />
        </section>

        {/* Tiga jenis ujian */}
        <section className="space-y-5">
          <JudulSeksi
            judul={TIGA.judul}
            keterangan={TIGA.keterangan}
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
                {t(item.label)}
              </NavLink>
            ))}
          </nav>

          <Outlet />
        </div>
      </div>
    </>
  );
}
