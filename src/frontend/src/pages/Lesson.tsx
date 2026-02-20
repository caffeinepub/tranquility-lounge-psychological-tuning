import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react';
import { getLessonById } from '../data/lessons';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Lesson() {
  const { lessonId } = useParams({ from: '/library/lesson/$lessonId' });
  const navigate = useNavigate();
  const lesson = getLessonById(lessonId);
  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Lesson not found</p>
            <Button
              onClick={() => navigate({ to: '/library' })}
              variant="outline"
              className="mt-4"
            >
              Return to Library
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleComplete = () => {
    setCompleted(true);
    toast.success('Lesson completed');
    
    // Store completion in localStorage
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completedLessons.includes(lesson.id)) {
      completedLessons.push(lesson.id);
      localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 space-y-6">
      <Button
        onClick={() => navigate({ to: '/library' })}
        variant="ghost"
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Library
      </Button>

      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <Badge variant="outline" className="mb-2">
                {lesson.categoryLabel}
              </Badge>
              <CardTitle className="text-3xl font-light">
                {lesson.title}
              </CardTitle>
            </div>
            {completed && (
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{lesson.estimatedMinutes} minutes</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="prose prose-amber dark:prose-invert max-w-none">
            {lesson.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-light">Practice</h3>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="leading-relaxed">{lesson.practice}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-light">Apply Today</h3>
            <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <p className="leading-relaxed">{lesson.microTask}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-light">Journal Prompt (Optional)</h3>
            <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
              <p className="leading-relaxed italic">{lesson.journalPrompt}</p>
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={handleComplete}
              disabled={completed}
              className="w-full bg-amber-600 hover:bg-amber-700"
              size="lg"
            >
              {completed ? 'Completed' : 'Mark as Complete'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
