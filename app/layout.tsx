import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/component/home/navbar/nav-container";
import FooterPage from "@/component/home/footer/page";
import ScrollToTop from "@/component/helper/scroll-to-top";

const interFont = Inter({
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corporate Landing Page",
  description: "A modern corporate landing page built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased bg-[#1F242C]`}
      >
        <NavContainer />
        {children}
        <FooterPage />
        <ScrollToTop />
      </body>
    </html>
  );
}
