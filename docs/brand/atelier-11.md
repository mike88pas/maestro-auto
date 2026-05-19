# Atelier 11 — brand book

**Status:** propozycja w side-by-side z Velure. Decyzja klienta: po preview.
**One-liner:** *11 punktów. Zero kompromisów.*
**Mood w 3 słowach:** architektoniczny · precyzyjny · skrojony

---

## 1. Soul

Atelier 11 to luksus **architektoniczny** — krawiectwo na miarę, narzędzia rozłożone na warsztacie, każdy szew widoczny. Klient Atelier 11 chce wiedzieć **dlaczego** to auto, **skąd** pochodzi, **co** sprawdziliśmy. Transparencja jako forma luksusu.

Nazwa łączy *atelier* (krawiectwo na miarę, fr.) z liczbą **11** — naszą sygnaturą: 11 punktów weryfikacji każdego auta, 11 marek partnerskich, 11 dni od decyzji do garażu.

**USP narracyjne:** *Auto skrojone na miarę. Sprawdzone w 11 punktach. Dostarczone w 11 dni.*

---

## 2. Paleta

| Token | Hex | Użycie |
|-------|-----|--------|
| `--bg` | `#0B0B0F` | Tło dominujące — głęboka czerń z domieszką granatu. Architektoniczna. |
| `--ink` | `#FAFAF7` | Tekst body — pure off-white, papierowy. Dla sekcji light: bg `--ink`, text `--bg`. |
| `--muted` | `#6B6B70` | Tekst secondary, dividery, metadata. Stalowy szary. |
| `--gold` | `#B08D57` | Akcent primary — champagne metal. Bardziej miedziany niż żółty. |
| `--gold-deep` | `#8A6B3D` | Cień złota, focus, gradient base. |
| `--accent` | `#1A1A1F` | Sekcje "drugi rytm" — karty, modale na dark, hairlines secondary. |

**Reguły:**
- Atelier 11 ma **dwa tryby**: dark mode (czarne sekcje) i light mode (ivory sekcje). Przeplatają się rytmicznie — hero dark, manifest light, kolekcja dark, jak na maszynie do szycia.
- Złoto może być **podkreśleniem** ALE także **fill** w buttonie sekcji light (subtelne, champagne).
- Gridy strukturalne — 12-column grid widoczny w secondary lines, jak rysunek techniczny architekta.

---

## 3. Typografia

| Rola | Font | Weight | Tracking | Notes |
|------|------|--------|----------|-------|
| Display | Playfair Display | 400 (Regular) | -0.01em | Statyczny, geometryczny, bez italic w nagłówkach H1/H2 |
| Body | Inter | 400 (Regular) | 0 | Body-1: 16/26, Body-2: 14/22 |
| Numeric (ceny, daty, 11/11) | Inter | 600 + `tnum` | 0.02em | Cyfry tabularne, **liczba 11 jako brand element** często wyróżniana |
| Caption | Inter | 500 | 0.08em | UPPERCASE, 11px, mikrokopia, podpisy sekcji |

**Hierarchy:**
- H1 (hero): Playfair 400, clamp(56px, 9vw, 112px), line-height 1.0, kerning manual
- H2 (sekcja): Playfair 400, 56px, line-height 1.1
- H3 (subsection): Inter 600, 20px, tracking 0.06em, uppercase
- Caption marker: Inter 500, 11px, tracking 0.12em, `--muted`, uppercase, prefix `—` (myślnik długi)

**SIL OFL licenses** — commercial safe.

**Liczba 11 jako brand asset:** wszędzie gdzie pojawia się "11" — w cenach, datach, listach — renderuj w `--gold` z tabular numerals. To sygnatura.

---

## 4. Logo direction (brief dla OpenArt)

### A) Wordmark
**Prompt:** *"Architectural luxury wordmark logo, the word ATELIER in classical Playfair Display serif typeface followed by numeral 11 in champagne gold #B08D57, the rest in off-white #FAFAF7 on deep ink-black background #0B0B0F, the dot-separator between ATELIER and 11 is a fine vertical hairline 1px, like an architect's drawing register mark, framed in vast negative space, evocative of architectural firm signage like Gehry or Foster, 4k"*

