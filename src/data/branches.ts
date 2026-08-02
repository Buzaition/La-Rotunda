import { Branch } from '@/types/branch';

export const branches: Branch[] = [
  {
    id: 'sadat_01',
    slug: 'sadat-01',
    city: { ar: 'مدينة السادات', en: 'Sadat City' },
    governorate: { ar: 'المنوفية', en: 'Monufia' },
    address: { 
      ar: 'مول سايلو بلازا، شارع أبو بكر الصديق، المنطقة التاسعة، مدينة السادات', 
      en: 'Silo Plaza Mall, Abu Bakr El-Siddiq Street, 9th District, Sadat City' 
    },
    phoneNumbers: ['+201070603603'],
    openingHours: {
      open: '11:00 AM',
      close: '2:00 AM',
      days: { ar: 'يومياً', en: 'daily' }
    },
    services: ['dine-in', 'takeaway', 'delivery'],
    mapQuery: 'La Rotunda Fried Chicken and Burger, Sadat City, Monufia',
    image: '/media/branches/sadat-01.webp',
    active: true
  },
  {
    id: 'menouf_01',
    slug: 'menouf-01',
    city: { ar: 'مدينة منوف', en: 'Menouf City' },
    governorate: { ar: 'المنوفية', en: 'Monufia' },
    address: { 
      ar: 'ميدان الساعة، أمام مستشفى الإيمان، مدينة منوف', 
      en: "El-Sa'a Square, opposite El-Iman Hospital, Menouf City" 
    },
    phoneNumbers: ['+201019096666'],
    openingHours: {
      open: '2:00 PM',
      close: '2:00 AM',
      days: { ar: 'يومياً', en: 'daily' }
    },
    services: ['dine-in', 'takeaway', 'delivery'],
    mapQuery: "La Rotunda Fried Chicken, El-Sa'a Square, Menouf City",
    image: '/media/branches/menouf-01.webp',
    active: true
  },
  {
    id: 'menouf_02',
    slug: 'menouf-02',
    city: { ar: 'مدينة منوف', en: 'Menouf City' },
    governorate: { ar: 'المنوفية', en: 'Monufia' },
    address: { 
      ar: 'طريق الحامول، بجوار مسجد مهنا، مدينة منوف', 
      en: 'El-Hamoul Road, adjacent to Mahna Mosque, Menouf City' 
    },
    phoneNumbers: ['+201021180011', '+201025258975'],
    openingHours: {
      open: '2:00 PM',
      close: '2:00 AM',
      days: { ar: 'يومياً', en: 'daily' }
    },
    services: ['dine-in', 'takeaway', 'delivery'],
    mapQuery: 'La Rotunda, Mahna Mosque, Menouf City',
    image: '/media/branches/menouf-02.webp',
    active: true
  },
  {
    id: 'shibin_01',
    slug: 'shibin-01',
    city: { ar: 'شبين الكوم', en: 'Shibin El-Kom' },
    governorate: { ar: 'المنوفية', en: 'Monufia' },
    address: { 
      ar: 'آخر شارع باريس، بجوار باريس بلازا، شبين الكوم', 
      en: 'End of Paris Street, adjacent to Paris Plaza, Shibin El-Kom' 
    },
    phoneNumbers: ['+201006782626'],
    openingHours: {
      open: '11:00 AM',
      close: '2:00 AM',
      days: { ar: 'يومياً', en: 'daily' }
    },
    services: ['dine-in', 'takeaway', 'delivery'],
    mapQuery: 'La Rotunda, Paris Street, Shibin El-Kom',
    image: '/media/branches/shibin-01.webp',
    active: true
  }
];
