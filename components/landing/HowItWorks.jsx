import { howItWorksSteps } from "@/mock/data";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  return (
    <section className="bg-[#080145] border-y-2 border-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              How It Works
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              Three simple steps to launch your global remittance business.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-[#81ad10]/30" />

          {howItWorksSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 160}>
              <div className="text-center relative">
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 bg-[#080145] border-2 border-[#81ad10] flex items-center justify-center relative z-10"
                    style={{ boxShadow: "0 0 0 4px rgba(129, 173, 16, 0.2)" }}
                  >
                    <s.icon size={28} className="text-[#81ad10]" />
                  </div>
                </div>
                <span className="text-[#81ad10] font-extrabold text-sm">
                  {s.step}
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2 mb-3">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
