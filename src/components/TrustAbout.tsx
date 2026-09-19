import { WORKING_PRINCIPLES } from '../data/content';
import { ShieldCheck, MessageSquare, Terminal, RefreshCw, CheckCircle2 } from 'lucide-react';

interface TrustAboutProps {
  onOpenContact: () => void;
}

export default function TrustAbout({ onOpenContact }: TrustAboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#2B3038] bg-[#17191C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#3157D5] uppercase tracking-widest">
              06 // TRUST
            </span>
            <span className="text-[#2B3038] font-mono">/</span>
            <span className="text-xs font-mono text-[#8E929A] uppercase tracking-widest">
              PEOPLE & PRINCIPLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0EA] mb-4">
            Who’s Behind the Work?
          </h2>

          <p className="text-base sm:text-lg text-[#8E929A] leading-relaxed">
            Foundry is an independent, focused studio. We deliberately operate without account managers, sales intermediaries, or agency overhead.
          </p>
        </div>

        {/* Studio DNA & Mental Model Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Studio Profile Manifesto */}
          <div className="lg:col-span-7 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#24282F] text-xs font-mono text-[#8E929A]">
                <span className="text-[#3157D5] font-semibold">STUDIO ARCHETYPE</span>
                <span>//</span>
                <span>SMALL · FOCUSED · HANDS-ON</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F2F0EA] mb-4">
                An engineering-minded studio with strong design taste.
              </h3>

              <div className="space-y-4 text-sm text-[#8E929A] leading-relaxed">
                <p>
                  We are not a traditional design agency that happens to dabble in code, nor are we a development outsourcing shop trying to mimic a branding agency.
                </p>
                <p>
                  We are hands-on systems thinkers and engineers. When you collaborate with Foundry, the people you talk to in the initial diagnostic conversation are the exact same individuals architecting the domain model, designing the interfaces, and writing the production code.
                </p>
                <p className="text-[#DCD8CD]">
                  This direct model preserves signal, eliminates miscommunication, and ensures every line of software is engineered with deep empathy for the people using it every single day.
                </p>
              </div>
            </div>

            {/* Ratio Bar (Technical 65% + Refined 35% + Human undertone) */}
            <div className="mt-8 pt-6 border-t border-[#24282F]">
              <div className="flex items-center justify-between text-xs font-mono text-[#8E929A] mb-2">
                <span>Visual & Verbal Personality</span>
                <span className="text-[#F2F0EA]">Technical 65% + Refined 35%</span>
              </div>
              <div className="h-2 w-full bg-[#141619] rounded-xs overflow-hidden flex border border-[#24282F]">
                <div className="bg-[#3157D5] h-full" style={{ width: '65%' }} title="Technical 65%" />
                <div className="bg-[#F2F0EA] h-full" style={{ width: '35%' }} title="Refined 35%" />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-[#555A64] mt-1.5">
                <span>Systems, Modeling & Engineering</span>
                <span>Editorial Typography & Restraint</span>
              </div>
            </div>
          </div>

          {/* Collaboration Blueprint */}
          <div className="lg:col-span-5 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#3157D5] block mb-2">
                How We Collaborate
              </span>
              <h4 className="text-lg font-bold text-[#F2F0EA] mb-4">
                Predictable, calm, and low-friction.
              </h4>

              <ul className="space-y-3.5 text-xs text-[#8E929A]">
                <li className="flex items-start gap-3 p-3 bg-[#17191C] border border-[#24282F] rounded-xs">
                  <Terminal className="w-4 h-4 text-[#3157D5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#DCD8CD] block font-medium font-sans">Working software over slide decks</strong>
                    We demonstrate progress through clickable, interactive builds rather than speculative presentations.
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 bg-[#17191C] border border-[#24282F] rounded-xs">
                  <MessageSquare className="w-4 h-4 text-[#3157D5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#DCD8CD] block font-medium font-sans">Structured async updates</strong>
                    Concise weekly written recaps and screen demos so you never wonder what’s being built.
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 bg-[#17191C] border border-[#24282F] rounded-xs">
                  <ShieldCheck className="w-4 h-4 text-[#3157D5] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#DCD8CD] block font-medium font-sans">100% Code & Architecture Ownership</strong>
                    You own the entire repository, data schemas, and deployment pipelines. No vendor lock-in.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#24282F] text-xs text-[#8E929A]">
              <span>Studio capacity: 2–3 concurrent projects to maintain deep focus.</span>
            </div>
          </div>

        </div>

        {/* Studio Principles Section */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-mono text-[#555A64] uppercase block mb-1">
              Foundational Beliefs
            </span>
            <h3 className="text-2xl font-bold text-[#F2F0EA]">
              Principles We Work By
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKING_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="bg-[#1B1E22] border border-[#2B3038] p-5 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#3157D5] font-bold">PRINCIPLE {principle.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B3038]" />
                  </div>
                  <h4 className="text-base font-semibold text-[#F2F0EA] mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-[#DCD8CD] leading-relaxed mb-3">
                    {principle.statement}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#24282F] text-[11px] text-[#8E929A] leading-relaxed font-sans">
                  {principle.rationale}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
