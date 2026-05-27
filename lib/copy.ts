/**
 * Single source of truth for site copy — Velure brand only.
 * Mirrors docs/copy/site-pl.md (Velure variants).
 * Update both files in sync.
 */

export type HeroCopy = {
  headlineLines: string[];   // 3 stacked lines
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  capitals: string;
};

export const hero: HeroCopy = {
  headlineLines: ["Aksamit.", "Moc.", "Dyskrecja."],
  sub: "Prywatny broker aut super-luxury. Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia.",
  ctaPrimary: "Umów rozmowę",
  ctaSecondary: "Zobacz kolekcję",
  capitals: "Polska · Włochy · Niemcy · Szwajcaria · ZEA · Japonia",
};

export const manifest =
  "Nie jesteśmy salonem. Nie jesteśmy giełdą. Jesteśmy prywatnym brokerem dla tych, dla których auto jest tym, czym zegarek mechaniczny, jachta dwumasztowa albo butelka 1982 Pétrus — przedmiotem, do którego się dorasta. Polujemy w Polsce, we Włoszech, w Niemczech, w Szwajcarii, w Dubaju i w Japonii. Sprawdzamy. Negocjujemy. Dostarczamy. Z zachowaniem ciszy, która kosztuje.";

export type ValueProp = {
  title: string;
  body: string;
};

export const valueProps: ValueProp[] = [
  {
    title: "Kolekcja, nie magazyn",
    body: "Mniej niż 30 aut w portfolio w danej chwili. Każde wybrane osobiście. Brak inventory dla samego inventory.",
  },
  {
    title: "NDA standardem",
    body: "Nie ujawniamy klientów, transakcji ani źródeł. Każda umowa zawiera klauzulę poufności. Pseudonimizacja w komunikacji.",
  },
  {
    title: "Sześć krajów. Jedna decyzja.",
    body: "Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia. Wybieramy źródło dla każdego auta osobno.",
  },
  {
    title: "Decyzja w 48h. Auto w 11 dni.",
    body: "Od pierwszej rozmowy do kluczyków: średnio 11 dni dla aut na stanie partnerskim, 4-8 tygodni dla importu.",
  },
];

export type Step = {
  num: string;
  title: string;
  body: string;
};

export const howItWorks: Step[] = [
  {
    num: "01",
    title: "Konsultacja",
    body: "Rozmawiamy o tym, czego szukasz. Marka, model, rok, kolor, opcje. Budżet. Czas. Sprawdzamy, czy dobrze się zrozumiemy.",
  },
  {
    num: "02",
    title: "Polowanie",
    body: "Uruchamiamy sieć: salony partnerskie w Polsce, brokerzy w Mediolanie, Monachium, Genewie, Dubaju, Tokio. Prezentujemy 3 propozycje w 7 dni.",
  },
  {
    num: "03",
    title: "Weryfikacja 11/11",
    body: "Mechanika · dokumenty · proweniencja · historia kolizji · lakier · numery silnika · własność · leasing · hipoteka · zastawy · VIN. Bez kompletu — nie dostarczamy.",
  },
  {
    num: "04",
    title: "Dostawa",
    body: "Transport zamknięty, ubezpieczony. Rejestracja, ubezpieczenie, ewentualny transfer leasingowy. Auto pod drzwi w 11 dni od decyzji.",
  },
];

export type InventoryCard = {
  slug: string;
  marka: string;
  model: string;
  rok: number;
  przebieg: number;
  origin: "PL" | "IT" | "DE" | "CH" | "AE" | "JP" | "GB";
  cena: number | null;
  image: string;
  imageAlt: string;
  verified: boolean;
};

