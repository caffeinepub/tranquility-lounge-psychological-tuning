import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DailyRoutineBuilder from '../components/plan/DailyRoutineBuilder';
import ResetSequenceCustomizer from '../components/plan/ResetSequenceCustomizer';
import ToolPreferences from '../components/plan/ToolPreferences';

export default function Plan() {
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-light tracking-tight">My Plan</h1>
        <p className="text-muted-foreground max-w-2xl">
          Build and customise your personalised regulation routines, Reset sequence, and preferences.
        </p>
      </div>

      <Tabs defaultValue="routines" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="routines">Daily Routines</TabsTrigger>
          <TabsTrigger value="reset">Reset Sequence</TabsTrigger>
          <TabsTrigger value="tools">Tool Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="routines">
          <DailyRoutineBuilder />
        </TabsContent>

        <TabsContent value="reset">
          <ResetSequenceCustomizer />
        </TabsContent>

        <TabsContent value="tools">
          <ToolPreferences />
        </TabsContent>
      </Tabs>
    </div>
  );
}
