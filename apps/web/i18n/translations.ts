export type Locale = "en" | "nl";

export const translations = {
  en: {
    nav: {
      services: "Services",
      whyWism: "Why Wism",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      eyebrow: "Microsoft Consultancy & Digital Studio",
      titleA: "Software services,",
      titleB: "built around your business.",
      description:
        "End-to-end Microsoft consultancy that turns complex technology into real business outcomes. Power Platform, Dynamics 365, Copilot Agents — implemented by people who care about your results.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See our services",
    },
    services: {
      eyebrow: "What we do",
      title: "Focused on one stack.",
      description:
        "We work exclusively with the Microsoft Business Applications platform — so you get opinionated, hands-on delivery instead of generalist guesswork.",
      items: [
        {
          title: "Dynamics 365 CE",
          desc: "Sales, Customer Service and Marketing — implemented or improved to fit how your team actually works.",
        },
        {
          title: "Power Platform",
          desc: "Power Apps, Power Automate and Dataverse to replace spreadsheets and clunky legacy tooling.",
        },
        {
          title: "Copilot & AI",
          desc: "Copilot Studio agents and AI embedded in your CRM, so teams get useful answers faster.",
        },
        {
          title: "Integrations & Advisory",
          desc: "Connect Dynamics to the rest of your stack, or get a second opinion on architecture and approach.",
        },
      ],
    },
    whyWism: {
      eyebrow: "Why Wism",
      titleA: "The partner that treats",
      titleB: "your problems like our own.",
      description:
        "We're not a large SI that rotates junior staff onto your account. You get an experienced, hands-on team invested in your outcomes — from first conversation to go-live and beyond.",
      reasons: [
        "Microsoft certified consultants — not juniors learning on your project",
        "End-to-end delivery from discovery to production and ongoing support",
        "50+ projects delivered across manufacturing, finance and professional services",
        "Fast time to value — working software in weeks, not months",
        "Honest advice: if the tool doesn't fit, we'll tell you",
        "Hands-on team, not account managers handing off to offshore staff",
      ],
    },
    cta: {
      eyebrow: "Get in touch",
      titleA: "Ready to",
      titleB: "modernise your workflows?",
      description:
        "Let's talk about your challenges. A free 30-minute discovery call is all it takes to get started.",
      primary: "hello@wism.io",
      secondary: "See our services",
    },
    footer: {
      copyright: "© 2026 Wism.io — All rights reserved",
      email: "hello@wism.io",
    },
  },
  nl: {
    nav: {
      services: "Diensten",
      whyWism: "Waarom Wism",
      contact: "Contact",
      cta: "Neem contact op",
    },
    hero: {
      eyebrow: "Microsoft Consultancy & Digitaal Studio",
      titleA: "Softwareoplossingen,",
      titleB: "gebouwd rond uw bedrijf.",
      description:
        "End-to-end Microsoft consultancy die complexe technologie omzet in echte bedrijfsresultaten. Power Platform, Dynamics 365, Copilot Agents — geïmplementeerd door mensen die om uw resultaten geven.",
      ctaPrimary: "Neem contact op",
      ctaSecondary: "Bekijk onze diensten",
    },
    services: {
      eyebrow: "Wat we doen",
      title: "Gefocust op één stack.",
      description:
        "We werken uitsluitend met het Microsoft Business Applications platform — zodat u gerichte, hands-on levering krijgt in plaats van generalistische gissingen.",
      items: [
        {
          title: "Dynamics 365 CE",
          desc: "Sales, Customer Service en Marketing — geïmplementeerd of verbeterd om aan te sluiten bij hoe uw team écht werkt.",
        },
        {
          title: "Power Platform",
          desc: "Power Apps, Power Automate en Dataverse om spreadsheets en verouderde tools te vervangen.",
        },
        {
          title: "Copilot & AI",
          desc: "Copilot Studio-agents en AI ingebed in uw CRM, zodat teams sneller nuttige antwoorden krijgen.",
        },
        {
          title: "Integrations & Advies",
          desc: "Verbind Dynamics met de rest van uw stack, of krijg een second opinion over architectuur en aanpak.",
        },
      ],
    },
    whyWism: {
      eyebrow: "Waarom Wism",
      titleA: "De partner die",
      titleB: "uw problemen als zijn eigen beschouwt.",
      description:
        "We zijn geen groot SI dat junioren op uw account zet. U krijgt een ervaren, hands-on team dat volledig betrokken is bij uw resultaten — van het eerste gesprek tot go-live en daarna.",
      reasons: [
        "Microsoft gecertificeerde consultants — geen juniors die leren op uw project",
        "End-to-end levering van discovery tot productie en doorlopende ondersteuning",
        "50+ projecten geleverd in de maakindustrie, financiën en professionele dienstverlening",
        "Snelle time-to-value — werkende software in weken, niet maanden",
        "Eerlijk advies: als het hulpmiddel niet past, vertellen we het u",
        "Hands-on team, geen accountmanagers die doorverwijzen naar offshore medewerkers",
      ],
    },
    cta: {
      eyebrow: "Neem contact op",
      titleA: "Klaar om",
      titleB: "uw workflows te moderniseren?",
      description:
        "Laten we het hebben over uw uitdagingen. Een gratis kennismakingsgesprek van 30 minuten is alles wat nodig is om te beginnen.",
      primary: "hello@wism.io",
      secondary: "Bekijk onze diensten",
    },
    footer: {
      copyright: "© 2026 Wism.io — Alle rechten voorbehouden",
      email: "hello@wism.io",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
