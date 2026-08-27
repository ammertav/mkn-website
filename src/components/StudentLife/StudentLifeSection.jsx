import { FiArrowRight } from "react-icons/fi";

export default function StudentLifeSection({ title, description, items = [] }) {
  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-semibold text-heading tracking-tight leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-[14.5px] sm:text-[15.5px] text-[#4b5563] leading-relaxed max-w-4xl">
            {description}
          </p>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 group"
          >
            {/* Card Image */}
            <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="font-heading font-semibold text-xl sm:text-[22px] text-primary leading-snug group-hover:text-[#600000] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13.5px] sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a
                  href={item.linkHref || "#"}
                  className="inline-flex items-center space-x-1.5 text-[13.5px] font-semibold text-primary hover:text-[#570000] transition-colors group/link"
                >
                  <span>{item.linkText || "Pelajari Lebih Lanjut"}</span>
                  <FiArrowRight className="text-sm transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
