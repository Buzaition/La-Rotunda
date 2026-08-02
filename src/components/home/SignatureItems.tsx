'use client';

import { useTranslations, useLocale } from 'next-intl';
import { menu } from '@/data/menu';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { cn } from '@/lib/utils';

export function SignatureItems() {
  const t = useTranslations('Actions');
  const common = useTranslations('Common');
  const locale = useLocale() as 'ar' | 'en';
  
  // Filter for featured items based on popular flag
  const signatureItems = menu.filter(item => item.popular).slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-english-display uppercase tracking-widest text-brand font-bold mb-3">
              Signature Collection
            </h2>
            <h3 className="text-4xl md:text-5xl font-arabic font-bold text-foreground">
              {locale === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
            </h3>
          </div>
          <Link 
            href="/menu"
            className="px-6 py-3 border-2 border-brand text-brand hover:bg-brand hover:text-white transition-colors font-arabic font-bold rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shrink-0"
          >
            {t('viewMenu')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {signatureItems.map((item, index) => {
            // First item gets a larger span
            const isLarge = index === 0;
            const spanClass = isLarge ? "lg:col-span-8" : "lg:col-span-4";
            
            return (
              <SignatureCard 
                key={item.id} 
                item={item} 
                locale={locale} 
                isLarge={isLarge}
                className={spanClass}
                orderText={t('order')}
                popularText={common('popular')}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SignatureCard({ item, locale, isLarge, className, orderText, popularText }: any) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("group relative bg-surface-elevated border border-border overflow-hidden flex flex-col", className)}
    >
      <div className={cn("relative overflow-hidden bg-surface", isLarge ? "h-[300px] md:h-[400px]" : "h-[250px]")}>
        {!imgError ? (
          <img 
            src={item.image}
            alt={item.name[locale]}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BrandedPlaceholder className="w-full h-full" label={item.name[locale]} />
        )}
        
        {item.popular && (
          <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto bg-brand text-white px-3 py-1 text-xs font-arabic font-bold rounded-sm shadow-sm z-10">
            {popularText}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1 border-t border-border/50">
        <h4 className="text-xl md:text-2xl font-arabic font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
          {item.name[locale]}
        </h4>
        <p className="text-muted text-sm font-arabic line-clamp-2 mb-6">
          {item.description[locale]}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <Link 
            href={`/menu`}
            className="text-brand font-arabic font-bold hover:text-brand-strong transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            {orderText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
