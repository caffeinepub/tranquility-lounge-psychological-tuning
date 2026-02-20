import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function StreakDisplay() {
  // Simple streak calculation from localStorage
  const getStreak = () => {
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const streakCount = parseInt(localStorage.getItem('streakCount') || '0');
    
    if (!lastCheckIn) return 0;
    
    const today = new Date().toDateString();
    const lastDate = new Date(lastCheckIn).toDateString();
    
    if (today === lastDate) return streakCount;
    
    // Update streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastDate === yesterday.toDateString()) {
      const newStreak = streakCount + 1;
      localStorage.setItem('streakCount', newStreak.toString());
      localStorage.setItem('lastCheckIn', new Date().toISOString());
      return newStreak;
    }
    
    // Streak broken
    localStorage.setItem('streakCount', '1');
    localStorage.setItem('lastCheckIn', new Date().toISOString());
    return 1;
  };

  const streak = getStreak();

  if (streak === 0) return null;

  return (
    <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30">
      <CardContent className="p-4 flex items-center gap-3">
        <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
        <div>
          <p className="text-sm text-muted-foreground">You've checked in for</p>
          <p className="text-lg font-medium text-green-900 dark:text-green-100">
            {streak} {streak === 1 ? 'day' : 'days'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
