"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import SlideWrapper from "../wrappers/SlideWrapper";

type Member = {
  initials: string;
  name: string;
  role: string;
  desc: string;
  gradient: string;
  social: { icon: React.ReactNode; label: string; href: string }[];
};

const teamMembers: Member[] = [
  {
    initials: "NK",
    name: "Nicat Karimov",
    role: "CEO & Founder",
    desc: "Leads the studio vision, product strategy and team culture across all projects.",
    gradient: "linear-gradient(135deg, #5000FF, #7c3aed)",
    social: [
      {
        icon: <FaInstagram size={14} />,
        label: "Instagram",
        href: "https://www.instagram.com/nvstudioo1",
      },
      {
        icon: <FaLinkedin size={14} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nv-studio/",
      },
      { icon: <FaDribbble size={14} />, label: "Dribbble", href: "#" },
    ],
  },
  {
    initials: "VP",
    name: "Vusal Pashayev",
    role: "Lead Developer",
    desc: "Architects scalable systems and leads the frontend and backend engineering teams.",
    gradient: "linear-gradient(135deg, #0891b2, #0e7490)",
    social: [
      {
        icon: <FaInstagram size={14} />,
        label: "Instagram",
        href: "https://www.instagram.com/nvstudioo1",
      },
      {
        icon: <FaLinkedin size={14} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nv-studio/",
      },
      { icon: <FaBehance size={14} />, label: "Behance", href: "#" },
    ],
  },
  {
    initials: "SA",
    name: "Sevinc Aliyeva",
    role: "Head of Design",
    desc: "Drives UI/UX excellence and maintains design consistency across all studio products.",
    gradient: "linear-gradient(135deg, #EA00FF, #c026d3)",
    social: [
      {
        icon: <FaInstagram size={14} />,
        label: "Instagram",
        href: "https://www.instagram.com/nvstudioo1",
      },
      { icon: <FaDribbble size={14} />, label: "Dribbble", href: "#" },
      { icon: <FaBehance size={14} />, label: "Behance", href: "#" },
    ],
  },
  {
    initials: "RM",
    name: "Rauf Mammadov",
    role: "Product Manager",
    desc: "Translates business goals into product roadmaps and keeps delivery on track.",
    gradient: "linear-gradient(135deg, #059669, #0d9488)",
    social: [
      {
        icon: <FaInstagram size={14} />,
        label: "Instagram",
        href: "https://www.instagram.com/nvstudioo1",
      },
      {
        icon: <FaLinkedin size={14} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nv-studio/",
      },
      { icon: <FaDribbble size={14} />, label: "Dribbble", href: "#" },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function OurTeam() {
  return (
    <section
      className="w-full bg-black"
      style={{ padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any }}
        >
          <p className="section-label mb-3">Our Team Structure</p>
          <h2
            className="font-black text-white mb-12"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Meet Our Team
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={item}>
              <div
                className="service-card-v2 group flex flex-col"
                style={{ padding: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                {/* Avatar */}
                <div className="relative mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-xl flex-shrink-0"
                    style={{ background: member.gradient }}
                  >
                    {member.initials}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-black bg-emerald-400"
                    style={{ boxShadow: "0 0 8px rgba(52,211,153,0.6)" }}
                  />
                </div>

                {/* Info */}
                <h3
                  className="text-white font-bold mb-0.5"
                  style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)",
                    color: "#a78bfa",
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="text-white/40 leading-relaxed flex-1"
                  style={{ fontSize: "clamp(0.75rem, 1vw, 0.825rem)" }}
                >
                  {member.desc}
                </p>

                {/* Social icons */}
                <div
                  className="flex gap-2 mt-5 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {member.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 transition-all duration-200"
                      style={{
                        width: 32,
                        height: 32,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
