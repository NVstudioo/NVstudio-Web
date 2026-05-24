export default function HeroSection() {
  return (
    <section className="relative min-h-[440px] bg-[url('/heroImage.png')] bg-black/50 h-screen bg-cover bg-center max-[640px]:bg-[center_top] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(80,0,255,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          filter: "blur(40px)",
          opacity: 0.7,
        }}
      />
      <div className="relative z-10 max-w-lg">
        <h1 className="text-responsive-hero text-[#EDEDED]">Our Services</h1>
        <p className="text-responsive-body text-[#EDEDED]/55 leading-relaxed mt-5">
          We craft scalable, secure and high-performance software solutions
          tailored for modern businesses.
        </p>
      </div>
    </section>
  );
}
