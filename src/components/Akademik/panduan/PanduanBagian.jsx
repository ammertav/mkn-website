import { useT } from "../../../i18n/languageContext";
import RichText from "../../ui/RichText";

/**
 * Potongan tampilan bersama untuk dokumen panduan ujian.
 *
 * Kedua dokumen dari prodi memakai pola yang sama: tabel metadata, keterangan
 * penanda sumber, lalu pasal-pasal bernomor yang tiap butirnya menyebut asal
 * ketentuannya. Komponen di sini menjaga keduanya tampil seragam.
 */

/** Warna penanda sumber ketentuan. */
const GAYA_SUMBER = {
  "Pedoman 2021": "bg-blue-50 text-blue-700 border-blue-200",
  "Kurikulum OBE 2026": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Peraturan: "bg-gray-100 text-gray-600 border-gray-300",
  Usulan: "bg-amber-50 text-amber-700 border-amber-300",
};

export function PenandaSumber({ sumber }) {
  if (!sumber) return null;
  const gaya = GAYA_SUMBER[sumber] || GAYA_SUMBER.Peraturan;
  return (
    <span
      className={`ml-2 align-middle text-[10px] font-semibold tracking-wide border px-1.5 py-0.5 rounded-xs whitespace-nowrap ${gaya}`}
    >
      {sumber}
    </span>
  );
}

/** Tabel identitas dokumen di kepala panduan. */
export function DokumenMeta({ baris }) {
  const t = useT();
  return (
    <div className="border border-gray-200 bg-white rounded-xs overflow-hidden">
      <table className="w-full text-left border-collapse text-sm">
        <tbody className="divide-y divide-gray-200">
          {baris.map((b, idx) => (
            <tr key={idx}>
              <th
                scope="row"
                className="align-top py-3 px-4 sm:px-5 w-2/5 sm:w-1/3 bg-gray-50/70 font-semibold text-heading text-xs sm:text-sm"
              >
                {t(b.label)}
              </th>
              <td className="py-3 px-4 sm:px-5 text-body leading-relaxed">
                <RichText>{t(b.nilai)}</RichText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Keterangan arti keempat penanda sumber. */
export function KeteranganPenanda() {
  return (
    <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-4 sm:p-5 rounded-xs space-y-2.5">
      <p className="text-xs font-bold tracking-wider uppercase text-heading">
        Penanda Sumber Ketentuan
      </p>
      <ul className="space-y-1.5 text-xs text-body leading-relaxed">
        <li>
          <PenandaSumber sumber="Pedoman 2021" />
          <span className="ml-2">
            diambil langsung dari Buku Pedoman Akademik MKn UNISSULA Tahun 2021
          </span>
        </li>
        <li>
          <PenandaSumber sumber="Kurikulum OBE 2026" />
          <span className="ml-2">mengikuti Dokumen Kurikulum OBE Tahun 2026</span>
        </li>
        <li>
          <PenandaSumber sumber="Peraturan" />
          <span className="ml-2">
            mengikuti peraturan perundang-undangan atau peraturan UNISSULA
          </span>
        </li>
        <li>
          <PenandaSumber sumber="Usulan" />
          <span className="ml-2">
            belum diatur dalam Pedoman Akademik dan dirumuskan baru pada panduan ini,
            sehingga <strong>memerlukan penetapan Program Studi</strong> sebelum diberlakukan
          </span>
        </li>
      </ul>
    </div>
  );
}

/** Judul pasal bernomor. */
export function JudulPasal({ nomor, judul }) {
  const t = useT();
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-heading font-bold text-primary text-lg sm:text-xl tabular-nums shrink-0">
        {nomor}.
      </span>
      <h2 className="font-heading font-semibold text-lg sm:text-xl text-heading leading-snug">
        {t(judul)}
      </h2>
    </div>
  );
}

/** Sub-judul dalam satu pasal, mis. "6.1 Sebelum Ujian Berlangsung". */
export function SubJudul({ nomor, judul }) {
  const t = useT();
  return (
    <h3 className="font-heading font-semibold text-base text-heading leading-snug pt-1">
      {nomor && <span className="text-primary tabular-nums mr-2">{nomor}</span>}
      {t(judul)}
    </h3>
  );
}

/**
 * Daftar klausul. `gaya` menentukan penomorannya:
 *   "angka"  -> (1) (2) (3)   — pasal berbutir
 *   "urut"   -> 1. 2. 3.      — daftar dasar hukum
 *   "dash"   -> –             — daftar larangan
 */
export function Klausul({ butir, gaya = "angka" }) {
  const t = useT();

  return (
    <ol className="space-y-2.5">
      {butir.map((b, idx) => {
        const isi = typeof b === "string" || b.id !== undefined ? b : b.teks;
        const sumber = typeof b === "object" && b.sumber ? b.sumber : null;

        let penanda;
        if (gaya === "urut") penanda = `${idx + 1}.`;
        else if (gaya === "dash") penanda = "–";
        else penanda = `(${idx + 1})`;

        return (
          <li key={idx} className="flex gap-3 text-sm sm:text-[15px] text-body leading-relaxed">
            <span className="shrink-0 tabular-nums text-gray-400 select-none min-w-[1.75rem]">
              {penanda}
            </span>
            <span>
              <RichText>{t(isi)}</RichText>
              <PenandaSumber sumber={sumber} />
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/** Tabel umum dengan kepala kolom. */
export function TabelPanduan({ kolom, baris }) {
  const t = useT();
  return (
    <div className="border border-gray-200 bg-white rounded-xs overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm min-w-[640px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/70">
            {kolom.map((k, idx) => (
              <th
                key={idx}
                className="py-3 px-4 sm:px-5 text-[11px] font-bold tracking-wider uppercase text-heading align-bottom"
              >
                {t(k)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {baris.map((r, idx) => (
            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
              {r.map((sel, i) => (
                <td
                  key={i}
                  className={`py-3.5 px-4 sm:px-5 align-top leading-relaxed ${
                    i === 0 ? "font-semibold text-heading" : "text-body"
                  }`}
                >
                  <RichText>{t(sel)}</RichText>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Blok lampiran — daftar isian formulir. */
export function Lampiran({ kode, judul, isian, catatan }) {
  const t = useT();
  return (
    <section className="border border-gray-200 bg-white rounded-xs p-5 sm:p-6 space-y-4">
      <h3 className="font-heading font-semibold text-base text-heading">
        <span className="text-primary">{kode}</span> — {t(judul)}
      </h3>

      {isian?.length > 0 && (
        <dl className="divide-y divide-gray-100 border-t border-gray-100">
          {isian.map((f, idx) => (
            <div key={idx} className="py-2.5 flex gap-4 text-sm">
              <dt className="w-1/2 sm:w-2/5 text-body shrink-0">{t(f)}</dt>
              <dd className="flex-grow text-gray-300 select-none">:</dd>
            </div>
          ))}
        </dl>
      )}

      {catatan && <p className="text-xs text-gray-500 leading-relaxed">{t(catatan)}</p>}
    </section>
  );
}
