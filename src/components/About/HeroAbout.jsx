"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Music2, Twitter } from "lucide-react"; // Lucide icons

const HeroAbout = () => {
 return (
  <section
    className="py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-20 bg-cover bg-center bg-no-repeat text-white"
    style={{ backgroundImage: "url('/about-banner.png')" }}
  >
    <div className="grid items-center gap-8 lg:gap-10 md:grid-cols-1 lg:grid-cols-2">
      {/* Left Content */}
      <div className="px-0 lg:px-10 py-6 lg:py-10">
        <h4 className="px-3 py-1 rounded-2xl bg-[#00c950b3] text-center text-sm sm:text-[15px] font-semibold w-max">
          Some Words About Us
        </h4>

        <h1 className="font-[600] my-4 sm:my-5 leading-tight sm:leading-[50px] lg:leading-[65px] text-[28px] sm:text-[36px] lg:text-[60px]">
          About Ecomine X
        </h1>

        <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[22px] sm:leading-[24px] lg:leading-[25px]">
          Your Gateway to Smarter, Stronger Crypto Mining. At Ecomine X, we’re
          more than just a mining company — we’re a global community built
          around innovation, reliability, and growth. Headquartered in Canada,
          we empower individuals and businesses to tap into the world of
          cryptocurrency mining with confidence and simplicity.
        </p>

        <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold pt-3 leading-[22px] sm:leading-[24px] lg:leading-[25px]">
          Join us today and experience a smarter way to mine — where your
          success is powered by precision, innovation, and community.
        </p>
      </div>

      {/* Right Content with Social Icons */}
      <div className="px-0 lg:px-10 py-4 lg:py-10 flex lg:justify-end justify-center">
        <div className="flex gap-3 mt-2 sm:mt-3">
          {/* TikTok */}
          <Link
            href="https://www.tiktok.com/@ecominex.net"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5e7467a4] hover:bg-[#22c55e] transition-all p-2.5 sm:p-3 rounded-full"
          >
            <Music2 size={20} strokeWidth={1.8} />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/ecominex/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5e7467a4] hover:bg-[#22c55e] transition-all p-2.5 sm:p-3 rounded-full"
          >
            <Instagram size={20} strokeWidth={1.8} />
          </Link>

          {/* Twitter */}
          <Link
            href="https://x.com/EcominexN59053"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5e7467a4] hover:bg-[#22c55e] transition-all p-2.5 sm:p-3 rounded-full"
          >
            <Twitter size={20} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
};

export default HeroAbout;
