import Image from "next/image";

const projects = [
  { id: 1, title: "Project One",   imgSrc: "/projects/project-1.jpg" },
  { id: 2, title: "Project Two",   imgSrc: "/projects/project-2.jpg" },
  { id: 3, title: "Project Three", imgSrc: "/projects/project-3.jpg" },
  { id: 4, title: "Project Four",  imgSrc: "/projects/project-4.jpg" },
];

export default function Projects() {
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <p
        className="text-purple-400/80 font-semibold tracking-widest uppercase mb-3"
        style={{ fontSize: "clamp(0.7rem, 1vw, 0.8rem)" }}
      >
        Project
      </p>
      <h2
        className="font-black text-white mb-8 md:mb-10"
        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
      >
        Selected Projects
      </h2>

      {/* 2 col mobile, 4 col desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative aspect-square rounded-2xl overflow-hidden bg-purple-950/40 border border-purple-800/20 group cursor-pointer"
          >
            {/* ============================================================
                🖼️  PROJECT CARD IMAGE
                Əvəz et:
                <Image src={project.imgSrc} alt={project.title}
                       fill className="object-cover group-hover:scale-105
                       transition-transform duration-500" />
                ============================================================ */}
            <div className="w-full h-full flex items-center justify-center">
              {/* 🖼️ {project.title} şəkli buraya */}
              <span className="text-purple-300/20 font-black" style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}>
                NV
              </span>
            </div>
            <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/30 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}