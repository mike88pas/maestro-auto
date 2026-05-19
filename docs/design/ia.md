# Information Architecture + wireframes

**Status:** v1 dla MVP. Bez Figma (premature). ASCII bloki + komponenty contracts.
**Cel:** klient widzi pełną strukturę strony w jednym dokumencie, developer ma blueprint do implementacji.

---

## 1. Sitemap (depth 2)

```
/                           Homepage
├── /kolekcja               Lista aut (filtry: marka, rok, cena, origin)
│   └── /kolekcja/[slug]    Szczegóły auta
├── /uslugi                 Hub usług
│   ├── /uslugi/broker
│   ├── /uslugi/import
│   ├── /uslugi/wycena
│   └── /uslugi/trade-in
├── /o-nas                  Story, zespół, manifest
├── /dziennik               Blog / editorial (CMS-driven, sprint 2)
│   └── /dziennik/[slug]
├── /kontakt                Telefon-first, formularz, Cal.com
├── /strefa-klienta         Auth gated (sprint 3, MVP placeholder)
└── /prawne
    ├── /prawne/polityka-prywatnosci
    ├── /prawne/regulamin
    └── /prawne/cookies
```

**Note:** `/strefa-klienta` w MVP = placeholder z formularzem rejestracji. Pełna funkcjonalność (saved cars, alerts, private inventory) → sprint 3.

---

## 2. Top nav

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]      Kolekcja  Usługi  O nas  Dziennik  Kontakt    +48 XXX  PL│EN  │
└──────────────────────────────────────────────────────────────────────────────┘
   left                          center                              right
