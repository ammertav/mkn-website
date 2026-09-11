import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiClock, FiAlertCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { useT, useLanguage } from "../../i18n/languageContext";

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
    label: {
      id: "Registrasi, jadwal kuliah & dokumen ujian",
      en: "Registration, class schedule & exam documents",
    },
    penanggungJawab: "Suma'in, S.Pd.",
    jabatan: { id: "Bidang Akademik", en: "Academic Affairs Division" },
    telepon: "6282312228282",
  },
  {
    id: "keuangan",
    label: {
      id: "Biaya kuliah, pembayaran & administrasi keuangan",
      en: "Tuition fees, payment & financial administration",
    },
    penanggungJawab: "Laili Rohmah, S.E.",
    jabatan: { id: "Bidang Keuangan", en: "Financial Affairs Division" },
    telepon: null,
  },
  {
    id: "promosi-humas",
    label: {
      id: "Penerimaan mahasiswa baru, publikasi & media",
      en: "Student admissions, publications & media",
    },
    penanggungJawab: "Aidha Nabila Mustikaweni, S.Kom.",
    jabatan: { id: "Bidang Promosi & Humas", en: "Promotion & Public Relations Division" },
    telepon: null,
  },
  {
    id: "sarana-prasarana",
    label: {
      id: "Ruang kuliah, laboratorium & fasilitas kampus",
      en: "Lecture rooms, laboratories & campus facilities",
    },
    penanggungJawab: "Ahmad Kuswardoyo, S.E.",
    jabatan: { id: "Bidang Sarana Prasarana", en: "Facilities & Infrastructure Division" },
    telepon: null,
  },
  {
    id: "bimbingan",
    label: {
      id: "Bimbingan akademik, konsultasi studi & tesis",
      en: "Academic advising, study consultation & thesis",
    },
    penanggungJawab: "Dr. Nanang Sri Darmadi, S.H., M.H.",
    jabatan: { id: "Ketua Program Studi", en: "Head of Study Program" },
    telepon: null,
  },
  {
    id: "tata-usaha",
    label: {
      id: "Urusan lain, atau belum yakin harus ke bidang mana",
      en: "Other matters, or unsure which division to consult",
    },
    penanggungJawab: "Ikrom, S.H., M.H.",
    jabatan: { id: "Kepala Tata Usaha", en: "Head of Administration" },
    telepon: "6282312228181",
  },
];

const daftarStatus = [
  { id: "Mahasiswa", en: "Student" },
  { id: "Alumni", en: "Alumni" },
  { id: "Calon mahasiswa", en: "Prospective student" },
  { id: "Dosen / tenaga kependidikan", en: "Faculty / staff" },
  { id: "Umum", en: "Public" },
];

const surel = { alamat: "mkn.fh@unissula.ac.id" };

const nomorUmum = {
  tampilan: "+62 823-1222-8181",
  telepon: "6282312228181",
};

const jamKonsultasi = {
  id: "Senin – Jumat, pukul 08.00 – 17.00 WIB",
  en: "Monday – Friday, 08:00 – 17:00 WIB",
};

const jamKonsultasi2 = {
  id: "Sabtu, pukul 08.00 – 15.00 WIB",
  en: "Saturday, 08:00 – 15:00 WIB",
};

const isianAwal = {
  kategori: "",
  nama: "",
  status: "",
  identitas: "",
  kontak: "",
  perihal: "",
  uraian: "",
};

