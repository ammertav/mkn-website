import { useCallback, useEffect, useRef, useState } from "react";
import {
  jawabSebagaiDosen,
  saranPertanyaan,
  sapaanPembuka,
} from "../utils/dosenChatEngine";

/**
 * State percakapan chatbot persona dosen.
 *
 * Dipakai bersama oleh ketiga varian tampilan (sidebar, inline, mengambang)
 * supaya perilakunya identik dan hanya penyajiannya yang berbeda.
 *
 * Versi peraga: jawaban dihasilkan lokal dari data dosen, dengan jeda singkat
 * agar terasa seperti percakapan. Pada implementasi sungguhan, ganti isi
 * kirim() dengan pemanggilan API RAG.
 */
export function useDosenChat(dosen) {
  const [pesan, setPesan] = useState([]);
  const [input, setInput] = useState("");
  const [sedangMengetik, setSedangMengetik] = useState(false);
  const timerRef = useRef(null);

  // Percakapan dimulai ulang setiap berpindah dosen — persona tidak boleh
  // membawa ingatan dari profil sebelumnya.
  useEffect(() => {
    setPesan([{ dari: "bot", teks: sapaanPembuka(dosen) }]);
    setInput("");
    setSedangMengetik(false);
    return () => clearTimeout(timerRef.current);
  }, [dosen]);

  const kirim = useCallback(
    (teks) => {
      const pertanyaan = (teks ?? input).trim();
      if (!pertanyaan || sedangMengetik) return;

      setPesan((prev) => [...prev, { dari: "user", teks: pertanyaan }]);
      setInput("");
      setSedangMengetik(true);

      timerRef.current = setTimeout(() => {
        setPesan((prev) => [
          ...prev,
          { dari: "bot", teks: jawabSebagaiDosen(dosen, pertanyaan) },
        ]);
        setSedangMengetik(false);
      }, 550);
    },
    [dosen, input, sedangMengetik]
  );

  return {
    pesan,
    input,
    setInput,
    sedangMengetik,
    kirim,
    saran: saranPertanyaan(dosen),
  };
}
