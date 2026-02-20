import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2 } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import type { Lesson } from '../../data/lessons';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const navigate = useNavigate();
  
  // Check if lesson is completed
  const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
  const isCompleted = completedLessons.includes(lesson.id);

  return (
    <Card className="hover:border-amber-400 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline">{lesson.categoryLabel}</Badge>
          {isCompleted && (
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          )}
        </div>
        <CardTitle className="text-lg font-light">{lesson.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{lesson.estimatedMinutes} minutes</span>
        </div>
        <Button
          onClick={() => navigate({ to: '/library/lesson/$lessonId', params: { lessonId: lesson.id } })}
          className="w-full bg-amber-600 hover:bg-amber-700"
        >
          {isCompleted ? 'Review Lesson' : 'Start Lesson'}
        </Button>
      </CardContent>
    </Card>
  );
}
