import { Helmet } from "react-helmet-async";

const keunggulanProdi = [
  {
    number: "01",
    title: "Budaya Akademik Islami (BudAI)",
    desc: "Sebagai institusi perguruan tinggi Islam, Program studi ini melangsungkan proses pendidikannya dengan memasukkan pendidikan karakter melalui strategi Budaya Akademik Islami (BudAI), yaitu dengan menekankan pengembangan pendidikan Magister Kenotariatan melalui kajian pengetahuan atas ilmu Kenotariatan dalam kandungan Alquran.",
  },
  {
    number: "02",
    title: "Integrasi Pendidikan Akademik & Profesi",
    desc: "Sebagai pendidikan Magister yang mencerminkan pendidikan akademik dan pada segi lain sebagai profesi yang harus mencerminkan pendidikan profesi.",
  },
  {
    number: "03",
    title: "Penguasaan Teknologi Informasi Mutakhir",
    desc: "Penguasaan Technology Informasi yang memadai, karena UNISSULA telah menerapkan IT dengan teknologi mutakhir Technologi Digital Multimedia Broadcasting (T-DMB).",
  },
  {
    number: "04",
    title: "Intensifikasi Bahasa Asing (Inggris & Belanda)",
    desc: "Penguasaan bahasa asing (Inggris dan Belanda) dengan program intensifikasi bahasa bagi seluruh mahasiswa.",
  },
  {
    number: "05",
    title: "Penguatan Keahlian Melalui Kurikulum Magang",
    desc: "Penguatan keahlian tambahan melalui kurikulum Magang yang terstruktur bersama kantor notaris mitra dan asosiasi profesi.",
  },
  {
    number: "06",
    title: "Publikasi Karya Ilmiah Berkala",
    desc: "Penguatan kemampuan menulis Karya Ilmiah dan diseminasi riset dalam Jurnal Ilmiah nasional maupun internasional bereputasi.",
  },
  {
    number: "07",
    title: "Pendidikan Kepemimpinan & Kewirausahaan",
    desc: "Menyertakan pendidikan kepemimpinan dan kewirausahaan guna memberikan bekal jiwa kepemimpinan dan kewirausahaan bagi para calon pejabat notaris.",
  },
];

