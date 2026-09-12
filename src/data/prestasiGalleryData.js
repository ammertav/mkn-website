/**
 * Data gallery foto prestasi mahasiswa MKn UNISSULA.
 * Foto diambil dari assets lokal di src/assets/images/prestasi/.
 *
 * Untuk menambah foto baru:
 * 1. Taruh file di folder yang sesuai di assets/images/prestasi/
 * 2. Import file-nya di bawah
 * 3. Tambahkan entri baru ke array event yang sesuai (atau buat event baru)
 */

// === Lomba Nasional 2022 ===
import lnJuara3Debat from "../assets/images/prestasi/Lomba Nasional 2022/Juara 3 Debat.jpg";
import lnJuara1 from "../assets/images/prestasi/Lomba Nasional 2022/juara 1.jpeg";
import lnJuara2 from "../assets/images/prestasi/Lomba Nasional 2022/juara 2.jpeg";
import lnJuara3 from "../assets/images/prestasi/Lomba Nasional 2022/juara 3.jpeg";
import lnJuara4 from "../assets/images/prestasi/Lomba Nasional 2022/juara 4.jpeg";
import lnJuara5 from "../assets/images/prestasi/Lomba Nasional 2022/juara 5.jpeg";
import lnPiala2 from "../assets/images/prestasi/Lomba Nasional 2022/piala 2.jpeg";
import lnPiala3 from "../assets/images/prestasi/Lomba Nasional 2022/piala 3.jpeg";
import lnPiala4 from "../assets/images/prestasi/Lomba Nasional 2022/piala 4.jpeg";
import lnPiala5 from "../assets/images/prestasi/Lomba Nasional 2022/piala 5.jpeg";
import lnPiala6 from "../assets/images/prestasi/Lomba Nasional 2022/piala 6.jpeg";
import lnPialaDebat from "../assets/images/prestasi/Lomba Nasional 2022/piala debat.jpeg";
import lnPialaDebat2 from "../assets/images/prestasi/Lomba Nasional 2022/piala debat 2.jpeg";
import lnPialaDebat3 from "../assets/images/prestasi/Lomba Nasional 2022/piala debat 3.jpeg";
import lnPialaDebat4 from "../assets/images/prestasi/Lomba Nasional 2022/piala debat 4.jpeg";

// === Juara 3 Debat 2022 ===
import j3Debat from "../assets/images/prestasi/Juara 3 Debat 2022/Juara 3 Debat 2022.jpg";

/**
 * @typedef {Object} FotoItem
 * @property {string} src - Import path gambar
 * @property {{ id: string, en: string }} caption - Keterangan foto bilingual
 */

/**
 * @typedef {Object} EventPrestasi
 * @property {string} id - ID unik event
 * @property {{ id: string, en: string }} nama - Nama event bilingual
 * @property {{ id: string, en: string }} keterangan - Deskripsi singkat bilingual
 * @property {FotoItem[]} foto - Daftar foto dalam event ini
 */

/** @type {EventPrestasi[]} */
export const prestasiEvents = [
  {
    id: "lomba-nasional-2022",
    nama: {
      id: "Lomba Kenotariatan Nasional 2022",
      en: "National Notarial Competition 2022",
    },
    keterangan: {
      id: "Mahasiswa MKn UNISSULA meraih prestasi gemilang pada ajang Lomba Kenotariatan Nasional 2022.",
      en: "MKn UNISSULA students achieved outstanding results at the 2022 National Notarial Competition.",
    },
    foto: [
      { src: lnJuara1, caption: { id: "Juara 1 Lomba Nasional 2022", en: "1st Place National Competition 2022" } },
      { src: lnJuara2, caption: { id: "Juara 2 Lomba Nasional 2022", en: "2nd Place National Competition 2022" } },
      { src: lnJuara3, caption: { id: "Juara 3 Lomba Nasional 2022", en: "3rd Place National Competition 2022" } },
      { src: lnJuara4, caption: { id: "Juara 4 Lomba Nasional 2022", en: "4th Place National Competition 2022" } },
      { src: lnJuara5, caption: { id: "Juara 5 Lomba Nasional 2022", en: "5th Place National Competition 2022" } },
      { src: lnJuara3Debat, caption: { id: "Juara 3 Debat Lomba Nasional 2022", en: "3rd Place Debate National Competition 2022" } },
      { src: lnPiala2, caption: { id: "Piala Juara 2", en: "2nd Place Trophy" } },
      { src: lnPiala3, caption: { id: "Piala Juara 3", en: "3rd Place Trophy" } },
      { src: lnPiala4, caption: { id: "Piala Juara 4", en: "4th Place Trophy" } },
      { src: lnPiala5, caption: { id: "Piala Juara 5", en: "5th Place Trophy" } },
      { src: lnPiala6, caption: { id: "Piala Lomba Nasional 2022", en: "National Competition Trophy 2022" } },
      { src: lnPialaDebat, caption: { id: "Piala Debat Lomba Nasional 2022", en: "Debate Trophy National Competition 2022" } },
      { src: lnPialaDebat2, caption: { id: "Piala Debat 2", en: "Debate Trophy 2" } },
      { src: lnPialaDebat3, caption: { id: "Piala Debat 3", en: "Debate Trophy 3" } },
      { src: lnPialaDebat4, caption: { id: "Piala Debat 4", en: "Debate Trophy 4" } },
    ],
  },
  {
    id: "juara-3-debat-2022",
    nama: {
      id: "Juara 3 Debat 2022",
      en: "3rd Place Debate Competition 2022",
    },
    keterangan: {
      id: "Dokumentasi penerimaan penghargaan Juara 3 Lomba Debat Kenotariatan 2022.",
      en: "Documentation of the 3rd Place Award at the 2022 Notarial Debate Competition.",
    },
    foto: [
      { src: j3Debat, caption: { id: "Juara 3 Debat Kenotariatan 2022", en: "3rd Place Notarial Debate 2022" } },
    ],
  },
];
