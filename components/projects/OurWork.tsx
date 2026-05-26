"use client";

import { useState } from "react";

const categories = ["All", "Web", "Mobile", "Branding", "AI"];

const projects = [
  { id: 1, title: "E-commerce App", category: "Web" },
  { id: 2, title: "Mobile Banking", category: "Mobile" },
  { id: 3, title: "Brand Identity", category: "Branding" },
  { id: 4, title: "AI Chatbot", category: "AI" },
  { id: 5, title: "Dashboard UI", category: "Web" },
  { id: 6, title: "Fitness App", category: "Mobile" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      style={{
        padding: "clamp(20px, 5vw, 80px) clamp(24px, 6vw, 64px)",
      }}
    >
      <p
        style={{
          fontSize: "clamp(10px, 1vw, 14px)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#EA00FF",
          marginBottom: "clamp(8px, 1vw, 16px)",
        }}
      >
        Our Work
      </p>

      <div className="md:flex md:justify-between">
        <h2 className="text-3xl font-bold mb-6">Our Projects</h2>

        {/* Filters */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl border transition ${
                active === cat
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-600 hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Title */}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="h-60 rounded-2xl bg-linear-to-br from-[#0b0b2a] to-[#050510]
                       border border-gray-800 hover:scale-[1.02] transition"
          >
            <div className="p-5">
              <p className="text-sm text-gray-400">{project.category}</p>
              <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
