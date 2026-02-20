import { createContext, useContext, useEffect, useState, createElement } from 'react';
import type { ReactNode } from 'react';
import { useGetUserData } from './useQueries';

type TextSize = 'small' | 'medium' | 'large';

interface AccessibilityContextType {
  textSize: TextSize;
  highContrast: boolean;
  setTextSize: (size: TextSize) => void;
  setHighContrast: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider(props: AccessibilityProviderProps) {
  const [textSize, setTextSizeState] = useState<TextSize>('medium');
  const [highContrast, setHighContrastState] = useState(false);
  const { data: userData } = useGetUserData();

  useEffect(() => {
    if (userData) {
      const size = Number(userData.textSize);
      if (size === 14) setTextSizeState('small');
      else if (size === 18) setTextSizeState('large');
      else setTextSizeState('medium');
      setHighContrastState(userData.highContrast);
    }
  }, [userData]);

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply text size
    switch (textSize) {
      case 'small':
        root.style.setProperty('--text-size-base', '14px');
        root.style.setProperty('--text-size-scale', '0.875');
        break;
      case 'large':
        root.style.setProperty('--text-size-base', '18px');
        root.style.setProperty('--text-size-scale', '1.125');
        break;
      default:
        root.style.setProperty('--text-size-base', '16px');
        root.style.setProperty('--text-size-scale', '1');
    }

    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [textSize, highContrast]);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
  };

  const setHighContrast = (enabled: boolean) => {
    setHighContrastState(enabled);
  };

  const value: AccessibilityContextType = {
    textSize,
    highContrast,
    setTextSize,
    setHighContrast,
  };

  return createElement(AccessibilityContext.Provider, { value }, props.children);
}

export function useAccessibility(): AccessibilityContextType {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
}
