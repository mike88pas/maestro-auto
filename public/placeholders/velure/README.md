# Velure — branded photo assets

Tu lądują finalne foto wygenerowane wg `docs/brand/hero-prompts-v2.md` (OpenArt / Midjourney v6.1 / Flux Pro 1.1).

**Format:** WebP 90% quality, max szerokość 2560px.

## Wymagane (MVP hero crossfade)

- [ ] `hero-primary.webp` — 21:9, jedna z 5 reżyserii (rekomendacja: **#1 Maranello Vault** lub **#2 The Reveal**)
- [ ] `hero-alt.webp` — 21:9, kontrast do primary (rekomendacja: **#3 Maker's Bench** lub **#5 Architectural**)

Po uploadzie powiadom Claude'a → podmiana `HERO_PRIMARY` / `HERO_ALT` w `components/hero.tsx` (2 linie, 30 sekund roboty).

## Nice-to-have (sprint 1, kolejne sesje)

- [ ] `card-ferrari-296.webp` — 16:9, real Ferrari (zastępuje `placeholders/dev/ferrari-mood.jpg`)
- [ ] `card-range-rover-sv.webp` — 16:9
- [ ] `card-porsche-gt3rs.webp` — 16:9 (obecnie używa `bmw-m.jpg` jako stand-in)
- [ ] `card-aston-dbs.webp` — 16:9 (obecnie używa `aston.jpg` Unsplash)
- [ ] `card-lamborghini-revuelto.webp` — 16:9
- [ ] `card-bentley-continental.webp` — 16:9
- [ ] `manifest-bg.webp` — 16:9, cognac velvet macro (40% opacity overlay)
- [ ] `services-bg.webp` — 16:9, workshop interior
- [ ] `og-image.webp` — 1200×630 social sharing

## Forbidden

Nie wrzucać tu Unsplash CC0 / generycznych stocków. Te lecą do `placeholders/dev/` jako dev fallback.

Tu wyłącznie: wygenerowane wg brand book Velure (noir + cognac + warm key + hairline gold) **lub** profesjonalna sesja foto.
