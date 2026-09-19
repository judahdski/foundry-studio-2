import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141619] text-[#8E929A] text-xs font-mono border-t border-[#24282F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#24282F]">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#F2F0EA]">
              <div className="w-6 h-6 rounded-xs bg-[#1E2126] border border-[#2B3038] flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#3157D5] rounded-xs" />
              </div>
              <span className="font-display font-bold text-sm tracking-tight">FOUNDRY STUDIO</span>
            </div>

            <p className="text-xs font-sans text-[#8E929A] leading-relaxed max-w-sm">
              An engineering-minded problem-solving studio. We transform messy workflows and operational friction into structured, useful systems.
            </p>

            <div className="pt-2 text-[11px] text-[#555A64]">
              <span className="text-[#3157D5] font-semibold">Engineered, Not Manufactured.</span>
            </div>
          </div>

          {/* Col 2: Four Core Situations & Services */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="text-xs uppercase tracking-wider text-[#F2F0EA] block font-bold mb-3">
              Services by Situation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#discover" className="hover:text-[#F2F0EA] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3157D5]">01</span> Website Development
                </a>
              </li>
              <li>
                <a href="#discover" className="hover:text-[#F2F0EA] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3157D5]">02</span> Custom Web Development
                </a>
              </li>
              <li>
                <a href="#discover" className="hover:text-[#F2F0EA] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3157D5]">03</span> Web Application Maintenance
                </a>
              </li>
              <li>
                <a href="#discover" className="hover:text-[#F2F0EA] transition-colors flex items-center gap-1.5">
                  <span className="text-[#3157D5]">04</span> Refactoring & Performance Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Thinking Framework */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-xs uppercase tracking-wider text-[#F2F0EA] block font-bold mb-3">
              Thinking Framework
            </span>
            <div className="text-xs space-y-1.5 text-[#8E929A]">
              <div>Understand → Friction & Reality</div>
              <div>Structure → Domain & Relations</div>
              <div>Simplify → Prune Waste</div>
              <div>Design → Ergonomic Systems</div>
              <div>Build → Useful Software</div>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="text-xs text-[#3157D5] hover:text-[#4A6EE6] font-semibold flex items-center gap-1"
              >
                <span>Have a problem? Let's talk →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#555A64]">
          <div>
            © {new Date().getFullYear()} Foundry Studio. Raw Problem → Useful System. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#8E929A]">Technical 65% + Refined 35%</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-[#1B1E22] hover:bg-[#20242A] text-[#8E929A] hover:text-[#F2F0EA] border border-[#24282F] rounded-xs transition-colors cursor-pointer flex items-center gap-1"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
