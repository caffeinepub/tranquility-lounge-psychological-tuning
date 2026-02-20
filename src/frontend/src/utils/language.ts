export const SUPPORTIVE_LANGUAGE = {
  support: 'support',
  optimise: 'optimise',
  regulate: 'regulate',
  reduceEscalation: 'reduce escalation risk',
  buildResilience: 'build resilience',
  behaviour: 'behaviour',
  analyse: 'analyse',
  colour: 'colour',
  defence: 'defence',
};

export const AVOID_TERMS = [
  'diagnosis',
  'mental illness',
  'treatment',
  'symptoms',
  'disorder',
  'patient',
  'therapy',
];

export function getSupportiveMessage(context: string): string {
  const messages: Record<string, string> = {
    welcome: 'Welcome to your personal regulation space',
    progress: 'You\'re building valuable self-regulation skills',
    reset: 'Let\'s help you find your balance',
    tools: 'Explore practices that support your wellbeing',
    plan: 'Create routines that work for you',
  };
  return messages[context] || '';
}
