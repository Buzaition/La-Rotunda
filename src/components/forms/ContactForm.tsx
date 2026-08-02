'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { branches } from '@/data/branches';

export function ContactForm({ locale }: { locale: 'ar' | 'en' }) {
  const isAr = locale === 'ar';
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      
      // Reset after showing success message
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-arabic">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-foreground font-bold">
          {isAr ? 'الاسم' : 'Name'}
        </label>
        <input 
          type="text" 
          id="name" 
          required 
          className="w-full bg-surface border border-border rounded-md py-3 px-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-foreground"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-foreground font-bold">
          {isAr ? 'رقم التليفون' : 'Phone Number'}
        </label>
        <input 
          type="tel" 
          id="phone" 
          required 
          dir="ltr"
          className="w-full bg-surface border border-border rounded-md py-3 px-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-foreground text-left"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="branch" className="text-foreground font-bold">
          {isAr ? 'الفرع المتعلق بالرسالة' : 'Related Branch'}
        </label>
        <select 
          id="branch" 
          className="w-full bg-surface border border-border rounded-md py-3 px-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-foreground appearance-none"
        >
          <option value="general">{isAr ? 'استفسار عام' : 'General Inquiry'}</option>
          {branches.map(branch => (
            <option key={branch.id} value={branch.id}>
              {branch.city[locale]}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-foreground font-bold">
          {isAr ? 'الرسالة' : 'Message'}
        </label>
        <textarea 
          id="message" 
          required 
          rows={5}
          className="w-full bg-surface border border-border rounded-md py-3 px-4 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors text-foreground resize-none"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={status !== 'idle'}
        className="w-full bg-brand hover:bg-brand-strong text-white font-bold py-4 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:opacity-70"
      >
        {status === 'submitting' 
          ? (isAr ? 'جاري الإرسال...' : 'Sending...') 
          : (isAr ? 'إرسال الرسالة' : 'Send Message')}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-black/5 dark:bg-white/5 border border-border rounded-md text-sm text-foreground text-center">
          {isAr 
            ? 'تم التحقق من البيانات محليًا. يجب ربط خدمة الإرسال قبل تشغيل الموقع النهائي.' 
            : 'The form was validated locally. Configure a delivery service before production.'}
        </div>
      )}
    </form>
  );
}
