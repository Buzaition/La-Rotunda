'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { branches } from '@/data/branches';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { assets } from '@/config/assets';

export function Footer() {
  const t = useTranslations('Navigation');
  const common = useTranslations('Common');
  const footerT = useTranslations('Footer');
  const locale = useLocale() as 'ar' | 'en';
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm w-fit">
              <img 
                src={assets.brand.horizontal} 
                alt="La Rotunda" 
                className="h-10 w-auto object-contain dark:hidden"
              />
              <img 
                src={assets.brand.horizontalLight} 
                alt="La Rotunda" 
                className="h-10 w-auto object-contain hidden dark:block"
              />
            </Link>
            <p className="text-muted font-arabic">
              {locale === 'ar' 
                ? 'فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.' 
                : 'Crispy chicken, loaded sandwiches, and La Rotunda flavor made for every unforgettable bite.'}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://www.facebook.com/p/La-Rotunda-Fried-chickenBurger-61550986418273/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 fill-current" />
              </a>
              <a 
                href="https://www.instagram.com/la_rotunda2023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-arabic font-bold text-lg mb-2 text-foreground">{t('menu')}</h4>
            <Link href="/menu" className="text-muted hover:text-brand transition-colors font-arabic focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit">{t('menu')}</Link>
            <Link href="/offers" className="text-muted hover:text-brand transition-colors font-arabic focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit">{t('offers')}</Link>
            <Link href="/branches" className="text-muted hover:text-brand transition-colors font-arabic focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit">{t('branches')}</Link>
          </div>

          {/* About */}
          <div className="flex flex-col gap-4">
            <h4 className="font-arabic font-bold text-lg mb-2 text-foreground">{t('about')}</h4>
            <Link href="/about" className="text-muted hover:text-brand transition-colors font-arabic focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit">{t('about')}</Link>
            <Link href="/contact" className="text-muted hover:text-brand transition-colors font-arabic focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit">{t('contact')}</Link>
            <Link href="/careers" className="text-muted hover:text-brand transition-colors font-arabic focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit">{footerT('careers')}</Link>
          </div>

          {/* Order Lines */}
          <div className="flex flex-col gap-4">
            <h4 className="font-arabic font-bold text-lg mb-2 text-foreground">
              {locale === 'ar' ? 'أرقام الدليفري' : 'Delivery Lines'}
            </h4>
            {branches.map(branch => (
              <div key={branch.id} className="flex flex-col">
                <span className="text-sm font-arabic font-bold text-foreground mb-1">{branch.city[locale]}</span>
                <a 
                  href={`tel:${branch.phoneNumbers[0]}`}
                  className="text-brand hover:text-brand-strong transition-colors font-english-body text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-focus w-fit"
                  dir="ltr"
                >
                  {branch.phoneNumbers[0]}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted font-arabic text-center md:text-left">
            {footerT('copyright').replace('[YEAR]', year.toString())}
          </p>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
        
        <div className="mt-8 flex justify-center text-xs text-muted/50 font-english-body uppercase tracking-widest">
          Developed by Developer
        </div>
      </div>
    </footer>
  );
}
