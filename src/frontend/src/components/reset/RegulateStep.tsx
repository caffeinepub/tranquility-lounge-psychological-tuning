import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ToolPreference } from '../../backend';
import { cn } from '@/lib/utils';
import { Wind, Anchor, Music } from 'lucide-react';

interface RegulateStepProps {
  selectedTool?: ToolPreference;
  onSelect: (tool: ToolPreference) => void;
  onNext: () => void;
  onBack: () => void;
}

const tools = [
  { value: ToolPreference.breath, label: 'Paced Breathing', icon: Wind, duration: '2-3 min' },
  { value: ToolPreference.sensoryAnchors, label: 'Grounding', icon: Anchor, duration: '2 min' },
  { value: ToolPreference.audioGuidance, label: 'Brief Audio', icon: Music, duration: '2-5 min' },
];

export default function RegulateStep({ selectedTool, onSelect, onNext, onBack }: RegulateStepProps) {
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Choose a regulation practice. Take your time with this step.
      </p>

      <div className="grid gap-3">
        {tools.map((tool) => {
          const isSelected = selectedTool === tool.value;
          const Icon = tool.icon;

          return (
            <Card
              key={tool.value}
              className={cn(
                'cursor-pointer transition-all hover:border-amber-400',
                isSelected && 'border-amber-600 bg-amber-50 dark:bg-amber-950/30'
              )}
              onClick={() => onSelect(tool.value)}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{tool.label}</h3>
                  <p className="text-sm text-muted-foreground">{tool.duration}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="flex-1">
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!selectedTool}
          className="flex-1 bg-amber-600 hover:bg-amber-700"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
