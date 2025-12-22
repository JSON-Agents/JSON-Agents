"use client";

import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          JSON Agents
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/getting-started" className="text-white hover:text-gray-200 text-base font-medium">Getting Started</Link>
          <Link href="/schema" className="text-white hover:text-gray-200 text-base font-medium">Schema</Link>
          <Link href="/docs" className="text-white hover:text-gray-200 text-base font-medium">Docs</Link>
          <a href="https://github.com/JSON-AGENTS/Standard" className="text-white hover:text-gray-200 flex items-center gap-2" aria-label="GitHub">
            <Github size={24} strokeWidth={2} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 py-4 px-4 flex flex-col space-y-4 z-50 shadow-xl">
          <Link href="/getting-started" className="text-white hover:text-gray-200 text-base font-medium block" onClick={() => setIsMenuOpen(false)}>Getting Started</Link>
          <Link href="/schema" className="text-white hover:text-gray-200 text-base font-medium block" onClick={() => setIsMenuOpen(false)}>Schema</Link>
          <Link href="/docs" className="text-white hover:text-gray-200 text-base font-medium block" onClick={() => setIsMenuOpen(false)}>Docs</Link>
          <a href="https://github.com/JSON-AGENTS/Standard" className="text-white hover:text-gray-200 flex items-center gap-2" aria-label="GitHub">
            <Github size={24} strokeWidth={2} />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </nav>
  );
}
