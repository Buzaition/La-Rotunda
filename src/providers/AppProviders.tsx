'use client';

import { ThemeProvider } from './ThemeProvider';
import { BranchProvider } from './BranchProvider';
import { MotionPreferenceProvider } from './MotionPreferenceProvider';
import { CartProvider } from './CartProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MotionPreferenceProvider>
        <BranchProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </BranchProvider>
      </MotionPreferenceProvider>
    </ThemeProvider>
  );
}
