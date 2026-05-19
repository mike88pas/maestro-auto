# Copy deck PL — full site

**Status:** v1, source of truth dla `lib/copy.ts` (TS object mirror w kodzie).
**Convention:** `[V]` = wariant Velure · `[A11]` = wariant Atelier 11 · brak labelki = wspólne dla obu.
**Reguła synchronizacji:** każda zmiana w tym pliku → mirror w `lib/copy.ts`. Pre-launch: script porównujący diff (opcjonalne, sprint 1).

---

## Tone rules — global

**BANNED words:** `najlepszy` · `super` · `tanio` · `oferta` · `promocja` · `okazja` · `wow` · `mega` · `extra` · `nieprzeciętny` · `niesamowity` · `wyjątkowa cena`

**PREFERRED lexicon:** `kuratorski` · `dyskretny` · `pochodzenie` · `proweniencja` · `wybór` · `rytuał` · `rękojmia` · `wyjątkowy` · `skrojony` · `weryfikacja` · `kolekcja` · `koneser` · `klient`

**Typografia w copy:**
- Liczby cyframi (3, nie *trzy*)
- Lata: `2024` lub `MMXXIV` (editorialowo)
- Ceny: spacje thin między cyframi tysięcy `1 850 000 PLN`
- Nazwy modeli: pełne, oryginalne (`Range Rover SV Carmel Edition`, nie tłumaczyć)

---

## 01. HERO — 3 warianty per brand

### Velure

#### V1 (primary, recommended)
```
Headline:  Aksamit. Moc. Dyskrecja.
Sub:       Prywatny broker aut super-luxury. Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia.
CTA-1:     Umów rozmowę
CTA-2:     Zobacz kolekcję
```

#### V2 (alternate, editorialowy)
```
Headline:  Tam, gdzie prędkość ma fakturę.
Sub:       Auta, których nie zobaczysz w salonie. Sprowadzane na zamówienie. Weryfikowane w 11 punktach.
CTA-1:     Rozpocznij poszukiwanie
CTA-2:     Manifest
```

#### V3 (intl, EN signature)
```
Headline:  Velvet at velocity.
Sub:       A private brokerage for cars 300k-3M PLN. Sourced from Poland, Italy, Germany, Switzerland, Dubai, Japan.
CTA-1:     Book a consultation
CTA-2:     View collection
```

### Atelier 11

#### A1 (primary, recommended — pozostawione z poprzedniej iteracji)
```
Headline:  Auto skrojone na miarę.
Sub:       11 punktów weryfikacji. 11 marek partnerskich. 11 dni do garażu.
CTA-1:     Umów konsultację
CTA-2:     Zobacz 11 punktów
```

#### A2 (alternate, operacyjny)
```
Headline:  11 punktów. Zero kompromisów.
Sub:       Sprowadzamy auta super-luxury z Polski, Włoch, Niemiec, Szwajcarii, Dubaju i Japonii. Każde sprawdzone w 11 punktach przed dostawą.
CTA-1:     Rozpocznij konsultację
CTA-2:     Sprawdź 11 punktów
```

#### A3 (manifestowy)
```
Headline:  Krawiec. Mechanik. Concierge.
Sub:       Trzy role. Jeden klient. Jedno auto, którego szukasz od lat.
CTA-1:     Umów spotkanie
CTA-2:     Poznaj zespół
```

**Telefon w nav (zawsze widoczny):** `+48 XXX XXX XXX` (placeholder do otrzymania od klienta)

---

## 02. MANIFEST (60-80 słów)

### Velure

> Nie jesteśmy salonem. Nie jesteśmy giełdą. Jesteśmy prywatnym brokerem dla tych, dla których auto jest tym, czym zegarek mechaniczny, jachta dwumasztowa albo butelka 1982 Pétrus — przedmiotem, do którego się dorasta. Polujemy w Polsce, we Włoszech, w Niemczech, w Szwajcarii, w Dubaju i w Japonii. Sprawdzamy. Negocjujemy. Dostarczamy. Z zachowaniem ciszy, która kosztuje.

### Atelier 11

> Nie sprzedajemy każdemu. Wybieramy klientów tak, jak krawiec wybiera klientów: dla relacji, dla powtarzalności, dla wzajemnego szacunku. Każde auto przechodzi przez 11 punktów weryfikacji — mechanika, dokumenty, proweniencja, historia kolizji, oryginalność lakieru, numery silnika, prawo własności, status leasingowy, hipoteka, brak zastawów, zgodność VIN. Bez tych 11 punktów nie dostarczamy. To nasza rękojmia.

