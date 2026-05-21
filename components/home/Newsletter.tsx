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
    <section className="w-full px-8 py-16">
      <p className="text-pink-500 font-semibold text-sm mb-3">
        You want to keep in touch?
      </p>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
        Subscribe for the newsletter
      </h2>

      {submitted ? (
        <p className="text-purple-400 text-lg">
          ✓ Abunə oldunuz, təşəkkür edirik!
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 w-full bg-transparent border border-teal-500/50 focus:border-teal-400 outline-none rounded-full px-6 py-3 text-white placeholder-white/30 text-sm transition-colors duration-200"
          />
          <button
            onClick={handleSubscribe}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      )}
    </section>
  );
}