import {
  walletFeatures,
  walletQuickActions,
  walletTransactions,
} from "@/mock/data";
import Reveal from "@/components/Reveal";

export default function MobileWallet() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone mockup */}
          <Reveal direction="right">
            <div className="flex justify-center">
              <div
                className="w-[280px] bg-white border-2 border-black rounded-[32px] p-3 relative"
                style={{ boxShadow: "10px 10px 0px 0px #000" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />

                <div className="bg-gray-50 border-2 border-black rounded-[24px] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#080145] px-4 py-3 pt-8">
                    <p className="text-white/60 text-[10px] font-bold">
                      Good morning
                    </p>
                    <p className="text-white text-lg font-extrabold">
                      $4,250.00
                    </p>
                    <p className="text-[#81ad10] text-[10px] font-bold mt-0.5">
                      Available Balance
                    </p>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-3 gap-2 p-3">
                    {walletQuickActions.map((action) => (
                      <button
                        key={action}
                        className="bg-white border-2 border-black p-2 text-center text-[10px] font-bold"
                        style={{ boxShadow: "2px 2px 0px 0px #000" }}
                      >
                        {action}
                      </button>
                    ))}
                  </div>

                  {/* Transactions */}
                  <div className="px-3 pb-4">
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-2">
                      Recent
                    </p>
                    {walletTransactions.map((tx) => (
                      <div
                        key={tx.name}
                        className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                      >
                        <div>
                          <p className="text-xs font-bold text-black">
                            {tx.name}
                          </p>
                          <p className="text-[9px] text-gray-400">{tx.time}</p>
                        </div>
                        <p
                          className={`text-xs font-extrabold ${tx.amount.startsWith("+") ? "text-[#81ad10]" : "text-black"}`}
                        >
                          {tx.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="left" delay={150}>
            <div>
              <div
                className="inline-block px-4 py-1.5 bg-[#81ad10]/10 border-2 border-black text-xs font-bold uppercase tracking-wider mb-4"
                style={{ boxShadow: "3px 3px 0px 0px #000" }}
              >
                White-Label Ready
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
                A Mobile Wallet Your Customers Will Love
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                Deploy a fully branded mobile wallet application with your
                company&apos;s identity. Offer seamless money transfers,
                multi-currency balances, and bill payments—all under your brand.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {walletFeatures.map((feat) => (
                  <div
                    key={feat.label}
                    className="flex items-center gap-2 bg-white border-2 border-black px-3 py-2.5"
                    style={{ boxShadow: "3px 3px 0px 0px #000" }}
                  >
                    <feat.icon
                      size={16}
                      className="text-[#81ad10] flex-shrink-0"
                    />
                    <span className="text-xs font-bold text-black">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
