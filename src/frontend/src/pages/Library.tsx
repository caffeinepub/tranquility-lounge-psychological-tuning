import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { lessons } from '../data/lessons';
import LessonCard from '../components/library/LessonCard';
import CategorySection from '../components/library/CategorySection';

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container max-w-6xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">Learn</h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore psychoeducation lessons organised by the Four-Level Regulation Model. Each lesson takes 3-7 minutes and includes practical exercises.
        </p>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {searchQuery ? (
        <div className="space-y-4">
          <h2 className="text-xl font-light">Search Results</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
          {filteredLessons.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No lessons found matching your search.
            </p>
          )}
        </div>
      ) : (
        <Tabs defaultValue="core" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="core">Core: Interpret</TabsTrigger>
            <TabsTrigger value="regulate">Regulate: De-escalate</TabsTrigger>
            <TabsTrigger value="act">Act: Redesign</TabsTrigger>
            <TabsTrigger value="anchor">Anchor</TabsTrigger>
          </TabsList>

          <TabsContent value="core" className="space-y-4">
            <CategorySection
              category="core"
              title="Core: Interpret"
              description="Understanding thought patterns and cognitive flexibility"
            />
          </TabsContent>

          <TabsContent value="regulate" className="space-y-4">
            <CategorySection
              category="regulate"
              title="Regulate: De-escalate"
              description="Nervous system stabilisation and attention control"
            />
          </TabsContent>

          <TabsContent value="act" className="space-y-4">
            <CategorySection
              category="act"
              title="Act: Redesign"
              description="Habit formation and behavioural micro-actions"
            />
          </TabsContent>

          <TabsContent value="anchor" className="space-y-4">
            <CategorySection
              category="anchor"
              title="Shape Environment: Anchor"
              description="Sensory and environmental modulation"
            />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