export const inventoryTeaser: InventoryCard[] = [
  {
    slug: "ferrari-296-gtb-assetto-fiorano-2024",
    marka: "FERRARI",
    model: "296 GTB Assetto Fiorano",
    rok: 2024,
    przebieg: 2947,
    origin: "IT",
    cena: null,
    image: "/placeholders/dev/ferrari-mood.jpg",
    imageAlt: "/placeholders/dev/sports-car-night.jpg",
    verified: true,
  },
  {
    slug: "range-rover-sv-carmel-edition-2024",
    marka: "LAND ROVER",
    model: "Range Rover SV Carmel Edition",
    rok: 2024,
    przebieg: 4102,
    origin: "GB",
    cena: 1850000,
    image: "/placeholders/dev/range-rover.jpg",
    imageAlt: "/placeholders/dev/garage-mood.jpg",
    verified: true,
  },
  {
    slug: "porsche-911-gt3-rs-weissach-2024",
    marka: "PORSCHE",
    model: "911 GT3 RS Weissach Package",
    rok: 2024,
    przebieg: 3410,
    origin: "DE",
    cena: null,
    image: "/placeholders/dev/bmw-m.jpg",
    imageAlt: "/placeholders/dev/car-dramatic.jpg",
    verified: true,
  },
  {
    slug: "lamborghini-revuelto-2024",
    marka: "LAMBORGHINI",
    model: "Revuelto LP 1001-4 HPEV",
    rok: 2024,
    przebieg: 1280,
    origin: "IT",
    cena: null,
    image: "/placeholders/dev/lambo.jpg",
    imageAlt: "/placeholders/dev/mclaren.jpg",
    verified: true,
  },
  {
    slug: "aston-martin-dbs-770-ultimate-2024",
    marka: "ASTON MARTIN",
    model: "DBS 770 Ultimate Coupe",
    rok: 2024,
    przebieg: 5210,
    origin: "GB",
    cena: 2450000,
    image: "/placeholders/dev/aston.jpg",
    imageAlt: "/placeholders/dev/ferrari-mood.jpg",
    verified: true,
  },
  {
    slug: "bentley-continental-gt-speed-2024",
    marka: "BENTLEY",
    model: "Continental GT Speed Mulliner",
    rok: 2024,
    przebieg: 6750,
    origin: "CH",
    cena: 1690000,
    image: "/placeholders/dev/bentley.jpg",
    imageAlt: "/placeholders/dev/interior-leather.jpg",
    verified: true,
  },
];

export type Service = {
  title: string;
  subhead: string;
  body: string;
};

export const services: Service[] = [
  {
    title: "Broker",
    subhead: "Znajdziemy auto, którego nie ma w żadnym salonie.",
    body: "Sieć 50+ salonów partnerskich w Polsce + brokerów w Mediolanie, Monachium, Genewie, Dubaju i Tokio. Dostęp do pre-order priority. Auta off-market przed publikacją. Negocjacje w twoim imieniu. Fee transparentne, ustalane na początku.",
  },
  {
    title: "Import (DE · IT · CH · AE · JP)",
    subhead: "Sprowadzimy auto z dowolnego rynku. Z dokumentami, na kołach, do garażu.",
    body: "Pełna obsługa importu: weryfikacja na miejscu, transport zamknięty, odprawa celna, rejestracja w PL, ubezpieczenie tranzytowe. Dokumentacja w Twoim języku. Z DE/IT/CH bez VAT (jeśli kwalifikuje się), z UAE/JP pełna obsługa cła + akcyzy.",
  },
];

export type SellOption = {
  title: string;
  subhead: string;
  body: string;
};

export const sellYourCar = {
  caption: "— 08 · Sprzedaj swoje auto",
  title: "Twoje auto. Cztery drogi do nowego właściciela.",
  intro:
    "Jesteśmy także miejscem, w którym kończą się dobre historie ośmiu cylindrów i zaczynają nowe. Wybierz drogę — resztą zajmiemy się my.",
  options: [
    {
      title: "Skup za gotówkę",
      subhead: "Płacimy w 72 godzinach. Bez ogłoszeń, bez oglądających.",
      body: "Wycena dwustronna w 48h (hurt + detal). Akceptacja oferty = przelew w 72h, transport zamknięty, my przejmujemy formalności i ewentualny transfer leasingu. Ścieżka dla klienta, który ceni czas nad maksymalną wartość.",
    },
    {
      title: "Zamiana z dopłatą",
      subhead: "Wjeżdżasz jednym autem. Wyjeżdżasz drugim.",
      body: "Twoje obecne auto wchodzi jako część zapłaty za auto, którego szukasz. Wycena Twojego — w 48h. Wycena docelowego — natychmiast. Rozliczenie różnicy: gotówka, leasing albo kredyt private banking. Jeden kontrakt, jedna data.",
    },
    {
      title: "Sprzedaż pre-order",
      subhead:
        "Masz allocation u Ferrari, Lambo albo Porsche GT? Znajdziemy nabywcę zanim odbierzesz auto.",
      body: "Cesja slotu pre-order dla osób, które nie chcą trzymać auta po odbiorze. Działamy w sieci HNWI w sześciu stolicach — Twoja allocation trafia do kolekcjonera, który rok czekania ma już za sobą. Pełna obsługa prawna cesji, transferu zaliczki, finalnej transakcji.",
    },
    {
      title: "Sprzedaż z prowizją",
      subhead: "Sprzedajemy Twoje auto w naszej sieci. Marża 3% od ustalonej ceny.",
      body: "Auto zostaje u Ciebie albo w naszym depozycie. Eksponujemy je dyskretnie wśród klientów w PL, IT, DE, CH, AE i JP. Transparentna prowizja 3% od zatwierdzonej ceny — wypłacana po podpisaniu kontraktu. Bez exclusive listingu, bez ujawniania w prasie.",
    },
  ] as SellOption[],
  ctaCaption: "Niezdecydowany? Zacznij od krótkiej rozmowy.",
  ctaPrimary: "Zapytaj o wycenę",
  ctaSecondary: "+48 600 000 000",
};

