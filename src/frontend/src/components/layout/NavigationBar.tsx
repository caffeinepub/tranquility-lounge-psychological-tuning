import { useNavigate, useLocation } from '@tanstack/react-router';
import { Home, BookOpen, Wrench, TrendingUp, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: BookOpen, label: 'Library', path: '/library' },
    { icon: Wrench, label: 'Tools', path: '/tools' },
    { icon: TrendingUp, label: 'Progress', path: '/progress' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:top-0 md:bottom-auto z-40">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-around md:justify-start md:gap-1 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || 
                           (item.path === '/library' && location.pathname.startsWith('/library'));
            
            return (
              <button
                key={item.path}
                onClick={() => navigate({ to: item.path })}
                className={cn(
                  'flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  isActive && 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30'
                )}
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
