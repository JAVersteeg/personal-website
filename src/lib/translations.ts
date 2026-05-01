export type Locale = "en" | "nl";

const en = {
  "home.title": "Hi, I'm Jochem.",
  "home.welcome":
    "Welcome to my digital garden!",
  "home.bio":
    "I work as a data engineer for NOC*NSF, the Dutch overarching sports association. In my free time as well, sports is the constant factor, and I do a lot of sports. Alongside, I like to read books and work on personal programming projects. I also like to focus on my personal health by eating the right foods, which are mostly plant-based. I'm far from perfect when it comes to all of those things, but I try to let them have the largest possible positive impact on my life.",
  "home.corner":
    "In times of polarisation, hate speech and misinformation, I would love my corner of the internet to be a beacon of calmth, intelectuality and passion. I find that these things are the cornerstones of what make me a happy person, and I believe that society could use a lot more of them.",
  "home.guestbook":
    "If you've stumbled upon my garden, please take the time to leave a message in the guestbook. I would love to hear what other people think about the things that I care about.",
  "home.great-time":
    "Have a great time here!",
  "home.cheers": "Cheers.",
  "nav.home": "Home",
  "nav.reading": "Reading",
  "nav.writing": "Writing",
  "nav.projects": "Projects",
  "nav.about": "About",
  "pages.about.title": "about me.",
  "pages.about.sports.title": "Sports",
  "pages.about.sports.description1": "My favourite hobby. It already was my favourite hobby twenty years ago, and it will still be in twenty years from now. Sports is the one thing that truly never bores me, although that does require a pivot every few years.",
  "pages.about.sports.description2": "I grew up playing football and tennis, although my preference was clear from the beginning. Soon, tennis had to make place for the priorities of an adolescent boy: money making, a social life and a girlfriend. That remained this way until I went to university, where I reinvented tennis, becoming my new favourite thing. In those years my entire social life revolved around tennis, and I was having a great time. I spent a lot of time on the courts, and I was getting pretty good. Until misfortune struck me.",
  "pages.about.sports.description3": "A sharp pain in my wrist was the reason that I couldn't play for more than half a year. However, that wouldn't prevent me from taking on a new sporting challenge. I came across a video of Average Rob where he took on one of the hardest challenges in sports: an Ironman triathlon. I was immediately hooked, triathlon would become my new obsession. I learned myself how to swim, dusted of my road bike that had been collecting dust for the last 6 years, and got to work. At the end of that summer, only 4 months after the injury, I did my first half triathlon.",
  "pages.writing.title": "writing.",
  "pages.writing.clickthrough": "more writing",
  "pages.projects.title": "projects.",
  "pages.reading.title": "reading.",
  "pages.reading.clickthrough": "more reading",
  "pages.wip": "work in progress...",
  "menu.open": "Open menu",
  "menu.close": "Close menu",
  "nav.guestbook": "Guestbook",
  "pages.guestbook.title": "guestbook.",
  "guestbook.name": "Name",
  "guestbook.email": "Email (optional)",
  "guestbook.message": "Message",
  "guestbook.modalTitle": "please, leave a message.",
  "guestbook.submit": "Sign the guestbook",
  "guestbook.submitting": "Signing...",
  "guestbook.loading": "Loading messages...",
  "guestbook.empty": "Be the first to leave a message!",
} as const;

const nl: Record<keyof typeof en, string> = {
  "home.title": "Hi, ik ben Jochem.",
  "home.welcome":
  "Welkom in mijn digitale tuin!",
  "home.bio":
  "Ik werk als data engineer bij NOC*NSF, de Nederlandse overkoepelende sportorganisatie. Ook in mijn vrije tijd is sport de constante factor, en ik sport veel. Daarnaast lees ik graag boeken en werk ik aan persoonlijke programmeerprojecten. Ik richt me ook graag op mijn gezondheid door de juiste voeding te eten, die grotendeels plantaardig is. Ik ben verre van perfect in al die dingen, maar ik probeer ze een zo groot mogelijke positieve impact op mijn leven te laten hebben.",
  "home.corner":
  "Ik zou graag willen dat mijn hoekje van het internet een baken van rust, intellectualiteit en passie is, want ik vind dat die dingen de hoekstenen zijn van wat mij een gelukkig mens maakt.",
  "home.guestbook":
  "Als je mijn tuin hebt ontdekt, neem dan de tijd om een bericht achter te laten in het gastenboek. Ik zou graag horen wat andere mensen vinden van de dingen die mij bezighouden.",
  "home.great-time":
  "Veel plezier hier!",
  "home.cheers": "Groetjes.",
  "nav.home": "Home",
  "nav.reading": "Lezen",
  "nav.writing": "Schrijfsels",
  "nav.projects": "Projecten",
  "nav.about": "Over mij",
  "pages.about.title": "over mij.",
  "pages.about.sports.title": "Sport",
  "pages.about.sports.description": "Mijn favoriete hobby. Dat was het twintig jaar geleden al, en dat zal het over twintig jaar nog steeds zijn.",
  "pages.writing.title": "schrijfsels.",
  "pages.writing.clickthrough": "meer schrijfsels",
  "pages.projects.title": "projecten.",
  "pages.reading.title": "lezen.",
  "pages.reading.clickthrough": "meer lezen",
  "pages.wip": "werk in uitvoering...",
  "menu.open": "Menu openen",
  "menu.close": "Menu sluiten",
  "nav.guestbook": "Gastenboek",
  "guestbook.modalTitle": "laat een bericht achter.",
  "pages.guestbook.title": "gastenboek.",
  "guestbook.name": "Naam",
  "guestbook.email": "E-mail (optioneel)",
  "guestbook.message": "Bericht",
  "guestbook.submit": "Teken het gastenboek",
  "guestbook.submitting": "Tekenen...",
  "guestbook.loading": "Berichten laden...",
  "guestbook.empty": "Wees de eerste die een bericht achterlaat!",
};

export type TranslationKey = keyof typeof en;

export const translations: Record<Locale, Record<TranslationKey, string>> = {
  en,
  nl,
};
