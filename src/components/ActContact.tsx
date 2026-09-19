import { useState, FormEvent, useEffect } from 'react';
import { SituationId, ContactFormData } from '../types';
import { ArrowRight, CheckCircle2, Send, HelpCircle } from 'lucide-react';

interface ActContactProps {
  initialSituation?: SituationId | 'not-sure';
}

export default function ActContact({ initialSituation = 'not-sure' }: ActContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    problemDescription: '',
    category: initialSituation,
    currentTools: '',
  });

  useEffect(() => {
    if (initialSituation) {
      setFormData((prev) => ({ ...prev, category: initialSituation }));
    }
  }, [initialSituation]);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const categoryOptions = [
    { id: 'website', label: 'Website' },
    { id: 'business-system', label: 'Business System' },
    { id: 'maintenance', label: 'Application Maintenance' },
    { id: 'optimization', label: 'Refactoring / Performance' },
    { id: 'not-sure', label: 'Not sure yet' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#17191C] relative border-b border-[#2B3038]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#3157D5] uppercase tracking-widest">
              07 // ACT
            </span>
            <span className="text-[#2B3038] font-mono">/</span>
            <span className="text-xs font-mono text-[#8E929A] uppercase tracking-widest">
              START WITH THE PROBLEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F0EA] mb-4">
            Have a problem in mind? Let's talk.
          </h2>

          <p className="text-base sm:text-lg text-[#8E929A] leading-relaxed">
            You don't need to have the solution or the technical stack figured out yet.
            Just bring us the problem as it exists in your day-to-day work.
          </p>
        </div>

        {/* Contact Module Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Expectations & Conversational Frame */}
          <div className="lg:col-span-5 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#24282F] text-xs font-mono text-[#3157D5]">
                <span>ENGAGEMENT PROTOCOL</span>
                <span>//</span>
                <span className="text-[#8E929A]">ZERO SALES NOISE</span>
              </div>

              <h3 className="text-xl font-bold text-[#F2F0EA] mb-3">
                What happens after you reach out?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#8E929A] leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#3157D5] bg-[#20242A] px-1.5 py-0.5 border border-[#2B3038] rounded-xs">
                    01
                  </span>
                  <div>
                    <strong className="text-[#DCD8CD] block font-medium font-sans">Engineering Review</strong>
                    We read your note and analyze the operational friction or system constraints.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#3157D5] bg-[#20242A] px-1.5 py-0.5 border border-[#2B3038] rounded-xs">
                    02
                  </span>
                  <div>
                    <strong className="text-[#DCD8CD] block font-medium font-sans">Direct Diagnostic Reply</strong>
                    Within 1–2 business days, an engineer responds with clarifying questions or an initial perspective on how the workflow might be structured.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#3157D5] bg-[#20242A] px-1.5 py-0.5 border border-[#2B3038] rounded-xs">
                    03
                  </span>
                  <div>
                    <strong className="text-[#DCD8CD] block font-medium font-sans">Focused Exploratory Call</strong>
                    A 30-minute session to map your requirements and determine if Foundry is the right fit.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Studio Email */}
            <div className="mt-8 pt-6 border-t border-[#24282F] text-xs font-mono">
              <span className="text-[#555A64] block text-[10px] uppercase mb-1">
                Prefer direct correspondence?
              </span>
              <a
                href="mailto:hello@foundrystudio.co"
                className="text-[#3157D5] hover:text-[#4A6EE6] font-semibold text-sm transition-colors"
              >
                hello@foundrystudio.co
              </a>
            </div>
          </div>

          {/* Right: The Simple Problem Intake Form */}
          <div className="lg:col-span-7 bg-[#1B1E22] border border-[#2B3038] rounded-sm p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-xs bg-[#20242A] border border-[#3157D5] text-[#3157D5] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#F2F0EA] font-display">
                  Problem Received
                </h3>
                <p className="text-sm text-[#8E929A] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#F2F0EA]">{formData.name}</span>. We've logged your note.
                  We’ll review your workflow description and send an initial perspective to{' '}
                  <span className="text-[#F2F0EA]">{formData.email}</span> within 1–2 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        problemDescription: '',
                        category: 'not-sure',
                        currentTools: '',
                      });
                    }}
                    className="text-xs font-mono text-[#3157D5] hover:underline cursor-pointer"
                  >
                    Submit another inquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. What are you looking for? (Category Selector with "Not sure yet") */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#DCD8CD] mb-2.5">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categoryOptions.map((opt) => {
                      const isSelected = formData.category === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: opt.id as any })}
                          className={`p-2.5 text-left rounded-xs border text-xs font-mono transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#3157D5] text-white border-[#3157D5] font-semibold'
                              : 'bg-[#17191C] border-[#2B3038] text-[#8E929A] hover:border-[#3B424D] hover:text-[#F2F0EA]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                  {formData.category === 'not-sure' && (
                    <p className="text-[11px] text-[#8E929A] mt-1.5 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#3157D5]" />
                      "Not sure yet" is perfectly fine. Start with the problem, and we'll help shape the direction.
                    </p>
                  )}
                </div>

                {/* 2. What are you trying to solve? */}
                <div>
                  <label
                    htmlFor="problem-desc"
                    className="block text-xs font-mono uppercase tracking-wider text-[#DCD8CD] mb-1.5"
                  >
                    What are you trying to solve? <span className="text-[#3157D5]">*</span>
                  </label>
                  <textarea
                    id="problem-desc"
                    required
                    rows={4}
                    value={formData.problemDescription}
                    onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                    placeholder="Describe what's messy, manual, slow, or frustrating in your current process or application..."
                    className="w-full bg-[#17191C] border border-[#2B3038] focus:border-[#3157D5] rounded-xs px-3.5 py-2.5 text-sm text-[#F2F0EA] placeholder-[#555A64] focus:outline-none transition-colors"
                  />
                </div>

                {/* 3. Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#DCD8CD] mb-1.5"
                    >
                      Your Name <span className="text-[#3157D5]">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#17191C] border border-[#2B3038] focus:border-[#3157D5] rounded-xs px-3.5 py-2 text-sm text-[#F2F0EA] placeholder-[#555A64] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#DCD8CD] mb-1.5"
                    >
                      Email Address <span className="text-[#3157D5]">*</span>
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-[#17191C] border border-[#2B3038] focus:border-[#3157D5] rounded-xs px-3.5 py-2 text-sm text-[#F2F0EA] placeholder-[#555A64] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 4. Current Tools / Context (Optional) */}
                <div>
                  <label
                    htmlFor="current-tools"
                    className="block text-xs font-mono uppercase tracking-wider text-[#8E929A] mb-1.5"
                  >
                    Current Tools or Environment <span className="text-[#555A64]">(Optional)</span>
                  </label>
                  <input
                    id="current-tools"
                    type="text"
                    value={formData.currentTools}
                    onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                    placeholder="e.g. Google Sheets, WhatsApp, Legacy React App, WordPress, etc."
                    className="w-full bg-[#17191C] border border-[#2B3038] focus:border-[#3157D5] rounded-xs px-3.5 py-2 text-sm text-[#F2F0EA] placeholder-[#555A64] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#3157D5] hover:bg-[#2546B4] disabled:opacity-50 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3157D5]"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Start a Conversation'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-[#555A64] block mt-2">
                    No spam. Direct reply from an engineer within 1–2 business days.
                  </span>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
