import { LocalizedText } from './menu';

export type Offer = {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  branchIds: string[];
  startAt?: string;
  endAt?: string;
  active: boolean;
  orderingMethods: Array<"phone" | "dine-in" | "takeaway" | "delivery">;
  terms?: {
    ar: string[];
    en: string[];
  };
};
