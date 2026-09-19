import { useState } from 'react';
import { SITUATIONS } from '../data/content';
import { Situation, SituationId } from '../types';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface DiscoverSituationsProps {
  onSelectSituationForContact: (situationId: SituationId) => void;
}

export default function DiscoverSituations({ onSelectSituationForContact }: DiscoverSituationsProps) {
  const [selectedId, setSelectedId] = useState<SituationId>('business-system');

  const activeSituation = SITUATIONS.find((s) => s.id === selectedId) || SITUATIONS[0];

  return (
    <section id="discover" className="py-24 md:py-32 border-b border-[#2B3038] bg-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#3157D5] uppercase tracking-widest">
              02 // DISCOVER
            </span>
            <span className="text-[#2B3038] font-mono">/</span>
            <span className="text-xs font-mono text-[#8E929A] uppercase tracking-widest">
              SITUATIONS OVER SERVICES
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0EA] mb-4">
            What are you trying to solve?
          </h2>
          <p className="text-base sm:text-lg text-[#8E929A] leading-relaxed">
            You shouldn’t need to understand technical service taxonomy to figure out if we can help.
            Identify the situation that matches where you are right now:
          </p>
        </div>

        {/* 4 Situations Grid (Situations First) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SITUATIONS.map((s) => {
            const isSelected = s.id === selectedId;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                className={`text-left p-5 rounded-sm border transition-all relative flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3157D5] ${
                  isSelected
                    ? 'bg-[#1E2126] border-[#3157D5] shadow-sm'
                    : 'bg-[#1B1E22] border-[#2B3038] hover:border-[#3B424D] hover:bg-[#1E2125]'
                }`}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#3157D5] rounded-bl-xs" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className={`px-1.5 py-0.5 rounded-xs ${isSelected ? 'bg-[#3157D5] text-white' : 'bg-[#24282F] text-[#8E929A]'}`}>
                      SITUATION {s.serviceCode}
                    </span>
                    <span className="text-[11px] text-[#8E929A]">
                      {isSelected ? 'ACTIVE VIEW' : 'CLICK TO REVEAL'}
                    </span>
                  </div>

                  {/* Primary Situation statement */}
                  <h3 className={`text-lg font-semibold tracking-tight mb-2 ${isSelected ? 'text-[#F2F0EA]' : 'text-[#DCD8CD]'}`}>
                    "{s.situation}"
                  </h3>

                  <p className="text-xs text-[#8E929A] line-clamp-3 leading-relaxed">
                    {s.subtext}
                  </p>
                </div>

                {/* Sub-label showing mapped service */}
                <div className="mt-5 pt-3 border-t border-[#24282F] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8E929A]">
                    → {s.serviceName}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#3157D5]' : 'bg-[#2B3038]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Revealed System & Service Architecture Panel */}
        <div className="bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle architectural background line */}
          <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-[#20242A]/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            
            {/* Left Column: Mapped Service Identification */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#20242A] border border-[#2B3038] text-[11px] font-mono text-[#8E929A] uppercase tracking-wider mb-4">
                  <span>CORRESPONDING SERVICE // {activeSituation.serviceCode}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F2F0EA] tracking-tight mb-3">
                  {activeSituation.serviceName}
                </h3>

                {/* Core Idea Quote */}
                <div className="p-4 bg-[#17191C] border-l-2 border-[#3157D5] border-y border-r border-[#24282F] mb-6">
                  <span className="text-xs font-mono uppercase text-[#8E929A] block mb-1">Core Purpose</span>
                  <p className="text-sm sm:text-base font-medium text-[#F2F0EA] italic">
                    "{activeSituation.coreIdea}"
                  </p>
                </div>

                {/* Starting point recognition */}
                <div className="space-y-3 text-xs text-[#8E929A] leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#DCD8CD] block font-medium">Where this typically starts:</strong>
                      {activeSituation.startingPoint}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#DCD8CD] block font-medium">The resulting system:</strong>
                      {activeSituation.typicalOutcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="mt-8 pt-6 border-t border-[#24282F]">
                <button
                  onClick={() => onSelectSituationForContact(activeSituation.id)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#3157D5] hover:bg-[#2546B4] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all focus:outline-none cursor-pointer"
                >
                  <span>Talk with us about this situation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Practical Scope & Deliverables */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#17191C] p-6 border border-[#24282F] rounded-xs">
              
              {/* Ideal for */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E929A] block mb-3 pb-1 border-b border-[#24282F]">
                  When this is relevant
                </span>
                <ul className="space-y-2.5">
                  {activeSituation.idealFor.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#DCD8CD] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8E929A] block mb-3 pb-1 border-b border-[#24282F]">
                  Structured Deliverables
                </span>
                <ul className="space-y-2.5">
                  {activeSituation.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#DCD8CD] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8E929A] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
