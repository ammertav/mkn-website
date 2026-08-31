import { Helmet } from "react-helmet-async";

const assessmentComponents = [
  {
    component: "Partisipasi dan kehadiran",
    weight: "10%",
    form: "Rekam kehadiran, keaktifan diskusi kelas",
  },
  {
    component: "Tugas dan studi kasus",
    weight: "25%",
    form: "Legal memorandum, analisis putusan, drafting akta",
  },
  {
    component: "Ujian tengah semester",
    weight: "25%",
    form: "Ujian tertulis atau take home",
  },
  {
    component: "Ujian akhir semester",
    weight: "30%",
    form: "Ujian tertulis, lisan, atau proyek akhir",
  },
  {
    component: "Presentasi dan seminar",
    weight: "10%",
    form: "Paparan individu atau kelompok",
  },
];

const gradeScales = [
  { grade: "A", range: "80,00 – 100", score: "4,00", predicate: "Sangat baik" },
  { grade: "AB", range: "75,00 – 79,99", score: "3,50", predicate: "Baik sekali" },
  { grade: "B", range: "70,00 – 74,99", score: "3,00", predicate: "Baik" },
  { grade: "BC", range: "65,00 – 69,99", score: "2,50", predicate: "Cukup baik" },
  { grade: "C", range: "60,00 – 64,99", score: "2,00", predicate: "Cukup" },
  { grade: "D", range: "50,00 – 59,99", score: "1,00", predicate: "Kurang, wajib mengulang" },
  { grade: "E", range: "< 50,00", score: "0,00", predicate: "Gagal, wajib mengulang" },
];

const gradeNotes = [
  {
    title: "SYARAT KELULUSAN",
    desc: "Indeks prestasi kumulatif minimum 3,00 tanpa nilai D atau E pada seluruh mata kuliah.",
  },
  {
    title: "PERBAIKAN NILAI",
    desc: "Mata kuliah dapat diulang pada semester berikutnya; nilai tertinggi yang digunakan dalam perhitungan.",
  },
  {
    title: "SANGGAHAN NILAI",
    desc: "Diajukan kepada dosen pengampu paling lambat tujuh hari kerja setelah nilai diumumkan pada SIAKAD.",
  },
];

const relatedDocuments = [
  {
    title: "Panduan Evaluasi dan Penilaian Pembelajaran",
    version: "v2.4",
    date: "08 Agu 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Rubrik Penilaian Tugas dan Presentasi",
    version: "v1.6",
    date: "08 Agu 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Formulir Sanggahan Nilai",
    version: "v1.1",
    date: "15 Jan 2024",
    format: "DOCX",
    href: "#",
  },
];

export default function PanduanEvaluasi() {
  return (
    <>
      <Helmet>
        <title>Panduan Evaluasi Pembelajaran | MKn UNISSULA</title>
        <meta
          name="description"
          content="Panduan evaluasi pembelajaran, komponen dan bobot penilaian, skala nilai, dan dokumen penilaian Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Panduan Evaluasi Pembelajaran
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-3xl">
            Penilaian pembelajaran diselenggarakan secara edukatif, otentik, objektif,
            akuntabel, dan transparan. Setiap dosen mencantumkan komponen serta bobot
            penilaian pada rencana pembelajaran semester dan menyampaikannya pada
            pertemuan pertama.
          </p>
        </div>

        {/* Section 1: Komponen dan Bobot Penilaian */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Komponen dan Bobot Penilaian
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    KOMPONEN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-28">
                    BOBOT
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    BENTUK ASESMEN
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {assessmentComponents.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 text-heading">
                      {item.component}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.weight}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {item.form}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Skala Nilai */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
                Skala Nilai
              </h2>
              <div className="w-full h-[1.5px] bg-heading mt-2.5" />
            </div>

            <div className="border border-gray-200 bg-white overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-heading">
                    <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-32">
                      NILAI HURUF
                    </th>
                    <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36">
                      RENTANG ANGKA
                    </th>
                    <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-28">
                      BOBOT
                    </th>
                    <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                      PREDIKAT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {gradeScales.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-5 sm:px-6 font-bold text-heading">
                        {item.grade}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-body">
                        {item.range}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-body">
                        {item.score}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-body">
                        {item.predicate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grid Catatan Kelulusan / Perbaikan / Sanggahan */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-200 bg-white">
            {gradeNotes.map((note, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 space-y-2.5 border-r border-b border-gray-200"
              >
                <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase block">
                  {note.title}
                </span>
                <p className="text-sm text-body leading-relaxed">
                  {note.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Dokumen Terkait */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Dokumen Terkait
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-heading">
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading">
                    JUDUL DOKUMEN
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    VERSI
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-36">
                    TANGGAL
                  </th>
                  <th className="py-3 px-5 sm:px-6 text-[11px] font-bold tracking-wider uppercase text-heading w-24">
                    UNDUH
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {relatedDocuments.map((doc, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-5 sm:px-6 text-heading font-normal">
                      {doc.title}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body">
                      {doc.version}
                    </td>
                    <td className="py-4 px-5 sm:px-6 text-body whitespace-nowrap">
                      {doc.date}
                    </td>
                    <td className="py-4 px-5 sm:px-6 whitespace-nowrap">
                      <a
                        href={doc.href}
                        onClick={(e) => {
                          if (doc.href === "#") {
                            e.preventDefault();
                            alert(`Mengunduh berkas: ${doc.title}`);
                          }
                        }}
                        className="text-xs font-bold text-primary hover:underline uppercase inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{doc.format}</span>
                        <span>↓</span>
                      </a>
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
