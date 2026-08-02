'use client';

import { useTranslations, useLocale } from 'next-intl';
import { offers } from '@/data/offers';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { useState, useEffect } from 'react';
import { Offer } from '@/types/offer';

export function FeaturedOffers() {
  const t = useTranslations('Actions');
  const common = useTranslations('Common');
  const locale = useLocale() as 'ar' | 'en';
  
  const [activeOffers, setActiveOffers] = useState<Offer[]>([]);

  useEffect(() => {
    // Client-side date filtering to avoid hydration mismatch
    const now = new Date();
    const valid = offers.filter(offer => {
      if (!offer.active) return false;
      if (offer.startAt && new Date(offer.startAt) > now) return false;
      if (offer.endAt && new Date(offer.endAt) < now) return false;
      return true;
    });
    setActiveOffers(valid);
  }, []);

  if (activeOffers.length === 0) {
    return (
      <section className="py-24 bg-brand-strong text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-3xl font-arabic font-bold mb-4">
            {locale === 'ar' ? 'انتظروا أقوى العروض قريباً' : 'Wait for our strongest offers soon'}
          </h3>
          <p className="text-white/80 font-arabic mb-8">
            {locale === 'ar' 
              ? 'احنا دايماً بنجهز مفاجآت وعروض متتفوتش. خليك متابعنا!' 
              : 'We are always preparing unmissable surprises and offers. Stay tuned!'}
          </p>
          <Link 
            href="/menu"
            className="inline-flex px-8 py-4 bg-white text-brand-strong hover:bg-gray-100 font-arabic font-bold rounded-sm transition-colors"
          >
            {t('viewMenu')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface-elevated">
      {/* Implementation of active offers mapping goes here */}
    </section>
  );
}
