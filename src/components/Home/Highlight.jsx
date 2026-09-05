import { useEffect, useState } from "react";
import {
  FiUsers,
  FiBriefcase,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

function AnimatedNumber({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Ambil angka dari value, misalnya "75+" -> 75
    const target = parseInt(value, 10);

    if (isNaN(target)) return;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease out
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  // Pertahankan "+" jika value memiliki "+"
  const suffix = value.includes("+") ? "+" : "";

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Highlight() {
  const statistics = [
    {
      value: "75+",
      label: "Dosen",
      icon: FiUsers,
    },
    {
      value: "50+",
      label: "Mitra Kerja Sama",
      icon: FiBriefcase,
    },
    {
      value: "Unggul",
      label: "Akreditasi BAN-PT",
      icon: FiAward,
    },
    {
      value: "2012",
      label: "Berdiri sejak",
      icon: FiCalendar,
    },
  ];

  return (
    <section className="w-full bg-hero-heading font-body py-12 sm:py-18 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {statistics.map((item, index) => {
            const Icon = item.icon;
            const isNumber = !isNaN(parseInt(item.value, 10));

            return (
              <div
                key={index}
                className="
                  p-3 group bg-white border border-gray-200 rounded-md shadow-sm 
                  transition-all duration-300 min-h-[145px] sm:min-h-[150px] flex flex-col items-center justify-center text-center
                  hover:scale-105
                "
              >
                {/* Icon */}
                <div
                  className="
                    p-3 md:p-6 mb-2 md:mb-4
                    flex items-center justify-center
                    rounded-full
                    bg-[#9f1d20]/10
                    text-[#9f1d20]
                    transition-all duration-300
                    group-hover:bg-[#9f1d20]
                    group-hover:text-white
                  "
                >
                  <Icon className="text-2xl md:text-4xl" />
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl font-bold text-[#9f1d20] leading-none">
                  {isNumber ? (
                    <AnimatedNumber value={item.value} />
                  ) : (
                    item.value
                  )}
                </div>

                {/* Label */}
                <div className="mt-2 text-sm sm:text-base text-gray-600">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Highlight;