import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  isStepComplete?: (step: number) => boolean;
}

export function StepIndicator({ currentStep, totalSteps, stepLabels, isStepComplete }: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isComplete = isStepComplete ? isStepComplete(step) : step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    isComplete
                      ? "bg-success text-success-foreground"
                      : isCurrent
                        ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isComplete ? <Check className="h-5 w-5" /> : step}
                </div>
                <span
                  className={`text-xs mt-2 text-center hidden sm:block ${
                    isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {stepLabels[step - 1]}
                </span>
              </div>
              {step < totalSteps && (
                <div
                  className={`h-1 flex-1 mx-2 rounded transition-all ${
                    isComplete ? "bg-success" : "bg-muted"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="sm:hidden text-center mt-2">
        <span className="text-sm font-medium text-foreground">{stepLabels[currentStep - 1]}</span>
      </div>
    </div>
  );
}