---

## 03. VALUE PROPS (4 bullets)

### Wspólne (per brand różnice w intro tylko)

| Filar | Headline | Sub (16-24 słów) |
|-------|----------|-----------------|
| Kuracja | **Kolekcja, nie magazyn** | Mniej niż 30 aut w portfolio w danej chwili. Każde wybrane osobiście. Brak inventory dla samego inventory. |
| Dyskrecja | **NDA standardem** | Nie ujawniamy klientów, transakcji ani źródeł. Każda umowa zawiera klauzulę poufności. Pseudonimizacja w komunikacji. |
| Pochodzenie | **Sześć krajów. Jedna decyzja.** | Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia. Wybieramy źródło dla każdego auta osobno. |
| Czas | **[V]:** *Decyzja w 48 godzin. Auto w 11 dni.* **[A11]:** *11 dni od decyzji do garażu.* | Od pierwszej rozmowy do kluczyków: średnio 11 dni dla aut na stanie partnerskim, 4-8 tygodni dla importu. |

---

## 04. JAK DZIAŁAMY (4 kroki)

| Krok | Tytuł | Opis (20-30 słów) |
|------|-------|-------------------|
| 01 | **Konsultacja** | Rozmawiamy o tym, czego szukasz. Marka, model, rok, kolor, opcje. Budżet. Czas. Sprawdzamy, czy dobrze się zrozumiemy. |
| 02 | **Polowanie** | Uruchamiamy sieć: salony partnerskie w Polsce, brokerzy w Mediolanie, Monachium, Genewie, Dubaju, Tokio. Prezentujemy 3 propozycje w 7 dni. |
| 03 | **Weryfikacja 11/11** | Mechanika · dokumenty · proweniencja · historia kolizji · oryginalność lakieru · numery silnika · prawo własności · leasing · hipoteka · zastawy · VIN. Bez kompletu — nie dostarczamy. |
| 04 | **Dostawa** | Transport zamknięty, ubezpieczony. Rejestracja, ubezpieczenie, ewentualny transfer leasingowy. Auto pod drzwi w 11 dni od decyzji. |

---

## 05. KOLEKCJA (inventory teaser)

### Intro (oba brandy)
> Wybrane auta dostępne w tym tygodniu. Pełna kolekcja w prywatnej strefie klienta.

### 3 placeholder cards (dla MVP hero):

**Card 1**
```
Image:     [placeholder — Ferrari 296 GTB dark studio shot]
Marka:     FERRARI
Model:     296 GTB Assetto Fiorano
Rok:       2024
Przebieg:  2 947 km
Origin:    🇮🇹 Maranello
Cena:      Cena na zapytanie
Badge:     WERYFIKACJA 11/11
```

**Card 2**
```
Image:     [placeholder — Range Rover SV white outdoor]
Marka:     LAND ROVER
Model:     Range Rover SV Carmel Edition
Rok:       2024
Przebieg:  4 102 km
Origin:    🇬🇧 Solihull
Cena:      1 850 000 PLN
Badge:     WERYFIKACJA 11/11
```

**Card 3**
```
Image:     [placeholder — Porsche 911 GT3 RS grey side]
Marka:     PORSCHE
Model:     911 GT3 RS Weissach
Rok:       2024
Przebieg:  3 410 km
Origin:    🇩🇪 Stuttgart
Cena:      Cena na zapytanie
Badge:     WERYFIKACJA 11/11
```

---

## 06. AI CONCIERGE

### Velure
**Headline:** *Twój doradca. Zawsze pod ręką.*
**Sub:** *Rozmawiaj z naszym asystentem o aucie, którego szukasz. W każdej porze dnia i nocy.*

**Example dialog (4 lines):**
```
Asystent: Dobry wieczór. Jakie auto pojawiło się w Pana myślach?
Klient:   Szukam 911 GT3 RS, najlepiej 2024, z Weissach Package.
Asystent: Mamy dwa egzemplarze w sieci partnerskiej — jeden w Stuttgarcie,
          jeden u kolekcjonera w Lucernie. Czy chciałby Pan szczegóły?
Klient:   Tak, plus orientacyjny widełki cenowe.
```

**CTA:** *Zacznij rozmowę*

### Atelier 11
**Headline:** *Asystent 11. Pierwszy kontakt.*
**Sub:** *Opowiedz, czego szukasz. Asystent zawęzi wybór do 3 propozycji. Brokerzy przejmują kontakt w 24 godziny.*

