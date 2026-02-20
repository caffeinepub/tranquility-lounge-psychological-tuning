import { getLessonsByCategory, type Lesson } from '../../data/lessons';
import LessonCard from './LessonCard';

interface CategorySectionProps {
  category: Lesson['category'];
  title: string;
  description: string;
}

export default function CategorySection({ category, title, description }: CategorySectionProps) {
  const lessons = getLessonsByCategory(category);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-light mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
