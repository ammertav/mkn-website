import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiUsers,
  FiBriefcase,
  FiAward,
  FiCalendar,
} from "react-icons/fi";
import { useT } from "../../i18n/languageContext";

const viewportSettings = {
  once: true,
  amount: 0.2,
};

// =========================================
// CARD CONTAINER
// =========================================
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =========================================
// CARD ANIMATION
// =========================================
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// =========================================
// CONTENT ANIMATION
// =========================================
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// =========================================
// ANIMATED NUMBER
// =========================================
function AnimatedNumber({
  value,
  duration = 1800,
  start,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const target = parseInt(value, 10);

    if (isNaN(target)) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration, start]);

  const suffix = typeof value === "string" && value.includes("+") ? "+" : "";

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

// =========================================
// HIGHLIGHT
// =========================================
function Highlight() {
  const t = useT();

  const statistics = [
    {
      value: "30+",
      label: { id: "Dosen", en: "Faculty Members" },
      icon: FiUsers,
    },
    {
      value: "50+",
      label: { id: "Mitra Kerja Sama", en: "Partner Institutions" },
      icon: FiBriefcase,
    },
    {
      value: { id: "Unggul", en: "Unggul" },
      label: { id: "Akreditasi BAN-PT", en: "BAN-PT Accreditation" },
      icon: FiAward,
    },
    {
      value: "2012",
      label: { id: "Berdiri sejak", en: "Established in" },
      icon: FiCalendar,
    },
  ];

  return (
    <section className="w-full bg-hero-heading font-body py-12 sm:py-18 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-5
          "
        >
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <HighlightCard
                key={index}
                item={item}
                index={index}
                Icon={Icon}
                t={t}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


// =========================================
// HIGHLIGHT CARD
// =========================================
function HighlightCard({
  item,
  index,
  Icon,
  t,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: viewportSettings.once,
    amount: viewportSettings.amount,
  });

  // Hanya angka dengan "+" yang menggunakan count-up
  const isCountUp = typeof item.value === "string" && item.value.includes("+");

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="
        p-3
        group
        bg-white
        border
        border-gray-200
        rounded-md
        shadow-sm
        transition-all
        duration-300
        min-h-[145px]
        sm:min-h-[150px]
        flex
        flex-col
        items-center
        justify-center
        text-center
        hover:scale-105
        hover:border-primary/40
      "
    >

      {/* =====================================
          ICON
      ===================================== */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1 + index * 0.12,
        }}
        viewport={viewportSettings}
        className="
          p-3
          md:p-6
          mb-2
          md:mb-4
          flex
          items-center
          justify-center
          rounded-full
          bg-[#9f1d20]/10
          text-[#9f1d20]
          transition-all
          duration-300
          group-hover:bg-[#9f1d20]
          group-hover:text-white
        "
      >
        <Icon className="text-2xl md:text-4xl" />
      </motion.div>


      {/* =====================================
          VALUE
      ===================================== */}
      <motion.div
        variants={itemVariants}
        className="
          text-3xl
          sm:text-4xl
          font-bold
          text-[#9f1d20]
          leading-none
        "
      >
        {isCountUp ? (
          <AnimatedNumber
            value={item.value}
            start={isInView}
          />
        ) : (
          t(item.value)
        )}
      </motion.div>


      {/* =====================================
          LABEL
      ===================================== */}
      <motion.div
        variants={itemVariants}
        className="
          mt-2
          text-sm
          sm:text-base
          text-gray-600
        "
      >
        {t(item.label)}
      </motion.div>

    </motion.div>
  );
}

export default Highlight;