**Example dialog (4 lines):**
```
Asystent 11: Witam. Jakie auto Pana interesuje?
Klient:      Szukam Aston Martin DBS 770 Ultimate, importowanego.
Asystent 11: Mamy jedno auto na stanie partnerskim w Polsce
             oraz dwie opcje importu z Wielkiej Brytanii i Włoch.
             Przesłać szczegółowe specyfikacje?
Klient:      Tak, plus terminy dostawy.
```

**CTA:** *Rozpocznij rozmowę*

**Disclosure (oba brandy):** *Rozmawiasz z asystentem AI. W każdej chwili możesz przejść do brokera-człowieka.*

---

## 07. O NAS (120 słów)

### Velure

> Velure powstał z prostej obserwacji: w Polsce nie ma brokera, który traktuje aukcję Ferrari w Maranello, kolekcjonera w Lucernie i salon w Warszawie jako jeden ekosystem. Łączymy te trzy światy. Dwadzieścia lat doświadczenia w segmencie premium, sieć partnerów w sześciu krajach, AI-first approach w wyszukiwaniu i weryfikacji. Pracujemy z klientami, dla których auto jest narzędziem statusu, kolekcją lub po prostu długo wyczekiwaną decyzją. Nie sprzedajemy każdemu — wybieramy klientów, z którymi chcemy zbudować relację na lata. Velure to nie salon, nie giełda i nie marketplace. To prywatny broker. Jedyna rzecz, którą obiecujemy: aksamit, moc i dyskrecja.

### Atelier 11

> Atelier 11 powstał z przekonania, że klient w segmencie 300k-3M PLN zasługuje na to samo, co klient krawca w Savile Row: zaufanie, transparencję i powtarzalność. Dwadzieścia lat w branży, sieć partnerów w sześciu krajach, własna metodologia 11-punktowej weryfikacji. Każdy klient pracuje z dedykowanym concierge'em. Każde auto przechodzi 11 punktów kontroli przed dostawą — bez tego nie wsiadasz. Bo Atelier 11 nie jest salonem ani marketplace'em. To warsztat krawiecki dla aut. Sprowadzamy, sprawdzamy, dostarczamy. W 11 dni. Pod twoje drzwi. Bez wykrętów i bez kompromisów.

---

## 08. USŁUGI (4 bloki)

### Blok 1: Broker
**Tytuł:** **Broker**
**Sub-headline:** *Znajdziemy auto, którego nie ma w żadnym salonie.*
**Body (40 słów):** Sieć 50+ salonów partnerskich w Polsce + brokerów w Mediolanie, Monachium, Genewie, Dubaju i Tokio. Dostęp do pre-order priority. Auta off-market przed publikacją. Negocjacje w twoim imieniu. Fee transparentne, ustalane na początku.

### Blok 2: Import
**Tytuł:** **Import (DE · IT · CH · AE · JP)**
**Sub-headline:** *Sprowadzimy auto z dowolnego rynku. Z dokumentami, na kołach, do garażu.*
**Body (40 słów):** Pełna obsługa importu: weryfikacja na miejscu, transport zamknięty, odprawa celna, rejestracja w PL, ubezpieczenie tranzytowe. Dokumentacja w Twoim języku. Z DE/IT/CH bez VAT (jeśli kwalifikuje się), z UAE/JP pełna obsługa cła + akcyzy.

### Blok 3: Wycena
**Tytuł:** **Wycena**
**Sub-headline:** *Sprawdzimy, ile warte jest twoje auto. W 48 godzin.*
**Body (40 słów):** Inżynierowie + AI Vision analizują zdjęcia, VIN, historię i raporty serwisowe. Wycena dwustronna: rynek hurtowy (skup) i rynek detaliczny (sprzedaż). Bez zobowiązań. Bez "okazji". Jeśli zdecydujesz się sprzedać przez nas — bierzemy 3%.

### Blok 4: Trade-in
**Tytuł:** **Trade-in**
**Sub-headline:** *Zamień obecne auto na nowe. Bez handlowego targowania się.*
**Body (40 słów):** Wycena Twojego auta w 48 godzin (patrz: Wycena). Odbiór z Twojej posesji. Rozliczenie częścią ceny nowego auta. Pełna obsługa formalności, transferu leasingu, ewentualnej hipoteki bankowej.

---

## 09. ZAUFANIE (trust signals)

