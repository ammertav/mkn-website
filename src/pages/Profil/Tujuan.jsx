import { Helmet } from "react-helmet-async";

const tujuanList = [
  {
    number: "01",
    title: "Kompetensi Khusus Pejabat Umum Pembuat Akta",
    desc: "Terwujudnya lulusan Magister Kenotariatan yang miliki kompetensi khusus sebagai Pejabat Umum pembuat akta sebagai : Notaris, Pejabat Pembuat Akta Tanah (PPAT), Juru Lelang Kelas II, serta memiliki kemampuan akademik untuk studi lanjut; Program Doktor, dengan landasan kepribadian Islami dan mampu menjadi kader pemimpin umat dan dakwah dalam menegakkan hukum dan keadilan menuju rahmatan lil'alamin.",
  },
  {
    number: "02",
    title: "Pelaksana Hukum Profesional & Perancangan Kontrak",
    desc: "Terwujudnya lulusan Magister Kenotariatan yang miliki kompetensi sebagai Pelaksana hukum profesional di bidang Kenotariatan yakni : Kepaniteraan, Kepengacaraan, Konsultan Hukum, Bagian Hukum Badan Perusahaan, In-house lawyer pada perusahaan, Law firm, Perbankan, dan lain lain mampu mengembangkan pengetahuan keilmuan hukum pada umumnya serta ilmu Kenotariatan khususnya, mampu memecahkan masalah masalah hukum serta memiliki ketrampilan dalam pembuatan perjanjian /Kontrak dan perancangan hukum, secara profesional yang jujur dan amanah, sehingga dapat memberikan pelayanan hukum proposional kepada masyarakat.",
  },
  {
    number: "03",
    title: "Peningkatan Kualitas SDM Analisis Hukum",
    desc: "Meningkatkan produktivitas dan kualitas Sumber Daya Manusia yang mampu mengenali dan menganalisa serta memecahkan masalah-masalah hukum secara bijaksana dan tetap bersandar pada prinsip-prinsip hukum.",
  },
  {
    number: "04",
    title: "Penyelesaian Problematika Hukum Keperdataan",
    desc: "Meningkatkan produktivitas dan kualitas Sumber Daya Manusia dalam memecahkan masalah-masalah hukum keperdataan (Kenotariatan) bersandarkan prinsip-prinsip hukum.",
  },
  {
    number: "05",
    title: "Kesiapan Studi Lanjut Program Doktor (S3)",
    desc: "Mempersiapkan lulusan yang mempunyai kemampuan akademik untuk melanjutkan jenjang pendidikan lanjut Program Doktor Ilmu Hukum ( S3).",
  },
];

export default function Tujuan() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Tujuan Pendidikan | MKn UNISSULA</title>
        <meta
          name="description"
          content="Tujuan pendidikan dan kualifikasi lulusan Program Studi Magister Kenotariatan (MKn) Fakultas Hukum UNISSULA."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Section TUJUAN PENDIDIKAN */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            TUJUAN PENDIDIKAN
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Mencetak Tenaga Hukum dan Pejabat Umum Berkualitas
              </h2>
            </div>

            {/* Right Column: Intro Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                Dengan setting Indonesia sebagai negara Hukum, maka Indonesia memerlukan tenaga
                sebagai Pejabat Umum pembuat akta maupun Pelaksana hukum proposianal pada perusahaan
                atau lembaga yang memiliki bagian Hukum serta unit Riset dan pengembangan.
              </p>
              <p>
                Tenaga-tenaga tersebut harus disiapkan sejak mahasiswa di Kampus. Usaha ini
                memerlukan Magister Kenotariatan yang memadai secara kuantitas maupun kualitas.
                Oleh karena itu Program Studi Magister (S.2) Kenotariatan Fakultas Hukum UNISSULA
                dirancang agar dapat menghasilkan Magister Kenotariatan yang merupakan Program profesi
                yang berbasis akademik, dengan kualifikasi sebagai berikut:
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 Butir Tujuan / Kualifikasi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              Tujuan dan Kualifikasi Program Studi
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <div className="grid grid-cols-1 gap-5">
            {tujuanList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6 sm:p-7 rounded-xs flex flex-col sm:flex-row sm:items-start gap-5 hover:border-primary/40 transition-colors shadow-2xs"
              >
                <span className="w-11 h-11 rounded-xs bg-primary/10 text-primary font-heading font-bold text-lg flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div className="space-y-2 flex-grow">
                  <h3 className="font-heading font-semibold text-lg text-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
