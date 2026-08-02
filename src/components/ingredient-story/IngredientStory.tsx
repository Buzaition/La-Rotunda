'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useMotionPreference } from '@/providers/MotionPreferenceProvider';
import { useEffect, useRef, useState } from 'react';
import { assets } from '@/config/assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function IngredientStory() {
  const locale = useLocale() as 'ar' | 'en';
  const { reduceMotion } = useMotionPreference();
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const title = locale === 'ar' ? 'من القرمشة للسندوتش' : 'From crunch to sandwich';
  const subtitle = locale === 'ar' ? 'كل مكون له دور في الحكاية' : 'Every ingredient plays a part';

  useEffect(() => {
    if (reduceMotion || !containerRef.current || !layersRef.current || !textRef.current) return;

    const container = containerRef.current;
    const layers = Array.from(layersRef.current.children);
    const texts = Array.from(textRef.current.children);

    let ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
        }
      });

      // Initial state - spread out
      gsap.set(layers, { 
        y: (i) => -150 * (layers.length - i),
        opacity: 0,
        scale: 1.2
      });

      // The bottom bun is already there
      gsap.set(layers[layers.length - 1], { y: 0, opacity: 1, scale: 1 });

      // Build the sandwich and show text
      layers.forEach((layer, i) => {
        if (i === layers.length - 1) return; // Skip bottom bun

        tl.to(layer, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, i * 0.5);

        // Highlight corresponding text
        if (texts[i]) {
          tl.to(texts, { opacity: 0.3, duration: 0.2 }, i * 0.5)
            .to(texts[i], { opacity: 1, color: "var(--brand)", scale: 1.1, duration: 0.3 }, i * 0.5);
        }
      });

      // Final compression
      tl.to(layers, {
        y: (i) => (layers.length - i) * 2, // Slight compression
        duration: 0.5
      });
      tl.to(texts, { opacity: 1, color: "var(--foreground)", scale: 1, duration: 0.5 }, "-=0.5");

    }, container);

    return () => ctx.revert();
  }, [reduceMotion]);

  const ingredients = [
    { id: 'topBun', src: assets.media.ingredients.topBun, name: { ar: 'عيش كيزر طازج', en: 'Fresh Kaiser Bun' } },
    { id: 'sauce', src: assets.media.ingredients.houseSauce, name: { ar: 'صوص لاروتندا', en: 'La Rotunda Sauce' } },
    { id: 'lettuce', src: assets.media.ingredients.lettuce, name: { ar: 'خس مقرمش', en: 'Crispy Lettuce' } },
    { id: 'cheese', src: assets.media.ingredients.cheese, name: { ar: 'شريحة شيدر', en: 'Cheddar Slice' } },
    { id: 'fillet', src: assets.media.ingredients.crispyFillet, name: { ar: 'فيليه مقرمش', en: 'Crispy Fillet' } },
    { id: 'bottomBun', src: assets.media.ingredients.bottomBun, name: { ar: 'القاعدة', en: 'The Base' } }
  ];

  return (
    <section ref={containerRef} className="h-screen min-h-[600px] bg-background relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/noise-texture.webp')] pointer-events-none" />
      
      <div className="container mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-arabic font-bold text-brand-strong mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted font-arabic">
              {subtitle}
            </p>
          </div>
          
          <div ref={textRef} className={cn("flex flex-col gap-4 font-arabic text-xl md:text-2xl font-bold", reduceMotion ? "opacity-100" : "")}>
            {ingredients.map((ing, i) => (
              <div key={ing.id} className={cn("transition-colors", reduceMotion ? "text-foreground" : "opacity-30")}>
                <span className="text-sm font-english-display text-muted mr-4 rtl:ml-4 rtl:mr-0">0{i + 1}</span>
                {ing.name[locale]}
              </div>
            ))}
          </div>
        </div>

        {/* Visual Section */}
        <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          {reduceMotion ? (
            // Static Fallback
            <div className="relative w-full max-w-md aspect-square bg-surface border border-border flex items-center justify-center p-8">
              <BrandedPlaceholder className="w-full h-full" label={locale === 'ar' ? 'ماستر ساندوتش' : 'Master Sandwich'} />
            </div>
          ) : (
            // Animated Layers
            <div ref={layersRef} className="relative w-full max-w-sm aspect-[3/4]">
              {ingredients.map((ing, i) => {
                const zIndex = ingredients.length - i;
                return (
                  <div 
                    key={ing.id} 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex }}
                  >
                    <img 
                      src={ing.src} 
                      alt={ing.name[locale]} 
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        // Fallback to placeholder if image fails to load during animation development
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
