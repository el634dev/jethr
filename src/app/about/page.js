import React from "react";

import AboutSection from "@/components/About/AboutSection";
import AboutSectionTwo from "@/components/About/AboutSection2";
import Breadcrumb from "../../components/Extra/Breadcrumb";

// export const metadata = {
//     title: "About Page | JetHR",
//     description: "About JetHR, the world's best travel automation tool"
// }

export default function About() {
    return (
        <>
            <Breadcrumb
                pageName="About Us"
                description="JetHR was created by a developer who saw a need for automating human resources tasks, one of those was travel management."
            />
            <AboutSection />
            <AboutSectionTwo />
        </>
    )
}