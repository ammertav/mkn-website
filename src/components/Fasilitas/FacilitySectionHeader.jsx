import { motion } from "framer-motion";

const sectionHeaderContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

const headerItemLeft = {
  hidden: { opacity: 0, x: -25, y: 15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headerItemRight = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FacilitySectionHeader({
  number,
  category,
  title,
  paragraphs = [],
  children,
}) {
  return (
    <motion.div
      variants={sectionHeaderContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
    >
      {/* Left Column: Number Tag & Heading */}
      <div className="lg:col-span-5 space-y-3 sm:space-y-4">
        {(number || category) && (
          <motion.div
            variants={headerItemLeft}
            className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary"
          >
            {number ? `${number} — ` : ""}
            {category}
          </motion.div>
        )}
        <motion.h2
          variants={headerItemLeft}
          className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-normal text-heading leading-tight tracking-tight"
        >
          {title}
        </motion.h2>
      </div>

      {/* Right Column: Paragraph Descriptions (staggered) */}
      <motion.div
        variants={sectionHeaderContainer}
        className="lg:col-span-7 space-y-4 text-sm sm:text-base text-body text-justify leading-relaxed"
      >
        {paragraphs && paragraphs.length > 0
          ? paragraphs.map((text, idx) => (
              <motion.p
                key={idx}
                variants={headerItemRight}
                className="leading-relaxed"
              >
                {text}
              </motion.p>
            ))
          : children}
      </motion.div>
    </motion.div>
  );
}
