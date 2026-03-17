import { ArrowRight, Play } from "lucide-react";
import {
  dashboardStats,
  chartBarHeights,
  recentTransactions,
} from "@/mock/data";
import Reveal from "@/components/Reveal";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <Reveal direction="up">
            <div
              className="inline-block px-4 py-1.5 bg-[#81ad10]/10 border-2 border-black text-xs font-bold uppercase tracking-wider mb-6"
              style={{ boxShadow: "3px 3px 0px 0px #000" }}
            >
              Remittance Infrastructure Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-black mb-6">
              Launch Your Own{" "}
              <span className="text-[#81ad10]">
                Remittance &amp; Digital Wallet
              </span>{" "}
              Platform
            </h1>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
              I-Remit provides the infrastructure to power{" "}
              <strong>
                money transfers, mobile wallets, FX trading, reconciliation,
                compliance automation,
              </strong>{" "}
              and <strong>global remittance services</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-7 py-3.5 bg-[#81ad10] text-black font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center gap-2"
                style={{ boxShadow: "6px 6px 0px 0px #000" }}
              >
                Request Demo <ArrowRight size={18} />
              </button>
              <button
                className="px-7 py-3.5 bg-white text-black font-bold border-2 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center gap-2"
                style={{ boxShadow: "6px 6px 0px 0px #000" }}
              >
                <Play size={16} /> Explore Platform
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-black bg-gray-200 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: [
                        "#81ad10",
                        "#080145",
                        "#e5e7eb",
                        "#81ad10",
                      ][i],
                      color: i === 1 ? "#fff" : "#000",
                    }}
                  >
                    {["M", "F", "B", "P"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-black">500+ Companies</p>
                <p className="text-xs text-gray-500">Trust I-Remit globally</p>
              </div>
            </div>
          </Reveal>

          {/* Right — Dashboard mockup */}
          <Reveal direction="left" delay={300}>
            <div
              className="bg-white border-2 border-black p-3 relative"
              style={{ boxShadow: "12px 12px 0px 0px #000" }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 pb-3 border-b-2 border-black mb-3">
                <div className="w-3 h-3 rounded-full bg-red-400 border border-black" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                <div className="w-3 h-3 rounded-full bg-green-400 border border-black" />
                <div className="flex-1 ml-3 h-6 bg-gray-100 border border-black text-[10px] flex items-center px-2 font-mono text-gray-500">
                  dashboard.i-remit.io
                </div>
              </div>

              {/* Dashboard content */}
              <div className="space-y-3">
                {/* Top stats */}
                <div className="grid grid-cols-3 gap-2">
                  {dashboardStats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`${stat.color} border border-black p-2.5`}
                    >
                      <p className="text-[10px] font-semibold text-gray-600 uppercase">
                        {stat.label}
                      </p>
                      <p className="text-lg font-extrabold text-black">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="border border-black p-3 bg-gray-50">
                  <p className="text-[10px] font-bold uppercase text-gray-500 mb-2">
                    Transaction Volume
                  </p>
                  <div className="flex items-end gap-1 h-24">
                    {chartBarHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 border border-black"
                        style={{
                          height: `${h}%`,
                          backgroundColor:
                            i === 9
                              ? "#81ad10"
                              : i % 2 === 0
                                ? "#080145"
                                : "#d1d5db",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="border border-black">
                  <div className="grid grid-cols-4 text-[9px] font-bold uppercase bg-[#080145] text-white p-1.5">
                    <span>Ref</span>
                    <span>Corridor</span>
                    <span>Amount</span>
                    <span>Status</span>
                  </div>
                  {recentTransactions.map((row) => (
                    <div
                      key={row.ref}
                      className="grid grid-cols-4 text-[10px] p-1.5 border-t border-black"
                    >
                      <span className="font-mono font-bold">{row.ref}</span>
                      <span>{row.corridor}</span>
                      <span className="font-bold">{row.amount}</span>
                      <span
                        className={
                          row.status === "Completed"
                            ? "text-[#81ad10] font-bold"
                            : "text-yellow-600 font-bold"
                        }
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
