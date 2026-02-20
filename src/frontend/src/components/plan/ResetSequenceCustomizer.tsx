import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetUserData } from '../../hooks/useQueries';

export default function ResetSequenceCustomizer() {
  const { data: userData } = useGetUserData();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">Reset Sequence</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Customise your personalised Reset flow preferences.
        </p>
        {userData?.personalizedPlan.resetSequence.map((step, index) => (
          <div key={index} className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h3 className="font-medium mb-2">{step.name}</h3>
            <p className="text-sm text-muted-foreground">{step.coreQuestion}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
