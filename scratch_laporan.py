# -*- coding: utf-8 -*-
"""Ubah empat halaman laporan mutu menjadi placeholder.

Data lama berisi rekapitulasi audit, nama auditor, dan skor survei yang tidak
bersumber dari dokumen mana pun. Berkasnya sudah dihapus; halamannya kini
menunggu dokumen asli dari Gugus Penjaminan Mutu.
"""
import io

HALAMAN = [
    (
        "InternalAuditReport.jsx",
        "Laporan Audit Mutu Internal",
        "Internal Audit Report",
        "Hasil audit mutu internal Program Studi Magister Kenotariatan UNISSULA beserta "
        "temuan dan tindak lanjutnya.",
        "Laporan audit mutu internal merekam temuan atas pelaksanaan standar, permintaan "
        "tindakan koreksi, serta verifikasi tindak lanjutnya. Instrumen yang dipakai adalah "
        "formulir tahap Evaluasi (C-02, C-03) dan Pengendalian (D-01 sampai D-04).",
        "Laporan audit mutu internal belum diterima dari Gugus Penjaminan Mutu.",
    ),
    (
        "LearningTeachingReport.jsx",
        "Laporan Pembelajaran",
        "Learning and Teaching Report",
        "Laporan penyelenggaraan dan evaluasi pembelajaran Program Studi Magister "
        "Kenotariatan UNISSULA.",
        "Laporan pembelajaran merangkum penyelenggaraan perkuliahan, ketercapaian capaian "
        "pembelajaran, dan hasil evaluasi dosen oleh mahasiswa. Instrumen yang dipakai adalah "
        "formulir Berita Acara Perkuliahan (B-03) dan Evaluasi Dosen oleh Mahasiswa (C-05).",
        "Laporan pembelajaran belum diterima dari Gugus Penjaminan Mutu.",
    ),
    (
        "StudentSurveyReport.jsx",
        "Laporan Survei Mahasiswa",
        "Student Survey Report",
        "Hasil survei kepuasan mahasiswa Program Studi Magister Kenotariatan UNISSULA.",
        "Laporan survei mahasiswa memuat tingkat kepuasan terhadap pembelajaran, layanan "
        "akademik, dan sarana prasarana. Instrumen yang dipakai adalah formulir Survei "
        "Kepuasan Pemangku Kepentingan (C-04).",
        "Laporan survei mahasiswa belum diterima dari Gugus Penjaminan Mutu.",
    ),
    (
        "AlumniSurveyReport.jsx",
        "Laporan Survei Alumni",
        "Alumni Survey Report",
        "Hasil survei alumni dan pengguna lulusan Program Studi Magister Kenotariatan "
        "UNISSULA.",
        "Laporan survei alumni memuat masa tunggu kerja, kesesuaian bidang kerja, dan "
        "penilaian pengguna lulusan. Instrumen yang dipakai adalah formulir Survei Kepuasan "
        "Pemangku Kepentingan (C-04) serta penelusuran alumni.",
        "Laporan survei alumni belum diterima dari Gugus Penjaminan Mutu.",
    ),
]

TEMPLATE = '''import { Helmet } from "react-helmet-async";
import {{
  KepalaMutu,
  BelumTersedia,
}} from "../../components/QualityAssurance/MutuBagian";

export default function {komponen}() {{
  return (
    <>
      <Helmet>
        <title>{judul} | MKn UNISSULA</title>
        <meta name="description" content="{meta}" />
      </Helmet>

      <div className="space-y-8 font-body text-body">
        <KepalaMutu
          judul="{judul}"
          pengantar="{pengantar}"
        />

        <BelumTersedia keterangan="{kosong}" />
      </div>
    </>
  );
}}
'''

for berkas, judul, komponen_en, meta, pengantar, kosong in HALAMAN:
    komponen = berkas.replace(".jsx", "")
    isi = TEMPLATE.format(
        komponen=komponen,
        judul=judul,
        meta=meta,
        pengantar=pengantar,
        kosong=kosong,
    )
    path = "src/pages/QualityAssurance/" + berkas
    io.open(path, "w", encoding="utf-8", newline="\n").write(isi)
    print("ditulis:", path)
