"use client";

export function AboutSection() {
  return (
    <section className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              We are dedicated to creating innovative solutions that make a difference
              in people's lives. Our platform combines cutting-edge technology with
              user-centric design to deliver exceptional experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to empower communities and drive positive change through
              sustainable development and technological innovation.
            </p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Innovation and Excellence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Community Empowerment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Sustainable Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Transparency and Trust</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
