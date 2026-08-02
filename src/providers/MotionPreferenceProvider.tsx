'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface MotionPreferenceContextType {
  reduceMotion: boolean;
  setReduceMotion: (reduce: boolean) => void;
  videoPlayback: boolean;
  setVideoPlayback: (play: boolean) => void;
}

const MotionPreferenceContext = createContext<MotionPreferenceContextType | undefined>(undefined);

export function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotionState] = useState<boolean>(false);
  const [videoPlayback, setVideoPlaybackState] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check OS level preference first
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const defaultReduce = mediaQuery.matches;
    
    const storedReduce = localStorage.getItem('reduceMotion');
    if (storedReduce !== null) {
      setReduceMotionState(storedReduce === 'true');
    } else {
      setReduceMotionState(defaultReduce);
    }
    
    const storedVideo = localStorage.getItem('videoPlayback');
    if (storedVideo !== null) {
      setVideoPlaybackState(storedVideo === 'true');
    } else {
      setVideoPlaybackState(!defaultReduce); // If reduced motion is preferred, pause video by default
    }
    
    // Listen for OS changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('reduceMotion') === null) {
        setReduceMotionState(e.matches);
        if (localStorage.getItem('videoPlayback') === null) {
          setVideoPlaybackState(!e.matches);
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setReduceMotion = (reduce: boolean) => {
    setReduceMotionState(reduce);
    localStorage.setItem('reduceMotion', String(reduce));
  };
  
  const setVideoPlayback = (play: boolean) => {
    setVideoPlaybackState(play);
    localStorage.setItem('videoPlayback', String(play));
  };

  return (
    <MotionPreferenceContext.Provider value={{ 
      reduceMotion: mounted ? reduceMotion : false, 
      setReduceMotion,
      videoPlayback: mounted ? videoPlayback : true,
      setVideoPlayback
    }}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference() {
  const context = useContext(MotionPreferenceContext);
  if (context === undefined) {
    throw new Error('useMotionPreference must be used within a MotionPreferenceProvider');
  }
  return context;
}
