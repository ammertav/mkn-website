import { useDosenChat } from "../../../hooks/useDosenChat";
import {
  DaftarPesan,
  SaranPertanyaan,
  FormInput,
  CatatanCakupan,
} from "./ChatBagian";

/**
 * Varian A — kartu kontekstual di sidebar.
 *
 * Kartu berada di kolom yang sama dengan Riwayat Pendidikan dan Dosen Lain,
 * sehingga terbaca sebagai bagian dari profil dosen ini, bukan widget global.
 *
 * CATATAN: sticky sengaja TIDAK dipakai. Elemen sticky tetap memesan ruang di
 * alur normal lalu bergeser turun saat digulir, sehingga menimpa Riwayat
 * Pendidikan dan Dosen Lain yang berada di bawahnya.
 */
export default function DosenChatSidebar({ dosen }) {
  const { pesan, input, setInput, sedangMengetik, kirim, saran } = useDosenChat(dosen);
  const baruMulai = pesan.length <= 1;

  return (
    <div className="border border-gray-200 bg-white rounded-xs shadow-2xs overflow-hidden">
      {/* Kepala kartu */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-gray-50/70">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 border border-gray-200">
          {dosen.image && (
            <img
              src={dosen.image}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          )}
        </div>
        <div className="min-w-0">
          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-primary block">
            Tanya Langsung
          </span>
          <p className="font-heading text-sm font-semibold text-heading truncate">
            {dosen.shortName || dosen.name}
          </p>
        </div>
      </div>

      {/* Percakapan */}
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

      {/* Masukan */}
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
  );
}
