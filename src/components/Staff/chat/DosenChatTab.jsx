import { useState } from "react";
import { useDosenChat } from "../../../hooks/useDosenChat";
import {
  DaftarPesan,
  SaranPertanyaan,
  FormInput,
  CatatanCakupan,
} from "./ChatBagian";

/**
 * Varian E — sidebar bertab: Riwayat Pendidikan dan Tanya Dosen berbagi ruang.
 *
 * Menyelesaikan persoalan sidebar yang sesak tanpa menambah tinggi halaman,
 * dan tidak menutupi apa pun. Biayanya: Riwayat Pendidikan — informasi utama —
 * kini butuh satu klik bila pengguna sedang berada di tab percakapan.
 */
export default function DosenChatTab({ dosen }) {
  const [tab, setTab] = useState("pendidikan");
  const { pesan, input, setInput, sedangMengetik, kirim, saran } = useDosenChat(dosen);
  const baruMulai = pesan.length <= 1;

  const tabs = [
    { key: "pendidikan", label: "Riwayat Pendidikan" },
    { key: "tanya", label: "Tanya Dosen" },
  ];

  return (
    <div className="border border-gray-200 bg-white rounded-xs shadow-2xs overflow-hidden">
      {/* Tab */}
      <div className="flex border-b border-gray-200" role="tablist">
        {tabs.map((t) => {
          const aktif = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={aktif}
              onClick={() => setTab(t.key)}
              className={`flex-1 px-3 py-3 text-[11px] font-bold tracking-[0.1em] uppercase transition-colors border-b-2 cursor-pointer ${
                aktif
                  ? "border-primary text-primary bg-white"
                  : "border-transparent text-body hover:text-heading bg-gray-50/70"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Riwayat pendidikan */}
      {tab === "pendidikan" && (
        <div className="p-4" role="tabpanel">
          {dosen.education?.length ? (
            <div className="space-y-5">
              {dosen.education.map((e, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-xs font-bold text-primary tabular-nums">{e.year}</span>
                  <p className="font-heading text-sm font-semibold text-heading leading-snug">
                    {e.degree}
                  </p>
                  <p className="text-xs text-body leading-relaxed">{e.university}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">Riwayat pendidikan belum tersedia.</p>
          )}
        </div>
      )}

      {/* Percakapan */}
      {tab === "tanya" && (
        <div role="tabpanel">
          <div className="p-4 space-y-4">
            <DaftarPesan
              pesan={pesan}
              sedangMengetik={sedangMengetik}
              className="max-h-72 overflow-y-auto pr-1"
            />
            {baruMulai && (
              <SaranPertanyaan saran={saran} onPilih={(s) => kirim(s)} className="pt-1" />
            )}
          </div>

          <div className="p-4 pt-0 space-y-2.5">
            <FormInput
              input={input}
              setInput={setInput}
              kirim={kirim}
              sedangMengetik={sedangMengetik}
            />
            <CatatanCakupan />
          </div>
        </div>
      )}
    </div>
  );
}
