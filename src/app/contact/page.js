"use client";
import Contact from "@/components/Contact/Contact";
import Breadcrumb from "@/components/Extra/Breadcrumb";

export default function Pricing() {
    return (
        <>
            <Breadcrumb
                pageName="Contact Us"
                description="We offer 24 / 7 via email and we will offer a AI-trained chatbot soon."
            />
        <Contact />
        </>
    )
}