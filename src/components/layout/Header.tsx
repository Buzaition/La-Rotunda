'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from '../navigation/MobileNav';
import { AnnouncementBar } from '../home/AnnouncementBar';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { assets } from '@/config/assets';

export function Header() {
  const t = useTranslations('Navigation');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <AnnouncementBar />
      <header
        className={cn(
          "transition-all duration-300 w-full",
          isScrolled ? "bg-surface/90 backdrop-blur-md shadow-sm py-3 border-b border-border" : "bg-transparent py-5"
        )}
      >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm">
          {/* Light Mode Logo */}
          <img 
            src={assets.brand.horizontal} 
            alt="La Rotunda" 
            className="h-9 w-auto object-contain dark:hidden"
          />
          {/* Light Logo for Dark Mode */}
          <img 
            src={assets.brand.horizontalLight} 
            alt="La Rotunda" 
            className="h-8 md:h-10 w-auto object-contain hidden dark:block"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 font-arabic text-sm font-medium">
          <Link href="/" className="hover:text-brand transition-colors">{t('home')}</Link>
          <Link href="/menu" className="hover:text-brand transition-colors">{t('menu')}</Link>
          <Link href="/offers" className="hover:text-brand transition-colors">{t('offers')}</Link>
          <Link href="/branches" className="hover:text-brand transition-colors">{t('branches')}</Link>
          <Link href="/about" className="hover:text-brand transition-colors">{t('about')}</Link>
          <Link href="/contact" className="hover:text-brand transition-colors">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 border-r border-border pr-4 mr-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <Link 
            href="/menu"
            className="hidden md:inline-flex bg-brand hover:bg-brand-strong text-white px-6 py-2 rounded-sm font-arabic font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            {t('orderNow')}
          </Link>
          
          {/* Mobile menu trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  </div>
  );
}
