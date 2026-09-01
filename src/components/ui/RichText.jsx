/**
 * Merender penekanan miring dari teks konten.
 *
 * Teks di file data ditulis dengan tanda bintang untuk bagian yang dicetak miring:
 *
 *   id: "...berbasis *Outcome-Based Education* (OBE), adaptif..."
 *   en: "...based on Outcome-Based Education (OBE), adaptive..."
 *
 * Kenapa penandanya ada di dalam teks, bukan di komponen: keputusan miring
 * bergantung pada bahasa. PUEBI mewajibkan istilah asing dicetak miring dalam
 * bahasa Indonesia, sedangkan dalam bahasa Inggris istilah yang sama tidak asing
 * sehingga ditulis tegak. Dengan menaruh penanda di teks, tiap bahasa mengatur
 * penekanannya sendiri tanpa logika tambahan.
 *
 * Sengaja hanya menangani penekanan miring — bukan parser Markdown. Tidak ada
 * HTML mentah yang dirender, jadi aman dari injeksi.
 *
 * Pemakaian:
 *   <RichText>{t(profilLulusanIntro)}</RichText>
 */
export default function RichText({ children }) {
  if (typeof children !== "string") return children;

  const parts = children.split(/(\*[^*\n]+\*)/g);

  return parts.map((part, i) =>
    part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      part
    )
  );
}
