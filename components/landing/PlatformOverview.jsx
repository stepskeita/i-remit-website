import { platformModules } from "@/mock/data";
import Reveal from "@/components/Reveal";

export default function PlatformOverview() {
  return (
    <section id="platform" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-14">
            <div
              className="inline-block px-4 py-1.5 bg-[#81ad10]/10 border-2 border-black text-xs font-bold uppercase tracking-wider mb-4"
              style={{ boxShadow: "3px 3px 0px 0px #000" }}
            >
              Platform
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              One Platform To Run Your
              <br />
              Entire Remittance Business
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {platformModules.map((mod, i) => (
            <Reveal key={mod.title} delay={Math.min(i, 7) * 70}>
              <div
                className="bg-white border-2 border-black p-6 transition-all duration-200 hover:-translate-y-1 group"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div
                  className="w-12 h-12 bg-[#81ad10] border-2 border-black flex items-center justify-center mb-4"
                  style={{ boxShadow: "3px 3px 0px 0px #000" }}
                >
                  <mod.icon size={22} className="text-black" />
                </div>
                <h3 className="text-lg font-extrabold text-black mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
