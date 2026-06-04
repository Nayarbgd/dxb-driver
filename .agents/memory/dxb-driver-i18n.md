---
name: DXB Driver i18n architecture
description: How the bilingual (EN/ES) system works across the DXB Driver React app
---

## The rule
All user-visible strings live in `artifacts/dxb-driver/src/i18n/translations.ts`. Components import `useLanguage()` from `LanguageContext.tsx` to get `{ t, lang, setLang, waLink }`.

**Why:** Adding a new language or updating copy only requires touching one file. Pages never hardcode strings.

## How to apply
- Adding new text: add key to both `en` and `es` objects in translations.ts, reference as `t.page.section.key` in JSX.
- WA links: always use `waLink` from `useLanguage()`, never hardcode the URL. Exception: Contact form `onSubmit` builds a custom message from form values using `lang` ternary, then calls `wa.me/971528730883` directly.
- Array data (FAQ items, pricing tiers, differentiators): stored in translations as typed arrays — iterate over `t.faq.categories`, `t.pricing.tierData`, etc.
- Icon arrays (e.g. `diffIcons` in WhyChooseUs): JSX arrays indexed by position inside the component — icons don't need translation, text comes from `t.why.differentiators.items[i]`.
- Language persistence: `localStorage` key `"dxb-lang"`, defaults to `"en"`.
- The Zod schema in Contact.tsx is defined **inside** the component so error messages can use `t.contact.form.*`.
