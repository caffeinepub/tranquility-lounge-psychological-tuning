import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import ToolCard from '../components/tools/ToolCard';
import { useGetUserData } from '../hooks/useQueries';

export default function Tools() {
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { data: userData } = useGetUserData();

  const favoriteToolNames = userData?.favoriteTools.map((ft) => ft.toolName) || [];

  const regulationTools = [
    { id: 'breathing-timer', name: 'Paced Breathing Timer', category: 'regulation' },
    { id: 'grounding-checklist', name: 'Grounding Checklist', category: 'regulation' },
    { id: 'audio-guidance', name: 'Audio Guidance', category: 'regulation' },
    { id: 'attention-spotlight', name: 'Attention Spotlight', category: 'regulation' },
  ];

  const coreTools = [
    { id: 'thought-reframing', name: 'Thought Reframing Worksheet', category: 'core' },
    { id: 'filter-shield', name: 'Filter Shield', category: 'core' },
    { id: 'values-clarifier', name: 'Values Clarifier', category: 'core' },
  ];

  const behaviourTools = [
    { id: 'habit-loop-mapper', name: 'Habit Loop Mapper', category: 'behaviour' },
    { id: 'action-ladder', name: 'Action Ladder', category: 'behaviour' },
    { id: 'behavioural-activation', name: 'Behavioural Activation Planner', category: 'behaviour' },
  ];

  const environmentTools = [
    { id: 'sensory-anchor-builder', name: 'Sensory Anchor Builder', category: 'environment' },
    { id: 'environment-checklist', name: 'Environment Checklist', category: 'environment' },
  ];

  const allTools = [...regulationTools, ...coreTools, ...behaviourTools, ...environmentTools];

  const displayedTools = showFavoritesOnly
    ? allTools.filter((tool) => favoriteToolNames.includes(tool.name))
    : allTools;

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4 space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight">Tools</h1>
          <p className="text-muted-foreground max-w-2xl">
            Interactive practices to support regulation, cognitive flexibility, behaviour change, and environmental optimisation.
          </p>
        </div>
        <Button
          variant={showFavoritesOnly ? 'default' : 'outline'}
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className="gap-2"
        >
          <Star className={`h-4 w-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
          Favourites
        </Button>
      </div>

      {showFavoritesOnly ? (
        <div className="space-y-4">
          <h2 className="text-xl font-light">Your Favourite Tools</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {displayedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          {displayedTools.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              You haven't marked any tools as favourites yet.
            </p>
          )}
        </div>
      ) : (
        <Tabs defaultValue="regulation" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="regulation">Regulation</TabsTrigger>
            <TabsTrigger value="core">Core</TabsTrigger>
            <TabsTrigger value="behaviour">Behaviour</TabsTrigger>
            <TabsTrigger value="environment">Environment</TabsTrigger>
          </TabsList>

          <TabsContent value="regulation" className="space-y-4">
            <div>
              <h2 className="text-xl font-light mb-2">Regulation Tools</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Nervous system stabilisation and attention control
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {regulationTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="core" className="space-y-4">
            <div>
              <h2 className="text-xl font-light mb-2">Core Tools</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Cognitive flexibility and interpretation
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {coreTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="behaviour" className="space-y-4">
            <div>
              <h2 className="text-xl font-light mb-2">Behaviour Tools</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Habit formation and micro-actions
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {behaviourTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="environment" className="space-y-4">
            <div>
              <h2 className="text-xl font-light mb-2">Environment Tools</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Sensory and environmental modulation
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {environmentTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
