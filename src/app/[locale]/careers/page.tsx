import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getTranslations } from 'next-intl/server';
import { careers } from '@/data/careers';
import { CareersClient } from '@/components/careers/CareersClient';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Footer'});
  return {
    title: locale === 'ar' ? 'الوظائف | لاروتندا' : 'Careers | La Rotunda',
  };
}

export default async function CareersPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-brand-strong mb-6">
              {locale === 'ar' ? 'انضم لفريق لاروتندا' : 'Join La Rotunda Team'}
            </h1>
            <p className="text-xl md:text-2xl text-muted font-arabic">
              {locale === 'ar' 
                ? 'إحنا دايماً بندور على ناس طموحة تشاركنا نجاحنا وتكبر معانا.' 
                : 'We are always looking for ambitious people to share our success and grow with us.'}
            </p>
          </div>
          
          <CareersClient initialCareers={careers} locale={locale as 'ar' | 'en'} />
        </div>
      </main>
      <Footer />
    </>
  );
}