### B) Monogram
**Prompt:** *"Luxury monogram letter A interlocked with numerals 11, A formed with hairline serif strokes and 11 rendered as two vertical lines exactly the height of the A's apex, color champagne gold #B08D57 on ink-black background #0B0B0F, embossed leather seal style with subtle 3D depth, evocative of a tailor's chest stamp, 4k"*

### C) Sigil
**Prompt:** *"Geometric luxury sigil composed of 11 thin vertical lines of equal weight in champagne gold #B08D57, arranged in a perfect square format on ink-black background, suggesting both bar code and architectural facade, with one of the 11 lines slightly elongated below baseline as signature, evocative of Japanese family crest mon meets modernist architectural mark, no other elements, 4k"*

**Cel:** wybrać 1 direction do brief'u dla human designera w sprint 1. AI to *sketch*, nie ship.

---

## 5. Voice & tone

**10 DO:**
1. Krótkie zdania. 8-14 słów.
2. Liczba **11** wyróżniana w copy (pogrubienie lub gold) gdy pojawia się jako brand-fact
3. Struktura: *Co. Skąd. Jak sprawdzone. Kiedy u Ciebie.*
4. Mówimy **proweniencja**, nie *origin*
5. Aktywna pierwsza osoba l. mn. (*sprawdzamy*, *przygotowujemy*)
6. Konkretne liczby (*496 KM*, *2 947 km*, *MMXXIV*) — atelier mierzy, nie szacuje
7. Lista bulletów po kropce, kapitalizacja Title Case (*Weryfikacja Mechaniczna · Weryfikacja Dokumentów · Weryfikacja Historii*)
8. CTA jako akt rzeczownikowy (*Konsultacja*, *Kolekcja*, *Kontakt*) lub krótki imperative (*Umów spotkanie*)
9. Polski język **dominujący**, angielskie nazwy modeli zachowane (*Range Rover Sentinel*, nie tłumaczyć)
10. *Cena na zapytanie* — wymienne z *POA* tylko w sekcji EN

**10 DON'T:**
1. Bez wykrzykników
2. Bez emoji
3. Bez słów: `najlepszy`, `super`, `tanio`, `oferta`, `promocja`, `okazja`, `wow`, `mega`
4. Bez metafor mistycznych ("magia jazdy", "dusza maszyny") — Atelier to *rzemiosło*, nie *czary*
5. Bez retorycznych pytań w nagłówkach
6. Bez "kliknij tutaj"
7. Bez slangu samochodowego
8. Bez okrągłych cen w prezentacjach (zaokrąglone = szacunek = nie-atelier)
9. Bez "od" przed ceną (od → asocjacja z transakcyjnym rynkiem)
10. Bez okazjonalnych superlatywów

**Przykład ON-brand:**
> *"Range Rover SV Carmel Edition MMXXIV. Sprowadzony z Solihull. Weryfikacja **11/11** zakończona 12 maja. Garaż klimatyzowany 14°C. Cena na zapytanie."*

**Przykład OFF-brand:**
> *"Niesamowity Range Rover w super stanie! Dostępny od ręki, mega okazja!"*

---

## 6. Mikrointerakcje

| Element | Behavior |
|---------|----------|
| Easing | `cubic-bezier(0.4, 0, 0.2, 1)` (standard material precision) |
| Duration | 200ms hover, 400ms sekcji, 800ms image transitions |
| Button hover | Border 1px → 2px (precision feel) + tekst gold (200ms). Brak slide, brak sweep. |
| Image hover (karta) | Brak skali. Crossfade do drugiej fotki (alternate angle) w 400ms. *Atelier pokazuje cały warsztat.* |
| Image entrance | Sharp fade-in 600ms. Bez ken-burns. Static jak architectural plate. |
| Page transition | Crossfade 200ms — szybkie, profesjonalne. |
| Scroll | Native smooth, **anchor links visible** w URL (`#weryfikacja`) — atelier nawiguje deep-link. |
| Form focus | Border full 1px → 2px gold + label się unosi (Material-style, ale bez fill). |
| Counter `11` | Gdy pojawia się jako liczba w copy, mikro-shake 1° na hover (delikatny brand wink). |
| Section reveal | Linia gold rysuje się od lewej (0 → 100% width) w 800ms gdy sekcja wchodzi w viewport. |

