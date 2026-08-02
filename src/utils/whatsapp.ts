export interface CartItem {
  id: string; // unique identifier (e.g. menu item id + option id)
  itemName: string;
  sizeName?: string;
  price?: number;
  quantity: number;
}

export interface CheckoutData {
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export const generateWhatsAppUrl = (checkoutData: CheckoutData, orderItems: CartItem[]) => {
  const phoneNumber = "201070603603"; // Default WhatsApp Number for La Rotunda
  
  let message = `*طلب جديد لمطعم لاروتندا* 🍔🍗\n`;
  message += `=======================\n\n`;
  
  message += `*👤 بيانات العميل:*\n`;
  message += `الاسم: ${checkoutData.name}\n`;
  message += `الهاتف: ${checkoutData.phone}\n`;
  message += `العنوان: ${checkoutData.address}\n`;
  if (checkoutData.notes) {
    message += `ملاحظات إضافية: ${checkoutData.notes}\n`;
  }
  
  message += `\n*🛒 تفاصيل الطلب:*\n`;
  orderItems.forEach((item, index) => {
    message += `${index + 1}. ${item.itemName} ${item.sizeName ? `(${item.sizeName})` : ''} - العدد: ${item.quantity}\n`;
  });
  
  message += `\n=======================\n`;
  message += `تم إرسال هذا الطلب عبر شيف لاروتندا الآلي 👨‍🍳`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
