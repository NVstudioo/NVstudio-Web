"use client";
import { useFadeInOnScroll } from "@//hooks/useFadeInOnScroll";

export default function StartProject() {
  const ref = useFadeInOnScroll();
  return (
    <section
      ref={ref as React.Ref<HTMLElement>}
      className="w-full py-20 px-5 bg-linear-to-br from-[#1E123D] to-[#0A0418] mt-10 text-center relative -bottom-8"
    >
      <h2 className="font-bold tex-2xl md:text-3xl">
        Let’s build something worth using.
      </h2>
      <p className="font-light mt-5 text-sm md:w-[40%] mx-auto">
        Tell us about your product. We’ll respond within one business day with a
        tailored plan.
      </p>
      <button className="mt-5 bg-[#5000FF] border-0 px-5 py-2 rounded-md cursor-pointer hover:opacity-80 duration-200">
        Start Project →
      </button>
    </section>
  );
}
