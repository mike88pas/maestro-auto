# Moodboard — Velure

**Mood w 3 słowach:** zmysłowy · ciemny · cichy
**Reference brands:** Loewe · Aesop · Goyard · Brioni · Berluti
**Reference automotive:** Pagani official photography · Singer Vehicle Design · JBR Capital private materials

---

## Visual references (URL do oglądania)

| Source | URL | Co podpatrzeć |
|--------|-----|---------------|
| Pagani Huayra photography | https://www.pagani.com/huayra | Low-key, single warm key, leather close-ups |
| Singer Vehicle Design | https://singervehicledesign.com | Studio-craft warmth, texture porn, restraint |
| Aesop store interiors | https://www.aesop.com/u/stores | Wood, brass, soft shadows, no shine |
| Loewe craftsmanship | https://www.loewe.com/eur/en/stories-projects | Leather grain, hands at work, hush |
| Berluti boutique | https://www.berluti.com | Patina, warm golds on dark wood |
| JamesEdition (referencja klienta) | https://jamesedition.com/cars | Full-bleed photo + minimal type |
| Romans International (referencja klienta) | https://romansinternational.com | Whitespace, sharp inventory cards |

---

## OpenArt prompts — generacja w 4 batchach

### Batch 1: Logo direction (3 warianty, 4 wariantów każdy = 12 obrazów)

**Setup:** OpenArt → Flux Pro 1.1 lub SDXL Lightning, aspect 1:1, batch of 4.

#### Logo A — Wordmark
```
Minimalist luxury wordmark logo for VELURE, the word "VELURE" rendered
in light-weight Cormorant Garamond serif typeface, very wide letter-spacing
of 0.3em, color matte champagne gold #C9A961 on deep noir background
#0A0809, no embellishments, no shield, no underline, no flourishes,
framed in vast negative space, evocative of Brioni or Goyard wordmarks,
fine art photography quality, museum poster aesthetic, ultra-clean, 4k
```

#### Logo B — Monogram
```
Luxury monogram letter V interlocked with letter L, custom-drawn serif
construction with hairline thin strokes and small triangular terminals,
color matte champagne gold #C9A961, centered on deep noir background
#0A0809, framed as an embossed leather seal with subtle 3D depth and
gold leaf finish, evocative of Hermès saddle stamp or Goyard chevron seal,
no other elements, hyper-realistic 4k product photography
```

#### Logo C — Sigil
```
Abstract luxury automotive sigil, single hairline geometric form suggesting
a steering wheel cross-section meeting a velvet ribbon, color matte champagne
gold #C9A961 on deep noir #0A0809 background, sealed inside a thin square
frame 1px stroke, evocative of vintage Bugatti badge proportions but
radically minimal, no text, no embellishment, museum-quality presentation,
4k product photography
```

### Batch 2: Hero photography (3 ujęcia, aspect 21:9)

#### Hero 1 — Master shot
```
Cinematic photograph of a single Pagani Utopia or Aston Martin DBS coupe
parked inside a dimly lit private garage, single warm key light from the
upper left, soft cool fill from the right, deep noir background, polished
concrete floor with subtle gold reflections, no people, no logos visible,
shot on 85mm lens at f/2.8, slight grain in shadows, warm color grade with
amber-brown shadows and ivory highlights, ratio 21:9, ultra-luxury automotive
editorial photography, evocative of Pagani official photography, 4k
```

#### Hero 2 — Detail (close-up)
```
Extreme close-up macro photograph of cognac leather steering wheel stitching
with brushed aluminum accents and a single matte champagne gold detail
catching warm light, deep noir surrounding negative space, single
key light from the upper left at golden hour quality, shallow depth of field,
85mm macro lens, slight warm grain in shadows, ratio 21:9, tactile
luxury photography evoking Berluti or Brioni craftsmanship, 4k
```

#### Hero 3 — Ambient (architectural)
```
Wide editorial shot of an empty private collector's showroom at night,
polished dark concrete floor, single hairline gold floor channel running
diagonal, one warm pendant light pool in the distance creating soft glow
on dark walnut panels, no cars visible, mood of silent wealth and
anticipation, ratio 21:9, evocative of Bentley HQ interior photography
or Bugatti Atelier Molsheim, ultra-clean 4k
```

