import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetRegulationRatings } from '../../hooks/useQueries';
import { TrendingDown } from 'lucide-react';

export default function RegulationChart() {
  const { data: ratings } = useGetRegulationRatings();

  const averageImprovement = ratings && ratings.length > 0
    ? ratings.reduce((sum, r) => sum + (Number(r.beforeReset) - Number(r.afterReset)), 0) / ratings.length
    : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">Regulation Ratings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingDown className="h-6 w-6 text-green-600 dark:text-green-400" />
            <span className="text-3xl font-light text-green-600 dark:text-green-400">
              {averageImprovement.toFixed(1)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Average intensity reduction per reset
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Recent Resets</p>
          {ratings && ratings.length > 0 ? (
            <div className="space-y-2">
              {ratings.slice(-5).reverse().map((rating, index) => (
                <div key={index} className="flex items-center justify-between text-sm p-2 bg-muted rounded">
                  <span>{Number(rating.beforeReset)} → {Number(rating.afterReset)}</span>
                  <span className="text-green-600 dark:text-green-400">
                    -{Number(rating.beforeReset) - Number(rating.afterReset)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              No resets recorded yet
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
