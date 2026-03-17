import Link from "next/link";
import { footerColumns } from "@/mock/data";

export default function Footer() {
  return (
    <footer className="bg-[#080145] border-t-2 border-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="i-REMIT" className="h-14 w-auto" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Remittance infrastructure for the modern fintech era.
            </p>
            <div className="flex gap-3 mt-6">
              {["X", "in", "GH"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 border-2 border-white/20 flex items-center justify-center text-white/40 text-xs font-bold hover:border-[#81ad10] hover:text-[#81ad10] transition-colors cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-white/40 text-sm hover:text-[#81ad10] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/40 text-sm hover:text-[#81ad10] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2026 I-Remit. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built for fintech. Powered by innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
