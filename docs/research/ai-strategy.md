# Research: AI Strategy dla brandu premium

**Data:** 2026-05-19. Bazuje na globalnych benchmarkach (Carwow, Capital One, Numa, BMW, JamesEdition, Bring a Trailer).

## Filozofia AI dla luxury cars

AI w segmencie premium **nie jest gadgetem ani lead-magnet'em** — to **operacyjny edge** ktory daje:
1. **10x szybsza wycena/rekomendacja** vs ludzki broker
2. **24/7 dostepnosc** dla klienta cross-border
3. **Skala personalizacji** — kazda interakcja dopasowana
4. **Asymetria informacji odwrocona** — klient HNWI dostaje wiedze rownie dobra jak dealer

**Co AI NIE jest:** zastapienie czlowieka. Klient HNWI placacy 300k+ PLN chce ludzkiej rozmowy w kluczowym momencie. AI = orkiestrator, brokerzy = finalizer.

## 6 modulow AI — co budujemy

### Modul 1: AI Concierge Agent

**Co robi:**
- Dialog naturalny po PL/EN (przyszlosc: DE/CZ/IT)
- Slucha potrzeb klienta ("szukam SUV do firmy, lubie BMW ale Porsche tez OK, max 400k, PHEV"). Zadaje pytania uzupelniajace (kiedy, gdzie, kto bedzie jezdzil).
- W 30 sekundach proponuje 3 konkretne rekomendacje z **live inventory** + cena + dostepnosc + porownanie
- Kiedy klient gotow → bookuje 30-min konsultacje z brokerem (Cal.com handoff)

**Tech:**
- **Claude 4.7 Sonnet** — rozumowanie, dlugie konteksty, polski najwyzsza klasa
- **GPT-4o-mini** — szybkie routing decyzji, low-cost
- **embedding model:** text-embedding-3-large dla RAG
- **Vector DB:** Qdrant (self-hosted na optimus-server) lub Pinecone
- **Streaming UI:** Vercel AI SDK

**Guardrails:**
- AI NIGDY nie podaje finalnej ceny — tylko widelki "245-275k PLN, zaleznie od konfiguracji"
- AI NIGDY nie ujawnia marz dealera ani strukutury fleet discount
- AI NIGDY nie obiecuje terminow dostawy bez potwierdzenia od brokera (ma tooli `check_availability(VIN)` ktore dzwoni do dealera API)
- AI **zawsze** ma opcje "polacz mnie z czlowiekiem" w 1 klik

**Benchmark:** Capital One AI car shopping (multi-agent reasoning + booking), CarEdge concierge agent.

**Wartosc dla klienta:** 40 min vs 2-3h tradycyjnego "obdzwaniania salonow".

---

### Modul 2: AI Photo Magic

**Co robi:**
- Dealer/broker wysyla 5 zdjec z telefonu (np. parking, slabe oswietlenie)
- W 2 min AI generuje 5 **studyjnych** zdjec: czarne lub gradient tlo, profesjonalne oswietlenie, refleksy na lakierze, cienie pod kolami
- Output: gotowe do listingu social/email/print

**Tech:**
- **Photoroom API** (gotowiec do background removal premium — sprzedaja luxury cars use case)
- **Replicate.com SDXL inpainting** — relighting na styl studio shoot
- Alternative: **flux.1 dev/pro** dla high-end relighting

**ROI:**
- Studio shoot: 1500-3500 PLN/auto, 1-2 dni
- AI Magic: ~2 PLN/auto (API koszty), 2 min
- **Skalowanie 100 aut = 250 000 PLN oszczednosci/rok**

**Benchmark:** carstudio.ai (sprzedaja juz dealerom premium na zach.), BMW oficjalny pipeline dla used cars.

**Wartosc dla klienta:** od dnia 1 listingu wygladaja jak Concours d'Elegance. Roznica conversion +20-30%.

---

### Modul 3: AI Valuation (trade-in)

**Co robi:**
- Klient wysyla zdjecia auta + VIN + przebieg
- AI w 2 min zwraca: "Twoje auto warte 285-310k PLN. Mozemy zalatwic sprzedaz w 14 dni z premium 15k PLN ponad rynek."
- Computer vision ocenia stan zewnetrzny (lakier, rysy, felgi, opony)
- Cross-reference z mobile.de/autoscout24/otomoto archive

**Tech:**
- **Claude Vision** (lub GPT-4 Vision) — ocena stanu na zdjeciach
- Data sources: mobile.de scraper (legalny user-agent + rate limit) lub partnership API, eurotax PL, otomoto archive
- ML pipeline: gradient boosting na features (marka, model, rok, przebieg, stan, region) trenowany na ~50k transakcjach

**Benchmark:** Carwow 2024 — 98% accuracy on photo-based valuation. carstudio.ai. KBB AI.

**Wartosc dla klienta:**
- 40 min vs 2-3h obdzwaniania komisow
- Transparentnosc — klient widzi WIDELKE i powod (np. "rysy na drzwiach -8k, oryginalne felgi +5k")

---

### Modul 4: AI Email/Voice Follow-up

**Co robi:**
- **Email drip:** po kazdym kontakcie generowany personalizowany email (nie templatka)
  - Day 1: streszczenie rozmowy + propozycja 1
  - Day 3: artykul ekspertowy (residual values Porsche Macan)
  - Day 7: ostatnia propozycja + booking direct
- **Voice agent (Vapi.ai):** Dla leadow ktore nie odpowiadaja — AI dzwoni z follow-up po 5 dniach
  - **MUSI ujawnic:** "Rozmawiacie z asystentem AI Maestro. Czy mam Pana z brokerem polaczyc?"
  - Opt-out w 1 zdaniu

