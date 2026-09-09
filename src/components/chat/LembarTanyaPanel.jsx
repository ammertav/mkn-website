import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiCornerDownLeft, FiFeather, FiRotateCcw, FiX } from "react-icons/fi";

import {
  catatanLembar,
  jawabProdi,
  pokokBahasan,
} from "../../utils/prodiChatEngine";

/**
 * Lembar Tanya — asisten cakupan program studi.
 *
 * ALUR DATA sengaja disusun sama dengan ContohChat.jsx: satu state `messages`
 * berisi { from, text }, satu `handleSubmit` async, panggilan axios.post di
 * dalam try, pesan galat di catch, dan setLoading(false) di finally. Yang
 * berbeda hanya penyajiannya. Siapa pun yang sudah membaca ContohChat.jsx
 * akan menemukan bagian chatbot di sini persis di tempat yang sama.
 *
 * KONTRAK API:
 *   POST <VITE_CHAT_API_URL>
 *   badan   : { "prompt": "<pertanyaan pengguna>" }
 *   balasan : { "reply":  "<jawaban>" }
 *
 * Bidang `rujukan` pada balasan bersifat opsional dan belum dikirim API. Alur
 * pembacaannya tetap dipasang di sini supaya API tinggal menambahkan bidang
 * itu kelak, tanpa perlu mengubah tampilan.
 *
 * PENYAJIAN sengaja bukan gelembung percakapan: panel ini disusun sebagai
 * lembar keterangan bernomor — kepala dokumen, garis margin, butir berlabel
 * PERTANYAAN dan KETERANGAN, serta daftar rujukan di tiap keterangan.
 *
 * Dimuat lambat oleh LembarTanya supaya axios dan mesin luring tidak ikut ke
 * dalam bundel awal setiap halaman.
 */

/** Kosong selama endpoint belum diatur; lihat .env.example. */
const API_URL = (import.meta.env.VITE_CHAT_API_URL ?? "").trim();

/** Batas tunggu, supaya permintaan yang menggantung tidak membekukan tombol. */
const BATAS_TUNGGU_MS = 20000;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const lembarVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 28 },
  },
  exit: { opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.15 } },
};

const butirVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const nomorLembar = (tanggal) =>
  `LT/${String(tanggal.getDate()).padStart(2, "0")}${String(
    tanggal.getMonth() + 1
  ).padStart(2, "0")}/${tanggal.getFullYear()}`;

const tanggalPanjang = (tanggal) =>
  new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(tanggal);

/**
 * Samakan bentuk rujukan. API boleh mengirimnya sebagai { label, ke } maupun
 * sebagai URL polos; keduanya diterima, sisanya dibuang.
 */
function bakukanRujukan(daftar) {
  return (Array.isArray(daftar) ? daftar : [])
    .map((r) => (typeof r === "string" ? { label: r, ke: r } : r))
    .filter((r) => r && typeof r.ke === "string" && r.ke.trim())
    .map((r) => ({ label: String(r.label ?? r.ke), ke: r.ke.trim() }));
}

/**
 * Satu baris rujukan.
 *
 * Rute internal dan URL penuh harus dirender berbeda: <Link> hanya sah untuk
 * rute dalam aplikasi — dipakai untuk URL eksternal, ia menghasilkan tautan
 * mati.
 */
function BarisRujukan({ rujukan, onTutup }) {
  const eksternal = /^https?:\/\//i.test(rujukan.ke);

  const isi = (
    <>
      <span aria-hidden="true" className="text-primary/40">
        {eksternal ? "↗" : "→"}
      </span>
      <span>{rujukan.label}</span>
    </>
  );

  const kelas =
    "inline-flex items-baseline gap-2 text-sm text-primary hover:underline";

  return (
    <li>
      {eksternal ? (
        <a
          href={rujukan.ke}
          target="_blank"
          rel="noopener noreferrer"
          className={kelas}
        >
          {isi}
        </a>
      ) : (
        <Link to={rujukan.ke} onClick={onTutup} className={kelas}>
          {isi}
        </Link>
      )}
    </li>
  );
}

/** Label kecil huruf besar yang menandai bagian pada lembar. */
function Label({ children, warna = "text-primary" }) {
  return (
    <span
      className={`block text-[10px] font-bold tracking-[0.18em] uppercase ${warna}`}
    >
      {children}
    </span>
  );
}

