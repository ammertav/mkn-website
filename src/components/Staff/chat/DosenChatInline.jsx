import { useDosenChat } from "../../../hooks/useDosenChat";
import {
  DaftarPesan,
  SaranPertanyaan,
  FormInput,
  CatatanCakupan,
} from "./ChatBagian";

/**
 * Varian B — prompt menyatu di dalam alur baca, tepat setelah biografi.
 *
 * Tidak ada elemen mengambang sama sekali. Terasa paling editorial dan
 * paling tidak mengganggu, tetapi juga paling mudah terlewat karena
 * posisinya di tengah halaman.
 */
export default function DosenChatInline({ dosen }) {
  const { pesan, input, setInput, sedangMengetik, kirim, saran } = useDosenChat(dosen);
  const baruMulai = pesan.length <= 1;

  return (
    <section className="border-t border-b border-gray-200 py-7 sm:py-8 space-y-5">
      <div className="space-y-1.5">
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-primary block">
          Tanya Langsung
        </span>
        <h2 className="font-heading font-normal text-xl sm:text-2xl text-heading leading-snug">
          Punya pertanyaan untuk {dosen.shortName || dosen.name}?
        </h2>
      </div>

      {baruMulai ? (
        <SaranPertanyaan saran={saran} onPilih={(s) => kirim(s)} />
      ) : (
        <DaftarPesan
          pesan={pesan}
          sedangMengetik={sedangMengetik}
          className="max-h-96 overflow-y-auto pr-1"
        />
      )}

      <div className="space-y-2.5 max-w-2xl">
        <FormInput
          input={input}
          setInput={setInput}
          kirim={kirim}
          sedangMengetik={sedangMengetik}
        />
        <CatatanCakupan />
      </div>
    </section>
  );
}
