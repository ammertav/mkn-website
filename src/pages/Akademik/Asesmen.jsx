import { Helmet } from "react-helmet-async";
import { FiDownload, FiClock, FiUserCheck, FiShield, FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import {
  assessmentOverview,
  komponenPenilaian,
  regulasiUjian,
  prosedurBanding,
  dokumenAsesmen,
} from "../../data/asesmenData";

export default function Asesmen() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Sistem Asesmen & Regulasi Penilaian | MKn UNISSULA</title>
        <meta
          name="description"
          content="Sistem Asesmen, Regulasi Ujian, Metode & Kriteria Penilaian, serta Prosedur Banding Nilai Mahasiswa Magister Kenotariatan (MKn) UNISSULA sesuai Standar ESG 1.3 ACQUIN."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            {assessmentOverview.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            {assessmentOverview.title}
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
            {assessmentOverview.description}
          </p>

          {/* ACQUIN / ESG Standard 1.3 Badge Banner */}
          <div className="mt-6 p-4 sm:p-5 bg-stone-50 border-l-4 border-primary rounded-r-sm flex items-start gap-3.5">
            <FiShield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-body leading-relaxed">
              <strong className="font-semibold text-heading block mb-1">
                Kepatuhan Standar ESG 1.3 (Assessment of Students)
              </strong>
              Kriteria dan metode asesmen dipublikasikan secara terbuka sebelum proses perkuliahan dimulai. Mahasiswa memiliki hak perlindungan akademik melalui prosedur keberatan/sanggahan nilai formal yang akuntabel.
            </div>
          </div>
        </div>

        {/* Seksi 1: Metode & Kriteria Penilaian */}
        <section className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">SEKSI 01</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-heading tracking-normal">
              Metode & Kriteria Penilaian
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading bg-gray-50/50">
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/4">
                    KOMPONEN PENILAIAN
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading text-center w-24">
                    BOBOT
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/4">
                    BENTUK ASESMEN
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    KRITERIA & CAKUPAN EVALUASI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {komponenPenilaian.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-heading">
                      {item.komponen}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center font-bold text-primary whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 bg-red-50 text-primary rounded text-xs font-bold border border-red-100">
                        {item.bobot}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-body">
                      {item.bentuk}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-body leading-relaxed">
                      {item.kriteria}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seksi 2: Regulasi Ujian & Remedial */}
        <section className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">SEKSI 02</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-heading tracking-normal">
              Regulasi Ujian & Remedial
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading bg-gray-50/50">
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-1/3">
                    KETENTUAN / ATURAN
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    KETERANGAN & PROSEDUR PELAKSANAAN
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-44 text-right sm:text-left">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {regulasiUjian.map((reg) => (
                  <tr key={reg.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-heading align-top">
                      {reg.aturan}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-body leading-relaxed align-top">
                      {reg.keterangan}
                    </td>
                    <td className="py-4 px-4 sm:px-6 align-top whitespace-nowrap text-right sm:text-left">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 text-heading text-[11px] font-medium rounded border border-gray-200">
                        <FiCheckCircle className="w-3.5 h-3.5 text-primary" />
                        {reg.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seksi 3: Prosedur Banding Nilai (Grade Appeal Process) */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">SEKSI 03</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-heading tracking-normal">
              Prosedur Banding & Sanggahan Nilai Mahasiswa
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
            <p className="text-xs sm:text-sm text-body mt-2.5">
              Alur formal bagi mahasiswa yang mengajukan keberatan terhadap nilai akhir perkuliahan. Seluruh proses diawasi untuk menjamin kepastian hukum akademik.
            </p>
          </div>

          {/* Langkah Bernomor (Step Process Cards) */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            {prosedurBanding.map((step) => (
              <div
                key={step.langkah}
                className="bg-white border border-gray-200 hover:border-primary/40 transition-all p-5 sm:p-6 rounded-sm shadow-sm relative overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Step Number Circle */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-heading font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-sm">
                    0{step.langkah}
                  </div>

                  {/* Step Details */}
                  <div className="flex-grow space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-heading font-bold text-heading">
                        {step.tahap}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-red-50 border border-red-100 px-2.5 py-0.5 rounded">
                          <FiClock className="w-3 h-3" />
                          {step.tenggat}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded">
                          <FiUserCheck className="w-3 h-3" />
                          {step.pelaksana}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-body leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded text-xs text-amber-900 flex items-start gap-3">
            <FiAlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Catatan Penting:</strong> Sanggahan nilai yang diajukan melewati batas waktu 7 hari kerja setelah nilai diumumkan di SIAKAD tidak dapat diproses lebih lanjut, kecuali terdapat dispensasi khusus dari Pimpinan Fakultas.
            </p>
          </div>
        </section>

        {/* Seksi 4: Dokumen Terkait */}
        <section className="space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-primary tracking-wider uppercase">SEKSI 04</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-heading tracking-normal">
              Dokumen & Formulir Terkait Asesmen
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading bg-gray-50/50">
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    JUDUL DOKUMEN / FORMULIR
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    VERSI
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36">
                    TANGGAL
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36 text-center sm:text-right">
                    AKSI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {dokumenAsesmen.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-heading font-medium">
                      {doc.title}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-body whitespace-nowrap">
                      {doc.version}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-body whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap text-center sm:text-right">
                      {doc.url ? (
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded hover:bg-primary-dark transition-colors"
                        >
                          <FiDownload className="w-3.5 h-3.5" />
                          <span>Unduh {doc.format}</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-400 text-xs font-medium rounded border border-gray-200 cursor-not-allowed"
                          title="Dokumen belum diunggah"
                        >
                          <FiDownload className="w-3.5 h-3.5" />
                          <span>Belum tersedia</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
