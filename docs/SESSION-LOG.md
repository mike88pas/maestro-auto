# Session log — Velure

Snapshot stanu projektu między sesjami. Update na koniec każdej sesji roboczej.

---

## 2026-05-20 (sesja 5) — Hero photos live + 4 critical bugs uncovered & fixed

**Trwanie:** ~3h iterations.
**Commits:** 9 sekwencyjnych fixów: `2466e47` → `c3eaf95` → `1ab2e15` → `055824b` → `9484846` → `c79e493` → `ab91163` → `6ffbbab` → `182596c` → `ed196c6` (final)

### Co zostało zrobione

**OpenArt foto wgrane i deployed:**
- User wygenerował 5 hero foto wg `docs/brand/hero-prompts-v2.md` (Maranello Vault, The Reveal, Maker's Bench, Night Driver, Architectural)
- 7 plików wgranych (2 duplikaty `(1)` skasowane), 5 unikalnych zachowanych w `public/placeholders/velure/`:
  - `hero-vault.webp` — Pagani Huayra w dark walnut vault (PRIMARY hero)
  - `hero-alt.webp` — gold badge macro + glove (ALT crossfade)
  - `hero-primary.webp` — The Reveal (velvet drape Aston) — kept for future use
  - `hero-night-driver.webp` — Bentley + private members club
  - `hero-architectural.webp` — empty showroom perspective
- Pierwszy wybór primary = "The Reveal" (per brand book recommendation), po deploy okazało się że composition subject-left koliduje z layout headline-left → swap na Vault (centered subject survives object-cover)

**4 KRYTYCZNE BUGI uncovered (każdy by-design "premium failure mode"):**

1. **Stacking context escape** — `-z-10` na bg image wrapper + `<section position:relative>` BEZ explicit z-index = brak stacking context = image wycieka POZA section i ląduje za body's `#0A0809` noir bg. Hero był niewidoczny od samego początku, nikt nie zauważył przez 4 sesje bo myśleli że to placeholder. Fix: `z-0` na bg, `z-10` na copy stacks. Memory: `stacking-context-trap.md`.

2. **Headline overflow** — `clamp(48,8.5vw,128)` × 3 lines × 0.95 leading + bottom-anchored `items-end` na typowym laptop viewport (800px) — stack overflowed UP nad nav. "Moc." clipowane górą. Fix: clamp redukcja do `(40,6.5vw,96)` + tighter spacing.

3. **Top bar absolute + items-end overlap** — top bar był `absolute top-0 pt-32` a copy `items-end h-full`. Na krótkich viewportach (user'a 990×550 z dev tools open) STACK overflowed UPWARD into top bar = "Six Capitals" caption overlapped "Aksamit". Mathematically guaranteed overlap. Fix: section to `flex flex-col`, top bar w flow `relative`, copy `flex-1` — fizycznie niemożliwe żeby overlap.

4. **Framer-motion SSR opacity:0 trap** — `motion.span initial={{opacity:0}}` renderowało inline `style="opacity:0"` w SSR HTML. Na user'a iPhone 13 Chrome iOS framer-motion (v12 + React 19 + Next 16) nie odpalało animacji → tekst forever invisible. Curl HTML confirmation: `<span style="opacity:0;transform:translateY(24px)">Aksamit</span>`. Fix: stripped framer-motion z wszystkich text contentu (headline/sub/CTAs/markers). Memory: `framer-motion-ssr-trap.md`.

**Bonus issues:**
- 5. `min-h-[720px]` wymuszał hero wyższy niż iPhone SE 667 viewport → copy items-end ląduje below fold → mobile no text. Fix: `min-h-[520px]`.
- 6. `h-screen` (100vh) na iOS Safari skacze przy URL bar collapse → layout shift. Fix: `h-screen h-[100svh]` (svh override, vh fallback).
- 7. `pb-12 md:pb-20` było BACKWARDS — mobile 48px LESS niż sticky-phone 56px = CTAs pod sticky-phone. Fix: `pb-20 md:pb-12` (mobile więcej).

### Memory zapisane (3 nowe lessons learned)

- `velure-project-state.md` — updated hero status to "FINAL, OpenArt live"
- `hero-photo-composition-trap.md` — OpenArt 4:3 vs 21:9 composition trap
- `stacking-context-trap.md` — `-z-10` escape trap
- `framer-motion-ssr-trap.md` — SSR opacity:0 invisibility trap

### Końcowa architektura hero (post-7-fixes)

```
<section relative h-screen h-[100svh] min-h-[520px] flex flex-col overflow-hidden>
  <div absolute inset-0 z-0>           // bg (plain div, no motion on wrapper)
    <motion.div animate=ken-burns>     // Layer 1 — primary photo, scale anim
      <Image src=hero-vault.webp />
    </motion.div>
    <motion.div animate=crossfade>     // Layer 2 — alt photo, opacity cycle
      <Image src=hero-alt.webp />
    </motion.div>
    <div vignette absolute inset-0 />
  </div>
  <div relative z-10 pt-0 md:pt-24>    // top bar (in flow, hidden on mobile)
    <div container-x flex justify-between>
      <div hidden md:flex>Six Capitals</div>
      <div hidden md:block>MMXXVI</div>
    </div>
  </div>
  <div relative z-10 flex-1 flex items-end pb-20 md:pb-12>  // copy stack
    <div container-x w-full>
      <h1 style="font-size: clamp(34px, min(6.5vw, 8vh), 96px)">
        <span>Aksamit.</span><span>Moc.</span><span>Dyskrecja.</span>
      </h1>
      <p mt-3 md:mt-6 text-sm md:text-lg>{sub}</p>
      <div mt-5 md:mt-6 flex>{CTAs}</div>
      <div mt-6 md:mt-10 hidden md:flex>{bottom marker}</div>
    </div>
  </div>
  <motion.div scroll-indicator hidden md:flex />
</section>
```

### Co istnieje (po sesji 5)

- Hero produkcja FINAL: photo + tekst widoczne na desktop + mobile + iPhone 13 Safari/Chrome iOS
- 5 OpenArt foto HNWI-grade w `public/placeholders/velure/`
- Memory base: 6 plików (3 nowe lessons learned dodane)
- `docs/brand/hero-prompts-v2.md` — full prompt library do reuse na innych sekcjach

### Co NIE istnieje (do następnej sesji)

- 🟡 `lib/copy.ts:101-162` kolekcja cards nadal Unsplash CC0 (`placeholders/dev/*.jpg`) → user musi wygenerować HNWI-grade card photos (6 cars × 2 angles = 12 foto)
- 🟡 `/api/health` string `"atelier-11 | velure (dual-track)"` → trivial single-line fix do "velure"
- 🟢 Custom domain `velure.pl` + `velure.cars` zakup (sprint 1)
- 🟢 TM filing EUIPO/UPRP (sprint 1)
- 🟢 Social handles `@velure` na IG/LinkedIn/X/TikTok rezerwacja

### 🟢 LIVE URL

https://velure-bice.vercel.app — final after `ed196c6`

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
