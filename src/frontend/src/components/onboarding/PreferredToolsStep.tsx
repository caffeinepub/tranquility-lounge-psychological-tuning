import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ToolPreference } from "../../backend";
import { Wind, Headphones, BookOpen, CheckSquare, Sparkles } from "lucide-react";

interface PreferredToolsStepProps {
  selectedTools: ToolPreference[];
  onToggleTool: (tool: ToolPreference) => void;
}

const toolOptions = [
  {
    value: ToolPreference.breath,
    label: "Breath Work",
    description: "Guided breathing exercises for regulation",
    icon: Wind,
  },
  {
    value: ToolPreference.audioGuidance,
    label: "Audio Guidance",
    description: "Calming voice-led exercises",
    icon: Headphones,
  },
  {
    value: ToolPreference.journalingPrompts,
    label: "Journaling Prompts",
    description: "Reflective writing exercises",
    icon: BookOpen,
  },
  {
    value: ToolPreference.habitTracking,
    label: "Habit Tracking",
    description: "Daily check-ins and progress monitoring",
    icon: CheckSquare,
  },
  {
    value: ToolPreference.sensoryAnchors,
    label: "Sensory Anchors",
    description: "Grounding through the senses",
    icon: Sparkles,
  },
];

export function PreferredToolsStep({ selectedTools, onToggleTool }: PreferredToolsStepProps) {
  console.log('[PreferredToolsStep] Current selections:', selectedTools);

  const handleToggle = (tool: ToolPreference) => {
    console.log('[PreferredToolsStep] Tool toggled:', tool);
    onToggleTool(tool);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Which tools appeal to you?</h2>
        <p className="text-muted-foreground">
          Select the regulation tools you'd like to try. Choose at least one.
        </p>
        {selectedTools.length === 0 && (
          <p className="text-sm text-warning font-medium">Please select at least one tool to continue</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {toolOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedTools.includes(option.value);

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
