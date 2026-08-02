import { MenuItem } from '@/types/menu';
import { assets } from '@/config/assets';

export const categories = [
  {
    id: 'cat_broasted',
    slug: 'broasted',
    name: { en: 'Broasted Fried Chicken', ar: 'الفرايد تشيكن والبروست' },
    description: {
      en: 'Crispy golden Egyptian-spiced broasted chicken buckets and individual meals.',
      ar: 'قطع فرايد تشيكن ذهبية ومقرمشة بخلطة لاروتندا، متاحة في وجبات فردية وبوكسات عائلية.'
    },
    image: assets.media.categories.broasted
  },
  {
    id: 'cat_burgers',
    slug: 'burgers',
    name: { en: 'Premium Chicken Burgers & Sandwiches', ar: 'تشيكن برجر وساندوتشات' },
    description: {
      en: 'Loaded chicken breast fillets stacked on fresh premium Kaiser buns.',
      ar: 'ساندوتشات محملة بقطع صدور الدجاج المقرمشة داخل عيش كيزر طازج.'
    },
    image: assets.media.categories.burgers
  },
  {
    id: 'cat_crepes',
    slug: 'crepes',
    name: { en: 'Savory Fast-Food Crêpes', ar: 'الكريبات الحادقة' },
    description: {
      en: 'Thin French-style crêpes filled with crispy proteins, French fries, and mozzarella cheese.',
      ar: 'كريب محمص ومحشو بالدجاج المقرمش والبطاطس وجبنة الموتزاريلا.'
    },
    image: assets.media.categories.crepes
  },
  {
    id: 'cat_rizo_sides',
    slug: 'sides',
    name: { en: 'Rizo Rice & Side Dishes', ar: 'الريزو والسايدز' },
    description: {
      en: 'Perfect complements to complete your fast-food meal.',
      ar: 'سايدز وصوصات تكمل وجبتك وتخلي الطعم أقوى.'
    },
    image: assets.media.categories.rizoSides
  }
];
