import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageSquare, FiX } from "react-icons/fi";
import { useDosenChat } from "../../../hooks/useDosenChat";
import {
  DaftarPesan,
  SaranPertanyaan,
  FormInput,
  CatatanCakupan,
} from "./ChatBagian";

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 26 },
  },
  exit: { opacity: 0, scale: 0.95, y: 24, transition: { duration: 0.16 } },
};

/**
 * Varian C — gelembung mengambang di kanan bawah, pola chat layanan pelanggan.
 *
 * Paling mudah ditemukan, tetapi membawa asosiasi komersial dan menutupi
 * sebagian konten di layar kecil. Warnanya sengaja memakai warna utama situs,
 * bukan warna cerah bawaan widget chat, agar tidak terlalu menonjol.
 */
export default function DosenChatFloating({ dosen }) {
  const [terbuka, setTerbuka] = useState(false);
  const { pesan, input, setInput, sedangMengetik, kirim, saran } = useDosenChat(dosen);
  const baruMulai = pesan.length <= 1;

  return (
    <>
      <AnimatePresence>
        {terbuka && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-label={`Tanya ${dosen.shortName || dosen.name}`}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] bg-white border border-gray-200 rounded-xs shadow-lg flex flex-col overflow-hidden"
          >
            {/* Kepala */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-gray-50/70 shrink-0">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 shrink-0 border border-gray-200">
                {dosen.image && (
                  <img
                    src={dosen.image}
                    alt=""
                    className="w-full h-full object-cover object-top rounded-md hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="min-w-0 flex-grow">
                <span className="text-xs font-bold tracking-[0.14em] uppercase text-primary block">
                  Tanya Langsung
                </span>
                <p className="font-heading text-sm font-semibold text-heading truncate">
                  {dosen.shortName || dosen.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setTerbuka(false)}
                aria-label="Tutup percakapan"
                className="shrink-0 text-gray-400 hover:text-heading transition-colors cursor-pointer"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Percakapan */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 min-h-0">
              <DaftarPesan pesan={pesan} sedangMengetik={sedangMengetik} />
              {baruMulai && (
                <SaranPertanyaan saran={saran} onPilih={(s) => kirim(s)} className="pt-1" />
              )}
            </div>

            {/* Masukan */}
            <div className="p-4 pt-3 border-t border-gray-200 space-y-2.5 shrink-0">
              <FormInput
                input={input}
                setInput={setInput}
                kirim={kirim}
                sedangMengetik={sedangMengetik}
              />
              <CatatanCakupan />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol pemicu */}
      <button
        type="button"
        onClick={() => setTerbuka((v) => !v)}
        aria-expanded={terbuka}
        aria-label={`Tanya ${dosen.shortName || dosen.name}`}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-[#680000] transition-colors cursor-pointer"
      >
        {terbuka ? <FiX className="text-xl" /> : <FiMessageSquare className="text-xl" />}
      </button>
    </>
  );
}
