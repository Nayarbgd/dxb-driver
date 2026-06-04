# DXB Driver

_Premium private chauffeur service website for Dubai — fully bilingual (English + Spanish), 7 pages, dark luxury aesthetic._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/dxb-driver/src/i18n/translations.ts` — all EN + ES strings, `getWaLink(lang)` helper, `Translations` interface
- `artifacts/dxb-driver/src/context/LanguageContext.tsx` — `LanguageProvider` + `useLanguage()` hook (provides `t`, `lang`, `setLang`, `waLink`)
- `artifacts/dxb-driver/src/pages/` — 7 pages: Home, Services, Pricing, About, Contact, FAQ, WhyChooseUs
- `artifacts/dxb-driver/src/components/` — Navbar, Footer, FloatingWhatsApp, MobileCTABar, CTAButton, SectionTitle, ServiceCard, TestimonialCard

## Architecture decisions

- **i18n approach**: flat `translations.ts` with typed `Translations` interface, two exported objects (`en`, `es`) merged into `translations` record — no library overhead.
- **Language persistence**: `localStorage` key `"dxb-lang"`, defaults to `"en"`. SEO meta + `<html lang>` updated via `useEffect` in the context.
- **WhatsApp links**: `getWaLink(lang)` in `translations.ts` generates the full `wa.me` URL with a bilingual pre-filled message via `encodeURIComponent`. All components consume `waLink` from the context.
- **Array data (FAQ, pricing tiers, differentiators, etc.)**: stored inside `translations` as typed arrays so components iterate over `t.faq.categories`, `t.pricing.tierData`, `t.why.differentiators.items` — no module-level constants that break bilingual rendering.
- **Icon arrays** (WhyChooseUs differentiators, audience): kept as JSX arrays indexed inside the component, since icons are not text and don't need translation.

## Product

DXB Driver is a premium private chauffeur booking site for Dubai. Visitors can learn about three service categories (airport transfers, city rides, inter-emirate), see fleet tiers with pricing, read FAQ, and book instantly via WhatsApp (pre-filled bilingual message). Full English + Spanish support with a globe icon switcher in the navbar.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- WhatsApp number: `971528730883` — appears only in `translations.ts` (`WA_BASE`) and `Contact.tsx` form submit handler.
- Contact form `onSubmit` generates a custom bilingual WA message using form field values; it does NOT use `waLink` directly.
- The Zod schema in `Contact.tsx` is defined inside the component so error messages can reference `t.contact.form.*` translation keys.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
