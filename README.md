# trip-organizer-interface

أريد منك إنشاء واجهة تطبيق لتنظيم الرحلات، يتكون من التالي:
* 5 ألسنة Tabs بالأسفل على شكل أيقونات وهي: العملاء، الرحلات، الواجهة، الإحدادات، الإحصائيات
* كل Tab يقود إلى شاشة مختلفة بنفس الاسم/النوع
* الشاشات هي:
** شاشة الرحلات، فيها قائمة رحلات تتكون من اسم الرحلة، تاريخ الرحلة، عدد المقاعد، عدد المشاركين (العملاء)
** شاشة العملاء، فيها قائمة العملاء مع زر مع أيقونة اتصال بالهاتف
** شاشة الإعدادات، فيها بعض الأزرار والحقول
** شاشة الإحصائيات فيها مبيان خطي حسب كل شهر، فيه خطان أحمر وأخضر لأرباح والمصاريف
** الواجهة، فيها مبيان مثل السابق في الأعلى، تحته 3 أزرار تقود إلى شاشة الرحلات والعملاء والإحصائيات مع أيقونات خاصة، تحته آخر 3 رحلات، تحته أقرب 5 عملاء من حيث تاريخ الميلاد

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/trip-organizer-interface.git
cd trip-organizer-interface
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
