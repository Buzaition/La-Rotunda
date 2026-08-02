# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.ts >> La Rotunda Fast Food E2E >> English LTR switching works
- Location: e2e\home.spec.ts:26:7

# Error details

```
Error: locator.isVisible: Error: strict mode violation: getByRole('button', { name: /EN|English/i }) resolved to 3 elements:
    1) <button aria-label="Dismiss announcement" class="p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">…</button> aka getByRole('button', { name: 'Dismiss announcement' })
    2) <button aria-label="Open Menu" class="lg:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-focus relative z-50">…</button> aka getByRole('button', { name: 'Open Menu' })
    3) <button id="next-logo" aria-haspopup="menu" data-next-mark="true" aria-expanded="false" aria-label="Open Next.js Dev Tools" data-nextjs-dev-tools-button="true" aria-controls="nextjs-dev-tools-menu">…</button> aka getByRole('button', { name: 'Open Next.js Dev Tools' })

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
        - button "Open Menu" [ref=e15]
  - main [ref=e17]:
    - generic [ref=e18]:
      - img "La Rotunda" [ref=e21]
      - generic [ref=e24]:
        - generic [ref=e25]: من أول قرمشة… تبدأ الحكاية
        - heading "طعم يحكي حكاية" [level=1] [ref=e27]
        - paragraph [ref=e28]: فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.
        - generic [ref=e29]:
          - link "اطلب من أقرب فرع" [ref=e30] [cursor=pointer]:
            - /url: /ar/menu
          - link "اكتشف المنيو" [ref=e31] [cursor=pointer]:
            - /url: /ar/menu
    - generic [ref=e34]:
      - img "Mascot" [ref=e36]
      - heading "لاروتندا مش مجرد وجبة." [level=2] [ref=e37]
      - paragraph [ref=e38]: هي قرمشة متظبطة، خلطة معمولة صح، وحكاية بتبدأ من أول لقمة.
    - generic [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e43]: "01"
        - img "الفرايد تشيكن والبروست" [ref=e45]
        - generic [ref=e47]:
          - heading "الفرايد تشيكن والبروست" [level=3] [ref=e48]
          - paragraph [ref=e49]: قطع فرايد تشيكن ذهبية ومقرمشة بخلطة لاروتندا، متاحة في وجبات فردية وبوكسات عائلية.
          - link "شوف المنيو →" [ref=e50] [cursor=pointer]:
            - /url: /ar/menu?category=cat_broasted
            - generic [ref=e51]: شوف المنيو
            - generic [ref=e52]: →
      - generic [ref=e53]:
        - generic [ref=e54]: "02"
        - img "تشيكن برجر وساندوتشات" [ref=e56]
        - generic [ref=e58]:
          - heading "تشيكن برجر وساندوتشات" [level=3] [ref=e59]
          - paragraph [ref=e60]: ساندوتشات محملة بقطع صدور الدجاج المقرمشة داخل عيش كيزر طازج.
          - link "شوف المنيو →" [ref=e61] [cursor=pointer]:
            - /url: /ar/menu?category=cat_burgers
            - generic [ref=e62]: شوف المنيو
            - generic [ref=e63]: →
      - generic [ref=e64]:
        - generic [ref=e65]: "03"
        - img "الكريبات الحادقة" [ref=e67]
        - generic [ref=e69]:
          - heading "الكريبات الحادقة" [level=3] [ref=e70]
          - paragraph [ref=e71]: كريب محمص ومحشو بالدجاج المقرمش والبطاطس وجبنة الموتزاريلا.
          - link "شوف المنيو →" [ref=e72] [cursor=pointer]:
            - /url: /ar/menu?category=cat_crepes
            - generic [ref=e73]: شوف المنيو
            - generic [ref=e74]: →
      - generic [ref=e75]:
        - generic [ref=e76]: "04"
        - img "الريزو والسايدز" [ref=e78]
        - generic [ref=e80]:
          - heading "الريزو والسايدز" [level=3] [ref=e81]
          - paragraph [ref=e82]: سايدز وصوصات تكمل وجبتك وتخلي الطعم أقوى.
          - link "شوف المنيو →" [ref=e83] [cursor=pointer]:
            - /url: /ar/menu?category=cat_rizo_sides
            - generic [ref=e84]: شوف المنيو
            - generic [ref=e85]: →
    - generic [ref=e87]:
      - generic [ref=e88]:
        - generic [ref=e89]:
          - heading "Signature Collection" [level=2] [ref=e90]
          - heading "الأكثر طلباً" [level=3] [ref=e91]
        - link "شوف المنيو" [ref=e92] [cursor=pointer]:
          - /url: /ar/menu
      - generic [ref=e93]:
        - generic [ref=e94]:
          - generic [ref=e95]:
            - img "بوكس البروست العائلي" [ref=e96]
            - generic [ref=e97]: الأكثر طلباً
          - generic [ref=e98]:
            - heading "بوكس البروست العائلي" [level=4] [ref=e99]
            - paragraph [ref=e100]: قطع فرايد تشيكن مقرمشة تقدم مع سايدز تكمل الوجبة.
            - link "اطلب" [ref=e102] [cursor=pointer]:
              - /url: /ar/menu
        - generic [ref=e103]:
          - generic [ref=e104]:
            - img "كلاسيك كرسبي تشيكن برجر" [ref=e105]
            - generic [ref=e106]: الأكثر طلباً
          - generic [ref=e107]:
            - heading "كلاسيك كرسبي تشيكن برجر" [level=4] [ref=e108]
            - paragraph [ref=e109]: قطعة صدر دجاج مقرمشة مع إضافات طازجة وصوص لاروتندا.
            - link "اطلب" [ref=e111] [cursor=pointer]:
              - /url: /ar/menu
        - generic [ref=e112]:
          - generic [ref=e113]:
            - img "ماستر ساندوتش لاروتندا" [ref=e114]
            - generic [ref=e115]: الأكثر طلباً
          - generic [ref=e116]:
            - heading "ماستر ساندوتش لاروتندا" [level=4] [ref=e117]
            - paragraph [ref=e118]: ساندوتش لاروتندا المميز بطبقات الدجاج المقرمش والموتزاريلا ستكس وصوص الرانش.
            - link "اطلب" [ref=e120] [cursor=pointer]:
              - /url: /ar/menu
        - generic [ref=e121]:
          - generic [ref=e122]:
            - img "كريب تشيكن ستربس كرسبي" [ref=e123]
            - generic [ref=e124]: الأكثر طلباً
          - generic [ref=e125]:
            - heading "كريب تشيكن ستربس كرسبي" [level=4] [ref=e126]
            - paragraph [ref=e127]: قطع تشيكن ستربس مقرمشة داخل كريب محمص.
            - link "اطلب" [ref=e129] [cursor=pointer]:
              - /url: /ar/menu
    - generic [ref=e133]:
      - generic [ref=e134]:
        - heading "من القرمشة للسندوتش" [level=2] [ref=e135]
        - paragraph [ref=e136]: كل مكون له دور في الحكاية
      - generic [ref=e137]:
        - generic [ref=e138]:
          - generic [ref=e139]: "01"
          - text: عيش كيزر طازج
        - generic [ref=e140]:
          - generic [ref=e141]: "02"
          - text: صوص لاروتندا
        - generic [ref=e142]:
          - generic [ref=e143]: "03"
          - text: خس مقرمش
        - generic [ref=e144]:
          - generic [ref=e145]: "04"
          - text: شريحة شيدر
        - generic [ref=e146]:
          - generic [ref=e147]: "05"
          - text: فيليه مقرمش
        - generic [ref=e148]:
          - generic [ref=e149]: "06"
          - text: القاعدة
    - generic [ref=e159]:
      - heading "انتظروا أقوى العروض قريباً" [level=3] [ref=e160]
      - paragraph [ref=e161]: احنا دايماً بنجهز مفاجآت وعروض متتفوتش. خليك متابعنا!
      - link "شوف المنيو" [ref=e162] [cursor=pointer]:
        - /url: /ar/menu
    - generic [ref=e164]:
      - generic [ref=e165]:
        - heading "اختار فرعك الأقرب" [level=2] [ref=e166]
        - paragraph [ref=e167]: موجودين في المنوفية عشان نكون جنبك دايماً. اختار الفرع واستمتع بأقوى قرمشة.
      - generic [ref=e168]:
        - generic [ref=e169]:
          - button [ref=e170]:
            - heading "مدينة السادات" [level=3] [ref=e172]
            - paragraph [ref=e174]: مول سايلو بلازا، شارع أبو بكر الصديق، المنطقة التاسعة، مدينة السادات
          - button [ref=e175]:
            - heading "مدينة منوف" [level=3] [ref=e177]
            - paragraph [ref=e178]: ميدان الساعة، أمام مستشفى الإيمان، مدينة منوف
          - button [ref=e179]:
            - heading "مدينة منوف" [level=3] [ref=e181]
            - paragraph [ref=e182]: طريق الحامول، بجوار مسجد مهنا، مدينة منوف
          - button [ref=e183]:
            - heading "شبين الكوم" [level=3] [ref=e185]
            - paragraph [ref=e186]: آخر شارع باريس، بجوار باريس بلازا، شبين الكوم
        - generic [ref=e188]:
          - generic [ref=e190]:
            - generic [ref=e192]: La Rotunda
            - generic [ref=e193]: مدينة السادات
          - generic [ref=e194]:
            - heading "مدينة السادات" [level=3] [ref=e195]
            - generic [ref=e196]:
              - generic [ref=e197]: مول سايلو بلازا، شارع أبو بكر الصديق، المنطقة التاسعة، مدينة السادات
              - generic [ref=e202]: 11:00 AM - 2:00 AM (يومياً)
              - link "+201070603603" [ref=e211] [cursor=pointer]:
                - /url: tel:+201070603603
            - link "اتصل الآن" [ref=e213] [cursor=pointer]:
              - /url: tel:+201070603603
    - generic [ref=e216]:
      - generic [ref=e217]:
        - generic [ref=e218]:
          - generic [ref=e220]: La Rotunda
          - generic [ref=e221]: فرايد تشيكن مقرمش
        - generic [ref=e223]: فرايد تشيكن مقرمش
      - generic [ref=e224]:
        - generic [ref=e225]:
          - generic [ref=e227]: La Rotunda
          - generic [ref=e228]: تجهيز الساندوتش
        - generic [ref=e230]: تجهيز الساندوتش
      - generic [ref=e231]:
        - generic [ref=e232]:
          - generic [ref=e234]: La Rotunda
          - generic [ref=e235]: صوصات لاروتندا
        - generic [ref=e237]: صوصات لاروتندا
      - generic [ref=e238]:
        - generic [ref=e239]:
          - generic [ref=e241]: La Rotunda
          - generic [ref=e242]: أجواء المطعم
        - generic [ref=e244]: أجواء المطعم
      - generic [ref=e245]:
        - generic [ref=e246]:
          - generic [ref=e248]: La Rotunda
          - generic [ref=e249]: بوكس العيلة
        - generic [ref=e251]: بوكس العيلة
    - generic [ref=e254]:
      - heading "جعان؟" [level=2] [ref=e255]
      - paragraph [ref=e256]: الحكاية أقرب مما تتخيل.
      - generic [ref=e257]:
        - link "شوف المنيو" [ref=e258] [cursor=pointer]:
          - /url: /ar/menu
        - link "اختار فرعك" [ref=e259] [cursor=pointer]:
          - /url: /ar/branches
  - contentinfo [ref=e262]:
    - generic [ref=e263]:
      - generic [ref=e264]:
        - generic [ref=e265]:
          - link [ref=e266] [cursor=pointer]:
            - /url: /ar
            - img "La Rotunda" [ref=e267]
          - paragraph [ref=e268]: فرايد تشيكن مقرمش، ساندوتشات محملة، وخلطة لاروتندا اللي بتخلي كل لقمة ليها حكاية.
          - generic [ref=e269]:
            - link "Facebook" [ref=e270] [cursor=pointer]:
              - /url: https://www.facebook.com/p/La-Rotunda-Fried-chickenBurger-61550986418273/
            - link "Instagram" [ref=e273] [cursor=pointer]:
              - /url: https://www.instagram.com/la_rotunda2023
        - generic [ref=e276]:
          - heading "المنيو" [level=4] [ref=e277]
          - link "المنيو" [ref=e278] [cursor=pointer]:
            - /url: /ar/menu
          - link "العروض" [ref=e279] [cursor=pointer]:
            - /url: /ar/offers
          - link "الفروع" [ref=e280] [cursor=pointer]:
            - /url: /ar/branches
        - generic [ref=e281]:
          - heading "حكايتنا" [level=4] [ref=e282]
          - link "حكايتنا" [ref=e283] [cursor=pointer]:
            - /url: /ar/about
          - link "تواصل معنا" [ref=e284] [cursor=pointer]:
            - /url: /ar/contact
          - link "وظائف" [ref=e285] [cursor=pointer]:
            - /url: /ar/careers
        - generic [ref=e286]:
          - heading "أرقام الدليفري" [level=4] [ref=e287]
          - generic [ref=e288]:
            - generic [ref=e289]: مدينة السادات
            - link "+201070603603" [ref=e290] [cursor=pointer]:
              - /url: tel:+201070603603
          - generic [ref=e291]:
            - generic [ref=e292]: مدينة منوف
            - link "+201019096666" [ref=e293] [cursor=pointer]:
              - /url: tel:+201019096666
          - generic [ref=e294]:
            - generic [ref=e295]: مدينة منوف
            - link "+201021180011" [ref=e296] [cursor=pointer]:
              - /url: tel:+201021180011
          - generic [ref=e297]:
            - generic [ref=e298]: شبين الكوم
            - link "+201006782626" [ref=e299] [cursor=pointer]:
              - /url: tel:+201006782626
      - generic [ref=e300]:
        - paragraph [ref=e301]: © 2026 لاروتندا فرايد تشيكن وبرجر. جميع الحقوق محفوظة.
        - generic [ref=e302]:
          - button "Toggle language" [ref=e303]
          - button "Toggle theme" [ref=e307]
      - generic [ref=e310]: Developed by Developer
  - button "Open Next.js Dev Tools" [ref=e316] [cursor=pointer]
  - alert [ref=e320]
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
      |                       ^ Error: locator.isVisible: Error: strict mode violation: getByRole('button', { name: /EN|English/i }) resolved to 3 elements:
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