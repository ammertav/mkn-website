import { Helmet } from "react-helmet-async";

export default function Magang() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Panduan Magang Kenotariatan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Ketentuan pelaksanaan, durasi kerja, logbook kegiatan, dan penilaian praktik magang kenotariatan di Kantor Notaris/PPAT mitra MKn UNISSULA."
        />
      </Helmet>

      <div className="space-y-4 max-w-3xl">
        <h2 className="text-lg font-heading font-semibold text-heading">Praktik Magang Kenotariatan</h2>
        <p className="text-[14px] text-body leading-relaxed">
          Magang merupakan bagian dari kurikulum Semester 4 yang memberikan pengalaman praktis langsung
          di kantor Notaris/PPAT atau instansi hukum terkait di bawah bimbingan supervisor lapangan dan
          dosen pembimbing.
        </p>
        <ul className="space-y-2 text-[14px] text-body list-disc list-inside">
          <li>Durasi magang minimal 30 hari kerja efektif.</li>
          <li>Mahasiswa wajib mengisi logbook kegiatan harian selama magang.</li>
          <li>Penilaian meliputi: laporan magang, penilaian supervisor, dan presentasi akhir.</li>
          <li>Tempat magang harus mendapat persetujuan dari koordinator program studi.</li>
        </ul>
      </div>
    </>
  );
}
