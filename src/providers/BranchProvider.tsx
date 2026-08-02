'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface BranchContextType {
  selectedBranchId: string | null;
  setSelectedBranchId: (id: string) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const [selectedBranchId, setSelectedBranchIdState] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('selectedBranch');
    if (stored) {
      setSelectedBranchIdState(stored);
    }
  }, []);

  const setSelectedBranchId = (id: string) => {
    setSelectedBranchIdState(id);
    localStorage.setItem('selectedBranch', id);
  };

  return (
    <BranchContext.Provider value={{ selectedBranchId: mounted ? selectedBranchId : null, setSelectedBranchId }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
}
