'use client';

import { useLocale } from 'next-intl';
import { assets } from '@/config/assets';
import { motion } from 'framer-motion';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function EditorialGallery() {
  const locale = useLocale() as 'ar' | 'en';
  
  const images = [
    { id: 1, type: 'large', label: locale === 'ar' ? 'فرايد تشيكن مقرمش' : 'Crispy Fried Chicken', src: '/media/gallery/gallery-1.webp' },
    { id: 2, type: 'small', label: locale === 'ar' ? 'تجهيز الساندوتش' : 'Sandwich Prep', src: '/media/gallery/gallery-2.webp' },
    { id: 3, type: 'small', label: locale === 'ar' ? 'صوصات لاروتندا' : 'La Rotunda Sauces', src: '/media/gallery/gallery-3.webp' },
    { id: 4, type: 'medium', label: locale === 'ar' ? 'أجواء المطعم' : 'Restaurant Vibes', src: '/media/gallery/gallery-4.webp' },
    { id: 5, type: 'medium', label: locale === 'ar' ? 'بوكس العيلة' : 'Family Box', src: '/media/gallery/gallery-5.webp' },
  ];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <GalleryItem key={img.id} item={img} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ item, index }: any) {
  const [imgError, setImgError] = useState(false);
  
  let spanClass = "col-span-1";
  if (item.type === 'large') spanClass = "col-span-2 row-span-2";
  else if (item.type === 'medium') spanClass = "col-span-2 row-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn("group relative overflow-hidden bg-surface-elevated border border-border", spanClass)}
    >
      {!imgError ? (
        <img 
          src={item.src}
          alt={item.label}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
      ) : (
        <BrandedPlaceholder className="w-full h-full" label={item.label} />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-white font-arabic font-bold text-lg drop-shadow-md">
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}
