import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Img from "../ui/Img";

const testimonialData = [
  {
    id: 1,
    name: "Andi Wijaya, S.H.",
    description: "Pendidikan yang menuntut dan pengalaman menangani kasus hukum nyata membekali saya dengan sangat baik untuk berkarier di bidang hukum korporasi.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
    role: "Alumni 2018",
    linkHref: "/alumni/andi-wijaya",
  },
  {
    id: 2,
    name: "Siti Aminah, S.H.",
    description: "Bimbingan para dosen dan lingkungan yang saling mendukung membuat perjalanan studi hukum saya benar-benar mengubah cara pandang.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    role: "Alumni 2020",
    linkHref: "/alumni/siti-aminah",
  },
  {
    id: 3,
    name: "Budi Santoso",
    description: "Mengikuti kompetisi peradilan semu memberi saya kepercayaan diri dan keterampilan praktis yang dibutuhkan di ruang sidang.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    role: "Mahasiswa Tingkat Akhir",
    linkHref: "/mahasiswa/budi-santoso",
  },
  {
    id: 4,
    name: "Diana Putri, S.H.",
    description: "Institusi yang tidak sekadar mengajarkan hukum, tetapi menanamkan etika, integritas, dan kepedulian pada keadilan kepada setiap mahasiswanya.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    role: "Alumni 2015",
    linkHref: "/alumni/diana-putri",
  },
];

export default function Testimoni() {
  return (
    <section className="w-full bg-hero-heading font-body py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
            Kata Mereka
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {testimonialData.map((item) => (
            <article key={item.id} className="flex flex-col group h-full">
              {/* Image Container (Grayscale Aspect 16/10) */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden rounded-xs">
                <Img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center grayscale contrast-110 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="pt-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-normal text-xl sm:text-2xl text-heading leading-snug group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed italic">
                    "{item.description}"
                  </p>
                </div>

                {/* Link Action */}
                <div className="pt-4 mt-auto">
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center space-x-1 text-xs font-semibold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/link"
                  >
                    <span>{item.role}</span>
                    <FiChevronRight className="text-sm transition-transform duration-150 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}