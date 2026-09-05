import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Img from "../ui/Img";

export default function StudentLifeSection({
  category = "MAHASISWA",
  title,
  description,
  items = [],
}) {
  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div>
        <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
          {category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-heading tracking-normal">
          {title}
        </h1>
        <div className="w-full h-[2px] bg-primary mt-4 mb-5" />
        {description && (
          <p className="text-base text-body leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {items.map((item) => {
          const isInternal = item.linkHref && item.linkHref.startsWith("/");

          return (
            <article
              key={item.id}
              className="flex flex-col bg-white border border-gray-200/90 rounded-sm overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                {isInternal ? (
                  <Link to={item.linkHref} className="block w-full h-full">
                    <Img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-md"
                    />
                  </Link>
                ) : (
                  <Img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl text-primary leading-snug">
                    {isInternal ? (
                      <Link to={item.linkHref} className="hover:underline">
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  {isInternal ? (
                    <Link
                      to={item.linkHref}
                      className="inline-flex items-center space-x-1.5 text-xs sm:text-[13px] font-semibold text-primary hover:underline transition-colors group/link"
                    >
                      <span>{item.linkText || "Pelajari Lebih Lanjut"}</span>
                      <FiArrowRight className="text-sm transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <a
                      href={item.linkHref || "#"}
                      className="inline-flex items-center space-x-1.5 text-xs sm:text-[13px] font-semibold text-primary hover:underline transition-colors group/link"
                    >
                      <span>{item.linkText || "Pelajari Lebih Lanjut"}</span>
                      <FiArrowRight className="text-sm transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
