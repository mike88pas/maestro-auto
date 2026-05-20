# CLAUDE.md — Velure

Ten plik jest kontekstem dla Claude Code w tym repo. Czytaj go za kazdym razem na start sesji.

> **UWAGA:** Repo na GitHub nadal nazywa sie `maestro-auto` (utworzone przed wyborem finalnej nazwy). Rename repo na `velure` w sprint 1.

## 🟢 STATE pre-session (2026-05-20, sesja 5)

- **LIVE:** https://velure-bice.vercel.app (Vercel, auto-deploy z `main`)
- **Firebase project:** `velure-mvp` istnieje (dla future auth/db, NIE hosting — Vercel hostuje)
- **Stack:** Next.js 16.2.6 (Turbopack) + React 19.2.6 stable + Framer Motion. Build clean.
- **Dev server:** `npm install && npm run dev` (`.npmrc` automatycznie ustawia legacy-peer-deps). Build: `npm run build`.
- **Hero status:** ✅ FINAL — OpenArt foto live. Primary = "Maranello Vault" (`hero-vault.webp`, Pagani Huayra centered in dark walnut vault), alt = "Maker's Bench" (`hero-alt.webp`, gold badge macro). The Reveal (`hero-primary.webp`) i pozostałe (`hero-night-driver.webp`, `hero-architectural.webp`) zachowane w `public/placeholders/velure/` do reuse w innych sekcjach. **Lesson learned:** OpenArt generations bez wymuszania 21:9 + outpaint mają subject lewy + negative space prawy, co koliduje z left-anchored headline. Tylko centered-subject foto (Vault, Bench) survives object-cover na wide viewport. Vignette zmiękczone do ~18%/55% (było 30%/78%) żeby photo czytało się przez overlay.
- **KNOWN ISSUE P1:** `/api/health` ma string `"atelier-11 | velure (dual-track)"` — triv fix do single brand
- **KNOWN ISSUE P1:** kolekcja cards (`lib/copy.ts:101-162`) nadal używają placeholder Unsplash CC0 z `placeholders/dev/` — do wymiany na HNWI-grade gdy będą foto
- Pelny snapshot: `docs/SESSION-LOG.md`

## TLDR

Budujemy **Velure** — brand super-luxury concierge dla aut **300k-3 mln PLN** w Polsce. Model: broker (NIE dealer wlasny, NIE marketplace). Klient ma relacje z salonami + kapital + baze HNWI/UHNWI. MVP 6 mies, budzet 300-800k PLN.

**Segment marki:** Ferrari, Lamborghini, McLaren, Bentley, Aston Martin, Rolls-Royce, Maserati, Porsche flagship (911 Turbo+/Taycan Turbo), AMG flagship (S/G-Class), Range Rover SV, BMW M flagship, Audi RS flagship, Tesla Plaid.

**Pivot 2026-05-19:** klient zmienil segment z premium 150-500k na super-luxury 300k-3M. Implikacje: mniejsza baza ale gestsza, wyzsza marza per transakcja (3-5% vs 1.5-3%), naturalny fit do brand "Atelier 11" (krawiectwo na miarę).

Plan szczegolowy: `docs/plan.md`. Naming research + status: `docs/brand-naming.md`. Decyzje czekajace na klienta: `docs/decisions-pending.md`.

## Brand: Velure

**Decyzja klienta:** 2026-05-19 — po side-by-side preview z Atelier 11.

**Storyline:** *velvet (fr. velours, aksamit) + allure (urok). Zmyslowy luksus — noc, skora, miekkie refleksy. Klient nie potrzebuje krzyczec posiadaniem — kupuje auto jak garnitur od Brioni: wie, ze tylko on i krawiec znaja cene.*

**Slogan primary:** *Aksamit. Moc. Dyskrecja.*
**Slogan EN intl:** *Velvet at velocity.*
**USP narracyjne:** *Tam, gdzie predkosc ma fakture.*

**TM research (2026-05-19):** branza automotive 100% czyste, zero kolizji w klasach 12/35 EUIPO/WIPO. Wymaga formalnego EUIPO eSearch przed filing.

**Domena (priorytet sprint 1):**
- `velure.com` zajete (parked squatter) — NIE walczymy (per decyzja klienta)
- **Priorytet:** `velure.pl` (SEO PL) + `velure.cars` (international)
- Backup: `velure.eu`
- Social handles: `@velure` na IG/LinkedIn/X/TikTok — rezerwacja ASAP

**Identyfikacja wizualna Velure:**
- Paleta: noir `#0A0809` + ivory `#F2EBDD` + matte champagne gold `#C9A961` + deep gold `#6B4423` + accent `#1A0F0A`
- Typografia: Cormorant Garamond 300 (display) + Inter (body)
- Mood: noc, skora, miekkie refleksy, slow motion. Foto warm grain, low-key, leather close-ups
- Sigil V11: custom SVG hairline mark — V interlocked z 11 (11 punktow weryfikacji)

**Atelier 11** odpadlo — archiwalnie w `docs/brand/atelier-11.md` jako historia decyzji.

## Komunikacja

- **Jezyk: polski** (komentarze w kodzie po angielsku jesli technicznie zasadne)
- Bezpiecznikiem: kazda finalna cena auta wychodzaca z systemu MUSI byc weryfikowalna w bazie/CRM — AI **nigdy** nie haluuje cen
- Klient HNWI = absolutna dyskrecja, GDPR, brak ujawniania transakcji

## Pozycjonowanie

