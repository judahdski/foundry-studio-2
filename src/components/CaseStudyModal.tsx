import { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, ArrowRight, CheckCircle2, AlertTriangle, Layers, Cpu } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose, onOpenContact }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17191C]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="relative bg-[#1B1E22] border border-[#2B3038] w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="p-5 sm:p-6 border-b border-[#24282F] bg-[#17191C] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E929A] mb-1">
              <span className="text-[#3157D5] font-semibold">{caseStudy.category}</span>
              <span>//</span>
              <span>{caseStudy.clientType}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#F2F0EA] tracking-tight">
              {caseStudy.title}
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-[#8E929A] hover:text-[#F2F0EA] border border-[#2B3038] hover:border-[#3B424D] rounded-xs bg-[#20242A] transition-colors cursor-pointer"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8 text-sm">
          
          {/* Executive Summary */}
          <div className="p-4 bg-[#20242A] border-l-2 border-[#3157D5] border-y border-r border-[#2B3038]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E929A] block mb-1">
              Transformation Summary
            </span>
            <p className="text-base text-[#F2F0EA] font-medium leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Context */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E929A] block mb-2">
              Context & Stakes
            </span>
            <p className="text-[#DCD8CD] leading-relaxed">
              {caseStudy.context}
            </p>
          </div>

          {/* 1. Problem */}
          <div className="p-5 bg-[#17191C] border border-[#24282F] rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8E929A] leading-relaxed">
              {caseStudy.problem.overview}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#555A64] uppercase block mb-1.5">Observed Friction Points</span>
              <ul className="space-y-1.5">
                {caseStudy.problem.frictionPoints.map((item, idx) => (
                  <li key={idx} className="text-xs text-[#DCD8CD] flex items-start gap-2">
                    <span className="text-amber-400 font-bold font-mono text-xs">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Approach */}
          <div className="p-5 bg-[#17191C] border border-[#24282F] rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3157D5]">
              <Layers className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">The Approach</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8E929A] leading-relaxed">
              {caseStudy.approach.philosophy}
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#555A64] uppercase block mb-1.5">Architectural Decisions</span>
              <ul className="space-y-1.5">
                {caseStudy.approach.keyDecisions.map((item, idx) => (
                  <li key={idx} className="text-xs text-[#DCD8CD] flex items-start gap-2">
                    <span className="text-[#3157D5] font-bold font-mono text-xs">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. System Built */}
          <div className="p-5 bg-[#17191C] border border-[#24282F] rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Cpu className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">The Useful System</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8E929A] leading-relaxed">
              {caseStudy.system.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {caseStudy.system.modules.map((mod, idx) => (
                <div key={idx} className="p-2.5 bg-[#20242A] border border-[#2B3038] text-xs text-[#DCD8CD]">
                  <span className="text-[#3157D5] font-mono block text-[10px]">MODULE 0{idx + 1}</span>
                  {mod}
                </div>
              ))}
            </div>

            {/* Data flow diagram */}
            <div className="mt-3 p-3 bg-[#141619] border border-[#24282F] rounded-xs text-[11px] font-mono text-[#8E929A]">
              <span className="text-[#555A64] block text-[10px] uppercase mb-1">Structured Data Pipeline</span>
              <span className="text-[#3157D5]">{caseStudy.system.dataFlow}</span>
            </div>
          </div>

          {/* 4. Result */}
          <div className="p-5 bg-[#17191C] border border-emerald-900/30 rounded-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider">The Result</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F2F0EA] font-medium leading-relaxed">
              {caseStudy.result.impact}
            </p>
            <ul className="space-y-1.5 pt-1">
              {caseStudy.result.tangibleBenefits.map((item, idx) => (
                <li key={idx} className="text-xs text-[#DCD8CD] flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Supporting Technology */}
          <div className="pt-2 border-t border-[#24282F]">
            <span className="text-xs font-mono text-[#555A64] uppercase block mb-2">
              Supporting Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#20242A] border border-[#2B3038] text-xs font-mono text-[#8E929A] rounded-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-5 sm:p-6 border-t border-[#24282F] bg-[#17191C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#8E929A]">
            Facing a similar challenge with your team?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#2B3038] text-xs font-mono text-[#8E929A] hover:text-[#F2F0EA] rounded-xs cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 bg-[#3157D5] hover:bg-[#2546B4] text-white text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
