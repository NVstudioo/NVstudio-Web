import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScroolToTop from "@/components/ScroolToTop";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NV Studio | Digital Agency Baku",
  description:
    "NV Studio MMC — Premium digital agency in Baku, Azerbaijan. We build web apps, mobile apps, AI solutions and brand identities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <LenisProvider>
        <ScroolToTop />
        <body className="min-h-full max-w-10xl mx-auto flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </body>
      </LenisProvider>
    </html>
  );
}
