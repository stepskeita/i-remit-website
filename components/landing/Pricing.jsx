import { Check, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/mock/data";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-20 lg:py-28 border-t-2 border-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              Flexible Pricing
              <br />
              For Every Business
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Start small and scale as your business grows. No hidden fees.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 130}>
              <div
                className={`border-2 border-black p-7 flex flex-col ${plan.highlight ? "bg-[#080145] text-white" : "bg-white text-black"}`}
                style={{
                  boxShadow: plan.highlight
                    ? "8px 8px 0px 0px #81ad10"
                    : "4px 4px 0px 0px #000",
                }}
              >
                {plan.highlight && (
                  <div className="inline-block self-start px-3 py-1 bg-[#81ad10] text-black text-[10px] font-bold uppercase border-2 border-black mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-extrabold">{plan.name}</h3>
                <p
                  className={`text-sm mt-1 ${plan.highlight ? "text-white/60" : "text-gray-500"}`}
                >
                  {plan.desc}
                </p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-white/50" : "text-gray-400"}`}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className="text-[#81ad10] flex-shrink-0 mt-0.5"
                      />
                      <span
                        className={
                          plan.highlight ? "text-white/80" : "text-gray-600"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 font-bold border-2 border-black flex items-center justify-center gap-2 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${
                    plan.highlight
                      ? "bg-[#81ad10] text-black"
                      : "bg-white text-black"
                  }`}
                  style={{ boxShadow: "4px 4px 0px 0px #000" }}
                >
                  Get Started <ArrowRight size={16} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
