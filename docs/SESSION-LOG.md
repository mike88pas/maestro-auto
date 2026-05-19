# Session log — Velure

Snapshot stanu projektu między sesjami. Update na koniec każdej sesji roboczej.

---

## 2026-05-19 (sesja 4) — Hero WOW redesign + Vercel live deploy

**Trwanie:** ~1.5h.
**Commit:** `0cea665` feat: hero redesign + Next.js 16 + Vercel live deploy

### Co zostało zrobione

**Hero layout redesign (efekt WOW):**
- Headline rescale `clamp(56,11vw,160)` → `clamp(48,8.5vw,128)` + `leading-[0.95]` — 3 linie "Aksamit. Moc. Dyskrecja." mieszczą się bez clipowania top
- Vignette lighter: `var(--bg) 50%` → `30%` centrum, `95%` → `78%` dół — foto oddycha, headline nadal czytelny
- Container split: headline `max-w-4xl`, sub+CTA `max-w-2xl` — lepszy rytm wizualny
- Sigil + caption: `pt-24 → pt-32`, tracking `0.2em → 0.24em`, intensity `text-gold/85`
- Nowe top-right: `MMXXVI · ESTABLISHED` caption `text-ink/40` — łamie pustkę prawego baru
- CTA primary: usunięta strzałka `→` (gold sweep `::before` daje pełen efekt)
- Hairline separator: `mt-16 md:mt-20 → mt-20 md:mt-28`
- Scroll indicator: Aesop-style thin line + dot pulse (bez "Scroll" textu)
- **Crossfade architecture:** 2 motion.div overlapping, cycle 20s (0-8s primary, 8-10s fade alt in, 10-18s alt, 18-20s fade out)

**OpenArt prompts v2 (5 reżyserii):**
- `docs/brand/hero-prompts-v2.md` (293 linie) — Maranello Vault / The Reveal / Maker's Bench / Night Driver / Architectural
- User generuje ręcznie, wybiera 2 → upload do `public/placeholders/velure/`
- Po uploadzie: swap `HERO_PRIMARY` / `HERO_ALT` w `components/hero.tsx` (2 linie)

**Tech upgrade:**
- Next.js `15.0.3 → 16.2.6` (Turbopack default, CVE-2025-66478 patch)
- React `19.0.0-rc → 19.2.6` stable
- ESLint fix: `components/six-capitals.tsx` — usunięta nieużywana `activeCity` const
- `.npmrc` z `legacy-peer-deps=true` — clean install na CI/Vercel

**Deployment — Vercel (pivot z Firebase):**
- Próba Firebase App Hosting → wymaga planu Blaze (Spark free niewystarczy)
- Klient: **pivot na Vercel** (zgodnie z CLAUDE.md, native Next.js, zero billing setup)
- Vercel project: `velure` w org `mikes-projects-4ae6588f`
- GitHub auto-connected `mike88pas/maestro-auto` → push triggers deploy
- Firebase project `velure-mvp` utworzony (do przyszłego use case auth/db, nie hosting)

### 🟢 LIVE URLs

- **Production alias:** https://velure-bice.vercel.app
- **Deployment URL:** https://velure-h9nfcmy0t-mikes-projects-4ae6588f.vercel.app
- **API health:** `/api/health` returns `{status:"ok",brand:"atelier-11 | velure (dual-track)"}`
- **Inspect:** https://vercel.com/mikes-projects-4ae6588f/velure
- **Firebase Console:** https://console.firebase.google.com/project/velure-mvp

### 🔴 P0 ISSUES (next session)

1. **Foto hero nadal placeholder** — user musi wygenerować 5 promptow OpenArt, wybrać 2, wgrać do `public/placeholders/velure/`. Po wgraniu: 2-min commit + auto-redeploy.
2. **Brand fix `/api/health`** — string `"atelier-11 | velure (dual-track)"` desync z single-brand state (Velure). Triv fix.
3. **Domain `velure.pl`** — zakup + DNS → Vercel custom domain (~10 min raz w sprint 1).

### 🟡 SPRINT 1 NICE-TO-HAVES

- Inventory cards real photos (6 stand-inów do podmiany)
- OG image (1200×630) — obecnie Vercel używa default screenshot
- Lighthouse audit (target mobile >90 — nie sprawdzone w tej sesji)
- Renaming GitHub repo `maestro-auto → velure`

