"use client";

import { Github, Code, CheckCircle } from "lucide-react";

export default function ValidatorsPage() {
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
            <CheckCircle size={48} className="text-white" strokeWidth={2} />
            <h1 className="text-5xl font-bold text-white">Validators</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Production-ready validators for Python and TypeScript. Validate JSON Agents manifests, policy expressions, and ajson:// URIs.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="w-full max-w-4xl mx-auto px-8">

          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Validators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Python Validator */}
              <div className="border-2 border-slate-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code size={32} className="text-slate-900" />
                  <h3 className="text-2xl font-bold text-gray-900">Python</h3>
                </div>
                <p className="text-gray-700 mb-4">Full-featured validator with CLI and programmatic API</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm mb-4">pip install jsonagents</div>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>✓ JSON Schema validation</li>
                  <li>✓ Policy expression testing</li>
                  <li>✓ URI validation (ajson://)</li>
                  <li>✓ 100% test coverage</li>
                </ul>
                <a href="https://github.com/JSON-AGENTS/Jsonagents/tree/main/validators/python" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>

              {/* TypeScript Validator */}
              <div className="border-2 border-slate-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code size={32} className="text-slate-900" />
                  <h3 className="text-2xl font-bold text-gray-900">TypeScript</h3>
                </div>
                <p className="text-gray-700 mb-4">Type-safe validator for Node.js and browser environments</p>
                <div className="bg-slate-900 text-white p-4 rounded font-mono text-sm mb-4">npm install @jsonagents/validator</div>
                <ul className="space-y-2 text-sm text-gray-700 mb-4">
                  <li>✓ JSON Schema validation</li>
                  <li>✓ Policy expression testing</li>
                  <li>✓ URI validation (ajson://)</li>
                  <li>✓ 100% test coverage</li>
                </ul>
                <a href="https://github.com/JSON-AGENTS/Jsonagents/tree/main/validators/typescript" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>

            </div>
          </div>

          {/* Python Usage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Python Usage</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
                <div className="mb-2"># Install from source</div>
                <div className="text-green-400">cd validators/python</div>
                <div className="text-green-400">pip install -e .</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CLI Usage</h3>
              <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
                <div className="mb-2"># Validate a manifest</div>
                <div className="text-green-400 mb-4">jsonagents validate manifest.json</div>

                <div className="mb-2"># Test policy expression</div>
                <div className="text-green-400 mb-4">jsonagents test-policy "user.role === 'admin'"</div>

                <div className="mb-2"># Validate URI</div>
                <div className="text-green-400">jsonagents test-uri ajson://example.com/agent/v1</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programmatic API</h3>
              <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-green-400 whitespace-pre">{"from jsonagents import validate_manifest, test_policy, validate_uri\n\n# Validate manifest\nresult = validate_manifest('manifest.json')\nif result['valid']:\n    print(\"Manifest is valid!\")\n\n# Test policy\nis_valid = test_policy(\"user.role === 'admin'\", {\"user\": {\"role\": \"admin\"}})\n\n# Validate URI\nuri_result = validate_uri(\"ajson://example.com/agent/v1\")"}</pre>
              </div>
            </div>
          </div>

          {/* TypeScript Usage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">TypeScript Usage</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
                <div className="mb-2"># Install from source</div>
                <div className="text-green-400">cd validators/typescript</div>
                <div className="text-green-400">npm install</div>
                <div className="text-green-400">npm run build</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CLI Usage</h3>
              <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
                <div className="mb-2"># Validate a manifest</div>
                <div className="text-green-400 mb-4">npm run cli validate manifest.json</div>

                <div className="mb-2"># Test policy expression</div>
                <div className="text-green-400 mb-4">npm run cli test-policy "user.role === 'admin'"</div>

                <div className="mb-2"># Validate URI</div>
                <div className="text-green-400">npm run cli test-uri ajson://example.com/agent/v1</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programmatic API</h3>
              <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-green-400 whitespace-pre">{"import { validateManifest, testPolicy, validateUri } from '@jsonagents/validator';\n\n// Validate manifest\nconst result = await validateManifest('./manifest.json');\nif (result.valid) {\n  console.log('Manifest is valid!');\n}\n\n// Test policy\nconst isValid = testPolicy(\"user.role === 'admin'\", { user: { role: 'admin' } });\n\n// Validate URI\nconst uriResult = validateUri('ajson://example.com/agent/v1');"}</pre>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schema Validation</h3>
                <p className="text-gray-700">Validate manifests against JSON Schema 2020-12 with detailed error reporting</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Testing</h3>
                <p className="text-gray-700">Test policy expressions with custom context objects to verify access control rules</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">URI Validation</h3>
                <p className="text-gray-700">Validate and parse ajson:// URIs according to the specification</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Coverage</h3>
                <p className="text-gray-700">Both validators have comprehensive test suites with 100% code coverage</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">CLI & API</h3>
                <p className="text-gray-700">Use as command-line tools or integrate programmatically into your applications</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Type Safety</h3>
                <p className="text-gray-700">TypeScript validator provides full type definitions for manifests and results</p>
              </div>

            </div>
          </div>

          {/* Testing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Running Tests</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Python</h3>
                <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400 mb-2">cd validators/python</div>
                  <div className="text-green-400 mb-2">pip install -r requirements.txt</div>
                  <div className="text-green-400">pytest</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">TypeScript</h3>
                <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400 mb-2">cd validators/typescript</div>
                  <div className="text-green-400 mb-2">npm install</div>
                  <div className="text-green-400">npm test</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-3">
              <a href="https://github.com/JSON-AGENTS/Jsonagents/tree/main/validators" className="flex items-center gap-2 text-blue-600 hover:underline">
                <Github size={20} />
                View validators source code on GitHub
              </a>
              <a href="/cli" className="text-blue-600 hover:underline block">→ Check out the CLI Tool</a>
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
const isValid = testPolicy("user.role === 'admin'", { user: { role: 'admin' } });

// Validate URI
const uriResult = validateUri('ajson://example.com/agent/v1');`}</pre>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schema Validation</h3>
                <p className="text-gray-700">Validate manifests against JSON Schema 2020-12 with detailed error reporting</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Policy Testing</h3>
                <p className="text-gray-700">Test policy expressions with custom context objects to verify access control rules</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">URI Validation</h3>
                <p className="text-gray-700">Validate and parse ajson:// URIs according to the specification</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Coverage</h3>
                <p className="text-gray-700">Both validators have comprehensive test suites with 100% code coverage</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">CLI & API</h3>
                <p className="text-gray-700">Use as command-line tools or integrate programmatically into your applications</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Type Safety</h3>
                <p className="text-gray-700">TypeScript validator provides full type definitions for manifests and results</p>
              </div>

            </div>
          </div>

          {/* Testing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Running Tests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Python</h3>
                <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400 mb-2">cd validators/python</div>
                  <div className="text-green-400 mb-2">pip install -r requirements.txt</div>
                  <div className="text-green-400">pytest</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">TypeScript</h3>
                <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400 mb-2">cd validators/typescript</div>
                  <div className="text-green-400 mb-2">npm install</div>
                  <div className="text-green-400">npm test</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-3">
              <a href="https://github.com/JSON-AGENTS/Jsonagents/tree/main/validators" className="flex items-center gap-2 text-blue-600 hover:underline">
                <Github size={20} />
                View validators source code on GitHub
              </a>
              <a href="/cli" className="text-blue-600 hover:underline block">
                → Check out the CLI Tool
              </a>
              <a href="/getting-started" className="text-blue-600 hover:underline block">
                → Getting Started Guide
              </a>
              <a href="/schema" className="text-blue-600 hover:underline block">
                → View JSON Schema
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-6 pb-8 border-t">
        <div className="w-full max-w-3xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-600">
            Part of the <a href="/" className="text-blue-600 hover:underline">JSON Agents</a> specification
          </p>
        </div>
      </footer>
    </div>
  );
}
