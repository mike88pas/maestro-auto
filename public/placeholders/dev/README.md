# Dev placeholder images — Unsplash CC0

**Status:** DEV PLACEHOLDERS — używamy tymczasowo do prezentacji designu klientowi.
**Przed launch prod:** podmieniamy na własne foto z professional shoot Polish atelier (sprint 1).

## Source: Unsplash (license: Unsplash License — free for commercial use)

Wszystkie zdjęcia pobrane via `https://images.unsplash.com/photo-{ID}` CDN paths.
Pełna licencja: https://unsplash.com/license

| Plik | Source URL (base) | Użycie w aplikacji |
|------|-------------------|---------------------|
| aston.jpg | unsplash.com/photos/1605559424843 | card-aston-martin (primary) |
| bentley.jpg | unsplash.com/photos/1492144534655 | card-bentley (primary) |
| bmw-m.jpg | unsplash.com/photos/1544636331 | card-porsche (Porsche stand-in until real) |
| car-dramatic.jpg | unsplash.com/photos/1494976388531 | card-porsche-alt + bg-concierge |
| ferrari-mood.jpg | unsplash.com/photos/1583121274602 | card-ferrari (primary) + card-aston-alt |
| garage-mood.jpg | unsplash.com/photos/1601584115197 | card-range-rover-alt + bg-services |
| interior-leather.jpg | unsplash.com/photos/1502877338535 | bg-manifest + card-bentley-alt |
| lambo.jpg | unsplash.com/photos/1606664515524 | card-lamborghini (primary) |
| mclaren.jpg | unsplash.com/photos/1542362567 | card-lamborghini-alt |
| range-rover.jpg | unsplash.com/photos/1592198084033 | card-range-rover (primary) |
| sports-car-night.jpg | unsplash.com/photos/1555215695 | hero-cinematic + card-ferrari-alt |

## Compliance trail

- Wszystkie zdjęcia pochodzą z Unsplash, licensed under Unsplash License (free commercial use).
- Atrybuty fotografów nie są wymagane przez licencję, ale **jest zalecane** dodanie credits na produkcyjnej stronie (sprint 1).
- Self-hosted in `public/placeholders/dev/` — brak hotlinkingu.
- Nie commit'ujemy do prod buildu — folder `dev/` to placeholder do podmiany.

## Action po sesji (sprint 1)

1. Professional photo shoot 6 aut w Polish luxury garage setting (Pagani/Ferrari/Range Rover etc.)
2. Replace wszystkich zdjęć w tym folderze
3. Rename folder z `dev/` na `production/` (lub move do `images/cars/`)
4. Update paths w `lib/copy.ts`
5. Verify w Lighthouse > 90 (perf + a11y)
