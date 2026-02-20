import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function IntensityCheck() {
  const [intensity, setIntensity] = useState([5]);
  const [label, setLabel] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">How are you right now?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Intensity level</Label>
            <span className="text-3xl font-light text-amber-600 dark:text-amber-400">
              {intensity[0]}
            </span>
          </div>
          <Slider
            value={intensity}
            onValueChange={setIntensity}
            max={10}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0 - Calm</span>
            <span>10 - Intense</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="state-label">What are you experiencing? (optional)</Label>
          <Input
            id="state-label"
            placeholder="e.g., overwhelmed, calm, anxious..."
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
