# Premium Auto Brand — Plan biznesowo-produktowy

## Context

Klient (z relacjami w salonach + kapitalem + baza HNWI) chce wejsc na polski rynek aut premium z nowym brandem. Punkt startu: **broker/concierge dla segmentu 150-500k PLN** (BMW M, AUDI RS, Mercedes AMG, Porsche, Range Rover, Tesla S/X). Bud zet 300-800k PLN, MVP 6 miesiecy. Inspiracje: HR Owen (estetyka, prestiż, kuracja), JamesEdition (marketplace global, curated).

**Problem rynkowy:** rynek premium PL = 34 mld PLN, +8% CAGR, ale brakuje **digital-native concierge** ktory laczy transparencje cen + AI advisory + biale-rekawiczki. Salony marek mass-premium maja słaby UX, Otomoto/Mobile.de nie premium, brokerzy (Drivers Club, GoodCars) niejasni i bez technologii. Klient premium 2026 oczekuje white-glove **online**: instant valuation, AI doradca 24/7, transparentny "best price", zero biurokracji.

**Outcome:** brand premium-positioned, ktory w 6 miesiecy ma:
- 30-60 transakcji broker (commission 1.5-3% sredniej wartosci 250k PLN = 75-450k PLN revenue/mies przy pelnym tempie w m6),
- 500-1000 zarejestrowanych klientow HNWI w bazie,
- pozycje "AI concierge premium #1 w PL" w SEO + PR,
- skalowanie do dealera wlasnego/fleet partnerships w roku 2.

---

## 1. Pozycjonowanie i nazewnictwo

### Pozycjonowanie (one-liner)
> **"Twoj prywatny doradca premium. AI + eksperci. Najlepsze ceny z salonow w Polsce i Europie."**

### Wartosci brandu
- **Transparencja** — pokazujemy realne ceny fleet/preorder vs MSRP
- **Kuracja** — nie kazdy moze nas zatrudnic, klient HNWI dostaje 1:1
- **AI-first** — "wiemy o tym aucie wiecej niz dealer"
- **Szybkosc** — od konsultacji do auta w garazu w 14 dni (zamiast 6+ miesiecy)
- **Dyskrecja** — klient HNWI = poufnosc, brak ujawnienia transakcji

### Propozycje nazw (do zatwierdzenia)
Krotkie, miedzynarodowe, premium-sounding, .com dostępne (do weryfikacji):

| Nazwa | Konotacja | Domena (do weryfikacji) |
|-------|-----------|--------------------------|
| **Maestro Auto** | Mistrz, dyrygent — koncierz prowadzi | maestroauto.pl/.com |
| **Concour** | Concours d'Elegance, kontur prestizu | concour.pl |
| **Carrier Privé** | Prywatny przewoz, dyskrecja, francuski premium | carrierprive.com |
| **Privata** | Prywatnosc, ekskluzywnosc | privata.cars |
| **Atelier 47** | Atelier = warsztat krawiecki na zamowienie | atelier47.com |
| **Senso Auto** | Wlosko-premium, "zmysl" auta | sensoauto.com |
| **The Garage Club** | Klubowosc, lifestyle | thegarageclub.pl |
| **Vault Motors** | Skarbiec, bezpieczenstwo, prestige | vaultmotors.pl |

**Moja rekomendacja:** **Maestro Auto** lub **Atelier 47** — najlepiej oddaja koncept "prywatny doradca premium" + dobrze sie pozycjonuja w SEO + bezpieczne prawnie.

