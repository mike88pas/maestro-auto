# Assets brief — kolejność generacji w OpenArt

**Cel:** zminimalizować czas pracy w OpenArt. Generujesz assetów dla **OBU brandów** w jednej sesji.
**Czas estymowany:** 45-60 min jednorazowo (12 assetów per brand × 2 brandy = 24 assetów + 4 favicony/OG = 28).

---

## Kolejność (priorytet wyświetlania na stronie)

### Faza 1 — Hero (KRYTYCZNE, blokujące MVP preview)

| # | Asset | Prompt | Output path |
|---|-------|--------|-------------|
| 1 | Velure hero 1 (master shot) | `moodboard-velure.md` § Batch 2 → Hero 1 | `public/placeholders/velure/hero-master.webp` |
| 2 | Atelier 11 hero 1 (master shot) | `moodboard-atelier-11.md` § Batch 2 → Hero 1 | `public/placeholders/atelier-11/hero-master.webp` |

**Stop condition:** masz po 1 hero shot per brand. Można już renderować homepage z prawdziwym tłem.

### Faza 2 — Inventory cards (KRYTYCZNE dla teaser sekcji)

| # | Asset | Brand | Prompt source | Output |
|---|-------|-------|---------------|--------|
| 3 | Ferrari 296 GTB (V style) | Velure | mb-velure § Batch 4 Card 1 | `velure/card-ferrari.webp` |
| 4 | Range Rover SV (V style) | Velure | mb-velure § Batch 4 Card 2 | `velure/card-range-rover.webp` |
| 5 | Porsche 911 GT3 RS (V style) | Velure | mb-velure § Batch 4 Card 3 | `velure/card-porsche.webp` |
| 6 | Ferrari 296 GTB (A11 style) | Atelier 11 | mb-a11 § Batch 4 Card 1 | `atelier-11/card-ferrari.webp` |
| 7 | Range Rover SV (A11 style) | Atelier 11 | mb-a11 § Batch 4 Card 2 | `atelier-11/card-range-rover.webp` |
| 8 | Porsche 911 GT3 RS (A11 style) | Atelier 11 | mb-a11 § Batch 4 Card 3 | `atelier-11/card-porsche.webp` |

**Stop condition:** masz 3 cards per brand. Inventory teaser działa wizualnie.

### Faza 3 — Section backgrounds (UZUPEŁNIAJĄCE)

| # | Asset | Brand | Output |
|---|-------|-------|--------|
| 9 | Manifest bg | Velure | `velure/bg-manifest.webp` |
| 10 | Manifest bg | Atelier 11 | `atelier-11/bg-manifest.webp` |
| 11 | Services hub bg | Velure | `velure/bg-services.webp` |
| 12 | Services hub bg | Atelier 11 | `atelier-11/bg-services.webp` |
| 13 | Hero 2 detail (close-up) | Velure | `velure/hero-detail.webp` |
| 14 | Hero 2 workshop hands | Atelier 11 | `atelier-11/hero-workshop.webp` |

### Faza 4 — Logos (DO BRIEF'U DLA HUMAN DESIGNERA)

**WAŻNE:** AI-generated logos = sketch, NIE production-ready. Generujesz 3 directions per brand, wybierasz 1 do brief'u dla designera w sprint 1.

| # | Asset | Brand | Output |
|---|-------|-------|--------|
| 15 | Logo A (wordmark) | Velure | `velure/logo-a-wordmark.webp` |
| 16 | Logo B (monogram) | Velure | `velure/logo-b-monogram.webp` |
| 17 | Logo C (sigil) | Velure | `velure/logo-c-sigil.webp` |
| 18 | Logo A (wordmark) | Atelier 11 | `atelier-11/logo-a-wordmark.webp` |
| 19 | Logo B (monogram) | Atelier 11 | `atelier-11/logo-b-monogram.webp` |
| 20 | Logo C (sigil 11-line) | Atelier 11 | `atelier-11/logo-c-sigil.webp` |

### Faza 5 — Favicon + OG (PRZED DEPLOY)

| # | Asset | Wymagania |
|---|-------|-----------|
| 21 | Favicon Velure | 16×16, 32×32, 192×192 (z wybranego wordmark/monogram) |
| 22 | Favicon Atelier 11 | jw. |
| 23 | OG image Velure | 1200×630, headline *Aksamit. Moc. Dyskrecja.* na hero bg |
| 24 | OG image Atelier 11 | 1200×630, headline *11 punktów. Zero kompromisów.* na hero bg |

---

## Workflow per asset

1. **Kopiuj prompt** z odpowiedniego pliku moodboard.
2. **W OpenArt:** wybierz Flux Pro 1.1 (lub SDXL Lightning dla draftów).
3. **Batch:** 4 wariantów per prompt.
4. **Wybierz 1** najlepszy. **Pozostałe 3** — zachowaj jako "alt" (mogą się przydać dla A/B w sprint 2).
5. **Post-process w OpenArt:**
   - Outpaint do docelowego aspect ratio (16:9 lub 21:9)
   - Upscale do 2400px width (jeśli wymaga)
   - Export WebP 90% quality
6. **Zapisz** w odpowiednim folderze `public/placeholders/[brand]/`.
7. **Update `lib/copy.ts`** — zamień placeholder paths na realne.

---

## Plan B per asset type

| Typ | Plan A (OpenArt Flux) | Plan B | Plan C |
|-----|----------------------|--------|--------|
| Logos | Flux Pro 1.1 | Midjourney v6.1 | Human designer od razu (sprint 1) |
| Hero cinematic (Velure) | Flux Pro 1.1 | Midjourney v6.1 (lepsze cinematic) | Stock z Unsplash (luxury car indoor) |
| Hero architectural (A11) | Flux Pro 1.1 | Midjourney v6.1 | Real photo by photographer w sprint 2 |
| Inventory cards | Flux Pro 1.1 | Midjourney v6.1 | Skradnij z JamesEdition (TYLKO do dev preview) |
| Section bg | Flux Pro 1.1 | Topaz Gigapixel resampled stock | CSS-only gradient texture |
| Favicon | Designer w Figma | AI generated logo cropped | Plain wordmark "V" lub "A11" |

**⚠️ COPYRIGHT NOTE:** zdjęcia ze stronek referencyjnych (JamesEdition, Romans International, Pagani official) mogą być używane **TYLKO w dev preview**. Produkcja musi mieć własne foto lub licensowane stocky. Notuj w `.gitignore`: `public/placeholders/*.dev.*`.

---

## Estimated time per phase

| Faza | Generacja | Post-process | Total |
|------|-----------|-------------|-------|
| 1 Hero (2 ass) | 10 min | 5 min | **15 min** |
| 2 Cards (6 ass) | 20 min | 10 min | **30 min** |
| 3 BG (6 ass) | 15 min | 10 min | **25 min** |
| 4 Logos (6 ass) | 20 min | 15 min | **35 min** (i tak będzie redone przez designera) |
| 5 Favicon + OG (4 ass) | 10 min | 15 min | **25 min** |
| **TOTAL** | | | **~130 min (2h 10 min)** |

**Realistyczny czas dla MVP preview:** faza 1+2 = **~45 min**. Reszta po decyzji brandowej.

---

## Stop & ship rule

Jeśli faza 1+2 zajmuje >2h albo quality nie satysfakcjonuje → użyj **placeholder z JamesEdition** (z notką w kodzie `// placeholder until real assets`) i pchasz preview do klienta. Decyzja brandowa jest ważniejsza niż perfect assets. Asetow można zrobić w 30 min PO decyzji.
