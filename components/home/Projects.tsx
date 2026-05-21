// Layihə kartlarının məlumatları — öz şəkillərini əlavə et
const projects = [
  {
    id: 1,
    title: "Project One",
    imgSrc: "/projects/project-1.jpg", // 🖼️ öz şəklini qoy
  },
  {
    id: 2,
    title: "Project Two",
    imgSrc: "/projects/project-2.jpg", // 🖼️ öz şəklini qoy
  },
  {
    id: 3,
    title: "Project Three",
    imgSrc: "/projects/project-3.jpg", // 🖼️ öz şəklini qoy
  },
  {
    id: 4,
    title: "Project Four",
    imgSrc: "/projects/project-4.jpg", // 🖼️ öz şəklini qoy
  },
];

export default function Projects() {
  return (
    <section className="w-full px-8 py-16">
      <p className="text-purple-400/80 font-semibold text-sm tracking-wider uppercase mb-3">
        Project
      </p>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-10">
        Selected Projects
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative aspect-square rounded-2xl overflow-hidden bg-purple-950/40 border border-purple-800/20 group cursor-pointer"
          >
            {/* ============================================================
                🖼️  PROJECT CARD IMAGE
                <Image> ilə əvəz et:
                import Image from "next/image";
                <Image src={project.imgSrc} alt={project.title}
                       fill className="object-cover group-hover:scale-105
                       transition-transform duration-500" />
                ============================================================ */}
            <div className="w-full h-full flex items-center justify-center">
              {/* 🖼️ {project.title} şəkli buraya */}
              <span className="text-purple-300/30 font-black text-4xl">NV</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/30 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}