import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Img from "../ui/Img";

import Fatiroh from "../../assets/images/testi/fatiroh.png";
import Ismail from "../../assets/images/testi/ismail-fahmi.png";
import Nurizka from "../../assets/images/testi/nurizka-fida.png";
import Wahyu from "../../assets/images/testi/wahyu-noto.png";
import Siget from "../../assets/images/testi/ipda-siget.png";
import Laeli from "../../assets/images/testi/laeli-nurchamidah.png";
import hetiyasari from "../../assets/images/testi/hetiyasari.png";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/**
 * Jumlah kartu yang tampil sekaligus.
 *
 * Daftar di bawah boleh diisi sebanyak apa pun; tombol navigasi muncul sendiri
 * begitu jumlahnya lebih dari satu halaman. Sisa kartu pada halaman terakhir
 * tetap rata kiri karena grid-nya berkolom tetap.
 */
const PER_HALAMAN = 5;

/**
 * Isi kartu testimoni: nama, jabatan, tahun alumni, dan pesan.
 *
 * Saat tertutup, nama dan jabatan dipotong satu baris sedangkan pesannya
 * delapan baris, supaya tinggi kartu antar-alumni seragam. Satu tombol
 * "Baca selengkapnya" membuka ketiganya sekaligus, dan tombol itu hanya
 * muncul bila memang ada yang terpotong — jadi kartu dengan isi pendek tetap
 * bersih. Pengukuran dilakukan selagi kartu tertutup, karena setelah dibuka
 * tinggi isi dan tinggi kotaknya otomatis sama.
 */
function IsiKartu({ item }) {
  const [terbuka, setTerbuka] = useState(false);
  const [terpotong, setTerpotong] = useState(false);
  const namaRef = useRef(null);
  const jabatanRef = useRef(null);
  const pesanRef = useRef(null);

  useLayoutEffect(() => {
    if (terbuka) return undefined;

    const cek = () => {
      const adaYangTerpotong = [namaRef, jabatanRef, pesanRef].some(
        ({ current }) => current && current.scrollHeight > current.clientHeight + 1
      );
      setTerpotong(adaYangTerpotong);
    };

    cek();
    window.addEventListener("resize", cek);
    return () => window.removeEventListener("resize", cek);
  }, [item, terbuka]);

  return (
    <div>
      {/* Nama */}
      <motion.div variants={itemVariants}>
        <h3
          ref={namaRef}
          className={`font-heading font-normal text-lg text-heading leading-snug group-hover:text-primary transition-colors ${
            terbuka ? "" : "line-clamp-1"
          }`}
        >
          {item.name}
        </h3>
      </motion.div>

      {/* Jabatan / pekerjaan */}
      <motion.p
        ref={jabatanRef}
        variants={itemVariants}
        className={`mt-1 text-sm text-body leading-snug ${
          terbuka ? "" : "line-clamp-1"
        }`}
      >
        {item.occupation}
      </motion.p>

      {/* Tahun alumni */}
      <motion.div variants={itemVariants}>
        <span className="mt-2 inline-block text-[11px] font-semibold tracking-wider text-primary uppercase">
          {item.role}
        </span>
      </motion.div>

      {/* Pesan testimoni */}
      <motion.div variants={itemVariants} className="mt-3">
        <p
          ref={pesanRef}
          className={`text-sm text-body text-justify leading-relaxed italic ${
            terbuka ? "" : "line-clamp-8"
          }`}
        >
          &ldquo;{item.description}&rdquo;
        </p>

        {terpotong && (
          <button
            type="button"
            onClick={() => setTerbuka((kini) => !kini)}
            className="mt-1.5 text-xs font-semibold text-primary hover:text-[#680000] transition-colors cursor-pointer"
          >
            {terbuka ? "Tutup" : "Baca selengkapnya"}
          </button>
        )}
      </motion.div>
    </div>
  );
}

