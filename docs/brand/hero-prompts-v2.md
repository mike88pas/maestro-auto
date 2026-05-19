# Hero prompts v2 — Velure (OpenArt / Midjourney v6.1 / Flux Pro 1.1)

**Cel:** 5 realnie roznych rezyserii hero — wybor 1 primary + 1 alt do crossfade'u w `components/hero.tsx`. Reszta moze trafic do innych sekcji (manifest bg, services bg, dziennik thumbnail).

**Workflow (per prompt):**

1. Generuj **4 wariantow** w Flux Pro 1.1 (najlepsze automotive realism) lub Midjourney v6.1.
2. Aspect: **21:9** (hero full-bleed). Alt 16:9 dla kart sekcyjnych.
3. Wybierz 1 najlepszy → **OpenArt Outpaint** na 21:9 jesli zle aspect (Flux czesto 16:9).
4. Export: **WebP 90% quality**, max szerokosc **2560px**.
5. Naming: `hero-{rezyseria-slug}.webp` w `public/placeholders/velure/`.
6. Powiadom mnie ktore 2 wybrales — podmieniam paths w `lib/copy.ts` / `components/hero.tsx`.

**Global negatives (dolaczaj do KAZDEGO promptu):**

```
--no people, models, faces, hands, license plates, manufacturer logos
visible on body, watermarks, text overlays, sunset, golden hour cliche,
drone shot, aerial view, pure white background, pure black background,
neon colors, chrome highlights, motion blur on the car body, racing track,
trees, sky visible, modern showroom fluorescent lighting, HDR oversaturation
```

**Global style suffix (dolacz do kazdego):**

```
shot on Phase One IQ4 150MP, 85mm prime f/2.0, ISO 200, warm color grade
with cognac shadows and ivory highlights, fine film grain in shadows,
deep noir background #0A0809, matte champagne gold accents #C9A961,
editorial luxury photography, museum-quality print, 8k resolution
```

---

## 1. "Maranello Vault" — Pagani 3/4 front w prywatnym garazu

**Use case:** primary hero candidate. Klasyczne ujecie "the one car" — bezpieczne, czytelne dla HNWI, mocna sygnatura Pagani-style.

**Aspect:** 21:9 (hero) / 16:9 (alt)

**Prompt:**

```
A single Pagani Utopia coupe in matte slate grey, photographed three-quarter
front view inside a private collector's underground vault at night. The car
sits on a polished dark concrete floor with a single hairline brass channel
running diagonally beneath it. Walls clad in vertical dark walnut panels with
hand-rubbed oil finish, no decoration. A single warm tungsten key light from
upper left at 3000K sculpts the front fender curvature and headlight cluster,
catches the carbon fiber weave with subtle specular highlight. Deep shadow
fills the right side of the frame, only suggesting the rear quarter. The
ceiling is unseen blackness. The composition leaves 60% negative space to
the right of the car for headline overlay. Mood: silent wealth, post-midnight,
no audience. Inspired by Pagani Huayra official photography 2024 catalogue,
Singer Vehicle Design studio stills.
```

**Alt variation prompts** (run if 4-batch nie dal hit-u):

- Swap car to **Aston Martin Valhalla** matte slate / **Bentley Bacalar** rich green
- Swap angle to **direct front symmetric** (mniej dynamiczne ale bardziej "portrait")
- Swap surface to **polished dark green marble floor** (Connolly leather store reference)

---

## 2. "The Reveal" — auto pod ciemna velvet drape

**Use case:** brand-defining hero. Doslowny storytelling: VELURE = velvet + allure. Dramatic, ale dystyngowane. Idealny dla strony "O nas" / first-time visitor.

**Aspect:** 21:9 — wymaga outpaint po Flux generation (czesto 4:3).

**Prompt:**

```
An ultra-luxury sports car standing in a dark private gallery, half-revealed
beneath a heavy cognac velvet drape that has just begun to slide off the
rear quarter. The drape catches one warm spotlight from above, showing the
deep pile texture and a soft fold cascading toward the polished concrete
floor. Beneath the velvet, the front fender and headlight of an Aston Martin
DBS or Bentley Continental GT are exposed — dark midnight blue paint
catching a single specular highlight. The gesture is mid-motion: drape
suspended, not yet pooled. Hairline matte champagne gold reflection on the
concrete from a hidden floor channel. Background: deep matte black void.
Composition: car center-left, drape arc fills upper third, negative space
right for type. Mood: ritual unveiling, hushed reverence, art gallery
opening. Inspired by Hermès leather goods reveal photography and Tom Ford
fashion editorials by Mert & Marcus.
```

**Alt variation prompts:**

- Swap drape color to **deep oxblood / wine red velvet** (richer, more dangerous)
- Swap to **full reveal mid-air**: drape suspended above car like cloud, no contact
- Swap to **drape pooled on floor**: post-reveal moment, car fully visible, drape decorative foreground

---

## 3. "Maker's Bench" — detail close-up rece + badge

