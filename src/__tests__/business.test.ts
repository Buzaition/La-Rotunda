import { describe, it, expect } from 'vitest';
import { isOfferActive, getBranchPhone, isProductAvailableAtBranch, getLocalizedRoute } from '../lib/business';
import { Offer } from '@/types/offer';
import { MenuItem } from '@/types/menu';
import { Branch } from '@/types/branch';

describe('Business Logic', () => {
  describe('isOfferActive', () => {
    it('returns false if offer is inactive', () => {
      const offer = { active: false } as Offer;
      expect(isOfferActive(offer)).toBe(false);
    });

    it('returns true if offer is active and has no dates', () => {
      const offer = { active: true } as Offer;
      expect(isOfferActive(offer)).toBe(true);
    });

    it('returns false if current date is before startAt', () => {
      const offer = { active: true, startAt: '2026-08-10T00:00:00Z' } as Offer;
      const current = new Date('2026-08-01T00:00:00Z');
      expect(isOfferActive(offer, current)).toBe(false);
    });

    it('returns false if current date is after endAt', () => {
      const offer = { active: true, endAt: '2026-08-05T00:00:00Z' } as Offer;
      const current = new Date('2026-08-10T00:00:00Z');
      expect(isOfferActive(offer, current)).toBe(false);
    });

    it('returns true if current date is within range', () => {
      const offer = { 
        active: true, 
        startAt: '2026-08-01T00:00:00Z',
        endAt: '2026-08-31T00:00:00Z'
      } as Offer;
      const current = new Date('2026-08-15T00:00:00Z');
      expect(isOfferActive(offer, current)).toBe(true);
    });
  });

  describe('getBranchPhone', () => {
    it('returns first phone number if available', () => {
      const branch = { phoneNumbers: ['01012345678', '01087654321'] } as Branch;
      expect(getBranchPhone(branch)).toBe('01012345678');
    });

    it('returns null if no phone numbers', () => {
      const branch = { phoneNumbers: [] } as Branch;
      expect(getBranchPhone(branch)).toBe(null);
    });
  });

  describe('isProductAvailableAtBranch', () => {
    it('returns true if no branch is selected', () => {
      const product = { branchAvailability: ['branch1'] } as MenuItem;
      expect(isProductAvailableAtBranch(product, null)).toBe(true);
    });

    it('returns true if product has no branch restrictions', () => {
      const product = {} as MenuItem;
      expect(isProductAvailableAtBranch(product, 'branch1')).toBe(true);
    });

    it('returns true if product is available at selected branch', () => {
      const product = { branchAvailability: ['branch1', 'branch2'] } as MenuItem;
      expect(isProductAvailableAtBranch(product, 'branch2')).toBe(true);
    });

    it('returns false if product is not available at selected branch', () => {
      const product = { branchAvailability: ['branch1'] } as MenuItem;
      expect(isProductAvailableAtBranch(product, 'branch2')).toBe(false);
    });
  });

  describe('getLocalizedRoute', () => {
    it('adds locale to root path', () => {
      expect(getLocalizedRoute('/', 'ar')).toBe('/ar');
    });

    it('adds locale to absolute path', () => {
      expect(getLocalizedRoute('/menu', 'en')).toBe('/en/menu');
    });

    it('keeps existing locale if already present', () => {
      expect(getLocalizedRoute('/ar/menu', 'ar')).toBe('/ar/menu');
    });

    it('handles http paths correctly', () => {
      expect(getLocalizedRoute('https://google.com', 'ar')).toBe('https://google.com');
    });
  });
});
