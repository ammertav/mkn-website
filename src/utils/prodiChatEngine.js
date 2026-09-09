import { sorotKurikulum, totalSks } from "../data/akademik/kurikulumData";
import { eventData, formatIndoDate } from "../data/eventData";

/**
 * Mesin jawaban untuk Lembar Tanya — asisten cakupan program studi.
 *
 * Berbeda dari dosenChatEngine yang menjawab sebagai persona satu dosen,
 * mesin ini menjawab sebagai petugas informasi program studi: ringkas, tidak
 * berpura-pura menjadi orang, dan selalu menutup dengan rujukan ke halaman
 * yang memuat keterangan lengkapnya.
 *
 * PRINSIP ISI: mesin ini tidak boleh mengarang. Angka yang disebut diambil
 * dari berkas data (kurikulum, agenda), sisanya berupa keterangan pengarah
 * yang kebenarannya tidak bergantung pada rincian yang bisa berubah. Bila
 * sebuah topik belum punya sumber data, jawablah bahwa keterangannya belum
 * tersedia dan arahkan ke layanan pengaduan — jangan diperkirakan.
 *
 * Versi peraga: jawaban disusun lokal. Untuk versi sungguhan, ganti isi
 * jawabProdi() dengan pemanggilan API RAG dan pertahankan bentuk kembaliannya
 * ({ teks, rujukan }) agar tampilannya tidak perlu diubah.
 */

/** Berkas data hanya menyimpan angka sebagai teks; ambil seperlunya. */
const sorot = Object.fromEntries(
  sorotKurikulum.map((baris) => [baris.label.id, baris.angka])
);

/** Agenda terdekat yang belum lewat, dihitung saat mesin dipanggil. */
function agendaTerdekat() {
  const hariIni = new Date().setHours(0, 0, 0, 0);

  return eventData
    .filter((acara) => new Date(acara.date).getTime() >= hariIni)
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
}

/**
 * Topik dikenali dari kata kunci. Urutannya berarti: yang lebih khusus
 * diletakkan lebih dulu, supaya "biaya kuliah" tidak tertangkap "kuliah".
 */
const TOPIK = [
  {
    id: "pendaftaran",
    kata: [
      "daftar", "pendaftaran", "penerimaan", "masuk", "syarat", "persyaratan",
      "biaya", "spp", "admission", "enroll", "requirement", "tuition", "fee",
    ],
  },
  {
    id: "kurikulum",
    kata: [
      "kurikulum", "mata kuliah", "matkul", "sks", "semester", "tebaran",
      "curriculum", "course", "credit",
    ],
  },
  {
    id: "tesis",
    kata: [
      "tesis", "proposal", "pra proposal", "sidang", "ujian tesis", "bimbingan",
      "pembimbing", "thesis", "defense",
    ],
  },
  {
    id: "kalender",
    kata: [
      "kalender", "kaldik", "jadwal", "tanggal", "libur", "uts", "uas",
      "wisuda", "yudisium", "calendar", "schedule",
    ],
  },
  {
    id: "agenda",
    kata: ["agenda", "acara", "kegiatan", "event", "seminar", "kuliah umum"],
  },
  {
    id: "dosen",
    kata: ["dosen", "pengajar", "guru besar", "profesor", "lecturer", "faculty"],
  },
  {
    id: "jurnal",
    kata: ["jurnal", "publikasi", "sinta", "akta", "sanlar", "konstatering", "tabellius", "journal", "publish"],
  },
  {
    id: "perpustakaan",
    kata: ["perpustakaan", "library", "buku", "repositori", "repository", "katalog", "opac"],
  },
  {
    id: "sistem",
    kata: ["e-learning", "elearning", "sim", "saku", "sistem informasi", "akun", "login", "kata sandi", "password"],
  },
  {
    id: "fasilitas",
    kata: ["fasilitas", "laboratorium", "lab", "ruang kelas", "moot court", "podcast", "facility"],
  },
  {
    id: "akomodasi",
    kata: ["asrama", "akomodasi", "kos", "tempat tinggal", "guest house", "penginapan", "accommodation", "dormitory"],
  },
  {
    id: "alumni",
    kata: ["alumni", "ikanotsula", "tracer", "karir", "lowongan", "career"],
  },
  {
    id: "struktur",
    kata: ["struktur", "kaprodi", "ketua program", "dekan", "pengelola", "organisasi", "pimpinan"],
  },
  {
    id: "profil",
    kata: ["profil", "sejarah", "visi", "misi", "tujuan", "tentang", "akreditasi", "about", "history"],
  },
  {
    id: "kontak",
    kata: ["kontak", "hubungi", "alamat", "telepon", "email", "surel", "aduan", "pengaduan", "keluhan", "contact"],
  },
];

