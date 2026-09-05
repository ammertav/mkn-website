import { FiDownload } from "react-icons/fi";
import { useT } from "../../i18n/languageContext";

/**
 * Potongan tampilan bersama untuk menu Penjaminan Mutu.
 *
 * Seluruh dokumen mutu memakai pola yang sama: berkode, bertahap PPEPP, dan
 * selalu menyebut identitas dokumen (kode, revisi, tanggal). Komponen di sini
 * menjaga kelima halaman tampil seragam.
 */

/** Kepala halaman: eyebrow, judul, garis, dan pengantar. */
export function KepalaMutu({ eyebrow = "PENJAMINAN MUTU", judul, pengantar }) {
  const t = useT();
  return (
    <div>
      <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
        {t(eyebrow)}
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
        {t(judul)}
      </h1>
      <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
      {pengantar && (
        <p className="text-base text-body leading-relaxed max-w-5xl">{t(pengantar)}</p>
      )}
    </div>
  );
}

/** Judul seksi dengan garis bawah tipis. */
export function JudulMutu({ judul, keterangan }) {
  const t = useT();
  return (
    <div className="space-y-2">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-heading tracking-normal">
        {t(judul)}
      </h2>
      <div className="w-full h-[1.5px] bg-heading/80" />
      {keterangan && (
        <p className="text-sm sm:text-[15px] text-body leading-relaxed pt-2 max-w-5xl">
          {t(keterangan)}
        </p>
      )}
    </div>
  );
}

/** Angka kunci pada kepala halaman ikhtisar. */
export function AngkaMutu({ butir }) {
  const t = useT();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 bg-white">
      {butir.map((b, idx) => (
        <div key={idx} className="p-5 sm:p-6 border-r border-b border-gray-200">
          <div className="font-heading font-bold text-2xl sm:text-3xl text-primary leading-none">
            {t(b.value)}
          </div>
          <p className="mt-2 text-[11px] font-semibold tracking-wider uppercase text-gray-500 leading-snug">
            {t(b.label)}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Tabel identitas dokumen — label di kiri, nilai di kanan.
 */
export function IdentitasDokumen({ baris }) {
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
              <td className="py-3 px-4 sm:px-5 text-body leading-relaxed">{t(b.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Daftar dokumen berkode.
 *
 * Berkas yang belum diunggah (`fileUrl` kosong) menampilkan keadaan tidak
 * aktif, bukan tautan mati.
 */
export function DaftarDokumen({ butir }) {
  const t = useT();
  return (
    <div className="space-y-3">
      {butir.map((d, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xs p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 hover:border-gray-300 transition-colors shadow-2xs"
        >
          <div className="space-y-1.5 min-w-0 flex-1">
            <span className="font-mono text-[11px] text-primary tracking-wide block">
              {d.code}
            </span>
            <h3 className="font-heading font-semibold text-[15px] sm:text-base text-heading leading-snug">
              {t(d.title)}
            </h3>
            {d.meta && <p className="text-xs text-gray-500 leading-relaxed">{t(d.meta)}</p>}
          </div>

          <div className="shrink-0">
            {d.fileUrl ? (
              <a
                href={d.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-white border border-gray-300 hover:border-primary hover:bg-primary hover:text-white text-heading rounded-xs text-xs font-semibold transition-colors shadow-2xs"
              >
                <span>Unduh</span>
                <FiDownload className="text-sm" />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center px-5 py-2 border border-dashed border-gray-300 bg-gray-50 text-gray-400 rounded-xs text-xs font-semibold cursor-not-allowed select-none">
                Belum diunggah
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Kartu bernomor/berkode — dipakai untuk asas, prinsip, dan tahap siklus. */
export function KartuMutu({ butir, kolom = 3 }) {
  const t = useT();
  const grid =
    kolom === 2
      ? "sm:grid-cols-2"
      : kolom === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${grid} gap-5`}>
      {butir.map((b, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xs p-5 sm:p-6 space-y-3 hover:border-primary/40 transition-colors shadow-2xs"
        >
          {b.code && (
            <span className="inline-flex items-center justify-center min-w-9 h-9 px-2.5 rounded-xs bg-primary/10 text-primary font-heading font-bold text-sm">
              {b.code}
            </span>
          )}
          <h3 className="font-heading font-semibold text-base text-heading leading-snug">
            {t(b.title || b.stage)}
          </h3>
          {b.desc && <p className="text-sm text-body leading-relaxed">{t(b.desc)}</p>}
          {b.ayat && (
            <p className="text-xs text-gray-500 leading-relaxed pt-1 border-t border-gray-100">
              {b.ayat}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/** Daftar bernomor sederhana. */
export function DaftarNomor({ butir }) {
  const t = useT();
  return (
    <ol className="space-y-2.5">
      {butir.map((b, idx) => (
        <li key={idx} className="flex gap-3 text-sm sm:text-[15px] text-body leading-relaxed">
          <span className="shrink-0 tabular-nums text-gray-400 select-none min-w-[1.75rem]">
            {idx + 1}.
          </span>
          <span>{t(b)}</span>
        </li>
      ))}
    </ol>
  );
}

/** Blok placeholder untuk halaman yang dokumennya belum diterima. */
export function BelumTersedia({ keterangan }) {
  const t = useT();
  return (
    <div className="border border-dashed border-gray-300 bg-white p-10 sm:p-14 text-center rounded-xs">
      <p className="text-sm font-medium text-gray-500">Konten akan segera ditambahkan.</p>
      {keterangan && (
        <p className="mt-1.5 text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
          {t(keterangan)}
        </p>
      )}
    </div>
  );
}
