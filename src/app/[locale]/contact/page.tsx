import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getTranslations } from 'next-intl/server';
import { branches } from '@/data/branches';
import { Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Navigation'});
  return {
    title: locale === 'ar' ? 'تواصل معنا | لاروتندا' : 'Contact Us | La Rotunda',
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-arabic font-bold text-brand-strong mb-6">
              {isAr ? 'تواصل معنا' : 'Contact Us'}
            </h1>
            <p className="text-xl md:text-2xl text-muted font-arabic">
              {isAr ? 'إحنا هنا عشان نسمعك ونقدملك أحسن خدمة.' : 'We are here to listen to you and provide the best service.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Branches Info */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-arabic font-bold text-foreground">
                {isAr ? 'فروعنا' : 'Our Branches'}
              </h2>
              <div className="flex flex-col gap-6">
                {branches.map(branch => (
                  <div key={branch.id} className="bg-surface-elevated p-6 border border-border rounded-lg">
                    <h3 className="text-2xl font-arabic font-bold text-brand-strong mb-4">
                      {branch.city[locale as 'ar' | 'en']}
                    </h3>
                    <div className="flex flex-col gap-3 font-arabic">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-muted leading-relaxed">{branch.address[locale as 'ar' | 'en']}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-muted">
                          {branch.openingHours.open} - {branch.openingHours.close}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-brand shrink-0" />
                        <div className="flex flex-wrap gap-3">
                          {branch.phoneNumbers.map(phone => (
                            <a 
                              key={phone} 
                              href={`tel:${phone}`}
                              className="text-muted hover:text-brand transition-colors font-bold"
                              dir="ltr"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-surface-elevated p-8 border border-border rounded-lg h-fit sticky top-32">
              <h2 className="text-3xl font-arabic font-bold text-foreground mb-6">
                {isAr ? 'ابعتلنا رسالة' : 'Send us a message'}
              </h2>
              <ContactForm locale={locale as 'ar' | 'en'} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
