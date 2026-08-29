import { Helmet } from "react-helmet-async";

const missions = [
  {
    number: "01",
    title: "Pembelajaran & Kemahiran Akta",
    desc: "Menyelenggarakan kegiatan pembelajaran yang mampu menghasilkan lulusan yang memiliki kemampuan mengembangkan ilmu hukum, hukum kenotariatan, mampu menghasilkan lulusan yang memiliki ketrampilan dalam pembuatan akta perjanjian/kontrak/dokumen.",
  },
  {
    number: "02",
    title: "Penelitian Interdisipliner & Pengabdian Masyarakat",
    desc: "Menyelenggarakan penelitian dalam pelaksanaan hukum kenotariatan yang bermanfaat bagi kemaslahatan umat manusia dengan pendekatan interdisipliner, dan dipublikasikan hasil penelitiannya di jurnal nasional terakreditasi atau jurnal internasional serta menyelenggarakan pengabdian masyarakat hasil penelitian di bidang kenotariatan untuk menyelesaikan problematika bangsa dan masyarakat.",
  },
  {
    number: "03",
    title: "Kerjasama Tri Dharma Nasional & Internasional",
    desc: "Melakukan kerjasama dengan lembaga pendidikan, lembaga pemerintah dan swasta di tingkat nasional maupun internasional di bidang Tri Dharma Perguruan Tinggi.",
  },
];

export default function VisiMisi() {
  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Visi dan Misi | MKn UNISSULA</title>
        <meta
          name="description"
          content="Visi dan Misi resmi Program Studi Magister Kenotariatan (MKn) UNISSULA: bereputasi Asia dengan dijiwai nilai-nilai Islam untuk menghasilkan generasi khaira ummah."
        />
      </Helmet>

      <div className="space-y-16 sm:space-y-20">
        {/* Section VISI DAN MISI */}
        <section className="space-y-4">
          <span className="text-xs font-semibold tracking-wider text-primary uppercase block">
            VISI DAN MISI
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-4">
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[40px] text-heading leading-tight">
                Visi Program Studi
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white border-l-4 border-l-primary border-y border-r border-gray-200 p-6 sm:p-8 shadow-2xs">
                <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
                  RUMUSAN VISI RESMI
                </span>
                <blockquote className="font-heading text-lg sm:text-2xl text-heading leading-relaxed">
                  &ldquo;Menjadi Program Studi Magister Kenotariatan dengan reputasi ASIA, dengan dijiwai nilai-nilai Islam untuk menghasilkan generasi khaira ummah pada tahun 2025&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Section Misi */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl text-heading tracking-normal">
              Misi Program Studi
            </h2>
            <div className="w-full h-[1.5px] bg-heading mt-3 mb-8" />
          </div>

          <div className="grid grid-cols-1 gap-5">
            {missions.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6 sm:p-7 rounded-xs flex flex-col sm:flex-row sm:items-start gap-5 hover:border-primary/40 transition-colors shadow-2xs"
              >
                <span className="w-11 h-11 rounded-xs bg-primary/10 text-primary font-heading font-bold text-lg flex items-center justify-center shrink-0">
                  {m.number}
                </span>
                <div className="space-y-2 flex-grow">
                  <h3 className="font-heading font-semibold text-lg text-heading">
                    {m.title}
                  </h3>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    {m.desc}
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
