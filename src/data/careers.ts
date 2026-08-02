export type Career = {
  id: string;
  title: { ar: string; en: string };
  department: { ar: string; en: string };
  branchIds: string[];
  requirements: { ar: string[]; en: string[] };
  active: boolean;
};

export const careers: Career[] = [
  {
    id: 'kitchen_team_member',
    title: { ar: 'عضو فريق مطبخ', en: 'Kitchen Team Member' },
    department: { ar: 'المطبخ', en: 'Kitchen' },
    branchIds: ['sadat_01', 'shibin_01'],
    requirements: {
      ar: ['خبرة سابقة في مطاعم الفاست فود', 'الالتزام بمعايير الجودة والنظافة', 'القدرة على العمل تحت ضغط', 'السن لا يتجاوز ٣٠ عام'],
      en: ['Previous fast-food experience', 'Commitment to quality and hygiene standards', 'Ability to work under pressure', 'Age not exceeding 30']
    },
    active: true
  },
  {
    id: 'customer_service',
    title: { ar: 'كاشير / خدمة عملاء', en: 'Cashier / Customer Service' },
    department: { ar: 'الصالات', en: 'Front of House' },
    branchIds: ['menouf_01', 'menouf_02'],
    requirements: {
      ar: ['مؤهل عالي أو متوسط', 'حسن المظهر واللباقة', 'مهارات تواصل ممتازة', 'يفضل خبرة سابقة'],
      en: ['University or institute degree', 'Good appearance and tact', 'Excellent communication skills', 'Previous experience preferred']
    },
    active: true
  },
  {
    id: 'delivery_driver',
    title: { ar: 'طيار دليفري', en: 'Delivery Driver' },
    department: { ar: 'التوصيل', en: 'Delivery' },
    branchIds: ['sadat_01', 'menouf_01', 'menouf_02', 'shibin_01'],
    requirements: {
      ar: ['رخصة قيادة دراجة نارية سارية', 'معرفة جيدة بمناطق التوصيل', 'الالتزام بمواعيد العمل'],
      en: ['Valid motorcycle license', 'Good knowledge of delivery areas', 'Commitment to working hours']
    },
    active: false // Explicitly requested to support active/inactive
  }
];
