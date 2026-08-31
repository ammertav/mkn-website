import { Helmet } from "react-helmet-async";

export default function UtsUas() {
  return (
    <>
      <Helmet>
        <title>Panduan Ujian UTS & UAS | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ketentuan kehadiran minimum, tata tertib, jadwal, dan kriteria penilaian Ujian Tengah Semester (UTS) dan Ujian Akhir Semester (UAS) MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-4 max-w-3xl">
        <h2 className="text-lg font-heading font-semibold text-heading">Ujian Tengah & Akhir Semester (UTS/UAS)</h2>
        <p className="text-[14px] text-body leading-relaxed">
          Ujian Tengah Semester (UTS) dan Ujian Akhir Semester (UAS) merupakan evaluasi akademik formal
          yang wajib diikuti oleh seluruh mahasiswa Program MKn UNISSULA sesuai jadwal yang ditetapkan
          oleh program studi.
        </p>
        <ul className="space-y-2 text-[14px] text-body list-disc list-inside">
          <li>Mahasiswa wajib hadir minimal 75% dari total tatap muka untuk dapat mengikuti UAS.</li>
          <li>Ujian dilaksanakan secara tertulis atau lisan sesuai kebijakan dosen.</li>
          <li>Ketidakhadiran tanpa keterangan menyebabkan nilai ujian dianggap nol.</li>
          <li>Hasil UTS dan UAS diinput oleh dosen paling lambat 7 hari setelah ujian.</li>
        </ul>
      </div>
    </>
  );
}
