import { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowUpRight, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SeeWorkProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenContact: () => void;
}

export default function SeeWork({ onSelectCaseStudy, onOpenContact }: SeeWorkProps) {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Work', value: 'all' },
    { label: 'Custom Web Development', value: 'Custom Web Development' },
    { label: 'Refactoring & Performance', value: 'Refactoring & Performance Optimization' },
    { label: 'Website Development', value: 'Website Development' },
  ];

  const filteredStudies = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === filter);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-[#2B3038] bg-[#141619] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#3157D5] uppercase tracking-widest">
                05 // SEE
              </span>
              <span className="text-[#2B3038] font-mono">/</span>
              <span className="text-xs font-mono text-[#8E929A] uppercase tracking-widest">
                EVIDENCE OF PROBLEM-SOLVING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0EA] mb-4">
              See the Work
            </h2>

            <p className="text-base sm:text-lg text-[#8E929A] leading-relaxed">
              We measure our work by the clarity of the operational system left behind. Here is evidence of real-world problems transformed into structured software.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#1B1E22] border border-[#2B3038] rounded-xs text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-3 py-1.5 rounded-xs transition-colors cursor-pointer ${
                  filter === cat.value
                    ? 'bg-[#3157D5] text-white font-semibold'
                    : 'text-[#8E929A] hover:text-[#F2F0EA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Flow reminder (Hierarchy: Problem → Solution → Result → Technology) */}
        <div className="text-xs font-mono text-[#555A64] uppercase mb-6 flex items-center gap-2">
          <span>Case Structure:</span>
          <span className="text-[#8E929A]">Problem</span>
          <span>→</span>
          <span className="text-[#8E929A]">Approach</span>
          <span>→</span>
          <span className="text-[#8E929A]">Useful System</span>
          <span>→</span>
          <span className="text-[#8E929A]">Result</span>
          <span>→</span>
          <span className="text-[#555A64]">Technology</span>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-[#1B1E22] border border-[#2B3038] hover:border-[#3B424D] rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#24282F] text-xs font-mono">
                  <span className="text-[#3157D5] font-medium">{study.category}</span>
                  <span className="text-[#8E929A] truncate max-w-[200px]">{study.clientType}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F2F0EA] tracking-tight mb-3 group-hover:text-white transition-colors">
                  {study.title}
                </h3>

                <p className="text-sm text-[#8E929A] leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Transformation Micro-Breakdown */}
                <div className="space-y-3 mb-6 text-xs font-mono">
                  <div className="p-3 bg-[#17191C] border border-[#24282F] rounded-xs">
                    <span className="text-[#8E929A] uppercase block text-[10px] mb-1">
                      Problem Context
                    </span>
                    <p className="text-[#DCD8CD] font-sans text-xs leading-relaxed line-clamp-2">
                      {study.problem.overview}
                    </p>
                  </div>

                  <div className="p-3 bg-[#17191C] border border-[#24282F] rounded-xs">
                    <span className="text-emerald-400 uppercase block text-[10px] mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Measured Outcome
                    </span>
                    <p className="text-[#DCD8CD] font-sans text-xs leading-relaxed">
                      {study.result.impact}
                    </p>
                  </div>
                </div>

                {/* System modules preview */}
                <div className="p-3 bg-[#141619] border border-[#24282F] rounded-xs mb-6">
                  <span className="text-[10px] font-mono text-[#555A64] uppercase block mb-1.5">
                    Structured System Architecture
                  </span>
                  <p className="text-xs font-mono text-[#3157D5] truncate">
                    {study.system.dataFlow}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.technology.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#20242A] border border-[#2B3038] text-[11px] font-mono text-[#8E929A] rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#24282F] flex items-center justify-between">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3157D5] group-hover:text-[#4A6EE6] transition-colors cursor-pointer"
                  >
                    <span>Inspect Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-[#555A64]">
                    Evidence Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-14 p-6 bg-[#1B1E22] border border-[#2B3038] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#8E929A]">
            <strong className="text-[#F2F0EA] block sm:inline mr-1">No manufactured metrics.</strong>
            Every project represents actual code, workflows, and operational systems deployed to real users.
          </p>
          <button
            onClick={onOpenContact}
            className="px-4 py-2 bg-[#20242A] hover:bg-[#282D35] text-[#F2F0EA] border border-[#2B3038] rounded-xs font-mono uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
          >
            Start Your Project →
          </button>
        </div>

      </div>
    </section>
  );
}
