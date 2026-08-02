'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// In a real app, this would come from a config or API
const announcement = {
  active: true,
  message: {
    en: 'Try our new La Rotunda Master Sandwich! Available in all branches.',
    ar: 'جرب ماستر ساندوتش لاروتندا الجديد! متاح في كل فروعنا.'
  },
  link: '/menu'
};

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(announcement.active);
  const locale = useLocale();

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-brand-strong text-white overflow-hidden relative z-[60]"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm font-arabic font-medium">
            <div className="flex-1 text-center">
              {announcement.message[locale as 'ar' | 'en']}
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
