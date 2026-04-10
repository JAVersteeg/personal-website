export type Locale = "en" | "nl";

const en = {
  "home.title": "My name is Jochem.",
  "home.welcome":
    "Welcome! This is the place where I'm planning to share things about myself and my thoughts on things that I find interesting.",
  "home.wip":
    "As you've probably noticed, the website is still a work in progress. I'm planning on updating the content as soon as possible.",
  "nav.home": "Home",
  "nav.reading": "Reading",
  "nav.writing": "Writing",
  "nav.projects": "Projects",
  "nav.about": "About",
  "pages.about.title": "about me.",
  "pages.writing.title": "writing.",
  "pages.projects.title": "projects.",
  "pages.reading.title": "reading.",
  "pages.wip": "work in progress...",
  "menu.open": "Open menu",
  "menu.close": "Close menu",
} as const;

const nl: Record<keyof typeof en, string> = {
  "home.title": "Mijn naam is Jochem.",
  "home.welcome":
    "Welkom! Dit is de plek waar ik van plan ben om dingen over mezelf te delen en mijn gedachten te delen over onderwerpen die ik interessant vind.",
  "home.wip":
    "Zoals je waarschijnlijk al hebt gemerkt, is de website nog in ontwikkeling. Ik ben van plan de inhoud zo snel mogelijk bij te werken.",
  "nav.home": "Home",
  "nav.reading": "Lezen",
  "nav.writing": "Schrijfsels",
  "nav.projects": "Projecten",
  "nav.about": "Over mij",
  "pages.about.title": "over mij.",
  "pages.writing.title": "schrijven.",
  "pages.projects.title": "projecten.",
  "pages.reading.title": "lezen.",
  "pages.wip": "werk in uitvoering...",
  "menu.open": "Menu openen",
  "menu.close": "Menu sluiten",
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  nl,
};
