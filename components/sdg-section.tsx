"use client";

export function SDGSection() {
  const sdgs = [
    { number: 11, title: "Sustainable Cities", color: "bg-orange-500" },
    { number: 13, title: "Climate Action", color: "bg-green-600" },
    { number: 9, title: "Innovation & Infrastructure", color: "bg-orange-600" },
    { number: 17, title: "Partnerships", color: "bg-blue-700" },
  ];

  return (
    <section className="min-h-screen bg-[#0F172A] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Sustainable Development Goals
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto">
          Our commitment to the UN Sustainable Development Goals drives our mission
          to create positive impact and sustainable change.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <div className={`${sdg.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-white text-2xl font-bold">{sdg.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                SDG {sdg.number}
              </h3>
              <p className="text-slate-400">{sdg.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
