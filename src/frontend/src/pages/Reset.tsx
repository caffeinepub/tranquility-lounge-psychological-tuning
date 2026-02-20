import { useResetFlow } from '../hooks/useResetFlow';
import { useGetUserData, useSaveUserData } from '../hooks/useQueries';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { NameItStep } from '../components/reset/NameItStep';
import RegulateStep from '../components/reset/RegulateStep';
import { CoreStep } from '../components/reset/CoreStep';
import { ActStep } from '../components/reset/ActStep';
import AnchorStep from '../components/reset/AnchorStep';
import { CloseStep } from '../components/reset/CloseStep';

export default function Reset() {
  const { currentStep, data, updateData, nextStep, previousStep, reset } = useResetFlow();
  const { data: userData } = useGetUserData();
  const saveUserData = useSaveUserData();
  const navigate = useNavigate();

  console.log('[Reset] Current step:', currentStep, 'Data:', data);

  const handleComplete = async () => {
    console.log('[Reset] Attempting to complete with data:', data);
    
    if (data.beforeIntensity === undefined || data.afterIntensity === undefined) {
      toast.error('Please complete the intensity ratings');
      return;
    }

    try {
      const existingRatings = userData?.regulationRatings || [];
      await saveUserData.mutateAsync({
        userProfile: userData!.userProfile,
        personalizedPlan: userData!.personalizedPlan,
        regulationRatings: [
          ...existingRatings,
          {
            beforeReset: BigInt(data.beforeIntensity),
            afterReset: BigInt(data.afterIntensity),
          },
        ],
        sleepQuality: userData?.sleepQuality || [],
        focusReadiness: userData?.focusReadiness || [],
        energyLevels: userData?.energyLevels || [],
        habitCompletions: userData?.habitCompletions || [],
        favoriteTools: userData?.favoriteTools || [],
        emergencyContacts: userData?.emergencyContacts || [],
        textSize: userData?.textSize || BigInt(16),
        highContrast: userData?.highContrast || false,
        analyticsConsent: userData?.analyticsConsent || false,
      });

      const improvement = data.beforeIntensity - data.afterIntensity;
      if (improvement > 0) {
        toast.success(`Well done. Your intensity decreased by ${improvement} points.`);
      } else {
        toast.success('Reset complete. You took time to support yourself.');
      }

      reset();
      navigate({ to: '/dashboard' });
    } catch (error) {
      toast.error('Failed to save your reset. Please try again.');
      console.error('Reset save error:', error);
    }
  };

  const canProceedFromStep = (step: number): boolean => {
    switch (step) {
      case 0:
        return true;
      case 1:
        return data.beforeIntensity !== undefined && !!data.currentState;
      case 2:
        return !!data.regulationTool;
      case 3:
        return !!data.coreInterpretation && data.coreInterpretation.trim().length > 0;
      case 4:
        return !!data.microAction;
      case 5:
        return true; // Environment adjustments are optional
      case 6:
        return data.afterIntensity !== undefined;
      default:
        return false;
    }
  };

  const handleNext = () => {
    const canProceed = canProceedFromStep(currentStep);
    console.log('[Reset] Next clicked from step', currentStep, 'can proceed:', canProceed);
    
    if (canProceed) {
      nextStep();
    } else {
      toast.error('Please complete the current step before continuing');
    }
  };

  const progressPercentage = (currentStep / 6) * 100;

  const stepTitles = [
    'Before we begin',
    'Name it',
    'Regulate',
    'Core',
    'Act',
    'Anchor',
    'Close',
  ];

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <div className="space-y-4">
            <CardTitle className="text-2xl font-light">
              {currentStep === 0 ? 'Reset' : stepTitles[currentStep]}
            </CardTitle>
            <div className="space-y-2">
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Step {currentStep} of 6
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {currentStep === 0 && (
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Let's help you find your balance. This guided flow will take 2-6 minutes.
              </p>
              <p className="text-muted-foreground">
                You'll move through a series of steps designed to support regulation and help you choose your next action.
              </p>
              <Button
                onClick={nextStep}
                className="w-full bg-amber-600 hover:bg-amber-700"
                size="lg"
              >
                Begin Reset
              </Button>
            </div>
          )}
          {currentStep === 1 && (
            <div className="space-y-6">
              <NameItStep
                intensity={data.beforeIntensity || 5}
                onIntensityChange={(value) => updateData({ beforeIntensity: value })}
                emotionalState={data.currentState || ''}
                onEmotionalStateChange={(state) => updateData({ currentState: state })}
              />
              <div className="flex gap-3">
                <Button onClick={previousStep} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceedFromStep(1)}
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <RegulateStep
              selectedTool={data.regulationTool}
              onSelect={(tool) => updateData({ regulationTool: tool })}
              onNext={handleNext}
              onBack={previousStep}
            />
          )}
          {currentStep === 3 && (
            <div className="space-y-6">
              <CoreStep
                coreInterpretation={data.coreInterpretation || ''}
                onCoreInterpretationChange={(interpretation) =>
                  updateData({ coreInterpretation: interpretation })
                }
              />
              <div className="flex gap-3">
                <Button onClick={previousStep} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceedFromStep(3)}
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {currentStep === 4 && (
            <div className="space-y-6">
              <ActStep
                selectedAction={data.microAction || ''}
                onActionChange={(action) => updateData({ microAction: action })}
              />
              <div className="flex gap-3">
                <Button onClick={previousStep} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceedFromStep(4)}
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
          {currentStep === 5 && (
            <AnchorStep
              selectedAdjustments={data.environmentAdjustments}
              onUpdate={(adjustments) => updateData({ environmentAdjustments: adjustments })}
              onNext={handleNext}
              onBack={previousStep}
            />
          )}
          {currentStep === 6 && (
            <div className="space-y-6">
              <CloseStep
                beforeIntensity={data.beforeIntensity!}
                afterIntensity={data.afterIntensity || 5}
                onAfterIntensityChange={(intensity) => updateData({ afterIntensity: intensity })}
              />
              <div className="flex gap-3">
                <Button onClick={previousStep} variant="outline" className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleComplete}
                  disabled={!canProceedFromStep(6) || saveUserData.isPending}
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                >
                  {saveUserData.isPending ? 'Saving...' : 'Complete Reset'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
