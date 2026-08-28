import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const guidelineDocuments = [
  {
    title: "Buku Panduan Akademik MKn 2024/2025",
    version: "v3.1",
    date: "12 Agu 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Peraturan Akademik Program Pascasarjana",
    version: "v2.0",
    date: "03 Jun 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Pedoman Penulisan Tesis dan Artikel Ilmiah",
    version: "v4.2",
    date: "20 Jul 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Kalender Akademik 2024/2025",
    version: "v1.0",
    date: "29 Jul 2024",
    format: "PDF",
    href: "#",
  },
  {
    title: "Formulir Cuti Akademik dan Aktif Kembali",
    version: "v1.3",
    date: "15 Jan 2024",
    format: "DOCX",
    href: "#",
  },
];

const keyProvisions = [
  {
    id: 1,
    title: "Beban dan Masa Studi",
    desc: "Beban studi program berjumlah 40 satuan kredit semester yang ditempuh dalam empat semester dan dijadwalkan selesai dalam dua tahun. Masa studi maksimum adalah delapan semester, terhitung sejak registrasi pertama, tidak termasuk masa cuti akademik yang disetujui.",
  },
  {
    id: 2,
    title: "Registrasi dan Rencana Studi",
    desc: "Registrasi administrasi dan pengisian rencana studi dilakukan melalui SIAKAD pada rentang waktu yang ditetapkan kalender akademik. Rencana studi disetujui dosen pembimbing akademik sebelum perkuliahan pekan pertama berakhir. Perubahan rencana studi hanya dilayani pada pekan kedua.",
  },
  {
    id: 3,
    title: "Kehadiran dan Perkuliahan",
    desc: "Satu mata kuliah diselenggarakan dalam empat belas pertemuan tatap muka di luar ujian tengah dan akhir semester. Mahasiswa wajib menghadiri sekurang-kurangnya sebelas pertemuan untuk berhak mengikuti ujian akhir semester. Ketidakhadiran karena tugas program studi diperhitungkan sebagai kehadiran dengan surat keterangan.",
  },
  {
    id: 4,
    title: "Cuti Akademik",
    desc: "Cuti akademik dapat diajukan paling banyak dua semester, tidak berurutan, dan hanya setelah menempuh satu semester penuh. Pengajuan disampaikan kepada Ketua Program Studi sebelum masa registrasi berakhir dengan melampirkan bukti bebas tanggungan keuangan.",
  },
  {
    id: 5,
    title: "Etika Akademik dan Sanksi",
    desc: "Plagiarisme, pemalsuan data penelitian, dan perjokian merupakan pelanggaran berat. Naskah tesis diperiksa dengan perangkat kemiripan dengan ambang batas kemiripan dua puluh persen. Sanksi berjenjang mulai dari pembatalan nilai hingga pemberhentian sebagai mahasiswa melalui keputusan Direktur Pascasarjana.",
  },
];

export default function Panduan() {
  // Secara default semua kartu terbuka sesuai desain referensi
  const [openItems, setOpenItems] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Panduan Akademik | MKn UNISSULA</title>
        <meta
          name="description"
          content="Panduan akademik resmi, dokumen regulasi pascasarjana, dan ketentuan pokok pendidikan Magister Kenotariatan (MKn) UNISSULA."
        />
      </Helmet>

      <div className="space-y-10">
        {/* Header Title Section */}
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
            ACADEMIC
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
            Panduan Akademik
          </h1>
          <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
          <p className="text-base text-body leading-relaxed max-w-3xl">
            Panduan akademik memuat ketentuan penyelenggaraan pendidikan Magister
            Kenotariatan: beban dan masa studi, registrasi, perkuliahan, cuti akademik, hingga
            kelulusan. Seluruh dokumen di bawah ini merupakan versi resmi yang berlaku pada
            tahun akademik 2024/2025.
          </p>
        </div>

        {/* Section 1: Dokumen Panduan */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Dokumen Panduan
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
                {guidelineDocuments.map((doc, idx) => (
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

        {/* Section 2: Ketentuan Pokok */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-medium text-heading tracking-normal">
              Ketentuan Pokok
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-2.5" />
          </div>

          <div className="space-y-3.5">
            {keyProvisions.map((item) => {
              const isOpen = Boolean(openItems[item.id]);

              return (
                <div
                  key={item.id}
                  className="border border-gray-200 bg-white p-6 sm:p-7 space-y-3 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-base sm:text-xl font-heading font-medium text-heading">
                      {item.title}
                    </h3>
                    <span className="text-primary text-xs p-1">
                      {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-body leading-relaxed pt-1">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
