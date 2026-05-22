"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FloatingIcons from "./FloatingIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

function MenuIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/*
        FloatingIcons desktopda navbar-ın yuxarısında görünür.
        Ona görə nav-ı overflow:visible olan bir wrapper içinə alırıq,
        FloatingIcons isə absolute ilə öz yerini tutur.
        Mobilde (md-dən aşağı) FloatingIcons gizlənir.
      */}
      <div className="relative w-full bg-black sticky top-0 z-50">
        {/* FloatingIcons — yalnız desktop, navbar-ın yuxarısında sağda üzür */}
        <div className="hidden md:block">
          <FloatingIcons />
        </div>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-8 pt-10 pb-5">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {/* 🖼️ LOGO */}
            <Image
              src="/logo.png"
              alt="NV Studio"
              width={100}
              height={40}
              priority
            />
            <span className="text-white text-xs tracking-[0.35em] uppercase font-light">
              Studio
            </span>
          </div>

          {/* Center nav pill */}
          <div className="flex items-center gap-1 border border-white/10 rounded-full px-4 py-1.5 bg-black/70 backdrop-blur-xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  active === link.label
                    ? "text-fuchsia-500"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA — FloatingIcons bu düymənin üstündə üzür */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="border border-[#1E00FF] shadow-[0_0_25px_rgba(30,0,255,0.35)] text-white text-sm font-semibold px-7 py-3 rounded-2xl hover:bg-blue-600/10 transition-all duration-300 whitespace-nowrap"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* ── MOBILE NAV ── */}
        <div className="flex md:hidden items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            {/* 🖼️ LOGO */}
            <Image
              src="/logo.png"
              alt="NV Studio"
              width={70}
              height={28}
              priority
            />
            <span className="text-white text-[10px] tracking-[0.3em] uppercase font-light">
              Studio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="border border-[#1E00FF] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-blue-600/10 transition-all duration-300"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-5 pb-6">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    active === link.label
                      ? "text-fuchsia-500 bg-fuchsia-500/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
