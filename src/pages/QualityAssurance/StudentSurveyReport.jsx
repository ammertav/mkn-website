import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";

export default function StudentSurveyReport() {
  return (
    <>
      <Helmet>
        <title>Laporan Survei Mahasiswa | MKn UNISSULA</title>
        <meta name="description" content="Hasil survei kepuasan mahasiswa Program Studi Magister Kenotariatan UNISSULA." />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu judul="Laporan Survei Mahasiswa" pengantar="Laporan survei mahasiswa memuat tingkat kepuasan terhadap pembelajaran, layanan akademik, dan sarana prasarana. Instrumen yang dipakai adalah formulir Survei Kepuasan Pemangku Kepentingan (C-04)." />

        <BelumTersedia keterangan="Laporan survei mahasiswa belum diterima dari Gugus Penjaminan Mutu." />
      </div>
    </>
  );
}
