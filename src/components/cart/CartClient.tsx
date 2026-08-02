'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCart } from '@/providers/CartProvider';
import { generateWhatsAppUrl, CheckoutData } from '@/utils/whatsapp';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface CartClientProps {
  locale: 'en' | 'ar';
}

export function CartClient({ locale }: CartClientProps) {
  const t = useTranslations('Cart');
  const common = useTranslations('Common');
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  
  const [formData, setFormData] = useState<CheckoutData>({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    const url = generateWhatsAppUrl(formData, cartItems);
    window.open(url, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center pt-32">
        <div className="bg-surface-elevated p-8 rounded-full border border-border mb-6">
          <ShoppingBag className="w-16 h-16 text-muted" />
        </div>
        <h1 className="text-3xl font-arabic font-bold text-foreground mb-4 text-center">
          {t('empty')}
        </h1>
        <p className="text-muted font-arabic text-center max-w-md mb-8">
          {t('emptyDesc')}
        </p>
        <Link 
          href="/menu"
          className="bg-brand text-white px-8 py-3 rounded-md font-arabic font-bold hover:bg-brand-strong transition-colors shadow-lg shadow-brand/20"
        >
          {t('startShopping')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-32 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-arabic font-bold text-brand-strong mb-10 text-center md:text-start">
        {t('title')}
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-surface-elevated border border-border rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-center relative group">
              <div className="flex-1 w-full flex flex-col items-start font-arabic text-start">
                <h3 className="text-lg font-bold text-foreground">{item.itemName}</h3>
                {item.sizeName && (
                  <p className="text-sm text-muted">{item.sizeName}</p>
                )}
                {item.price ? (
                  <p className="text-brand-strong font-english-display font-bold mt-2">
                    {item.price} {common('currency')}
                  </p>
                ) : (
                  <p className="text-muted text-sm mt-2">{common('priceAvailable')}</p>
                )}
              </div>
              
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center bg-background border border-border rounded-md overflow-hidden">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-surface text-foreground transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold font-english-display">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-surface text-foreground transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-muted hover:text-brand transition-colors bg-surface sm:bg-transparent rounded-md sm:rounded-none"
                  aria-label={t('remove')}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Checkout Sidebar */}
        <div className="w-full lg:w-96 shrink-0 flex flex-col gap-6">
          <div className="bg-surface-elevated border border-border rounded-lg p-6">
            <h2 className="text-2xl font-arabic font-bold text-foreground mb-6">
              {t('checkoutForm.title')}
            </h2>
            
            <form onSubmit={handleCheckout} className="flex flex-col gap-4 font-arabic">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-foreground" htmlFor="name">
                  {t('checkoutForm.name')}
                </label>
                <input 
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-surface border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-foreground" htmlFor="phone">
                  {t('checkoutForm.phone')}
                </label>
                <input 
                  id="phone"
                  type="tel"
                  required
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-surface border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-start rtl:text-end"
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-foreground" htmlFor="address">
                  {t('checkoutForm.address')}
                </label>
                <textarea 
                  id="address"
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="bg-surface border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"
                />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-foreground" htmlFor="notes">
                  {t('checkoutForm.notes')}
                </label>
                <textarea 
                  id="notes"
                  rows={2}
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="bg-surface border border-border rounded-md px-3 py-2 text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"
                />
              </div>
              
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <div className="flex items-center justify-between text-muted text-sm font-bold">
                  <span>{t('subtotal')} ({totalItems})</span>
                  <span className="font-english-display">{totalPrice} {common('currency')}</span>
                </div>
                <div className="flex items-center justify-between text-foreground text-xl font-bold">
                  <span>{t('total')}</span>
                  <span className="font-english-display text-brand-strong">{totalPrice} {common('currency')}</span>
                </div>
              </div>
              
              <button 
                type="submit"
                className="mt-6 w-full bg-brand text-white py-4 rounded-md font-bold text-lg hover:bg-brand-strong transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand/20"
              >
                {t('checkout')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
