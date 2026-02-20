import { Card } from "@/components/ui/card";
import { GoalFocus } from "../../backend";
import { Target, Moon, Zap, Heart, Utensils, Sparkles } from "lucide-react";

interface GoalFocusStepProps {
  selectedGoal: GoalFocus | null;
  onSelectGoal: (goal: GoalFocus) => void;
}

const goalOptions = [
  {
    value: GoalFocus.stressRegulation,
    label: "Stress Regulation",
    description: "Managing stress and staying calm under pressure",
    icon: Target,
  },
  {
    value: GoalFocus.sleepRoutine,
    label: "Sleep Routine",
    description: "Improving sleep quality and establishing healthy patterns",
    icon: Moon,
  },
  {
    value: GoalFocus.productivity,
    label: "Productivity",
    description: "Enhancing focus and getting things done",
    icon: Zap,
  },
  {
    value: GoalFocus.emotionalSteadiness,
    label: "Emotional Steadiness",
    description: "Building emotional resilience and balance",
    icon: Heart,
  },
  {
    value: GoalFocus.eatingRegulation,
    label: "Eating Regulation",
    description: "Developing a healthier relationship with food",
    icon: Utensils,
  },
  {
    value: GoalFocus.confidence,
    label: "Confidence",
    description: "Building self-assurance and inner strength",
    icon: Sparkles,
  },
];

export function GoalFocusStep({ selectedGoal, onSelectGoal }: GoalFocusStepProps) {
  console.log('[GoalFocusStep] Current selection:', selectedGoal);

  const handleSelect = (goal: GoalFocus) => {
    console.log('[GoalFocusStep] Goal selected:', goal);
    onSelectGoal(goal);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">What's your main focus?</h2>
        <p className="text-muted-foreground">
          Choose the area where you'd most like support. You can adjust this later.
        </p>
        {!selectedGoal && (
          <p className="text-sm text-warning font-medium">Please select a goal to continue</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {goalOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedGoal === option.value;

          return (
            <Card
              key={option.value}
              className={`cursor-pointer transition-all hover:border-primary/50 ${
                isSelected ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-border"
              }`}
              onClick={() => handleSelect(option.value)}
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
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
