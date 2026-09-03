import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { KartuSorot, JudulSeksi } from "../../components/Akademik/panduan/PanduanSorot";
import TabelSemester from "../../components/Akademik/TabelSemester";
import {
  sorotKurikulum,
  kolomMataKuliah,
  semester,
  totalSks,
} from "../../data/akademik/kurikulumData";

export default function Kurikulum() {
  return (
    <>
      <Helmet>
        <title>Kurikulum Program Studi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Tebaran mata kuliah Kurikulum 2026 Program Studi Magister Kenotariatan UNISSULA — 41 sks dalam empat semester, beserta mata kuliah pilihan."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-14 font-body text-body">
        {/* Kepala */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Kurikulum
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-5xl">
            Kurikulum Program Studi Magister Kenotariatan UNISSULA membekali mahasiswa dengan
            penguasaan teori hukum yang mendalam sekaligus kemahiran praktis merancang akta
            autentik. Beban studi 41 sks ditempuh dalam empat semester, memadukan mata kuliah teori,
            rumpun Teknik Pembuatan Akta, Laboratorium Akta, mata kuliah pilihan, dan Tesis.
          </p>
        </div>

        <KartuSorot butir={sorotKurikulum} />

        {/* Tebaran mata kuliah */}
        <section className="space-y-5">
          <JudulSeksi
            judul="Tebaran Mata Kuliah Kurikulum 2026"
            keterangan="Sebaran mata kuliah per semester beserta kode dan bobot sks."
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
              />
            ))}
          </div>

          {/* Total keseluruhan */}
          <div className="flex items-baseline justify-between gap-4 border-2 border-primary bg-primary/5 px-5 sm:px-6 py-4 rounded-xs">
            <span className="font-heading font-bold text-base sm:text-lg text-heading">
              Total sks Program Studi
            </span>
            <span className="font-heading font-bold text-2xl sm:text-3xl text-primary tabular-nums">
              {totalSks}
            </span>
          </div>
        </section>

        {/* Rujukan silang ke tabel ekuivalensi */}
        <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-5 sm:p-6 rounded-xs">
          <p className="text-sm text-body leading-relaxed">
            Mahasiswa angkatan Kurikulum 2021 yang belum menyelesaikan studi mengacu pada tabel
            ekuivalensi mata kuliah untuk mengetahui padanan dan selisih beban studinya.
          </p>
          <Link
            to="/akademik/pembelajaran/panduan-evaluasi"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Lihat tabel ekuivalensi Kurikulum 2021 ke Kurikulum OBE 2026
            <FiArrowRight className="text-sm" />
          </Link>
        </div>

        {/* Dokumen kurikulum */}
        <section className="space-y-5">
          <JudulSeksi judul="Dokumen Kurikulum" />

          <div className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs">
            <p className="text-sm font-medium text-gray-500">Dokumen akan segera ditambahkan.</p>
          </div>
        </section>
      </div>
    </>
  );
}
