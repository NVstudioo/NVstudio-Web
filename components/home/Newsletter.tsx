"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    // TODO: API inteqrasiyası buraya
    setSubmitted(true);
  };

  return (
    <section
      className="w-full"
      style={{ padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2rem)" }}
    >
      <p
        className="text-pink-500 font-semibold mb-3"
        style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)" }}
      >
        You want to keep in touch?
      </p>
      <h2
        className="font-black text-white mb-8"
        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
      >
        Subscribe for the newsletter
      </h2>

      {submitted ? (
        <p className="text-purple-400 text-base md:text-lg">
          ✓ Abunə oldunuz, təşəkkür edirik!
        </p>
      ) : (
        /* Stack on mobile, row on sm+ */
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent border border-teal-500/50 focus:border-teal-400 outline-none rounded-full text-white placeholder-white/30 transition-colors duration-200"
            style={{
              fontSize: "clamp(0.8rem, 1.1vw, 0.875rem)",
              padding: "clamp(0.65rem, 1.3vw, 0.875rem) clamp(1rem, 2.5vw, 1.5rem)",
            }}
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#5000FF] hover:bg-purple-700 text-white font-semibold rounded-full transition-colors duration-200 whitespace-nowrap"
            style={{
              fontSize: "clamp(0.8rem, 1.1vw, 0.875rem)",
              padding: "clamp(0.65rem, 1.3vw, 0.875rem) clamp(1.25rem, 2.5vw, 2rem)",
            }}
          >
            Subscribe
          </button>
        </div>
      )}
    </section>
  );
}