import { useNavigate, useLocation } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export default function ResetButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on reset page itself
  if (location.pathname === '/reset') {
    return null;
  }

  return (
    <Button
      onClick={() => navigate({ to: '/reset' })}
      className="fixed bottom-24 right-6 md:bottom-6 h-14 w-14 rounded-full shadow-lg bg-amber-600 hover:bg-amber-700 text-white z-50"
      size="icon"
      aria-label="Reset Now"
    >
      <RotateCcw className="h-6 w-6" />
    </Button>
  );
}
