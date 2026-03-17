import { brands } from "@/mock/data";

export default function SocialProof() {
  return (
    <section className="bg-[#080145] border-y-2 border-black py-10 overflow-hidden">
      <p className="text-center text-white/60 text-xs font-bold uppercase tracking-widest mb-8">
        Trusted by fintech companies building global remittance services
      </p>
      <div className="relative">
        <div className="flex animate-marquee gap-12 items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-6 py-2 border-2 border-white/20 text-white/70 font-bold text-sm tracking-wide whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
