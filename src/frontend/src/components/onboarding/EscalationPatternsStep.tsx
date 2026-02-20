import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EscalationPattern } from "../../backend";
import { Brain, Flame, Snowflake, Clock, Repeat, Ear, Utensils, Moon } from "lucide-react";

interface EscalationPatternsStepProps {
  selectedPatterns: EscalationPattern[];
  onTogglePattern: (pattern: EscalationPattern) => void;
}

const patternOptions = [
  {
    value: EscalationPattern.racingMind,
    label: "Racing Mind",
    description: "Thoughts moving too fast to catch",
    icon: Brain,
  },
  {
    value: EscalationPattern.irritability,
    label: "Irritability",
    description: "Quick to frustration or anger",
    icon: Flame,
  },
  {
    value: EscalationPattern.shutdownFreeze,
    label: "Shutdown/Freeze",
    description: "Feeling stuck or unable to act",
    icon: Snowflake,
  },
  {
    value: EscalationPattern.procrastinationAvoidance,
    label: "Procrastination/Avoidance",
    description: "Putting things off or avoiding tasks",
    icon: Clock,
  },
  {
    value: EscalationPattern.overthinking,
    label: "Overthinking",
    description: "Getting caught in thought loops",
    icon: Repeat,
  },
  {
    value: EscalationPattern.sensoryOverload,
    label: "Sensory Overload",
    description: "Overwhelmed by sounds, lights, or stimuli",
    icon: Ear,
  },
  {
    value: EscalationPattern.emotionalEating,
    label: "Emotional Eating",
    description: "Using food to manage feelings",
    icon: Utensils,
  },
  {
    value: EscalationPattern.difficultySleeping,
    label: "Difficulty Sleeping",
    description: "Trouble falling or staying asleep",
    icon: Moon,
  },
];

export function EscalationPatternsStep({
  selectedPatterns,
  onTogglePattern,
}: EscalationPatternsStepProps) {
  console.log('[EscalationPatternsStep] Current selections:', selectedPatterns);

  const handleToggle = (pattern: EscalationPattern) => {
    console.log('[EscalationPatternsStep] Pattern toggled:', pattern);
    onTogglePattern(pattern);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">What patterns do you notice?</h2>
        <p className="text-muted-foreground">
          Select the escalation patterns you experience. Choose as many as apply.
        </p>
        {selectedPatterns.length === 0 && (
          <p className="text-sm text-warning font-medium">Please select at least one pattern to continue</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {patternOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedPatterns.includes(option.value);

          return (
            <Card
              key={option.value}
              className={`cursor-pointer transition-all hover:border-primary/50 ${
                isSelected ? "border-primary bg-primary/5" : "border-border"
              }`}
              onClick={() => handleToggle(option.value)}
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox checked={isSelected} onCheckedChange={() => handleToggle(option.value)} />
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{option.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
