export type Locale = "en" | "nl";

export const translations = {
  en: {
    nav: {
      services: "Services",
      whyWism: "Why Wism",
      contact: "Contact",
      cta: "Get in touch",
      webStudio: ["Website Design & Development", "Web Applications"],
    },
    hero: {
      eyebrow: "Microsoft Consultancy & Web Studio",
      titleA: "Technology that moves",
      titleB: "your business forward.",
      description:
        "We help businesses grow through Microsoft consultancy and modern web design.",
      ctaPrimary: "Our services",
      ctaSecondary: "Get in touch",
    },
    consultancyHero: {
      eyebrow: "Microsoft Consultancy",
      titleA: "Senior consultants.",
      titleB: "Real outcomes.",
      description:
        "End-to-end delivery on the Microsoft stack. Power Platform, Dynamics CE, Copilot Agents — implemented by people who care about your results.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "See our services",
    },
    serviceLines: {
      eyebrow: "",
      title: "What we do",
      consultancy: {
        label: "Microsoft Consultancy",
        description: "Dynamics CE, Power Platform, Copilot, AI and Azure.",
        cta: "Explore consultancy",
      },
      studio: {
        label: "Wism Web Studio",
        description: "Fast, modern business websites on a simple monthly subscription. No technical knowledge needed.",
        cta: "Explore Web Studio",
      },
    },
    services: {
      eyebrow: "What we do",
      title: "Focused on the Microsoft stack.",
      description:
        "We work exclusively with Microsoft, so you get opinionated, hands-on delivery instead of generalist guesswork.",
      items: [
        {
          title: "Dynamics 365 CE",
          desc: "Sales, Customer Service and Marketing implemented and improved to fit how your team actually works.",
        },
        {
          title: "Power Platform",
          desc: "Power Apps, Power Automate and Dataverse to replace spreadsheets and clunky legacy tooling.",
        },
        {
          title: "Copilot & AI",
          desc: "Copilot and AI agents woven through your organisation, so the right information reaches the right people automatically.",
        },
        {
          title: "Advisory",
          desc: "Architecture reviews, platform decisions and honest guidance on approach. A second opinion before you commit to something.",
        },
        {
          title: "Azure Solutions",
          desc: "Application modernisation, data platforms and Azure infrastructure built to solve real problems, not just move to the cloud.",
        },
      ],
    },
    whyWism: {
      eyebrow: "Why Wism",
      titleA: "Senior people.",
      titleB: "Real delivery.",
      description:
        "No rotation, no handoffs, no fluff. Just an experienced team that owns your project from start to finish.",
      reasons: [
        "Senior consultants only, no juniors on your account",
        "50+ projects delivered across industry and finance",
        "Live in weeks, not months",
        "We tell you when something isn't the right fit",
        "Direct access to the people doing the work",
        "Microsoft certified across the full stack",
      ],
    },
    cta: {
      eyebrow: "Get in touch",
      titleA: "Ready to",
      titleB: "modernise your workflows?",
      description:
        "Let's talk about your challenges. A free 30-minute discovery call is all it takes to get started.",
      primary: "Get in touch",
      secondary: "See our services",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      description: "Tell us about your project and we'll get back to you within one business day.",
      details: {
        emailLabel: "Email",
        locationLabel: "Based in",
        locationValue: "The Netherlands",
      },
      stepsTitle: "What happens next",
      steps: [
        { step: "01", title: "Discovery call", detail: "30 minutes to understand your challenge, goals and timeline." },
        { step: "02", title: "Proposal", detail: "A clear, fixed-scope proposal with no ambiguous estimates." },
        { step: "03", title: "Kick-off", detail: "Meet the team, align on approach, and get started." },
      ],
      form: {
        firstName: "First name",
        lastName: "Last name",
        email: "Work email",
        company: "Company",
        service: "Service of interest",
        servicePlaceholder: "Select a service…",
        message: "How can we help?",
        messagePlaceholder: "Tell us about your project or challenge…",
        services: ["Dynamics CE", "Power Platform", "Copilot & AI", "Azure Solutions", "Web Studio", "Not sure yet"],
        submit: "Send message",
        submitting: "Sending…",
        successTitle: "Message received",
        successDetail: "We'll be in touch within one business day.",
        captchaError: "Please wait for the security check to complete.",
      },
    },
    studio: {
      hero: {
        eyebrow: "Interested in a website like this one?",
        titleA: "Your business deserves",
        titleB: "a great website.",
        description:
          "We build fast, modern websites that look the part and do the job. Pick a package and we handle the rest.",
        cta: "See packages",
      },
      pricing: {
        eyebrow: "Packages",
        title: "Simple, transparent pricing.",
        description: "No hidden costs. No technical knowledge needed — we handle all of that. Just a clear package and a fixed result.",
      },
      tiers: [
        {
          name: "One Pager",
          price: "€119",
          period: "/month",
          contract: "Min. 12-month contract",
          description: "Everything you need to get online fast.",
          features: [
            "Single scrollable page",
            "Professional design",
            "Mobile responsive",
            "Contact form",
            "Hosting included",
            "Updates & maintenance",
          ],
          cta: "Get started",
          highlighted: false,
        },
        {
          name: "Five Pages",
          price: "€149",
          period: "/month",
          contract: "Min. 12-month contract",
          description: "A proper website for a growing business.",
          features: [
            "Up to 5 pages",
            "Custom design",
            "Mobile responsive",
            "Contact form",
            "Edit your own content",
            "SEO fundamentals",
            "Hosting included",
            "Updates & maintenance",
          ],
          cta: "Get started",
          highlighted: true,
        },
        {
          name: "Custom",
          price: "On request",
          period: "",
          contract: "Tailored to your needs",
          description: "Built exactly the way you need it.",
          features: [
            "Unlimited pages",
            "Fully custom design",
            "Web app features",
            "Integrations & CMS",
            "Ongoing support",
            "Timeline on request",
          ],
          cta: "Contact us",
          highlighted: false,
        },
      ],
      cta: {
        title: "Not sure which package fits?",
        description: "Send us a message and we'll figure it out together.",
        primary: "hello@wism.io",
      },
    },
    footer: {
      copyright: "© 2026 Wism.io. All rights reserved",
      email: "hello@wism.io",
    },
  },
  nl: {
    nav: {
      services: "Diensten",
      whyWism: "Waarom Wism",
      contact: "Contact",
      cta: "Neem contact op",
      webStudio: ["Website Design & Development", "Webapplicaties"],
    },
    hero: {
      eyebrow: "Microsoft Consultancy & Web Studio",
      titleA: "Technologie die jouw",
      titleB: "bedrijf vooruitbrengt.",
      description:
        "Wij helpen bedrijven groeien met Microsoft-consultancy en modern webdesign.",
      ctaPrimary: "Onze diensten",
      ctaSecondary: "Neem contact op",
    },
    consultancyHero: {
      eyebrow: "Microsoft Consultancy",
      titleA: "Senior consultants.",
      titleB: "Echte resultaten.",
      description:
        "End-to-end levering op de Microsoft stack. Power Platform, Dynamics CE, Copilot Agents — ingericht door mensen die snappen wat je wilt bereiken.",
      ctaPrimary: "Neem contact op",
      ctaSecondary: "Bekijk onze diensten",
    },
    serviceLines: {
      eyebrow: "",
      title: "Wat we doen",
      consultancy: {
        label: "Microsoft Consultancy",
        description: "Dynamics CE, Power Platform, Copilot, AI en Azure.",
        cta: "Meer over consultancy",
      },
      studio: {
        label: "Wism Web Studio",
        description: "Snelle, moderne bedrijfswebsites op een vast maandabonnement. Geen technische kennis nodig.",
        cta: "Meer over Web Studio",
      },
    },
    services: {
      eyebrow: "Wat we doen",
      title: "Specialist in de Microsoft stack.",
      description:
        "We werken uitsluitend met Microsoft. Geen generalist die alles een beetje kan, maar een team dat er diep in zit.",
      items: [
        {
          title: "Dynamics 365 CE",
          desc: "Sales, Customer Service en Marketing ingericht zoals jouw team écht werkt, niet zoals de standaard implementatie het voorschrijft.",
        },
        {
          title: "Power Platform",
          desc: "Power Apps, Power Automate en Dataverse als vervanging van spreadsheets en verouderde systemen, sneller dan je denkt.",
        },
        {
          title: "Copilot & AI",
          desc: "Copilot en AI-agents verweven door je hele organisatie, zodat de juiste informatie vanzelf bij de juiste mensen terechtkomt.",
        },
        {
          title: "Advies",
          desc: "Architectuurreviews, platformkeuzes en eerlijke begeleiding bij je aanpak. Een tweede mening voordat je ergens aan vastit.",
        },
        {
          title: "Azure Solutions",
          desc: "Applicatiemodernisering, dataplatformen en Azure-infrastructuur gericht op echte vraagstukken, niet alleen maar migreren naar de cloud.",
        },
      ],
    },
    whyWism: {
      eyebrow: "Waarom Wism",
      titleA: "Ervaren mensen.",
      titleB: "Echte resultaten.",
      description:
        "Geen roulerende juniors, geen accountmanagers als doorgeefluik. Gewoon een vast team dat jouw project van A tot Z oppakt.",
      reasons: [
        "Alleen senior consultants, geen juniors op jouw project",
        "50+ projecten opgeleverd in industrie en financiële dienstverlening",
        "Live in weken, niet in maanden",
        "We zeggen het gewoon als iets niet de juiste keuze is",
        "Direct contact met de mensen die het werk doen",
        "Microsoft-gecertificeerd op de volledige stack",
      ],
    },
    cta: {
      eyebrow: "Neem contact op",
      titleA: "Benieuwd wat wij",
      titleB: "voor jouw organisatie kunnen doen?",
      description:
        "Plan een vrijblijvend kennismakingsgesprek van 30 minuten. We kijken samen wat er speelt en of we de juiste partner voor je zijn.",
      primary: "Neem contact op",
      secondary: "Bekijk onze diensten",
    },
    contact: {
      eyebrow: "Contact",
      title: "Laten we praten",
      description: "",
      details: {
        emailLabel: "E-mail",
        locationLabel: "Gevestigd in",
        locationValue: "Nederland",
      },
      stepsTitle: "Wat er daarna gebeurt",
      steps: [
        { step: "01", title: "Kennismakingsgesprek", detail: "30 minuten om je uitdaging, doelen en planning te bespreken." },
        { step: "02", title: "Voorstel", detail: "Een helder voorstel met vaste scope en geen vage schattingen." },
        { step: "03", title: "Kick-off", detail: "Kennismaking met het team, aanpak afstemmen en van start gaan." },
      ],
      form: {
        firstName: "Voornaam",
        lastName: "Achternaam",
        email: "Zakelijk e-mailadres",
        company: "Bedrijf",
        service: "Interessegebied",
        servicePlaceholder: "Selecteer een dienst…",
        message: "Hoe kunnen we helpen?",
        messagePlaceholder: "Vertel ons over je project of uitdaging…",
        services: ["Dynamics CE", "Power Platform", "Copilot & AI", "Azure Solutions", "Web Studio", "Weet ik nog niet"],
        submit: "Verstuur bericht",
        submitting: "Verzenden…",
        successTitle: "Bericht ontvangen",
        successDetail: "We nemen binnen één werkdag contact met je op.",
        captchaError: "Wacht totdat de beveiligingscheck is voltooid.",
      },
    },
    studio: {
      hero: {
        eyebrow: "Benieuwd naar een website zoals deze?",
        titleA: "Jouw bedrijf verdient",
        titleB: "een sterk online visitekaartje.",
        description:
          "Wij bouwen snelle, moderne websites die er goed uitzien en goed werken. Kies een pakket en wij regelen de rest.",
        cta: "Bekijk pakketten",
      },
      pricing: {
        eyebrow: "Pakketten",
        title: "Duidelijke prijzen, geen verrassingen.",
        description: "Geen verborgen kosten. Geen technische kennis nodig — wij regelen dat allemaal. Gewoon een helder pakket en een vast resultaat.",
      },
      tiers: [
        {
          name: "One Pager",
          price: "€119",
          period: "/maand",
          contract: "Min. 12 maanden",
          description: "Snel online met alles wat je nodig hebt.",
          features: [
            "Één scrollbare pagina",
            "Professioneel ontwerp",
            "Mobielvriendelijk",
            "Contactformulier",
            "Hosting inbegrepen",
            "Updates & onderhoud",
          ],
          cta: "Aan de slag",
          highlighted: false,
        },
        {
          name: "Five Pages",
          price: "€149",
          period: "/maand",
          contract: "Min. 12 maanden",
          description: "Een volwaardige website voor een groeiend bedrijf.",
          features: [
            "Tot 5 pagina's",
            "Op maat ontworpen",
            "Mobielvriendelijk",
            "Contactformulier",
            "Zelf content beheren",
            "SEO-basis",
            "Hosting inbegrepen",
            "Updates & onderhoud",
          ],
          cta: "Aan de slag",
          highlighted: true,
        },
        {
          name: "Maatwerk",
          price: "Op aanvraag",
          period: "",
          contract: "Volledig op maat",
          description: "Gebouwd precies zoals jij het nodig hebt.",
          features: [
            "Onbeperkt pagina's",
            "Volledig maatwerk design",
            "Webapplicatie functies",
            "Koppelingen & CMS",
            "Doorlopende ondersteuning",
            "Doorlooptijd in overleg",
          ],
          cta: "Neem contact op",
          highlighted: false,
        },
      ],
      cta: {
        title: "Weet je nog niet welk pakket past?",
        description: "Stuur ons een bericht en we kijken het samen uit.",
        primary: "hello@wism.io",
      },
    },
    footer: {
      copyright: "© 2026 Wism.io. Alle rechten voorbehouden",
      email: "hello@wism.io",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
