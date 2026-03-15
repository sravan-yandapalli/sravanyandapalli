"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#0B0F19]/70 border-b border-gray-800">
      
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Sravan Kumar<span className="text-blue-400"> yandapalli</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>

          <Link href="/components/SkillsCard" className="hover:text-blue-400 transition">
            Skills
          </Link>

          {/* CTA */}
          <Link href="/projects//contact">
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-medium transition">
            Contact Me
            </button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0B0F19] border-t border-gray-800">
          <div className="flex flex-col items-center gap-6 py-6 text-gray-300">

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>

            <Link href="./components/SkillsCard" onClick={() => setOpen(false)}>
              Skills
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              <button className="bg-blue-500 px-6 py-2 rounded-lg">
                Contact Me
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
