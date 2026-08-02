export type LocalizedText = {
  ar: string;
  en: string;
};

export type MenuItem = {
  id: string;
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  categoryId: string;
  image: string;
  imageAlt: LocalizedText;
  options?: Array<{
    id: string;
    label: LocalizedText;
    serves?: LocalizedText;
  }>;
  ingredients?: LocalizedText[];
  includedSides?: LocalizedText[];
  sauceOptions?: LocalizedText[];
  prices: Array<{
    branchId: string;
    optionId?: string;
    price: number | null;
    available: boolean;
  }>;
  popular?: boolean;
  new?: boolean;
  spicy?: boolean;
  offer?: boolean;
  verified: boolean;
  tags?: string[];
};
