import SlideWrapper from "../wrappers/SlideWrapper";

export default function CTASection() {
  return (
    <SlideWrapper className="slide-right px-6 md:px-16 py-36 text-center relative overflow-hidden">
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(80,0,255,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 max-w-md mx-auto">
        <h2 className="text-[#EDEDED] text-4xl font-semibold mb-5">
          Let's build something worth using.
        </h2>
        <p className="text-responsive-body text-[#EDEDED]/45 mb-10">
          Tell us about your product. We'll respond within one business day with
          a tailored plan.
        </p>
        <button className="gradient-btn text-white font-semibold px-8 py-4 rounded-lg text-responsive-small inline-flex items-center gap-2 hover:shadow-xl hover:shadow-[rgba(80,0,255,0.35)] transition-shadow">
          Start a project →
        </button>
      </div>
    </SlideWrapper>
  );
}