const testimonialData = [
  {
    id: 1,
    name: "Fatiroh, S.H., M.Hum., M.Kn.",
    description:
      "M.Kn. Unissula bukan sekadar mengajarkan ketelitian merangkai akta, kepatutan hukum, melainkan menanamkan pertanggungjawaban moral dan keteguhan Nurani profesi. Di sini, saya ditempa bahwa memahami kepastian hukum hanya bermakna jika dilandasi integritas dan kehati-hatian demi melindungi hak para pihak secara adil. Bekal berharga yang menjaga integritas dan keluhuran martabat profesi saya hari ini sebagai seorang Notaris dan PPAT",
    image: Fatiroh,
    occupation: "Notaris-PPAT Kabupaten Pekalongan",
    role: "Alumni Tahun 2015",
  },
  {
    id: 2,
    name: "Ismail Fahmi, S.H., M.H., M.Kn.",
    description:
      "Menempuh studi di Magister Kenotariatan Unissula memperluas perspektif saya sebagai Jaksa, khususnya dalam bidang hukum keperdataan. Pemahaman yang diperoleh sangat mendukung peran Jaksa Pengacara Negara dalam memberikan legal opinion, mitigasi risiko perdata, hingga asset recovery untuk melindungi kepentingan dan keuangan negara. Bagi para penegak hukum yang ingin memperdalam keilmuan di bidang keperdataan, Magister Kenotariatan Unissula merupakan pilihan yang tepat untuk meningkatkan kompetensi dan profesionalisme.",
    image: Ismail,
    occupation:"Aspisdus Kejati Kepulauan Riau",
    role: "Alumni Tahun 2026",
  },
  {
    id: 3,
    name: "Nurizka Firda, S.H., M.Kn., CFP, CWM",
    description:
      "Kuliah di Magister Kenotariatan itu emang butuh perjuangan ekstra, bukan cuma soal paham teori, tapi juga ngelatih ketelitian dan menjaga integritas. Kelak ketika setiap akta yang kalian buat punya dampak besar buat hidup orang lain. Tetap pegang teguh kejujuran dan etika, serta jangan pernah lelah buat terus update ilmu karena hukum bakal selalu berkembang.",
    image: Nurizka,
    occupation: "Director of Agency di PT Chubb Life Insurance",
    role: "Alumni Tahun 2024",
  },
  {
    id: 4,
    name: "Wahyu Noto Wibowo, S.H., M.Kn.",
    description:
      "Bagi para bankir, mitigasi risiko pembiayaan bertumpu pada kesempurnaan perikatan dan jaminan. Studi pada Magister Kenotariatan UNISSULA mempertajam naluri saya membedah celah klausula perjanjian kredit serta validitas agunan secara presisi. Keilmuan ini mentransformasi analisis legal perbankan menjadi instrumen proteksi portofolio aset yang jauh lebih kokoh dan prudent.",
    image: Wahyu,
    occupation: "Small Bisnis Manager BRI Region 10 Semarang",
    role: "Alumni Tahun 2026",
  },
  {
    id: 5,
    name: "IPDA SIGET P., S.H., M.H., M.Kn., M.A.P.",
    description:
      "Kuliah di Magister Kenotariatan mempertajam analisis saya sebagai anggota Polri,  guna memahami secara mendalam tentang aspek perdata, korporasi, dan keabsahan dokumen. Pengetahuan ini sangat krusial dalam membongkar modus kejahatan bisnis serta tindak pidana korupsi hingga asset recovery guna melindungi kepentingan Masyarakat dan keuangan negara. Bekal keilmuan ini membuat penegakan hukum jauh lebih presisi, objektif, dan profesional. Pilihan kuliah di Magister Kenotarian UNISSULA adalah pilihan terbaik bagi rekan-rekan dari Kepolisian.",
    image: Siget,
    occupation: "Kanit Polres Temanggung",
    role: "Alumni Tahun 2024",
  },
  {
    id: 6,
    name: "Dr. Hetiyasari, S.H., M.Kn.",
    description:
      "Magister Kenotariatan UNISSULA telah membentuk saya secara ilmu dan karakter. Dari mahasiswa perantau hingga kini mengabdi sebagai dosen, semua berawal di sini.   Semoga prodi terus melahirkan lulusan yang berilmu, berintegritas, dan bermanfaat bagi bangsa. ",
    image: hetiyasari,
    occupation: "Dosen UNWAHAS",
    role: "Alumni Tahun 2024",
  },
  {
    id: 7,
    name: "Hj. Laeli Nurchamidah, S.H., M.Kn.",
    description:
      "Salam untuk Generasi Khaira Ummah Para Alumni M.Kn UNISSULA di seluruh Indonesia yang saya banggakan, Kejar dan Tekad kan Mimpi jika Kalian sebagian besar ingin Menjadi Notaris - PPAT ikuti Step by Step aturan dan alurnya, Kalian Harus Bangga dengan Almamater mu, Kita bangun Alumni M.Kn UNISSULA Bermartabat, Kuat dan Berdayasaing Unggul.",
    image: Laeli,
    occupation: "Sekertaris Pengda INI Kota Tegal",
    role: "Alumni Tahun 2015",
  },
];

