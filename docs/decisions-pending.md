# Decyzje czekajace na klienta

6 punktow do kickoff call (60 min). Bez tych decyzji nie startujemy sprintu 1.

## 1. Nazwa brandu — 🔄 PENDING (Velure vs Atelier 11, dual-track)

**Status 2026-05-19 (drugi pass):** klient pivotuje koncepcyjnie z Atelier 11 na Velure, ale chce zobaczyc obie nazwy side-by-side w pelnym brand identity + dzialajacej stronie. Decyzja po preview.

**Co istnieje:**
- `docs/brand/comparison.md` — tabela decyzyjna 12 wymiarow
- `docs/brand/velure.md` — brand book Velure (zmyslowy luksus, paleta noir+warm gold #C9A961, Cormorant Garamond)
- `docs/brand/atelier-11.md` — brand book Atelier 11 (architektoniczny luksus, paleta ink+champagne #B08D57, Playfair Display)
- `docs/brand/slogans.md` — 12 sloganow do wyboru (4 katy x 3)
- `docs/copy/site-pl.md` — pelny copy deck PL z wariantami per brand
- Next.js MVP z theme-togglem zaimplementowany — `npm run dev` i preview side-by-side w przegladarce

**Akcja klienta:**
1. Przejdz `docs/brand/comparison.md`
2. Otworz `http://localhost:3000`, toggluj `?theme=velure` ↔ `?theme=atelier-11`
3. Przejdz 12 sloganow, zaznacz top 3
4. Decyzja: **Velure** lub **Atelier 11**
5. Decyzja zapisana w tym pliku oraz `docs/brand-naming.md` jako "FINAL".

**Co to odblokowuje:** TM filing (EUIPO klasa 12+35), zakup domen (velure.pl+velure.cars LUB atelier11.pl+atelier11.cars), social handles, rozpoczecie sprintu 1 (real-photo shoots, salon LOI, kickoff zespolu).

Szczegoly: `docs/brand-naming.md` + `docs/brand/`.

---

## 2. Domena

**Status:** rekomendowane TLDs do zakupu:
- **`atelier11.pl`** — priorytet (SEO polski rynek)
- **`atelier11.cars`** — international (premium domain extension)
- **`atelier11.eu`** — expansion-ready (EU)
- `atelier11.club` — backup (membership feel)

**NIE walczymy o `.com`** — zajete przez US architecture firm od 1993, kupno bedzie kosztowne ($10-50k+) i niekonieczne.

**Akcja klienta:** decyzja ktore TLDs kupujemy + budzet (typowo 50-500 PLN/rok per TLD freshly registered).

**Co to blokuje:** website, email firmowy, SSL, marketing assets, social handles.

---

## 3. Spolka

**Status:** decyzja prawna.

**Opcje:**
- (a) Nowa sp. z o.o. — sponsoring brand-clear, ochrona kapitalu, ale 4-6 tyg setup + ksiegowosc
- (b) Istniejaca firma klienta — szybciej, ale brand-confusion + ryzyko reputacyjne miks
- (c) Spolka cywilna na start, sp. z o.o. po m3 — najlzejszy start, do skalowania pivot

**Akcja klienta:** decyzja + ksiegowy.

**Rekomendacja PM:** (a) — premium brand wymaga clean entity, klient HNWI sprawdza KRS przed transakcja >200k PLN.

---

## 4. Pierwsi partnerzy salonowi (5 LOI w m1)

**Status:** klient ma relacje, formalizujemy.

**Co potrzebne:** 5 salonow z mixu marek (idealnie: 1× Porsche, 1× BMW Performance, 1× AUDI/AMG, 1× Range Rover/Jaguar, 1× Tesla/EV). Kazdy gotowy do umowy o:
- Fleet discount (5-15% MSRP przy >5 szt./rok throughput)
- Preorder priority (klient w kolejce nie czeka 38 tyg)
- Referral fee na rzecz brokera (0.5-2% wartosci auta)
- Demo car loan (1-2 dni na potrzeby PR/eventu)

**Akcja klienta:** wskazac 5 imion + numerow telefonu (introducers), my przygotujemy LOI template.

---

## 5. Zespol — pierwsi 2-3 koncierze

**Status:** czekamy na decyzje rekrutacyjna.

**Profil:**
- 3-7 lat doswiadczenia w sprzedazy premium (auta, nieruchomosci, jachty, private banking)
- Wlasna siec kontaktow HNWI w PL
- Angielski biznesowy (klient cross-border)
- Bardzo dobrze: niemiecki (import DE)
- Wynagrodzenie: 8-15k PLN bazowe + 20-30% commission od dealu

**Akcja klienta:** czy klient ma kandydatow z bazy znajomych, czy rekrutujemy zewnetrznie (LinkedIn Premium + agencja).

**Rekomendacja PM:** start z 1 brokerem (klient sam lub czlowiek z bazy) do m3, rekrutacja drugiego po pierwszych 10 transakcjach.

---

## 6. Demo car / inventory na stan dla PR

**Status:** decyzja kapitalowa.

**Opcje:**
- (a) **Zero demo cars** — broker pure, eventy organizujemy w salonach partnerskich (klient daje auta na 1-2 dni za umowa)
- (b) **1 demo car** (~250-400k PLN) — flagowy model na 6 mies, używany do PR, content video, eventow
- (c) **2-3 demo cars** (~700k-1.2M PLN) — Porsche + BMW + Tesla, pelna ekspozycja, pozwala na "showroom" pop-up

**Akcja klienta:** decyzja + budzet (out-of-MVP 500k PLN).

**Rekomendacja PM:** (a) na start, (b) jesli klient chce mocny PR push w m3-m4. (c) niewskazane — risk vs ROI niski.

---

## 7. Agencja brandingowa

**Status:** decyzja organizacyjna.

**Opcje:**
- (a) **Polska agencja premium** (np. Brand Innovation Studio, Hand Heart Fingers, FAR Studio) — 50-150k PLN za pelne brand identity (logo, kolory, font, brand book, voice & tone, social templates, photo direction)
- (b) **Solo designer freelance** (zachodni rynek via Dribbble/Behance) — 20-50k PLN, ale bez voice & tone, samo visual
- (c) **AI-assisted in-house** (Midjourney + Figma + my) — 5-15k PLN, najszybciej, ale brand bez "wow"

**Akcja klienta:** decyzja + budzet.

**Rekomendacja PM:** (a) — premium brand wymaga premium tozsamosci. To inwestycja pod 5-letnia ekspozycje (logo na samochodach, dokumentach, evenstach). Tutaj nie warto skapuc.

---

## Timeline do kickoff

| Krok | Termin |
|------|--------|
| Klient czyta plan + research | tydzien 1 |
| Call decyzyjny (60 min) — 7 punktow | tydzien 2 |
| Sprint 1 (branding + repo bootstrap + 2 LOI z salonami) | tydzien 3-4 |
| Sprint 2 (wireframes + AI Concierge prototype) | tydzien 5-6 |
| MVP m1 milestone | tydzien 8 |
