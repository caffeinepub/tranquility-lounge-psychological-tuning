import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function HabitTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">Habit Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Track your daily habits and build consistent routines.
        </p>
        <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
          <Plus className="h-4 w-4" />
          Add Habit
        </Button>
        <p className="text-sm text-center text-muted-foreground">
          Habit tracking coming soon
        </p>
      </CardContent>
    </Card>
  );
}
