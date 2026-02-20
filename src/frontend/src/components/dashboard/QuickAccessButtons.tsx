import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, FileText, BookOpen, TrendingUp } from 'lucide-react';

export default function QuickAccessButtons() {
  const navigate = useNavigate();

  const buttons = [
    { icon: RotateCcw, label: 'Reset', path: '/reset', color: 'amber' },
    { icon: FileText, label: 'My Plan', path: '/plan', color: 'orange' },
    { icon: BookOpen, label: 'Library', path: '/library', color: 'rose' },
    { icon: TrendingUp, label: 'Progress', path: '/progress', color: 'amber' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {buttons.map((button) => {
        const Icon = button.icon;
        return (
          <Card
            key={button.path}
            className="cursor-pointer transition-all hover:border-amber-400 hover:shadow-md"
            onClick={() => navigate({ to: button.path })}
          >
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <span className="font-medium">{button.label}</span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
