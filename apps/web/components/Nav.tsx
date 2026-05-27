"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-blue.svg" alt="Wism.io" width={36} height={36} />
            <span className="text-xl font-bold text-black">Wism<span className="text-[#204390]">.io</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-[#204390] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex bg-[#204390] hover:bg-[#106EBE] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Get in touch
          </Link>

          <button
            className="md:hidden p-2 text-gray-500"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm font-medium text-gray-600 hover:text-[#204390]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-[#204390] text-white text-sm font-semibold px-5 py-2.5 rounded-md text-center"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