### Pliki kluczowe (delta tej sesji)

- `components/hero.tsx` — pełna przebudowa layout + crossfade
- `docs/brand/hero-prompts-v2.md` — NEW, 5 OpenArt reżyserii
- `public/placeholders/velure/README.md` — NEW, TODO lista foto
- `.npmrc` — NEW, legacy-peer-deps
- `package.json` + `package-lock.json` — Next.js 16 upgrade
- `tsconfig.json` — Next.js 16 auto-reconfigure (jsx → react-jsx, .next/dev/types)
- `.gitignore` — dodane `.vercel`

---

## 2026-05-19 (sesja 3) — Velure cinematic upgrade + brand cleanup

**Trwanie:** ~6h focused work.
**Commits:**
- `d085a37` feat: dual-brand build (Velure + Atelier 11) + Next.js MVP
- `3bcd64e` feat: Velure final brand + cinematic upgrade (hero photos, Six Capitals, scroll animations)

### Co zostało zrobione

**Brand decision:**
- ✅ Klient wybrał **Velure** po side-by-side preview z Atelier 11
- Atelier 11 archiwalnie w `docs/brand/atelier-11.md` jako proces decyzyjny
- Dokumenty zaktualizowane: `decisions-pending.md`, `brand-naming.md`, `README.md`, `CLAUDE.md`, `comparison.md`

**Cleanup A11 z kodu (delete clean):**
- Usunięte: `components/theme-switcher.tsx`, `lib/theme-action.ts`
- Flatten: `lib/copy.ts` (wszystkie `Record<Theme, X>` → plain `X`)
- Uproszczone: `lib/theme.ts` (tylko `BRAND` constants, zero `Theme` type)
- Cleanup we wszystkich 13 komponentach: brak `theme` prop, single-render
- `globals.css`: usunięte wszystkie `[data-theme="atelier-11"]` selectors
- `app/page.tsx` + `app/layout.tsx`: single-brand bez theme switching

**Cinematic design upgrade:**
- ✅ Hero z full-bleed photo + ken-burns 18s loop + scroll parallax + stagger headline reveal
- ✅ 6 inventory cards z prawdziwymi photos + alt-angle crossfade hover (700ms)
- ✅ **Six Capitals** — nowa sekcja: custom SVG mapa Europa + ME + Japonia, 6 gold pins z pulsing rings, dashed connections z Warszawy, hover/click highlight + city panel expand
- ✅ Custom SVG sigil V11 (`components/ui/sigil.tsx`) — używane w hero, nav, footer, inventory badges
- ✅ Framer Motion installed (`--legacy-peer-deps` dla React 19 RC compat)
- ✅ Primitives: `Reveal`, `RevealStagger`, `RevealItem`, `GoldLine` — wszystkie z brand easing curve `cubic-bezier(0.16, 1, 0.3, 1)`
- ✅ Scroll-triggered animations na wszystkich major sekcjach

**Photo assets:**
- ✅ 11 hi-res Unsplash photos (CC0) w `public/placeholders/dev/`
- ✅ `README.md` w folderze z compliance trail (source URLs + license note)
- Mapping w `lib/copy.ts` — każda inventory card ma primary + alt-angle

**Verification:**
- ✅ TypeScript typecheck: 0 errors
- ✅ Dev server HTTP 200 na `http://localhost:3000`
- ✅ Strona renderuje, title "Velure — Aksamit. Moc. Dyskrecja."

### 🔴 KNOWN ISSUES (priorytet do naprawienia)

1. **Hero foto za słabe** ← klient feedback 2026-05-19 koniec sesji
   - Aktualne foto: `public/placeholders/dev/sports-car-night.jpg` (Unsplash CC0, ~395KB)
   - Problem: nie ma "mocnego efektu WOW" dla HNWI segment
   - Rozwiązania do rozważenia:
     - (a) Lepsze cinematic z Unsplash — szukać "Ferrari garage night dramatic" w Unsplash API
     - (b) AI-generated via OpenArt/Replicate (Flux Pro 1.1) wg moodboardu Velure — `docs/brand/moodboard-velure.md` ma 3 hero prompty gotowe (Hero 1 Master shot, Hero 2 Detail close-up, Hero 3 Ambient architectural)
     - (c) **Rekomendowane**: kupić premium stock z Adobe Stock / Shutterstock (Pagani, Bugatti, Aston Martin DBS w dramatic garage setting) — ~50-200 PLN za zdjęcie z full commercial license
     - (d) Real professional shoot w Polish luxury garage — sprint 1

