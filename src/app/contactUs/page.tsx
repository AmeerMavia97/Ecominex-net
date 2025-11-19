import React from "react";
import FAQSection from "@/components/home2/FaqSection";
import LocationSection from "@/components/contactUs/Map";
import FaqSection from "@/components/contactUs/FaqSection";
import ContactForm from "@/components/contactUs/conatactForm";
import LandingLayout from "@/components/Layouts/LandingLayout";
import HomeContactSection from "@/components/home2/ContactSection";

function page() {
  return (
    <div>
      <LandingLayout>
        <ContactForm />
        <div className="overflow-hidden relative px-14">
          <HomeContactSection />
          <FAQSection></FAQSection>
        </div>
        <LocationSection />
        <FaqSection />

      </LandingLayout>
    </div>
  );
}

export default page;
