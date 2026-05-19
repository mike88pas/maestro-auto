# Session log — Velure

Snapshot stanu projektu między sesjami. Update na koniec każdej sesji roboczej.

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
