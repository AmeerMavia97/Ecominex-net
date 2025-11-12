"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = ["/CarouselImage3.jpg" ,"/CarouselImage1.jpg", "/CarouselImage2.webp" ];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-max abol" >

            <div className="flex justify-end gap-3 mb-4">
                <button
                    onClick={prevSlide}
                    className=" bg-[#5e7467a4] text-white p-3 rounded-full "
                >
                    <ArrowLeft className="size-5.5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="  bg-[#5e7467a4] text-white p-3 rounded-full"
                >
                    <ArrowRight className="size-5.5" />
                </button>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className=" flex items-center justify-center"
                >
                    <Image
                        src={images[index]}
                        alt={`carousel-${index}`}
                        width={550}
                        height={300}
                        className="rounded-xl w-[650px] h-[440px]"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

        </div>
    );
}
