import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import { Alexandria, Inter, Barlow_Condensed } from 'next/font/google';
import { AppProviders } from '@/providers/AppProviders';
import { AIChatbot } from '@/components/chat/AIChatbot';
import { SplashScreen } from '@/components/ui/SplashScreen';
import '@/app/globals.css';

const alexandria = Alexandria({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-alexandria'
});
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
});
const barlowCondensed = Barlow_Condensed({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed'
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Navigation'});
  return {
    title: locale === 'ar' ? 'لاروتندا | فرايد تشيكن وبرجر في المنوفية' : 'La Rotunda | Fried Chicken & Burgers in Monufia',
    description: 'La Rotunda Fried Chicken & Burger',
    icons: {
      icon: [
        { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/brand/favicon-64.png', sizes: '64x64', type: 'image/png' },
        { url: '/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/brand/favicon-512.png', sizes: '512x512', type: 'image/png' }
      ],
      apple: [
        { url: '/brand/logo-app-icon.png' }
      ]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();
  
  const isRtl = locale === 'ar';
  
  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/brand/logo-mascot.png" as="image" />
      </head>
      <body className={`${alexandria.variable} ${inter.variable} ${barlowCondensed.variable} font-arabic bg-background text-foreground antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <SplashScreen />
            {children}
            <AIChatbot />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
