"use client";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building a better future through innovation, sustainability, and community engagement.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#sdg" className="hover:text-blue-400 transition-colors">
                  SDGs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <p className="text-slate-400 text-sm">
              Join our community and stay updated with our latest initiatives.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ASMO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
