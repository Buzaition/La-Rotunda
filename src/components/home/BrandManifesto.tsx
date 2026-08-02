'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { assets } from '@/config/assets';

export function BrandManifesto() {
  const locale = useLocale();
  
  const content = {
    ar: {
      line1: 'لاروتندا مش مجرد وجبة.',
      line2: 'هي قرمشة متظبطة، خلطة معمولة صح، وحكاية بتبدأ من أول لقمة.'
    },
    en: {
      line1: 'La Rotunda is more than a meal.',
      line2: 'It is the crunch, the flavor, and the story behind every bite.'
    }
  };

  const text = content[locale as 'ar' | 'en'];

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.webp')] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-24 md:h-24 mb-10 opacity-20"
          >
            {/* Mascot Stamp */}
            <img 
              src={assets.brand.circular} 
              alt="Mascot" 
              className="w-full h-full object-contain opacity-50"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-arabic font-bold text-brand-strong leading-tight mb-8"
          >
            {text.line1}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl font-arabic text-foreground/80 leading-relaxed max-w-3xl"
          >
            {text.line2}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-px bg-brand/30 mt-12"
          />
        </div>
      </div>
    </section>
  );
}
