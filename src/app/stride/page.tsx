import Link from 'next/link'

interface FeatureItemProps {
  title: string
  description: string
}

function StravaLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 2L6 34h12l6-12 6 12h12L24 2z" fill="#FC4C02" />
      <path d="M36 44l-5-10h-11l16 24 16-24h-11l-5 10z" fill="rgb(253, 150, 100)" />
    </svg>
  )
}

const COACH_FEATURES: FeatureItemProps[] = [
  {
    title: 'Trainingsplannen',
    description: 'Stel plannen samen en wijs ze toe aan lopers met start- en einddatum en een doel.',
  },
  {
    title: 'Workout builder',
    description: 'Bouw sessies op uit blokken: warming-up, actief, herstel, cooling-down. Elk met tempo en duur.',
  },
  {
    title: 'Weekkalender',
    description: 'Plan workouts in op specifieke dagen en pas het schema aan waar nodig.',
  },
  {
    title: 'Loperoverzicht',
    description: 'Bekijk per loper de wekelijkse voortgang en lees hun reflecties na elke sessie.',
  },
]

const TRAINEE_FEATURES: FeatureItemProps[] = [
  {
    title: 'Weekschema',
    description: 'Scroll door je week en bekijk precies wat er op het programma staat.',
  },
  {
    title: 'Sessiedetails',
    description: 'Zie de volledige opbouw van elke workout: bloktype, tempo en duur per blok.',
  },
  {
    title: 'Voltooien & reflecteren',
    description: 'Markeer sessies als voltooid, geef een score (1–10) en schrijf een korte reflectie.',
  },
  {
    title: 'Strava & tempozones',
    description: 'Koppel Strava-activiteiten en bekijk je persoonlijke tempozones als referentie.',
  },
]

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <span
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: '#84cc16' }}
      />
      <div>
        <h4
          className="text-base uppercase leading-snug"
          style={{ fontFamily: 'inherit', fontWeight: 600, color: 'inherit' }}
        >
          {title}
        </h4>
        <p
          className="mt-1 text-sm leading-relaxed"
          style={{ fontFamily: 'inherit', fontWeight: 400, color: 'inherit', opacity: 0.7 }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default function StridePage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'inherit' }}
    >
      {/* Hero */}
      <section
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #d9f99d 0%, #ecfccb 50%, #f0fdf4 100%)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Logo above card */}
        <div className="relative inline-flex flex-col items-center mb-10">
          <span
            className="text-6xl sm:text-7xl lg:text-8xl font-black italic uppercase tracking-tight"
            style={{ color: '#18181b', fontWeight: 900, fontFamily: 'inherit' }}
          >
            Stride
          </span>
          <div className="mt-1 ml-32 flex w-full gap-2">
            <span
              className="h-[8px] w-1/5 rounded-full"
              style={{ backgroundColor: '#4d7c0f' }}
            />
            <span
              className="h-[8px] flex-1 rounded-full"
              style={{ backgroundColor: '#84cc16' }}
            />
          </div>
        </div>

        {/* Card wrapper with background wordmark */}
        <div className="relative max-w-xl w-full">
          {/* Giant background wordmark centered behind card */}
          <span
            className="pointer-events-none absolute font-black italic uppercase select-none"
            style={{
              left: 'calc(50% - 40px)',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 'clamp(10rem, 24vw, 22rem)',
              color: '#84cc16',
              opacity: 0.08,
              fontWeight: 900,
              fontFamily: 'inherit',
              letterSpacing: '-0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            Stride
          </span>

          {/* Frosted glass card */}
          <div
            className="relative rounded-2xl px-10 py-10 sm:px-14 sm:py-12 w-full text-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            }}
          >
          <p
            className="text-sm uppercase tracking-[0.25em]"
            style={{ color: '#65a30d', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Versnelt jouw vooruitgang
          </p>

          <p
            className="mt-6 text-base sm:text-lg leading-relaxed"
            style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Stride is een trainingsapp voor hardloopcoaches en hun lopers.
            Het geeft een gedeeld overzicht van het trainingsschema. Zo heb je geen gedoe met spreadsheets, en geen
            heen-en-weer via WhatsApp.
          </p>

          <span
            className="mt-8 inline-block rounded-full px-4 py-1.5 text-xs uppercase tracking-wide"
            style={{
              backgroundColor: '#ecfccb',
              color: '#65a30d',
              fontFamily: 'inherit',
              fontWeight: 600,
            }}
          >
            Binnenkort beschikbaar
          </span>
          </div>
        </div>
      </section>

      {/* Coach section */}
      <section
        className="relative z-10 px-6 py-20"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Voor coaches
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Alles om je lopers te begeleiden
          </h2>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Bouw trainingsplannen, volg voortgang en lees reflecties. Met Stride heb je alles in één app.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {COACH_FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Trainee section */}
      <section
        className="relative overflow-hidden px-6 py-20"
        style={{ backgroundColor: '#f8faf5' }}
      >
        {/* Material Design "directions run" rounded (Apache 2.0) */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: '700px', height: '700px', opacity: 0.04 }}
        >
          <path
            d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6c0 .55.45 1 1 1s1-.45 1-1v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5.55 0 1-.45 1-1s-.45-1-1-1c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2c-.6.3-1 .9-1 1.5v3.2c0 .55.45 1 1 1s1-.45 1-1v-2.4l1.8-.7-1.6 8.1-4.9-1c-.5-.1-1.1.2-1.2.8-.1.5.2 1.1.8 1.2l7 1.4z"
            fill="#84cc16"
          />
        </svg>
        <div className="relative mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Voor lopers
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Je training, overzichtelijk en compleet
          </h2>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Bekijk je schema, log sessies en koppel Strava. Zonder gedoe.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {TRAINEE_FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Interesse section */}
      <section
        className="relative z-10 px-6 py-20"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Interesse?
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Als coach of zoek naar meer professionalisering?
          </h2>
          <p
            className="mt-3 text-base leading-relaxed"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Stride bespaart je als coach tijd en gedoe: geen losse spreadsheets
            en WhatsApp-berichten meer om trainingsplannen te delen en
            voortgang bij te houden. Je stelt plannen en workouts eenvoudig
            samen, ziet in één oogopslag hoe elke loper ervoor staat en leest
            hun reflecties direct terug. Zo kun je sneller bijsturen,
            meer lopers tegelijk begeleiden, en je begeleiding naar een nieuw niveau tillen.
          </p>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Wil je als coach gebruik maken van Stride, of wil je gewoon
            meer weten? Stuur dan een mail naar{' '}
            <a
              href="mailto:jochem@jversteeg.com"
              className="underline-offset-4 hover:underline"
              style={{ color: '#65a30d', fontWeight: 600 }}
            >
              jochem@jversteeg.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8"
        style={{ borderColor: '#e4e4e7', backgroundColor: '#ffffff' }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p
            className="text-sm"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            © 2026 Stride · Jochem Versteeg
          </p>
          <Link
            href="/stride/privacy-policy"
            className="text-sm underline-offset-4 hover:underline"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Privacybeleid
          </Link>
        </div>
      </footer>
    </main>
  )
}
