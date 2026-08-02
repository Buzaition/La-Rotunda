'use client';

import { useState, useMemo } from 'react';
import { MenuItem } from '@/types/menu';
import { useBranch } from '@/providers/BranchProvider';
import { useTranslations } from 'next-intl';
import { Search, SlidersHorizontal, Flame, Star, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BrandedPlaceholder } from '../ui/BrandedPlaceholder';

interface MenuClientProps {
  initialMenu: MenuItem[];
  categories: any[];
  locale: 'ar' | 'en';
}

export function MenuClient({ initialMenu, categories, locale }: MenuClientProps) {
  const t = useTranslations('Actions');
  const common = useTranslations('Common');
  const { selectedBranchId } = useBranch();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filterPopular, setFilterPopular] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  
  const filteredMenu = useMemo(() => {
    return initialMenu.filter(item => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const nameMatch = item.name[locale].toLowerCase().includes(query);
        const descMatch = item.description[locale].toLowerCase().includes(query);
        if (!nameMatch && !descMatch) return false;
      }
      
      // Category
      if (activeCategory !== 'all' && item.categoryId !== activeCategory) {
        return false;
      }
      
      // Filters
      if (filterPopular && !item.popular) return false;
      if (filterSpicy && !item.spicy) return false;
      
      return true;
    });
  }, [initialMenu, searchQuery, activeCategory, filterPopular, filterSpicy, locale]);

  return (
    <div className="container mx-auto px-4">
      {/* Header & Controls */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-6xl font-arabic font-bold text-brand-strong mb-8 text-center md:text-start">
          {locale === 'ar' ? 'اكتشف المنيو' : 'Explore the Menu'}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-surface-elevated p-4 rounded-lg border border-border shadow-sm">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute top-1/2 -translate-y-1/2 left-4 rtl:right-4 rtl:left-auto w-5 h-5 text-muted" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={locale === 'ar' ? 'بتدور على إيه؟' : 'What are you craving?'}
              className="w-full bg-surface border border-border rounded-md py-3 pl-12 pr-4 rtl:pr-12 rtl:pl-4 font-arabic focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button 
              onClick={() => setFilterPopular(!filterPopular)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-colors font-arabic text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                filterPopular ? "bg-brand text-white border-brand" : "bg-surface border-border hover:border-brand/50 text-foreground"
              )}
            >
              <Star className="w-4 h-4" />
              {common('popular')}
            </button>
            <button 
              onClick={() => setFilterSpicy(!filterSpicy)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border transition-colors font-arabic text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                filterSpicy ? "bg-brand text-white border-brand" : "bg-surface border-border hover:border-brand/50 text-foreground"
              )}
            >
              <Flame className="w-4 h-4" />
              {common('spicy')}
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="sticky top-24 bg-surface-elevated p-4 rounded-lg border border-border flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                "whitespace-nowrap text-start px-4 py-3 rounded-md font-arabic font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                activeCategory === 'all' ? "bg-brand/10 text-brand" : "hover:bg-black/5 dark:hover:bg-white/5 text-foreground"
              )}
            >
              {locale === 'ar' ? 'الكل' : 'All Items'}
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "whitespace-nowrap text-start px-4 py-3 rounded-md font-arabic font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                  activeCategory === category.id ? "bg-brand/10 text-brand" : "hover:bg-black/5 dark:hover:bg-white/5 text-foreground"
                )}
              >
                {category.name[locale]}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="flex-1">
          {filteredMenu.length === 0 ? (
            <div className="text-center py-20 bg-surface-elevated border border-border rounded-lg">
              <Search className="w-12 h-12 text-muted mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-arabic font-bold text-foreground mb-2">
                {locale === 'ar' ? 'مفيش نتايج' : 'No results found'}
              </h3>
              <p className="text-muted font-arabic">
                {locale === 'ar' ? 'جرب تبحث بكلمة تانية أو تلغي الفلاتر' : 'Try searching for something else or clear filters'}
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setFilterPopular(false);
                  setFilterSpicy(false);
                  setActiveCategory('all');
                }}
                className="mt-6 text-brand font-arabic font-bold hover:underline"
              >
                {locale === 'ar' ? 'مسح الفلاتر' : 'Clear all filters'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMenu.map(item => (
                <ProductCard key={item.id} item={item} locale={locale} selectedBranchId={selectedBranchId} common={common} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ item, locale, selectedBranchId, common }: any) {
  const [imgError, setImgError] = useState(false);
  
  // Find price for selected branch or default to null
  const branchPricing = selectedBranchId 
    ? item.prices.filter((p: any) => p.branchId === selectedBranchId)
    : item.prices;
    
  const isAvailable = branchPricing.length > 0 && branchPricing.some((p: any) => p.available);
  
  return (
    <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden flex flex-col group hover:border-brand/30 transition-colors">
      <div className="relative h-48 bg-black/5 p-4">
        {!imgError ? (
          <img 
            src={item.image} 
            alt={item.name[locale]} 
            onError={() => setImgError(true)}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BrandedPlaceholder className="w-full h-full" label={item.name[locale]} />
        )}
        
        <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto flex flex-col gap-2">
          {item.popular && (
            <span className="bg-brand text-white px-2 py-1 text-xs font-arabic font-bold rounded-sm shadow-sm flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {common('popular')}
            </span>
          )}
          {item.spicy && (
            <span className="bg-orange-500 text-white px-2 py-1 text-xs font-arabic font-bold rounded-sm shadow-sm flex items-center gap-1">
              <Flame className="w-3 h-3 fill-current" />
              {common('spicy')}
            </span>
          )}
        </div>
        
        {!isAvailable && selectedBranchId && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-surface px-4 py-2 font-arabic font-bold text-foreground rounded-sm">
              {locale === 'ar' ? 'غير متوفر بالفرع' : 'Not available at branch'}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-arabic font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
          {item.name[locale]}
        </h3>
        <p className="text-muted text-sm font-arabic line-clamp-2 mb-4">
          {item.description[locale]}
        </p>
        
        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
          <div className="font-english-display font-bold text-lg text-foreground">
            {/* Display logic for price depending on options */}
            <span className="text-brand-strong">{common('priceAvailable')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