```

**Behavior:**
- Sticky on scroll, full-bleed background z `--bg`, hairline gold 1px bottom.
- Telefon **zawsze widoczny** (Velure: minimalny tekst; Atelier 11: ikona + tekst).
- PL|EN switcher to URL-based (`/en/...` w sprint 2; MVP: tylko PL aktywne, EN jako placeholder).
- Logo wraca do `/`. Hover: subtelny gold underline pod wordmark.
- Mobile: hamburger right, telefon CTA jako sticky bottom bar.

**[V] vs [A11]:**
- **Velure:** wordmark Cormorant 300, central nav links 12px tracking 0.08em uppercase, telefon napisany cyframi small.
- **Atelier 11:** wordmark Playfair 400, central nav 13px tracking 0.06em uppercase, telefon z ikoną phone + tekst.

---

## 3. Homepage section order

Każda sekcja z 1-linijkowym uzasadnieniem dlaczego jest gdzie jest.

| # | Sekcja | Rationale |
|---|--------|-----------|
| 01 | Hero | First impression. Headline + sub + 2 CTA + telefon w nav. |
| 02 | Manifest | Builds trust before showing inventory. "Kim jesteśmy" przed "co mamy". |
| 03 | Kolekcja teaser (3 cards) | Pokazujemy quality, nie quantity. Link do pełnej kolekcji. |
| 04 | Value props (4 filary) | Operacjonalizuje brand promise. Filary → dowody. |
| 05 | Jak działamy (4 kroki) | Process clarity. Klient HNWI chce wiedzieć ZANIM zadzwoni. |
| 06 | AI Concierge intro | Differentiator vs konkurencja. "AI 24/7 + człowiek". |
| 07 | Usługi (4 bloki) | Cross-sell świadomy. Broker często łączy się z trade-in. |
| 08 | Zaufanie (stats + partner logos) | Liczby = zakotwiczenie credibility przed CTA finalnym. |
| 09 | Kontakt CTA | Final push. Telefon + formularz + Cal.com slot. |
| 10 | Footer | Nawigacja secondary, legal, social. |

**Sekcje rytmiczne (oba brandy):**
- **Velure:** wszystkie sekcje dark bg, akcent gold hairline. Mood: cały dom o północy.
- **Atelier 11:** rytm dark/light/dark/light. Hero dark → Manifest light → Kolekcja dark → Value props light → ... Sekcje numerowane `— 01 —`, `— 02 —` etc.

---

## 4. Card anatomy (inventory)

```
┌─────────────────────────────────────────┐
│                                         │
│         [PHOTO 16:9 — auto]             │
│                                         │
├─────────────────────────────────────────┤
│ 🇮🇹                       [11/11 sigil] │  ← origin flag + verification badge
│                                         │
│ FERRARI                                 │  ← marka, caption uppercase
│ 296 GTB Assetto Fiorano                 │  ← model, display font
│                                         │
│ 2024 · 2 947 km                         │  ← rok · przebieg, muted
│                                         │
│ ──────────                              │  ← gold hairline (1/3)
│ Cena na zapytanie                       │  ← cena, gold italic (V) lub tabular (A11)
│                                         │
│ [Zapytaj o auto →]                      │  ← CTA inline, link-style
└─────────────────────────────────────────┘
```

**Component contract:**
```ts
type InventoryCard = {
  slug: string;
  marka: string;              // UPPERCASE
  model: string;              // pełna nazwa, oryginalna
  rok: number;                // 2024
  przebieg: number;           // 2947 (renderuj z space-thin)
  origin: 'PL'|'IT'|'DE'|'CH'|'AE'|'JP'|'GB';
  cena: number | null;        // null → "Cena na zapytanie"
  image: string;              // 16:9 path
  verified: boolean;          // true → 11/11 badge
};
```

**Hover state:**
- **Velure:** scale 1.02, parallax 4px down on photo, bg karty `--accent` fade-in.
- **Atelier 11:** crossfade do drugiej fotki (alternate angle), border `--gold`.

---

## 5. Detail page anatomy (`/kolekcja/[slug]`)

```
┌──────────────────────────────────────────────────────────────────┐
│  NAV (sticky)                                                    │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│          [GALLERY 60vh — main photo + thumbnails strip]          │
│                                                                  │
├─────────────────────────────────────┬────────────────────────────┤
│ FERRARI                             │  [STICKY SIDEBAR]          │
│ 296 GTB Assetto Fiorano             │                            │
│ 2024 · 2 947 km · 🇮🇹 Maranello     │  Cena na zapytanie         │
│                                     │  [Umów rozmowę]            │
│ ──────────                          │  [Sprawdź dostępność]      │
│                                     │  [Zadzwoń: +48 XXX]        │
│ Lead copy (60-80 słów)              │                            │
│ Specifika auta, historia, dlaczego  │  ─────                     │
│ to auto jest wyjątkowe.             │  Concierge AI 24/7         │
│                                     │  [Zacznij rozmowę]         │
│ — SPECYFIKACJA —                    │                            │
│ Silnik:        2.9L V6 + electric   │                            │
│ Moc:           830 KM                │                            │
│ 0-100:         2.9 s                 │                            │
│ Wagon:         Coupé                 │                            │
│ Skrzynia:      8-DCT                 │                            │
│ Napęd:         RWD                   │                            │
│ Kolor:         Rosso Corsa           │                            │
│ Wnętrze:       Nero Alcantara        │                            │
│                                     │                            │
│ — PROWENIENCJA —                    │                            │
│ Pierwszy właściciel: Włochy          │                            │
│ Auta: 1 z 2 w Polsce                 │                            │
│ Serwis: Maranello + autoryzowany PL │                            │
│ Dokumenty: pełne, fabryczne          │                            │
│                                     │                            │
│ — 11/11 RAPORT WERYFIKACJI —        │                            │
│ ✓ Mechanika · ✓ Dokumenty           │                            │
│ ✓ Proweniencja · ✓ Historia kolizji │                            │
│ ✓ Lakier (200μm) · ✓ Numery silnika │                            │
│ ✓ Prawo własności · ✓ Leasing       │                            │
│ ✓ Hipoteka · ✓ Zastawy · ✓ VIN      │                            │
│                                     │                            │
│ [Pobierz pełny raport PDF →]        │                            │
│                                     │                            │
│ — PODOBNE AUTA —                    │                            │
│ [3 cards w grid 3-col]              │                            │
└─────────────────────────────────────┴────────────────────────────┘
```

**Note dla [V]:** brak section numbers. Sekcje oddzielone gold hairline 1/3 width.
**Note dla [A11]:** sekcje numerowane `— 01 —`, `— 02 —`, full-width gold dividers.

---

## 6. Inquiry flow (3 states)

```
STATE 1: BROWSE
┌──────────────┐
│  Kolekcja    │  → klient ogląda 30 aut, filtruje, klika kartę
└──────┬───────┘
       │
       ▼
STATE 2: INQUIRE
┌──────────────┐
│ Detail page  │  → klient czyta szczegóły, klika CTA "Umów rozmowę"
│              │
│  [FORM popup]│  → minimal form: telefon + auto + 1-line message
└──────┬───────┘
       │
       ▼
