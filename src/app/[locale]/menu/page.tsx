import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MenuClient } from '@/components/menu/MenuClient';
import { getTranslations } from 'next-intl/server';
import { menu } from '@/data/menu';
import { categories } from '@/data/categories';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Navigation'});
  return {
    title: locale === 'ar' ? 'المنيو | لاروتندا' : 'Menu | La Rotunda',
  };
}

export default async function MenuPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 bg-background">
        <MenuClient initialMenu={menu} categories={categories} locale={locale as 'ar' | 'en'} />
      </main>
      <Footer />
    </>
  );
}
