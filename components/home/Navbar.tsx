"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FloatingIcons from "./FloatingIcons";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full bg-black py-8">
      <div className="relative mt-10 max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="NV Studio"
            width={75}
            height={40}
            priority
          />

          <span className="text-white text-sm tracking-[0.35em] uppercase font-light">
            Studio
          </span>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="hidden md:flex items-center gap-2 border border-white/10 rounded-full px-7 py-3 bg-black/60 backdrop-blur-md">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === link.label
                  ? "text-fuchsia-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-center">

          {/* Floating Icons */}
          <FloatingIcons />

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className=" border border-blue-600 text-white text-sm font-semibold px-7 py-3 rounded-2xl hover:bg-blue-600/10 transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}