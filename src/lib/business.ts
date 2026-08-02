import { Offer } from '@/types/offer';
import { MenuItem } from '@/types/menu';
import { Branch } from '@/types/branch';

export function isOfferActive(offer: Offer, currentDate: Date = new Date()): boolean {
  if (!offer.active) return false;
  
  if (offer.startAt) {
    const startDate = new Date(offer.startAt);
    if (currentDate < startDate) return false;
  }
  
  if (offer.endAt) {
    const endDate = new Date(offer.endAt);
    if (currentDate > endDate) return false;
  }
  
  return true;
}

export function getBranchPhone(branch: Branch): string | null {
  if (!branch || !branch.phoneNumbers || branch.phoneNumbers.length === 0) return null;
  return branch.phoneNumbers[0];
}

export function isProductAvailableAtBranch(product: MenuItem, branchId: string | null): boolean {
  if (!branchId) return true; // If no branch selected, assume globally available or show all
  if (!product.prices || product.prices.length === 0) return true; // If no restrictions, available everywhere
  return product.prices.some(p => p.branchId === branchId && p.available);
}

export function getLocalizedRoute(path: string, locale: string): string {
  if (path.startsWith('http')) return path;
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === `/${locale}` || cleanPath.startsWith(`/${locale}/`)) {
    return cleanPath;
  }
  
  if (cleanPath === '/') {
    return `/${locale}`;
  }
  
  return `/${locale}${cleanPath}`;
}
