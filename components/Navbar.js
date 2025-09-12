"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "backdrop-blur bg-black/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="font-bold text-lg text-[var(--accent)]">
          🏙 Skyline Residencies
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#amenities" className="hover:text-[var(--accent)]">Amenities</a>
          <a href="#plans" className="hover:text-[var(--accent)]">Plans</a>
          <a href="#gallery" className="hover:text-[var(--accent)]">Gallery</a>
          <a href="#location" className="hover:text-[var(--accent)]">Location</a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-black font-medium hover:opacity-90"
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
