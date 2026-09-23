export type SituationId = 'website' | 'business-system' | 'maintenance' | 'optimization';

export interface Situation {
  id: SituationId;
  situation: string;
  subtext: string;
  serviceName: string;
  serviceCode: string;
  coreIdea: string;
  idealFor: string[];
  deliverables: string[];
  startingPoint: string;
  typicalOutcome: string;
}

export interface ProblemPattern {
  id: string;
  label: string;
  question: string;
  description: string;
  manifestation: string;
  rootCause: string;
  systemSolution: string;
}

export interface ProcessStage {
  id: string;
  number: string;
  name: string;
  headline: string;
  action: string;
  inquiry: string;
  focusItems: string[];
  transformationFrom: string;
  transformationTo: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  liveUrl?: string;
  category: string;
  clientType: string;
  summary: string;
  problem: {
    overview: string;
    frictionPoints: string[];
  };
  context: string;
  approach: {
    philosophy: string;
    keyDecisions: string[];
  };
  system: {
    description: string;
    modules: string[];
    dataFlow: string;
  };
  result: {
    impact: string;
    tangibleBenefits: string[];
  };
  technology: string[];
}

export interface WorkingPrinciple {
  number: string;
  title: string;
  statement: string;
  rationale: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  problemDescription: string;
  category: SituationId | 'not-sure';
  currentTools?: string;
  timeline?: string;
}
