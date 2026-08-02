import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OffersClient } from '@/components/offers/OffersClient';
import { getTranslations } from 'next-intl/server';
import { offers } from '@/data/offers';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Navigation'});
  return {
    title: locale === 'ar' ? 'العروض | لاروتندا' : 'Offers | La Rotunda',
  };
}

export default async function OffersPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 mb-12 text-center md:text-start">
          <h1 className="text-4xl md:text-6xl font-arabic font-bold text-brand-strong mb-4">
            {locale === 'ar' ? 'عروض لاروتندا' : 'La Rotunda Offers'}
          </h1>
          <p className="text-xl text-muted font-arabic">
            {locale === 'ar' ? 'أقوى العروض بأسعار متتفوتش' : 'The strongest offers at unmissable prices'}
          </p>
        </div>
        <OffersClient initialOffers={offers} locale={locale as 'ar' | 'en'} />
      </main>
      <Footer />
    </>
  );
}
