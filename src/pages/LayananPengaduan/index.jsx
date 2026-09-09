import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiClock, FiAlertCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";

/* =========================
   Animation Settings
========================= */

const viewportSettings = {
  once: true,
  amount: 0.15,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const kategoriPengaduan = [
  {
    id: "akademik",
    label: "Registrasi, jadwal kuliah & dokumen ujian",
    penanggungJawab: "Suma'in, S.Pd.",
    jabatan: "Bidang Akademik",
    telepon: "6282312228282",
  },
  {
    id: "keuangan",
    label: "Biaya kuliah, pembayaran & administrasi keuangan",
    penanggungJawab: "Laili Rohmah, S.E.",
    jabatan: "Bidang Keuangan",
    telepon: null,
  },
  {
    id: "promosi-humas",
    label: "Penerimaan mahasiswa baru, publikasi & media",
    penanggungJawab: "Aidha Nabila Mustikaweni, S.Kom.",
    jabatan: "Bidang Promosi & Humas",
    telepon: null,
  },
  {
    id: "sarana-prasarana",
    label: "Ruang kuliah, laboratorium & fasilitas kampus",
    penanggungJawab: "Ahmad Kuswardoyo, S.E.",
    jabatan: "Bidang Sarana Prasarana",
    telepon: null,
  },
  {
    // Satu-satunya kategori yang tertuju ke pimpinan prodi, bukan ke bidang
    // pelaksana, sehingga sengaja ditempatkan sesudah keempat bidang dan
    // dibuat selebar penuh agar terbaca sebagai jalur tersendiri.
    id: "bimbingan",
    label: "Bimbingan akademik, konsultasi studi & tesis",
    penanggungJawab: "Dr. Nanang Sri Darmadi, S.H., M.H.",
    jabatan: "Ketua Program Studi",
    telepon: null,
  },
  {
    id: "tata-usaha",
    label: "Urusan lain, atau belum yakin harus ke bidang mana",
    penanggungJawab: "Ikrom, S.H., M.H.",
    jabatan: "Kepala Tata Usaha",
    telepon: "6282312228181",
  },
];

const daftarStatus = ["Mahasiswa", "Alumni", "Calon mahasiswa", "Dosen / tenaga kependidikan", "Umum"];

const surel = { alamat: "mkn.fh@unissula.ac.id" };

const nomorUmum = {
  tampilan: "+62 823-1222-8181",
  telepon: "6282312228181",
};

const jamKonsultasi = "Senin – Jumat, pukul 08.00 – 17.00 WIB";
const jamKonsultasi2 = "Sabtu, pukul 08.00 – 15.00 WIB";

const isianAwal = {
  kategori: "",
  nama: "",
  status: "",
  identitas: "",
  kontak: "",
  perihal: "",
  uraian: "",
};

/** Kolom yang wajib diisi sebelum pengaduan boleh dikirim. */
const wajibDiisi = {
  kategori: "Pilih kategori pengaduan.",
  nama: "Nama lengkap wajib diisi.",
  status: "Pilih status Anda.",
  perihal: "Perihal wajib diisi.",
  uraian: "Uraian pengaduan wajib diisi.",
};

export default function LayananPengaduan() {
  const [isian, setIsian] = useState(isianAwal);
  const [galat, setGalat] = useState({});

  const kategoriTerpilih = kategoriPengaduan.find((k) => k.id === isian.kategori);

  const ubah = (kolom) => (e) => {
    setIsian((prev) => ({ ...prev, [kolom]: e.target.value }));
    setGalat((prev) => ({ ...prev, [kolom]: undefined }));
  };

  /** Kembalikan true bila semua kolom wajib terisi; selebihnya tandai galatnya. */
  const lolosPeriksa = () => {
    const temuan = {};
    Object.entries(wajibDiisi).forEach(([kolom, pesan]) => {
      if (!isian[kolom].trim()) temuan[kolom] = pesan;
    });
    setGalat(temuan);
    return Object.keys(temuan).length === 0;
  };

  /** Rangkai isian formulir menjadi satu badan pesan yang runut. */
  const susunPesan = () =>
    [
      `Pengaduan & Permohonan Bantuan — MKn UNISSULA`,
      ``,
      `Kategori   : ${kategoriTerpilih?.label ?? "-"}`,
      `Nama       : ${isian.nama.trim()}`,
      `Status     : ${isian.status}`,
      isian.identitas.trim() ? `NIM/Angkatan: ${isian.identitas.trim()}` : null,
      isian.kontak.trim() ? `Kontak balik: ${isian.kontak.trim()}` : null,
      `Perihal    : ${isian.perihal.trim()}`,
      ``,
      `Uraian:`,
      isian.uraian.trim(),
    ]
      .filter((baris) => baris !== null)
      .join("\n");

  const kirimWhatsApp = () => {
    if (!lolosPeriksa()) return;
    const nomor = kategoriTerpilih?.telepon ?? nomorUmum.telepon;
    window.open(
      `https://wa.me/${nomor}?text=${encodeURIComponent(susunPesan())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const kirimSurel = () => {
    if (!lolosPeriksa()) return;
    const perihal = `[Pengaduan] ${isian.perihal.trim()}`;
    window.location.href =
      `mailto:${surel.alamat}` +
      `?subject=${encodeURIComponent(perihal)}` +
      `&body=${encodeURIComponent(susunPesan())}`;
  };

  /** Kelas kolom isian, berubah saat kolomnya bergalat. */
  const kelasKolom = (kolom) =>
    `w-full px-3.5 py-2.5 bg-white border text-sm text-heading placeholder-gray-400 rounded-xs transition-colors focus:outline-none ${
      galat[kolom]
        ? "border-primary focus:border-primary"
        : "border-gray-300 focus:border-heading"
    }`;

  const Galat = ({ kolom }) =>
    galat[kolom] ? (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-primary">
        <FiAlertCircle className="shrink-0" />
        {galat[kolom]}
      </p>
    ) : null;

  return (
    <>
      <Helmet>
        <title>Pengaduan &amp; Bantuan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Formulir pengaduan dan permohonan bantuan Program Studi Magister Kenotariatan (MKn) UNISSULA. Isi formulir, pesan diteruskan ke staf yang menangani melalui WhatsApp atau surel resmi."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <Breadcrumb />
        </div>

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          {/* Kepala halaman */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.span
              variants={headerItemVariants}
              className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary block mb-2"
            >
              Layanan Program Studi
            </motion.span>
            <motion.h1
              variants={headerItemVariants}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-heading leading-[1.12] tracking-tight"
            >
              Formulir Pengaduan &amp; Bantuan
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              viewport={viewportSettings}
              className="h-[2px] bg-primary mt-4 mb-5"
            />
            <motion.p
              variants={fadeUpVariants}
              className="mt-4 text-sm sm:text-base text-body leading-relaxed"
            >
              Isi keterangan di bawah ini. Pengaduan Anda akan dirangkai menjadi satu pesan
              lengkap dan diteruskan kepada staf yang menangani kategori tersebut.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          >
            {/* ============================ FORMULIR ============================ */}
            <motion.form
              variants={cardVariants}
              className="lg:col-span-8 bg-white border border-gray-200 rounded-xs shadow-2xs"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              {/* Langkah 1 — kategori */}
              <section aria-labelledby="langkah-1" className="p-6 sm:p-8 border-b border-gray-200">
                <p
                  id="langkah-1"
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-gray-400"
                >
                  Langkah 1 — Kategori
                </p>
                <p className="mt-3 text-sm font-semibold text-heading">
                  Urusan Anda mengenai apa?
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {kategoriPengaduan.map((kategori, idx) => {
                    const terpilih = isian.kategori === kategori.id;
                    return (
                      <motion.label
                        key={kategori.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.07 }}
                        whileHover={{ scale: 1.015 }}
                        className={`cursor-pointer border rounded-xs p-4 transition-colors ${
                          kategori.lebar ? "sm:col-span-2" : ""
                        } ${
                          terpilih
                            ? "border-primary bg-red-50/50 ring-1 ring-primary/30"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="kategori"
                          value={kategori.id}
                          checked={terpilih}
                          onChange={ubah("kategori")}
                          className="sr-only"
                        />
                        <span
                          className={`block text-sm font-bold leading-snug ${
                            terpilih ? "text-primary" : "text-heading"
                          }`}
                        >
                          {kategori.label}
                        </span>
                        <span className="mt-2 block text-xs text-gray-500 leading-relaxed">
                          {kategori.jabatan} · {kategori.penanggungJawab}
                        </span>
                      </motion.label>
                    );
                  })}
                </div>
                <Galat kolom="kategori" />
              </section>

              {/* Langkah 2 — identitas pengirim */}
              <section aria-labelledby="langkah-2" className="p-6 sm:p-8 border-b border-gray-200">
                <p
                  id="langkah-2"
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-gray-400"
                >
                  Langkah 2 — Identitas
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nama" className="block text-xs font-semibold text-heading mb-1.5">
                      Nama lengkap <span className="text-primary">*</span>
                    </label>
                    <input
                      id="nama"
                      type="text"
                      value={isian.nama}
                      onChange={ubah("nama")}
                      aria-invalid={Boolean(galat.nama)}
                      placeholder="Nama sesuai data akademik"
                      className={kelasKolom("nama")}
                    />
                    <Galat kolom="nama" />
                  </div>

                  <div>
                    <label htmlFor="status" className="block text-xs font-semibold text-heading mb-1.5">
                      Status <span className="text-primary">*</span>
                    </label>
                    <select
                      id="status"
                      value={isian.status}
                      onChange={ubah("status")}
                      aria-invalid={Boolean(galat.status)}
                      className={`${kelasKolom("status")} cursor-pointer`}
                    >
                      <option value="">— Pilih status —</option>
                      {daftarStatus.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <Galat kolom="status" />
                  </div>

                  <div>
                    <label htmlFor="identitas" className="block text-xs font-semibold text-heading mb-1.5">
                      NIM / angkatan{" "}
                      <span className="font-normal text-gray-400">(opsional)</span>
                    </label>
                    <input
                      id="identitas"
                      type="text"
                      value={isian.identitas}
                      onChange={ubah("identitas")}
                      placeholder="Contoh: 21302500052 / 2025"
                      className={kelasKolom("identitas")}
                    />
                  </div>

                  <div>
                    <label htmlFor="kontak" className="block text-xs font-semibold text-heading mb-1.5">
                      Kontak balik{" "}
                      <span className="font-normal text-gray-400">(opsional)</span>
                    </label>
                    <input
                      id="kontak"
                      type="text"
                      value={isian.kontak}
                      onChange={ubah("kontak")}
                      placeholder="Nomor WhatsApp atau surel Anda"
                      className={kelasKolom("kontak")}
                    />
                  </div>
                </div>
              </section>

              {/* Langkah 3 — isi pengaduan */}
              <section aria-labelledby="langkah-3" className="p-6 sm:p-8">
                <p
                  id="langkah-3"
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-gray-400"
                >
                  Langkah 3 — Isi pengaduan
                </p>

                <div className="mt-4 space-y-5">
                  <div>
                    <label htmlFor="perihal" className="block text-xs font-semibold text-heading mb-1.5">
                      Perihal <span className="text-primary">*</span>
                    </label>
                    <input
                      id="perihal"
                      type="text"
                      value={isian.perihal}
                      onChange={ubah("perihal")}
                      aria-invalid={Boolean(galat.perihal)}
                      placeholder="Ringkas dalam satu kalimat"
                      className={kelasKolom("perihal")}
                    />
                    <Galat kolom="perihal" />
                  </div>

                  <div>
                    <label htmlFor="uraian" className="block text-xs font-semibold text-heading mb-1.5">
                      Uraian <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="uraian"
                      rows={7}
                      value={isian.uraian}
                      onChange={ubah("uraian")}
                      aria-invalid={Boolean(galat.uraian)}
                      placeholder="Jelaskan kronologi, waktu kejadian, serta pihak atau berkas yang terkait."
                      className={`${kelasKolom("uraian")} leading-relaxed resize-y`}
                    />
                    <Galat kolom="uraian" />
                  </div>
                </div>

                {/* Pengiriman — dua saluran, isian formulir yang sama */}
                <div className="mt-7 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Pilih cara pengiriman. Isian di atas akan tersalin otomatis ke aplikasi yang
                    Anda pilih, sehingga tidak perlu diketik ulang.
                  </p>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      type="button"
                      onClick={kirimWhatsApp}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-btn text-white px-6 py-3 rounded-xs text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Kirim lewat WhatsApp</span>
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={kirimSurel}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 border border-heading text-heading hover:bg-heading hover:text-white px-6 py-3 rounded-xs text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <FiMail className="text-base" />
                      <span>Kirim lewat Surel</span>
                    </motion.button>
                  </div>

                  {kategoriTerpilih && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-4 text-xs text-body leading-relaxed"
                    >
                      Pengaduan ini akan diteruskan kepada{" "}
                      <strong className="text-heading font-semibold">
                        {kategoriTerpilih.penanggungJawab}
                      </strong>{" "}
                      — {kategoriTerpilih.jabatan}.
                    </motion.p>
                  )}
                </div>
              </section>
            </motion.form>

            {/* ============================ KOLOM KANAN ============================ */}
            <motion.aside
              variants={fadeUpVariants}
              className="lg:col-span-4 lg:sticky lg:top-[calc(var(--header-h)+2rem)] space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="border-t-2 border-heading pt-5"
              >
                <h2 className="text-[11px] font-bold tracking-[0.16em] uppercase text-heading">
                  Cara kerjanya
                </h2>
                <ol className="mt-4 space-y-4">
                  {[
                    "Pilih kategori urusan agar pengaduan langsung sampai ke staf yang berwenang.",
                    "Lengkapi identitas dan uraian sejelas mungkin, sertakan waktu kejadian.",
                    "Kirim lewat WhatsApp untuk respons cepat, atau surel bila perlu lampiran dan jejak tertulis.",
                  ].map((langkah, idx) => (
                    <motion.li
                      key={langkah}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportSettings}
                      transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="font-heading font-bold text-primary tabular-nums shrink-0">
                        {idx + 1}.
                      </span>
                      <span className="text-sm text-body leading-relaxed">{langkah}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="border-t border-gray-200 pt-5 space-y-4"
              >
                <h2 className="text-[11px] font-bold tracking-[0.16em] uppercase text-heading">
                  Kontak langsung
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                  className="flex items-start gap-3"
                >
                  <FiClock className="text-base text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-heading">Jam operasional</p>
                    <p className="text-sm text-body leading-relaxed">{jamKonsultasi}</p>
                    <p className="text-sm text-body leading-relaxed">{jamKonsultasi2}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
                  className="flex items-start gap-3"
                >
                  <FiMail className="text-base text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-heading">Surel resmi</p>
                    <a
                      href={`mailto:${surel.alamat}`}
                      className="text-sm text-primary hover:underline underline-offset-4"
                    >
                      {surel.alamat}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportSettings}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.19 }}
                  className="flex items-start gap-3"
                >
                  <FaWhatsapp className="text-base text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-heading">Nomor umum program studi</p>
                    <a
                      href={`https://wa.me/${nomorUmum.telepon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline underline-offset-4 tabular-nums"
                    >
                      {nomorUmum.tampilan}
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.aside>
          </motion.div>
        </div>

        <Footer />
      </main>
    </>
  );
}
