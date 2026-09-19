import { useState } from 'react';
import { PROBLEM_PATTERNS } from '../data/content';
import { HelpCircle, ArrowRight, CornerDownRight } from 'lucide-react';

interface RelateProblemsProps {
  onOpenContact: () => void;
}

export default function RelateProblems({ onOpenContact }: RelateProblemsProps) {
  const [activeFrictionId, setActiveFrictionId] = useState<string>(PROBLEM_PATTERNS[0].id);

  const activePattern = PROBLEM_PATTERNS.find((p) => p.id === activeFrictionId) || PROBLEM_PATTERNS[0];

  return (
    <section id="relate" className="py-24 md:py-32 border-b border-[#2B3038] bg-[#141619] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#3157D5] uppercase tracking-widest">
              03 // RELATE
            </span>
            <span className="text-[#2B3038] font-mono">/</span>
            <span className="text-xs font-mono text-[#8E929A] uppercase tracking-widest">
              RECOGNIZING FRICTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0EA] mb-4">
            Does this sound familiar?
          </h2>

          <p className="text-base sm:text-lg text-[#8E929A] leading-relaxed">
            Most operational friction isn't caused by a lack of effort. It happens when teams rely on tools never designed to support how their business actually operates.
          </p>
        </div>

        {/* Central Transition Callout (Crucial Brand Statement) */}
        <div className="p-6 md:p-8 bg-[#1B1E22] border-l-4 border-[#3157D5] border-y border-r border-[#2B3038] rounded-xs mb-14">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase text-[#3157D5] tracking-wider block mb-1">
              Foundry Perspective
            </span>
            <p className="text-xl sm:text-2xl font-display font-semibold text-[#F2F0EA] leading-snug">
              "These problems rarely start with software. They start with the way work is structured."
            </p>
            <p className="text-xs sm:text-sm text-[#8E929A] mt-2 leading-relaxed">
              When communication channels become filing cabinets and spreadsheets double as databases, complexity accumulates silently until simple tasks take hours.
            </p>
          </div>
        </div>

        {/* Problem Recognition Grid & Interactive Diagnostic Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive List of Recognizable Scenarios */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono text-[#8E929A] uppercase tracking-wider block mb-2">
              Select an operational pattern:
            </span>

            {PROBLEM_PATTERNS.map((pattern) => {
              const isSelected = pattern.id === activeFrictionId;
              return (
                <button
                  key={pattern.id}
                  onClick={() => setActiveFrictionId(pattern.id)}
                  className={`w-full text-left p-4 rounded-xs border transition-all text-xs flex items-start justify-between cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#3157D5] ${
                    isSelected
                      ? 'bg-[#1E2126] border-[#3157D5] text-[#F2F0EA]'
                      : 'bg-[#181B1F] border-[#24282F] hover:border-[#3B424D] text-[#8E929A] hover:text-[#DCD8CD]'
                  }`}
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2 mb-1 font-mono text-[11px]">
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#3157D5]' : 'bg-[#555A64]'}`} />
                      <span className={isSelected ? 'text-[#3157D5]' : 'text-[#8E929A]'}>
                        {pattern.label}
                      </span>
                    </div>
                    <p className={`text-sm font-medium leading-snug ${isSelected ? 'text-[#F2F0EA]' : 'text-[#DCD8CD]'}`}>
                      "{pattern.question}"
                    </p>
                  </div>
                  <CornerDownRight className={`w-4 h-4 mt-1 shrink-0 ${isSelected ? 'text-[#3157D5]' : 'text-[#555A64]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Structural Breakdown of Selected Friction */}
          <div className="lg:col-span-6 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#24282F]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#3157D5] rounded-xs" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#F2F0EA]">
                  Structural Diagnosis // {activePattern.label}
                </span>
              </div>
              <span className="text-xs font-mono text-[#8E929A]">Pattern Analysis</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#F2F0EA] mb-3">
              "{activePattern.question}"
            </h3>

            <p className="text-xs sm:text-sm text-[#8E929A] leading-relaxed mb-6">
              {activePattern.description}
            </p>

            {/* Diagnostic comparison cards */}
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 bg-[#17191C] border-l-2 border-red-500/60 border-y border-r border-[#24282F]">
                <span className="text-red-400 block text-[10px] uppercase font-bold mb-1">
                  How it manifests daily
                </span>
                <p className="text-[#DCD8CD] font-sans text-xs leading-relaxed">
                  {activePattern.manifestation}
                </p>
              </div>

              <div className="p-3.5 bg-[#17191C] border-l-2 border-amber-500/60 border-y border-r border-[#24282F]">
                <span className="text-amber-400 block text-[10px] uppercase font-bold mb-1">
                  The actual root cause
                </span>
                <p className="text-[#DCD8CD] font-sans text-xs leading-relaxed">
                  {activePattern.rootCause}
                </p>
              </div>

              <div className="p-3.5 bg-[#17191C] border-l-2 border-emerald-500/60 border-y border-r border-[#24282F]">
                <span className="text-emerald-400 block text-[10px] uppercase font-bold mb-1">
                  The Foundry system approach
                </span>
                <p className="text-[#DCD8CD] font-sans text-xs leading-relaxed">
                  {activePattern.systemSolution}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#24282F] flex items-center justify-between">
              <span className="text-xs text-[#8E929A]">Experiencing this workflow friction?</span>
              <button
                onClick={onOpenContact}
                className="text-xs font-semibold text-[#3157D5] hover:text-[#4A6EE6] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Tell us about it</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
