"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/mock/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b-2 border-black flex items-center px-6 lg:px-12">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="i-REMIT" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={link === "Contact" ? "/contact" : `/#${link.toLowerCase()}`}
              className="px-3 py-2 text-sm font-semibold text-black hover:bg-[#81ad10]/10 transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/request-demo"
            className="px-5 py-2.5 bg-[#81ad10] text-black text-sm font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none inline-block"
            style={{ boxShadow: "4px 4px 0px 0px #000" }}
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b-2 border-black p-6 flex flex-col gap-3 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={link === "Contact" ? "/contact" : `/#${link.toLowerCase()}`}
              className="text-base font-semibold text-black py-2 border-b border-gray-200"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/request-demo"
              className="px-5 py-2.5 bg-[#81ad10] text-black text-sm font-bold border-2 border-black inline-block"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
