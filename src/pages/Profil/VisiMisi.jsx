import { Helmet } from "react-helmet-async";
import { useT } from "../../i18n/languageContext";
import RichText from "../../components/ui/RichText";
import { visi, halaman } from "../../data/profil/visiData";

/**
 * Halaman Visi.
 *
 * Isinya hanya satu kalimat, jadi tata letaknya sengaja dibuat tanpa kartu,
 * kotak, maupun kolom pendamping: rumusan visi diberi ruang lapang dan ukuran
 * besar supaya ia sendiri yang menjadi isi halaman. Menambah pembungkus di
 * sekelilingnya justru membuat halaman terasa kosong, bukan penuh.
 */
export default function VisiMisi() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(halaman.meta.title)}</title>
        <meta name="description" content={t(halaman.meta.description)} />
      </Helmet>

      <section className="py-4 sm:py-10 lg:py-16">
        <span className="text-xl font-semibold tracking-wider text-primary uppercase block">
          {t(halaman.eyebrow)}
        </span>
        <h1 className="mt-2 font-heading font-normal text-2xl sm:text-3xl text-heading/60 tracking-normal">
          {t(halaman.judul)}
        </h1>
        <div className="w-full h-[2px] bg-primary mt-4" />

        <blockquote className="mt-10 sm:mt-14 lg:mt-16 w-full">
          <p className="font-heading font-normal text-heading text-[26px] sm:text-4xl lg:text-[46px] leading-[1.35] tracking-normal text-justify text-balance">
            <RichText>{t(visi)}</RichText>
          </p>
        </blockquote>

        <div className="mt-10 sm:mt-14">
          <div className="w-14 h-[2px] bg-primary" />
          <footer className="mt-4 space-y-0.5">
            {halaman.atribusi.map((baris, idx) => (
              <p
                key={idx}
                className={`text-sm sm:text-[15px] leading-relaxed ${
                  idx === 0 ? "font-semibold text-heading" : "text-body"
                }`}
              >
                {t(baris)}
              </p>
            ))}
          </footer>
        </div>
      </section>
    </>
  );
}
