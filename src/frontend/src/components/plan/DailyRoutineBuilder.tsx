import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function DailyRoutineBuilder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">Daily Routines</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Create up to 3 daily routines (morning, midday, evening) with your preferred tools and activities.
        </p>
        <Button className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
          <Plus className="h-4 w-4" />
          Add Routine
        </Button>
        <p className="text-sm text-center text-muted-foreground">
          Routine builder coming soon
        </p>
      </CardContent>
    </Card>
  );
}