function deteksiTopik(pertanyaan) {
  const q = pertanyaan.toLowerCase();
  for (const topik of TOPIK) {
    if (topik.kata.some((k) => q.includes(k))) return topik.id;
  }
  return null;
}

/** Pertanyaan pembuka yang ditawarkan saat lembar masih kosong. */
export const pokokBahasan = [
  "Bagaimana cara mendaftar?",
  "Berapa total sks kurikulumnya?",
  "Bagaimana alur ujian tesis?",
  "Ada agenda apa dalam waktu dekat?",
  "Jurnal apa saja yang dikelola prodi?",
  "Ke mana saya menyampaikan keluhan?",
];

export const catatanLembar =
  "Keterangan pada lembar ini disusun dari isi situs program studi. " +
  "Untuk hal yang mengikat secara administratif, mintakan konfirmasi resmi ke Tata Usaha.";

/**
 * @param {string} pertanyaan
 * @returns {{ teks: string, rujukan: {label: string, ke: string}[] }}
 */
export function jawabProdi(pertanyaan) {
  switch (deteksiTopik(pertanyaan)) {
    case "pendaftaran":
      return {
        teks:
          "Pendaftaran terbuka bagi lulusan Sarjana Hukum (S.H.) dari perguruan tinggi " +
          "terakreditasi, dengan batas IPK minimal yang dibedakan menurut peringkat " +
          "akreditasi almamater. Berkas yang diminta meliputi ijazah dan transkrip " +
          "terlegalisasi, dokumen kependudukan, surat rekomendasi akademik, serta surat " +
          "keterangan kesehatan dan kepolisian.\n\n" +
          "Rincian syarat, tahapan seleksi, dan komponen biaya tercantum lengkap pada " +
          "halaman penerimaan.",
        rujukan: [
          { label: "Penerimaan Mahasiswa Baru", ke: "/informasi/penerimaan-mahasiswa" },
          { label: "Profil Lulusan", ke: "/akademik/profil-lulusan" },
        ],
      };

    case "kurikulum":
      return {
        teks:
          `Kurikulum 2026 berbobot ${totalSks} sks yang ditempuh dalam ` +
          `${sorot["Semester"]} semester, terdiri atas ${sorot["Mata kuliah wajib"]} mata ` +
          `kuliah wajib dan ${sorot["Mata kuliah pilihan"]} mata kuliah pilihan.\n\n` +
          "Tebaran mata kuliah per semester beserta kode dan bobot sks-nya dapat dilihat " +
          "pada halaman kurikulum. Rencana Pembelajaran Semester (RPS) tiap mata kuliah " +
          "tersedia terpisah.",
        rujukan: [
          { label: "Kurikulum", ke: "/akademik/kurikulum" },
          { label: "Rencana Pembelajaran Semester", ke: "/akademik/pembelajaran/rps" },
          { label: "Capaian Pembelajaran", ke: "/akademik/capaian-pembelajaran" },
        ],
      };

    case "tesis":
      return {
        teks:
          "Penyusunan tesis berjalan bertahap: pra proposal, ujian proposal, lalu ujian " +
          "tesis. Tiap tahap punya panduan, persyaratan berkas, dan penilaiannya sendiri.\n\n" +
          "Artikel ringkasan tesis juga menjadi syarat pendaftaran wisuda, diterbitkan " +
          "melalui Jurnal Konstatering atau TABELLIUS di bawah bimbingan dosen pembimbing.",
        rujukan: [
          { label: "Panduan Ujian Tesis", ke: "/akademik/panduan-ujian/tesis" },
          { label: "Panduan Evaluasi Pembelajaran", ke: "/akademik/pembelajaran/panduan-evaluasi" },
          { label: "E-Jurnal", ke: "/akademik/jurnal" },
        ],
      };

    case "kalender":
      return {
        teks:
          "Kalender akademik memuat seluruh batas waktu satu semester — registrasi, " +
          "perkuliahan, UTS dan UAS, batas pendaftaran ujian tesis, hingga yudisium dan " +
          "wisuda. Tanggal yang ditebalkan pada dokumen aslinya adalah batas waktu yang " +
          "tidak dapat digeser.",
        rujukan: [
          { label: "Kalender Akademik", ke: "/akademik/kalender" },
          { label: "Panduan Ujian UTS & UAS", ke: "/akademik/panduan-ujian/uts-uas" },
        ],
      };

    case "agenda": {
      const acara = agendaTerdekat();

      return {
        teks: acara
          ? `Agenda terdekat: ${acara.title}, ${formatIndoDate(acara.date)}` +
            `${acara.time ? `, pukul ${acara.time}` : ""}.\n\n${acara.description}`
          : "Belum ada agenda mendatang yang tercatat. Agenda baru diumumkan melalui " +
            "halaman Event dan kanal berita program studi.",
        rujukan: [
          acara
            ? { label: acara.title, ke: `/event/${acara.slug}` }
            : { label: "Seluruh Agenda", ke: "/event" },
          { label: "Berita & Pengumuman", ke: "/berita" },
        ],
      };
    }

    case "dosen":
      return {
        teks:
          "Pengajar program studi terdiri atas guru besar dan doktor di bidang hukum " +
          "kenotariatan, keperdataan, dan keagrariaan. Tiap profil memuat bidang keahlian, " +
          "mata kuliah yang diampu, publikasi, serta riwayat pendidikan.\n\n" +
          "Pada halaman profil tiap dosen tersedia pula ruang tanya tersendiri untuk hal " +
          "yang menyangkut dosen bersangkutan.",
        rujukan: [
          { label: "Direktori Dosen", ke: "/staff/dosen" },
          { label: "Tenaga Kependidikan", ke: "/staff/tendik" },
        ],
      };

    case "jurnal":
      return {
        teks:
          "Program studi mengelola empat jurnal ilmiah. Jurnal AKTA terakreditasi SINTA 2 " +
          "dan SANLaR terakreditasi SINTA 3; Jurnal Konstatering dan TABELLIUS: Journal of " +
          "Law diperuntukkan bagi publikasi syarat wisuda.\n\n" +
          "Seluruhnya berazas open access dan dikelola melalui Open Journal Systems.",
        rujukan: [{ label: "E-Jurnal", ke: "/akademik/jurnal" }],
      };

    case "perpustakaan":
      return {
        teks:
          "Mahasiswa memperoleh akses ke layanan perpustakaan digital UNISSULA: katalog " +
          "daring, koleksi elektronik berlangganan, dan repositori karya ilmiah yang " +
          "berguna sebagai rujukan penulisan tesis.\n\n" +
          "Pendaftaran akun pangkalan data dilayani langsung oleh UPT Perpustakaan.",
        rujukan: [
          { label: "E-Library", ke: "/akademik/perpustakaan" },
          { label: "Perpustakaan Program Studi", ke: "/fasilitas/perpustakaan" },
        ],
      };

    case "sistem":
      return {
        teks:
          "Kegiatan akademik berjalan di atas dua sistem daring: SIM UNISSULA sebagai " +
          "sistem terintegrasi tingkat universitas, dan SAKU MKn sebagai sistem akademik " +
          "khas program studi. Akun diberikan program studi pada awal masa studi.\n\n" +
          "Kendala masuk dan pemulihan akun dilayani Koordinator Tata Usaha.",
        rujukan: [{ label: "E-Learning", ke: "/akademik/sistem-informasi" }],
      };

    case "fasilitas":
      return {
        teks:
          "Fasilitas penunjang meliputi ruang kelas, ruang seminar, Laboratorium Akta, " +
          "Laboratorium Manajemen Kantor Notaris, Student Research Center, perpustakaan " +
          "program studi, dan studio podcast kenotariatan.",
        rujukan: [
          { label: "Seluruh Fasilitas", ke: "/fasilitas" },
          { label: "Laboratorium Akta", ke: "/fasilitas/laboratorium-akta" },
        ],
      };

    case "akomodasi":
      return {
        teks:
          "Tersedia dua pilihan akomodasi di lingkungan kampus: Sultan Agung Boarding " +
          "House untuk hunian jangka panjang mahasiswa, dan Sultan Agung Guest House " +
          "sebagai penginapan resmi bagi tamu akademik.",
        rujukan: [{ label: "Akomodasi", ke: "/mahasiswa/akomodasi/asrama" }],
      };

    case "alumni":
      return {
        teks:
          "Alumni berhimpun dalam IKANOTSULA, ikatan alumni yang berdiri sejak 2015 " +
          "dengan koordinator daerah di berbagai provinsi. Program studi juga " +
          "menyelenggarakan tracer study serta menyediakan pusat karir dan informasi " +
          "lowongan.",
        rujukan: [
          { label: "IKANOTSULA", ke: "/alumni/ikanotsula" },
          { label: "Pusat Karir", ke: "/alumni/pusat-karir" },
          { label: "Tracer Study", ke: "/alumni/tracer-study" },
        ],
      };

    case "struktur":
      return {
        teks:
          "Program studi dipimpin Ketua Program Studi yang bertanggung jawab langsung " +
          "kepada Dekan Fakultas Hukum. Sekretaris Program Studi mengoordinasi " +
          "penyelenggaraan akademik harian, dibantu Koordinator Tata Usaha beserta empat " +
          "bidang pelaksana: Akademik, Keuangan, Promosi & Humas, serta Sarana Prasarana.",
        rujukan: [{ label: "Struktur Organisasi", ke: "/profil/struktur-organisasi" }],
      };

    case "profil":
      return {
        teks:
          "Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA menyiapkan " +
          "notaris yang menguasai hukum keperdataan sekaligus memegang teguh etika " +
          "jabatan.\n\n" +
          "Sejarah pendirian, visi dan misi, serta tujuan program studi diuraikan pada " +
          "halaman profil.",
        rujukan: [
          { label: "Sejarah", ke: "/profil/sejarah" },
          { label: "Visi & Misi", ke: "/profil/visi-misi" },
          { label: "Tujuan", ke: "/profil/tujuan" },
        ],
      };

    case "kontak":
      return {
        teks:
          "Keluhan, pertanyaan administratif, dan permintaan bimbingan disampaikan " +
          "melalui halaman layanan pengaduan. Di sana urusan Anda dipilah menurut " +
          "bidangnya, sehingga langsung sampai ke penanggung jawab yang berwenang — " +
          "termasuk jalur bimbingan yang tertuju ke Ketua Program Studi.",
        rujukan: [{ label: "Layanan Pengaduan", ke: "/layanan-pengaduan" }],
      };

    default:
      return {
        teks:
          "Keterangan untuk pertanyaan itu belum tercakup pada lembar ini. Saya hanya " +
          "menjawab dari isi situs program studi, jadi lebih baik tidak saya kira-kira.\n\n" +
          "Coba sebutkan pokoknya secara lebih khusus — misalnya pendaftaran, kurikulum, " +
          "tesis, kalender akademik, atau fasilitas. Bila memang belum ada di situs, " +
          "sampaikan langsung melalui layanan pengaduan.",
        rujukan: [{ label: "Layanan Pengaduan", ke: "/layanan-pengaduan" }],
      };
  }
}
