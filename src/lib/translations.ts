export type Locale = 'en' | 'nl';

const en: Record<string, string> = {
  'home.title': "Hi, I'm Jochem.",
  'home.welcome': 'Welcome to my digital garden!',
  'home.bio':
    "I work as a data engineer for NOC*NSF, the Dutch overarching sports association. In my free time as well, sports is the constant factor, and I do a lot of it. When there's time left, I like to read books and work on personal programming projects such as the ones you can find below. I also like to focus on my health by eating the right foods, which are mostly plant-based. I'm far from perfect when it comes to all of those things, but I try to let them have the largest possible positive impact on my life.",
  'home.corner':
    'In times of polarisation, hate speech and misinformation, I would love my corner of the internet to be a beacon of calmth, intelectuality and passion. I find that these things are the cornerstones of what make me a happy person, and I believe that society could use a lot more of them.',
  'home.guestbook':
    "If you've stumbled upon my garden, please take the time to leave a message in the guestbook. I would love to hear what other people think about the things that I care about.",
  'home.great-time': 'Have a great time here!',
  'home.cheers': 'Cheers.',
  'nav.home': 'Home',
  'nav.reading': 'Reading',
  'nav.writing': 'Writing',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'pages.about.title': 'about me.',
  'pages.about.sports.title': 'Sports',
  'pages.about.sports.description1':
    'This part about me deserves its own section because it has always been the cornerstone of my identity. Sports is the one thing that truly never bores me, although that does require a pivot every few years as you can see in the diagram below.',
  'pages.writing.title': 'writing.',
  'pages.writing.clickthrough': 'more writing',
  'pages.projects.title': 'projects.',
  'pages.projects.clickthrough': 'more projects',
  'pages.projects.stride.description':
    'Stride is a training app for running coaches to simplify their coaching process.',
  'pages.projects.flammerouge.description':
    'A local hotseat web adaptation of the Flamme Rouge road-cycling board game.',
  'pages.reading.title': 'reading.',
  'pages.reading.clickthrough': 'more reading',
  'pages.wip': 'work in progress...',
  'menu.open': 'Open menu',
  'menu.close': 'Close menu',
  'nav.guestbook': 'Guestbook',
  'pages.guestbook.title': 'guestbook.',
  'guestbook.name': 'Name',
  'guestbook.email': 'Email (optional)',
  'guestbook.message': 'Message',
  'guestbook.modalTitle': 'please, leave a message.',
  'guestbook.submit': 'Sign the guestbook',
  'guestbook.submitting': 'Signing...',
  'guestbook.loading': 'Loading messages...',
  'guestbook.empty': 'Be the first to leave a message!',
} as const;

const nl: Record<string, string> = {
  'home.title': 'Hi, ik ben Jochem.',
  'home.welcome': 'Welkom in mijn digitale tuin!',
  'home.bio':
    'Ik werk als data engineer bij NOC*NSF, de Nederlandse overkoepelende sportorganisatie. Ook in mijn vrije tijd is sport de constante factor, en ik sport veel. Als er nog tijd overblijft lees ik graag boeken en werk ik aan persoonlijke programmeerprojecten zoals die hieronder. Ik richt me ook graag op mijn gezondheid door de juiste voeding te eten, die grotendeels plantaardig is. Ik ben verre van perfect in al die dingen, maar ik probeer ze een zo groot mogelijke positieve impact op mijn leven te laten hebben.',
  'home.corner':
    'Ik zou graag willen dat mijn stukje van het internet een baken van rust, intellectualiteit en passie is, want dat zijn de hoekstenen zijn van wat mij een gelukkig mens maakt.',
  'home.guestbook':
    'Als je mijn tuin hebt ontdekt, neem dan de tijd om een bericht achter te laten in het gastenboek. Ik zou graag horen wat andere mensen vinden van de dingen die mij bezighouden.',
  'home.great-time': 'Veel plezier hier!',
  'home.cheers': 'Groetjes.',
  'nav.home': 'Home',
  'nav.reading': 'Lezen',
  'nav.writing': 'Schrijfsels',
  'nav.projects': 'Projecten',
  'nav.about': 'Over mij',
  'pages.about.title': 'over mij.',
  'pages.about.sports.title': 'Sport',
  'pages.about.sports.description1':
    'Dit gedeelte over mij verdient zijn eigen sectie, omdat het altijd de rode draad in mijn leven geweest is. Sport is het enige wat me nooit verveelt, al vereist dat wel een pivot om de paar jaar zoals je kunt zien in de onderstaande diagram.',
  'pages.writing.title': 'schrijfsels.',
  'pages.writing.clickthrough': 'meer schrijfsels',
  'pages.projects.title': 'projecten.',
  'pages.projects.clickthrough': 'meer projecten',
  'pages.projects.stride.description':
    'Stride is een trainingsapp voor hardloopcoaches om het coachingsproces te vergemakkelijken.',
  'pages.projects.flammerouge.description':
    'Een hotseat web-versie van het bordspel Flamme Rouge over wielrennen.',
  'pages.reading.title': 'lezen.',
  'pages.reading.clickthrough': 'meer lezen',
  'pages.wip': 'werk in uitvoering...',
  'menu.open': 'Menu openen',
  'menu.close': 'Menu sluiten',
  'nav.guestbook': 'Gastenboek',
  'guestbook.modalTitle': 'laat een bericht achter.',
  'pages.guestbook.title': 'gastenboek.',
  'guestbook.name': 'Naam',
  'guestbook.email': 'E-mail (optioneel)',
  'guestbook.message': 'Bericht',
  'guestbook.submit': 'Teken het gastenboek',
  'guestbook.submitting': 'Tekenen...',
  'guestbook.loading': 'Berichten laden...',
  'guestbook.empty': 'Wees de eerste die een bericht achterlaat!',
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  nl,
};
