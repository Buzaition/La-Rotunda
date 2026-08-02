'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useMotionPreference } from '@/providers/MotionPreferenceProvider';
import { assets } from '@/config/assets';
import { Link } from '@/i18n/routing';
import { Play, Pause } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';

export function CinematicHero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const { reduceMotion, videoPlayback, setVideoPlayback } = useMotionPreference();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Handle Play/Pause based on preferences and viewport
  useEffect(() => {
    if (!videoRef.current || isVideoError) return;

    if (videoPlayback) {
      videoRef.current.play().catch(() => {
        setIsVideoError(true);
      });
    } else {
      videoRef.current.pause();
    }
  }, [videoPlayback, isVideoError]);

  // Pause when out of viewport
  useEffect(() => {
    if (!videoRef.current || isVideoError || !videoPlayback) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => setIsVideoError(true));
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);
    return () => {
      observer.disconnect();
    };
  }, [videoPlayback, isVideoError]);

  const togglePlayback = () => {
    setVideoPlayback(!videoPlayback);
  };

  return (
    <>
      {/* 
        =========================================================
        MOBILE HERO (Hidden on screens >= 768px)
        =========================================================
      */}
      <div 
        className="md:hidden relative min-h-[100svh] overflow-hidden bg-[#050505] grid"
        style={{ gridTemplateRows: '72px minmax(0, 0.54fr) minmax(0, 0.46fr)' }}
      >
        {/* Spacer to account for global fixed Header */}
        <div className="relative z-30 h-full w-full" />

        {/* Content Region */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-[18px] pt-[6px] pb-[18px]">
          <span className="inline-flex w-fit px-[12px] py-[8px] bg-[#d91d24] text-white text-[13px] font-bold leading-none mb-[18px]">
            {locale === 'ar' ? 'من أول قرمشة… تبدأ الحكاية' : t('eyebrow')}
          </span>
          
          <h1 className="max-w-full m-0 text-[clamp(2.5rem,11.5vw,3.5rem)] leading-[1.02] tracking-[-0.035em] font-extrabold font-english-display w-full">
            <span>{t('heading')}</span>
          </h1>
          
          <p className="mt-[18px] max-w-[33rem] text-[clamp(0.96rem,4.15vw,1.08rem)] leading-[1.7] text-white/80 font-arabic mx-auto">
            {locale === 'ar' ? 'فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.' : t('subheading')}
          </p>
          
          <div className="mt-[20px] grid grid-cols-[1.12fr_0.88fr] gap-[10px] w-full font-arabic">
            <Link 
              href="/menu" 
              className="min-h-[52px] bg-[#df2028] text-white border border-[#df2028] inline-flex items-center justify-center min-w-0 px-[10px] text-[clamp(0.83rem,3.5vw,0.96rem)] font-bold leading-[1.2] text-center rounded-[6px] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              {locale === 'ar' ? 'اطلب من أقرب فرع' : 'Order from branch'}
            </Link>
            <Link 
              href="/menu" 
              className="min-h-[52px] bg-white/10 text-white border border-white/20 backdrop-blur-md inline-flex items-center justify-center min-w-0 px-[10px] text-[clamp(0.83rem,3.5vw,0.96rem)] font-bold leading-[1.2] text-center rounded-[6px] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              {locale === 'ar' ? 'اكتشف المنيو' : 'Explore menu'}
            </Link>
          </div>
        </div>

        {/* Media Region */}
        <div className="relative overflow-hidden min-h-0 before:absolute before:inset-0 before:z-10 before:pointer-events-none before:bg-[linear-gradient(to_bottom,#050505_0%,rgba(5,5,5,0.72)_12%,rgba(5,5,5,0.16)_34%,transparent_55%)]">
          <picture className="absolute inset-0 w-full h-full">
            <source media="(max-width: 767px)" srcSet={assets.media.hero.posterMobile} />
            <img 
              src={assets.media.hero.posterMobile} 
              alt="La Rotunda" 
              style={{ transform: locale === 'en' ? 'scaleX(-1)' : 'none' }}
              className="w-full h-full object-cover object-[50%_58%]"
            />
          </picture>
        </div>
      </div>

      {/* 
        =========================================================
        DESKTOP HERO (Hidden on screens < 768px)
        =========================================================
      */}
      <div ref={containerRef} className="hidden md:flex relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black items-center">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          {!isVideoError && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setIsVideoError(true)}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 object-[center_top]",
                isVideoLoaded && videoPlayback ? "opacity-100" : "opacity-0"
              )}
              poster={assets.media.hero.posterDesktop}
            >
              <source src={assets.media.hero.desktopMp4} type="video/mp4" />
            </video>
          )}
          
          {/* Fallback Poster */}
          <picture className={cn(
            "absolute inset-0 w-full h-full",
            (!isVideoError && isVideoLoaded && videoPlayback) ? "hidden" : "block"
          )}>
            <img 
              src={assets.media.hero.posterDesktop} 
              alt="La Rotunda" 
              style={{ transform: locale === 'en' ? 'scaleX(-1)' : 'none' }}
              className="w-full h-full object-cover object-[center_top]"
            />
          </picture>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        </div>

        {/* Content */}
        <motion.div 
          style={{ opacity, y }}
          className="container mx-auto px-4 z-20 pt-20"
        >
          <div className="max-w-xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 bg-brand text-white text-sm font-bold uppercase tracking-wider mb-6">
                {t('eyebrow')}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-english-display font-bold uppercase tracking-wide leading-[1.1] mb-6"
            >
              {t('heading')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl font-arabic text-gray-200 leading-relaxed mb-10"
            >
              {t('subheading')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-row items-center gap-4"
            >
              <Link 
                href="/menu"
                className="px-8 py-4 bg-brand hover:bg-brand-strong text-white font-arabic font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(213,27,34,0.3)] hover:shadow-[0_0_30px_rgba(213,27,34,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                {t('primaryCTA')}
              </Link>
              <Link 
                href="/menu"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-arabic font-bold rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              >
                {t('secondaryCTA')}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Playback Control Button */}
        {!isVideoError && (
          <button
            onClick={togglePlayback}
            className="absolute bottom-8 right-8 z-30 px-4 py-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 flex items-center gap-2 text-sm font-bold font-arabic"
            aria-label={videoPlayback ? 'Pause background video' : 'Play background video'}
          >
            {videoPlayback ? (
              <>
                <Pause className="w-4 h-4" />
                {locale === 'ar' ? 'إيقاف الفيديو' : 'Pause Video'}
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                {locale === 'ar' ? 'تشغيل الفيديو' : 'Play Video'}
              </>
            )}
          </button>
        )}
      </div>
    </>
  );
}
