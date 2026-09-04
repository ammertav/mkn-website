import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiClock, FiAlertCircle } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";

const kategoriPengaduan = [
  {
    id: "akademik",
    label: "Registrasi, jadwal kuliah & dokumen ujian",
    penanggungJawab: "Suma’in, S.Pd.",
    jabatan: "Bidang Akademik",
    telepon: "6282312228282",
  },
  {
    id: "keuangan",
    label: "Biaya kuliah, pembayaran & administrasi keuangan",
    penanggungJawab: "Laili Rohmah, S.Pd.",
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
    id: "tata-usaha",
    label: "Urusan lain, atau belum yakin harus ke bidang mana",
    penanggungJawab: "Ikrom, S.H., M.H.",
    jabatan: "Kepala Tata Usaha",
    telepon: "6282312228181",
    lebar: true,
  },
];

const daftarStatus = ["Mahasiswa", "Alumni", "Calon mahasiswa", "Dosen / tenaga kependidikan", "Umum"];

const surel = { alamat: "mkn@unissula.ac.id" };

const nomorUmum = {
  tampilan: "+62 823-1222-8181",
  telepon: "6282312228181",
};

const jamKonsultasi = "Senin – Jumat, pukul 09.00 – 15.00 WIB";

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
        <title>Pengaduan & Bantuan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Formulir pengaduan dan permohonan bantuan Program Studi Magister Kenotariatan (MKn) UNISSULA. Isi formulir, pesan diteruskan ke staf yang menangani melalui WhatsApp atau surel resmi."
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <Breadcrumb />
        </div>

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Kepala halaman */}
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary block mb-2">
              Layanan Program Studi
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-heading leading-[1.12] tracking-tight">
              Formulir Pengaduan &amp; Bantuan
            </h1>
            <p className="mt-4 text-sm sm:text-base text-body leading-relaxed">
              Isi keterangan di bawah ini. Pengaduan Anda akan dirangkai menjadi satu pesan
              lengkap dan diteruskan kepada staf yang menangani kategori tersebut.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* ============================ FORMULIR ============================ */}
            <form
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
                  {kategoriPengaduan.map((kategori) => {
                    const terpilih = isian.kategori === kategori.id;
                    return (
                      <label
                        key={kategori.id}
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
                      </label>
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
                    <button
                      type="button"
                      onClick={kirimWhatsApp}
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-btn text-white px-6 py-3 rounded-xs text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Kirim lewat WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={kirimSurel}
                      className="inline-flex items-center justify-center gap-2 border border-heading text-heading hover:bg-heading hover:text-white px-6 py-3 rounded-xs text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      <FiMail className="text-base" />
                      <span>Kirim lewat Surel</span>
                    </button>
                  </div>

                  {kategoriTerpilih && (
                    <p className="mt-4 text-xs text-body leading-relaxed">
                      Pengaduan ini akan diteruskan kepada{" "}
                      <strong className="text-heading font-semibold">
                        {kategoriTerpilih.penanggungJawab}
                      </strong>{" "}
                      — {kategoriTerpilih.jabatan}.
                    </p>
                  )}
                </div>
              </section>
            </form>

            {/* ============================ KOLOM KANAN ============================ */}
            <aside className="lg:col-span-4 lg:sticky lg:top-[calc(var(--header-h)+2rem)] space-y-8">
              <div className="border-t-2 border-heading pt-5">
                <h2 className="text-[11px] font-bold tracking-[0.16em] uppercase text-heading">
                  Cara kerjanya
                </h2>
                <ol className="mt-4 space-y-4">
                  {[
                    "Pilih kategori urusan agar pengaduan langsung sampai ke staf yang berwenang.",
                    "Lengkapi identitas dan uraian sejelas mungkin, sertakan waktu kejadian.",
                    "Kirim lewat WhatsApp untuk respons cepat, atau surel bila perlu lampiran dan jejak tertulis.",
                  ].map((langkah, idx) => (
                    <li key={langkah} className="flex gap-3">
                      <span className="font-heading font-bold text-primary tabular-nums shrink-0">
                        {idx + 1}.
                      </span>
                      <span className="text-sm text-body leading-relaxed">{langkah}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-gray-200 pt-5 space-y-4">
                <h2 className="text-[11px] font-bold tracking-[0.16em] uppercase text-heading">
                  Kontak langsung
                </h2>

                <div className="flex items-start gap-3">
                  <FiClock className="text-base text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-heading">Jam konsultasi</p>
                    <p className="text-sm text-body leading-relaxed">{jamKonsultasi}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
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
                </div>

                <div className="flex items-start gap-3">
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
                </div>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
