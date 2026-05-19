# Velure — brand book

**Status:** propozycja w side-by-side z Atelier 11. Decyzja klienta: po preview.
**One-liner:** *Aksamit. Moc. Dyskrecja.*
**Mood w 3 słowach:** zmysłowy · ciemny · cichy

---

## 1. Soul

Velure to luksus **zmysłowy** — kontakt skóry z aluminium, ciężar drzwi, ciche kliknięcie zamka o północy. Klient Velure nie potrzebuje krzyczeć posiadaniem. Kupuje auto jak garnitur od Brioni — wie, że tylko on i krawiec znają cenę.

Nazwa łączy *velvet* (aksamit, fr. velours) z *allure* (urok). To brand dla tego, kto wie, że prawdziwa moc jest w ciszy.

**USP narracyjne:** *Tam, gdzie prędkość ma fakturę.*

---

## 2. Paleta

| Token | Hex | Użycie |
|-------|-----|--------|
| `--bg` | `#0A0809` | Tło dominujące. Czerń z mikro-domieszką winnej czerwieni. Nigdy pure black. |
| `--ink` | `#F2EBDD` | Tekst body. Kość słoniowa, nie pure white. Ciepły kontrast do bg. |
| `--muted` | `#8A7E6A` | Tekst secondary, dividery, metadata. Patynowane złoto. |
| `--gold` | `#C9A961` | Akcent primary — CTA, hairline, hover, podkreślenia. Mat, nie shiny. |
| `--gold-deep` | `#6B4423` | Cień złota, gradient base, focus ring. |
| `--accent` | `#1A0F0A` | Sekcje "drugi rytm" — karty na dark bg, modal background. |

**Reguły:**
- Złoto **nigdy** jako wypełnienie buttonów (tylko underline / hairline / border 1px). Inaczej wpada w "casino vibe".
- Białe tło **zakazane**. Velure żyje w półmroku.
- Gradient: tylko vertical `--bg → --accent` 100% subtelności. Bez radial, bez color-stop magic.

---

## 3. Typografia

| Rola | Font | Weight | Tracking | Notes |
|------|------|--------|----------|-------|
| Display | Cormorant Garamond | 300 (Light) | -0.02em | Italic dozwolone w editorialowych nagłówkach |
| Body | Inter | 400 (Regular) | 0 | Body-1: 16/24, Body-2: 14/22 |
| Numeric (ceny) | Inter | 500 + `font-feature-settings: 'tnum'` | 0.02em | Cyfry tabularne — krytyczne dla cen |
| Caption | Inter | 400 | 0.06em | UPPERCASE, 11px, mikrokopia w gallery / kart |

**Hierarchy:**
- H1 (hero): Cormorant 300, clamp(48px, 8vw, 96px), line-height 0.95
- H2 (sekcja): Cormorant 300, 48px, line-height 1.05
- H3 (subsection): Inter 500, 20px, tracking 0.04em, uppercase
- Quote (manifest): Cormorant 300 italic, 28px, line-height 1.35

**SIL OFL licenses** — commercial safe.

---

## 4. Logo direction (brief dla OpenArt)

3 warianty do generacji w OpenArt, każdy w 2 wersjach (na czarnym + na ivory):

### A) Wordmark
**Prompt:** *"Minimalist luxury wordmark logo, the word VELURE in light-weight Cormorant Garamond serif typeface, very wide letter-spacing, color: matte champagne gold #C9A961 on deep noir background #0A0809, no embellishments, no shield, no underline, framed in vast negative space, evocative of Brioni or Goyard wordmarks, fine art photography quality, 4k"*

### B) Monogram
**Prompt:** *"Luxury monogram letter V interlocked with letter L, custom-drawn serif construction with hairline thin strokes and small triangular terminals, color matte gold #C9A961, centered on noir background, framed as an embossed leather seal, evocative of Hermès saddle stamp, no other elements, 4k"*

### C) Sigil
**Prompt:** *"Abstract luxury automotive sigil, single hairline geometric form suggesting a steering wheel cross-section meets a velvet ribbon, color matte gold #C9A961 on deep noir, sealed inside a thin square frame 1px stroke, evocative of vintage Bugatti badge proportions but radically minimal, 4k"*

**Cel:** wybrać 1 direction do brief'u dla human designera w sprint 1. AI to *sketch*, nie ship.

---

## 5. Voice & tone

**10 DO:**
1. Krótkie zdania. Maksymalnie 12 słów.
2. Nazwy modeli pełne (Ferrari 296 GTB, nie "ferrari 296")
3. Liczby pisz cyframi (3, nie "trzy") — tabulary in numeric font
4. *Cena na zapytanie* zamiast `POA` (anglicyzm wpada w airport-lounge vibe)
5. Pierwsza osoba liczby mnogiej (*znaleźliśmy*, *sprawdzamy*)
6. Atrybuty rzeczownikowe (*proweniencja włoska* > *włoska proweniencja*)
7. Wartości abstrakcyjne przed konkretem (*Dyskrecja. 24/7. W twoim domu.*)
8. Pauza myślnikowa zamiast przecinka tam, gdzie chcesz oddechu
9. Mała litera w sloganach typu "aksamit. moc. dyskrecja." (manifest tone)
10. Cyfry rzymskie do roczników (*MMXXIV* w editorialach, *2024* w danych)

