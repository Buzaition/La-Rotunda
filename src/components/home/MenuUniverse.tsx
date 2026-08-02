'use client';

import { useTranslations, useLocale } from 'next-intl';
import { categories } from '@/data/categories';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { useState } from 'react';

export function MenuUniverse() {
  const t = useTranslations('Actions');
  const locale = useLocale() as 'ar' | 'en';

  return (
    <section className="py-20 bg-surface-elevated">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              index={index} 
              locale={locale} 
              viewMenuText={t('viewMenu')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index, locale, viewMenuText }: any) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col h-[450px] bg-surface border border-border overflow-hidden"
    >
      <div className="absolute top-4 left-4 z-20 font-english-display text-6xl font-bold text-white/90 drop-shadow-md">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      <div className="relative h-[250px] overflow-hidden bg-black/5">
        {!imgError ? (
          <img 
            src={category.image}
            alt={category.name[locale]}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <BrandedPlaceholder className="w-full h-full" label={category.name[locale]} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-2xl font-arabic font-bold text-brand-strong mb-3 group-hover:text-brand transition-colors">
          {category.name[locale]}
        </h3>
        <p className="text-muted text-sm font-arabic line-clamp-3 mb-6">
          {category.description[locale]}
        </p>
        
        <Link 
          href={`/menu?category=${category.id}`}
          className="mt-auto inline-flex items-center gap-2 text-brand font-arabic font-bold hover:text-brand-strong transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit rounded-sm"
        >
          <span className="relative">
            {viewMenuText}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
          </span>
          <span className="rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
