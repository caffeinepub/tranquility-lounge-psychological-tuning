import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

interface CloseStepProps {
  beforeIntensity: number;
  afterIntensity: number;
  onAfterIntensityChange: (value: number) => void;
}

export function CloseStep({ beforeIntensity, afterIntensity, onAfterIntensityChange }: CloseStepProps) {
  console.log('[CloseStep] Intensities:', { beforeIntensity, afterIntensity });

  const handleAfterIntensityChange = (values: number[]) => {
    const newValue = values[0];
    console.log('[CloseStep] After intensity changed to:', newValue);
    onAfterIntensityChange(newValue);
  };

  const difference = beforeIntensity - afterIntensity;
  const isValid = afterIntensity > 0;

  let comparisonIcon;
  let comparisonText;
  let comparisonColor;

  if (difference > 0) {
    comparisonIcon = <TrendingDown className="h-5 w-5" />;
    comparisonText = `Decreased by ${difference} points`;
    comparisonColor = "text-success";
  } else if (difference < 0) {
    comparisonIcon = <TrendingUp className="h-5 w-5" />;
    comparisonText = `Increased by ${Math.abs(difference)} points`;
    comparisonColor = "text-warning";
  } else {
    comparisonIcon = <Minus className="h-5 w-5" />;
    comparisonText = "No change";
    comparisonColor = "text-muted-foreground";
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Close: How are you feeling now?</h2>
        <p className="text-muted-foreground">
          Rate your current intensity after completing the Reset sequence.
        </p>
        {!isValid && (
          <p className="text-sm text-warning font-medium">Please rate your current intensity to complete</p>
        )}
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Before Reset</p>
            <p className="text-2xl font-bold text-foreground">{beforeIntensity}/10</p>
          </div>
          <div className={`flex items-center gap-2 ${comparisonColor}`}>
            {comparisonIcon}
            <span className="font-medium">{comparisonText}</span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">After Reset</p>
            <p className="text-2xl font-bold text-foreground">{afterIntensity}/10</p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label className="text-base font-medium">Current Intensity: {afterIntensity}/10</Label>
          <Slider
            value={[afterIntensity]}
            onValueChange={handleAfterIntensityChange}
            max={10}
            min={0}
            step={1}
            className="w-full"
            aria-label="Current intensity level"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Calm</span>
            <span>Intense</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Your Reset data will be saved to help track your regulation patterns over time.
        </p>
      </div>
    </div>
  );
}
