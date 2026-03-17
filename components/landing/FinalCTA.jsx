import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-[#81ad10] border-y-2 border-black py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black leading-tight mb-6">
            Start Building Your Remittance Platform Today
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-black/70 max-w-xl mx-auto mb-10">
            Join 500+ companies already using I-Remit to power their global
            remittance operations.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request-demo"
              className="px-8 py-4 bg-[#080145] text-white font-bold border-2 border-black flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              Request Demo <ArrowRight size={18} />
            </Link>
            <button
              className="px-8 py-4 bg-white text-black font-bold border-2 border-black flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              style={{ boxShadow: "6px 6px 0px 0px #000" }}
            >
              <MessageSquare size={18} /> Talk To Sales
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
