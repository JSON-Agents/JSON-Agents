"use client";

import { Github } from "lucide-react";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 py-20 md:py-32">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            JSON Agents
          </h1>

          <p className="text-base md:text-lg text-white mb-8 leading-relaxed">
            A universal JSON specification for AI agents
          </p>

          <a
            href="/docs"
            className="inline-block px-6 py-3 bg-white text-slate-900 text-sm font-bold rounded hover:bg-gray-100 transition"
          >
            READ MORE
          </a>
        </div>
      </section>

      {/* Four Columns */}
      <section className="py-10 bg-gray-100">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex flex-col text-center">
              <h2 className="text-2xl mb-5 text-gray-900 font-light">Portable Agent Manifest</h2>
              <p className="text-gray-700 mb-7 leading-relaxed flex-grow text-base">
                JSON Agents defines the PAM specification for describing AI agents in a portable, schema-driven format.
              </p>
              <div>
                <a
                  href="/getting-started"
                  className="inline-block px-8 py-2 border border-gray-400 text-gray-700 text-xs font-medium uppercase tracking-wider rounded hover:bg-gray-50 transition whitespace-nowrap"
                >
                  GET STARTED
                </a>
              </div>
            </div>

            <div className="flex flex-col text-center">
              <h2 className="text-2xl mb-5 text-gray-900 font-light">Schema & Examples</h2>
              <p className="text-gray-700 mb-7 leading-relaxed flex-grow text-base">
                Explore JSON Schema 2020-12 validated manifests, 7 standard capabilities, and example implementations.
              </p>
              <div>
                <a
                  href="/schema"
                  className="inline-block px-8 py-2 border border-gray-400 text-gray-700 text-xs font-medium uppercase tracking-wider rounded hover:bg-gray-50 transition whitespace-nowrap"
                >
                  VIEW SCHEMAS
                </a>
              </div>
            </div>

            <div className="flex flex-col text-center">
              <h2 className="text-2xl mb-5 text-gray-900 font-light">CLI Tool</h2>
              <p className="text-gray-700 mb-7 leading-relaxed flex-grow text-base">
                Command-line tool for validation, conversion, formatting, and testing manifests.
              </p>
              <div>
                <a
                  href="/cli"
                  className="inline-block px-8 py-2 border border-gray-400 text-gray-700 text-xs font-medium uppercase tracking-wider rounded hover:bg-gray-50 transition whitespace-nowrap"
                >
                  VIEW CLI
                </a>
              </div>
            </div>

            <div className="flex flex-col text-center">
              <h2 className="text-2xl mb-5 text-gray-900 font-light">Validators</h2>
              <p className="text-gray-700 mb-7 leading-relaxed flex-grow text-base">
                Production-ready validators for Python and TypeScript.
              </p>
              <div>
                <a
                  href="/validators"
                  className="inline-block px-8 py-2 border border-gray-400 text-gray-700 text-xs font-medium uppercase tracking-wider rounded hover:bg-gray-50 transition whitespace-nowrap"
                >
                  VIEW VALIDATORS
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-6 pb-8">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 text-center">
          <a
            href="https://github.com/Json-Agents/Standard"
            className="inline-flex items-center gap-2 px-8 py-2 border border-gray-400 text-gray-700 text-xs font-medium uppercase tracking-wider rounded hover:bg-gray-50 transition whitespace-nowrap"
          >
            <Github size={16} strokeWidth={2} />
            VIEW ON GITHUB
          </a>
          <p className="text-sm text-gray-600 mt-6 mb-2 leading-relaxed">
            Define agents, capabilities, tools, and governance in a single interoperable manifest
          </p>
          <p className="text-xs text-gray-500">
            Framework-agnostic | Schema-validated | Open Source
          </p>
        </div>
      </footer>
    </div>
  );
}
