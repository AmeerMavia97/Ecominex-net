"use client";

import Image from "next/image";

const LOGOS = [
    { src: "/Marquee1.webp", alt: "Luxor" },
    { src: "/Marquee2.webp", alt: "Sapphire" },
    { src: "/Marquee3.webp", alt: "Bitmain" },
    { src: "/Marquee4.webp", alt: "Moralis" },
    { src: "/Marquee5.webp", alt: "Cruxpool" },
];

export default function MarqueeSection() {
    return (
        <section className="w-full bg-[#1a1a1a] py-14 flex flex-col justify-center items-center relative z-50">
            {/* Heading */}


            <div className=' text-white'>
                <h1 className='font-[600] text-[25px]'>Our World&apos;s <span className='bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent'>Most Average</span> Partners</h1>
            </div>

            {/* Marquee */}
            <div
                className="group relative mt-6 overflow-hidden w-[90%]"
                style={{
                    // soft fade on left/right
                    maskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
            >
                {/* track (duplicated once for seamless loop) */}
                <ul className="flex items-center gap-20 whitespace-nowrap will-change-transform animate-[scroll_28s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                    {LOGOS.concat(LOGOS).map((logo, i) => (
                        <li key={i} className="shrink-0">
                            {/* wrapper gives room for the glow */}
                            <div className="relative px-0 py-6 group/logo">
                                {/* soft halo behind (appears on hover) */}
                                <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-300
                                  group-hover/logo:opacity-100
                                  before:content-[''] before:absolute before:inset-0 before:rounded-2xl
                                  before:bg-[#20cf0c76] before:blur-2xl" />
                                {/* the logo */}
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={160}
                                    height={72}
                                    className="h-12 w-auto md:h-9 object-contain cursor-pointer opacity-80 transition
                             group-hover/logo:opacity-100 group-hover/logo:scale-[1.04]
                             [filter:drop-shadow(0_0_0_rgba(0,0,0,0))]
                             group-hover/logo:[filter:drop-shadow(0_0_16px_rgba(52,211,153,0.85))]"
                                    priority={i < LOGOS.length}
                                />
                            </div>
                        </li>
                    ))}
                </ul>

                {/* keyframes (scopes to this page) */}
                <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
            </div>
        </section>
    );
}
