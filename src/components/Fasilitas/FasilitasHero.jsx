import {
  ruangKelasData,
  ruangSeminarLantai3Data,
  laboratoriumAktaData,
  laboratoriumManajemenKantorData,
  podcastData,
  perpustakaanData,
} from "../../data/fasilitasData";
import HeroSlideshow from "../ui/HeroSlideshow";

/**
 * Satu foto mewakili satu fasilitas, jadi hero-nya mengelilingi semuanya.
 * Urutannya mengikuti urutan tab. Pusat Riset Mahasiswa belum menyerahkan
 * foto, sehingga otomatis tersaring keluar.
 */
const fotoLatar = [
  ruangKelasData,
  ruangSeminarLantai3Data,
  laboratoriumAktaData,
  laboratoriumManajemenKantorData,
  podcastData,
  perpustakaanData,
]
  .map((fasilitas) => fasilitas.galeri?.[0])
  .filter(Boolean);

export default function FasilitasHero() {
  return (
    <HeroSlideshow
      fotoLatar={fotoLatar}
      eyebrow={{ id: "Fasilitas", en: "Facilities" }}
      judul={{
        id: "Ruang untuk Belajar dan Meneliti",
        en: "Spaces for Learning and Research",
      }}
      deskripsi={{
        id: "Tujuh kelompok fasilitas menopang penyelenggaraan pendidikan Magister Kenotariatan, dari ruang kelas, ruang seminar, dan laboratorium hingga pusat riset mahasiswa, ruang podcast, dan perpustakaan hukum.",
        en: "Seven facility clusters support the Master of Notarial Law education, from modern lecture rooms, seminar halls, and laboratories to the student research center, podcast studio, and legal cyber library.",
      }}
    />
  );
}
