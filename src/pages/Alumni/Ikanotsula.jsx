import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Img from "../../components/ui/Img";
import imgIkanotsula from "../../assets/images/ikanotsula-1.jpeg";
import Keg1 from "../../assets/images/ikanot/keg1.jpeg";
import Keg2 from "../../assets/images/ikanot/keg2.jpeg";
import Keg3 from "../../assets/images/ikanot/keg3.jpeg";
import Keg4 from "../../assets/images/ikanot/keg4.jpeg";
import Keg5 from "../../assets/images/ikanot/keg5.jpg";
import Keg6 from "../../assets/images/ikanot/keg6.jpg";
import Keg7 from "../../assets/images/ikanot/keg7.jpg";
import Keg8 from "../../assets/images/ikanot/keg8.jpg";
import Keg9 from "../../assets/images/ikanot/keg9.jpg";
import Keg10 from "../../assets/images/ikanot/keg10.jpg"
import Keg11 from "../../assets/images/ikanot/keg11.jpg"
import Keg12 from "../../assets/images/ikanot/keg12.jpg"
import Keg13 from "../../assets/images/ikanot/keg13.jpg"
import Logo from "../../assets/images/ikanot/logo.jpg"

// Data resmi IKANOTSULA & Lowongan Pekerjaan
const ikanotsulaData = {
  title: "IKANOTSULA (Ikatan Alumni Magister Kenotariatan UNISSULA)",
  category: "ORGANISASI ALUMNI",
  image: Logo,
  meta: [
    { label: "Tanggal Berdiri", value: "21 November 2015" },
    { label: "SK Pengesahan", value: "1056/A.1/SA-H/V/2024" },
    { label: "Periode Kepengurusan", value: "2024 – 2028" },
    { label: "Ketua Umum", value: "Fatiroh, S.H., M.Hum., M.Kn." },
  ],
  narrative: [
    "Ikatan Alumni Magister Kenotariatan UNISSULA (IKANOTSULA) dibentuk pertama kali pada tanggal 21 November 2015 oleh para alumni angkatan pertama dan ketiga. Awalnya bernama IKAMANOTSULA, kemudian disederhanakan menjadi IKANOTSULA agar lebih mudah dikenal dan diingat.",
    "IKANOTSULA hadir sebagai wadah pemersatu resmi untuk menjembatani para fresh graduate dalam masa transisi memasuki dunia kerja, mempersiapkan alumni menjadi Anggota Luar Biasa (ALB) Ikatan Notaris Indonesia (INI), serta menjadi media pertukaran pengalaman praktik kenotariatan dan pertanahan antar-generasi.",
    "Sebagai bagian integral dari almamater Universitas Islam Sultan Agung, IKANOTSULA berkomitmen mewujudkan generasi Khaira Ummah dengan menjunjung tinggi nilai-nilai keunggulan, kepeloporan, perjuangan, dan pengabdian bagi kemajuan ilmu pengetahuan dan masyarakat.",
  ],
  quote: {
    text: "Menjadi pelopor kemajuan peradaban dan berkontribusi nyata pada peningkatan daya saing bangsa di bidang ilmu hukum kenotariatan dan pertanahan.",
    author: "Profil IKANOTSULA UNISSULA",
  },
  programKerja: [
    {
      kegiatan: "Bimtek & Pelatihan Ujian PPAT",
      waktu: "Periodik / Tahunan",
      bidang: "Pendidikan & Pelatihan",
    },
    {
      kegiatan: "Pelatihan Ujian Kode Etik Notaris (UKEN)",
      waktu: "Periodik",
      bidang: "Pendidikan & Pelatihan",
    },
    {
      kegiatan: "Program Bakti Sosial & Kepedulian Masyarakat",
      waktu: "Insidental / Tahunan",
      bidang: "Sosial & Pengabdian",
    },
    {
      kegiatan: "Konsolidasi & Silaturahmi Alumni Nasional",
      waktu: "Berkala",
      bidang: "Koordinator Daerah",
    },
  ],
  summary: [
    { number: "2015", label: "Tahun Berdiri Organisasi" },
    { number: "50+", label: "Koordinator Daerah Se-Indonesia" },
    { number: "2024–2028", label: "Masa Bakti Kepengurusan" },
  ],
  gallery: [
    { id: 1, image: Keg1 },
    // { id: 2, image: Keg2 },
    { id: 3, image: Keg3 },
    // { id: 4, image: Keg4 },
    // { id: 5, image: Keg5 },
    { id: 6, image: Keg6 },
    { id: 7, image: Keg7 },
    // { id: 8, image: Keg8 },
    { id: 9, image: Keg9 },
    { id: 13, image: Keg13 },
    { id: 10, image: Keg10 },
    { id: 11, image: Keg11 },
    { id: 12, image: Keg12 },
  ],
  strukturOrganisasi: {
    dasar:
      "Keputusan Dekan Fakultas Hukum UNISSULA Nomor 1056/A.1/SA-H/V/2024 tanggal 24 Mei 2024 tentang Susunan Pengurus IKANOTSULA Periode 2024–2028.",
    dewan: [
      {
        jabatan: "Pelindung",
        anggota: [{ nama: "Prof. Dr. H. Gunarto, S.H., M.H." }],
      },
      {
        jabatan: "Pembina",
        anggota: [{ nama: "Dr. H. Jawade Hafidz, S.H., M.H." }],
      },
      {
        jabatan: "Dewan Penasehat",
        anggota: [
          { nama: "Dr. Nanang Sri Darmadi, S.H., M.H." },
          { nama: "Dr. Achmad Arifulloh, S.H., M.H." },
        ],
      },
      {
        jabatan: "Ketua Dewan Pertimbangan",
        anggota: [{ nama: "Dr. Agus Wijayanto, S.H., M.Kn." }],
      },
      {
        jabatan: "Anggota Dewan Pertimbangan",
        anggota: [
          { nama: "Dr. Dwi Pratiwi Markus, S.H., M.Kn." },
          { nama: "Dr. Hetiyasari, S.H., M.Kn." },
        ],
      },
    ],
    pengurusHarian: [
      { jabatan: "Ketua Umum", nama: "Fatiroh, S.H., M.Hum., M.Kn." },
      { jabatan: "Wakil Ketua Umum", nama: "Frans Ferbianto, S.H., M.Kn." },
      { jabatan: "Sekretaris Jenderal", nama: "Eka Hendra Muspiyanto, S.H., M.Kn." },
      { jabatan: "Wakil Sekretaris Jenderal", nama: "Widyawati, S.H., M.Kn." },
      { jabatan: "Bendahara", nama: "Rustiana Apri Setiaji, S.H., M.Kn." },
      { jabatan: "Wakil Bendahara", nama: "Dr. Rahardian Ayu Saputri, S.H., M.Kn." },
    ],
    bidang: [
      {
        nama: "Bidang Pendidikan & Pelatihan",
        anggota: [
          "Laeli Nurchamidah, S.H., M.Kn.",
          "Arini Sutanti, S.H., M.Kn.",
          "Aldya Khaira Almeyda, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Hubungan Masyarakat dan Publikasi",
        anggota: [
          "Moch. Nur Ali Zamroni, S.H., M.Kn.",
          "Nur Sofiatun, S.H., M.Kn.",
          "Sri Setianingsih, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Sosial",
        anggota: [
          "Sri Harsi Kusumawardani, S.H., M.Kn.",
          "Afifah, S.H., M.Kn.",
          "Ratna Kartika Dewi, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Kerohanian",
        anggota: [
          "Mohammad Tohir, S.H., M.Kn.",
          "Burhanudin, S.H., M.Kn.",
          "Sobir Mustaqim Wibowo, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Koordinator Alumni",
        anggota: [
          "Edy Sutrisno, S.H., M.Kn.",
          "Indiana Fawaiza, S.H., M.Kn.",
          "Yuliarti, S.H., M.Kn.",
          "Laelatul Maulida, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Seni, Budaya dan Olah Raga",
        anggota: [
          "Sri Indah Lestari, S.H., M.Kn.",
          "Dr. Rais Firdaus Handoko, S.H., M.Kn.",
          "Jabidin, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Pengabdian Masyarakat",
        anggota: [
          "Nurchasanah, S.H., M.Kn.",
          "Mauliwati Alifah, S.H., M.Kn.",
          "Fitriza Wirasari, S.H., M.Kn.",
        ],
      },
      {
        nama: "Bidang Pengayoman Anggota",
        anggota: [
          "Dedy Haryanto, S.H., M.Kn.",
          "Muhammad Muthohar, S.H., M.Kn.",
          "Sarijo, S.H., M.Kn.",
        ],
      },
    ],
    koordinatorDaerah: [
      {
        provinsi: "Jawa Tengah",
        daerah: [
          { wilayah: "Kab. Pekalongan", nama: "Ikayanti, S.H., M.Kn." },
          {
            wilayah: "Kota Pekalongan",
            nama: "Mohamad Taqi Al Jawad Alkaf, S.H., M.Kn.",
          },
          { wilayah: "Kab. Batang", nama: "Nur Aisyah, S.H., M.Kn." },
          { wilayah: "Kab. Pemalang", nama: "Dyah Ragil, S.H., M.Kn." },
          { wilayah: "Kab. Tegal", nama: "Rohmayanti, S.H., M.Kn." },
          { wilayah: "Kab. Brebes", nama: "Endah Suryaningsih, S.H., M.Kn." },
          { wilayah: "Kab. Cilacap", nama: "Rena Hayuningtyas, S.H., M.Kn." },
          { wilayah: "Kab. Purbalingga", nama: "Eko Winarto, S.H., M.Kn." },
          { wilayah: "Kab. Banjarnegara", nama: "Paristuta Juwono, S.H., M.Kn." },
          { wilayah: "Kab. Banyumas", nama: "Wiwit Ayuningtyas, S.H., M.Kn." },
          { wilayah: "Kab. Purworejo", nama: "Rahmat Solehan, S.H., M.Kn." },
          { wilayah: "Kab. Magelang", nama: "Intan Asti Rien Indrayani, S.H., M.Kn." },
          { wilayah: "Kota Magelang", nama: "Ahmad Ridwan, S.H., M.Kn." },
          { wilayah: "Kota Salatiga", nama: "Mauliawati Alifah, S.H., M.Kn." },
          { wilayah: "Kab. Boyolali", nama: "Istanti, S.H., M.Kn." },
          { wilayah: "Kab. Grobogan", nama: "Nurmalia Ika Widiasari, S.H., M.Kn." },
          { wilayah: "Kab. Semarang", nama: "Ratna Kartika Dewi, S.H., M.Kn." },
          { wilayah: "Kota Semarang", nama: "Rujiati, S.H., M.Kn." },
          { wilayah: "Kab. Temanggung", nama: "Arini Sutanti, S.H., M.Kn." },
          {
            wilayah: "Kab. Blora",
            nama: "Bryant Manggala Retnanindyani, S.H., M.Kn.",
          },
          { wilayah: "Kab. Demak", nama: "Rubiyati Nurvitaning Tyas, S.H., M.Kn." },
          { wilayah: "Kab. Pati", nama: "Muhammad Rofiq Kana, S.H., M.Kn." },
          { wilayah: "Kab. Kudus", nama: "Muhammad Iqbal Al Hakiem, S.H., M.Kn." },
          {
            wilayah: "Kab. Rembang",
            nama: "Moh. Muftakhul Nizam Zamroni, S.H., M.Kn.",
          },
          { wilayah: "Kab. Klaten", nama: "Ibnu Safa, S.H., M.Kn." },
          { wilayah: "Kab. Kendal", nama: "Titi Resmiyati, S.H., M.Kn." },
          { wilayah: "Kota Tegal", nama: "Jabidin Maulana, S.H., M.Kn." },
        ],
      },
      {
        provinsi: "Jawa Timur",
        daerah: [
          { wilayah: "Kab. Tuban", nama: "Sawin Dwi Hapsari, S.H., M.Kn." },
          { wilayah: "Kab. Pacitan", nama: "Kristiyani, S.H., M.Kn." },
          { wilayah: "Kab. Magetan", nama: "Dhian Ekasari, S.H., M.Kn." },
        ],
      },
      {
        provinsi: "Banten",
        daerah: [
          { wilayah: "Kab. Tangerang", nama: "Alia Wedyaningrum, S.H., M.Kn." },
        ],
      },
      {
        provinsi: "Jambi",
        daerah: [{ wilayah: "Kota Jambi", nama: "Maya, S.H., M.Kn." }],
      },
      {
        provinsi: "Aceh",
        daerah: [{ wilayah: "Kab. Bireuen", nama: "Dessy Andiyaninsih, S.H., M.Kn." }],
      },
      {
        provinsi: "Bengkulu",
        daerah: [{ wilayah: "Kab. Bengkulu Utara", nama: "Didit Wardio, S.H., M.Kn." }],
      },
      {
        provinsi: "Bangka Belitung",
        daerah: [
          { wilayah: "Kab. Bangka Selatan", nama: "Andi Wijaya, S.H., M.Kn." },
          { wilayah: "Kab. Bangka", nama: "Ervandi Saputra, S.H., M.Kn." },
        ],
      },
      {
        provinsi: "Maluku",
        daerah: [{ wilayah: "Kota Maluku", nama: "Yasmin Seif, S.H., M.Kn." }],
      },
      {
        provinsi: "Kalimantan Tengah",
        daerah: [
          { wilayah: "Pangkalanbun", nama: "Yongky Irawan, S.H., M.Kn." },
          { wilayah: "Kota Palangkaraya", nama: "Wahyu Hanggono, S.H., M.Kn." },
        ],
      },
      {
        provinsi: "Kalimantan Barat",
        daerah: [{ wilayah: "Kab. Sambas", nama: "Asbi, S.H., M.Kn." }],
      },
      {
        provinsi: "Kalimantan Selatan",
        daerah: [{ wilayah: "Kota Banjarmasin", nama: "Shofiyah, S.H., M.Kn." }],
      },
      {
        provinsi: "Kalimantan Utara",
        daerah: [{ wilayah: "Kab. Bulungan", nama: "Junaidi, S.H., M.Kn." }],
      },
      {
        provinsi: "Sulawesi Tenggara",
        daerah: [
          { wilayah: "Kota Baubau", nama: "La Ode Arsanudin, S.H., M.Kn." },
          { wilayah: "Kab. Muna", nama: "Yanti, S.H., M.Kn." },
          { wilayah: "Kab. Konawe", nama: "Haris Ramadan, S.H., M.Kn." },
          { wilayah: "Kab. Buton", nama: "Muhammad Ridho, S.H., M.Kn." },
          { wilayah: "Kab. Kolaka Timur", nama: "Andi Rosita, S.H., M.Kn." },
          { wilayah: "Kab. Banggai", nama: "Arty Retno Sari, S.H., M.Kn." },
          { wilayah: "Kab. Konawe Selatan", nama: "Moh. Rizal Zulkifli, S.H., M.Kn." },
        ],
      },
      {
        provinsi: "Papua",
        daerah: [{ wilayah: "Kab. Sorong", nama: "Rini Andayani, S.H., M.Kn." }],
      },
    ],
  },
  pengurusInti: [
    {
      id: "1",
      name: "Fatiroh, S.H., M.Hum., M.Kn.",
      role: "Ketua Umum",
      image: "/images/alumni/fatiroh.jpg",
    },
    {
      id: "2",
      name: "Frans Ferbianto, S.H., M.Kn.",
      role: "Wakil Ketua Umum",
      image: "/images/alumni/frans.jpg",
    },
    {
      id: "3",
      name: "Eka Hendra Muspiyanto, S.H., M.Kn.",
      role: "Sekretaris Jenderal",
      image: "/images/alumni/eka-hendra.jpg",
    },
    {
      id: "4",
      name: "Rustiana Apri Setiaji, S.H., M.Kn.",
      role: "Bendahara",
      image: "/images/alumni/rustiana.jpg",
    },
  ],
};

export default function IkanotsulaDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const organization = ikanotsulaData;

  // Dipakai pada ringkasan blok Koordinator Daerah.
  const jumlahKoordinator =
    organization.strukturOrganisasi?.koordinatorDaerah.reduce(
      (total, prov) => total + prov.daerah.length,
      0
    ) ?? 0;


  return (
    <>
      <Helmet>
        <title>{`${organization.title} | MKn UNISSULA`}</title>
        <meta name="description" content={organization.description} />
      </Helmet>

        <section className="w-full">
          <div className="mx-auto space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-primary">
                {organization.category || "ORGANISASI ALUMNI"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-bold text-heading tracking-tight leading-tight">
                {organization.title}
              </h1>
            </div>

            {/* Gambar Utama Memanjang Full-Width */}
            <div className="w-full h-[300px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-md flex items-center justify-center">
              <Img
                src={organization.image}
                alt={organization.title}
                className="max-w-full max-h-full w-auto h-full object-contain object-center rounded-md hover:scale-105 transition-transform duration-500"
                eager
              />
            </div>

            {/* Metadata Bar Horizontal */}
            {organization.meta && organization.meta.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                {organization.meta.map((m, idx) => (
                  <div key={idx} className="p-3 bg-gray-50/80 rounded border border-gray-100 flex flex-col justify-between">
                    <span className="text-xs text-body font-normal uppercase tracking-wider mb-1">{m.label}</span>
                    <span className="font-semibold text-heading text-sm sm:text-base">{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* KONTEN UTAMA (1 KOLOM TUNGGAL MEMANJANG) */}
        {/* ========================================================================= */}
        <div className="w-full mx-auto py-10 sm:py-14 space-y-12 sm:space-y-16">
          
          {/* RINGKASAN ORGANISASI (STRIP STATISTIK HORIZONTAL) */}
          {organization.summary && organization.summary.length > 0 && (
            <section className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-2xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                {organization.summary.map((stat, idx) => (
                  <div key={idx} className={`space-y-1 ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-body font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NARASI & KUTIPAN */}
          <section className="space-y-6 text-sm sm:text-base text-body text-justify leading-relaxed">
            {organization.narrative?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {organization.quote && (
              <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 bg-white/50 rounded-r-lg">
                <p className="font-heading italic text-lg sm:text-xl md:text-2xl text-special leading-snug">
                  “{organization.quote.text}”
                </p>
                {organization.quote.author && (
                  <footer className="text-xs sm:text-sm text-body font-normal mt-2">
                    — {organization.quote.author}
                  </footer>
                )}
              </blockquote>
            )}
          </section>

          {organization.strukturOrganisasi && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Struktur Organisasi
              </h2>

              <p className="text-xs sm:text-sm text-body leading-relaxed">
                {organization.strukturOrganisasi.dasar}
              </p>

              {/* Dewan Pelindung, Pembina, Penasehat & Pertimbangan */}
              <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse min-w-[520px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                      <th className="py-3 px-4 w-1/3">Kedudukan</th>
                      <th className="py-3 px-4 w-2/3">Nama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                    {organization.strukturOrganisasi.dewan.map((row) => (
                      <tr key={row.jabatan} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 px-4 font-bold text-heading align-top">
                          {row.jabatan}
                        </td>
                        <td className="py-4 px-4 text-body align-top space-y-1">
                          {row.anggota.map((orang) => (
                            <div key={orang.nama} className="font-medium text-heading">
                              {orang.nama}
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dewan Pengurus Harian */}
              <h3 className="font-heading font-bold text-lg sm:text-xl text-heading pt-2">
                Dewan Pengurus Harian
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {organization.strukturOrganisasi.pengurusHarian.map((orang) => (
                  <div
                    key={orang.jabatan}
                    className="bg-white border border-gray-200 rounded-md p-4 shadow-2xs hover:border-gray-300 transition-colors"
                  >
                    <p className="text-[11px] font-bold text-primary tracking-wider uppercase">
                      {orang.jabatan}
                    </p>
                    <p className="font-heading font-bold text-sm sm:text-base text-heading leading-snug mt-1">
                      {orang.nama}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bidang-bidang */}
              <h3 className="font-heading font-bold text-lg sm:text-xl text-heading pt-2">
                Bidang
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {organization.strukturOrganisasi.bidang.map((bidang) => (
                  <div
                    key={bidang.nama}
                    className="bg-white border border-gray-200 rounded-md p-4 shadow-2xs hover:border-gray-300 transition-colors"
                  >
                    <h4 className="font-heading font-bold text-sm sm:text-base text-heading leading-snug pb-2 mb-2 border-b border-gray-200">
                      {bidang.nama}
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-body marker:text-primary marker:font-semibold">
                      {bidang.anggota.map((nama) => (
                        <li key={nama}>{nama}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              {/* Koordinator Daerah — dilipat agar halaman tidak terlalu panjang */}
              <details className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none hover:bg-gray-50/60 transition-colors">
                  <span>
                    <span className="block font-heading font-bold text-lg sm:text-xl text-heading">
                      Koordinator Daerah
                    </span>
                    <span className="block text-xs sm:text-sm text-body mt-0.5">
                      {jumlahKoordinator} koordinator di{" "}
                      {organization.strukturOrganisasi.koordinatorDaerah.length} provinsi
                    </span>
                  </span>
                  <span className="shrink-0 text-[11px] font-bold tracking-wider uppercase text-primary">
                    <span className="group-open:hidden">Lihat</span>
                    <span className="hidden group-open:inline">Tutup</span>
                  </span>
                </summary>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-5 pt-0 border-t border-gray-200">
                  {organization.strukturOrganisasi.koordinatorDaerah.map((prov) => (
                    <div key={prov.provinsi} className="pt-4">
                      <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-primary pb-2 mb-2 border-b border-gray-200">
                        Provinsi {prov.provinsi}
                      </h4>
                      <ul className="divide-y divide-gray-100 text-xs sm:text-sm">
                        {prov.daerah.map((d) => (
                          <li
                            key={d.wilayah}
                            className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:gap-3"
                          >
                            <span className="font-semibold text-heading sm:w-44 sm:shrink-0">
                              {d.wilayah}
                            </span>
                            <span className="text-body">{d.nama}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            </section>
          )}


          {/* PROGRAM KERJA UTAMA */}
          {organization.programKerja && organization.programKerja.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Program Kerja Utama
              </h2>
              <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse min-w-[550px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold tracking-[0.14em] uppercase text-heading">
                      <th className="py-3 px-4 w-5/12">Kegiatan</th>
                      <th className="py-3 px-4 w-3/12">Waktu / Pelaksanaan</th>
                      <th className="py-3 px-4 w-4/12">Bidang</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                    {organization.programKerja.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                        <td className="py-4 px-4 font-bold text-heading align-top">{row.kegiatan}</td>
                        <td className="py-4 px-4 text-body align-top">{row.waktu}</td>
                        <td className="py-4 px-4 text-body align-top">{row.bidang}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* PENGURUS INTI */}
          {/* {organization.pengurusInti && organization.pengurusInti.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Pengurus Inti Periode 2024–2028
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {organization.pengurusInti.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="aspect-[3/4] bg-[#eaeaea] overflow-hidden relative">
                      <Img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-heading leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-bold text-primary tracking-wider uppercase">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )} */}

          {/* GALERI FOTO */}
          {organization.gallery && organization.gallery.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-heading pb-3 border-b-2 border-gray-900">
                Galeri Kegiatan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {organization.gallery.map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="group relative aspect-[4/3] rounded-md bg-gray-200 overflow-hidden border border-gray-200"
                  >
                    <Img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
    </>
  );
}