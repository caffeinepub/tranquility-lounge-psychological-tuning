import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ResetPlanStep as ResetPlanStepType, ToolPreference } from '../../backend';
import { CheckCircle2 } from 'lucide-react';

interface ResetPlanStepProps {
  resetPlan: ResetPlanStepType[];
  preferredTools: ToolPreference[];
  onUpdate: (plan: ResetPlanStepType[]) => void;
  onComplete: () => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function ResetPlanStep({ resetPlan, preferredTools, onUpdate, onComplete, onBack, isLoading }: ResetPlanStepProps) {
  // Create a default reset plan if none exists
  if (resetPlan.length === 0 && preferredTools.length > 0) {
    const defaultPlan: ResetPlanStepType[] = [
      {
        name: 'Regulate',
        regulationTool: preferredTools[0],
        coreQuestion: 'What is the most useful interpretation right now?',
        microAction: 'Take a brief pause',
        environmentAdjustment: 'Adjust lighting if needed',
      },
    ];
    onUpdate(defaultPlan);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-light">Your Reset Plan is ready</h2>
        <p className="text-muted-foreground">
          We've created a personalised Reset sequence based on your preferences. You can customise it anytime in My Plan.
        </p>
      </div>

      <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-medium text-green-900 dark:text-green-100">
                Your personalised plan includes:
              </h3>
              <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                <li>• One-tap Reset access from any screen</li>
                <li>• Tools matched to your preferences</li>
                <li>• Reminders during your chosen time windows</li>
                <li>• Progress tracking for your regulation journey</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
        <p className="text-sm leading-relaxed">
          <strong>Remember:</strong> This app provides psychoeducation and self-regulation support. It is not a substitute for professional mental health care. If you're experiencing a crisis, please contact emergency services or the Samaritans (116 123).
        </p>
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1" disabled={isLoading}>
          Back
        </Button>
        <Button
          onClick={onComplete}
          className="flex-1 bg-amber-600 hover:bg-amber-700"
          disabled={isLoading}
        >
          {isLoading ? 'Setting up...' : 'Complete Setup'}
        </Button>
      </div>
    </div>
  );
}
