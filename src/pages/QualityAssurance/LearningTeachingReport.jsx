import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";

export default function LearningTeachingReport() {
  return (
    <>
      <Helmet>
        <title>Laporan Pembelajaran | MKn UNISSULA</title>
        <meta name="description" content="Laporan penyelenggaraan dan evaluasi pembelajaran Program Studi Magister Kenotariatan UNISSULA." />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu judul="Laporan Pembelajaran" pengantar="Laporan pembelajaran merangkum penyelenggaraan perkuliahan, ketercapaian capaian pembelajaran, dan hasil evaluasi dosen oleh mahasiswa. Instrumen yang dipakai adalah formulir Berita Acara Perkuliahan (B-03) dan Evaluasi Dosen oleh Mahasiswa (C-05)." />

        <BelumTersedia keterangan="Laporan pembelajaran belum diterima dari Gugus Penjaminan Mutu." />
      </div>
    </>
  );
}
