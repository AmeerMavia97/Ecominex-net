// @ts-nocheck

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import {Facebook, Music2, Instagram, Twitter } from "lucide-react";
import legalContent from "../home/legalContent";

const TikTokIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        {...props}
    >
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
    </svg>
);

const LegalModal = ({ title, content }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="block text-gray-300 transition-all duration-300 hover:pl-2 hover:text-green-500">
                    {title}
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-white">
                        {title}
                    </DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">{content}</ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

const HomeFooter = () => {
    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/ecominex" },
        { icon: Twitter, href: "https://x.com/EcominexN59053" },
        { icon: Instagram, href: "https://www.instagram.com/ecominex/" },
        { icon: TikTokIcon, href: "https://www.tiktok.com/@ecominex" },
    ];

    const footerLinks = [
        {
            title: "Company",
            links: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Shop", href: "/shop" },
                { label: "Contact", href: "/contactUs" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Hosting and management", href: "/" },
                { label: "Purchases of machines", href: "/" },
                { label: "Machines", href: "/" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Privacy Policy", href: "/" },
                { label: "Terms of Service", href: "/" },
                { label: "Accessibility", href: "/" },
                { label: "Cookie Policy", href: "/" },
            ],
        },
       
    ];

    return (
        <footer className="relative bg-[#191919] text-white">
            <div className="">
                {/* Top Section */}
                <div className="grid gap-8 md:grid-cols-4 bg-[#191919] pt-14 pb-20 px-16">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-3xl font-bold">Ecomine</span>
                            <div className="-ml-2 flex h-8 w-7 items-center justify-center rounded-full bg-green-500">
                                <span className="text-xl font-bold">X</span>
                            </div>
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="col-span-2 grid grid-cols-3 gap-0">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.isModal ? (
                                                <LegalModal
                                                    title={link.label}
                                                    content={legalContent[link.label]}
                                                />
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block text-gray-300 transition-all duration-300 hover:pl-2 hover:text-green-500 text-[14.5px] font-[500] pr-8"
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-start">
                    <div className="flex gap-3 mt-3 relative z-50">
                         {/* Facebook*/}
                         <Link
                                        href="https://www.facebook.com/ecominex"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#1f1f1f] text-white p-3 rounded-full hover:bg-[#00a63e] transition-all duration-300 hover:scale-110"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </Link>
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
                        <div>
                            <h1 className="font-[600] text-[15.5px] mt-4 text-white">info@ecominex.com</h1>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col items-center justify-center md:flex-row">
                        <p className="text-sm text-center text-white font-[600] md:mb-0">
                            © {new Date().getFullYear()} EcomineX Technologies. All Rights
                            Reserved.
                        </p>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default HomeFooter;
