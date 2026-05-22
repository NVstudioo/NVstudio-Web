export default function FloatingIcons() {
  return (
    <div className="absolute right-10 -top-16">
      <div className="flex items-center gap-4 border border-white/10 rounded-full px-5 py-2.5 bg-black">

        {/* Search */}
        <button className="text-white/70 hover:text-white transition-all duration-300">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>

        {/* Help */}
        <button className="text-white/70 hover:text-white transition-all duration-300">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <circle cx="12" cy="17" r=".5" fill="currentColor" />
          </svg>
        </button>

        {/* Globe */}
        <button className="text-white/70 hover:text-white transition-all duration-300">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </button>

      </div>
    </div>
  );
}