import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BranchExperience } from '@/components/home/BranchExperience';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Navigation'});
  return {
    title: locale === 'ar' ? 'الفروع | لاروتندا' : 'Branches | La Rotunda',
  };
}

export default async function BranchesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-0 bg-background flex flex-col">
        <div className="container mx-auto px-4 mb-4 text-center">
          <h1 className="text-4xl md:text-6xl font-arabic font-bold text-brand-strong mb-4">
            {locale === 'ar' ? 'فروع لاروتندا' : 'La Rotunda Branches'}
          </h1>
        </div>
        <div className="flex-1">
          <BranchExperience />
        </div>
      </main>
      <Footer />
    </>
  );
}
