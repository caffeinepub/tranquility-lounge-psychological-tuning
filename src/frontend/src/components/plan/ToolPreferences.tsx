import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetUserData } from '../../hooks/useQueries';
import { Badge } from '@/components/ui/badge';

export default function ToolPreferences() {
  const { data: userData } = useGetUserData();

  const getToolLabel = (tool: any): string => {
    const key = Object.keys(tool)[0];
    return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">Tool Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Your preferred regulation tools and practices.
        </p>
        <div className="flex flex-wrap gap-2">
          {userData?.personalizedPlan.toolPreferences.map((tool, index) => (
            <Badge key={index} variant="outline">
              {getToolLabel(tool)}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
