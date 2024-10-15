import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Tool from "@/components/Tool/Tool";
import Agency from "@/components/Agency/Agency";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JetHR",
  description: "Tool to automate all of your business travel needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <Hero />
        {children}
        <Tool />
        <Agency />
      </body>
    </html>
  );
}
