import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { termsSections } from "@/mock/data";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review i-REMIT's terms of service governing access to and use of our remittance infrastructure platform and APIs.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false, follow: false },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-1.5 bg-[#81ad10]" />
      <div className="border-b-2 border-black px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="i-REMIT" className="h-11 w-auto" />
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-black hover:text-[#81ad10] transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <div
          className="inline-block px-4 py-1.5 bg-[#080145] text-white border-2 border-black text-xs font-bold uppercase tracking-wider mb-4"
          style={{ boxShadow: "3px 3px 0px 0px #000" }}
        >
          Legal
        </div>
        <h1 className="text-4xl font-extrabold text-black mb-2">
          Terms of Service
        </h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: March 2026</p>

        <div
          className="border-2 border-black p-8 space-y-8"
          style={{ boxShadow: "6px 6px 0px 0px #000" }}
        >
          {termsSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-extrabold text-black mb-3 border-b-2 border-black pb-2">
                {section.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#080145] py-6 text-center border-t-2 border-black">
        <p className="text-white/30 text-xs">
          © 2026 i-REMIT. All rights reserved.
        </p>
      </div>
    </div>
  );
}
