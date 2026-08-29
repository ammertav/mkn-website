export default function FacilitySectionHeader({
  number,
  category,
  title,
  paragraphs = [],
  children,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      {/* Left Column: Number Tag & Heading */}
      <div className="lg:col-span-5 space-y-3 sm:space-y-4">
        {(number || category) && (
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary">
            {number ? `${number} — ` : ""}
            {category}
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-normal text-heading leading-tight tracking-tight">
          {title}
        </h2>
      </div>

      {/* Right Column: Paragraph Descriptions */}
      <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body leading-relaxed">
        {paragraphs && paragraphs.length > 0
          ? paragraphs.map((text, idx) => (
              <p key={idx} className="leading-relaxed">
                {text}
              </p>
            ))
          : children}
      </div>
    </div>
  );
}
