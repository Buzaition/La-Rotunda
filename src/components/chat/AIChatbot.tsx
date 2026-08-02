'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateWhatsAppUrl, CartItem, CheckoutData } from '@/utils/whatsapp';
import { menu } from '@/data/menu';
import { categories } from '@/data/categories';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import { Send, X, Bot, ChefHat, CheckCircle2, ShoppingBag } from 'lucide-react';

interface ParsedMessage {
  displayContent: string;
  orderItems: CartItem[] | null;
  checkoutData: CheckoutData | null;
}

export function AIChatbot() {
  const locale = useLocale() as 'ar' | 'en';
  const isRtl = locale === 'ar';
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', content: string}[]>([
    { 
      role: 'model', 
      content: isRtl 
        ? 'أهلاً بك في مطعم لاروتندا! أنا شيف لاروتندا الآلي 👨‍🍳\nتفضل المنيو، جاهز أساعدك في اختيار أحلى وجبة لليوم؟' 
        : 'Welcome to La Rotunda! I am your AI Chef 👨‍🍳\nHow can I help you choose the perfect meal today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiKeys = [
    process.env.NEXT_PUBLIC_GEMINI_API_KEY
  ].filter(Boolean) as string[];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const generatePrompt = () => {
    // Compact menu to save tokens
    const compactMenu = categories.map(cat => ({
      c: cat.name[locale],
      i: menu.filter(item => item.categoryId === cat.id).map(item => ({
        n: item.name[locale],
        p: Object.fromEntries(
          item.prices?.map(p => [p.optionId || 'default', p.price || 0]) || []
        )
      }))
    }));

    if (isRtl) {
      return `أنت "شيف لاروتندا"، المساعد الذكي لمطعم "لاروتندا" في المنوفية، مصر. المطعم يقدم فرايد تشيكن، برجر، كريب، ريزو ومقبلات.
مهمتك مساعدة العملاء في الطلب.

شخصيتك:
- ودود، تتحدث باللهجة المصرية/المنوفية المحببة، تستخدم كلمات مثل "يا فندم"، "تحت أمرك"، "من عيني".
- خبير في المنيو وتعرف الكميات التي تكفي.

المنيو المتاح (c=الفئة، n=الاسم، p=الأسعار بالجنيه):
${JSON.stringify(compactMenu)}

محتويات سلة العميل الحالية:
${cartItems.length > 0 ? JSON.stringify(cartItems) : "السلة فارغة حالياً."}

خطواتك:
1. اسأله عن تفضيلاتهم واقترح من المنيو بناءً على طلبهم.
2. يمكنك التعديل على سلة العميل (إضافة/حذف) باستخدام كود [SUGGEST_ORDER...] في سطر منفصل هكذا:
[SUGGEST_ORDER: [{"itemName": "كلاسيك كرسبي", "sizeName": "regular", "price": 100, "quantity": 1}]]
استخدم كمية بالسالب (-1) للحذف.
3. بعد تأكيد الطلبات في السلة ورغبة العميل بالدفع، اطلب الاسم، التليفون، والعنوان (تأكد أن التوصيل متاح في المنوفية/السادات).
4. بمجرد اكتمال البيانات الثلاثة، قم بتوليد زر الواتساب بهذا الكود في سطر منفصل:
[CHECKOUT: {"name": "أحمد", "phone": "010...", "address": "العنوان", "notes": "اقتراحات"}]

ملاحظات: لا تخترع وجبات غير موجودة في المنيو. استخدم كود JSON صحيح فقط عند تحديث السلة أو الدفع.`;
    } else {
      return `You are "Chef Rotunda", the AI assistant for La Rotunda, a premium fried chicken and burger restaurant in Monufia, Egypt.
Your personality is friendly, helpful, and welcoming.

Menu Data (c=Category, n=Name, p=Prices in EGP):
${JSON.stringify(compactMenu)}

Current Cart:
${cartItems.length > 0 ? JSON.stringify(cartItems) : "Cart is empty."}

Instructions:
1. Suggest items from the menu based on user preferences.
2. Add/remove items from the cart by outputting this exact tag on a new line:
[SUGGEST_ORDER: [{"itemName": "Classic Crispy", "sizeName": "regular", "price": 100, "quantity": 1}]]
Use negative quantity to remove items.
3. Once the user is satisfied and ready to checkout, ask for Name, Phone, and Address (Delivery within Monufia/Sadat City).
4. Once you have all 3, generate the checkout link by outputting this exact tag:
[CHECKOUT: {"name": "John Doe", "phone": "010...", "address": "Address", "notes": ""}]

Strict rules: Do not hallucinate menu items. Ensure JSON inside tags is perfectly formatted.`;
    }
  };

  const confirmAddToCart = (newItems: CartItem[]) => {
    setCartItems(prev => {
      let updated = [...prev];
      newItems.forEach(item => {
        if (item.quantity < 0) {
          // Remove/decrease quantity
          const existingIdx = updated.findIndex(i => i.itemName === item.itemName && i.sizeName === item.sizeName);
          if (existingIdx >= 0) {
            updated[existingIdx].quantity += item.quantity;
            if (updated[existingIdx].quantity <= 0) {
              updated.splice(existingIdx, 1);
            }
          }
        } else {
          // Add/increase quantity
          const existingIdx = updated.findIndex(i => i.itemName === item.itemName && i.sizeName === item.sizeName);
          if (existingIdx >= 0) {
            updated[existingIdx].quantity += item.quantity;
          } else {
            updated.push(item);
          }
        }
      });
      return updated;
    });
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || apiKeys.length === 0) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKeys[0]);
      const model = genAI.getGenerativeModel({ model: "gemini-flash-lite-latest" });

      const history = messages.slice(1).map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const chat = model.startChat({
        systemInstruction: { role: 'system', parts: [{text: generatePrompt()}] },
        history: history,
      });

      const result = await chat.sendMessage(userText);
      const response = await result.response;
      let text = response.text();

      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error) {
      console.error("AI API Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: isRtl 
          ? 'عذراً يا فندم، يبدو أن هناك ضغط كبير على المطعم حالياً، يرجى المحاولة بعد بضع دقائق أو الاتصال بنا مباشرة.' 
          : 'Apologies, we are experiencing high volume right now. Please try again or call us directly.'
      }]);
    }
    
    setIsLoading(false);
  };

  const parseMessage = (text: string): ParsedMessage => {
    let displayContent = text;
    let orderItems: CartItem[] | null = null;
    let checkoutData: CheckoutData | null = null;

    const orderRegex = /\[SUGGEST_ORDER:\s*(\[[\s\S]*?\])\s*\]/i;
    const orderMatch = displayContent.match(orderRegex);
    if (orderMatch) {
      displayContent = displayContent.replace(orderRegex, '').trim();
      try {
        orderItems = JSON.parse(orderMatch[1]);
      } catch(e) { console.error("JSON Parse error", e); }
    }

    const checkoutRegex = /\[CHECKOUT:\s*(\{[\s\S]*?\})\s*\]/i;
    const checkoutMatch = displayContent.match(checkoutRegex);
    if (checkoutMatch) {
      displayContent = displayContent.replace(checkoutRegex, '').trim();
      try {
        checkoutData = JSON.parse(checkoutMatch[1]);
      } catch(e) { console.error("JSON Parse error", e); }
    }

    return { displayContent, orderItems, checkoutData };
  };

  const renderMarkdown = (text: string) => {
    let html = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    html = html.replace(/\*(.*?)\*/g, '<b>$1</b>');
    html = html.replace(/\n/g, '<br/>');
    return { __html: html };
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-16 h-16 bg-brand text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Bot className="w-8 h-8" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          dir={isRtl ? 'rtl' : 'ltr'}
          className={cn(
            "fixed bottom-24 z-[100] w-[calc(100vw-48px)] md:w-[400px] max-h-[600px] h-[70vh] bg-surface rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 font-arabic",
            isRtl ? "right-6 md:right-8" : "right-6 md:right-8"
          )}
        >
          
          {/* Header */}
          <div className="bg-brand text-white p-4 flex items-center gap-3 shadow-sm z-10 relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-2xl shadow-inner backdrop-blur-sm">
              👨‍🍳
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight m-0">
                {isRtl ? 'شيف لاروتندا' : 'Chef Rotunda'}
              </h3>
              <p className="text-xs opacity-80 m-0">
                {isRtl ? 'مساعد الذكاء الاصطناعي' : 'AI Assistant'}
              </p>
            </div>
          </div>

          {apiKeys.length === 0 && (
            <div className="bg-red-500/10 text-red-500 p-3 text-sm text-center font-bold">
              {isRtl ? 'مفتاح API غير موجود' : 'Missing API Key'}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background/50">
            {messages.map((msg, idx) => {
              const { displayContent, orderItems, checkoutData } = parseMessage(msg.content);
              
              return (
                <div key={idx} className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.role === 'model' ? "self-start" : "self-end"
                )}>
                  <div className={cn(
                    "p-3 rounded-2xl shadow-sm",
                    msg.role === 'model' 
                      ? "bg-surface border border-border text-foreground rounded-tr-sm" 
                      : "bg-brand text-white rounded-tl-sm"
                  )}>
                    <p className="m-0 text-sm leading-relaxed" dangerouslySetInnerHTML={renderMarkdown(displayContent)}></p>
                  </div>
                  
                  {/* Render Order Suggestion Button */}
                  {orderItems && orderItems.length > 0 && (
                    <div className="mt-2 bg-surface-elevated border border-border rounded-xl p-3 shadow-sm self-start min-w-[200px]">
                      <p className="text-sm font-bold mb-2 text-brand flex items-center gap-1">
                        <ChefHat className="w-4 h-4" />
                        {isRtl ? 'تحديث الطلب:' : 'Update Order:'}
                      </p>
                      <ul className="text-xs mb-3 space-y-1 text-muted font-bold">
                        {orderItems.map((oi, i) => (
                          <li key={i} className={oi.quantity < 0 ? 'text-red-500' : ''}>
                            - {oi.quantity < 0 ? `${isRtl ? 'حذف' : 'Remove'} ${Math.abs(oi.quantity)}x` : `${oi.quantity}x`} {oi.itemName} {oi.sizeName ? `(${oi.sizeName})` : ''}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => {
                           confirmAddToCart(orderItems);
                           const isRemoval = orderItems.some(i => i.quantity < 0);
                           setMessages(prev => [...prev, {
                             role: 'model', 
                             content: isRemoval 
                               ? (isRtl ? 'تم التعديل على السلة بنجاح! بتحب تضيف حاجة تانية؟' : 'Cart updated! Anything else?') 
                               : (isRtl ? 'تم إضافة الطلبات للسلة بنجاح! صحتين وهنا. في حاجة تانية تحب أضيفها؟' : 'Items added to cart successfully! Anything else?')
                           }]);
                        }}
                        className="w-full bg-surface hover:bg-surface/80 border border-border text-foreground py-2 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        {isRtl ? 'تأكيد السلة' : 'Confirm Cart'}
                      </button>
                    </div>
                  )}

                  {/* Render Checkout Button */}
                  {checkoutData && (
                    <div className="mt-2 bg-green-500/10 border border-green-500/30 rounded-xl p-3 shadow-sm self-start min-w-[200px]">
                      <p className="text-sm font-bold mb-2 text-green-600 dark:text-green-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        {isRtl ? 'بيانات الطلب جاهزة:' : 'Order Ready:'}
                      </p>
                      <ul className="text-xs mb-3 space-y-1 text-foreground font-bold">
                        <li>{isRtl ? 'الاسم:' : 'Name:'} {checkoutData.name}</li>
                        <li>{isRtl ? 'الهاتف:' : 'Phone:'} {checkoutData.phone}</li>
                        <li>{isRtl ? 'العنوان:' : 'Address:'} {checkoutData.address}</li>
                        {checkoutData.notes && (
                          <li className="text-brand mt-1">{isRtl ? 'ملاحظات:' : 'Notes:'} {checkoutData.notes}</li>
                        )}
                      </ul>
                      <button 
                        onClick={() => {
                           const whatsappUrl = generateWhatsAppUrl(checkoutData, cartItems);
                           window.open(whatsappUrl, '_blank');
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Send className="w-4 h-4" />
                        {isRtl ? 'إرسال للواتساب' : 'Send to WhatsApp'}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            
            {isLoading && (
              <div className="self-start bg-surface border border-border p-3 rounded-2xl rounded-tr-sm shadow-sm flex items-center justify-center">
                <div className="flex gap-1 items-center">
                  <div className="w-2 h-2 bg-brand/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand/60 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 bg-brand/60 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-surface border-t border-border flex gap-2 z-10 relative shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isRtl ? "اكتب طلبك هنا..." : "Type your message..."}
              disabled={isLoading || apiKeys.length === 0}
              className="flex-1 bg-background border border-border rounded-full px-5 py-2.5 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-sm transition-shadow disabled:opacity-50 text-foreground"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim() || apiKeys.length === 0}
              className={cn(
                "w-11 h-11 bg-brand text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform shrink-0 shadow-sm",
                isRtl && "rotate-180"
              )}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
