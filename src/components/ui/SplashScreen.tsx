'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/config/assets';

export function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // In development, the load event might have already fired or might take very long.
    // We'll set a minimum display time of 1.5s, and maximum of 3s to ensure it doesn't get stuck.
    const maxTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const handleLoad = () => {
      // Ensure we at least show it for 1.2s for the animation to play out
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(maxTimeout);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url(${assets.textures.noiseTexture})` }}
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <img 
                src={assets.brand.mascot} 
                alt="La Rotunda" 
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-contain drop-shadow-2xl animate-pulse"
              />
            </div>
            
            <div className="flex gap-2">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                className="w-3 h-3 bg-brand rounded-full"
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 bg-brand rounded-full"
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                className="w-3 h-3 bg-brand rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
