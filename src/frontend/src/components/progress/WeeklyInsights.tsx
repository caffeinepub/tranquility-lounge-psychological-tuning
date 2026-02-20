import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetRegulationRatings, useGetUserData } from '../../hooks/useQueries';
import { Lightbulb } from 'lucide-react';

export default function WeeklyInsights() {
  const { data: ratings } = useGetRegulationRatings();
  const { data: userData } = useGetUserData();

  const generateInsights = () => {
    const insights: string[] = [];

    if (ratings && ratings.length > 0) {
      const averageImprovement = ratings.reduce(
        (sum, r) => sum + (Number(r.beforeReset) - Number(r.afterReset)),
        0
      ) / ratings.length;

      if (averageImprovement > 2) {
        insights.push('Your resets are consistently reducing intensity by an average of ' + averageImprovement.toFixed(1) + ' points.');
      }

      if (ratings.length >= 5) {
        insights.push('You\'ve completed ' + ratings.length + ' resets. Regular practice strengthens regulation skills.');
      }
    }

    if (userData?.favoriteTools && userData.favoriteTools.length > 0) {
      insights.push('You\'ve marked ' + userData.favoriteTools.length + ' tools as favourites.');
    }

    if (insights.length === 0) {
      insights.push('Complete a few resets to start seeing personalised insights about your regulation patterns.');
    }

    return insights;
  };

  const insights = generateInsights();

  return (
    <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <CardTitle className="text-xl font-light">Weekly Insights</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="text-sm leading-relaxed">
              • {insight}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