### Velure
**Headline:** *Liczby, które nie krzyczą.*
**Stats (4 elementy):**
- **20+ lat** w segmencie premium
- **6 krajów** w sieci partnerskiej
- **11 punktów** weryfikacji każdego auta
- **0** ujawnionych transakcji w prasie

**Press / partner logos:** (placeholder, do dostarczenia przez klienta)

### Atelier 11
**Headline:** *Liczby, które mówią same za siebie.*
**Stats (4 elementy):**
- **20+ lat** w segmencie premium
- **50+ salonów** partnerskich w Polsce
- **6 krajów** w sieci międzynarodowej
- **11/11** punktów weryfikacji standard

**Section number:** `— 09 —` (Atelier 11 only)

---

## 10. FAQ (8 pytań, HNWI-grade)

### 1. Czy moje dane i transakcja pozostają poufne?
**Odpowiedź:** Tak. Każda relacja chroniona NDA dwustronnym. Komunikacja pseudonimizowana w CRM. Nie ujawniamy tożsamości klientów, źródeł aut ani struktur cenowych. Standardy GDPR Tier-1.

### 2. Jak długo trwa proces od decyzji do dostawy?
**Odpowiedź:** Dla aut na stanie partnerskim: **11 dni**. Dla importu z DE/IT/CH: **4-6 tygodni**. Dla importu z UAE/JP: **6-12 tygodni** (z uwagi na logistykę morską i odprawę celną).

### 3. Z jakich rynków sprowadzacie auta?
**Odpowiedź:** Polska (salony partnerskie + auta off-market), Włochy (Mediolan, Maranello, Modena), Niemcy (Stuttgart, Monachium, Frankfurt), Szwajcaria (Genewa, Zurych, Lucerna), ZEA (Dubaj), Japonia (Tokio, Osaka).

### 4. Czy oferujecie finansowanie lub leasing?
**Odpowiedź:** Tak. Współpracujemy z trzema bankami private banking i dwoma firmami leasingowymi specjalizującymi się w segmencie powyżej 500k PLN. Finansowanie do 80% wartości auta, marża indywidualna.

### 5. Co obejmuje weryfikacja 11/11?
**Odpowiedź:** Mechanika, dokumenty, proweniencja, historia kolizji, oryginalność lakieru (grubościomierz), numery silnika/podwozia, prawo własności, status leasingowy, hipoteka, zastawy/zajęcia, zgodność VIN z dokumentami fabryki. Pełny raport w PDF.

### 6. Czy mogę przyjechać i obejrzeć auto przed zakupem?
**Odpowiedź:** Oczywiście. Auta na stanie partnerskim oglądasz w salonach naszych partnerów. Auta importowane — w lokacji docelowej (Mediolan, Stuttgart itp.) lub po dostawie do Polski, przed finalizacją płatności.

### 7. Co jeśli auto okaże się niezgodne ze specyfikacją?
**Odpowiedź:** Rękojmia 12 miesięcy. Jeśli wykryjemy niezgodność po zakupie — pełny zwrot lub korekta na nasz koszt (np. dokumenty, transport zwrotny, różnica wyceny). To dlatego sprawdzamy w 11 punktach przed dostawą.

### 8. Czy transakcja może pozostać anonimowa?
**Odpowiedź:** Tak, do granicy prawa polskiego. Auto może być zarejestrowane na spółkę celową, fundację rodzinną lub fundusz powierniczy. Pomożemy w doborze struktury — współpracujemy z 4 kancelariami prawnymi specjalizującymi się w wealth management.

---

## 11. KONTAKT

**Headline [V]:** *Porozmawiajmy.*
**Headline [A11]:** *Umów konsultację.*

**Sub:** *Concierge dostępny 24/7. Odpowiadamy w pierwszej godzinie.*

**Kanały (kolejność po priorytecie):**
1. **Telefon:** `+48 XXX XXX XXX` (placeholder)
2. **WhatsApp:** kliknij, aby otworzyć
3. **Email:** *kontakt@[velure|atelier11].pl* (placeholder)
4. **Spotkanie:** *Umów slot przez kalendarz* → Cal.com (placeholder)

**Formularz (drugorzędny, jeśli wolisz pisać):**
```
Imię:                [____________]
Telefon:             [____________]
Email:               [____________]
Marka / model / rok: [____________]
Budżet:              [____________]
Wiadomość:           [____________]

[Umów konsultację]

* Wysyłając zgadzasz się na kontakt zwrotny w celu obsługi zapytania.
  Pełna polityka prywatności: [link]
```

