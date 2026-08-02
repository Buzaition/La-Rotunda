'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { ThemeSwitcher } from '../layout/ThemeSwitcher';
import { LanguageSwitcher } from '../layout/LanguageSwitcher';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/config/assets';

export function MobileNav() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // Close on navigation
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/menu', label: t('menu') },
    { href: '/offers', label: t('offers') },
    { href: '/branches', label: t('branches') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-focus relative z-50"
        aria-label="Open Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <img 
                src={assets.brand.primary} 
                alt="La Rotunda" 
                className="h-12 w-auto object-contain dark:hidden"
              />
              <img 
                src={assets.brand.horizontalLight} 
                alt="La Rotunda" 
                className="h-8 w-auto object-contain hidden dark:block"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-focus bg-black/5 dark:bg-white/10 rounded-full"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4 font-arabic text-2xl font-bold">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="hover:text-brand transition-colors py-2 border-b border-border/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-6">
                <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 p-4 rounded-lg">
                  <span className="font-arabic font-medium">Settings</span>
                  <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                  </div>
                </div>
                
                <Link 
                  href="/menu"
                  className="bg-brand text-white text-center py-4 rounded-lg font-arabic font-bold text-lg hover:bg-brand-strong transition-colors"
                >
                  {t('orderNow')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
