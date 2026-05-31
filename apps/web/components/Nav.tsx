"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Wism", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceItems = [
  "Dynamics 365 CE",
  "Power Platform",
  "Copilot & AI",
  "Integrations & Advisory",
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-white/10 text-white"
      style={{
        background:
          "repeating-linear-gradient(120deg, transparent 0 120px, rgba(255,255,255,0.04) 120px 124px), linear-gradient(135deg, #2a4b9b 0%, #1d3a7a 55%, #0e1f4a 100%)",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/wism-icon.svg"
            alt="Wism.io"
            width={36}
            height={36}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-lg font-semibold tracking-tight">
            Wism<span className="text-[hsl(195,85%,60%)]">.io</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services with dropdown */}
          <div className="relative group">
            <a
              href="#services"
              className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors py-5"
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white text-foreground rounded-xl border border-border shadow-elegant p-5 min-w-[220px]">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Microsoft Stack
                </p>
                <ul className="space-y-2">
                  {serviceItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Why Wism
          </a>
          <a
            href="#contact"
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all"
        >
          Get in touch
        </a>

        <button
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 py-4">
          <div className="container space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm text-white/80 hover:text-white py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 text-center text-sm font-semibold px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 transition-all"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
