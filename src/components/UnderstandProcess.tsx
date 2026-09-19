import { useState } from 'react';
import { PROCESS_STAGES } from '../data/content';
import { ArrowRight, Check, Search, GitFork, Minimize2, Palette, Terminal } from 'lucide-react';

interface UnderstandProcessProps {
  onOpenContact: () => void;
}

export default function UnderstandProcess({ onOpenContact }: UnderstandProcessProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STAGES[activeStepIndex];

  const stepIcons = [Search, GitFork, Minimize2, Palette, Terminal];

  return (
    <section id="approach" className="py-24 md:py-32 border-b border-[#2B3038] bg-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#3157D5] uppercase tracking-widest">
              04 // UNDERSTAND
            </span>
            <span className="text-[#2B3038] font-mono">/</span>
            <span className="text-xs font-mono text-[#8E929A] uppercase tracking-widest">
              THINKING FRAMEWORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0EA] mb-4">
            From Problem to System
          </h2>

          <p className="text-base sm:text-lg text-[#8E929A] leading-relaxed">
            This is not a rigid Gantt chart or sales timeline. It is how we think through messy problems to create software that actually serves the work.
          </p>
        </div>

        {/* Conceptual Anchor Banner */}
        <div className="p-4 sm:p-5 bg-[#1B1E22] border border-[#2B3038] rounded-xs mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#3157D5] rounded-xs shrink-0" />
            <span className="text-sm font-semibold text-[#F2F0EA] font-display">
              "We don't start by building. We start by understanding."
            </span>
          </div>
          <span className="text-xs font-mono text-[#8E929A]">
            Phase Progression // Non-linear rigor
          </span>
        </div>

        {/* 5-Step Horizontal Flow Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
          {PROCESS_STAGES.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-xs border transition-all cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#1E2126] border-[#3157D5] text-[#F2F0EA] shadow-sm'
                    : 'bg-[#181B1F] border-[#24282F] hover:border-[#3B424D] text-[#8E929A]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono ${isActive ? 'text-[#3157D5] font-bold' : 'text-[#555A64]'}`}>
                    {step.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#3157D5]' : 'text-[#555A64]'}`} />
                </div>
                <h3 className={`text-base font-semibold ${isActive ? 'text-[#F2F0EA]' : 'text-[#DCD8CD]'}`}>
                  {step.name}
                </h3>
                <p className="text-[11px] text-[#8E929A] mt-1 line-clamp-1">
                  {step.action}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspection of Active Thinking Phase */}
        <div className="bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#3157D5]">
                  <span>STEP {activeStep.number} OF 05</span>
                  <span>//</span>
                  <span className="uppercase text-[#8E929A]">{activeStep.name}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F0EA] mb-3">
                  {activeStep.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#8E929A] leading-relaxed mb-6">
                  {activeStep.action}
                </p>

                {/* Central Inquiry Question */}
                <div className="p-4 bg-[#17191C] border-l-2 border-[#3157D5] border-y border-r border-[#24282F] mb-6">
                  <span className="text-[11px] font-mono text-[#8E929A] uppercase tracking-wider block mb-1">
                    The Critical Question
                  </span>
                  <p className="text-sm font-medium text-[#F2F0EA] italic">
                    "{activeStep.inquiry}"
                  </p>
                </div>
              </div>

              {/* Transformation Indicator */}
              <div className="mt-4 pt-4 border-t border-[#24282F] text-xs font-mono">
                <span className="text-[#555A64] block text-[10px] uppercase mb-1">State Transition</span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-[#8E929A]">
                  <span className="line-through text-[#8E929A]/70">{activeStep.transformationFrom}</span>
                  <span className="text-[#3157D5] font-bold sm:inline hidden">→</span>
                  <span className="text-[#F2F0EA] font-semibold">{activeStep.transformationTo}</span>
                </div>
              </div>
            </div>

            {/* Right Operational Focus Checklist Column */}
            <div className="lg:col-span-6 bg-[#17191C] border border-[#24282F] p-6 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E929A] block mb-4 pb-2 border-b border-[#24282F]">
                  What We Specifically Inspect & Shape
                </span>

                <ul className="space-y-3.5">
                  {activeStep.focusItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#DCD8CD]">
                      <div className="w-5 h-5 rounded-xs bg-[#20242A] border border-[#2B3038] flex items-center justify-center shrink-0 mt-0.5 text-[#3157D5]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-[#24282F] flex items-center justify-between">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : PROCESS_STAGES.length - 1))}
                  className="text-xs font-mono text-[#8E929A] hover:text-[#F2F0EA] transition-colors cursor-pointer"
                >
                  ← PREV STEP
                </button>
                <span className="text-xs font-mono text-[#555A64]">
                  {activeStepIndex + 1} / {PROCESS_STAGES.length}
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < PROCESS_STAGES.length - 1 ? prev + 1 : 0))}
                  className="text-xs font-mono text-[#3157D5] hover:text-[#4A6EE6] font-semibold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>NEXT STEP</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
