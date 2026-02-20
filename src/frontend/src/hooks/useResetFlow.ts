import { useState } from 'react';
import type { ToolPreference } from '../backend';

export interface ResetFlowData {
  beforeIntensity?: number;
  currentState?: string;
  regulationTool?: ToolPreference;
  coreInterpretation?: string;
  microAction?: string;
  environmentAdjustments: string[];
  afterIntensity?: number;
}

export function useResetFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<ResetFlowData>({
    environmentAdjustments: [],
  });

  const updateData = (updates: Partial<ResetFlowData>) => {
    console.log('[useResetFlow] Updating data:', updates);
    setData((prev) => {
      const newData = { ...prev, ...updates };
      console.log('[useResetFlow] New data state:', newData);
      return newData;
    });
  };

  const nextStep = () => {
    if (currentStep < 6) {
      console.log('[useResetFlow] Moving to next step:', currentStep + 1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      console.log('[useResetFlow] Moving to previous step:', currentStep - 1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const reset = () => {
    console.log('[useResetFlow] Resetting flow');
    setCurrentStep(0);
    setData({ environmentAdjustments: [] });
  };

  return {
    currentStep,
    data,
    updateData,
    nextStep,
    previousStep,
    reset,
  };
}
