import { getTranslations } from 'next-intl/server';
import { CartClient } from '@/components/cart/CartClient';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Cart'});
  
  return {
    title: `${t('title')} | La Rotunda`
  };
}

export default async function CartPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params;
  return <CartClient locale={locale as 'en' | 'ar'} />;
}