export type Stat = {
  number: string;
  label: string;
};

export const trust = {
  headline: "Liczby, które nie krzyczą.",
  stats: [
    { number: "20+", label: "Lat w segmencie premium" },
    { number: "6", label: "Krajów w sieci partnerskiej" },
    { number: "11", label: "Punktów weryfikacji każdego auta" },
    { number: "0", label: "Ujawnionych transakcji w prasie" },
  ] as Stat[],
};

export const concierge = {
  headline: "Twój doradca. Zawsze pod ręką.",
  sub: "Rozmawiaj z naszym asystentem o aucie, którego szukasz. W każdej porze dnia i nocy.",
  dialog: [
    "Asystent: Dobry wieczór. Jakie auto pojawiło się w Pana myślach?",
    "Klient: Szukam 911 GT3 RS, najlepiej 2024, z Weissach Package.",
    "Asystent: Mamy dwa egzemplarze w sieci partnerskiej — jeden w Stuttgarcie, jeden u kolekcjonera w Lucernie.",
    "Klient: Poproszę szczegóły obu, plus orientacyjne widełki cenowe.",
  ],
  cta: "Zacznij rozmowę",
};

export type City = {
  code: "PL" | "IT" | "DE" | "CH" | "AE" | "JP";
  name: string;
  country: string;
  note: string;
  x: number;  // SVG viewBox 1000x500 — pin position
  y: number;
};

export const sixCapitals = {
  caption: "Sześć stolic. Jedna sieć.",
  title: "Polujemy tam, gdzie mieszkają najlepsze auta.",
  intro: "Warszawa, Mediolan, Stuttgart, Genewa, Dubaj, Tokio. Sześć rynków, jedna baza wiedzy, jeden numer telefonu.",
  cities: [
    {
      code: "PL",
      name: "Warszawa",
      country: "Polska",
      note: "Sieć 50+ salonów partnerskich oraz aukcje off-market dla aut zarejestrowanych w PL.",
      x: 545,
      y: 175,
    },
    {
      code: "IT",
      name: "Mediolan · Maranello",
      country: "Włochy",
      note: "Brokerzy lokalni dla Ferrari, Lamborghini, Pagani, Maserati. Pre-order priority w Maranello.",
      x: 510,
      y: 235,
    },
    {
      code: "DE",
      name: "Stuttgart · Monachium",
      country: "Niemcy",
      note: "Porsche, Mercedes-AMG, BMW M Performance, Audi RS. Pełen rynek wtórny + auta autoryzowane.",
      x: 510,
      y: 195,
    },
    {
      code: "CH",
      name: "Genewa · Lucerna",
      country: "Szwajcaria",
      note: "Prywatne kolekcje + auta po brand experiences. Auta bez VAT, neutralna jurysdykcja.",
      x: 495,
      y: 220,
    },
    {
      code: "AE",
      name: "Dubaj",
      country: "Zjednoczone Emiraty",
      note: "Hyper-luxury market — McLaren, Bugatti, Rolls-Royce. Auta limited edition o niskim przebiegu.",
      x: 660,
      y: 275,
    },
    {
      code: "JP",
      name: "Tokio · Osaka",
      country: "Japonia",
      note: "JDM exotics, Nismo, Lexus LFA secondary market. Auta zachowane w stanie kolekcjonerskim.",
      x: 870,
      y: 240,
    },
  ] as City[],
};

export const contact = {
  headline: "Porozmawiajmy.",
  sub: "Concierge dostępny 24/7. Odpowiadamy w pierwszej godzinie.",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+48 600 000 000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@velure.pl",
};

export const nav = {
  links: [
    { href: "/kolekcja", label: "Kolekcja" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/o-nas", label: "O nas" },
    { href: "/dziennik", label: "Dziennik" },
    { href: "/kontakt", label: "Kontakt" },
  ],
};

export const footer = {
  tagline: "Velvet at velocity.",
};

export const microcopy = {
  ctaInquiry: "Zapytaj o auto",
  ctaCallMobile: "Zadzwoń",
  emptyCollection:
    "Aktualnie nie mamy aut spełniających te kryteria. Powiadomimy Cię, gdy się pojawi.",
  conciergeDisclosure:
    'Rozmawiasz z asystentem AI. W każdej chwili możesz przejść do brokera-człowieka — wystarczy napisać "broker".',
};

export const flagEmoji: Record<InventoryCard["origin"], string> = {
  PL: "🇵🇱",
  IT: "🇮🇹",
  DE: "🇩🇪",
  CH: "🇨🇭",
  AE: "🇦🇪",
  JP: "🇯🇵",
  GB: "🇬🇧",
};
