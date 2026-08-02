import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getTranslations } from 'next-intl/server';
import { BrandedPlaceholder } from '@/components/ui/BrandedPlaceholder';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Navigation'});
  return {
    title: locale === 'ar' ? 'حكايتنا | لاروتندا' : 'Our Story | La Rotunda',
  };
}

export default async function AboutPage({
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
              {locale === 'ar' ? 'حكاية لاروتندا' : 'The La Rotunda Story'}
            </h1>
            <p className="text-xl md:text-2xl text-muted font-arabic leading-relaxed">
              {locale === 'ar' 
                ? 'فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.' 
                : 'Crispy chicken, loaded sandwiches, and La Rotunda flavor made for every unforgettable bite.'}
            </p>
          </div>
          
          <div className="relative h-[400px] w-full mb-16 rounded-lg overflow-hidden border border-border">
            <BrandedPlaceholder className="w-full h-full" label={locale === 'ar' ? 'فريق العمل' : 'Our Team'} />
          </div>
          
          <div className="prose prose-lg dark:prose-invert prose-p:font-arabic prose-headings:font-arabic prose-headings:text-brand-strong max-w-none">
            <p>
              {locale === 'ar'
                ? 'لاروتندا مش مجرد مطعم، هي حكاية بدأت من حبنا للفرايد تشيكن والوجبات اللي بتجمع العيلة والصحاب. إحنا براند مصري طالع من قلب المنوفية، هدفنا نقدم أكل بيتعمل صح من أول تفصيلة.'
                : 'La Rotunda is more than just a restaurant; it’s a story born out of our love for fried chicken and meals that bring family and friends together. We are an Egyptian brand rooted in Monufia, aiming to serve food made right from the very first detail.'}
            </p>
            <p>
              {locale === 'ar'
                ? 'من أول تتبيلة الفراخ الخاصة بينا، لحد قرمشة الطبقة الخارجية، بنهتم إن كل بوكس يطلع من عندنا يكون تجربة تستاهل. ساندوتشاتنا محملة وبتشبع، الكريبات معمولة على أصولها، والريزو مع الصوصات بيضيف طعم مميز ميتنسيش.'
                : 'From our special chicken marinade to the crispy outer layer, we ensure that every box leaving our kitchen is a worthwhile experience. Our sandwiches are fully loaded, our crêpes are authentic, and our Rizo with signature sauces adds an unforgettable distinct flavor.'}
            </p>
            <p>
              {locale === 'ar'
                ? 'وجودنا في كذا فرع بيخلينا أقرب ليك، عشان قرمشة لاروتندا توصلك في أي وقت. إحنا فخورين بهويتنا المحلية ودايماً بنسعى إننا نقدم خدمة حديثة، سريعة، وطعم مبيختلفش عليه اتنين.'
                : 'Having multiple branches brings us closer to you, ensuring the La Rotunda crunch reaches you anytime. We are proud of our local identity and constantly strive to provide modern, fast service with a taste that everyone agrees on.'}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
