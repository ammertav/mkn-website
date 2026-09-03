import { useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";

/**
 * Potongan tampilan yang dipakai bersama ketiga varian chatbot dosen.
 * Hanya presentasi — seluruh state ada di useDosenChat().
 */

export function DaftarPesan({ pesan, sedangMengetik, className = "" }) {
  const containerRef = useRef(null);
  const baruDimuatRef = useRef(true);

  useEffect(() => {
    // Jangan lakukan scroll pada render awal saat halaman baru dibuka
    if (baruDimuatRef.current) {
      baruDimuatRef.current = false;
      return;
    }

    // Hanya gulir kontainer chat internal, jangan sentuh scroll halaman utama
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [pesan, sedangMengetik]);

  return (
    <div
      ref={containerRef}
      className={`space-y-3 ${className}`}
      role="log"
      aria-live="polite"
    >
      {pesan.map((m, idx) => (
        <div
          key={idx}
          className={`flex ${m.dari === "user" ? "justify-end" : "justify-start"}`}
        >
          <p
            className={`whitespace-pre-line text-sm leading-relaxed px-3.5 py-2.5 max-w-[85%] rounded-xs ${
              m.dari === "user"
                ? "bg-primary text-white"
                : "bg-gray-50 text-body border border-gray-200"
            }`}
          >
            {m.teks}
          </p>
        </div>
      ))}

      {sedangMengetik && (
        <div className="flex justify-start">
          <p className="text-xs text-gray-400 px-3.5 py-2 italic">Sedang mengetik…</p>
        </div>
      )}
    </div>
  );
}

export function SaranPertanyaan({ saran, onPilih, className = "" }) {
  if (!saran.length) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {saran.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onPilih(s)}
          className="text-xs text-body border border-gray-300 rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors cursor-pointer text-left"
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export function FormInput({
  input,
  setInput,
  kirim,
  sedangMengetik,
  placeholder = "Tulis pertanyaan…",
  className = "",
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        kirim();
      }}
      className={`flex items-center gap-2 ${className}`}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="flex-grow min-w-0 border border-gray-300 rounded-xs px-3.5 py-2.5 text-sm text-heading placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        disabled={!input.trim() || sedangMengetik}
        aria-label="Kirim pertanyaan"
        className="shrink-0 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-xs hover:bg-[#680000] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <FiSend className="text-sm" />
      </button>
    </form>
  );
}

/** Keterangan kecil bahwa jawaban dibatasi pada profil dosen ini. */
export function CatatanCakupan({ className = "" }) {
  return (
    <p className={`text-xs text-gray-400 leading-relaxed ${className}`}>
      Asisten ini hanya menjawab berdasarkan profil dosen pada halaman ini.
    </p>
  );
}
