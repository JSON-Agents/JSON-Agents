"use client";

import { Github, Terminal } from "lucide-react";

export default function CLIPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900">
        <div className="w-full max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">
            JSON Agents
          </a>
          <div className="flex space-x-8">
            <a href="/getting-started" className="text-white hover:text-gray-200 text-base font-medium">Getting Started</a>
            <a href="/schema" className="text-white hover:text-gray-200 text-base font-medium">Schema</a>
            <a href="/docs" className="text-white hover:text-gray-200 text-base font-medium">Docs</a>
            <a href="https://github.com/JSON-AGENTS/Standard" className="text-white hover:text-gray-200 flex items-center gap-2" aria-label="GitHub">
              <Github size={24} strokeWidth={2} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 py-16">
        <div className="w-full max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-6">
            <Terminal size={48} className="text-white" strokeWidth={2} />
            <h1 className="text-5xl font-bold text-white">CLI Tool</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A comprehensive command-line tool for working with JSON Agents manifests. Validate, convert, format, and test your agent configurations.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/JSON-AGENTS/Jsonagents/tree/main/packages/cli"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-bold rounded hover:bg-gray-100 transition"
            >
              <Github size={20} />
              VIEW ON GITHUB
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="w-full max-w-4xl mx-auto px-8">
          
          {/* Installation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation</h2>
            <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm mb-4">
              <div className="mb-2"># Install globally</div>
              <div className="text-green-400">npm install -g @jsonagents/cli</div>
              <div className="mt-4 mb-2"># Or use via npx</div>
              <div className="text-green-400">npx @jsonagents/cli --help</div>
            </div>
          </div>

          {/* Commands */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Commands</h2>
            
            <div className="space-y-8">
              {/* Init */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">init</h3>
                <p className="text-gray-700 mb-3">Create a new JSON Agents manifest interactively</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  jsonagents init
                </div>
              </div>

              {/* Validate */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">validate</h3>
                <p className="text-gray-700 mb-3">Validate manifests against the JSON Schema with watch mode support</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  <div className="mb-2">jsonagents validate manifest.json</div>
                  <div className="text-gray-400"># Watch for changes</div>
                  <div>jsonagents validate manifest.json --watch</div>
                </div>
              </div>

              {/* Convert */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">convert</h3>
                <p className="text-gray-700 mb-3">Convert between JSON and YAML formats</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  <div className="mb-2">jsonagents convert manifest.json manifest.yaml</div>
                  <div>jsonagents convert manifest.yaml manifest.json</div>
                </div>
              </div>

              {/* Format */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">format</h3>
                <p className="text-gray-700 mb-3">Format JSON files (pretty-print or minify)</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  <div className="mb-2">jsonagents format manifest.json</div>
                  <div>jsonagents format manifest.json --minify</div>
                </div>
              </div>

              {/* Info */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">info</h3>
                <p className="text-gray-700 mb-3">Display detailed information about a manifest</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  jsonagents info manifest.json
                </div>
              </div>

              {/* Search */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">search</h3>
                <p className="text-gray-700 mb-3">Search for agents in the registry</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  jsonagents search customer-support
                </div>
              </div>

              {/* Fetch */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">fetch</h3>
                <p className="text-gray-700 mb-3">Download manifests from the registry or URL</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  <div className="mb-2">jsonagents fetch agent-id ./output.json</div>
                  <div>jsonagents fetch https://example.com/manifest.json</div>
                </div>
              </div>

              {/* Test Policy */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">test-policy</h3>
                <p className="text-gray-700 mb-3">Test policy expressions with custom context</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  jsonagents test-policy "user.role === 'admin'"
                </div>
              </div>

              {/* Test URI */}
              <div className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">test-uri</h3>
                <p className="text-gray-700 mb-3">Validate and parse ajson:// URIs</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm">
                  jsonagents test-uri ajson://example.com/agent/v1
                </div>
              </div>
            </div>
          </div>

          {/* Templates */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Templates</h2>
            <p className="text-gray-700 mb-6">The <code className="bg-gray-100 px-2 py-1 rounded">init</code> command provides 8 pre-built templates:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Router Agent</h4>
                <p className="text-sm text-gray-600">Routes requests to specialized agents</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Q&A Agent</h4>
                <p className="text-sm text-gray-600">Answers questions from knowledge base</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Summarization Agent</h4>
                <p className="text-sm text-gray-600">Summarizes long documents</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Content Generation</h4>
                <p className="text-sm text-gray-600">Creates various content types</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Retrieval Agent</h4>
                <p className="text-sm text-gray-600">Searches and retrieves information</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Classification Agent</h4>
                <p className="text-sm text-gray-600">Categorizes and tags content</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Extraction Agent</h4>
                <p className="text-sm text-gray-600">Extracts structured data</p>
              </div>
              <div className="border border-gray-300 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-2">Custom Agent</h4>
                <p className="text-sm text-gray-600">Start from scratch</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Interactive manifest creation</strong> with Inquirer prompts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Schema validation</strong> with detailed error reporting using AJV</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Watch mode</strong> for continuous validation during development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Format conversion</strong> between JSON and YAML</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Pretty-print and minify</strong> JSON files</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Policy expression testing</strong> for access control rules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>URI validation</strong> for ajson:// scheme</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>8 pre-built templates</strong> for common agent patterns</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-3">
              <a href="https://github.com/JSON-AGENTS/Jsonagents/tree/main/packages/cli" className="flex items-center gap-2 text-blue-600 hover:underline">
                <Github size={20} />
                View CLI source code on GitHub
              </a>
              <a href="/validators" className="text-blue-600 hover:underline block">→ Check out the Validators</a>
              <a href="/getting-started" className="text-blue-600 hover:underline block">→ Getting Started Guide</a>
              <a href="/schema" className="text-blue-600 hover:underline block">→ View JSON Schema</a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-6 pb-8 border-t">
        <div className="w-full max-w-3xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-600">Part of the <a href="/" className="text-blue-600 hover:underline">JSON Agents</a> specification</p>
        </div>
      </footer>
    </div>
  );
}
