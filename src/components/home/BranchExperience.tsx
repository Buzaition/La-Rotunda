'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useBranch } from '@/providers/BranchProvider';
import { branches } from '@/data/branches';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { useState } from 'react';

export function BranchExperience() {
  const t = useTranslations('Actions');
  const locale = useLocale() as 'ar' | 'en';
  const { selectedBranchId, setSelectedBranchId } = useBranch();
  
  // Default to first branch if none selected
  const activeBranch = branches.find(b => b.id === selectedBranchId) || branches[0];
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-brand-strong mb-4">
            {locale === 'ar' ? 'اختار فرعك الأقرب' : 'Choose your nearest branch'}
          </h2>
          <p className="text-lg text-muted font-arabic max-w-2xl mx-auto">
            {locale === 'ar' 
              ? 'موجودين في المنوفية عشان نكون جنبك دايماً. اختار الفرع واستمتع بأقوى قرمشة.' 
              : 'Located across Monufia to always be near you. Choose a branch and enjoy the crunch.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Branch List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {branches.map(branch => (
              <button
                key={branch.id}
                onClick={() => {
                  setSelectedBranchId(branch.id);
                  setImgError(false);
                }}
                className={cn(
                  "text-left p-6 border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                  activeBranch.id === branch.id 
                    ? "bg-brand text-white border-brand shadow-lg" 
                    : "bg-surface-elevated border-border hover:border-brand/50 text-foreground"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-arabic font-bold">{branch.city[locale]}</h3>
                  {activeBranch.id === branch.id && (
                    <motion.div layoutId="branch-indicator" className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <p className={cn(
                  "text-sm font-arabic line-clamp-1",
                  activeBranch.id === branch.id ? "text-white/80" : "text-muted"
                )}>
                  {branch.address[locale]}
                </p>
              </button>
            ))}
          </div>

          {/* Branch Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-elevated border border-border overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-64 bg-black/5">
                  {!imgError ? (
                    <img 
                      src={activeBranch.image} 
                      alt={activeBranch.city[locale]} 
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <BrandedPlaceholder className="w-full h-full" label={activeBranch.city[locale]} />
                  )}
                </div>
                
                <div className="p-8 flex-1 flex flex-col gap-6">
                  <h3 className="text-3xl font-arabic font-bold text-brand-strong">
                    {activeBranch.city[locale]}
                  </h3>
                  
                  <div className="flex flex-col gap-4 font-arabic">
                    <div className="flex items-start gap-4 text-foreground">
                      <MapPin className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                      <span className="text-lg leading-relaxed">{activeBranch.address[locale]}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-foreground">
                      <Clock className="w-6 h-6 text-brand shrink-0" />
                      <span className="text-lg">
                        {activeBranch.openingHours.open} - {activeBranch.openingHours.close} ({activeBranch.openingHours.days[locale]})
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-foreground">
                      <Phone className="w-6 h-6 text-brand shrink-0" />
                      <div className="flex flex-wrap gap-4">
                        {activeBranch.phoneNumbers.map(phone => (
                          <a 
                            key={phone} 
                            href={`tel:${phone}`}
                            className="text-lg font-bold hover:text-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                          >
                            <span dir="ltr">{phone}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 flex flex-wrap gap-4">
                    <a 
                      href={`tel:${activeBranch.phoneNumbers[0]}`}
                      className="flex-1 min-w-[200px] text-center py-4 bg-brand hover:bg-brand-strong text-white font-arabic font-bold rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                    >
                      {t('callNow')}
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
