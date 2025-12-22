"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import QuickLinks from "../components/QuickLinks";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/Navbar";

export default function GettingStartedPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" }
    );

    const headings = document.querySelectorAll("h2[id]");
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const tocSections = [
    { id: "three-steps-to-your-first-agent", title: "Three Steps to Your First Agent" },
    { id: "progressive-enhancement", title: "Progressive Enhancement" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      <Breadcrumbs items={[{ label: "Getting Started" }]} />

      {/* Hero */}
      <section className="bg-gray-200 py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 text-gray-900" style={{ fontFamily: '"Momo Trust Display", sans-serif', fontWeight: 400 }}>
            Getting Started
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Create your first Agent Manifest in minutes
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 overflow-hidden">
          <div className="flex gap-8">
            {/* Table of Contents Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 px-4">On This Page</h3>
                <nav className="space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto">
                  {tocSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block px-4 py-2 text-sm transition-colors border-l-2 ${
                        activeSection === section.id
                          ? "border-slate-800 text-slate-900 font-medium bg-gray-50"
                          : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">

          {/* Quick Steps */}
          <div className="mb-16 max-w-full">
            <div className="mb-8">
              <h2 id="three-steps-to-your-first-agent" className="text-2xl md:text-3xl text-gray-900 font-light break-words">Three Steps to Your First Agent</h2>
            </div>
            
            <div className="space-y-8">
              
              {/* Step 1 */}
              <div className="border-l-4 border-slate-800 pl-4 md:pl-6">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 break-words">1. Define Your Agent</h3>
                <p className="text-gray-700 mb-4 break-words">
                  Create a JSON manifest with the <strong>Core Profile</strong> to describe your agent's identity,
                  capabilities, and tools:
                </p>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg overflow-x-auto max-w-full">
                  <pre className="text-xs md:text-sm whitespace-pre-wrap break-all md:whitespace-pre md:break-normal"><code>{`{
  "agentId": "summarizer-v1",
  "agentName": "Document Summarizer",
  "version": "1.0.0",
  "description": "Condenses documents into concise summaries",
  "profiles": ["core"],
  
  "capabilities": [
    {
      "capabilityId": "summarize",
      "type": "summarization",
      "description": "Summarizes text documents",
      "config": {
        "max_length": 500,
        "format": "bullet_points"
      }
    }
  ],
  
  "tools": [
    {
      "toolId": "text-analyzer",
      "name": "Text Analysis Tool",
      "type": "function"
    }
  ]
}`}</code></pre>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-slate-800 pl-4 md:pl-6">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 break-words">2. Validate Your Manifest</h3>
                <p className="text-gray-700 mb-4 break-words">
                  Use the canonical JSON Schema to validate your manifest:
                </p>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg overflow-hidden">
                  <p className="text-sm text-gray-700 mb-2">
                    Download the schema:
                  </p>
                  <code className="block bg-white p-2 md:p-3 rounded text-xs md:text-sm text-slate-800 mb-4 overflow-x-auto break-all">
                    wget https://json-agents.org/Standard/schema/json-agents.json
                  </code>
                  <p className="text-sm text-gray-700 mb-2">
                    Validate with <a href="https://ajv.js.org/" className="text-slate-700 underline">AJV</a> or similar:
                  </p>
                  <code className="block bg-white p-2 md:p-3 rounded text-xs md:text-sm text-slate-800 overflow-x-auto break-all">
                    npx ajv validate -s json-agents.json -d your-agent.json
                  </code>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-slate-800 pl-4 md:pl-6">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 break-words">3. Use in Your Framework</h3>
                <p className="text-gray-700 mb-4 break-words">
                  Load your manifest in any compatible framework:
                </p>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg overflow-x-auto max-w-full">
                  <pre className="text-xs md:text-sm whitespace-pre-wrap break-all md:whitespace-pre md:break-normal"><code>{`// Python example
import json
from your_framework import load_agent

with open('your-agent.json') as f:
    manifest = json.load(f)

agent = load_agent(manifest)
agent.run("Summarize this document...")`}</code></pre>
                </div>
              </div>

            </div>
          </div>

          {/* Progressive Enhancement */}
          <div className="mb-16 max-w-full">
            <h2 id="progressive-enhancement" className="text-2xl md:text-3xl text-gray-900 font-light mb-3 break-words">Progressive Enhancement</h2>
            <p className="text-gray-600 mb-8 break-words">
              Add more profiles as your needs grow
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 md:p-6">
                <div className="mb-4">
                  <code className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-mono text-slate-800">exec</code>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 break-words">Runtime Configuration</h3>
                <p className="text-gray-600 text-sm leading-relaxed break-words">
                  Specify deployment environments, model providers, and resource requirements
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 md:p-6">
                <div className="mb-4">
                  <code className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-mono text-slate-800">gov</code>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 break-words">Governance</h3>
                <p className="text-gray-600 text-sm leading-relaxed break-words">
                  Enable security policies, observability, and compliance features
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 md:p-6">
                <div className="mb-4">
                  <code className="px-2 py-1 bg-white border border-gray-300 rounded text-sm font-mono text-slate-800">graph</code>
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 break-words">Multi-Agent Orchestration</h3>
                <p className="text-gray-600 text-sm leading-relaxed break-words">
                  Define agent networks with conditional routing and message flows
                </p>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <QuickLinks
            links={[
              {
                title: "Browse Examples",
                href: "/examples",
                description: "Explore complete agent manifests showing all profile combinations from minimal to enterprise."
              },
              {
                title: "Schema Reference",
                href: "/schema",
                description: "Review detailed documentation for core schemas, seven standard capabilities, and extensions."
              },
              {
                title: "Full Specification",
                href: "/spec",
                description: "Read the complete normative specification with all technical details and implementation requirements."
              },
              {
                title: "Implementer's Guide",
                href: "/implementers-guide",
                description: "Step-by-step technical guide for integrating JSON Agents into your framework or platform."
              }
            ]}
          />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
