import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import type { UserData } from '../../backend';

interface SuggestedNextStepProps {
  userData: UserData | null | undefined;
}

export default function SuggestedNextStep({ userData }: SuggestedNextStepProps) {
  const navigate = useNavigate();

  const getSuggestion = () => {
    if (!userData) {
      return {
        title: 'Explore the Library',
        description: 'Start with a short lesson on regulation basics',
        action: () => navigate({ to: '/library' }),
        buttonText: 'Browse Lessons',
      };
    }

    // Simple logic for suggestions
    const hasRecentReset = userData.regulationRatings.length > 0;
    
    if (!hasRecentReset) {
      return {
        title: 'Try your first Reset',
        description: 'A guided 2-6 minute practice to support regulation',
        action: () => navigate({ to: '/reset' }),
        buttonText: 'Start Reset',
      };
    }

    return {
      title: 'Continue learning',
      description: 'Explore lessons matched to your goals',
      action: () => navigate({ to: '/library' }),
      buttonText: 'View Library',
    };
  };

  const suggestion = getSuggestion();

  return (
    <Card className="border-amber-200 dark:border-amber-800">
      <CardHeader>
        <CardTitle className="text-xl font-light">Suggested Next Step</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium mb-1">{suggestion.title}</h3>
          <p className="text-sm text-muted-foreground">{suggestion.description}</p>
        </div>
        <Button
          onClick={suggestion.action}
          className="w-full bg-amber-600 hover:bg-amber-700 gap-2"
        >
          {suggestion.buttonText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
