import { useState } from 'react';
import type { GoalFocus, EscalationPattern, ToolPreference, ResetPlanStep } from '../backend';

export interface OnboardingData {
  goalFocus?: GoalFocus;
  escalationPatterns: EscalationPattern[];
  preferredTools: ToolPreference[];
  resetPlan: ResetPlanStep[];
}

export function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    escalationPatterns: [],
    preferredTools: [],
    resetPlan: [],
  });

  const updateData = (updates: Partial<OnboardingData>) => {
    console.log('[useOnboarding] Updating data:', updates);
    setData((prev) => {
      const newData = { ...prev, ...updates };
      console.log('[useOnboarding] New data state:', newData);
      return newData;
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      console.log('[useOnboarding] Moving to next step:', currentStep + 1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      console.log('[useOnboarding] Moving to previous step:', currentStep - 1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 4) {
      console.log('[useOnboarding] Going to step:', step);
      setCurrentStep(step);
    }
  };

  return {
    currentStep,
    data,
    updateData,
    nextStep,
    previousStep,
    goToStep,
  };
}
