import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string; // If no href, it's the current page
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-gray-200 border-b border-gray-300">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 overflow-hidden">
        <nav className="flex items-center text-sm overflow-x-auto" aria-label="Breadcrumb">
          <a href="/" className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap">
            Home
          </a>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="mx-2 text-gray-500 flex-shrink-0" size={16} />
              {item.href ? (
                <a href={item.href} className="text-gray-600 hover:text-gray-900 transition whitespace-nowrap">
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900 font-medium whitespace-nowrap">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
