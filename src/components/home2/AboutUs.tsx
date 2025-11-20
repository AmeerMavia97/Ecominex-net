"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// --------------------
// Parallax Hook
// --------------------
function useParallaxFast(strength: number = 240, curve: number = 0.55) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let active = false;

    const tick = () => {
      if (!active) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const scrolled = Math.min(Math.max(window.innerHeight - rect.top, 0), total);
      let p = scrolled / total;
      p = Math.pow(p, curve);
      setY((p * 2 - 1) * strength);
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [strength, curve]);

  return { ref, y };
}

// --------------------
// Props Type
// --------------------
interface AboutUsProps {
  title?: string;
  highlight?: string;
  paragraphs?: string[];
  buttonText?: string;
  image?: string;
  id?: string;
}

// --------------------
// AboutUs Component
// --------------------
const AboutUs: React.FC<AboutUsProps> = ({
  title = "",
  highlight = "",
  paragraphs = [],
  buttonText = "",
  image = "",
  id = "about",
}) => {
  const { ref, y } = useParallaxFast(260, 0.5);

  return (
    <section id={id} ref={ref} className="w-full bg-[#101010] p-20 relative">
      {/* Decorative Blurs */}
      <div className="absolute overflow-hidden bg-[#22c55e] blur-[139px] -right-10 h-[180px] w-[180px]" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 place-items-center">
        {/* Left: Text Content */}
        <article className="flex flex-col gap-4 text-white relative z-50">
          <div className="flex relative -mb-3">
            <div className="text-transparent z-10 -mr-10 border-[2px] border-white px-4 rounded-full py-0">.</div>
            <div className="text-transparent ml-5 z-20 bg-green-600 px-5 py-5 rounded-full"></div>
          </div>

          {/* Title with Highlight */}
          <h1 className="font-[600] text-[44px] leading-[53px] w-[80%]">
            {title.split(new RegExp(`(${highlight})`, "gi")).map((part, idx) =>
              part.toLowerCase() === highlight.toLowerCase() ? (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent"
                >
                  {part}
                </span>
              ) : (
                <span key={idx}>{part}</span>
              )
            )}
          </h1>

          {/* Paragraphs */}
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-[14.5px] leading-[24px] w-[90%] text-gray-300"
            >
              {p}
            </p>
          ))}

          {/* Button */}
          {buttonText && (
            <div className="mt-2">
              <Link href="/About">
                <button className="!font-semibold border-[1px] px-7 py-3 text-[13.5px] rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all cursor-pointer">
                  {buttonText}
                </button>
              </Link>
            </div>
          )}
        </article>

        {/* Right: Parallax Image */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-[10px] border border-white/10">
          <div className="pointer-events-none absolute inset-0 z-10 bg-black/20" />
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `translate3d(0, ${y}px, 0) scale(1.80)`,
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Decorative Blur */}
        <div className="absolute overflow-hidden bg-[#22c55e] blur-[139px] -bottom-20 -left-10 h-[100px] w-[110px]" />
      </div>
    </section>
  );
}

export default AboutUs;