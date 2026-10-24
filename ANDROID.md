# تحويل Fitness Hub إلى تطبيق أندرويد

## الطريقة 1 — بدون أي تثبيت (الأسهل): GitHub Actions
1. أنشئ مستودعًا جديدًا على GitHub وارفع محتوى هذا المجلد (بدون node_modules و dist).
2. افتح تبويب **Actions** ← **Build Android APK** ← **Run workflow**.
3. بعد دقائق حمّل الملف `fitness-hub-apk` (فيه app-debug.apk) وثبّته على الهاتف (فعّل "التثبيت من مصادر غير معروفة").

## الطريقة 2 — على جهازك
المتطلبات: Node 22، JDK 21، Android Studio (أو Android SDK).
```bash
npm install
npm run android:init     # ينشئ مجلد android ويولّد الأيقونات (مرة واحدة)
npm run android:apk      # يبني android/app/build/outputs/apk/debug/app-debug.apk
# أو افتحه في Android Studio:  npm run android:open
```
بعد أي تعديل في الكود: `npm run android:sync`.

## الطريقة 3 — تثبيت من المتصفح (PWA) بدون APK
انشر مجلد `dist` على HTTPS (مثل Vercel، المشروع مرتبط به أصلًا) ثم افتح الرابط في Chrome ← ⋮ ← **تثبيت التطبيق**.
نفس الطريقة تعمل على الكمبيوتر (Chrome/Edge: أيقونة التثبيت في شريط العنوان) وعلى الآيفون (Safari ← مشاركة ← **إضافة إلى الشاشة الرئيسية**).

## للنشر على Google Play لاحقًا
ابنِ APK/AAB موقّعًا بمفتاح خاص بك (Release) بدل debug.

## ملاحظات
- البيانات محلية داخل التطبيق (localStorage/IndexedDB) ولا تنتقل بين الأجهزة؛ استخدم النسخ الاحتياطي JSON.
- تذكيرات المتصفح لا تعمل في غلاف الأندرويد؛ إن أردت إشعارات حقيقية نضيف `@capacitor/local-notifications`.
