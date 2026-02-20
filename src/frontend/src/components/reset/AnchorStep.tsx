import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Lightbulb, Volume2, Flower2, User, Monitor } from 'lucide-react';

interface AnchorStepProps {
  selectedAdjustments: string[];
  onUpdate: (adjustments: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const adjustments = [
  { value: 'light', label: 'Adjust lighting', icon: Lightbulb },
  { value: 'sound', label: 'Change sound', icon: Volume2 },
  { value: 'scent', label: 'Use a scent', icon: Flower2 },
  { value: 'posture', label: 'Shift posture', icon: User },
  { value: 'screen', label: 'Reduce screens', icon: Monitor },
];

export default function AnchorStep({ selectedAdjustments, onUpdate, onNext, onBack }: AnchorStepProps) {
  const toggleAdjustment = (value: string) => {
    if (selectedAdjustments.includes(value)) {
      onUpdate(selectedAdjustments.filter((a) => a !== value));
    } else {
      onUpdate([...selectedAdjustments, value]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-muted-foreground">
          Choose any environment adjustments that might help (optional).
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {adjustments.map((adjustment) => {
          const Icon = adjustment.icon;
          const isSelected = selectedAdjustments.includes(adjustment.value);

          return (
            <Card
              key={adjustment.value}
              className={cn(
                'cursor-pointer transition-all hover:border-amber-400',
                isSelected && 'border-amber-600 bg-amber-50 dark:bg-amber-950/30'
              )}
              onClick={() => toggleAdjustment(adjustment.value)}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <Checkbox checked={isSelected} />
                <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-medium">{adjustment.label}</span>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1">
          Back
        </Button>
        <Button onClick={onNext} className="flex-1 bg-amber-600 hover:bg-amber-700">
          Continue
        </Button>
      </div>
    </div>
  );
}
