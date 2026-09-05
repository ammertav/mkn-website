import { Helmet } from "react-helmet-async";
import { KepalaMutu, BelumTersedia } from "../../components/QualityAssurance/MutuBagian";

export default function InternalAuditReport() {
  return (
    <>
      <Helmet>
        <title>Laporan Audit Mutu Internal | MKn UNISSULA</title>
        <meta name="description" content="Hasil audit mutu internal Program Studi Magister Kenotariatan UNISSULA beserta temuan dan tindak lanjutnya." />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu judul="Laporan Audit Mutu Internal" pengantar="Laporan audit mutu internal merekam temuan atas pelaksanaan standar, permintaan tindakan koreksi, serta verifikasi tindak lanjutnya. Instrumen yang dipakai adalah formulir tahap Evaluasi (C-02, C-03) dan Pengendalian (D-01 sampai D-04)." />

        <BelumTersedia keterangan="Laporan audit mutu internal belum diterima dari Gugus Penjaminan Mutu." />
      </div>
    </>
  );
}
