import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function AboutSection() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname || 'tranquility-lounge')
    : 'tranquility-lounge';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-light">About</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium mb-1">Tranquility Lounge Psychological Tuning</h3>
          <p className="text-sm text-muted-foreground">Version 1.0.0</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Valentina D. Diaconu
          </p>
        </div>
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-rose-500 fill-current" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
