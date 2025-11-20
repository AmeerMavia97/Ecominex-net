import React from "react";
import FAQSection from "@/components/home2/FaqSection";
import LocationSection from "@/components/contactUs/Map";
import FaqSection from "@/components/contactUs/FaqSection";
import ContactForm from "@/components/contactUs/conatactForm";
import LandingLayout from "@/components/Layouts/LandingLayout";
import HomeContactSection from "@/components/home2/ContactSection";

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



function page() {
  return (
    <div>
      <LandingLayout>
        <ContactForm />
        <div className="overflow-hidden relative bg-[#111111] px-14">
          <HomeContactSection />
          <FAQSection FAQS={FAQS}></FAQSection>
        </div>
        <LocationSection />
        <FaqSection />

      </LandingLayout>
    </div>
  );
}

export default page;
