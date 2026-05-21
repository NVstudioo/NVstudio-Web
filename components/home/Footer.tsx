import Link from "next/link";

const quickLinks = ["Home", "About", "Services", "Contact"];
const services = [
  "Web Development",
  "Mobile Development",
  "UX/UI Design",
  "SEO&Marketing",
  "AI Solutions",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.513-1.914-5.513-5.517 0-3.319 2.324-5.371 5.443-5.371 3.08 0 4.741 1.785 5.148 4.314.086.55.134 1.143.144 1.777H15.5c.172 2.021 1.401 2.722 2.754 2.722 1.224 0 1.944-.529 2.274-1.27L23.726 17zm-5.208-5c-.108-1.48-1.001-2.073-1.999-2.073-1.118 0-1.943.703-2.071 2.073h4.07zM8.501 6c1.386 0 2.344.52 2.856 1.393.379.635.524 1.377.524 2.09 0 1.394-.687 2.408-1.95 2.784 1.549.337 2.473 1.459 2.473 3.098 0 2.354-1.793 3.635-4.45 3.635H0V6h8.501zm-5.38 4.748H7.87c.938 0 1.463-.423 1.463-1.303 0-.82-.56-1.22-1.463-1.22H3.121v2.523zm0 5.134h4.876c1.018 0 1.657-.474 1.657-1.444 0-.944-.666-1.407-1.657-1.407H3.121v2.851z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.404 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.073c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 12.4 2.986 12.1 2.567 12.077c0 .37.03.727.082 1.072zm-2.008-5.26l.016.001c.477.01 4.056.198 7.888-.87-1.41-2.51-2.93-4.623-3.16-4.932-2.26 1.07-3.91 3.08-4.744 5.8zm5.77-7.117c.237.318 1.787 2.43 3.177 4.99 3.02-1.133 4.3-2.853 4.457-3.07C14.44 2.496 13.26 2.1 12 2.1c-1.497 0-2.9.433-4.08 1.182z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a1a] border-t border-white/5 mt-8">
      <div className="px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="md:col-span-1">
          {/* ============================================================
              🖼️  FOOTER LOGO — NV Studio loqosu
              Məs: <Image src="/logo.svg" alt="NV Studio"
                     width={100} height={36} className="mb-4" />
              ============================================================ */}
          <div className="flex items-center gap-2 mb-4">
            {/* 🖼️ Footer logo buraya */}
            <span className="text-white font-black text-xl">NV</span>
            <span className="text-white text-xs tracking-[0.25em] font-light uppercase">
              STUDIO
            </span>
          </div>

          <p className="text-white/50 text-sm leading-relaxed mb-6">
            We build digital products that drive
            <br />
            real impact.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-purple-600/30 hover:border-purple-500/30 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5">Quick links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-5">Contact us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              info@nvstudios.com
            </li>
            <li className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75z" />
              </svg>
              +994 50 123 45 67
            </li>
            <li className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
              </svg>
              Baku, Azerbaijan
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">
          Copyright © 2026 NV Studios.
        </p>
        <div className="flex items-center gap-1 text-xs text-white/30">
          <span>All Rights Reserved |</span>
          <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
            Terms and Conditions
          </Link>
          <span>|</span>
          <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}