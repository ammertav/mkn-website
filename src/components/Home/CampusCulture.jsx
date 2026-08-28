import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const campusCultureData = [
  {
    id: 1,
    title: "Perpustakaan",
    description: "Extensive physical archives and access to leading global legal databases.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80",
    linkText: "Explore Catalog",
    linkHref: "/fasilitas/perpustakaan",
  },
  {
    id: 2,
    title: "Student Research Center (SRC)",
    description: "Dedicated collaborative spaces for advanced jurisprudential analysis.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    linkText: "View Initiatives",
    linkHref: "/fasilitas/student-research-center",
  },
  {
    id: 3,
    title: "Laboratorium",
    description: "Moot court and simulation labs designed for practical notarial drafting.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    linkText: "Lab Schedules",
    linkHref: "/fasilitas/laboratorium",
  },
  {
    id: 4,
    title: "Organisasi Mahasiswa",
    description: "Fostering leadership through academic guilds and student senates.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    linkText: "Meet the Council",
    linkHref: "/mahasiswa/organisasi",
  },
];

export default function CampusCulture() {
  return (
    <section className="w-full bg-hero-heading font-body py-16 sm:py-24 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-heading tracking-normal">
            Campus & Culture
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {campusCultureData.map((item) => (
            <article key={item.id} className="flex flex-col group h-full">
              {/* Image Container (Grayscale Aspect 16/10) */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden rounded-xs">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center grayscale contrast-110 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="pt-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-normal text-xl sm:text-2xl text-heading leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Link Action */}
                <div className="pt-4 mt-auto">
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center space-x-1 text-xs font-semibold tracking-wider text-primary hover:text-[#680000] uppercase transition-colors group/link"
                  >
                    <span>{item.linkText}</span>
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