---

## 7. Photo direction

**Light:**
- Studyjne, neutralne: D65 5500K, soft-box top + side rim.
- Highlight kontrolowany, ale **widoczne reflections** na lakierze — pokazujemy stan.
- Equal exposure między sekcjami (Atelier 11 nigdy nie ukrywa wad w cieniach).

**Crop:**
- Auto pełne: 16:9 lub 4:3 (więcej tła niż Velure — atelier = przestrzeń).
- Detal: 1:1 kwadrat dla 11-punktowego raportu (jak siatka karty technicznej).
- Hero: 21:9 lub 16:9 nigdy vh-full. Zostawiamy whitespace nad.

**Retouch grammar:**
- Sharp, modern, brak grain.
- True-color reproduction — jak architectural pres. plate.
- Boost mid-tone clarity, zero color cast.
- White balance perfect — chrome powinien być chromem.

**Forbidden:**
- Stock photo
- Drone shots z wysokości
- Lifestyle z modelami obok auta
- Sunset / golden hour cliche

---

## 8. UI grammar

| Element | Treatment |
|---------|-----------|
| Button primary | `bg: var(--ink) · text: var(--bg)` w sekcji dark; `bg: var(--bg) · text: var(--ink)` w sekcji light. Hover: bg `--gold`. **Full fill, nie outline.** |
| Button secondary | `border: 1px var(--muted) · text: var(--ink)` → hover: border `--gold`, text `--gold` |
| Divider | 1px `--gold` opacity 0.3, **full-width** — gridowa konsekwencja. Czasem z numerem sekcji w środku (np. `— 04 —`). |
| Badge "Verified" | Pełna sigil 11-line + caption `WERYFIKACJA 11/11 · DATA WERYFIKACJI MMDDYYYY` |
| Price treatment | Tabularnie, `--ink`, bez "od", sufix `PLN` `--muted`. `1 850 000 PLN` (spacje thin). |
| "Cena na zapytanie" | Inter 500 16px, `--gold`. Funkcjonalne, nie editorialowe (vs Velure). |
| Card | `border: 1px --muted opacity 0.2` → hover: border `--gold` + image crossfade. Czysta forma kartograficzna. |
| Form field | `border: 1px --muted` (full), focus `2px --gold`, label floating |
| Section numbering | `— 01 —`, `— 02 —`, `— 03 —` przed nagłówkami sekcji (jak rozdziały atlasu) |
| Numeric `11` | Zawsze wyróżnione `--gold` lub bold gdy pojawia się jako brand-fact |

---

## 9. Forbidden — co zabija brand

1. **Mistycyzm** — *magia*, *dusza maszyny*, *boska prędkość* — atelier to rzemiosło, kasujemy.
2. **Round corners** powyżej 4px (więcej tolerancji niż Velure, ale wciąż minimal).
3. **Box-shadow > 2px blur** — atelier płaski jak rysunek techniczny.
4. **Wykrzykniki, emoji, "od" przed ceną**
5. **Stockowa typografia** poza Playfair + Inter
6. **Discount language** — *promocja*, *okazja*, *%*
7. **Video background**
8. **Wielokolorowe accent** — tylko champagne gold
9. **Carousel autoplay**
10. **Newsletter signup w hero**
11. **Symbole gwiazdek dla recenzji** (★★★★★) — out. Atelier 11 to *referencje imienne*, nie *score*.
12. **Skip ken-burns / parallax** — sharpness > drama.

---

## Brand difference vs Velure (skrót)

- **Velure mówi:** *"Wiem, czego pragniesz."* (zmysłowy, intymny, nocny)
- **Atelier 11 mówi:** *"Pokażę ci, jak to zrobiliśmy."* (transparentny, precyzyjny, dzienny)

Klient wybiera nie nazwę — wybiera **temperament brandu**.
