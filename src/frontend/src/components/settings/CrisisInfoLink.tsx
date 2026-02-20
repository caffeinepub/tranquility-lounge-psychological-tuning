import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function CrisisInfoLink() {
  return (
    <div className="space-y-4">
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm">
            <p className="font-medium">If you are at immediate risk:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Call 999 for emergency assistance</li>
              <li>• Contact Samaritans: 116 123 (24/7)</li>
              <li>• Text SHOUT to 85258</li>
              <li>• Call NHS 111 for urgent advice</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        This app provides psychoeducation and self-regulation support. It is not a substitute for professional mental health care or emergency services.
      </p>
    </div>
  );
}
