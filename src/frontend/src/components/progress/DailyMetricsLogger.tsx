import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useGetUserData, useSaveUserData } from '../../hooks/useQueries';
import { toast } from 'sonner';

export default function DailyMetricsLogger() {
  const [sleepQuality, setSleepQuality] = useState([3]);
  const [focusReadiness, setFocusReadiness] = useState([3]);
  const [energy, setEnergy] = useState([3]);
  const { data: userData } = useGetUserData();
  const saveUserData = useSaveUserData();

  const handleSave = async () => {
    if (!userData) return;

    const today = new Date().toISOString().split('T')[0];

    await saveUserData.mutateAsync({
      ...userData,
      sleepQuality: [
        ...userData.sleepQuality,
        { date: today, rating: BigInt(sleepQuality[0]) },
      ],
      focusReadiness: [
        ...userData.focusReadiness,
        { date: today, rating: BigInt(focusReadiness[0]) },
      ],
      energyLevels: [
        ...userData.energyLevels,
        { date: today, rating: BigInt(energy[0]) },
      ],
    });

    toast.success('Daily metrics saved');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">Daily Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Sleep Quality</Label>
              <span className="text-lg font-light text-amber-600 dark:text-amber-400">
                {sleepQuality[0]}
              </span>
            </div>
            <Slider value={sleepQuality} onValueChange={setSleepQuality} max={5} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 - Poor</span>
              <span>5 - Excellent</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Focus Readiness</Label>
              <span className="text-lg font-light text-amber-600 dark:text-amber-400">
                {focusReadiness[0]}
              </span>
            </div>
            <Slider value={focusReadiness} onValueChange={setFocusReadiness} max={5} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 - Low</span>
              <span>5 - High</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Energy Level</Label>
              <span className="text-lg font-light text-amber-600 dark:text-amber-400">
                {energy[0]}
              </span>
            </div>
            <Slider value={energy} onValueChange={setEnergy} max={5} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 - Depleted</span>
              <span>5 - Energised</span>
            </div>
          </div>
        </div>

        <Button
          onClick={handleSave}
          disabled={saveUserData.isPending}
          className="w-full bg-amber-600 hover:bg-amber-700"
        >
          {saveUserData.isPending ? 'Saving...' : 'Save Today\'s Metrics'}
        </Button>
      </CardContent>
    </Card>
  );
}
