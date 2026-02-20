import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useGetUserData, useUpdateFavoriteTools } from '../../hooks/useQueries';
import { toast } from 'sonner';
import { ToolPreference } from '../../backend';

interface ToolCardProps {
  tool: {
    id: string;
    name: string;
    category: string;
  };
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { data: userData } = useGetUserData();
  const updateFavorites = useUpdateFavoriteTools();

  const favoriteToolNames = userData?.favoriteTools.map((ft) => ft.toolName) || [];
  const isFavorite = favoriteToolNames.includes(tool.name);

  const toggleFavorite = async () => {
    if (!userData) return;

    const currentFavorites = userData.favoriteTools;
    let newFavorites;

    if (isFavorite) {
      newFavorites = currentFavorites.filter((ft) => ft.toolName !== tool.name);
      toast.success('Removed from favourites');
    } else {
      // Map category to ToolPreference
      let toolPref: ToolPreference;
      if (tool.category === 'regulation' || tool.id.includes('breathing') || tool.id.includes('grounding')) {
        toolPref = ToolPreference.breath;
      } else if (tool.id.includes('audio')) {
        toolPref = ToolPreference.audioGuidance;
      } else if (tool.category === 'core' || tool.id.includes('journal')) {
        toolPref = ToolPreference.journalingPrompts;
      } else if (tool.category === 'behaviour' || tool.id.includes('habit')) {
        toolPref = ToolPreference.habitTracking;
      } else {
        toolPref = ToolPreference.sensoryAnchors;
      }

      newFavorites = [...currentFavorites, { toolName: tool.name, category: toolPref }];
      toast.success('Added to favourites');
    }

    await updateFavorites.mutateAsync(newFavorites);
  };

  return (
    <Card className="hover:border-amber-400 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-light">{tool.name}</CardTitle>
          <button
            onClick={toggleFavorite}
            className="text-amber-600 dark:text-amber-400 hover:scale-110 transition-transform"
            aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
          >
            <Star className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full bg-amber-600 hover:bg-amber-700"
          onClick={() => toast.info('Tool interface coming soon')}
        >
          Open Tool
        </Button>
      </CardContent>
    </Card>
  );
}