**10 DON'T:**
1. Bez wykrzykników. Velure nie krzyczy.
2. Bez emoji. Nigdzie.
3. Bez słów: `najlepszy`, `super`, `tanio`, `oferta`, `promocja`, `okazja`, `wow`, `mega`, `extra`
4. Bez "kliknij tutaj" — CTA to akt, nie instrukcja (*Umów konsultację*, *Zobacz kolekcję*)
5. Bez retorycznych pytań w nagłówkach (*Szukasz luksusu?* — kasujemy)
6. Bez anglicyzmów gdy istnieje PL ekwiwalent (*proweniencja*, nie *provenance*)
7. Bez slangu samochodowego (*beemka*, *amg-ek* — out)
8. Bez liczb okrągłych w cenach na frontend (cena dokładna lub *na zapytanie* — pasy "od 1 000 000 PLN" wyglądają jak supermarket)
9. Bez personifikacji aut (*ona drży na asfalcie* — nie)
10. Bez superlatywów (*najszybszy*, *najpiękniejszy* — zostaw to konkurencji)

**Przykład ON-brand:**
> *"Aston Martin DBS 770 Ultimate. Jeden z 499. Sprowadzony z Mediolanu. Garaż pod opieką byłego mechanika Maranello. Cena na zapytanie."*

**Przykład OFF-brand (do unikania):**
> *"WOW! Niesamowita okazja! Super Aston Martin w mega cenie — kliknij i sprawdź!"*

---

## 6. Mikrointerakcje

| Element | Behavior |
|---------|----------|
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) — krótko, drogo |
| Duration | 400ms hover, 600ms transitions sekcji, 1200ms image fade |
| Button hover | Tekst pozostaje. Pod tekstem pojawia się hairline 1px gold od lewej do prawej (300ms ease-out). |
| Image hover (karta) | Skala 1.02 + parallax 4px down. Brak overlay. |
| Image entrance | Slow ken-burns: scale 1 → 1.05 nad 8s, repeat. **Tylko hero.** |
| Page transition | Crossfade 400ms bez slide. Zero "swipe" energii. |
| Cursor | Custom: 8px gold dot na dark sections, follow-lag 100ms. (opcjonalne) |
| Scroll | Native smooth. Bez parallax overload. |
| Form focus | Underline grub bg → grub gold (300ms). Brak shadow, brak border-radius. |

---

## 7. Photo direction

**Light:**
- Low-key, single warm key + cool fill. Kelvin 3200K dla aut, 5600K dla wnętrz.
- Highlight roll-off miękki — bez clipped specular.
- Reflections kontrolowane (auto w studio z czarną cykloramą lub w tunelu po deszczu o świcie).

**Crop:**
- Auto pełne: 16:9 lub 21:9 (cinema). Nigdy kwadrat.
- Detal: 3:2 close-up szwów, lakieru, knobs (texture porn).
- Hero: 21:9 lub vh-full. Auto wypełnia 60-70% kadru, reszta to gold-leaf negative space.

**Retouch grammar:**
- Grain dodany w post (warm shadow grain ~3%) — anti-digital.
- Kontrast w shadows, nie w highlights.
- Color science: lekko desaturowane czerwone (zbyt agresywne ferrari-red killuje mood), boost amber + deep brown.
- Zero chroma keying, zero studio white bg.

**Forbidden:**
- Stock photo "businessman with car"
- Group shots z modelami w garniturach obok auta
- Drone shots z wysokości (oklepane)
- HDR exterior (krzykliwe)

---

## 8. UI grammar

| Element | Treatment |
|---------|-----------|
| Button primary | `bg: transparent · border: 1px var(--ink) · text: var(--ink)` → hover: underline gold sweep |
| Button secondary | `text: var(--muted)` → hover: text becomes `--ink` + gold dot 4px prefix |
| Divider | 1px `var(--muted)`, opacity 0.3, **nigdy** full-width — zawsze 1/3 do 2/3 |
| Badge "Verified" | Custom 12px sigil (V/I/I = 11 punktów) + caption `WERYFIKACJA 11/11` UPPERCASE 10px tracking 0.08em |
| Price treatment | Tabularnie, `--ink`, prefix `od` opcjonalny, sufix `PLN` małymi literami w `--muted`. Brak comma separator (spaces: `1 850 000 PLN`). |
| "Cena na zapytanie" | Italic Cormorant 18px, `--gold`. Brand-defining touch. |
| Card | `bg: transparent` → na hover: `bg: --accent` + image scale 1.02. Border zero, shadow zero. |
| Form field | `border-bottom: 1px --muted` → focus: `--gold`. Bez border-radius, bez box. Czysta linia. |
| Input placeholder | Italic `--muted` opacity 0.6 |
| Tooltip | `bg: --accent`, text `--ink`, 12px, no arrow, 100ms delay |

---

## 9. Forbidden — co zabija brand

1. **Pure white background** — Velure żyje w półmroku. Białe sekcje = inny brand.
2. **Sans-serif headings** — Cormorant w display, Inter tylko w body/UI.
3. **Round corners** powyżej 2px — wszystko kwadratowe lub max 2px subtle.
4. **Shadow / box-shadow** — luksus to płaszczyzna, nie głębia tania.
5. **Wykrzykniki** w copy.
6. **Emoji** kogokolwiek miejsca.
7. **Discount / sale language** — "promocja", "okazja", "%" są zakazane.
8. **Video background** — wymaga slow ken-burns na statycznej fotce, nie video loop.
9. **Wielokolorowe accent** — tylko jeden gold tone. Brak niebieskiego, zielonego, czerwonego.
10. **Stockowa typografia** (Montserrat, Poppins, Roboto) — out.
11. **Carousel autoplay** — klient HNWI nie ogląda slides, on klika.
12. **"Newsletter signup" w hero** — ohydne. Newsletter idzie w footer, dyskretnie.
