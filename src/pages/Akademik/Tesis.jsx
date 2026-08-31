import { Helmet } from "react-helmet-async";

export default function Tesis() {
  return (
    <>
      <Helmet>
        <title>Pedoman Tesis & Sidang Akhir | MKn UNISSULA</title>
        <meta
          name="description"
          content="Prosedur penulisan tesis magister kenotariatan, bimbingan dosen, seminar proposal, ujian tesis, dan syarat publikasi jurnal yudisium MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-4 max-w-3xl">
        <h2 className="text-lg font-heading font-semibold text-heading">Tesis & Sidang Akhir</h2>
        <p className="text-[14px] text-body leading-relaxed">
          Tesis merupakan karya ilmiah akhir yang wajib diselesaikan oleh mahasiswa Program Magister
          Kenotariatan sebagai syarat kelulusan. Proses penulisan tesis meliputi penyusunan proposal,
          bimbingan, seminar hasil, dan sidang tesis terbuka.
        </p>
        <ul className="space-y-2 text-[14px] text-body list-disc list-inside">
          <li>Mahasiswa memilih topik tesis bersama dosen pembimbing di Semester 3.</li>
          <li>Proposal tesis diseminarkan dan dinilai oleh tim penguji internal.</li>
          <li>Bimbingan minimal 8 kali pertemuan dan tercatat dalam kartu bimbingan.</li>
          <li>Sidang tesis dilaksanakan setelah mendapat persetujuan dari seluruh pembimbing.</li>
          <li>Wajib mempublikasikan artikel ilmiah pada jurnal terakreditasi sebagai syarat yudisium.</li>
        </ul>
      </div>
    </>
  );
}