export default function Sejarah() {
  return (
    <>
      <Helmet>
        <title>Sejarah & Latar Belakang | MKn UNISSULA</title>
        <meta
          name="description"
          content="Sejarah dan latar belakang pendirian Program Studi Magister (S2) Kenotariatan Fakultas Hukum UNISSULA Semarang, keunggulan desain kurikulum, dan rekam jejak institusi."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Section SEJARAH Header */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            SEJARAH / LATAR BELAKANG
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Latar Belakang Pendirian Program Studi
              </h2>
            </div>

            {/* Right Column: Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Gerakan sadar hukum yang dicanangkan pemerintah sejak era Orde Baru semakin
                berimplikasi positif. Masyarakat semakin teliti dan sadar betapa hukum menjadi aspek
                penting dalam membangun relasi, terutama menyangkut hal-hal yang bersifat kerja
                kolektif dan bersentuhan dengan kepentingan publik, transaksi yang terkait dengan hak
                dan kewajiban.
              </p>
              <p>
                Oleh karena itu, kebutuhan akan SDM yang handal di bidang ilmu Kenotariatan, dengan
                kualifikasi penguasaan pengetahuan teoretik dan keterampilan dalam pembuatan bermacam
                perjanjian/kontrak dan akta semakin meningkat seiring dengan meningkatkan pemahaman
                hukum masyarakat.
              </p>
            </div>
          </div>
        </section>

        {/* Section Peluang & Desain Menjawab Pasar Bebas */}
        <section className="bg-gray-50/70 border border-gray-200 p-6 sm:p-10 rounded-xs space-y-5">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-wider text-primary uppercase block">
              PELUANG & TANTANGAN GLOBAL
            </span>
            <h3 className="font-heading font-normal text-2xl sm:text-3xl text-heading leading-snug">
              Menjawab Kebutuhan Notaris Profesional di Era Pasar Bebas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-body leading-relaxed pt-2">
            <p>
              Peluang inilah yang mendorong Fakultas Hukum Universitas Islam Sultan Agung (UNISSULA)
              untuk mendirikan program studi Magister (S.2) Kenotariatan, dengan didukung oleh sumber
              daya insani, sarana serta prasarana yang telah dimiliki. Program Studi Magister (S.2)
              Kenotariatan didirikan untuk memenuhi kebutuhan pangsa pasar akan Pendidikan Magister
              Kenotariatan dimana lulusan dari perguruan tinggi ini diharapkan mampu memiliki
              kompetensi akademik, keahlian dan ketrampilan khusus sebagai Pejabat Umum maupun
              Pelaksana hukum professional.
            </p>
            <p>
              Program Magister (S2) Kenotariatan Fakultas Hukum UNISSULA didesain untuk menjawab
              tantangan kebutuhan masyarakat akan tenaga Notaris maupun Pelaksana hukum professional
              yang kompeten, tidak hanya menyangkut penguasaan Ilmu Hukum namun juga ketrampilan
              praktis, sehingga mampu bersaing dalam era pasar bebas dengan menguasai secara mantap
              aturan-aturan perdagangan internasional sebagaimana tertuang dalam kesepakatan WTO,
              APEC, AFTA dan lain sebagainya.
            </p>
          </div>
        </section>

        {/* Section 7 Keunggulan Desain Program Studi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              Keunggulan Desain Program Studi
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-4" />
            <p className="text-sm sm:text-base text-body leading-relaxed max-w-4xl">
              Program Studi Magister (S.2) Kenotariatan Fakultas Hukum UNISSULA didesain dengan
              mengedepankan beberapa keunggulan strategis sebagai berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-2">
            {keunggulanProdi.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-5 sm:p-6 rounded-xs flex flex-col sm:flex-row sm:items-start gap-4 hover:border-primary/40 transition-colors shadow-2xs"
              >
                <span className="w-10 h-10 rounded-xs bg-primary/10 text-primary font-heading font-bold text-base flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div className="space-y-1.5 flex-grow">
                  <h3 className="font-heading font-semibold text-base sm:text-lg text-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pengelolaan Mandiri Note */}
          <div className="bg-white border-l-4 border-l-primary border-y border-r border-gray-200 p-6 rounded-xs shadow-2xs text-sm sm:text-base text-body leading-relaxed">
            <p>
              Guna merealisasikan keunggulan tersebut, Program Studi Magister (S2) Kenotariatan dikelola
              secara mandiri dalam segala segi baik keuangan, Sumber Daya Manusia maupun sarana dan
              prasarana pendukung bagi keberadaan program studi serta memberdayakan berbagai perangkat
              pendukung lain yang telah ada di lingkungan UNISSULA selama ini, misalnya keberadaan
              gedung, ruang kuliah, ruang perpustakaan serta berupaya menambah sarana fisik lain yang
              dibutuhkan dalam proses belajar mengajar.
            </p>
          </div>
        </section>

        {/* Section Rekam Jejak Institusi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              Rekam Jejak & Landasan Institusi
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <div className="bg-white border border-gray-200 p-6 sm:p-10 rounded-xs shadow-2xs space-y-5 text-sm sm:text-base text-body leading-relaxed">
            <p>
              Universitas Islam Sultan Agung (UNISSULA) memiliki rekam yang sangat baik dalam
              pengelolaan pendidikan di bidang hukum. Program Studi Sarjana (S1) ilmu hukum dengan
              akreditasi BAN PT bernilai A dan Program Studi Magister (S2) Ilmu Hukum UNISSULA
              terakreditasi BAN PT dengan nilai A, serta Program Doktor Ilmu Hukum (S3). Dengan jumlah
              dosen tetap yang sudah lulus Doktor (lulus S3) dibidang hukum sebanyak 42 dosen juga
              berpendidikan Magister Kenotariatan maupun Spesialis Kenotariatan 5 orang maupun 4 dosen
              berprofesi sebagai Notaris dengan jumlah Guru Besar 3 orang, sehingga layak untuk
              mengajukan usulan Program Studi Magister (S2) Kenotariatan.
            </p>
            <p>
              Rekam jejak yang baik dapat ditunjukkan dengan banyak prestasi maupun fasilitas yang
              dimiliki. Sebagai universitas yang telah terakreditasi secara institusi, UNISSULA saat
              ini terus memusatkan perhatian pada pengembangan Program Doktor (S3) sebagai upaya
              mewujudkan <em>world class university</em>, disamping untuk melakukan rekonstruksi ilmu
              berdasarkan nilai-nilai ajaran Islam. Melalui pengembangan{" "}
              <em>Technologi Digital Multimedia Broadcasting</em> (T-DMB) saat ini UNISSULA terus
              berikhtiar menempatkan dirinya menjadi universitas terbaik yang menyelenggarakan proses
              pembelajaran berbasis digital multimedia.
            </p>
            <p>
              Peluang inilah yang mendorong Fakultas Hukum UNISSULA untuk mendirikan Program Studi
              Magister (S.2) Kenotariatan, dengan didukung oleh sumber daya insani, sarana serta
              prasarana yang telah dimiliki guna memenuhi kebutuhan masyarakat akan Pendidikan
              Magister Kenotariatan dimana lulusan diharapkan mampu memiliki kompetensi yang
              mencerminkan pendidikan akademik, keahlian dan ketrampilan khusus sebagai Pejabat Umum
              dan pada segi lain Kenotariatan sebagai profesi yang harus mencerminkan pendidikan
              profesi sebagai Pelaksana Hukum professional.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
