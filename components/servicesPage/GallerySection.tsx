import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="px-6 md:px-16 py-20">
      <p className="section-label mb-3">Digital Moments</p>
      <h2 className="text-responsive-h1 font-bold mb-10 text-[#EDEDED]">
        Our Visual Process
      </h2>
      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-full border border-[rgba(80,0,255,0.3)] text-[#EDEDED]/50 flex items-center justify-center hover:border-[#5000FF] transition flex-shrink-0 text-lg">
          ‹
        </button>
        <div className="flex gap-4 flex-1">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex-1 aspect-square rounded-xl bg-[rgba(80,0,255,0.07)] border border-[rgba(80,0,255,0.18)] overflow-hidden relative"
            >
              <Image
                src={`/gallery-${n}.png`}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <button className="w-9 h-9 rounded-full border border-[rgba(80,0,255,0.3)] text-[#EDEDED]/50 flex items-center justify-center hover:border-[#5000FF] transition flex-shrink-0 text-lg">
          ›
        </button>
      </div>
    </section>
  );
}
