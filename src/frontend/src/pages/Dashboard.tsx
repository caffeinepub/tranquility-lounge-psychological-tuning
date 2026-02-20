import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useGetUserData } from '../hooks/useQueries';
import IntensityCheck from '../components/dashboard/IntensityCheck';
import SuggestedNextStep from '../components/dashboard/SuggestedNextStep';
import QuickAccessButtons from '../components/dashboard/QuickAccessButtons';
import StreakDisplay from '../components/dashboard/StreakDisplay';

export default function Dashboard() {
  const navigate = useNavigate();
  const { data: userData, isLoading } = useGetUserData();

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('hasCompletedOnboarding');
    if (!hasCompletedOnboarding && !isLoading && !userData) {
      navigate({ to: '/onboarding' });
    }
  }, [userData, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-light tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="text-muted-foreground">
          How are you feeling today?
        </p>
      </div>

      <IntensityCheck />
      
      <SuggestedNextStep userData={userData} />
      
      <StreakDisplay />
      
      <QuickAccessButtons />
    </div>
  );
}
