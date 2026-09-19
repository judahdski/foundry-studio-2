import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroOrient from './components/HeroOrient';
import DiscoverSituations from './components/DiscoverSituations';
import RelateProblems from './components/RelateProblems';
import UnderstandProcess from './components/UnderstandProcess';
import SeeWork from './components/SeeWork';
import CaseStudyModal from './components/CaseStudyModal';
import TrustAbout from './components/TrustAbout';
import ActContact from './components/ActContact';
import Footer from './components/Footer';
import { CaseStudy, SituationId } from './types';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [contactSituation, setContactSituation] = useState<SituationId | 'not-sure'>('not-sure');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    scrollToSection('contact');
  };

  const handleSelectSituationForContact = (situationId: SituationId) => {
    setContactSituation(situationId);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#17191C] text-[#F2F0EA] selection:bg-[#3157D5] selection:text-white flex flex-col font-sans">
      {/* Global Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-1">
        {/* 01 — ORIENT: Identity & Philosophy (Raw Problem → Useful System) */}
        <HeroOrient
          onExplore={() => scrollToSection('discover')}
          onOpenContact={handleOpenContact}
        />

        {/* 02 — DISCOVER: Situations over services ("What are you trying to solve?") */}
        <DiscoverSituations
          onSelectSituationForContact={handleSelectSituationForContact}
        />

        {/* 03 — RELATE: Friction recognition ("Does this sound familiar?") */}
        <RelateProblems
          onOpenContact={handleOpenContact}
        />

        {/* 04 — UNDERSTAND: Thinking framework (Understand → Structure → Simplify → Design → Build) */}
        <UnderstandProcess
          onOpenContact={handleOpenContact}
        />

        {/* 05 — SEE: Evidence of problem solving (Problem → Approach → System → Result) */}
        <SeeWork
          onSelectCaseStudy={(study) => setActiveCaseStudy(study)}
          onOpenContact={handleOpenContact}
        />

        {/* 06 — TRUST: People, credibility & principles ("Who's Behind the Work?") */}
        <TrustAbout
          onOpenContact={handleOpenContact}
        />

        {/* 07 — ACT: Simple problem intake ("Have a problem in mind? Let's talk.") */}
        <ActContact
          initialSituation={contactSituation}
        />
      </main>

      {/* Case Study Detail Inspection Drawer/Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onOpenContact={() => {
          setActiveCaseStudy(null);
          handleOpenContact();
        }}
      />

      {/* Architectural Studio Footer */}
      <Footer />
    </div>
  );
}
