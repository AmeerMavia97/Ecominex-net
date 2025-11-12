"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Music2, Twitter } from "lucide-react"; // Lucide icons

const HeroAbout = () => {
  return (
    <section
      className="py-30 px-20 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/about-banner.png')" }}
    >

      <div className="grid items-center gap-10 md:grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="px-10 py-10">
          <h4 className="px-1 font-semibold py-1 rounded-2xl w-[40%] bg-[#00c950b3] text-center">
            Some Words About Us
          </h4>
          <h1 className="font-[600] my-5 leading-[65px] text-[60px]">
            About Ecomine X
          </h1>
          <p className="text-[15px] leading-[25px]">
            Your Gateway to Smarter, Stronger Crypto Mining.
            At Ecomine X, we’re more than just a mining company — we’re a global
            community built around innovation, reliability, and growth.
            Headquartered in Canada, we empower individuals and businesses to
            tap into the world of cryptocurrency mining with confidence and
            simplicity.
          </p>
          <p className="text-[15px] font-semibold pt-2 leading-[25px]">
            Join us today and experience a smarter way to mine — where your
            success is powered by precision, innovation, and community.
          </p>
        </div>

        {/* Right Content with Lucide Social Icons */}
        <div className="px-10 py-10">
          <div className="flex justify-end gap-3 mt-3">
            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@ecominex.net"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5e7467a4] hover:bg-[#22c55e] transition-all p-3 rounded-full relative z-50"
            >
              <Music2 size={22} strokeWidth={1.8} />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/ecominex/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5e7467a4] hover:bg-[#22c55e] transition-all p-3 rounded-full relative z-50"
            >
              <Instagram size={22} strokeWidth={1.8} />
            </Link>

            {/* Twitter */}
            <Link
              href="https://x.com/EcominexN59053"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5e7467a4] hover:bg-[#22c55e] transition-all p-3 rounded-full relative z-50"
            >
              <Twitter size={22} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
