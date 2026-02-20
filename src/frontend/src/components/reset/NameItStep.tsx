import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Brain, Heart, Zap, Cloud, Flame, Snowflake } from "lucide-react";

interface NameItStepProps {
  intensity: number;
  onIntensityChange: (value: number) => void;
  emotionalState: string;
  onEmotionalStateChange: (state: string) => void;
}

const emotionalStates = [
  { value: "overwhelmed", label: "Overwhelmed", icon: Brain, color: "text-destructive" },
  { value: "anxious", label: "Anxious", icon: Zap, color: "text-warning" },
  { value: "frustrated", label: "Frustrated", icon: Flame, color: "text-destructive" },
  { value: "sad", label: "Sad", icon: Cloud, color: "text-muted-foreground" },
  { value: "numb", label: "Numb", icon: Snowflake, color: "text-muted-foreground" },
  { value: "restless", label: "Restless", icon: Heart, color: "text-warning" },
];

export function NameItStep({
  intensity,
  onIntensityChange,
  emotionalState,
  onEmotionalStateChange,
}: NameItStepProps) {
  console.log('[NameItStep] Current state:', { intensity, emotionalState });

  const handleIntensityChange = (values: number[]) => {
    const newValue = values[0];
    console.log('[NameItStep] Intensity changed to:', newValue);
    onIntensityChange(newValue);
  };

  const handleStateSelect = (state: string) => {
    console.log('[NameItStep] Emotional state selected:', state);
    onEmotionalStateChange(state);
  };

  const isValid = intensity > 0 && emotionalState !== "";

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Name It: What are you feeling?</h2>
        <p className="text-muted-foreground">
          Rate your current intensity and identify the emotion you're experiencing.
        </p>
        {!isValid && (
          <p className="text-sm text-warning font-medium">
            Please rate your intensity and select an emotional state to continue
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <Label className="text-base font-medium">Intensity Level: {intensity}/10</Label>
          <Slider
            value={[intensity]}
            onValueChange={handleIntensityChange}
            max={10}
            min={0}
            step={1}
            className="w-full"
            aria-label="Intensity level"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Calm</span>
            <span>Intense</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-base font-medium">What are you feeling?</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {emotionalStates.map((state) => {
            const Icon = state.icon;
            const isSelected = emotionalState === state.value;

            return (
              <Card
                key={state.value}
                className={`cursor-pointer transition-all hover:border-primary/50 ${
                  isSelected ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border"
                }`}
                onClick={() => handleStateSelect(state.value)}
              >
                <div className="p-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${!isSelected ? state.color : ""}`} />
                  </div>
                  <span className="font-medium text-foreground">{state.label}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
