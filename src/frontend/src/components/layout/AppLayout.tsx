import { type ReactNode } from 'react';
import { useLocation } from '@tanstack/react-router';
import ResetButton from './ResetButton';
import NavigationBar from './NavigationBar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();
  
  // Don't show navigation on splash, crisis, or onboarding
  const hideNav = ['/', '/onboarding'].includes(location.pathname) || 
                  location.pathname === '/';
  
  // Check if we're on a page that should show the layout
  const showLayout = !hideNav && location.pathname !== '/';

  if (!showLayout) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20 md:pb-8">
        {children}
      </main>
      <ResetButton />
      <NavigationBar />
    </div>
  );
}