export default function LembarTanyaPanel({ onTutup }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);
  const isiRef = useRef(null);
  const tanggalRef = useRef(new Date());

  // Kunci gulir halaman selama lembar terbuka, lalu kembalikan seperti semula.
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onTutup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onTutup]);

  // Gulir hanya wadah isinya; halaman di belakang tidak boleh ikut bergerak.
  useEffect(() => {
    const el = isiRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  /**
   * Kirim satu pertanyaan. Dipakai oleh formulir maupun tombol pokok bahasan,
   * karena pokok bahasan mengirim teks yang tidak berada di dalam `input`.
   */
  const ajukan = async (prompt) => {
    if (!prompt.trim() || loading) return;

    const userMessage = { from: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Selama VITE_CHAT_API_URL belum diisi, keterangan disusun mesin luring
      // agar halamannya tetap berfungsi. Hapus cabang ini bila API sudah tetap.
      if (!API_URL) {
        await new Promise((selesai) => setTimeout(selesai, 500));
        const jawaban = jawabProdi(prompt);
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: jawaban.teks, rujukan: jawaban.rujukan },
        ]);
        return;
      }

      const response = await axios.post(
        API_URL,
        { prompt },
        { timeout: BATAS_TUNGGU_MS }
      );

      const botMessage = {
        from: "bot",
        text: response.data.reply,
        // Belum dikirim API; disiapkan untuk nanti.
        rujukan: bakukanRujukan(response.data.rujukan),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage = {
        from: "bot",
        text: "Maaf, terjadi kesalahan saat menghubungi asisten.",
        rujukan: [{ label: "Layanan Pengaduan", ke: "/layanan-pengaduan" }],
        error: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajukan(input);
  };

  const bersihkan = () => {
    setMessages([]);
    setInput("");
    setLoading(false);
  };

  const kosong = messages.length === 0;

  // Penomoran butir mengikuti urutan pertanyaan, bukan jumlah pesan, supaya
  // lembar terbaca seperti daftar butir bernomor.
  let hitung = 0;
  const daftar = messages.map((msg) => {
    if (msg.from === "user") hitung += 1;
    return { ...msg, nomor: hitung };
  });

  return createPortal(
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => {
        if (e.target === e.currentTarget) onTutup();
      }}
      className="fixed inset-0 z-[90] bg-heading/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <motion.div
        variants={lembarVariants}
        role="dialog"
        aria-modal="true"
        aria-label="Lembar Tanya Program Studi"
        className="w-full sm:max-w-2xl h-[88vh] sm:h-auto sm:max-h-[85vh] bg-[#fdfcf9] rounded-t-sm sm:rounded-xs shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Pita kepala — penanda dokumen resmi, bukan bilah aplikasi. */}
        <div className="h-1 bg-primary shrink-0" />

        {/* Kepala lembar */}
        <div className="shrink-0 px-5 sm:px-8 pt-5 pb-4 border-b border-heading/15">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <Label>Lembar Tanya</Label>
              <h2 className="font-heading text-lg sm:text-xl text-heading leading-snug mt-1">
                Magister Kenotariatan UNISSULA
              </h2>
            </div>

            <div className="flex items-start gap-1 shrink-0">
              {!kosong && (
                <button
                  type="button"
                  onClick={bersihkan}
                  aria-label="Mulai lembar baru"
                  title="Mulai lembar baru"
                  className="w-8 h-8 flex items-center justify-center rounded-xs text-heading/40 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <FiRotateCcw className="text-sm" />
                </button>
              )}

              <button
                type="button"
                onClick={onTutup}
                aria-label="Tutup lembar"
                className="w-8 h-8 flex items-center justify-center rounded-xs text-heading/40 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <FiX className="text-base" />
              </button>
            </div>
          </div>

          {/* Baris identitas dokumen */}
          <div className="mt-3 pt-3 border-t border-dashed border-heading/15 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-heading/50 tabular-nums">
            <span>No. {nomorLembar(tanggalRef.current)}</span>
            <span>{tanggalPanjang(tanggalRef.current)}</span>
            <span className="ml-auto flex items-center gap-3">
              {!API_URL && (
                <span
                  title="VITE_CHAT_API_URL belum diisi; keterangan disusun dari isi situs."
                  className="text-[10px] font-bold tracking-wider uppercase text-heading/40 border border-heading/20 px-1.5 py-0.5 rounded-xs"
                >
                  Luring
                </span>
              )}
              <span>{hitung} butir</span>
            </span>
          </div>
        </div>

        {/* Badan lembar */}
        <div
          ref={isiRef}
          role="log"
          aria-live="polite"
          className="flex-1 min-h-0 overflow-y-auto relative"
        >
          {/* Garis margin — hairline merah sepanjang lembar, seperti kertas
              berkolom. Dekoratif, jadi disembunyikan dari pembaca layar. */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute top-0 bottom-0 left-[4.5rem] w-px bg-primary/20"
          />

          <div className="px-5 sm:pl-[6rem] sm:pr-8 py-6">
            {kosong ? (
              <div className="space-y-5">
                <p className="font-heading text-base sm:text-lg text-heading/80 leading-relaxed">
                  Lembar ini masih kosong. Ajukan pertanyaan mengenai program
                  studi — penerimaan, kurikulum, tesis, agenda, atau layanan —
                  dan keterangannya akan dicatatkan di sini.
                </p>

                <div>
                  <Label warna="text-heading/40">Pokok bahasan</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pokokBahasan.map((tanya) => (
                      <button
                        key={tanya}
                        type="button"
                        onClick={() => ajukan(tanya)}
                        className="text-xs text-left text-heading/75 border border-heading/20 hover:border-primary hover:text-primary bg-white/60 px-3 py-1.5 rounded-xs transition-colors"
                      >
                        {tanya}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              daftar.map((msg, idx) =>
                msg.from === "user" ? (
                  <motion.div
                    key={idx}
                    variants={butirVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative mt-8 first:mt-0"
                  >
                    {/* Nomor butir duduk di kolom margin pada layar lebar. */}
                    <span
                      aria-hidden="true"
                      className="hidden sm:block absolute -left-[3.4rem] top-0.5 font-heading text-sm text-primary/50 tabular-nums"
                    >
                      {String(msg.nomor).padStart(2, "0")}
                    </span>

                    <Label warna="text-heading/40">Pertanyaan</Label>
                    <p className="mt-1.5 text-sm sm:text-[15px] font-medium text-heading leading-relaxed">
                      {msg.text}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={idx}
                    variants={butirVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4"
                  >
                    <Label>Keterangan</Label>

                    <p
                      className={`mt-1.5 font-heading text-[15px] sm:text-base leading-[1.75] whitespace-pre-line ${
                        msg.error ? "text-primary/80 italic" : "text-heading/85"
                      }`}
                    >
                      {msg.text}
                    </p>

                    {msg.rujukan?.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-dashed border-heading/15">
                        <Label warna="text-heading/40">Rujukan</Label>
                        <ul className="mt-2 space-y-1.5">
                          {msg.rujukan.map((r) => (
                            <BarisRujukan
                              key={r.ke}
                              rujukan={r}
                              onTutup={onTutup}
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )
              )
            )}

            {/* Penanda menyusun: goresan pena yang memanjang-mengerut, bukan
                tiga titik khas aplikasi perpesanan. */}
            {loading && (
              <div className="mt-4 flex items-center gap-3">
                <motion.span
                  aria-hidden="true"
                  initial={{ width: 8 }}
                  animate={{ width: [8, 72, 8] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-px bg-primary/60 block"
                />
                <span className="text-xs text-heading/40 italic">
                  menyusun keterangan
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Kaki lembar — ruang pengisian, bergaya isian formulir. */}
        <div className="shrink-0 border-t border-heading/15 bg-white/70 px-5 sm:px-8 py-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="lembar-tanya-input">
              <Label warna="text-heading/40">Ajukan pertanyaan</Label>
            </label>

            <div className="mt-1.5 flex items-end gap-3">
              <input
                id="lembar-tanya-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pokok yang ingin ditanyakan…"
                autoComplete="off"
                disabled={loading}
                className="flex-1 min-w-0 bg-transparent disabled:opacity-50 border-0 border-b border-heading/25 focus:border-primary focus:ring-0 focus:outline-none px-0 py-1.5 text-sm text-heading placeholder-heading/30 transition-colors"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Catatkan pertanyaan"
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xs bg-primary text-white hover:bg-[#680000] disabled:opacity-25 disabled:hover:bg-primary transition-colors"
              >
                <FiFeather className="text-sm" />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-heading/35 leading-relaxed">
              <span className="inline-flex items-center gap-1">
                <FiCornerDownLeft className="text-[11px]" />
                Enter untuk mencatat
              </span>
              <span className="hidden sm:inline">Esc untuk menutup</span>
              <span className="basis-full sm:basis-auto sm:flex-1 sm:text-right">
                {catatanLembar}
              </span>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
