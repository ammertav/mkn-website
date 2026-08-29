export default function FacilitySpecSection({
  title,
  description,
  specs = [],
  services = [],
  children,
  image,
  imagePosition = "right",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Spec / Services Details Column */}
      <div
        className={`lg:col-span-5 space-y-6 ${
          isImageLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="w-8 h-1 bg-primary" />
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-heading leading-tight">
          {title}
        </h3>

        {description && (
          <p className="text-sm sm:text-base text-body leading-relaxed">
            {description}
          </p>
        )}

        {/* Key-Value Specifications List (used by Ruang Kelas & Laboratorium) */}
        {specs && specs.length > 0 && (
          <div className="pt-2 divide-y divide-gray-200 border-t border-gray-200">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm"
              >
                <span className="text-body">{item.label}</span>
                <span className="font-semibold text-heading">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Service Items List (used by Student Research Center) */}
        {services && services.length > 0 && (
          <div className="pt-2 divide-y divide-gray-200 border-t border-gray-200">
            {services.map((item, idx) => (
              <div key={idx} className="py-4 space-y-1.5">
                <h4 className="text-sm sm:text-base font-semibold text-heading">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Optional custom children */}
        {children}
      </div>

      {/* Image / Photo Column */}
      {image && (
        <div
          className={`lg:col-span-7 ${
            isImageLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 overflow-hidden shadow-sm group">
            <img
              src={image.src}
              alt={image.alt || title}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            {image.caption && (
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium drop-shadow-md">
                {image.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