export default function LayananPengaduan() {
  const t = useT();
  const { lang } = useLanguage();
  const [isian, setIsian] = useState(isianAwal);
  const [galat, setGalat] = useState({});

  const wajibDiisi = {
    kategori: {
      id: "Pilih kategori pengaduan.",
      en: "Please select a complaint category.",
    },
    nama: {
      id: "Nama lengkap wajib diisi.",
      en: "Full name is required.",
    },
    status: {
      id: "Pilih status Anda.",
      en: "Please select your status.",
    },
    perihal: {
      id: "Perihal wajib diisi.",
      en: "Subject is required.",
    },
    uraian: {
      id: "Uraian pengaduan wajib diisi.",
      en: "Description is required.",
    },
  };

  const kategoriTerpilih = kategoriPengaduan.find((k) => k.id === isian.kategori);

  const ubah = (kolom) => (e) => {
    setIsian((prev) => ({ ...prev, [kolom]: e.target.value }));
    setGalat((prev) => ({ ...prev, [kolom]: undefined }));
  };

  const lolosPeriksa = () => {
    const temuan = {};
    Object.entries(wajibDiisi).forEach(([kolom, pesan]) => {
      if (!isian[kolom].trim()) temuan[kolom] = t(pesan);
    });
    setGalat(temuan);
    return Object.keys(temuan).length === 0;
  };

  const susunPesan = () =>
    [
      lang === "en"
        ? `Inquiry & Assistance Request — MKn UNISSULA`
        : `Pengaduan & Permohonan Bantuan — MKn UNISSULA`,
      ``,
      `${lang === "en" ? "Category   " : "Kategori   "}: ${
        kategoriTerpilih ? t(kategoriTerpilih.label) : "-"
      }`,
      `${lang === "en" ? "Name       " : "Nama       "}: ${isian.nama.trim()}`,
      `${lang === "en" ? "Status     " : "Status     "}: ${isian.status}`,
      isian.identitas.trim()
        ? `${lang === "en" ? "Student ID/Cohort" : "NIM/Angkatan"}: ${isian.identitas.trim()}`
        : null,
      isian.kontak.trim()
        ? `${lang === "en" ? "Contact Info" : "Kontak balik"}: ${isian.kontak.trim()}`
        : null,
      `${lang === "en" ? "Subject    " : "Perihal    "}: ${isian.perihal.trim()}`,
      ``,
      `${lang === "en" ? "Description" : "Uraian"}:`,
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
    const prefix = lang === "en" ? "[Inquiry]" : "[Pengaduan]";
    const perihal = `${prefix} ${isian.perihal.trim()}`;
    window.location.href =
      `mailto:${surel.alamat}` +
      `?subject=${encodeURIComponent(perihal)}` +
      `&body=${encodeURIComponent(susunPesan())}`;
  };

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
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Complaints & Inquiries | MKn UNISSULA"
            : "Pengaduan & Bantuan | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "Inquiry and assistance form for Master of Notarial Law (MKn) UNISSULA. Submit your request, routed to relevant personnel via WhatsApp or official email."
              : "Formulir pengaduan dan permohonan bantuan Program Studi Magister Kenotariatan (MKn) UNISSULA. Isi formulir, pesan diteruskan ke staf yang menangani melalui WhatsApp atau surel resmi."
          }
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
              {t({
                id: "Layanan Program Studi",
                en: "Study Program Services",
              })}
            </motion.span>
            <motion.h1
              variants={headerItemVariants}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-heading leading-[1.12] tracking-tight"
            >
              {t({
                id: "Formulir Pengaduan & Bantuan",
                en: "Complaints & Assistance Form",
              })}
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
              {t({
                id: "Isi keterangan di bawah ini. Pengaduan Anda akan dirangkai menjadi satu pesan lengkap dan diteruskan kepada staf yang menangani kategori tersebut.",
                en: "Fill in the details below. Your inquiry will be compiled into a structured message and forwarded to the staff handling the selected category.",
              })}
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
                  {t({
                    id: "Langkah 1 — Kategori",
                    en: "Step 1 — Category",
                  })}
                </p>
                <p className="mt-3 text-sm font-semibold text-heading">
                  {t({
                    id: "Urusan Anda mengenai apa?",
                    en: "What is your inquiry regarding?",
                  })}
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
                          {t(kategori.label)}
                        </span>
                        <span className="mt-2 block text-xs text-gray-500 leading-relaxed">
                          {t(kategori.jabatan)} · {kategori.penanggungJawab}
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
                  {t({
                    id: "Langkah 2 — Identitas",
                    en: "Step 2 — Identity",
                  })}
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nama" className="block text-xs font-semibold text-heading mb-1.5">
                      {t({ id: "Nama lengkap", en: "Full name" })} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="nama"
                      type="text"
                      value={isian.nama}
                      onChange={ubah("nama")}
                      aria-invalid={Boolean(galat.nama)}
                      placeholder={
                        lang === "en"
                          ? "Name as registered in academic records"
                          : "Nama sesuai data akademik"
                      }
                      className={kelasKolom("nama")}
                    />
                    <Galat kolom="nama" />
                  </div>

                  <div>
                    <label htmlFor="status" className="block text-xs font-semibold text-heading mb-1.5">
                      {t({ id: "Status", en: "Status" })} <span className="text-primary">*</span>
                    </label>
                    <select
                      id="status"
                      value={isian.status}
                      onChange={ubah("status")}
                      aria-invalid={Boolean(galat.status)}
                      className={`${kelasKolom("status")} cursor-pointer`}
                    >
                      <option value="">
                        {t({ id: "— Pilih status —", en: "— Select status —" })}
                      </option>
                      {daftarStatus.map((st) => (
                        <option key={st.id} value={t(st)}>
                          {t(st)}
                        </option>
                      ))}
                    </select>
                    <Galat kolom="status" />
                  </div>

                  <div>
                    <label htmlFor="identitas" className="block text-xs font-semibold text-heading mb-1.5">
                      {t({ id: "NIM / angkatan", en: "Student ID / cohort" })}{" "}
                      <span className="font-normal text-gray-400">
                        ({t({ id: "opsional", en: "optional" })})
                      </span>
                    </label>
                    <input
                      id="identitas"
                      type="text"
                      value={isian.identitas}
                      onChange={ubah("identitas")}
                      placeholder={
                        lang === "en"
                          ? "Example: 21302500052 / 2025"
                          : "Contoh: 21302500052 / 2025"
                      }
                      className={kelasKolom("identitas")}
                    />
                  </div>

                  <div>
                    <label htmlFor="kontak" className="block text-xs font-semibold text-heading mb-1.5">
                      {t({ id: "Kontak balik", en: "Contact info" })}{" "}
                      <span className="font-normal text-gray-400">
                        ({t({ id: "opsional", en: "optional" })})
                      </span>
                    </label>
                    <input
                      id="kontak"
                      type="text"
                      value={isian.kontak}
                      onChange={ubah("kontak")}
                      placeholder={
                        lang === "en"
                          ? "Your WhatsApp number or email"
                          : "Nomor WhatsApp atau surel Anda"
                      }
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
                  {t({
                    id: "Langkah 3 — Isi pengaduan",
                    en: "Step 3 — Details",
                  })}
                </p>

                <div className="mt-4 space-y-5">
                  <div>
                    <label htmlFor="perihal" className="block text-xs font-semibold text-heading mb-1.5">
                      {t({ id: "Perihal", en: "Subject" })} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="perihal"
                      type="text"
                      value={isian.perihal}
                      onChange={ubah("perihal")}
                      aria-invalid={Boolean(galat.perihal)}
                      placeholder={
                        lang === "en"
                          ? "Summarize in one sentence"
                          : "Ringkas dalam satu kalimat"
                      }
                      className={kelasKolom("perihal")}
                    />
                    <Galat kolom="perihal" />
                  </div>

                  <div>
                    <label htmlFor="uraian" className="block text-xs font-semibold text-heading mb-1.5">
                      {t({ id: "Uraian", en: "Description" })} <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="uraian"
                      rows={7}
                      value={isian.uraian}
                      onChange={ubah("uraian")}
                      aria-invalid={Boolean(galat.uraian)}
                      placeholder={
                        lang === "en"
                          ? "Explain the background, timeline, involved parties, or related documents."
                          : "Jelaskan kronologi, waktu kejadian, serta pihak atau berkas yang terkait."
                      }
                      className={`${kelasKolom("uraian")} leading-relaxed resize-y`}
                    />
                    <Galat kolom="uraian" />
                  </div>
                </div>

                {/* Pengiriman */}
                <div className="mt-7 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {t({
                      id: "Pilih cara pengiriman. Isian di atas akan tersalin otomatis ke aplikasi yang Anda pilih, sehingga tidak perlu diketik ulang.",
                      en: "Choose submission method. The form data above will be automatically prefilled into your chosen application without needing retyping.",
                    })}
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
                      <span>{t({ id: "Kirim lewat WhatsApp", en: "Send via WhatsApp" })}</span>
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={kirimSurel}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 border border-heading text-heading hover:bg-heading hover:text-white px-6 py-3 rounded-xs text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <FiMail className="text-base" />
                      <span>{t({ id: "Kirim lewat Surel", en: "Send via Email" })}</span>
                    </motion.button>
                  </div>

                  {kategoriTerpilih && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-4 text-xs text-body leading-relaxed"
                    >
                      {t({
                        id: "Pengaduan ini akan diteruskan kepada",
                        en: "This request will be forwarded to",
                      })}{" "}
                      <strong className="text-heading font-semibold">
                        {kategoriTerpilih.penanggungJawab}
                      </strong>{" "}
                      — {t(kategoriTerpilih.jabatan)}.
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
                  {t({ id: "Cara kerjanya", en: "How it works" })}
                </h2>
                <ol className="mt-4 space-y-4">
                  {[
                    {
                      id: "Pilih kategori urusan agar pengaduan langsung sampai ke staf yang berwenang.",
                      en: "Select a category so your inquiry directly reaches the authorized staff.",
                    },
                    {
                      id: "Lengkapi identitas dan uraian sejelas mungkin, sertakan waktu kejadian.",
                      en: "Provide identification and clear details, including dates/timeline.",
                    },
                    {
                      id: "Kirim lewat WhatsApp untuk respons cepat, atau surel bila perlu lampiran dan jejak tertulis.",
                      en: "Send via WhatsApp for swift responses, or email if attachments or written records are required.",
                    },
                  ].map((langkah, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportSettings}
                      transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="font-heading font-bold text-primary tabular-nums shrink-0">
                        {idx + 1}.
                      </span>
                      <span className="text-sm text-body leading-relaxed">{t(langkah)}</span>
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
                  {t({ id: "Kontak langsung", en: "Direct contacts" })}
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
                    <p className="text-xs font-semibold text-heading">
                      {t({ id: "Jam operasional", en: "Operating hours" })}
                    </p>
                    <p className="text-sm text-body leading-relaxed">{t(jamKonsultasi)}</p>
                    <p className="text-sm text-body leading-relaxed">{t(jamKonsultasi2)}</p>
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
                    <p className="text-xs font-semibold text-heading">
                      {t({ id: "Surel resmi", en: "Official email" })}
                    </p>
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
                    <p className="text-xs font-semibold text-heading">
                      {t({
                        id: "Nomor umum program studi",
                        en: "General study program number",
                      })}
                    </p>
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