STATE 3: HANDOFF
┌──────────────┐
│ Cal.com slot │  → klient wybiera slot kalendarzowy (15 min discovery call)
│              │     LUB
│ "Zadzwonimy" │  → klient zaznacza "zadzwońcie do mnie", broker dostaje powiadomienie
└──────────────┘
```

**Backend (sprint 2):**
- Form submit → CRM (Pipedrive) + Telegram bot alert do brokera
- Cal.com webhook → CRM contact created + booking saved
- SLA: pierwszy kontakt < 1h w godzinach pracy, < 4h poza nimi

---

## 7. Mobile rules

| Breakpoint | Behavior |
|-----------|----------|
| `< 768px` | Hamburger nav, sticky bottom bar z telefonem CTA |
| `< 768px` Hero | Headline scaled w/ clamp(), photo full-width above copy (not split) |
| `< 768px` Cards | Single column, full-width, image 4:3 (nie 16:9) for better mobile crop |
| `< 768px` Detail | Sidebar staje się sticky bottom drawer (price + CTA) |
| `< 768px` Forms | Single column, 16px base font (avoid iOS zoom on focus) |

**Telefon CTA mobile (oba brandy):**
- Sticky bottom bar 56px height, bg `--bg`, hairline gold top, tekst centered: *Zadzwoń · +48 XXX XXX XXX*
- Tap → `tel:` opens dialer immediately

**Performance:**
- Lighthouse mobile **>85** must (per CLAUDE.md).
- `next/image` dla wszystkich fotek, sizes prop required.
- Fontów woff2 subset (Latin + Latin Extended dla PL).
- No video, no heavy JS, no analytics until consent.

---

## 8. Komponenty MVP

Lista komponentów do zbudowania w `components/`:

| Komponent | Plik | Props (key) |
|-----------|------|-------------|
| `<Nav />` | `nav.tsx` | `theme: 'velure'\|'atelier-11'` |
| `<Hero />` | `hero.tsx` | `variant: 'V1'\|'V2'\|'V3'\|'A1'\|'A2'\|'A3'` |
| `<Manifest />` | `manifest.tsx` | `theme` (treść z `lib/copy.ts`) |
| `<InventoryTeaser />` | `inventory-teaser.tsx` | `cards: InventoryCard[]` |
| `<ValueProps />` | `value-props.tsx` | (4 filary z copy deck) |
| `<HowItWorks />` | `how-it-works.tsx` | (4 kroki) |
| `<ConciergeIntro />` | `concierge-intro.tsx` | `theme` |
| `<Services />` | `services.tsx` | (4 bloki) |
| `<Trust />` | `trust.tsx` | `stats: Stat[]` |
| `<ContactCTA />` | `contact-cta.tsx` | — |
| `<Footer />` | `footer.tsx` | `theme` |
| `<ThemeSwitcher />` | `theme-switcher.tsx` | (dev-only) |
| `<InventoryCard />` | `inventory-card.tsx` | `card: InventoryCard` |
| `<Badge />` | `ui/badge.tsx` | shadcn |
| `<Button />` | `ui/button.tsx` | shadcn (override variant `velure`/`atelier`) |

---

## 9. Tokens & CSS variables

W `app/globals.css`:

```css
:root[data-theme="velure"] {
  --bg: #0A0809;
  --ink: #F2EBDD;
  --muted: #8A7E6A;
  --gold: #C9A961;
  --gold-deep: #6B4423;
  --accent: #1A0F0A;
  --font-display: var(--font-cormorant);
  --font-body: var(--font-inter);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 200ms;
  --dur-mid: 400ms;
  --dur-slow: 800ms;
  --radius: 0px;
}

:root[data-theme="atelier-11"] {
  --bg: #0B0B0F;
  --ink: #FAFAF7;
  --muted: #6B6B70;
  --gold: #B08D57;
  --gold-deep: #8A6B3D;
  --accent: #1A1A1F;
  --font-display: var(--font-playfair);
  --font-body: var(--font-inter);
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 200ms;
  --dur-mid: 400ms;
  --dur-slow: 800ms;
  --radius: 2px;
}
```

Tailwind config czyta CSS vars:
```ts
colors: {
  bg: 'var(--bg)',
  ink: 'var(--ink)',
  muted: 'var(--muted)',
  gold: 'var(--gold)',
  'gold-deep': 'var(--gold-deep)',
  accent: 'var(--accent)',
}
```

Theme switch = `<html data-theme="velure">` lub `<html data-theme="atelier-11">`. Zero re-render React.
