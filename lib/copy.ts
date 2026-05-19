/**
 * Single source of truth for site copy.
 * Mirrors docs/copy/site-pl.md. Update both files in sync.
 *
 * Convention: brand-specific variants in objects keyed by Theme.
 */

import type { Theme } from "./theme";

export type HeroVariant = {
  headline: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const hero: Record<Theme, HeroVariant> = {
  velure: {
    headline: "Aksamit. Moc. Dyskrecja.",
    sub: "Prywatny broker aut super-luxury. Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia.",
    ctaPrimary: "Umów rozmowę",
    ctaSecondary: "Zobacz kolekcję",
  },
  "atelier-11": {
    headline: "Auto skrojone na miarę.",
    sub: "11 punktów weryfikacji. 11 marek partnerskich. 11 dni do garażu.",
    ctaPrimary: "Umów konsultację",
    ctaSecondary: "Zobacz 11 punktów",
  },
};

export const manifest: Record<Theme, string> = {
  velure:
    "Nie jesteśmy salonem. Nie jesteśmy giełdą. Jesteśmy prywatnym brokerem dla tych, dla których auto jest tym, czym zegarek mechaniczny, jachta dwumasztowa albo butelka 1982 Pétrus — przedmiotem, do którego się dorasta. Polujemy w Polsce, we Włoszech, w Niemczech, w Szwajcarii, w Dubaju i w Japonii. Sprawdzamy. Negocjujemy. Dostarczamy. Z zachowaniem ciszy, która kosztuje.",
  "atelier-11":
    "Nie sprzedajemy każdemu. Wybieramy klientów tak, jak krawiec wybiera klientów: dla relacji, dla powtarzalności, dla wzajemnego szacunku. Każde auto przechodzi przez 11 punktów weryfikacji — mechanika, dokumenty, proweniencja, historia kolizji, oryginalność lakieru, numery silnika, prawo własności, status leasingowy, hipoteka, brak zastawów, zgodność VIN. Bez tych 11 punktów nie dostarczamy. To nasza rękojmia.",
};

export type ValueProp = {
  title: string;
  body: string;
};

export const valueProps: Record<Theme, ValueProp[]> = {
  velure: [
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
  ],
  "atelier-11": [
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
      title: "11 dni od decyzji do garażu.",
      body: "Od pierwszej rozmowy do kluczyków: średnio 11 dni dla aut na stanie partnerskim, 4-8 tygodni dla importu.",
    },
  ],
};

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
    image: "/placeholders/velure/card-ferrari.webp",
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
    image: "/placeholders/velure/card-range-rover.webp",
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
    image: "/placeholders/velure/card-porsche.webp",
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
  {
    title: "Wycena",
    subhead: "Sprawdzimy, ile warte jest twoje auto. W 48 godzin.",
    body: "Inżynierowie + AI Vision analizują zdjęcia, VIN, historię i raporty serwisowe. Wycena dwustronna: rynek hurtowy (skup) i rynek detaliczny (sprzedaż). Bez zobowiązań. Jeśli zdecydujesz się sprzedać przez nas — bierzemy 3%.",
  },
  {
    title: "Trade-in",
    subhead: "Zamień obecne auto na nowe. Bez handlowego targowania się.",
    body: "Wycena Twojego auta w 48 godzin. Odbiór z Twojej posesji. Rozliczenie częścią ceny nowego auta. Pełna obsługa formalności, transferu leasingu, ewentualnej hipoteki bankowej.",
  },
];

export type Stat = {
  number: string;
  label: string;
};

export const trust: Record<Theme, { headline: string; stats: Stat[] }> = {
  velure: {
    headline: "Liczby, które nie krzyczą.",
    stats: [
      { number: "20+", label: "Lat w segmencie premium" },
      { number: "6", label: "Krajów w sieci partnerskiej" },
      { number: "11", label: "Punktów weryfikacji każdego auta" },
      { number: "0", label: "Ujawnionych transakcji w prasie" },
    ],
  },
  "atelier-11": {
    headline: "Liczby, które mówią same za siebie.",
    stats: [
      { number: "20+", label: "Lat w segmencie premium" },
      { number: "50+", label: "Salonów partnerskich w Polsce" },
      { number: "6", label: "Krajów w sieci międzynarodowej" },
      { number: "11/11", label: "Punktów weryfikacji standard" },
    ],
  },
};

export const concierge: Record<
  Theme,
  { headline: string; sub: string; dialog: string[]; cta: string }
> = {
  velure: {
    headline: "Twój doradca. Zawsze pod ręką.",
    sub: "Rozmawiaj z naszym asystentem o aucie, którego szukasz. W każdej porze dnia i nocy.",
    dialog: [
      "Asystent: Dobry wieczór. Jakie auto pojawiło się w Pana myślach?",
      "Klient: Szukam 911 GT3 RS, najlepiej 2024, z Weissach Package.",
      "Asystent: Mamy dwa egzemplarze w sieci partnerskiej — jeden w Stuttgarcie, jeden u kolekcjonera w Lucernie.",
      "Klient: Poproszę szczegóły obu, plus orientacyjne widełki cenowe.",
    ],
    cta: "Zacznij rozmowę",
  },
  "atelier-11": {
    headline: "Asystent 11. Pierwszy kontakt.",
    sub: "Opowiedz, czego szukasz. Asystent zawęzi wybór do 3 propozycji. Brokerzy przejmują kontakt w 24 godziny.",
    dialog: [
      "Asystent 11: Witam. Jakie auto Pana interesuje?",
      "Klient: Szukam Aston Martin DBS 770 Ultimate, importowanego.",
      "Asystent 11: Mamy jedno auto na stanie partnerskim w Polsce oraz dwie opcje importu z Wielkiej Brytanii i Włoch.",
      "Klient: Przesłać szczegółowe specyfikacje i terminy dostawy.",
    ],
    cta: "Rozpocznij rozmowę",
  },
};

export const contact: Record<
  Theme,
  { headline: string; sub: string; phone: string; email: string }
> = {
  velure: {
    headline: "Porozmawiajmy.",
    sub: "Concierge dostępny 24/7. Odpowiadamy w pierwszej godzinie.",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+48 XXX XXX XXX",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@velure.pl",
  },
  "atelier-11": {
    headline: "Umów konsultację.",
    sub: "Concierge dostępny 24/7. Odpowiadamy w pierwszej godzinie.",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+48 XXX XXX XXX",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@atelier11.pl",
  },
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

export const footer: Record<Theme, { tagline: string }> = {
  velure: { tagline: "Velvet at velocity." },
  "atelier-11": { tagline: "11 punktów. Zero kompromisów." },
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
