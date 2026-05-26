"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/90 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl md:text-3xl font-black tracking-tight"
        >
          <span className="bg-linear-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            World Explorer
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-zinc-300 font-medium">

          <Link
            href="/"
            className="hover:text-white transition duration-300"
          >
            Home
          </Link>

          <Link
            href="/countries"
            className="hover:text-white transition duration-300"
          >
            Countries
          </Link>

          <Link
            href="/search"
            className="hover:text-white transition duration-300"
          >
            Search
          </Link>

          <Link
            href="/about"
            className="hover:text-white transition duration-300"
          >
            About
          </Link>

        </div>

        <Link
          href="/countries"
          className="hidden md:inline-flex bg-linear-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
        >
          Get Started
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-zinc-300 font-medium bg-black/95">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/countries" onClick={() => setOpen(false)}>
            Countries
          </Link>

          <Link href="/search" onClick={() => setOpen(false)}>
            Search
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link
            href="/countries"
            className="bg-linear-to-r from-blue-500 to-cyan-400 px-5 py-3 rounded-xl text-center font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>

        </div>
      )}

    </nav>
  );
}