**Use case:** alt hero candidate (crossfade z #1 lub #2). Tekstura, rzemioslo, brak literalnego auta = bardziej brand-loaded niz typowe car photography.

**Aspect:** 21:9 (very wide crop) — outpaint a la cinemascope.

**Prompt:**

```
Extreme macro close-up of a single matte champagne gold automotive badge
being polished by hands in white cotton conservator's gloves. The badge sits
recessed in a slab of carbon fiber bodywork with deep cognac leather visible
in soft bokeh background. One warm raking light from the upper left at
3200K creates micro-specular highlights on the brass and reveals the
hand-stitched seam of the leather behind. The cotton glove fabric weave
is sharp in the foreground, the brass perfectly tactile, the leather grain
recognizable but soft. Composition: badge centered slightly right, glove
fingertips entering from lower left, leather fills upper third in bokeh.
Mood: museum conservator at work, post-hours, single overhead lamp. Inspired
by Singer Vehicle Design workshop stills, Berluti shoe atelier hands-at-work
photography, and Loewe leather goods making-of films.
```

**Alt variation prompts:**

- Swap to **steering wheel stitching** macro (Brioni-style suit thread reference)
- Swap to **engine valve cover with brass plaque** (numbered limited edition)
- Swap to **brake caliper detail** — matte gold caliper, carbon ceramic disc, cognac suede in background

---

## 4. "Night Driver" — Bentley pod private members club

**Use case:** narrative hero, mniej "studio" wiecej "moment". Dla strony "Concierge" / Six Capitals — sugeruje doswiadczenie, nie produkt.

**Aspect:** 21:9 (full cinematic).

**Prompt:**

```
A midnight-blue Bentley Continental GT Speed parked at the curb in front of
a private members' club at 2am, headlights on but engine silent. The street
is wet from recent rain, gold reflections of a single ornate brass street
lamp dance on the asphalt. The club facade in soft background: dark
limestone, tall narrow door framed by two brass sconces with warm 2700K
glow, no signage. The car is photographed from a low angle front-three-quarter,
emphasizing the prow and the round driving lamps. Steam rises softly from
a manhole cover in the deep background. Black umbrella half-folded leaning
against the doorway suggests just-arrived guest, no person visible. Mood:
post-theatre arrival, hushed, discreet, slightly Le Carré. Composition:
car center-left filling lower two-thirds, club door upper right with negative
space for type. Inspired by Slim Aarons Mayfair photography and the opening
shot of "Mr & Mrs Smith" 2024 series.
```

**Alt variation prompts:**

- Swap setting to **private hangar tarmac at night**, Bentley near Gulfstream nose
- Swap to **historic Polish manor courtyard** (Zamek Książ entry, polish brand local touch)
- Swap car to **Rolls-Royce Spectre** for the EV-luxury angle

---

## 5. "Architectural" — empty showroom z foreground sylwetka

**Use case:** mocno editorial, najbardziej minimalist z piatki. Dla klientow ktorzy ceniaza powagę i ksztalt nad blyszczem.

**Aspect:** 21:9.

**Prompt:**

```
An empty private collector's showroom at night, deep perspective view down a
long hall. In the immediate foreground left, sharp focus, the rear silhouette
of a Ferrari 296 GTB — only the upper rear wing and tail lights catching a
single overhead warm spotlight, the rest of the car melting into shadow. In
the soft-focused background, two further cars suggested as dark masses, one
under a brass-rod-suspended dust cover. The floor is polished dark concrete
with one continuous hairline matte champagne gold channel running the length
of the hall toward a vanishing point pendant lamp pool 30 meters distant.
Walls in dark walnut paneling, ceiling unseen. No people, no logos, no plates.
Composition uses dramatic single-point perspective with negative space upper
60% for type overlay. Mood: cathedral of mechanical objects, post-closing,
silent. Inspired by Bentley HQ interior photography by Adam Letch, Bugatti
Atelier Molsheim official tour stills, and Tadao Ando concrete architecture.
```

**Alt variation prompts:**

- Swap perspective to **direct symmetric view down the hall** (Wes Anderson formality)
- Swap to **top-down 90-degree overhead** of a single car on the channel
- Swap foreground to **steering wheel rim** with showroom in bokeh deep background

---

## Selection guidance

**Do hero (crossfade):**

- **Primary:** 1, 2, lub 4 — kazda ma "the one car" hero shot
- **Alt:** 3 lub 5 — kontrast (detail vs vista) daje dynamike przy 10s crossfade
- **NIE laczyc:** 1+2 (oba "car w mroku") — za podobne
- **Pair sweet spot:** 2 ("Reveal") + 3 ("Bench") = storytelling unveiling + craftsmanship

**Do innych sekcji:**

- Manifest bg: 5 ("Architectural") w 16:9, blur + 40% opacity overlay
- Services hub: 3 ("Bench") variation z brake caliper
- Concierge intro: 4 ("Night Driver") variation z hangar tarmac
- Dziennik thumbnails: variations 2, 3, 4 (story-driven)

---

## Forbidden (per brand book Velure)

- ❌ Modele, ludzkie twarze, sylwetki rozpoznawalne
- ❌ Sunset / golden hour outdoor (cliché)
- ❌ Drone shots, aerial
- ❌ Pure white background (anti-noir)
- ❌ Chrome / blinding metal (Velure = matte, hairline, brushed)
- ❌ Wielokolorowe akcenty (tylko jedno warm gold + cognac + ivory)
- ❌ Polskie tablice rejestracyjne
- ❌ Marka producenta widoczna na karoserii lub w tle (nie chcemy dealer endorsement)
- ❌ Racing tracks, motion blur on body (Velure = stillness, weight)
- ❌ Modern dealership lighting (fluorescents, ring lights) — only tungsten warmth

---

## Generation time estimate

- 5 promptow × 4 wariantow = 20 obrazow
- Flux Pro 1.1: ~45s/obraz = **~15 minut generacji**
- + Outpaint dla 5 wybranych = **~10 minut**
- + WebP export + upload = **~5 minut**
- **Total: ~30 minut pracy w OpenArt**

Po uploadu napisz mi: *"hero primary = X, alt = Y"* — podmieniam paths w 2 minuty.
