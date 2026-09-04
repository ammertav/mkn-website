import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { KartuSorot, JudulSeksi } from "../../components/Akademik/panduan/PanduanSorot";
import TabelSemester from "../../components/Akademik/TabelSemester";
import { useT } from "../../i18n/languageContext";
import { useUi } from "../../i18n/useUi";
import {
  sorotKurikulum,
  kolomMataKuliah,
  semester,
  totalSks,
  halaman,
} from "../../data/akademik/kurikulumData";

export default function Kurikulum() {
  const t = useT();
  const ui = useUi();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        {/* Kepala */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            {ui("sectionAcademic")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {t(halaman.judul)}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
        </div>

        <KartuSorot butir={sorotKurikulum} />

        {/* Tebaran mata kuliah */}
        <section className="space-y-5">
          <JudulSeksi
            judul={halaman.judulTebaran}
            keterangan={halaman.keteranganTebaran}
          />

          <div className="space-y-6">
            {semester.map((s) => (
              <TabelSemester
                key={s.nama}
                nama={s.nama}
                jumlahSks={s.jumlahSks}
                kolom={kolomMataKuliah}
                baris={s.baris}
                pilihan={s.pilihan}
                labelJumlahSks={halaman.labelJumlahSks}
                labelSks={halaman.labelSks}
              />
            ))}
          </div>

          {/* Total keseluruhan */}
          <div className="flex items-baseline justify-between gap-4 border-2 border-primary bg-primary/5 px-5 sm:px-6 py-4 rounded-xs">
            <span className="font-heading font-bold text-base sm:text-lg text-heading">
              {t(halaman.totalProdi)}
            </span>
            <span className="font-heading font-bold text-2xl sm:text-3xl text-primary tabular-nums">
              {totalSks}
            </span>
          </div>
        </section>

        {/* Rujukan silang ke tabel ekuivalensi */}
        <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-5 sm:p-6 rounded-xs">
          <p className="text-sm text-body leading-relaxed">
            {t(halaman.ekuivalensiCatatan)}
          </p>
          <Link
            to="/akademik/pembelajaran/panduan-evaluasi"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {t(halaman.ekuivalensiTautan)}
            <FiArrowRight className="text-sm" />
          </Link>
        </div>

        {/* Dokumen kurikulum */}
        <section className="space-y-5">
          <JudulSeksi judul={halaman.judulDokumen} />

          <div className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs">
            <p className="text-sm font-medium text-gray-500">{t(halaman.dokumenKosong)}</p>
          </div>
        </section>
      </div>
    </>
  );
}
