import { LocalizedText } from './menu';

export type Branch = {
  id: string;
  slug: string;
  city: LocalizedText;
  governorate: LocalizedText;
  address: LocalizedText;
  phoneNumbers: string[];
  openingHours: {
    open: string;
    close: string;
    days: LocalizedText;
  };
  services: Array<"dine-in" | "takeaway" | "delivery">;
  mapQuery: string;
  mapUrl?: string;
  image: string;
  active: boolean;
};
