'use client';

import { ThemeProvider } from './ThemeProvider';
import { BranchProvider } from './BranchProvider';
import { MotionPreferenceProvider } from './MotionPreferenceProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MotionPreferenceProvider>
        <BranchProvider>
          {children}
        </BranchProvider>
      </MotionPreferenceProvider>
    </ThemeProvider>
  );
}
