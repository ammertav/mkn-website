import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";

export default function AlumniSurveyReport() {
  return (
    <>
      <Helmet>
        <title>Laporan Survei Alumni | MKn UNISSULA</title>
        <meta name="description" content="Hasil survei alumni dan pengguna lulusan Program Studi Magister Kenotariatan UNISSULA." />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu judul="Laporan Survei Alumni" pengantar="Laporan survei alumni memuat masa tunggu kerja, kesesuaian bidang kerja, dan penilaian pengguna lulusan. Instrumen yang dipakai adalah formulir Survei Kepuasan Pemangku Kepentingan (C-04) serta penelusuran alumni." />

        <BelumTersedia keterangan="Laporan survei alumni belum diterima dari Gugus Penjaminan Mutu." />
      </div>
    </>
  );
}
