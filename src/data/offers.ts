import { Offer } from '@/types/offer';
import { assets } from '@/config/assets';

export const offers: Offer[] = [
  {
    id: 'dev_placeholder_offer_1',
    slug: 'family-weekend-deal',
    title: {
      en: 'Weekend Family Deal',
      ar: 'عرض العيلة في الويك إند'
    },
    description: {
      en: 'Get a 12-piece Broasted bucket with two large coleslaw salads and a 1L Pepsi for a special price.',
      ar: 'بوكس ١٢ قطعة بروست مع ٢ كول سلو كبير ولتر بيبسي بسعر مميز.'
    },
    image: '/media/placeholder-offer.webp',
    branchIds: ['sadat_01', 'menouf_01', 'menouf_02', 'shibin_01'],
    active: false, // Development placeholder
    orderingMethods: ['phone', 'dine-in', 'takeaway', 'delivery'],
    terms: {
      en: ['Valid only on Thursday, Friday, and Saturday.', 'Subject to availability.'],
      ar: ['يسري العرض أيام الخميس والجمعة والسبت.', 'حسب توفر الكمية.']
    }
  },
  {
    id: 'dev_placeholder_offer_2',
    slug: 'burger-combo-madness',
    title: {
      en: 'Burger Combo Madness',
      ar: 'جنون الكومبو'
    },
    description: {
      en: 'Buy two Classic Crispy Chicken Burgers and get the third one free.',
      ar: 'اشتري ٢ كلاسيك كرسبي تشيكن برجر واحصل على الثالث مجاناً.'
    },
    image: '/media/placeholder-offer2.webp',
    branchIds: ['sadat_01', 'shibin_01'],
    startAt: '2026-08-01T00:00:00Z',
    endAt: '2026-08-31T23:59:59Z',
    active: false, // Development placeholder
    orderingMethods: ['phone', 'takeaway', 'delivery'],
    terms: {
      en: ['Cannot be combined with other offers.', 'Available for delivery and takeaway only.'],
      ar: ['لا يمكن دمجه مع عروض أخرى.', 'متاح للتيك أواي والتوصيل فقط.']
    }
  }
];
