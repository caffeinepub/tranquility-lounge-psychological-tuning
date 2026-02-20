import { useOnboarding } from '../hooks/useOnboarding';
import { useSaveUserData } from '../hooks/useQueries';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { StepIndicator } from '../components/onboarding/StepIndicator';
import { GoalFocusStep } from '../components/onboarding/GoalFocusStep';
import { EscalationPatternsStep } from '../components/onboarding/EscalationPatternsStep';
import { PreferredToolsStep } from '../components/onboarding/PreferredToolsStep';
import ResetPlanStep from '../components/onboarding/ResetPlanStep';
import type { GoalFocus, EscalationPattern, ToolPreference } from '../backend';

export default function Onboarding() {
  const { currentStep, data, updateData, nextStep, previousStep } = useOnboarding();
  const saveUserData = useSaveUserData();
  const navigate = useNavigate();

  console.log('[Onboarding] Current step:', currentStep, 'Data:', data);

  const handleComplete = async () => {
    console.log('[Onboarding] Attempting to complete with data:', data);
    
    if (!data.goalFocus) {
      toast.error('Please complete all required fields');
      return;
    }

    try {
      await saveUserData.mutateAsync({
        userProfile: {
          goalFocus: data.goalFocus,
          escalationPatterns: data.escalationPatterns,
          preferredTools: data.preferredTools,
          resetPlan: data.resetPlan,
        },
        personalizedPlan: {
          dailyRoutines: [],
          resetSequence: data.resetPlan,
          toolPreferences: data.preferredTools,
          reminders: [],
          weeklyReviewPrompt: '',
        },
        regulationRatings: [],
        sleepQuality: [],
        focusReadiness: [],
        energyLevels: [],
        habitCompletions: [],
        favoriteTools: [],
        emergencyContacts: [],
        textSize: BigInt(16),
        highContrast: false,
        analyticsConsent: false,
      });

      localStorage.setItem('hasCompletedOnboarding', 'true');
      toast.success('Welcome! Your personalised plan is ready');
      navigate({ to: '/dashboard' });
    } catch (error) {
      toast.error('Failed to save your preferences. Please try again.');
      console.error('Onboarding save error:', error);
    }
  };

  const handleGoalSelect = (goal: GoalFocus) => {
    console.log('[Onboarding] Goal selected:', goal);
    updateData({ goalFocus: goal });
  };

  const handlePatternToggle = (pattern: EscalationPattern) => {
    const current = data.escalationPatterns;
    const updated = current.includes(pattern)
      ? current.filter((p) => p !== pattern)
      : [...current, pattern];
    console.log('[Onboarding] Patterns updated:', updated);
    updateData({ escalationPatterns: updated });
  };

  const handleToolToggle = (tool: ToolPreference) => {
    const current = data.preferredTools;
    const updated = current.includes(tool)
      ? current.filter((t) => t !== tool)
      : [...current, tool];
    console.log('[Onboarding] Tools updated:', updated);
    updateData({ preferredTools: updated });
  };

  const canProceedFromStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!data.goalFocus;
      case 2:
        return data.escalationPatterns.length > 0;
      case 3:
        return data.preferredTools.length > 0;
      case 4:
        return data.resetPlan.length > 0;
      default:
        return false;
    }
  };

  const isStepComplete = (step: number): boolean => {
    return step < currentStep || canProceedFromStep(step);
  };

  const handleNext = () => {
    const canProceed = canProceedFromStep(currentStep);
    console.log('[Onboarding] Next clicked, can proceed:', canProceed);
    
    if (canProceed) {
      nextStep();
    } else {
      toast.error('Please complete the current step before continuing');
    }
  };

  const stepLabels = ['Goal', 'Patterns', 'Tools', 'Plan'];

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-light tracking-tight">
            Let's personalise your experience
          </h1>
          <p className="text-muted-foreground">
            This will take about 5 minutes
          </p>
        </div>

        <StepIndicator
          currentStep={currentStep}
          totalSteps={4}
          stepLabels={stepLabels}
          isStepComplete={isStepComplete}
        />

        <div className="min-h-[400px]">
          {currentStep === 1 && (
            <div className="space-y-6">
              <GoalFocusStep
                selectedGoal={data.goalFocus || null}
                onSelectGoal={handleGoalSelect}
              />
              <div className="flex gap-3">
                <Button
                  onClick={handleNext}
                  disabled={!data.goalFocus}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-6">
              <EscalationPatternsStep
                selectedPatterns={data.escalationPatterns}
                onTogglePattern={handlePatternToggle}
              />
              <div className="flex gap-3">
                <Button onClick={previousStep} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={data.escalationPatterns.length === 0}
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="space-y-6">
              <PreferredToolsStep
                selectedTools={data.preferredTools}
                onToggleTool={handleToolToggle}
              />
              <div className="flex gap-3">
                <Button onClick={previousStep} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={data.preferredTools.length === 0}
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {currentStep === 4 && (
            <ResetPlanStep
              resetPlan={data.resetPlan}
              preferredTools={data.preferredTools}
              onUpdate={(plan) => updateData({ resetPlan: plan })}
              onComplete={handleComplete}
              onBack={previousStep}
              isLoading={saveUserData.isPending}
            />
          )}
        </div>
      </div>
    </div>
  );
}
