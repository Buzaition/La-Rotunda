import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface BrandedPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function BrandedPlaceholder({ label, className, ...props }: BrandedPlaceholderProps) {
  const t = useTranslations('Common');
  
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center bg-surface-elevated border border-border text-center p-4 relative overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/diagonal-stripes.png')] bg-repeat" />
      <span className="relative text-brand-strong font-english-display uppercase tracking-widest text-sm opacity-50 mb-2">
        La Rotunda
      </span>
      <span className="relative text-muted text-sm font-arabic font-medium">
        {label || t('popular')}
      </span>
    </div>
  );
}
