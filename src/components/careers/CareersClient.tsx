'use client';

import { useState } from 'react';
import { Career } from '@/data/careers';
import { branches } from '@/data/branches';
import { useBranch } from '@/providers/BranchProvider';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContactForm } from '../forms/ContactForm';

interface CareersClientProps {
  initialCareers: Career[];
  locale: 'ar' | 'en';
}

export function CareersClient({ initialCareers, locale }: CareersClientProps) {
  const isAr = locale === 'ar';
  const { selectedBranchId } = useBranch();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  
  // Filter only active jobs, optionally by selected branch
  const activeCareers = initialCareers.filter(job => job.active);
  
  if (activeCareers.length === 0) {
    return (
      <div className="bg-surface-elevated border border-border rounded-lg p-12 text-center">
        <Briefcase className="w-12 h-12 text-muted mx-auto mb-4 opacity-50" />
        <h2 className="text-2xl font-arabic font-bold text-foreground mb-4">
          {isAr ? 'مفيش وظائف متاحة حالياً' : 'No open positions at the moment'}
        </h2>
        <p className="text-muted font-arabic">
          {isAr 
            ? 'تابعنا على صفحاتنا عشان تعرف أول ما نفتح باب التعيين تاني.' 
            : 'Follow our pages to know as soon as we open hiring again.'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="grid gap-6">
        {activeCareers.map(job => {
          const isSelected = selectedJob === job.id;
          
          return (
            <div 
              key={job.id} 
              className={cn(
                "bg-surface-elevated border rounded-lg transition-all duration-300 overflow-hidden",
                isSelected ? "border-brand shadow-md" : "border-border hover:border-brand/50"
              )}
            >
              <div 
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                onClick={() => setSelectedJob(isSelected ? null : job.id)}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-arabic font-bold text-foreground">
                      {job.title[locale]}
                    </h3>
                    <span className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-sm text-sm font-arabic font-bold text-muted">
                      {job.department[locale]}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted font-arabic text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {job.branchIds.map(id => branches.find(b => b.id === id)?.city[locale]).filter(Boolean).join('، ')}
                    </span>
                  </div>
                </div>
                
                <button 
                  className={cn(
                    "px-6 py-2 rounded-sm font-arabic font-bold transition-colors w-full md:w-auto",
                    isSelected ? "bg-brand text-white" : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground"
                  )}
                >
                  {isSelected ? (isAr ? 'إغلاق' : 'Close') : (isAr ? 'عرض التفاصيل' : 'View Details')}
                </button>
              </div>
              
              {isSelected && (
                <div className="p-6 pt-0 border-t border-border mt-4">
                  <div className="pt-6">
                    <h4 className="font-arabic font-bold text-lg mb-4 text-brand-strong">
                      {isAr ? 'الشروط والمتطلبات:' : 'Requirements & Qualifications:'}
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {job.requirements[locale].map((req, i) => (
                        <li key={i} className="flex items-start gap-3 font-arabic text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <h4 className="font-arabic font-bold text-lg mb-4 text-foreground">
                        {isAr ? 'للتقديم أرسل بياناتك:' : 'To apply, submit your info:'}
                      </h4>
                      <ContactForm locale={locale} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