export default function Testimoni() {
  const [halaman, setHalaman] = useState(0);

  const jumlahHalaman = Math.ceil(testimonialData.length / PER_HALAMAN);
  const mulai = halaman * PER_HALAMAN;
  const tampil = testimonialData.slice(mulai, mulai + PER_HALAMAN);
  const adaNavigasi = jumlahHalaman > 1;

  // Berputar: dari halaman terakhir maju kembali ke halaman pertama.
  const pindah = (arah) =>
    setHalaman((kini) => (kini + arah + jumlahHalaman) % jumlahHalaman);

  return (
    <section className="w-full bg-white font-body py-16 sm:py-24 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
              Kata Mereka
            </h2>
          </motion.div>
        </motion.div>

        {/*
          Testimonials.

          `key={halaman}` sengaja dipasang agar kartu dipasang ulang saat
          halaman berganti, sehingga animasi masuk dan peralihan grayscale
          ikut berjalan lagi.
        */}
        <motion.div
          key={halaman}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-start"
        >
          {tampil.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="flex flex-col group h-full"
            >
              {/* Image */}
              <div className="relative w-full aspect-[9/12] md:aspect-[9/16] bg-gray-100 overflow-hidden rounded-xs">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                    filter: "grayscale(100%) blur(3px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "grayscale(0%) blur(0px)",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  viewport={viewportSettings}
                  className="w-full h-full"
                >
                  <Img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </motion.div>
              </div>

              {/* Card Content */}
              <motion.div
                variants={containerVariants}
                className="pt-5 flex flex-col flex-grow justify-between"
              >
                <IsiKartu item={item} />

              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Navigasi halaman — hanya muncul bila kartunya lebih dari satu halaman */}
        {adaNavigasi && (
          <div className="mt-12 sm:mt-14 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => pindah(-1)}
              aria-label="Testimoni sebelumnya"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 text-heading hover:border-primary hover:bg-primary hover:text-white rounded-xs transition-colors cursor-pointer active:scale-95"
            >
              <FiChevronLeft className="text-lg" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: jumlahHalaman }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setHalaman(i)}
                  aria-label={`Halaman testimoni ${i + 1} dari ${jumlahHalaman}`}
                  aria-current={i === halaman ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === halaman
                      ? "w-8 bg-primary"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => pindah(1)}
              aria-label="Testimoni berikutnya"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 text-heading hover:border-primary hover:bg-primary hover:text-white rounded-xs transition-colors cursor-pointer active:scale-95"
            >
              <FiChevronRight className="text-lg" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