2. **Brak Aston Martin native photo** (stand-in: ferrari-mood.jpg)
   - Pobranie `aston.jpg` zadziałało (419KB), ale alt-angle używa ferrari-mood.jpg jako reuse

3. **Porsche używa BMW M jako stand-in**
   - Unsplash query dla Porsche 911 GT3 RS zwrócił 404 na 2 próbach
   - Plan: znaleźć lepszy ID lub user uploads własne

4. **Sześć kart inventory wszystkie z verified=true**
   - Może niektóre powinny być różnych statusów (np. "Coming soon", "Sold last week" social proof)? — do dyskusji

5. **next.config.ts remotePatterns** ma tylko unsplash — jeśli klient chce dodać Sanity CDN albo Vercel Blob, dopisać

6. **Dev server uruchomiony** na PID 23324 — zostawiony żywy między sesjami. Kill: `powershell -Command "Stop-Process -Id 23324 -Force"`

### 🟡 SPRINT 1 — Action items po decyzji Velure

1. **Domeny** — zakup `velure.pl` (NASK/Namecheap) + `velure.cars` (Namecheap) — ~50-300 PLN/rok
2. **TM filing** — EUIPO eSearch formal w klasie 12 + 35, potem application UE (~1050 EUR)
3. **UPRP** — rejestracja PL TM (~2000-5000 PLN)
4. **Social handles** — rezerwacja `@velure` na IG/LinkedIn/X/TikTok ASAP (przed publicznym ogłoszeniem)
5. **Logo finalny** — human designer dla finalnego sigil (AI sketch w `docs/brand/moodboard-velure.md`)
6. **Photo shoot** — professional Polish luxury garage setting, 8-12 aut, 3 angles per auto
7. **Reszta decisions-pending** — items #2-#7 wciąż otwarte (spółka, partnerzy salonowi, zespół, demo car, agencja brandingowa)

### 🟢 Co działa out-of-the-box

- `npm install --legacy-peer-deps && npm run dev` → `http://localhost:3000` renderuje Velure pełną stronę
- Wszystkie sekcje (hero, manifest, kolekcja 6 cards, value-props, how-it-works, six-capitals, concierge, services, trust, contact, footer)
- Sticky phone bar mobile (<768px)
- TypeScript strict, zero errors
- Wszystkie animacje smooth (60fps na dev maszynie)
- `prefers-reduced-motion` respektowane

### Pliki kluczowe (do orientacji w kolejnej sesji)

- `app/page.tsx` — orchestration sekcji
- `app/layout.tsx` — fonts + global theme
- `app/globals.css` — Velure tokens + brand utilities
- `lib/copy.ts` — single source of truth dla całego copy
- `lib/theme.ts` — `BRAND` constants
- `lib/fonts.ts` — Cormorant + Inter
- `components/hero.tsx` — najważniejszy single file (first impression)
- `components/inventory-card.tsx` + `inventory-teaser.tsx` — kolekcja
- `components/six-capitals.tsx` — nowa sekcja interaktywna
- `components/ui/sigil.tsx` + `reveal.tsx` + `gold-line.tsx` — primitives
- `public/placeholders/dev/README.md` — compliance trail dla foto

### Następna sesja — propozycje priorytetów

1. **Hero foto upgrade** (P0) — top priority per feedback
2. (Opcjonalnie) Dodać testimonials sekcję anonimizowane HNWI
3. (Opcjonalnie) Implementacja "1 of 11" limited edition badges na cards
4. (Opcjonalnie) Sigil refinement — może lepszy design?
5. Sanity CMS setup dla dynamicznego inventory (sprint 1)
6. Form submit do CRM (Pipedrive) + telegram alerts

---

## Historia poprzednich sesji

### 2026-05-19 (sesja 2) — dual-track build + Next.js MVP
- Commit `d085a37` — side-by-side Velure + Atelier 11 z theme-switcher
- 9 dokumentów brand/copy/IA + Next.js scaffold + 13 komponentów

### 2026-05-18/19 (sesja 1) — bootstrap
- Commit `86cacf4` — initial bootstrap
- Commit `7ba8840` — finalizacja Atelier 11 (przed zmianą na Velure)
- Plan biznesowy 415 linii, research rynku, naming, decisions-pending
