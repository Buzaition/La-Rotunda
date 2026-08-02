'use client';

import { useState, useEffect } from 'react';
import { Offer } from '@/types/offer';
import { useBranch } from '@/providers/BranchProvider';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';
import { Clock } from 'lucide-react';
import { Link } from '@/i18n/routing';

interface OffersClientProps {
  initialOffers: Offer[];
  locale: 'ar' | 'en';
}

export function OffersClient({ initialOffers, locale }: OffersClientProps) {
  const { selectedBranchId } = useBranch();
  const [activeOffers, setActiveOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const now = new Date();
    const valid = initialOffers.filter(offer => {
      if (!offer.active) return false;
      if (offer.startAt && new Date(offer.startAt) > now) return false;
      if (offer.endAt && new Date(offer.endAt) < now) return false;
      if (selectedBranchId && !offer.branchIds.includes(selectedBranchId)) return false;
      return true;
    });
    setActiveOffers(valid);
  }, [initialOffers, selectedBranchId]);

  if (activeOffers.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <div className="bg-surface-elevated border border-border rounded-lg p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-arabic font-bold text-foreground mb-4">
            {locale === 'ar' ? 'مفيش عروض متاحة حالياً' : 'No offers currently available'}
          </h2>
          <p className="text-muted font-arabic text-lg mb-8">
            {locale === 'ar' 
              ? 'تأكد من اختيار الفرع الصحيح، أو تابعنا عشان تعرف أحدث العروض أول ما تنزل.' 
              : 'Make sure the correct branch is selected, or follow us to catch our latest deals.'}
          </p>
          <Link 
            href="/menu"
            className="inline-flex px-8 py-3 bg-brand hover:bg-brand-strong text-white font-arabic font-bold rounded-sm transition-colors"
          >
            {locale === 'ar' ? 'شوف المنيو' : 'View Menu'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activeOffers.map(offer => (
          <OfferCard key={offer.id} offer={offer} locale={locale} />
        ))}
      </div>
    </div>
  );
}

function OfferCard({ offer, locale }: { offer: Offer, locale: 'ar' | 'en' }) {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden flex flex-col group hover:border-brand/30 transition-colors shadow-sm">
      <div className="relative h-64 bg-black/5">
        {!imgError ? (
          <img 
            src={offer.image} 
            alt={offer.title[locale]} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BrandedPlaceholder className="w-full h-full" label={offer.title[locale]} />
        )}
        
        {offer.endAt && (
          <div className="absolute bottom-4 left-4 rtl:right-4 rtl:left-auto bg-black/80 backdrop-blur-sm text-white px-3 py-2 text-xs font-arabic font-bold rounded-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand" />
            <span dir="ltr">
              {new Date(offer.endAt).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US')}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-arabic font-bold text-brand-strong mb-3">
          {offer.title[locale]}
        </h3>
        <p className="text-muted font-arabic mb-6 text-lg leading-relaxed">
          {offer.description[locale]}
        </p>
        
        {offer.terms && offer.terms[locale].length > 0 && (
          <ul className="mt-auto mb-6 flex flex-col gap-1 text-sm text-muted font-arabic list-disc list-inside opacity-70">
            {offer.terms[locale].map((term, i) => (
              <li key={i}>{term}</li>
            ))}
          </ul>
        )}
        
        <Link 
          href="/menu"
          className="w-full py-4 text-center bg-brand hover:bg-brand-strong text-white font-arabic font-bold rounded-sm transition-colors mt-auto"
        >
          {locale === 'ar' ? 'اطلب العرض' : 'Order Offer'}
        </Link>
      </div>
    </div>
  );
}
