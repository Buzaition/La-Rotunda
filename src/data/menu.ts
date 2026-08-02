import { MenuItem } from '@/types/menu';
import { assets } from '@/config/assets';

export const menu: MenuItem[] = [
  // Broasted
  {
    id: 'broasted_family_bucket',
    slug: 'broasted-family-bucket',
    categoryId: 'cat_broasted',
    name: { en: 'Broasted Family Bucket', ar: 'بوكس البروست العائلي' },
    description: { 
      en: 'Crispy golden fried chicken pieces served with generous sides.', 
      ar: 'قطع فرايد تشيكن مقرمشة تقدم مع سايدز تكمل الوجبة.' 
    },
    image: assets.media.products.broastedFamilyBucket,
    imageAlt: { en: 'Broasted Family Bucket', ar: 'بوكس البروست العائلي' },
    options: [
      { id: '4_pieces', label: { en: '4 Pieces', ar: '٤ قطع' }, serves: { en: '1 Person', ar: 'فرد واحد' } },
      { id: '8_pieces', label: { en: '8 Pieces', ar: '٨ قطع' }, serves: { en: '2 People', ar: 'فردين' } },
      { id: '12_pieces', label: { en: '12 Pieces', ar: '١٢ قطعة' }, serves: { en: '3–4 People', ar: '٣-٤ أفراد' } },
      { id: '16_pieces', label: { en: '16 Pieces', ar: '١٦ قطعة' }, serves: { en: '4–5 People', ar: '٤-٥ أفراد' } }
    ],
    includedSides: [
      { en: 'Farm Frites French Fries', ar: 'بطاطس فارم فريتس' },
      { en: 'Coleslaw Salad', ar: 'سلطة كول سلو' },
      { en: 'Garlic Dip Sauce', ar: 'ثومية' },
      { en: 'Honey Dipping Sauce', ar: 'صوص العسل' },
      { en: 'Fresh Kaiser Buns', ar: 'عيش كيزر طازج' }
    ],
    prices: [
      { branchId: 'sadat_01', optionId: '4_pieces', price: 180, available: true },
      { branchId: 'sadat_01', optionId: '8_pieces', price: 350, available: true },
      { branchId: 'sadat_01', optionId: '12_pieces', price: 500, available: true },
      { branchId: 'sadat_01', optionId: '16_pieces', price: 650, available: true }
    ],
    popular: true,
    verified: true
  },
  {
    id: 'double_crunch_box',
    slug: 'double-crunch-box',
    categoryId: 'cat_broasted',
    name: { en: 'Double Crunch Box', ar: 'بوكس دبل كرانش' },
    description: {
      en: 'Two heavy crispy fried chicken pieces served with dipping sauces, fries, and a bun.',
      ar: 'قطعتان فرايد تشيكن مقرمشتان مع صوصات التغميس والبطاطس وعيش كيزر.'
    },
    image: assets.media.products.doubleCrunchBox,
    imageAlt: { en: 'Double Crunch Box', ar: 'بوكس دبل كرانش' },
    options: [
      { id: 'normal', label: { en: 'Normal', ar: 'عادي' } },
      { id: 'spicy', label: { en: 'Spicy', ar: 'حار' } }
    ],
    prices: [
      { branchId: 'sadat_01', optionId: 'normal', price: 140, available: true },
      { branchId: 'sadat_01', optionId: 'spicy', price: 140, available: true }
    ],
    spicy: true,
    verified: true
  },
  {
    id: 'broasted_strips_meal',
    slug: 'broasted-strips-meal',
    categoryId: 'cat_broasted',
    name: { en: 'Broasted Strips Meal', ar: 'وجبة تشيكن ستربس' },
    description: {
      en: 'Crunchy boneless chicken breast strips served with dipping sauce and French fries.',
      ar: 'قطع صدور دجاج ستربس مقرمشة بدون عظم مع صوص تغميس وبطاطس.'
    },
    image: assets.media.products.broastedStripsMeal,
    imageAlt: { en: 'Broasted Strips Meal', ar: 'وجبة تشيكن ستربس' },
    options: [
      { id: '3_pieces', label: { en: '3 Pieces', ar: '٣ قطع' } },
      { id: '5_pieces', label: { en: '5 Pieces', ar: '٥ قطع' } }
    ],
    prices: [
      { branchId: 'sadat_01', optionId: '3_pieces', price: 100, available: true },
      { branchId: 'sadat_01', optionId: '5_pieces', price: 150, available: true }
    ],
    verified: true
  },
  
  // Burgers
  {
    id: 'classic_crispy_burger',
    slug: 'classic-crispy-chicken-burger',
    categoryId: 'cat_burgers',
    name: { en: 'Classic Crispy Chicken Burger', ar: 'كلاسيك كرسبي تشيكن برجر' },
    description: {
      en: 'Fried chicken breast fillet stacked with fresh toppings and house sauces.',
      ar: 'قطعة صدر دجاج مقرمشة مع إضافات طازجة وصوص لاروتندا.'
    },
    image: assets.media.products.classicCrispyBurger,
    imageAlt: { en: 'Classic Crispy Chicken Burger', ar: 'كلاسيك كرسبي تشيكن برجر' },
    ingredients: [
      { en: 'Crispy Chicken Breast Fillet', ar: 'قطعة صدر دجاج مقرمشة' },
      { en: 'Fresh Lettuce', ar: 'خس طازج' },
      { en: 'Sliced Tomatoes', ar: 'شرائح طماطم' },
      { en: 'Pickled Cucumbers', ar: 'خيار مخلل' },
      { en: 'House Mayonnaise Sauce', ar: 'مايونيز لاروتندا' }
    ],
    prices: [
      { branchId: 'sadat_01', price: 120, available: true }
    ],
    popular: true,
    verified: true
  },
  {
    id: 'cheese_volcano_deep_box',
    slug: 'cheese-volcano-deep-box',
    categoryId: 'cat_burgers',
    name: { en: 'Cheese Volcano Deep Box', ar: 'تشيز فولكانو ديب بوكس' },
    description: {
      en: 'A stacked chicken burger combo served with an external cup of warm melted cheddar cheese sauce for dipping.',
      ar: 'ساندوتش تشيكن محمل يقدم مع كوب خارجي من صوص الشيدر الساخن للتغميس.'
    },
    image: assets.media.products.cheeseVolcanoBox,
    imageAlt: { en: 'Cheese Volcano Deep Box', ar: 'تشيز فولكانو ديب بوكس' },
    ingredients: [
      { en: 'Double Crispy Chicken Fillet', ar: 'دبل قطعة دجاج مقرمشة' },
      { en: 'Smoked Turkey Slice', ar: 'شريحة تركي مدخن' },
      { en: 'Cheddar Cheese Slice', ar: 'شريحة شيدر' },
      { en: 'Melted Cheese Dipping Cup', ar: 'كوب جبن ذائب للتغميس' }
    ],
    prices: [
      { branchId: 'sadat_01', price: 160, available: true }
    ],
    verified: true
  },
  {
    id: 'la_rotunda_master_sandwich',
    slug: 'la-rotunda-master-sandwich',
    categoryId: 'cat_burgers',
    name: { en: 'La Rotunda Master Sandwich', ar: 'ماستر ساندوتش لاروتندا' },
    description: {
      en: 'La Rotunda’s signature multi-layered chicken sandwich loaded with mozzarella sticks and ranch dressing.',
      ar: 'ساندوتش لاروتندا المميز بطبقات الدجاج المقرمش والموتزاريلا ستكس وصوص الرانش.'
    },
    image: assets.media.products.masterSandwich,
    imageAlt: { en: 'La Rotunda Master Sandwich', ar: 'ماستر ساندوتش لاروتندا' },
    prices: [
      { branchId: 'sadat_01', price: 180, available: true }
    ],
    popular: true,
    verified: true
  },

  // Crepes
  {
    id: 'crispy_chicken_strips_crepe',
    slug: 'crispy-chicken-strips-crepe',
    categoryId: 'cat_crepes',
    name: { en: 'Crispy Chicken Strips Crêpe', ar: 'كريب تشيكن ستربس كرسبي' },
    description: {
      en: 'Crunchy chicken strips packed inside a toasted crêpe fold.',
      ar: 'قطع تشيكن ستربس مقرمشة داخل كريب محمص.'
    },
    image: assets.media.products.stripsCrepe,
    imageAlt: { en: 'Crispy Chicken Strips Crêpe', ar: 'كريب تشيكن ستربس كرسبي' },
    ingredients: [
      { en: 'Fried Chicken Strips', ar: 'تشيكن ستربس مقلي' },
      { en: 'French Fries', ar: 'بطاطس مقلية' },
      { en: 'Shredded Mozzarella Cheese', ar: 'جبنة موتزاريلا مبشورة' },
      { en: 'Ketchup and Mayonnaise Blend', ar: 'مزيج كاتشب ومايونيز' }
    ],
    prices: [
      { branchId: 'sadat_01', price: 110, available: true }
    ],
    popular: true,
    verified: true
  },
  {
    id: 'super_mix_meat_crepe',
    slug: 'super-mix-meat-crepe',
    categoryId: 'cat_crepes',
    name: { en: 'Super Mix Meat Crêpe', ar: 'كريب سوبر ميكس' },
    description: {
      en: 'A loaded combination of crispy chicken strips and seasoned burger pieces folded with cheese.',
      ar: 'تشكيلة محملة من التشيكن ستربس المقرمش وقطع البرجر المتبلة مع الجبنة.'
    },
    image: assets.media.products.superMixCrepe,
    imageAlt: { en: 'Super Mix Meat Crêpe', ar: 'كريب سوبر ميكس' },
    prices: [
      { branchId: 'sadat_01', price: 130, available: true }
    ],
    verified: true,
    tags: ['unverified-beef']
  },

  // Rizo & Sides
  {
    id: 'signature_rizo_rice',
    slug: 'signature-rizo-rice',
    categoryId: 'cat_rizo_sides',
    name: { en: 'Signature Rizo Rice', ar: 'ريزو لاروتندا' },
    description: {
      en: 'Savory yellow seasoned rice topped with sliced crispy chicken and your choice of sauce.',
      ar: 'أرز أصفر متبل مغطى بقطع الدجاج المقرمش واختيارك من الصوص.'
    },
    image: assets.media.products.signatureRizo,
    imageAlt: { en: 'Signature Rizo Rice', ar: 'ريزو لاروتندا' },
    sauceOptions: [
      { en: 'Sweet Barbecue Sauce', ar: 'صوص باربيكيو حلو' },
      { en: 'Chili Hot Sauce', ar: 'صوص تشيلي حار' }
    ],
    prices: [
      { branchId: 'sadat_01', price: 80, available: true }
    ],
    popular: true,
    verified: true
  },
  {
    id: 'loaded_cheese_fries',
    slug: 'loaded-cheese-fries',
    categoryId: 'cat_rizo_sides',
    name: { en: 'Loaded Cheese Fries', ar: 'لودد تشيز فرايز' },
    description: {
      en: 'Golden French fries covered with warm cheddar cheese sauce.',
      ar: 'بطاطس ذهبية مغطاة بصوص شيدر ساخن.'
    },
    image: assets.media.products.loadedCheeseFries,
    imageAlt: { en: 'Loaded Cheese Fries', ar: 'لودد تشيز فرايز' },
    ingredients: [
      { en: 'Jalapeño Slices', ar: 'شرائح هلابينو' },
      { en: 'Crispy Bacon Bits (Configurable)', ar: 'قطع بيكون مقرمشة (حسب الطلب)' }
    ],
    prices: [
      { branchId: 'sadat_01', price: 75, available: true }
    ],
    verified: true,
    tags: ['unverified-bacon']
  },
  {
    id: 'fried_mozzarella_sticks',
    slug: 'fried-mozzarella-sticks',
    categoryId: 'cat_rizo_sides',
    name: { en: 'Fried Mozzarella Sticks', ar: 'موتزاريلا ستكس' },
    description: {
      en: 'Three breaded fried mozzarella sticks served with marinara dip.',
      ar: 'ثلاث قطع موتزاريلا مقلية ومقرمشة تقدم مع صوص مارينارا.'
    },
    image: assets.media.products.mozzarellaSticks,
    imageAlt: { en: 'Fried Mozzarella Sticks', ar: 'موتزاريلا ستكس' },
    prices: [
      { branchId: 'sadat_01', price: 65, available: true }
    ],
    verified: true
  },
  {
    id: 'coleslaw_salad',
    slug: 'coleslaw-salad',
    categoryId: 'cat_rizo_sides',
    name: { en: 'Coleslaw Salad', ar: 'كول سلو' },
    description: {
      en: 'Sweet creamy shredded cabbage and carrot salad.',
      ar: 'سلطة كرنب وجزر كريمية بطعم حلو ومتوازن.'
    },
    image: assets.media.products.coleslaw,
    imageAlt: { en: 'Coleslaw Salad', ar: 'كول سلو' },
    options: [
      { id: 'small', label: { en: 'Small', ar: 'صغير' } },
      { id: 'large', label: { en: 'Large', ar: 'كبير' } }
    ],
    prices: [
      { branchId: 'sadat_01', optionId: 'small', price: 30, available: true },
      { branchId: 'sadat_01', optionId: 'large', price: 50, available: true }
    ],
    verified: true
  }
];
