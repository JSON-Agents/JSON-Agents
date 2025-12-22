"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import JsonViewer from "@/components/JsonViewer";
import QuickLinks from "../components/QuickLinks";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/Navbar";

export default function JsonSchemaPage() {
  const [jsonData, setJsonData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/Standard/schema/json-agents.json")
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load schema');
        return res.json();
      })
      .then((data) => {
        setJsonData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load schema:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      <Breadcrumbs items={[
        { label: "Schema", href: "/schema" },
        { label: "JSON Schema Viewer" }
      ]} />

      {/* Hero */}
      <section className="bg-gray-200 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl mb-4 text-gray-900" style={{ fontFamily: '"Momo Trust Display", sans-serif', fontWeight: 400 }}>
            JSON Agents Schema
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            Complete JSON Schema 2020-12 definition for Portable Agent Manifests
          </p>
          <p className="text-sm text-gray-600">
            <code className="bg-white px-2 py-1 rounded">json-agents.json</code>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="w-full max-w-6xl mx-auto px-8">

          {loading ? (
            <div className="text-gray-600">Loading schema...</div>
          ) : error ? (
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">Error loading schema: {error}</p>
            </div>
          ) : (
            <>
              {/* Download Button */}
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-light text-gray-900">Schema Definition</h2>
                <a
                  href="/Standard/schema/json-agents.json"
                  download
                  className="px-4 py-2 bg-slate-800 text-white text-sm rounded hover:bg-slate-700 transition"
                >
                  Download JSON
                </a>
              </div>

              {/* JSON Viewer */}
              <JsonViewer data={jsonData} />

              {/* Schema Stats */}
              {jsonData && (
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                    <div className="text-2xl font-light text-gray-900">
                      {jsonData.$schema ? '2020-12' : 'N/A'}
                    </div>
                    <div className="text-sm text-gray-600">Schema Version</div>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                    <div className="text-2xl font-light text-gray-900">
                      {jsonData.properties ? Object.keys(jsonData.properties).length : 0}
                    </div>
                    <div className="text-sm text-gray-600">Top-Level Properties</div>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                    <div className="text-2xl font-light text-gray-900">
                      {jsonData.required ? jsonData.required.length : 0}
                    </div>
                    <div className="text-sm text-gray-600">Required Fields</div>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                    <div className="text-2xl font-light text-gray-900">
                      {jsonData.$defs ? Object.keys(jsonData.$defs).length : 0}
                    </div>
                    <div className="text-sm text-gray-600">Definitions</div>
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <QuickLinks
                links={[
                  {
                    title: "Schema Reference",
                    href: "/schema",
                    description: "Browse the complete schema reference with capabilities, extensions, and message formats"
                  },
                  {
                    title: "Examples",
                    href: "/examples",
                    description: "See real-world agent manifests validated against this schema with all profile examples"
                  },
                  {
                    title: "Implementer's Guide",
                    href: "/implementers-guide",
                    description: "Learn how to validate manifests using this schema with AJV, Python jsonschema, and other tools"
                  },
                  {
                    title: "Getting Started",
                    href: "/getting-started",
                    description: "Quick introduction to JSON Agents with basic examples that conform to this schema"
                  }
                ]}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}
