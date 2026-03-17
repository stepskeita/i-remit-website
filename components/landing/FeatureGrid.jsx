import { features } from "@/mock/data";

export default function FeatureGrid() {
  return (
    <section
      id="features"
      className="bg-[#81ad10] border-y-2 border-black py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            Everything You Need To
            <br />
            Power Global Remittance
          </h2>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto">
            A comprehensive suite of tools designed for modern fintech
            operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border-2 border-black p-6 transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              <feat.icon
                size={28}
                className="text-[#81ad10] mb-4"
                strokeWidth={2.5}
              />
              <h3 className="text-base font-extrabold text-black mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
