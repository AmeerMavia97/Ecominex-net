"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
type QA = { q: string; a: string };

const FAQS: QA[] = [
    {
        q: "What is cryptocurrency mining and how does it work?",
        a: "Mining secures a blockchain by validating new blocks of transactions. ASIC/GPUs compete to find a cryptographic nonce; the winner adds a block and receives block rewards + fees.",
    },
    {
        q: "How does EcomineX Hosting ensure the security of investments in mining?",
        a: "Physical access controls, 24/7 monitoring, redundant power, and strict firmware policies. Revenue wallets are non-custodial so you retain control of proceeds.",
    },
    {
        q: "What is the expected return on investment (ROI) from cryptocurrency mining?",
        a: "ROI depends on hardware efficiency, power rate, network difficulty, price, uptime, and pool fees. We provide per-site calculators with conservative assumptions.",
    },
    {
        q: "What is the minimum investment duration with EcomineX Hosting?",
        a: "Typical hosting terms range 6–12 months; earlier exits are possible subject to de-rack and logistics fees.",
    },
    {
        q: "Is it still profitable to mine cryptocurrencies today?",
        a: "With efficient hardware and competitive electricity, yes—though profitability is volatile. Hedging and smart curtailment strategies help smooth returns.",
    },
    {
        q: "How can I get started cryptocurrency mining with EcomineX Hosting?",
        a: "Choose a site, select machines, sign the hosting agreement, and fund the order. We handle deployment; you track performance in the dashboard.",
    },
];

function Item({ qa }: { qa: QA }) {
    const [open, setOpen] = useState(false);
    const id = useId();
    const bodyRef = useRef<HTMLDivElement>(null);

    const maxH = open ? (bodyRef.current?.scrollHeight ?? 0) + 24 : 0;

    return (
        <div
            className="group relative rounded-[18px] "
            role="listitem"
        >
            {/* underline glow */}
            <div className="pointer-events-none absolute left-0 right-0 -bottom-0 h-[1px]
                      bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-1
                      group-[[data-open=true]]:opacity-100 transition-opacity" />
            <button
                data-open={open}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
                <h3 className="text-[18.5px] leading-[25px] font-[500] text-white">
                    {qa.q}
                </h3>
                <span
                    className={`shrink-0 transition-transform duration-200 text-white/90`}
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                    aria-hidden
                >
                    {/* chevron */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </button>

            {/* answer */}
            <div
                id={id}
                ref={bodyRef}
                className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                style={{ maxHeight: maxH, opacity: open ? 1 : 0 }}
            >
                <p className="pb-6 pl-1 text-[13.5px] text-gray-300">
                    {qa.a}
                </p>
            </div>

            {/* subtle divider */}
            <div className="h-px w-full bg-white/5" />
        </div>
    );
}

export default function FAQSection() {
    const left = FAQS.filter((_, i) => i % 2 === 0);
    const right = FAQS.filter((_, i) => i % 2 === 1);

    return (
        <section className="w-full bg-[#111111] pb-16 relative">

            <div className="relative z-50">
                {/* header row */}
                <div className="mb-10 flex items-center justify-between gap-6">
                    <div>
                        <h1 className="text-white font-[600] text-[44px] leading-[53px]">
                            <span className="bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent"> FAQs</span>
                        </h1>
                        <p className="mt-2 text-[14px] w-[75%] text-gray-300">Find the most frequently asked questions about bitcoin mining and our hosting.</p>
                    </div>
                    <Link href="/contactUs">
                        <button className="font-semibold border px-6 py-2.5 text-[13.5px] rounded-full border-green-500 text-green-500 cursor-pointer hover:bg-green-500 hover:text-black transition-all duration-300">
                            Learn More
                        </button>
                    </Link>

                </div>

                {/* two columns */}
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div role="list" className="space-y-6">
                        {left.map((qa, i) => <Item key={i} qa={qa} />)}
                    </div>
                    <div role="list" className="space-y-6">
                        {right.map((qa, i) => <Item key={i} qa={qa} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