> "Twoj prywatny doradca premium. AI + eksperci. Najlepsze ceny z salonow w Polsce i Europie."

**Wartosci:** Transparencja · Kuracja · AI-first · Szybkosc · Dyskrecja

## Stack (zatwierdzony)

| Warstwa | Tech |
|---------|------|
| Frontend | Next.js 15 + TypeScript + Tailwind + shadcn/ui |
| Hosting | Vercel (frontend) + Firebase (auth/db) |
| CMS | Sanity.io lub Strapi self-hosted |
| AI core | Claude 4.7 Sonnet (advisor) + GPT-4o-mini (routing) + Claude Vision |
| Vector DB | Qdrant (self-hosted na optimus-server) |
| Chat | Vercel AI SDK + streaming UI |
| Email | Resend + React Email |
| Booking | Cal.com (self-hosted) |
| Voice agent | Vapi.ai |
| CRM | Pipedrive lub Attio |
| Photo AI | Photoroom API + Replicate (SDXL) |
| Payments | Stripe + Przelewy24 |
| Analytics | PostHog + Plausible |

**NIE budujemy** wlasnego DMS w MVP — Sanity CMS + Airtable wystarcza.

## Identyfikacja wizualna

- **Paleta:** noir `#0A0809` + ivory `#F2EBDD` + matte champagne gold `#C9A961` + deep gold `#6B4423` + accent `#1A0F0A`
- **Typografia:** Cormorant Garamond 300 (display) + Inter (body) — SIL OFL, commercial safe
- **Mood:** noc, skora, miekkie refleksy, slow motion. Warm grain w foto, ken-burns na hero. Bez video w tle.
- **Inspiracja:** JamesEdition (full-bleed immersion), Romans International (curated cards). Pagani official photography (low-key dramatic).

## AI Layer (6 modulow do zbudowania)

1. **AI Concierge** (m1-m3) — rozmowa po PL, RAG na live inventory, handoff do brokera
2. **AI Photo Magic** (m2) — Photoroom + SDXL relighting, studyjne zdjecia z phone shotow
3. **AI Valuation** (m3) — trade-in wycena ze zdjec + VIN + przebieg (Claude Vision)
4. **AI Email/Voice Follow-up** (m4) — drip campaign + Vapi.ai voice agent (z disclosure "rozmawia AI")
5. **AI Content Engine** (m5) — auto-generowanie opisow + posty social (reuse z Optimus content_brands.yaml)
6. **AI Fraud/Import Check** (m5) — weryfikacja aut z DE/IT (VIN, historia, dokumenty)

## Guardrails AI (NIENEGOCJOWALNE)

- AI **nigdy** nie podaje finalnej ceny — tylko widelki + handoff do brokera
- AI **nigdy** nie ujawnia marz dealera ani struktury fleet discount
- AI **nigdy** nie obiecuje terminow dostawy bez potwierdzenia od brokera
- Voice agent **zawsze** zaczyna od "Rozmawiacie z asystentem AI [BRAND]" + opt-out w 1 zdaniu
- Klient ma 1-klik dostep do czlowieka w kazdym momencie

## Repo struktura (planowana)

```
maestro-auto/
├── app/
│   ├── (marketing)/         # home, oferty, blog, o-nas
│   ├── (app)/              # strefa-klienta (auth)
│   └── api/
│       ├── ai/             # concierge, valuation, photo-magic
│       ├── leads/          # CRM integration
│       └── booking/        # Cal.com webhook
├── lib/
│   ├── ai/                 # agents (concierge, valuation, content)
│   ├── sanity/             # CMS queries
│   ├── crm/                # Pipedrive/Attio
│   └── pricing/            # fleet discount logic
├── components/
├── docs/                   # plan, decisions, research, naming
└── content-brands.yaml     # reuse z Optimus
```

## Reuse z Optimus (~/optimus/)

Ten projekt nie zywie w izolacji — Optimus ma juz infrastrukture do reuse:
- `content_brands.yaml` — dodac `maestro_auto` jako brand nr 9
- AI agents pattern z `agents/definitions/*.yaml` — stworzyc `maestro_concierge.yaml`
- `scripts/input_sanitizer.py` — sanityzacja danych z scrapingu
- Brain DB schema — tabele `maestro_leads`, `maestro_cars`, `maestro_transactions`
- Telegram bot — alerty dla brokera "nowy lead premium >300k!"

Pelna lista w `docs/plan.md` sekcja 9.

## Decyzje strategiczne (zatwierdzone 2026-05-18)

- **Model:** Broker/Concierge premium (NIE dealer, NIE marketplace)
- **Segment:** Premium PL 150-500k PLN (BMW M, AUDI RS, AMG, Porsche, Range Rover, Tesla S/X)
- **Budzet:** 300-800k PLN, MVP 6 miesiecy
- **Zasoby klienta:** relacje z salonami + kapital + baza HNWI
- **Cel m6:** 30-60 transakcji/mies, run-rate 1.5-2 mln PLN/rok

## Decyzje czekajace na klienta

Patrz `docs/decisions-pending.md` — 7 punktow do call'a.

## Standardy kodu (gdy juz piszemy)

- TypeScript strict
- Lighthouse score >90 mobile MUST (premium = speed)
- Core Web Vitals zielone
- GDPR compliance — pseudonimizacja, opt-in everywhere
- Brak data breach acceptable — audyt zewnetrzny przed public launch
- Cypress/Playwright e2e na golden path (chat → booking → CRM)
