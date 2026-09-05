import imgIMANU1 from "../assets/images/imanu-4.jpeg";
import imgIMANU3 from "../assets/images/pohon.jpg";
import imgIMANU4 from "../assets/images/imanu-kegiatan.jpeg";
import imgIMANU5 from "../assets/images/lomba-imanu.jpg";


export const studentOrganizationsData = [
  {
    id: 1,
    slug: "imanu",
    title: "Ikatan Mahasiswa Notariat UNISSULA",
    shortName: "IMANU",
    category: "ORGANISASI MAHASISWA",
    periode: "2026/2027",
    description:
      "IMANU UNISSULA adalah lembaga kemahasiswaan formal intra kampus di tingkat Program " +
      "Studi Magister Kenotariatan. Organisasi ini bersifat akademis, kekeluargaan, dan " +
      "independen tanpa berafiliasi pada kekuatan politik mana pun.",
    image: imgIMANU4,
    imageCaption: "Kampus Universitas Islam Sultan Agung, Semarang",

    meta: [
      { label: "Nama singkat", value: "IMANU UNISSULA" },
      { label: "Didirikan", value: "18 November 2018, Kota Semarang" },
      { label: "Kedudukan", value: "Program Studi Magister Kenotariatan" },
      { label: "Periode kepengurusan", value: "2026 / 2027" },
    ],

    /** Fungsi organisasi sebagaimana dirumuskan pada dokumen sumber. */
    fungsi: [
      "Wadah komunikasi antaranggota dan dengan program studi",
      "Penjaring aspirasi mahasiswa Magister Kenotariatan",
      "Sarana pengembangan keilmuan dan kompetensi mahasiswa",
    ],

    /** Landasan nilai organisasi. */
    landasan: ["Nilai-nilai keislaman", "Pancasila", "Tri Dharma Perguruan Tinggi"],

    tujuan:
      "Berlandaskan nilai-nilai tersebut, IMANU UNISSULA didedikasikan untuk menjembatani " +
      "sinergi antara civitas academica, alumni, masyarakat, serta organisasi profesi hukum. " +
      "Tujuannya adalah membentuk calon praktisi hukum dan Notaris/PPAT yang berintegritas, " +
      "beretika luhur, profesional, dan bertakwa.",

    narrative: [
      "Sejarah berdirinya IMANU UNISSULA berawal dari kesadaran mendalam bahwa mahasiswa " +
        "Program Studi Magister Kenotariatan merupakan bagian integral dari civitas academica. " +
        "Mahasiswa dituntut untuk mengemban amanah keilmuan, kepemimpinan, serta etika profesi " +
        "luhur yang senantiasa berlandaskan pada nilai-nilai ajaran Islam. Berangkat dari " +
        "pemikiran filosofis dan kebutuhan taktis tersebut, IMANU UNISSULA secara resmi " +
        "didirikan di Kota Semarang pada tanggal 18 November 2018.",
      "Pembentukan organisasi ini tidak terlepas dari urgensi untuk menyediakan sebuah wadah " +
        "formal yang mampu mengakomodasi aspirasi mahasiswa sekaligus mempererat tali " +
        "silaturahmi. Lebih jauh, para pendiri IMANU UNISSULA memandang pentingnya sebuah " +
        "institusi kemahasiswaan yang secara terstruktur berupaya mengembangkan integritas dan " +
        "kapasitas keilmuan di bidang kenotariatan.",
      "Kehadiran organisasi ini dirancang sebagai instrumen strategis guna mempersiapkan " +
        "calon-calon praktisi hukum, yang tidak hanya memiliki kapabilitas serta keahlian hukum " +
        "tinggi, tetapi juga menjunjung tinggi nilai ketakwaan kepada Allah SWT. Melalui pijakan " +
        "historis yang kuat ini, IMANU UNISSULA terus bergerak sebagai jembatan komunikasi antara " +
        "dunia akademik dan realitas profesi hukum.",
    ],

    /**
     * Program kerja satu periode kepengurusan, hasil Rapat Kerja (RAKER).
     * Dokumen sumber menyusunnya per divisi tanpa penanggalan, sehingga
     * ditampilkan sebagai daftar per divisi — bukan tabel berjadwal.
     */
    programKerja: [
      {
        divisi: "Hubungan Masyarakat & Jejaring Organisasi",
        items: [
          "Melaksanakan kunjungan dan menjalin relasi kelembagaan dengan Pengurus Wilayah/Daerah INI dan IPPAT.",
          "Membangun komunikasi strategis dengan instansi pemerintahan terkait, seperti ATR/BPN dan Kementerian Hukum dan HAM.",
          "Membentuk serta mengelola forum jejaring komunikasi yang solid dengan alumni Magister Kenotariatan.",
        ],
      },
      {
        divisi: "Pengembangan Sumber Daya Manusia (PSDM) & Minat Bakat",
        items: [
          "Menyelenggarakan kegiatan kaderisasi dan forum keakraban bagi mahasiswa baru untuk membangun ukhuwah.",
          "Memfasilitasi penyelenggaraan pelatihan kemahiran hukum praktis, seperti kegiatan bedah akta bagi anggota.",
          "Menyelenggarakan kegiatan olahraga dan seni secara berkala guna mewadahi minat dan bakat mahasiswa.",
        ],
      },
      {
        divisi: "Pengabdian Masyarakat & Keislaman",
        items: [
          "Melaksanakan program bakti sosial dan kegiatan kemasyarakatan sebagai wujud implementasi Tri Dharma Perguruan Tinggi.",
          "Menyediakan layanan konsultasi hukum gratis bagi masyarakat yang membutuhkan pendampingan atau literasi hukum.",
          "Menyelenggarakan forum diskusi dan kajian keislaman secara rutin guna memperkuat nilai-nilai religius para calon Notaris.",
        ],
      },
    ],

    /** Susunan pengurus periode 2026-2027. */
    pengurusInti: [
      { role: "Ketua", name: "Hasnan Habib Dwicahya", nim: "21302500052" },
      { role: "Wakil Ketua", name: "Raka Faathir Wicaksana", nim: "21302500104" },
      { role: "Sekretaris", name: "Arika Dian Astuti", nim: "21302500185" },
      { role: "Wakil Sekretaris", name: "Evelyn Rumondang Angelica", nim: "21302500283" },
      { role: "Bendahara", name: "Mila Oktavia Pratiwi", nim: "21302500278" },
      { role: "Wakil Bendahara", name: "Rizki Diah Yustikawati", nim: "21302500237" },
    ],

    divisi: [
      {
        nama: "Divisi Hubungan Masyarakat",
        koordinator: { name: "Lilianti", nim: "21302500068" },
        anggota: [
          { name: "Ma'iya Zulfiana Aisyah", nim: "21302500071" },
          { name: "Muhammad Asyrof Khabibi", nim: "21302500079" },
          { name: "Nurjanna Frasasti", nim: "21302500098" },
          { name: "Indra Bayu Lekso", nim: "21302500211" },
          { name: "Najid Farhan Abdillah", nim: "21302500257" },
          { name: "Dodi Anggalena Triasukma", nim: "21302400031" },
        ],
      },
      {
        nama: "Divisi Pengembangan Sumber Daya Manusia (PSDM)",
        koordinator: { name: "Agus Jumianto", nim: "" },
        anggota: [
          { name: "Ari Puguh Sudi Hartono", nim: "21302500186" },
          { name: "Priyambodo Adi Saputro", nim: "21302500273" },
          { name: "Nur Hidayat Aji Utomo", nim: "21302500266" },
        ],
      },
      {
        nama: "Divisi Pengabdian Masyarakat & Keislaman",
        koordinator: { name: "Mai Ranti", nim: "21302500070" },
        anggota: [
          { name: "Anis Wahdi", nim: "21302500017" },
          { name: "Frans Oprandi Jaok", nim: "21302500049" },
          { name: "Afrian Maulana Syaputra", nim: "21302500004" },
          { name: "Arsyad Fakhri Zainuddin", nim: "21302500022" },
          { name: "Iis Fatimah", nim: "21302500054" },
          { name: "Nur Inzani", nim: "21302500096" },
          { name: "Canda Dewi Oksa Yuristiyanti", nim: "21302500324" },
        ],
      },
    ],

    gallery: [
      { id: 1, title: " ", image: imgIMANU1 },
      { id: 2, title: " ", image: imgIMANU5 },
      { id: 3, title: " ", image: imgIMANU3 },
    ],

    summary: [
      { number: "3", label: "Divisi kerja" },
      { number: "27", label: "Pengurus periode 2026/2027" },
      { number: "9", label: "Program kerja satu periode" },
    ],
  },
];