### Identyfikacja wizualna (od HR Owen)
- **Paleta:** czern (#0B0B0F) + biel (#FAFAF7) + zlote akcenty (#C9A35D lub bardziej stonowane #B08D57 — szampański metal). NIE pomaranczowy/czerwony.
- **Typografia:** serif klasyczny (Playfair Display / Lora) na headline'ach + sans-serif premium (Inter / Söhne) w body
- **Layout:** duzo whitespace, hero z gridem aut, NIE video w tle — zamiast tego **wysokiej jakosci stillsy + cinemagraphy** (subtelne mikro-animacje, np. odbicie swiatla na lakierze)
- **Mood:** minimalizm, prestiz, ciszej znaczy droze

---

## 2. Produkt MVP (6 miesiecy)

### Strona internetowa — sekcje home page
1. **Hero** — slogan + CTA "Rozpocznij rozmowe z AI Concierge" (chat widget)
2. **Curated Inventory** — 20-40 aut na karuzeli (mix: stock partner-dealerow + nasze polecane z importu). Grid 3-kolumnowy, karta auta jak HR Owen: zdjecie 16:9, marka/model, rocznik, przebieg, **"Cena lepsza niz salon: -X%"** badge.
3. **Jak dzialamy** — 4 kroki: konsultacja → polowanie → negocjacje → dostawa
4. **AI Concierge** — sekcja z demem, "Zapytaj o auto", live conversation example
5. **Sukcesy klientow** — case studies (anonimowe, ale szczegolowe: "Klient z Warszawy zaoszczedzil 87 000 PLN na Porsche Macan GTS — historia w 3 minuty czytania")
6. **Newsroom** — nowinki branzowe, recenzje (SEO + autorytet)
7. **Skontaktuj sie** — booking konsultacji (Cal.com integracja), telefon z koncierzem

### Strony kluczowe (MVP scope)
- `/oferty` — listing z filtrowaniem (marka, segment, paliwo, segment cenowy, dostepnosc) — jak JamesEdition
- `/oferty/[slug]` — szczegolowa karta auta + AI chat "Zapytaj o to auto"
- `/sprzedaj` — formularz "Sprzedaj swoje auto przez nas" (wycena AI + handoff do brokera)
- `/blog` — content marketing, SEO
- `/o-nas` — historia, zespol, wartosci
- `/strefa-klienta` — login (po pierwszej transakcji): historia zapytan, dokumenty, ulubione

### Customer journey (golden path)
1. Klient HNWI klika reklame Insta/Google → ladowanie na carlanding
2. Otwiera AI chat: "Chce sportowe SUV do 400k, do firmy, najlepiej PHEV"
3. AI w ciagu 30s wyswietla **3 rekomendacje** z konkretnymi cenami + dostepnoscia + porownaniem
4. Klient klika "Chce porozmawiac" → booking 30-min calla z koncierzem
5. Koncierz przygotowuje pakiet (zdjecia, dokumenty, leasing oferty)
6. Klient akceptuje → my odbieramy auto, transport, rejestracja, dostawa do drzwi
7. Po 30 dniach: AI follow-up email "Wszystko w porzadku z autem? Mozemy pomoc w serwisie?"

---

## 3. AI Layer — konkretnie co budujemy

### A. AI Concierge (rdzen produktu) — m1-m3
- **Tech:** Claude 4.7 Sonnet (rozumowanie + dlugie konteksty), GPT-4o-mini (fast routing), embedingi text-embedding-3-large
- **Funkcjonalnosci:**
  - Dialog naturalny po polsku ("szukam SUV do firmy, lubie BMW ale Porsche tez OK")
  - Dostep do **live inventory** (nasze + scrapowane salony i otomoto premium) via RAG
  - Porownywanie modeli (TCO 5 lat, residual value, koszty serwisu)
  - Symulacja leasingu/kredytu (API z Mleasing/Carefleet/IdeaBank)
  - Handoff do czlowieka: kiedy AI wykrywa "gotowy do rozmowy" → bookuje call
- **System prompt:** ton premium koncierza (jak w HR Owen — "unparalleled experience"), nigdy nie pushy, nigdy nie poda nieprawdziwej ceny
- **Guardrails:** nie negocjuje z klientem ceny (zostawia brokerowi), nie ujawnia marz dealera, nie obiecuje terminow ktorych nie potwierdzono

### B. AI Photo Magic — m2
- Background removal + AI relighting → kazde zdjecie auta wyglada studyjnie
- Tools: Stable Diffusion XL inpainting + Photoroom API (gotowiec) lub wlasny pipeline na replicate.com
- Wynik: dealer wysyla 5 zdjec z telefonu, w 2 min dostaje 5 studyjnych do listingu
- **USP:** zaden polski marketplace tego nie ma

### C. AI Valuation (trade-in) — m3
- Klient wysyla zdjecia + VIN + przebieg → AI wycena w 2 min
- **Data sources:** mobile.de (scrape), autoscout24, otomoto archiwum, eurotax
- Computer vision (Claude Vision API lub GPT-4 Vision) ocenia stan na zdjeciach
- Output: "Twoje auto warte 285-310k PLN. Mozemy zalatwic sprzedaz w 14 dni z premium 15k."

### D. AI Email/Voice Follow-up — m4
- Po kazdym zapytaniu — drip campaign personalizowany (resend.com + Claude)
- Voice agent (Vapi.ai lub ElevenLabs Conversational) dla follow-up "Jak rozwazania, czy moge umowic rozmowe?"
- **Etyka:** kazdy voice call ujawnia "rozmawia z Pana asystent AI Maestro" + opt-out

### E. AI Content Engine — m5
- Codzienna automatyzacja: nowe auto na strona → AI generuje **opis sprzedazowy** (PL+EN+DE) + posty IG/LinkedIn + email newsletter section
- Reuse infrastruktury **Optimus content_brands.yaml** z istniejacego setupu

### F. AI Fraud/Import Check — m5
- Skanowanie ofert z DE/IT (kupowanych dla klientow polskich) — czy VIN nie skradziony, historia wypadkow (Carfax/AutoDNA integracja), zgodnosc dokumentow
- Claude Vision na zdjeciach faktury/dokumentu → strukturyzacja danych
- **Wartosc:** ochrona przed parallel import scam (90% klientow HNWI nie wie jak weryfikowac)

---

## 4. Stack technologiczny

| Warstwa | Tech | Uzasadnienie |
|---------|------|--------------|
| Frontend | **Next.js 15** + TypeScript + Tailwind + shadcn/ui | SSR/SSG dla SEO, premium komponenty |
| Hosting | **Vercel** (frontend) + **Firebase** (auth/db) | Spojnosc z reszta stacku klienta (vide TBA, Agentico, FizjoMap) |
| CMS | **Sanity.io** lub **Strapi self-hosted** | Edycja inventory + blog przez non-tech zespol |
| AI core | **Claude 4.7 Sonnet** (advisor) + **GPT-4o-mini** (routing) + **Claude Vision** (zdjecia) | Najlepsze do polskiego + reasoning |
| Vector DB | **Pinecone** lub **Qdrant** (self-hosted na optimus-server) | Wyszukiwarka semantyczna ofert |
| Chat infra | **Vercel AI SDK** + streaming UI | Production-grade chat |
| Email | **Resend** + **React Email** | Premium-feel maile |
| Calls | **Cal.com** (self-hosted) + **Vapi.ai** (voice agent) | Booking + voice follow-up |
| CRM | **Pipedrive** lub **Attio** (custom) | Lead pipeline koncierza |
| Analytics | **PostHog** + **Plausible** (privacy) | Bez kompromisow GDPR |
| Payments | **Stripe** (deposity/fees) + **Przelewy24** (PL) | Dla zaliczek 1-5k PLN |
| Photo AI | **Photoroom API** + **Replicate** (SDXL) | Background removal + relighting |

**NIE budujemy own DMS/inventory mgmt** w MVP — Sanity CMS + Airtable wystarcza. Po 100+ transakcji rozwazyc custom.

---

## 5. Roadmapa 6 miesiecy (milestones)

### Miesiac 1 — Fundament (~80k PLN)
- [ ] Decyzja na nazwe + branding (Logo, kolory, typografia) — agencja brandingowa lub Midjourney + designer
- [ ] Rejestracja spolki / domeny / znaku towarowego
- [ ] Setup stacku: Next.js + Firebase + Sanity + repo + CI/CD
- [ ] **Pierwsze 5 partnerstw z salonami** (klient ma juz relacje — formalizujemy umowy: % na fleet)
- [ ] **AI Concierge MVP v0.1** (prosty chat, RAG na 20 testowych aut)

### Miesiac 2 — Inventory i strona (~120k PLN)
- [ ] Strona full design + dev (home, listing, single car, blog, kontakt)
- [ ] 20-40 aut w bazie (importy z DE + stock salonow partnerskich)
- [ ] AI Photo Magic pipeline integrated
- [ ] **AI Concierge v0.3** — dialog naturalny, dostep do live inventory
- [ ] Pierwsza sesja zdjeciowa hero (event z partnerem — Porsche Centrum / BMW Performance Center)

### Miesiac 3 — Launch beta (~100k PLN)
- [ ] Soft launch (zamknieta lista, 50 zaproszen do bazy HNWI klienta)
- [ ] AI Valuation (trade-in) live
- [ ] CRM setup + onboarding pierwszego brokera/koncierza
- [ ] **Cel: 3-5 transakcji pierwszych** (proof of concept)
- [ ] PR push: artykuly w Manager Magazin, Forbes Premium, Pismo (PL)

### Miesiac 4 — Skalowanie marketingu (~80k PLN)
- [ ] **Public launch** — kampania Insta/YouTube/LinkedIn
- [ ] Voice agent + email drip campaign live
- [ ] Pozycjonowanie SEO (10 artykulow ekspertowych, np. "Porsche Macan 2026 — czy oplaca sie z fleet discount?")
- [ ] Event live: prezentacja 3-5 aut + degustacja whisky / cygar (klubowy charakter)
- [ ] **Cel: 8-12 transakcji w miesiacu**

### Miesiac 5 — Optymalizacja i ekspansja (~50k PLN)
- [ ] AI Content Engine pipeline (auto-posty, newslettery)
- [ ] AI Fraud/Import Check (rozszerzenie o auta z DE)
- [ ] Pierwsze partnerstwa B2B fleet (np. fundacja sportowa, kancelaria, klinika prywatna)
- [ ] **Cel: 15-25 transakcji w miesiacu**

### Miesiac 6 — Konsolidacja + plan rok 2 (~70k PLN bufor)
- [ ] Pelny audit produktu + UX research z 10 klientami
- [ ] Decyzja: czy uruchomic dealer wlasny (kupno 5-10 aut na stan) — wymaga 2-5 mln dodatkowego kapitalu
- [ ] Plan ekspansji: CZ/SK/Niemcy?
- [ ] **Cel: 30-60 transakcji w miesiacu**

### Razem budzet 6 miesiecy: ~500k PLN
+ 200k PLN bufor na shoot, event, demo car (1-2 auta na stan na potrzeby PR/testow)

---

## 6. Model finansowy (zarys)

### Revenue streams
1. **Commission od klienta** — 1.5-3% wartosci auta (sredni deal 250k × 2% = 5 000 PLN/auto)
2. **Commission od dealera** — fleet referral fee 0.5-2% (dodatkowy 1-2k PLN/auto, niejawne dla klienta jako marża dealera)
3. **Concierge subscription** (po MVP) — 5-15k PLN/rok dla klientow VIP (priorytet, dostep do aut przed listingiem)
4. **AI tools SaaS** (rok 2) — sprzedaz **AI Photo Magic + AI Concierge** dealerom premium jako biały-label (500-2000 PLN/mies/dealer)
5. **Affiliate** — leasing (Mleasing/Carefleet placi 0.3-0.8% wartosci), ubezpieczenia, OC korporacyjne

### Prognoza realistyczna (m6 run-rate)
- 30 transakcji/mies × 250k × 2.5% (kompozyt) = **187 500 PLN/mies brutto**
- Koszty operacyjne ~80k PLN/mies (zespol 4 osob + tech + marketing)
- **Marża operacyjna: ~107k PLN/mies = ~1.3 mln PLN/rok run-rate**

### Cel rok 1 koniec: 1.5-2 mln PLN revenue, break-even

---

## 7. Marketing i GTM

### Kanaly priorytetowe
- **Instagram Reels + YouTube** — test drive videos, "Co kupic do firmy za 300k", behind-the-scenes (jak negocjujemy)
- **LinkedIn** — content B2B: CEO/CFO szukajacy aut firmowych
- **Google Ads premium long-tail** — "porsche macan najlepsza cena", "audi rs6 fleet discount"
- **PR offline** — Pismo, Manager Magazin, Forbes Premium, eventy z markami (Concours, Goodwood-style)
- **Referral z klientow** — "polec znajomego, dostan 5000 PLN na serwis"
- **Influencer luxury** (np. Klocuch nie, ale Travel + lifestyle z baza HNWI)

### Eventy
- M3: prywatna noc z 5 demo autami w warszawskim showroom (np. Garbarska Studios)
- M4-M6: cykliczne "Maestro Sessions" — co miesiac inny brand + kolacja
- Sponsoring: golf club, zeglarstwo, polo, etiquette dinners

---

## 8. KPIs i sukces

### KPIs produktowe (mierzymy od m1)
- **Lead conversion**: zapytanie → konsultacja → transakcja (cel m6: 15% / 40% = 6% end-to-end)
- **AI Concierge engagement**: avg 5+ wiadomosci/sesja, 30% kontynuuje do callbacka
- **NPS post-zakup**: >70 (premium standard)
- **Avg deal value**: 250k PLN +/- 50k
- **Time-to-purchase**: konsultacja → dostawa <30 dni

### KPIs biznesowe
| Miesiac | Transakcji | Revenue mies | Cumulative |
|---------|------------|--------------|------------|
| M3 | 3-5 | 30k | 30k |
| M4 | 8-12 | 75k | 105k |
| M5 | 15-25 | 150k | 255k |
| M6 | 30-60 | 250k+ | 500k+ |

### Sygnaly sukcesu (m6)
- 500+ leadow w CRM
- 100+ zarejestrowanych w "strefa klienta"
- 5+ B2B fleet partnerships
- 3+ artykuly PR
- Brand recognition: 20%+ in HNWI sample (badanie PR)

---

## 9. Krytyczne pliki/komponenty do zbudowania

### Repo struktura (Next.js 15)
```
maestro-auto/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                 # homepage
│   │   ├── oferty/
│   │   │   ├── page.tsx             # listing z filtrami
│   │   │   └── [slug]/page.tsx      # single car
│   │   ├── sprzedaj/page.tsx        # trade-in valuation
│   │   ├── blog/                    # content SEO
│   │   └── o-nas/page.tsx
│   ├── (app)/
│   │   └── strefa-klienta/          # zalogowani klienci
│   └── api/
│       ├── ai/
│       │   ├── concierge/route.ts   # Claude streaming endpoint
│       │   ├── valuation/route.ts   # AI wycena
│       │   └── photo-magic/route.ts # background removal
│       ├── leads/route.ts           # CRM integration
│       └── booking/route.ts         # Cal.com webhook
├── lib/
│   ├── ai/
│   │   ├── concierge-agent.ts       # system prompt + tools
│   │   ├── valuation-agent.ts
│   │   └── content-engine.ts
│   ├── sanity/                      # CMS queries
│   ├── crm/                         # Pipedrive/Attio
│   └── pricing/                     # fleet discount logic
├── components/
│   ├── CarCard.tsx
│   ├── ConciergeChat.tsx
│   ├── HeroSection.tsx
│   └── ValuationForm.tsx
└── content-brands.yaml              # reuse z Optimus dla content engine
```

### Reuse z istniejacych projektow (Optimus)
- `content_brands.yaml` infrastruktura — dodac `maestro_auto` jako brand nr 9 → patrz Marketing Automation w MEMORY.md
- AI agents pattern z `agents/definitions/` — stworzyc `maestro_concierge.yaml`
- `scripts/input_sanitizer.py` — dla danych z scrapingu (otomoto, mobile.de)
- Brain DB schema — dodac tabele `maestro_leads`, `maestro_cars`, `maestro_transactions`
- Telegram bot integracja — alerty dla brokera "nowy lead premium >300k!"

### Integracje zewnetrzne
- **OtoMoto API** (jesli dostepne) lub scraper z input_sanitizer
- **AutoDNA** (historia auta PL)
- **Mleasing/Carefleet API** (leasing oferty)
- **Photoroom API** (zdjecia)
- **Cal.com** (booking)
- **Resend** (email)
- **Vapi.ai** (voice agent)

---

## 10. Verification (jak testujemy ze MVP dziala)

### Funkcjonalna weryfikacja (do m3)
1. **AI Concierge test** — 20 fake klientow (znajomi/zespol), kazdy z innym scenariuszem (rodzina, biznes, kolekcjoner). Mierzymy: czy AI poprawnie zrozumialo intencje, czy polecilo trafnie, czy nie sklamalo o cenie/dostepnosci.
2. **Photo Magic test** — 50 zdjec z telefonu od dealera → wynik vs studio shoot benchmark. Cel: 80%+ "nieodroznialne od studio" (blind test z 10 osobami).
3. **Valuation test** — 30 aut z eurotax/mobile.de → porownanie AI wycena vs realna cena sprzedazy. Cel: median error <5%.
4. **Booking flow end-to-end** — od chat → konsultacja w kalendarzu → CRM → maile follow-up.

### Biznesowa weryfikacja (do m6)
1. **Cohort transakcji** — czy klienci konwertuja w terminie <30 dni
2. **CAC vs LTV** — koszt pozyskania klienta vs commission z transakcji (CAC <5000 PLN, LTV >15k = 3x ratio min.)
3. **NPS pomiar** — kazdy klient po dostawie auta dostaje 1-pytaniowy ankiete
4. **Repeat business** — czy klient wraca po drugie auto (rodzina, firma) w 12 mies

### Tech weryfikacja
1. Lighthouse score >90 mobile (premium UX wymaga prestige speed)
2. Core Web Vitals zielone
3. Brak data breach (audyt zewnetrzny przed public launch)
4. GDPR compliance — dyskrecja klienta HNWI to MUST

---

## 11. Ryzyka i mitygacja

| Ryzyko | Prawdopodobienstwo | Wplyw | Mitygacja |
|--------|-------------------|--------|-----------|
| Salony wycofuja fleet discount widzac "broker" | Srednie | Wysoki | Klient ma juz relacje — zacznijmy od 3-5 najbardziej zaufanych salonow, NDAs |
| AI haluuje cene → krzywda klienta | Niskie ale wysoki impact | Wysoki | Hardcoded guardrails: AI nigdy nie podaje finalnej ceny, tylko widelki + handoff do brokera |
| Konkurencja kopiuje (Drivers Club, salony tworza wlasny AI) | Srednie | Sredni | Speed-to-market + brand premium + relacje (relacje sa moatem) |
| Klient HNWI nie ufa AI chat | Srednie | Sredni | AI jest "asystentem" koncierza, NIE zastapieniem. Czlowiek zawsze dostepny w 1 klik |
| Compliance: scraping otomoto/mobile.de | Wysokie | Sredni | Tylko API legalne lub partnerstwa direct, nie scraping |
| Klient marnuje budzet na fizyczny showroom | Wysokie | Wysoki | Showroom dopiero w roku 2 jesli M6 udane — MVP bez showroomu, zamiast tego eventy partner-driven |

---

## 12. Decyzje wymagajace zatwierdzenia klienta przed startem

1. **Nazwa brandu** — preferencja klienta z tabeli (lub propozycja wlasna)
2. **Domena** — ktora kupujemy (.pl czy .com, czy obie)
3. **Spolka** — nowa sp. z o.o. czy istniejaca firma klienta?
4. **Pierwsi partnerzy salonowi** — ktorych 5 salonow podpisujemy w m1 (klient wskazuje z bazy relacji)
5. **Pierwsi 3 koncierze (zespol)** — czy klient ma kandydatow, czy rekrutujemy
6. **Demo car** — czy klient zgadza sie na kupno 1-2 aut na stan dla PR/eventow (~500k PLN out-of-budget)
7. **Branding agency** — zewnetrzna agencja czy in-house (mam kontakty)

---

## Co dalej (next actions po zatwierdzeniu planu)

1. Decyzja klienta na 7 punktow powyzej (call 60 min)
2. Spotkanie kickoff: ja + klient + future broker(zy) + designer brandingowy
3. Sprint 1 (tydzien 1-2): branding direction + domena + repo bootstrap + pierwsze 2 salony LOI
4. Sprint 2 (tydzien 3-4): wireframes home + AI Concierge prototype
5. Co tydzien: 30-min sync z klientem, monthly milestone review

**Pierwsze 30 dni = make-or-break.** Jesli relacje z salonami sie potwierdzaja + branding kliknie + AI Concierge demo wow'uje pierwszych 5 klientow z bazy klienta, jestesmy na trajektorii do 1 mln PLN run-rate w m6.
