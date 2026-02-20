import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegulationChart from '../components/progress/RegulationChart';
import DailyMetricsLogger from '../components/progress/DailyMetricsLogger';
import HabitTracker from '../components/progress/HabitTracker';
import WeeklyInsights from '../components/progress/WeeklyInsights';

export default function Progress() {
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-light tracking-tight">Progress</h1>
        <p className="text-muted-foreground max-w-2xl">
          Track your functional wellbeing metrics and view insights about your regulation patterns.
        </p>
      </div>

      <WeeklyInsights />

      <Tabs defaultValue="regulation" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="regulation">Regulation</TabsTrigger>
          <TabsTrigger value="metrics">Daily Metrics</TabsTrigger>
          <TabsTrigger value="habits">Habits</TabsTrigger>
        </TabsList>

        <TabsContent value="regulation">
          <RegulationChart />
        </TabsContent>

        <TabsContent value="metrics">
          <DailyMetricsLogger />
        </TabsContent>

        <TabsContent value="habits">
          <HabitTracker />
        </TabsContent>
      </Tabs>
    </div>
  );
}
