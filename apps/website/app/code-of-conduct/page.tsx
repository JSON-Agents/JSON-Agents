'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github.css';
import { Shield } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function CodeOfConductPage() {
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Standard/CODE_OF_CONDUCT.md')
      .then(res => res.text())
      .then(text => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load CODE_OF_CONDUCT.md:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Shield className="mx-auto h-12 w-12 md:h-16 md:w-16 text-slate-800 mb-4" />
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900" style={{ fontFamily: 'Momo Trust Display, serif' }}>
            Code of Conduct
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to fostering an open, welcoming, and inclusive community
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800"></div>
            <p className="mt-4 text-gray-600">Loading code of conduct...</p>
          </div>
        ) : (
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl font-light text-slate-900 mb-6 first:mt-0" style={{ fontFamily: 'Momo Trust Display, serif' }} {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-light text-slate-900 mt-12 mb-4 pb-2 border-b border-gray-300" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-light text-slate-900 mt-8 mb-3" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="text-xl font-medium text-slate-900 mt-6 mb-2" {...props} />
                ),
                h5: ({ node, ...props }) => (
                  <h5 className="text-lg font-medium text-slate-900 mt-4 mb-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a className="text-slate-700 underline hover:text-slate-900" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="ml-4" {...props} />
                ),
                code: ({ node, className, children, ...props }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 whitespace-nowrap" {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ node, ...props }) => (
                  <pre className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto mb-4" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-gray-300" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-gray-50" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-900" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 leading-relaxed align-top" {...props} />
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
