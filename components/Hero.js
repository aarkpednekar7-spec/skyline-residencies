export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <div>
        <span className="inline-block mb-4 px-3 py-1 text-sm rounded-lg bg-[var(--card)] text-[var(--muted)]">
          Now Launching — Phase II
        </span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to{" "}
          <span className="text-[var(--accent)]">Skyline Residencies</span>
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
          Premium 2 & 3 BHK apartments with world-class amenities and seamless
          city connectivity.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium hover:opacity-90"
          >
            Book a Site Visit
          </a>
          <a
            href="#plans"
            className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
