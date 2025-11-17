// @ts-nocheck

"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Bitcoin, Instagram, Twitter, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Carousel from "./Carousel";

// Define RootState interface for TypeScript
interface RootState {
    auth: {
        isAuthenticated: boolean;
    };
}

const MiningHeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const router = useRouter();

    // Get authentication state from Redux
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    // Handle button click based on authentication
    const handleStartMiningClick = () => {
        if (isAuthenticated) {
            router.push("/shop/");
        } else {
            router.push("/auth/signin/");
        }
    };

    const slides = [
        {
            title: "Start Mining",
            subtitle: "Today",
            subheader: "",
            description:
                "Your  solution for buying, selling, and mining cryptocurrencies",
            image: "/hh.png",
            stats: [
                {
                    value: "98%",
                    label: "Average Uptime",
                    subtext: "With stable & secure infrastructures",
                },
                {
                    value: "$0.055",
                    prefix: "From",
                    label: "per KW/h",
                    subtext: "The best rates on the market",
                },
                {
                    value: "10MW",
                    label: "Under Management",
                    subtext: "An ever-expanding portfolio of data centers",
                },
                {
                    value: "“20,000+",
                    label: "Machines Sold",
                    subtext: "We sell and deliver worldwide",
                },
            ],
        },
    ];

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setTimeout(() => setIsAnimating(false), 700);
        }
    };

    return (
        <>
            <section className=" py-20">
                <div className="">
                    <div className="text-white flex flex-col gap-4">
                        <div className="flex items-center justify-between leading-[60px]">
                            <h1 className="font-[600] text-[60px]">Start Mining Today </h1>
                            <div className="flex gap-2.5 mt-3">
                                <div className='absolute overflow-hidden bg-[#22c55e] -right-10 top-30 blur-[139px]  h-[350px] w-[208px]'></div>
                                <div className="flex gap-3 mt-3 relative z-50">
                                    {/* TikTok */}
                                    <Link
                                        href="https://www.tiktok.com/@ecominex.net"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#1f1f1f] text-white px-2.5 flex items-center rounded-full hover:bg-[#00a63e] transition-all duration-300 hover:scale-110"
                                    >
                                        <svg viewBox="0 0 256 256" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#25F4EE" d="M170 80c11 8 24 13 37 14v32c-14-1-27-5-39-12v57c0 36-29 65-65 65s-65-29-65-65 29-65 65-65c5 0 9 .6 13 1v34c-4-2-9-3-14-3-18 0-32 14-32 32s14 32 32 32 32-14 32-32V32h36c2 21 13 39 32 48z" />
                                            <path fill="#FE2C55" d="M160 80c11 8 24 13 37 14v32c-14-1-27-5-39-12v57c0 36-29 65-65 65s-65-29-65-65 29-65 65-65c5 0 9 .6 13 1v34c-4-2-9-3-14-3-18 0-32 14-32 32s14 32 32 32 32-14 32-32V32h30v6c2 19 12 35 33 42z" />
                                            <path fill="#fff" d="M165 81c11 8 24 13 38 14v32c-15-1-28-5-41-12v56c0 34-28 62-62 62s-62-28-62-62 28-62 62-62c4 0 8 .5 12 1v34c-4-2-9-3-14-3-17 0-31 14-31 31s14 31 31 31 31-14 31-31V31h36c1 20 12 38 31 47z" />
                                        </svg>

                                    </Link>

                                    {/* Instagram */}
                                    <Link
                                        href="https://www.instagram.com/ecominex/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#1f1f1f] text-white p-3 rounded-full hover:bg-[#00a63e] transition-all duration-300 hover:scale-110"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </Link>

                                    {/* Twitter (X) */}
                                    <Link
                                        href="https://x.com/EcominexN59053"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#1f1f1f] text-white p-3 rounded-full hover:bg-[#00a63e] transition-all duration-300 hover:scale-110"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <span className="flex items-center gap-2 leading-[40px]">
                            <span className="w-10  h-1 text-white bg-white"></span>
                            <h3 className="text-[34px] tracking-tighter font-[500] italic">Turnkey Solution</h3>
                        </span>
                        <p className="text-[15px] w-[40%] leading-[20px]">Your solution for buying, selling, and mining cryptocurrencies</p>
                        <Link href="/shop">
                            <button className="w-max mt-2 bg-green-500 font-[600] text-[15px] rounded-full px-8 py-2.5 cursor-pointer hover:bg-green-600 hover:scale-105 transition-all duration-300">
                                Let&apos;s Start
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center mt-14 relative !z-50">
                    <div className='absolute overflow-hidden bg-[#22c55e]  blur-[139px]  -left-10 h-[180px] w-[208px]'></div>
                    <div className="grid grid-cols-2 gap-4 mt-4 relative z-50 w-[47%]">
                        <div className="bg-[#292929]  py-5.5 rounded-[10px] pl-6 flex flex-col justify-center">
                            <h3 className="text-green-500 font-[550] leading-[38px] text-[30px]">98%</h3>
                            <h6 className="font-[550] text-white text-[16px] leading-[34px]">Average Uptime</h6>
                            <p className="font-[400] text-[#d5d5d5] text-[13.5px] w-[80%]  leading-[18px]">With stable & secure infrastructures</p>
                        </div>
                        <div className="bg-[#292929]  py-5.5 rounded-[10px] pl-6 flex flex-col justify-center gap-0.5">
                            <h3 className="text-green-500 font-[550] leading-[32px] text-[18px]">From
                                <span className="text-[27px]"> $0.02</span></h3>
                            <h6 className="font-[550] text-white text-[16.5px] leading-[34px]">per KW/h</h6>
                            <p className="font-[400] text-[#d5d5d5] text-[13.5px] w-[80%]  leading-[18px]">The best rates on the market.</p>
                        </div>
                        <div className="bg-[#292929] py-6 rounded-[10px] flex flex-col gap-1  pl-6">
                            <h3 className="text-green-500 font-[550] leading-[38px] text-[28px]">10MW</h3>
                            <h6 className="font-[550] text-white text-[16.5px] leading-[22px] w-[%]">Under Management</h6>
                            <p className="font-[400] text-[#d5d5d5] text-[13.5px] w-[80%]  leading-[18px]">An ever-expanding portfolio of data centers.</p>
                        </div>
                        <div className="bg-[#292929]  py-5.5 rounded-[10px] pl-6 flex flex-col justify-center">
                            <h3 className="text-green-500 font-[550] leading-[38px] text-[30px]">20,000+</h3>
                            <h6 className="font-[550] text-white text-[16.5px] leading-[34px]">Machines Sold</h6>
                            <p className="font-[400] text-[#d5d5d5] text-[13.5px] w-[80%]  leading-[18px]">We sell and deliver worldwide</p>
                        </div>
                    </div>
                    <div className="absolute right-0 -top-28 z-20">
                        <Carousel />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MiningHeroSlider;
