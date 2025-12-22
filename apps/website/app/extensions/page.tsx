'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github.css';
import { Github } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function ExtensionsPage() {
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    fetch('/Standard/docs/extensions.md')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load extensions doc');
        return res.text();
      })
      .then(text => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load extensions.md:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    const headings = document.querySelectorAll('h2[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [markdown]);

  const tocSections = [
    { id: '1-purpose', title: '1. Purpose' },
    { id: '2-principles', title: '2. Principles' },
    { id: '3-basic-usage', title: '3. Basic Usage' },
    { id: '4-typed-extensions', title: '4. Typed Extensions' },
    { id: '5-common-use-cases', title: '5. Common Use Cases' },
    { id: '6-example-persistent-memory-extension', title: '6. Example: Persistent Memory Extension' },
    { id: '7-example-audit-extension-schema', title: '7. Example: Audit Extension Schema' },
    { id: '8-declaring-extension-registries', title: '8. Declaring Extension Registries' },
    { id: '9-validation-rules', title: '9. Validation Rules' },
    { id: '10-security-considerations', title: '10. Security Considerations' },
    { id: '11-future-proofing', title: '11. Future-Proofing' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-200 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl text-gray-900 mb-4" style={{ fontFamily: '"Momo Trust Display", sans-serif', fontWeight: 400 }}>
            Extensions Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Safely extend JSON Agents using the x-* namespace and structured extension definitions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="w-full max-w-7xl mx-auto px-8">
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
            <article className="prose prose-slate max-w-none flex-1 min-w-0">
              <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeRaw, rehypeHighlight]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl font-light text-gray-900 mb-6 mt-12" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-light text-gray-900 mb-4 mt-10" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-normal text-gray-900 mb-3 mt-8" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="text-xl font-medium text-gray-800 mb-2 mt-6" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-slate-700 underline hover:text-slate-900" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-gray-700" {...props} />
                ),
                code: ({ node, inline, ...props }: any) =>
                  inline ? (
                    <code className="bg-gray-100 text-sm px-2 py-1 rounded text-gray-900 whitespace-nowrap" {...props} />
                  ) : (
                    <code className="block bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm" {...props} />
                  ),
                pre: ({ node, ...props }) => (
                  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border border-gray-300" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-gray-100" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-900" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed align-top" {...props} />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="my-8 border-gray-300" {...props} />
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
        </div>
      </section>
    </div>
  );
}
