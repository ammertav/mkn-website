import { useT } from "../../../i18n/languageContext";
import RichText from "../../ui/RichText";


/** Label bawaan komponen — bukan konten dokumen, jadi tinggal di sini. */
const LABEL = {
  luaran: { id: "Luaran", en: "Output" },
  nilaiAkhir: { id: "Nilai Akhir", en: "Final Mark" },
  catatanAwal: {
    id: "Halaman ini memuat pokok-pokok ketentuan. Rujukan resmi dan lengkap adalah",
    en:
      "This page presents the main provisions. The official and complete reference is the",
  },
  catatanAkhir: {
    id: "yang ditetapkan Program Studi.",
    en: "as adopted by the Study Programme.",
  },
};

/**
 * Komponen penyajian ringkasan panduan ujian.
 *
 * Dokumen aslinya berbentuk pasal-pasal hukum yang padat. Halaman web memakai
 * bentuk ringkas dan visual; dokumen lengkap tetap menjadi rujukan resmi.
 */

/** Deretan angka kunci di kepala halaman. */
export function KartuSorot({ butir }) {
  const t = useT();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 bg-white">
      {butir.map((b, idx) => (
        <div key={idx} className="p-5 sm:p-6 border-r border-b border-gray-200 space-y-1.5">
          <div className="font-heading font-bold text-2xl sm:text-3xl text-primary leading-none">
            {t(b.angka)}
          </div>
          <p className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase leading-snug">
            {t(b.label)}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Judul seksi dengan garis bawah tebal. */
export function JudulSeksi({ judul, keterangan }) {
  const t = useT();
  return (
    <div className="space-y-2">
      <h2 className="font-heading font-normal text-2xl sm:text-3xl text-heading tracking-normal">
        {t(judul)}
      </h2>
      <div className="w-full h-[1.5px] bg-heading" />
      {keterangan && (
        <p className="text-sm sm:text-base text-body leading-relaxed pt-2 max-w-5xl">
          <RichText>{t(keterangan)}</RichText>
        </p>
      )}
    </div>
  );
}

/** Kartu bersisi ikon huruf — dipakai untuk moda pelaksanaan dan jenis ujian. */
export function KartuRingkas({ butir, kolom = 3 }) {
  const t = useT();
  const grid =
    kolom === 2 ? "sm:grid-cols-2" : kolom === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${grid} gap-5`}>
      {butir.map((b, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xs p-5 sm:p-6 space-y-3 hover:border-primary/40 transition-colors shadow-2xs"
        >
          {b.tanda && (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xs bg-primary/10 text-primary font-heading font-bold text-sm">
              {t(b.tanda)}
            </span>
          )}
          <h3 className="font-heading font-semibold text-base text-heading leading-snug">
            {t(b.judul)}
          </h3>
          {b.keterangan && (
            <p className="text-sm text-body leading-relaxed">
              <RichText>{t(b.keterangan)}</RichText>
            </p>
          )}
          {b.rincian?.length > 0 && (
            <ul className="space-y-1.5 pt-1">
              {b.rincian.map((r, i) => (
                <li key={i} className="text-sm text-body leading-relaxed flex gap-2">
                  <span aria-hidden="true" className="text-primary shrink-0">
                    ·
                  </span>
                  <span>
                    <RichText>{t(r)}</RichText>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/** Daftar bercentang — dipakai untuk syarat yang harus dipenuhi. */
export function DaftarSyarat({ butir }) {
  const t = useT();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      {butir.map((b, idx) => (
        <li key={idx} className="flex gap-3 text-sm sm:text-[15px] text-body leading-relaxed">
          <span
            aria-hidden="true"
            className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold"
          >
            ✓
          </span>
          <span>
            <RichText>{t(b)}</RichText>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Dua kolom berhadapan: yang wajib dan yang dilarang. */
export function BolehDilarang({ wajib, dilarang }) {
  const t = useT();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="border border-gray-200 bg-white rounded-xs overflow-hidden">
        <div className="px-5 py-3 bg-emerald-50/70 border-b border-emerald-100">
          <h3 className="text-xs font-bold tracking-wider uppercase text-emerald-800">
            Wajib Dipatuhi
          </h3>
        </div>
        <ul className="p-5 space-y-2.5">
          {wajib.map((w, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm text-body leading-relaxed">
              <span aria-hidden="true" className="text-emerald-600 shrink-0 font-bold">
                ✓
              </span>
              <span>
                <RichText>{t(w)}</RichText>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-gray-200 bg-white rounded-xs overflow-hidden">
        <div className="px-5 py-3 bg-red-50/70 border-b border-red-100">
          <h3 className="text-xs font-bold tracking-wider uppercase text-red-800">Dilarang</h3>
        </div>
        <ul className="p-5 space-y-2.5">
          {dilarang.map((d, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm text-body leading-relaxed">
              <span aria-hidden="true" className="text-red-500 shrink-0 font-bold">
                ✕
              </span>
              <span>
                <RichText>{t(d)}</RichText>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Sanksi bertingkat, warna menguat sesuai berat pelanggaran. */
export function SanksiTingkat({ tingkat }) {
  const t = useT();
  const gaya = [
    "border-l-amber-400 bg-amber-50/40",
    "border-l-orange-500 bg-orange-50/40",
    "border-l-red-600 bg-red-50/40",
  ];

  return (
    <div className="space-y-3">
      {tingkat.map((s, idx) => (
        <div
          key={idx}
          className={`border border-gray-200 border-l-4 rounded-xs p-5 space-y-1.5 ${gaya[idx] || gaya[2]}`}
        >
          <span className="text-[11px] font-bold tracking-wider uppercase text-heading">
            Tingkat {idx + 1}
          </span>
          <p className="font-heading font-semibold text-sm sm:text-base text-heading leading-snug">
            {t(s.sanksi)}
          </p>
          <p className="text-sm text-body leading-relaxed">{t(s.pelanggaran)}</p>
        </div>
      ))}
    </div>
  );
}

/** Alur bertahap dengan penomoran — dipakai untuk delapan tahap tesis. */
export function AlurTahap({ tahap }) {
  const t = useT();
  return (
    <ol className="relative border-l-2 border-gray-200 ml-3 space-y-7">
      {tahap.map((h, idx) => (
        <li key={idx} className="relative pl-7 sm:pl-9">
          <span
            aria-hidden="true"
            className="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-primary text-white text-xs font-heading font-bold flex items-center justify-center border-4 border-white tabular-nums"
          >
            {idx + 1}
          </span>
          <h3 className="font-heading font-semibold text-base text-heading leading-snug">
            {t(h.tahap)}
          </h3>
          <p className="mt-1 text-sm text-body leading-relaxed max-w-5xl">
            <RichText>{t(h.uraian)}</RichText>
          </p>
          {h.luaran && (
            <p className="mt-1.5 text-xs text-primary font-medium">
              {t(LABEL.luaran)}: {t(h.luaran)}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

/**
 * Komponen penilaian beserta bobotnya.
 *
 * Sengaja tanpa grafik: kelima bobot berdekatan (15–25%), sehingga batang
 * proporsional hampir tidak terbedakan dan justru mengaburkan angkanya.
 * Angka yang disejajarkan rata kanan lebih mudah dibandingkan langsung.
 */
export function BobotPenilaian({ komponen }) {
  const t = useT();
  const total = komponen.reduce((jumlah, k) => jumlah + k.bobot, 0);

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {komponen.map((k, idx) => (
        <div key={idx} className="py-5 flex gap-5 sm:gap-8 items-baseline">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-primary tabular-nums shrink-0 w-16 sm:w-20 text-right leading-none">
            {k.bobot}%
          </span>
          <div className="min-w-0 space-y-1">
            <p className="font-heading font-semibold text-sm sm:text-base text-heading leading-snug">
              {t(k.nama)}
            </p>
            {k.aspek && (
              <p className="text-sm text-body leading-relaxed">{t(k.aspek)}</p>
            )}
          </div>
        </div>
      ))}

      <div className="py-4 flex gap-5 sm:gap-8 items-baseline bg-gray-50/70">
        <span className="font-heading font-bold text-lg text-heading tabular-nums shrink-0 w-16 sm:w-20 text-right">
          {total}%
        </span>
        <p className="text-[11px] font-bold tracking-wider uppercase text-gray-500">
          {t(LABEL.nilaiAkhir)}
        </p>
      </div>
    </div>
  );
}

/** Catatan bahwa dokumen resmi tetap menjadi rujukan utama. */
export function CatatanDokumen({ nama }) {
  const t = useT();
  return (
    <div className="border-l-3 border-l-primary border border-gray-200 bg-gray-50/70 p-4 sm:p-5 rounded-xs">
      <p className="text-sm text-body leading-relaxed">
        {t(LABEL.catatanAwal)}{" "}
        <strong className="text-heading">{t(nama)}</strong> {t(LABEL.catatanAkhir)}
      </p>
    </div>
  );
}
