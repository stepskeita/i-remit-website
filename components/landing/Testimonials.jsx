import { Quote } from "lucide-react";
import { testimonials } from "@/mock/data";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 border-y-2 border-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              What Our Customers Say
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <div
                className="bg-white border-2 border-black p-6"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <Quote size={24} className="text-[#81ad10] mb-4" />
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#81ad10] border-2 border-black flex items-center justify-center font-extrabold text-black text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-black">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