### Batch 3: Section visuals (manifest, services backgrounds)

#### Manifest bg
```
Subtle abstract texture, dark cognac velvet fabric extreme close-up
catching minimal directional light from upper left, micro-grain visible,
warm shadows, ratio 16:9, used as a background texture layer at 40% opacity,
no recognizable objects, evocative of fashion editorial fabric stills, 4k
```

#### Services hub bg
```
Workshop interior at night, brushed steel tool wall in soft focus, single
warm pendant light from above, polished concrete floor reflecting gold
light pool, no people, no specific tools visible, mood of master craftsman's
workshop after hours, ratio 16:9, evocative of Singer Vehicle Design
workshop photography, 4k
```

### Batch 4: Inventory placeholders (jeśli klient nie wysyła własnych)

**3 placeholdery kart kolekcji:**

#### Card 1 — Ferrari 296 GTB
```
Ferrari 296 GTB Assetto Fiorano in Rosso Corsa, photographed three-quarter
front view inside dim private garage, single warm key light from upper left
catching the front fender curvature, deep noir background, polished black
floor, no people, no logos visible, no plates, shallow depth of field
showing texture of carbon fiber details, ratio 16:9, ultra-luxury editorial
automotive photography style of Pagani official, warm color grade, 4k
```

#### Card 2 — Range Rover SV
```
Range Rover SV Carmel Edition in Carmel Sand exterior, photographed
three-quarter side view in dim private indoor showroom, single warm overhead
spotlight catching the polished side panel, deep noir background, polished
dark wood floor with subtle gold reflections, no people, no logos visible,
no plates, ratio 16:9, ultra-luxury editorial automotive photography style,
warm sophisticated color grade, 4k
```

#### Card 3 — Porsche 911 GT3 RS
```
Porsche 911 GT3 RS Weissach Package in Shark Blue, photographed rear
three-quarter view inside dim concrete garage, single warm key light from
upper right catching the rear wing carbon fiber, deep noir background,
polished concrete floor, no people, no logos visible, no plates, ratio 16:9,
ultra-luxury editorial automotive photography style, warm color grade, 4k
```

---

## Forbidden in generation

- ❌ Lifestyle modeli (osób)
- ❌ Sunset / golden hour cliche
- ❌ Drone shots z lotu ptaka
- ❌ Pure white / pure black backgrounds (zawsze warm undertones)
- ❌ Wielokolorowy accent (tylko jedno warm gold)
- ❌ Polski rejestr w widoku
- ❌ Watermarki, logo producenta widoczne na karoserii lub tle

---

## Workflow

1. Generuj 4 wariantów dla każdego promptu.
2. Wybierz 1 najlepszy per prompt.
3. Wybrany wariant otwierasz w **OpenArt Outpaint** dla aspect ratio fix.
4. Eksport jako WebP 90% quality, max 2400px szerokości.
5. Wrzuć do `public/placeholders/velure/` jako `hero-1.webp`, `card-ferrari.webp` etc.
6. Update `lib/copy.ts` z prawdziwymi paths (zamiast placeholder).

**Plan B:** jeśli OpenArt nie da quality → użyj Midjourney v6.1 (lepsze automotive photography) lub Flux Pro 1.1 Ultra przez Replicate.

---

## Asset checklist (MVP)

- [ ] 3 logo direction variants → wybór 1 do human designer w sprint 1
- [ ] 1 hero master shot (jedno auto, 21:9)
- [ ] 1 hero detail close-up (21:9)
- [ ] 3 inventory placeholder cards (16:9)
- [ ] 1 manifest background texture (16:9, do 40% opacity)
- [ ] 1 services hub background (16:9)
- [ ] 1 favicon variant (16×16, 32×32, 192×192)
- [ ] 1 OG image (1200×630) dla social sharing

Total: ~12 assetów do generacji w jednej sesji OpenArt (~30-45 min pracy).
