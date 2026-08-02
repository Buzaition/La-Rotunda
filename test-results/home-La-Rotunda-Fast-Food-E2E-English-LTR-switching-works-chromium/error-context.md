# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> La Rotunda Fast Food E2E >> English LTR switching works
- Location: e2e\home.spec.ts:26:7

# Error details

```
Error: locator.isVisible: Error: strict mode violation: getByRole('button', { name: /EN|English/i }) resolved to 2 elements:
    1) <button aria-label="Dismiss announcement" class="p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">…</button> aka getByRole('button', { name: 'Dismiss announcement' })
    2) <button id="next-logo" aria-haspopup="menu" data-next-mark="true" aria-expanded="false" aria-label="Open Next.js Dev Tools" data-nextjs-dev-tools-button="true" aria-controls="nextjs-dev-tools-menu">…</button> aka getByRole('button', { name: 'Open Next.js Dev Tools' })

Call log:
    - checking visibility of getByRole('button', { name: /EN|English/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: جرب ماستر ساندوتش لاروتندا الجديد! متاح في كل فروعنا.
      - button "Dismiss announcement" [ref=e6]
    - banner [ref=e10]:
      - generic [ref=e11]:
        - link [ref=e12] [cursor=pointer]:
          - /url: /ar
          - img "La Rotunda" [ref=e13]
        - navigation [ref=e14]:
          - link "الرئيسية" [ref=e15] [cursor=pointer]:
            - /url: /ar
          - link "المنيو" [ref=e16] [cursor=pointer]:
            - /url: /ar/menu
          - link "العروض" [ref=e17] [cursor=pointer]:
            - /url: /ar/offers
          - link "الفروع" [ref=e18] [cursor=pointer]:
            - /url: /ar/branches
          - link "حكايتنا" [ref=e19] [cursor=pointer]:
            - /url: /ar/about
          - link "تواصل معنا" [ref=e20] [cursor=pointer]:
            - /url: /ar/contact
        - generic [ref=e21]:
          - generic [ref=e22]:
            - button "Toggle language" [ref=e23]:
              - generic [ref=e27]: EN
            - button "Toggle theme" [ref=e28]
          - link "اطلب الآن" [ref=e31] [cursor=pointer]:
            - /url: /ar/menu
  - main [ref=e32]:
    - generic [ref=e33]:
      - img "La Rotunda" [ref=e36]
      - generic [ref=e39]:
        - generic [ref=e40]: من أول قرمشة… تبدأ الحكاية
        - heading "طعم يحكي حكاية" [level=1] [ref=e42]
        - paragraph [ref=e43]: فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.
        - generic [ref=e44]:
          - link "اطلب من أقرب فرع" [ref=e45] [cursor=pointer]:
            - /url: /ar/menu
          - link "اكتشف المنيو" [ref=e46] [cursor=pointer]:
            - /url: /ar/menu
    - generic [ref=e49]:
      - img "Mascot" [ref=e51]
      - heading "لاروتندا مش مجرد وجبة." [level=2] [ref=e52]
      - paragraph [ref=e53]: هي قرمشة متظبطة، خلطة معمولة صح، وحكاية بتبدأ من أول لقمة.
    - generic [ref=e56]:
      - generic [ref=e57]:
        - generic [ref=e58]: "01"
        - img "الفرايد تشيكن والبروست" [ref=e60]
        - generic [ref=e62]:
          - heading "الفرايد تشيكن والبروست" [level=3] [ref=e63]
          - paragraph [ref=e64]: قطع فرايد تشيكن ذهبية ومقرمشة بخلطة لاروتندا، متاحة في وجبات فردية وبوكسات عائلية.
          - link "شوف المنيو →" [ref=e65] [cursor=pointer]:
            - /url: /ar/menu?category=cat_broasted
            - generic [ref=e66]: شوف المنيو
            - generic [ref=e67]: →
      - generic [ref=e68]:
        - generic [ref=e69]: "02"
        - img "تشيكن برجر وساندوتشات" [ref=e71]
        - generic [ref=e73]:
          - heading "تشيكن برجر وساندوتشات" [level=3] [ref=e74]
          - paragraph [ref=e75]: ساندوتشات محملة بقطع صدور الدجاج المقرمشة داخل عيش كيزر طازج.
          - link "شوف المنيو →" [ref=e76] [cursor=pointer]:
            - /url: /ar/menu?category=cat_burgers
            - generic [ref=e77]: شوف المنيو
            - generic [ref=e78]: →
      - generic [ref=e79]:
        - generic [ref=e80]: "03"
        - img "الكريبات الحادقة" [ref=e82]
        - generic [ref=e84]:
          - heading "الكريبات الحادقة" [level=3] [ref=e85]
          - paragraph [ref=e86]: كريب محمص ومحشو بالدجاج المقرمش والبطاطس وجبنة الموتزاريلا.
          - link "شوف المنيو →" [ref=e87] [cursor=pointer]:
            - /url: /ar/menu?category=cat_crepes
            - generic [ref=e88]: شوف المنيو
            - generic [ref=e89]: →
      - generic [ref=e90]:
        - generic [ref=e91]: "04"
        - img "الريزو والسايدز" [ref=e93]
        - generic [ref=e95]:
          - heading "الريزو والسايدز" [level=3] [ref=e96]
          - paragraph [ref=e97]: سايدز وصوصات تكمل وجبتك وتخلي الطعم أقوى.
          - link "شوف المنيو →" [ref=e98] [cursor=pointer]:
            - /url: /ar/menu?category=cat_rizo_sides
            - generic [ref=e99]: شوف المنيو
            - generic [ref=e100]: →
    - generic [ref=e102]:
      - generic [ref=e103]:
        - generic [ref=e104]:
          - heading "Signature Collection" [level=2] [ref=e105]
          - heading "الأكثر طلباً" [level=3] [ref=e106]
        - link "شوف المنيو" [ref=e107] [cursor=pointer]:
          - /url: /ar/menu
      - generic [ref=e108]:
        - generic [ref=e109]:
          - generic [ref=e110]:
            - img "بوكس البروست العائلي" [ref=e111]
            - generic [ref=e112]: الأكثر طلباً
          - generic [ref=e113]:
            - heading "بوكس البروست العائلي" [level=4] [ref=e114]
            - paragraph [ref=e115]: قطع فرايد تشيكن مقرمشة تقدم مع سايدز تكمل الوجبة.
            - link "اطلب" [ref=e117] [cursor=pointer]:
              - /url: /ar/menu
        - generic [ref=e118]:
          - generic [ref=e119]:
            - img "كلاسيك كرسبي تشيكن برجر" [ref=e120]
            - generic [ref=e121]: الأكثر طلباً
          - generic [ref=e122]:
            - heading "كلاسيك كرسبي تشيكن برجر" [level=4] [ref=e123]
            - paragraph [ref=e124]: قطعة صدر دجاج مقرمشة مع إضافات طازجة وصوص لاروتندا.
            - link "اطلب" [ref=e126] [cursor=pointer]:
              - /url: /ar/menu
        - generic [ref=e127]:
          - generic [ref=e128]:
            - img "ماستر ساندوتش لاروتندا" [ref=e129]
            - generic [ref=e130]: الأكثر طلباً
          - generic [ref=e131]:
            - heading "ماستر ساندوتش لاروتندا" [level=4] [ref=e132]
            - paragraph [ref=e133]: ساندوتش لاروتندا المميز بطبقات الدجاج المقرمش والموتزاريلا ستكس وصوص الرانش.
            - link "اطلب" [ref=e135] [cursor=pointer]:
              - /url: /ar/menu
        - generic [ref=e136]:
          - generic [ref=e137]:
            - img "كريب تشيكن ستربس كرسبي" [ref=e138]
            - generic [ref=e139]: الأكثر طلباً
          - generic [ref=e140]:
            - heading "كريب تشيكن ستربس كرسبي" [level=4] [ref=e141]
            - paragraph [ref=e142]: قطع تشيكن ستربس مقرمشة داخل كريب محمص.
            - link "اطلب" [ref=e144] [cursor=pointer]:
              - /url: /ar/menu
    - generic [ref=e148]:
      - generic [ref=e149]:
        - heading "من القرمشة للسندوتش" [level=2] [ref=e150]
        - paragraph [ref=e151]: كل مكون له دور في الحكاية
      - generic [ref=e152]:
        - generic [ref=e153]:
          - generic [ref=e154]: "01"
          - text: عيش كيزر طازج
        - generic [ref=e155]:
          - generic [ref=e156]: "02"
          - text: صوص لاروتندا
        - generic [ref=e157]:
          - generic [ref=e158]: "03"
          - text: خس مقرمش
        - generic [ref=e159]:
          - generic [ref=e160]: "04"
          - text: شريحة شيدر
        - generic [ref=e161]:
          - generic [ref=e162]: "05"
          - text: فيليه مقرمش
        - generic [ref=e163]:
          - generic [ref=e164]: "06"
          - text: القاعدة
    - generic [ref=e174]:
      - heading "انتظروا أقوى العروض قريباً" [level=3] [ref=e175]
      - paragraph [ref=e176]: احنا دايماً بنجهز مفاجآت وعروض متتفوتش. خليك متابعنا!
      - link "شوف المنيو" [ref=e177] [cursor=pointer]:
        - /url: /ar/menu
    - generic [ref=e179]:
      - generic [ref=e180]:
        - heading "اختار فرعك الأقرب" [level=2] [ref=e181]
        - paragraph [ref=e182]: موجودين في المنوفية عشان نكون جنبك دايماً. اختار الفرع واستمتع بأقوى قرمشة.
      - generic [ref=e183]:
        - generic [ref=e184]:
          - button [ref=e185]:
            - heading "مدينة السادات" [level=3] [ref=e187]
            - paragraph [ref=e189]: مول سايلو بلازا، شارع أبو بكر الصديق، المنطقة التاسعة، مدينة السادات
          - button [ref=e190]:
            - heading "مدينة منوف" [level=3] [ref=e192]
            - paragraph [ref=e193]: ميدان الساعة، أمام مستشفى الإيمان، مدينة منوف
          - button [ref=e194]:
            - heading "مدينة منوف" [level=3] [ref=e196]
            - paragraph [ref=e197]: طريق الحامول، بجوار مسجد مهنا، مدينة منوف
          - button [ref=e198]:
            - heading "شبين الكوم" [level=3] [ref=e200]
            - paragraph [ref=e201]: آخر شارع باريس، بجوار باريس بلازا، شبين الكوم
        - generic [ref=e203]:
          - generic [ref=e205]:
            - generic [ref=e207]: La Rotunda
            - generic [ref=e208]: مدينة السادات
          - generic [ref=e209]:
            - heading "مدينة السادات" [level=3] [ref=e210]
            - generic [ref=e211]:
              - generic [ref=e212]: مول سايلو بلازا، شارع أبو بكر الصديق، المنطقة التاسعة، مدينة السادات
              - generic [ref=e217]: 11:00 AM - 2:00 AM (يومياً)
              - link "+201070603603" [ref=e226] [cursor=pointer]:
                - /url: tel:+201070603603
            - link "اتصل الآن" [ref=e228] [cursor=pointer]:
              - /url: tel:+201070603603
    - generic [ref=e231]:
      - generic [ref=e232]:
        - generic [ref=e233]:
          - generic [ref=e235]: La Rotunda
          - generic [ref=e236]: فرايد تشيكن مقرمش
        - generic [ref=e238]: فرايد تشيكن مقرمش
      - generic [ref=e239]:
        - generic [ref=e240]:
          - generic [ref=e242]: La Rotunda
          - generic [ref=e243]: تجهيز الساندوتش
        - generic [ref=e245]: تجهيز الساندوتش
      - generic [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e249]: La Rotunda
          - generic [ref=e250]: صوصات لاروتندا
        - generic [ref=e252]: صوصات لاروتندا
      - generic [ref=e253]:
        - generic [ref=e254]:
          - generic [ref=e256]: La Rotunda
          - generic [ref=e257]: أجواء المطعم
        - generic [ref=e259]: أجواء المطعم
      - generic [ref=e260]:
        - generic [ref=e261]:
          - generic [ref=e263]: La Rotunda
          - generic [ref=e264]: بوكس العيلة
        - generic [ref=e266]: بوكس العيلة
    - generic [ref=e269]:
      - heading "جعان؟" [level=2] [ref=e270]
      - paragraph [ref=e271]: الحكاية أقرب مما تتخيل.
      - generic [ref=e272]:
        - link "شوف المنيو" [ref=e273] [cursor=pointer]:
          - /url: /ar/menu
        - link "اختار فرعك" [ref=e274] [cursor=pointer]:
          - /url: /ar/branches
  - contentinfo [ref=e277]:
    - generic [ref=e278]:
      - generic [ref=e279]:
        - generic [ref=e280]:
          - link [ref=e281] [cursor=pointer]:
            - /url: /ar
            - img "La Rotunda" [ref=e282]
          - paragraph [ref=e283]: فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.
          - generic [ref=e284]:
            - link "Facebook" [ref=e285] [cursor=pointer]:
              - /url: https://www.facebook.com/p/La-Rotunda-Fried-chickenBurger-61550986418273/
            - link "Instagram" [ref=e288] [cursor=pointer]:
              - /url: https://www.instagram.com/la_rotunda2023
        - generic [ref=e291]:
          - heading "المنيو" [level=4] [ref=e292]
          - link "المنيو" [ref=e293] [cursor=pointer]:
            - /url: /ar/menu
          - link "العروض" [ref=e294] [cursor=pointer]:
            - /url: /ar/offers
          - link "الفروع" [ref=e295] [cursor=pointer]:
            - /url: /ar/branches
        - generic [ref=e296]:
          - heading "حكايتنا" [level=4] [ref=e297]
          - link "حكايتنا" [ref=e298] [cursor=pointer]:
            - /url: /ar/about
          - link "تواصل معنا" [ref=e299] [cursor=pointer]:
            - /url: /ar/contact
          - link "وظائف" [ref=e300] [cursor=pointer]:
            - /url: /ar/careers
        - generic [ref=e301]:
          - heading "أرقام الدليفري" [level=4] [ref=e302]
          - generic [ref=e303]:
            - generic [ref=e304]: مدينة السادات
            - link "+201070603603" [ref=e305] [cursor=pointer]:
              - /url: tel:+201070603603
          - generic [ref=e306]:
            - generic [ref=e307]: مدينة منوف
            - link "+201019096666" [ref=e308] [cursor=pointer]:
              - /url: tel:+201019096666
          - generic [ref=e309]:
            - generic [ref=e310]: مدينة منوف
            - link "+201021180011" [ref=e311] [cursor=pointer]:
              - /url: tel:+201021180011
          - generic [ref=e312]:
            - generic [ref=e313]: شبين الكوم
            - link "+201006782626" [ref=e314] [cursor=pointer]:
              - /url: tel:+201006782626
      - generic [ref=e315]:
        - paragraph [ref=e316]: © 2026 لاروتندا فرايد تشيكن وبرجر. جميع الحقوق محفوظة.
        - generic [ref=e317]:
          - button "Toggle language" [ref=e318]:
            - generic [ref=e322]: EN
          - button "Toggle theme" [ref=e323]
      - generic [ref=e326]: Developed by Developer
  - button "Open Next.js Dev Tools" [ref=e332] [cursor=pointer]
  - alert [ref=e336]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('La Rotunda Fast Food E2E', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     // Catch console errors
  6   |     page.on('console', msg => {
  7   |       if (msg.type() === 'error') {
  8   |         console.error(`Browser console error: ${msg.text()}`);
  9   |       }
  10  |     });
  11  |   });
  12  | 
  13  |   test('Arabic RTL is default and works', async ({ page }) => {
  14  |     await page.goto('/');
  15  |     
  16  |     // Should resolve to /ar
  17  |     await expect(page).toHaveURL(/\/ar/);
  18  |     
  19  |     // Should be RTL
  20  |     const dir = await page.getAttribute('html', 'dir');
  21  |     expect(dir).toBe('rtl');
  22  |     const lang = await page.getAttribute('html', 'lang');
  23  |     expect(lang).toBe('ar');
  24  |   });
  25  | 
  26  |   test('English LTR switching works', async ({ page }) => {
  27  |     await page.goto('/ar');
  28  |     
  29  |     // Click language switcher
  30  |     // Look for button containing 'EN'
  31  |     const langBtn = page.getByRole('button', { name: /EN|English/i });
> 32  |     if (await langBtn.isVisible()) {
      |                       ^ Error: locator.isVisible: Error: strict mode violation: getByRole('button', { name: /EN|English/i }) resolved to 2 elements:
  33  |       await langBtn.click();
  34  |     } else {
  35  |       // Mobile menu language switcher fallback
  36  |       await page.getByRole('button', { name: /Open Menu/i }).click();
  37  |       await page.getByRole('button', { name: /EN|English/i }).click();
  38  |     }
  39  |     
  40  |     await page.waitForURL(/\/en/);
  41  |     
  42  |     const dir = await page.getAttribute('html', 'dir');
  43  |     expect(dir).toBe('ltr');
  44  |     const lang = await page.getAttribute('html', 'lang');
  45  |     expect(lang).toBe('en');
  46  |   });
  47  | 
  48  |   test('Theme switching works', async ({ page }) => {
  49  |     await page.goto('/ar');
  50  |     
  51  |     // Find theme switcher
  52  |     const themeBtn = page.getByRole('button', { name: /Switch to/i });
  53  |     if (await themeBtn.isVisible()) {
  54  |       await themeBtn.click();
  55  |       
  56  |       const hasDarkClass = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  57  |       expect(typeof hasDarkClass).toBe('boolean');
  58  |     }
  59  |   });
  60  | 
  61  |   test('Menu filtering works', async ({ page }) => {
  62  |     await page.goto('/ar/menu');
  63  |     
  64  |     // Click spicy filter
  65  |     const spicyBtn = page.getByRole('button', { name: /سبايسي/ });
  66  |     if (await spicyBtn.isVisible()) {
  67  |       await spicyBtn.click();
  68  |       // Just verifying we can click it and it doesn't crash
  69  |       expect(true).toBe(true);
  70  |     }
  71  |   });
  72  | 
  73  |   test('Branch selection works and persists', async ({ page }) => {
  74  |     await page.goto('/ar/branches');
  75  |     
  76  |     // Click on a branch
  77  |     const branchBtn = page.getByRole('button', { name: /السادات/ }); // Sadat
  78  |     if (await branchBtn.isVisible()) {
  79  |       await branchBtn.click();
  80  |       
  81  |       // Verify local storage
  82  |       const selected = await page.evaluate(() => localStorage.getItem('selectedBranch'));
  83  |       expect(selected).toBeTruthy();
  84  |     }
  85  |   });
  86  | 
  87  |   test('Telephone links are formatted correctly', async ({ page }) => {
  88  |     await page.goto('/ar/contact');
  89  |     
  90  |     // Check if there are tel links
  91  |     const telLinks = await page.locator('a[href^="tel:"]').count();
  92  |     // Assuming at least one branch has a phone number
  93  |     if (telLinks > 0) {
  94  |       const href = await page.locator('a[href^="tel:"]').first().getAttribute('href');
  95  |       expect(href).toMatch(/^tel:[0-9+]+/);
  96  |     }
  97  |   });
  98  | 
  99  |   test('No horizontal overflow', async ({ page }) => {
  100 |     await page.goto('/ar');
  101 |     
  102 |     const hasOverflow = await page.evaluate(() => {
  103 |       return document.documentElement.scrollWidth > window.innerWidth;
  104 |     });
  105 |     
  106 |     expect(hasOverflow).toBe(false);
  107 |   });
  108 | });
  109 | 
```