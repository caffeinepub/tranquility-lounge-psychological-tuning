import { Card } from "@/components/ui/card";
import { CheckCircle2, MessageSquare, Footprints, Coffee, Users, BookOpen } from "lucide-react";

interface ActStepProps {
  selectedAction: string;
  onActionChange: (action: string) => void;
}

const actionOptions = [
  {
    value: "communicate",
    label: "Communicate",
    description: "Reach out to someone or express your needs",
    icon: MessageSquare,
  },
  {
    value: "move",
    label: "Move",
    description: "Take a walk or do gentle movement",
    icon: Footprints,
  },
  {
    value: "pause",
    label: "Pause",
    description: "Take a break and step away",
    icon: Coffee,
  },
  {
    value: "connect",
    label: "Connect",
    description: "Spend time with someone supportive",
    icon: Users,
  },
  {
    value: "learn",
    label: "Learn",
    description: "Read or explore something new",
    icon: BookOpen,
  },
  {
    value: "complete",
    label: "Complete",
    description: "Finish a small task to build momentum",
    icon: CheckCircle2,
  },
];

export function ActStep({ selectedAction, onActionChange }: ActStepProps) {
  console.log('[ActStep] Current action:', selectedAction);

  const handleSelect = (action: string) => {
    console.log('[ActStep] Action selected:', action);
    onActionChange(action);
  };

  const isValid = selectedAction !== "";

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Act: What's one small step?</h2>
        <p className="text-muted-foreground">
          Choose a micro-action that aligns with your values and moves you forward.
        </p>
        {!isValid && (
          <p className="text-sm text-warning font-medium">Please select an action to continue</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {actionOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedAction === option.value;

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
