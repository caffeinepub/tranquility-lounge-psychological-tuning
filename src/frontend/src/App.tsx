import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import AppLayout from './components/layout/AppLayout';
import Splash from './pages/Splash';
import { CrisisDisclaimer } from './pages/CrisisDisclaimer';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Reset from './pages/Reset';
import Library from './pages/Library';
import Lesson from './pages/Lesson';
import Tools from './pages/Tools';
import Plan from './pages/Plan';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { AccessibilityProvider } from './hooks/useAccessibility';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
});

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/onboarding',
  component: Onboarding,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

const resetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reset',
  component: Reset,
});

const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/library',
  component: Library,
});

const lessonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/library/lesson/$lessonId',
  component: Lesson,
});

const toolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tools',
  component: Tools,
});

const planRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plan',
  component: Plan,
});

const progressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/progress',
  component: Progress,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicy,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  onboardingRoute,
  dashboardRoute,
  resetRoute,
  libraryRoute,
  lessonRoute,
  toolsRoute,
  planRoute,
  progressRoute,
  settingsRoute,
  privacyRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showCrisis, setShowCrisis] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hasSeenCrisis = localStorage.getItem('hasSeenCrisisDisclaimer');

    const timer = setTimeout(() => {
      setShowSplash(false);
      if (!hasSeenCrisis) {
        setShowCrisis(true);
      } else {
        setIsReady(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  if (showCrisis) {
    return <CrisisDisclaimer />;
  }

  if (!isReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AccessibilityProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AccessibilityProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
