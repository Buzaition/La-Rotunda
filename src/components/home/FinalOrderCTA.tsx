'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useBranch } from '@/providers/BranchProvider';
import { branches } from '@/data/branches';
import { Phone, ArrowRight } from 'lucide-react';
import { assets } from '@/config/assets';

export function FinalOrderCTA() {
  const locale = useLocale() as 'ar' | 'en';
  const { selectedBranchId } = useBranch();
  
  const activeBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

  const content = {
    ar: {
      headline: 'جعان؟',
      subheadline: 'الحكاية أقرب مما تتخيل.',
      menuBtn: 'شوف المنيو',
      callBtn: 'اتصل الآن',
      branchBtn: 'اختار فرعك'
    },
    en: {
      headline: 'Hungry?',
      subheadline: 'Your next story is closer than you think.',
      menuBtn: 'View Menu',
      callBtn: 'Call Now',
      branchBtn: 'Choose Branch'
    }
  };

  const text = content[locale];

  return (
    <section className="py-24 md:py-32 bg-brand-strong text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 bg-repeat opacity-[0.05]"
        style={{ backgroundImage: `url(${assets.textures.diagonalStripes})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-6xl md:text-8xl font-arabic font-bold mb-4 drop-shadow-lg">
          {text.headline}
        </h2>
        <p className="text-2xl md:text-3xl font-arabic font-bold text-white/90 mb-12">
          {text.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
          <Link 
            href="/menu"
            className="flex-1 bg-white text-brand-strong hover:bg-gray-100 py-4 px-6 rounded-sm font-arabic font-bold text-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            {text.menuBtn}
          </Link>
          
          {selectedBranchId ? (
            <a 
              href={`tel:${activeBranch.phoneNumbers[0]}`}
              className="flex-1 bg-black/20 hover:bg-black/30 border border-white/20 py-4 px-6 rounded-sm font-arabic font-bold text-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-5 h-5" />
              {text.callBtn}
            </a>
          ) : (
            <Link 
              href="/branches"
              className="flex-1 bg-black/20 hover:bg-black/30 border border-white/20 py-4 px-6 rounded-sm font-arabic font-bold text-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {text.branchBtn}
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