**Tech:**
- **Resend** + React Email — premium templates
- **Vapi.ai** — voice agent w PL (ElevenLabs voice cloning dla brand voice)
- **Claude** — content generation per-lead

**Etyka:**
- **Zawsze** disclosure AI
- **Zawsze** opt-out
- **Nigdy** voice agent nie obiecuje cen
- **Voice call > 60s przekierowuje do brokera** (human-in-the-loop)

**Benchmark:** Numa (1200 dealerow w US, 40% profit boost w service), Drive AI dla auto sales.

---

### Modul 5: AI Content Engine

**Co robi:**
- **Auto-generowanie:**
  - Opis sprzedazowy (PL/EN/DE) z konkretnymi USP modelu
  - Posty IG (carousel + single image + reels script)
  - Posty LinkedIn dla B2B
  - Newsletter section
  - SEO blog post dla long-tail ("Porsche Macan GTS 2026 vs Cayenne — co kupic za 380k?")
- **Trigger:** nowe auto wchodzi do CMS → content engine generuje 5 artefaktow

**Tech:**
- **Reuse z Optimus content_brands.yaml** — system juz aktywny dla 8 brandow, dodajemy maestro_auto
- **Claude** dla copy, **DALL-E 3 / Midjourney** dla hero imagery
- **Workflow:** Sanity webhook → Optimus n8n → Telegram approve → publish

**ROI:** zespol marketingowy 1 osoba zamiast 3-4 (content + social + SEO).

---

### Modul 6: AI Fraud / Import Check

**Co robi:**
- Kiedy kupujemy auto z DE/IT dla polskiego klienta:
  - Skanowanie VIN przez Carfax/AutoDNA — historia wypadkow, kradziezy, serwisu
  - Claude Vision na fakturach + dokumentach (Fahrzeugbrief, Zulassungsbescheinigung) — czy zgadzaja sie dane, czy nie ma scams
  - Cross-reference: cena w ofercie vs rozsadek (jesli auto warte 300k oferowane za 180k = red flag)
  - OCR ekstrakcja key fields → CRM auto-fill

**Tech:**
- **Claude Vision API** — analizuje zdjecia faktury + dokumentu
- **AutoDNA** integracja (PL) lub Carfax (DE/EU)
- **VIN decoder** lokalnie

**Wartosc:** 90% klientow HNWI nie wie jak weryfikowac auto z DE. Bez tego module = ryzyko stracic klienta na pierwszej "wpadce".

---

## Co NIE jest w MVP (mooshot post-MVP)

| Feature | Dlaczego nie w MVP |
|---------|---------------------|
| AR/VR konfigurator | Niche, kosztowny, polish klient nie używa w skali |
| Crypto payment escrow | Compliance + maly podział klientów chce |
| Autonomous AI sourcing (scouting cale rynki za lepsze deals) | Po m12, jak mamy baseline |
| White-label AI tools dla dealerow (B2B SaaS) | Po m18, jak udowodnimy use case na sobie |
| Voice clone klienta (deepfake protection) | Niche security |
| Predictive maintenance po sprzedazy | Wymaga IoT/connected cars data |

## Stack AI summary

```
Layer 1: User-facing
- Vercel AI SDK (streaming chat)
- Vapi.ai (voice agents)
- React Email + Resend

Layer 2: AI orchestration
- Claude 4.7 Sonnet (advisor, content, vision)
- GPT-4o-mini (fast routing, classification)
- text-embedding-3-large (RAG embeddings)

Layer 3: Data
- Qdrant (vector DB, self-hosted optimus-server)
- Firebase Firestore (live inventory + leads)
- Sanity CMS (editorial content)

Layer 4: Specialized
- Photoroom API (background + relighting)
- Replicate (SDXL inpainting)
- Claude Vision (stan auta, dokumenty)
- AutoDNA / Carfax (historia)

Layer 5: Integration
- Cal.com (booking)
- Pipedrive (CRM)
- Stripe (payments)
- Posthog (analytics)
```

## KPIs AI

- AI Concierge engagement: 5+ wiadomosci avg, 30% konwersja do calla
- AI Valuation accuracy: median error <5%
- AI Photo Magic acceptance rate: 80%+ "nieodroznialne od studio" (blind test)
- AI Email open rate: 35%+ (premium standard, vs 20% mass)
- Voice agent conversion: 15%+ z follow-up calls
- AI Fraud detection: 100% zlapanych dokumentow scam (sample 50 historycznych)

## Zrodla

- [Tom Hartley profitability case](https://cardealermagazine.co.uk/supercar-dealer-tom-hartley-junior-makes-11-3m-profit-from-sale-of-just-102-cars/275988)
- [HR Owen financials](https://cardealermagazine.co.uk/publish/luxury-car-dealer-hr-owen-makes-15-6m-profit-as-supercar-sales-rocket/274272)
- [JamesEdition platform](https://www.jamesedition.com/)
- [Bring a Trailer 2025 growth](https://theshopmag.com/news/bring-a-trailer-record-growth-2025/)
- [Carwow AI depreciation](https://businessmodelcanvastemplate.com/blogs/brief-history/carwow-brief-history)
- [carstudio.ai AI valuation](https://carstudio.ai/blog/ai-blue-book-insights-predicting-car-value-from-photos)
- [Capital One concierge AI](https://www.capitalone.com/tech/ai/future-of-ai-car-dealerships-shopping/)
- [Numa voice agents](https://www.numa.com/)
- [AI background removal cars](https://carstudio.ai/blog/ai-car-background-removal-change-professional-photos)
- [3D Car configurators 2025](https://colorwhistle.com/3d-car-configurators/)