---

## 12. FOOTER

```
[V|A11] Logo                                              kontakt@[brand].pl
                                                          +48 XXX XXX XXX
                                                          IG · LinkedIn · X

KOLEKCJA          USŁUGI           O NAS                  PRAWNE
Wszystkie auta    Broker           Manifest               Polityka prywatności
Ferrari           Import           Zespół                 Regulamin
Porsche           Wycena           Kariera                Rękojmia
Range Rover       Trade-in         Prasa                  Cookies
[...więcej]                        Dziennik               Mapa strony

— ©  2026 [Velure | Atelier 11] · Wszystkie prawa zastrzeżone · NIP PL XXXXXXXXXX · KRS XXXXXXXX —
```

**Note do brand:**
- [V] Footer: jeden cienki gold hairline na górze, statement *Velvet at velocity.* w prawym dolnym rogu.
- [A11] Footer: 3-kolumnowy strukturalny, hairline z sectionnumber `— 12 —`, NIP/KRS bold-visible (B2B trust).

---

## 13. MICROCOPY BANK

### Buttons
| Funkcja | Velure | Atelier 11 |
|---------|--------|-----------|
| Primary CTA hero | *Umów rozmowę* | *Umów konsultację* |
| Secondary CTA hero | *Zobacz kolekcję* | *Zobacz 11 punktów* |
| Inquiry card | *Zapytaj o auto* | *Sprawdź szczegóły* |
| Inquiry submit | *Wyślij zapytanie* | *Wyślij* |
| Newsletter | *Dołącz do listy* | *Zapisz się* |
| Concierge open | *Zacznij rozmowę* | *Rozpocznij rozmowę* |
| Phone (mobile) | *Zadzwoń* | *Zadzwoń* |

### Form placeholders
| Pole | Placeholder |
|------|-------------|
| Imię | `Imię (opcjonalnie)` |
| Telefon | `+48 …` |
| Email | `Twój email` |
| Auto | `Marka, model, rok` |
| Budżet | `Orientacyjny budżet w PLN` |
| Wiadomość | `Opisz, czego szukasz` |

### Error states
- `Telefon jest wymagany.` (nie *Pole obowiązkowe!* — bez wykrzyknika)
- `Sprawdź format adresu email.`
- `Coś poszło nie tak. Spróbuj ponownie za chwilę lub zadzwoń.`

### Empty states
- Kolekcja pusta: *Aktualnie nie mamy aut spełniających te kryteria. Powiadomimy Cię, gdy się pojawi.*
- Brak wyników wyszukiwania: *Brak wyników. Spróbuj zmienić filtry lub powiedz nam, czego szukasz.*

### Loading states
- *Polujemy...* (jeden dot animation, gold)

### Success states
- `Otrzymaliśmy. Skontaktujemy się w pierwszej godzinie.`
- `Zapisano. Dziękujemy za zaufanie.`

### Concierge AI disclosure (zawsze widoczne na start dialogu)
> *Rozmawiasz z asystentem AI. W każdej chwili możesz przejść do brokera-człowieka — wystarczy napisać "broker".*

### Cookie banner
**Headline:** *Cookies.*
**Body:** *Używamy cookies do analizy ruchu i poprawy doświadczenia. Bez nich strona też działa.*
**Buttons:** *Akceptuję* · *Tylko niezbędne* · *Ustawienia*

### 404 page
**Headline [V]:** *Stracony ślad.*
**Body [V]:** *Strona, której szukasz, nie istnieje. Wróć do kolekcji — może auto, którego szukasz, tam jest.*
**Headline [A11]:** *Brak strony.*
**Body [A11]:** *Strona o tym adresie nie istnieje. Sprawdź adres lub wróć na stronę główną.*

---

## Notes do redakcji

- **Polski język dominuje** — nazwy modeli zostają w oryginale.
- **Bez emoji** poza flagami krajów w kartach origin (🇮🇹 🇩🇪 🇨🇭 🇦🇪 🇯🇵 🇵🇱 🇬🇧). To jedyne dozwolone emoji.
- **Nigdy** nie pisać "kliknij" — używać akcyjnych czasowników (*umów*, *zobacz*, *sprawdź*, *zacznij*).
- **Velure** = italics OK, editorialowy. **Atelier 11** = nigdy italics w nagłówkach, tylko w sub-copy.
- Plik mirroruje się z `lib/copy.ts` — przy zmianach UPDATE obu plików.
