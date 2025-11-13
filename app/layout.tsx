import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loading";
import TawkToChat from "@/components/TawkToChat";
import { futura, mont } from "./font"; 

export const metadata: Metadata = {
  title: "CLAPIT SOLUTIONS - AI-Powered Development and Branding Agency",
  description:
    "CLAPIT SOLUTIONS combines AI-driven development and strategic branding expertise to turn your vision into lasting success. We deliver innovative software solutions and impactful brand experiences tailored for growth.",
  keywords:
    "AI development, branding, software development, brand strategy, CLAPIT SOLUTIONS, AI-powered agency, AI-powered development, AI-powered branding, AI-powered agency, AI-powered software development, AI-powered brand strategy, AI-powered agency, AI-powered development, AI-powered branding, AI-powered agency, AI-powered software development, AI-powered brand strategy, AI-powered agency, AI-powered development, AI-powered branding, AI-powered agency, AI-powered software development, AI-powered brand strategy"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${futura.variable} ${mont.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Loader />
        <div className="lg:block md:block hidden">
          <CustomCursor />
        </div>
        <SmoothScroll>
          <Header />

          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
        {/* <TawkToChat /> */}
      </body>
    </html>
  );
}
