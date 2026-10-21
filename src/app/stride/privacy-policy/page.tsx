import Link from 'next/link';
import PolicySection from '@/components/policy-section';
import PolicyTable from '@/components/policy-table';
import StrideFooter from '@/components/stride-footer';

export const metadata = {
  title: 'Privacybeleid — Stride',
};

export default function StridePrivacyPolicyPage() {
  return (
    <main
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'inherit' }}
    >
      {/* Hero header */}
      <section
        className="relative z-50 flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
        style={{
          background: 'linear-gradient(135deg, #d9f99d 0%, #ecfccb 50%, #f0fdf4 100%)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        }}
      >
        <Link
          href="/stride"
          className="absolute top-6 left-6 text-sm underline-offset-4 hover:underline"
          style={{ color: '#4d7c0f', fontFamily: 'inherit', fontWeight: 500 }}
        >
          ← Stride
        </Link>

        <span
          className="text-2xl font-black tracking-tight uppercase italic"
          style={{ color: '#84cc16', fontWeight: 900, fontFamily: 'inherit' }}
        >
          Stride
        </span>
        <h1
          className="mt-3 text-3xl sm:text-4xl"
          style={{
            color: '#18181b',
            fontFamily: 'inherit',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          Privacybeleid
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
        >
          Ingangsdatum: 15 mei 2026 &nbsp;·&nbsp; Laatst bijgewerkt: 21 oktober 2026
        </p>
      </section>

      {/* Who we are */}
      <section
        className="relative z-40 px-6 py-16"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-base leading-relaxed sm:text-lg"
            style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Stride is een app voor coaches en trainees, aangeboden door Jochem Versteeg, KvK-nummer
            84688564,{' '}
            <a
              href="mailto:jochem@jversteeg.com"
              className="underline-offset-4 hover:underline"
              style={{ color: '#4d7c0f' }}
            >
              jochem@jversteeg.com
            </a>
            .
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Je account">
              <p>
                Voor je account zelf is Stride verantwoordelijk (de verwerkingsverantwoordelijke).
                Dat geldt voor inloggen, de voorwaarden die je accepteerde, foutmeldingen en
                back-ups. Het geldt ook voor al je gegevens zolang je nog niet bij een organisatie
                hoort.
              </p>
            </PolicySection>

            <PolicySection title="Je training">
              <p>
                Train je bij een club of organisatie die Stride gebruikt, dan is die organisatie
                verantwoordelijk voor je trainingsgegevens. Stride verwerkt ze in haar opdracht,
                volgens een verwerkersovereenkomst.
              </p>
            </PolicySection>

            <div className="sm:col-span-2">
              <PolicySection title="Vragen">
                <p>
                  Met vragen kun je altijd bij ons terecht. Waar nodig sturen we ze door naar je
                  organisatie.
                </p>
              </PolicySection>
            </div>
          </div>
        </div>
      </section>

      {/* Data we process */}
      <section
        className="relative z-30 px-6 py-16"
        style={{ backgroundColor: '#f8faf5', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Je gegevens
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{
              color: '#18181b',
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Welke gegevens we verwerken
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <PolicySection title="Welke gegevens">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>Account:</strong> e-mailadres, voor- en achternaam, telefoonnummer (als
                    je dat opgeeft), rol, je organisatie, of je beheerder bent, en wanneer je welke
                    versie van de voorwaarden accepteerde.
                  </li>
                  <li>
                    <strong>Tempozones:</strong> de tempo&apos;s per zone die je coach voor je
                    instelt.
                  </li>
                  <li>
                    <strong>Vragenlijst:</strong> een recente wedstrijd (afstand en tijd), jaren
                    loopervaring, kilometers per week, hoe vaak je traint, je voorkeursdagen en de
                    dag van je lange duurloop.
                  </li>
                  <li>
                    <strong>Trainingsschema&apos;s:</strong> naam, doel (naam, datum, afstand),
                    begin- en einddatum en de periodisering per week.
                  </li>
                  <li>
                    <strong>Workouts:</strong> de inhoud (blokken, duur, afstand, tempo), wanneer de
                    workout gepland staat, of en wanneer je hem deed, je score (1–10), je reflectie
                    en of je coach die heeft gezien.
                  </li>
                  <li>
                    <strong>Pauzes:</strong> begin- en einddatum, een eventuele reden en wie de
                    pauze instelde.
                  </li>
                  <li>
                    <strong>Activiteit:</strong> wanneer je een workout afrondt, een reflectie
                    toevoegt of je voorkeuren wijzigt. Je coach ziet dit als overzicht.
                  </li>
                  <li>
                    <strong>Coachkoppeling:</strong> wie je coach is, aanvragen om je te koppelen en
                    wie die goedkeurde.
                  </li>
                  <li>
                    <strong>Strava, alleen als je koppelt:</strong> je Strava-ID, je Strava-profiel
                    zoals Strava het meegeeft, de sleutels waarmee we je activiteiten mogen lezen
                    en, bij een gekoppelde workout, naam, type, afstand, beweegtijd en starttijd van
                    de activiteit.
                  </li>
                  <li>
                    <strong>Organisatie:</strong> naam, kleur en logo&apos;s, en aanvragen om die te
                    wijzigen.
                  </li>
                  <li>
                    <strong>Coaches:</strong> de workouts in hun eigen bibliotheek.
                  </li>
                  <li>
                    <strong>Foutmeldingen:</strong> de fout, technische context, app-versie,
                    besturingssysteem en je account-ID.
                  </li>
                  <li>
                    <strong>Op je telefoon:</strong> je inlogsessie en een paar voorkeuren, zoals
                    Strava-suggesties die je verborg. Die blijven op je telefoon.
                  </li>
                </ul>
              </PolicySection>
            </div>

            <PolicySection title="Wat we niet verwerken">
              <p>
                We verwerken <strong>geen</strong> locatie, betaalgegevens of advertentie-ID&apos;s,
                en de app bevat geen analytics of tracking. De gesproken aanwijzingen tijdens een
                begeleide training maakt je telefoon zelf.
              </p>
            </PolicySection>

            <PolicySection title="Gezondheidsgegevens">
              <p>
                Stride vraagt niet naar je gezondheid. Wat je opschrijft kan toch over je gezondheid
                gaan, bijvoorbeeld een blessure in een reflectie. Dat zijn bijzondere
                persoonsgegevens. Daarom kun je reflecties alleen schrijven als je daar in de app
                uitdrukkelijk toestemming voor geeft. Die toestemming kun je altijd intrekken.
                Zonder toestemming werkt de rest van de app gewoon.
              </p>
              <p>
                Bij een pauze kan je coach een reden noteren. De app vraagt daar om een korte reden
                zonder medische details.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Purposes & access */}
      <section
        className="relative z-20 px-6 py-16"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Gebruik & toegang
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{
              color: '#18181b',
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Waarvoor, en wie het ziet
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <PolicySection title="Waarvoor we je gegevens gebruiken, en op welke grond">
                <PolicyTable
                  headers={['Wat', 'Waarvoor', 'Grondslag (AVG)']}
                  rows={[
                    [
                      "Account, schema's, workouts, vragenlijst, pauzes, coachkoppeling, organisatie",
                      'De app laten werken: plannen, trainen, terugkoppelen',
                      'Uitvoering van de overeenkomst (art. 6 lid 1b)',
                    ],
                    [
                      'Reflecties',
                      'Je coach laten weten hoe het ging',
                      'Uitdrukkelijke toestemming (art. 6 lid 1a en art. 9 lid 2a)',
                    ],
                    [
                      'Strava',
                      'Je activiteiten aan workouts koppelen en aan je coach tonen',
                      'Toestemming (art. 6 lid 1a), die je geeft bij het koppelen',
                    ],
                    [
                      'Acceptatie van de voorwaarden',
                      'Kunnen aantonen waarmee je akkoord ging',
                      'Gerechtvaardigd belang (art. 6 lid 1f)',
                    ],
                    [
                      'Foutmeldingen en back-ups',
                      'De app werkend en veilig houden, en gegevens kunnen herstellen',
                      'Gerechtvaardigd belang (art. 6 lid 1f)',
                    ],
                  ]}
                />
                <p>We nemen geen automatische beslissingen over je en maken geen profielen.</p>
              </PolicySection>
            </div>

            <div className="sm:col-span-2">
              <PolicySection title="Wie je gegevens ziet">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>Jij</strong> ziet al je eigen gegevens.
                  </li>
                  <li>
                    <strong>Je coach</strong> ziet je contactgegevens, schema&apos;s, workouts,
                    scores, reflecties, vragenlijst, pauzes, activiteit en de Strava-gegevens bij
                    gekoppelde workouts, en beheert je schema.
                  </li>
                  <li>
                    <strong>De beheerder van je organisatie</strong> ziet dezelfde gegevens en kan
                    je naam en telefoonnummer aanpassen, maar schrijft niet in je schema tenzij die
                    beheerder zelf je coach is.
                  </li>
                  <li>
                    <strong>Stride-beheerders</strong> hebben toegang om de app te beheren en je te
                    helpen.
                  </li>
                </ul>
                <p>Andere trainees zien je gegevens niet.</p>
              </PolicySection>
            </div>
          </div>
        </div>
      </section>

      {/* Processors & retention */}
      <section
        className="relative z-10 px-6 py-16"
        style={{ backgroundColor: '#f8faf5', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Opslag & bewaring
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{
              color: '#18181b',
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Waar je gegevens staan, en hoe lang
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <PolicySection title="Wie ons helpt, en waar je gegevens staan">
                <PolicyTable
                  headers={['Partij', 'Wat', 'Waar']}
                  rows={[
                    ['Supabase', "Database, inloggen en opslag van logo's", 'EU (Zweden)'],
                    ['Sentry (Functional Software, Inc.)', 'Foutrapporten, 90 dagen bewaard', 'EU'],
                    [
                      'GitHub (Microsoft)',
                      'Versleutelde back-ups, 14 dagen bewaard. Alleen wij hebben de sleutel',
                      'Verenigde Staten, onder het EU-VS Data Privacy Framework',
                    ],
                  ]}
                />
                <p>
                  Met deze partijen hebben we afspraken over het verwerken van je gegevens.{' '}
                  <strong>Strava</strong> is geen verwerker van ons: je koppelt je eigen
                  Strava-account, en voor wat bij Strava staat geldt het privacybeleid van Strava.
                </p>
                <p>We verkopen je gegevens niet en delen ze niet voor advertenties.</p>
              </PolicySection>
            </div>

            <div className="sm:col-span-2">
              <PolicySection title="Hoe lang we je gegevens bewaren">
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>Account en trainingsgegevens:</strong> zolang je account bestaat.
                    Verwijder je je account, dan zijn ze direct weg, zie{' '}
                    <Link
                      href="/stride/account-deletion"
                      className="underline-offset-4 hover:underline"
                      style={{ color: '#4d7c0f' }}
                    >
                      Account verwijderen
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Back-ups:</strong> 14 dagen.
                  </li>
                  <li>
                    <strong>Foutmeldingen:</strong> 90 dagen, bij ons en bij Sentry.
                  </li>
                  <li>
                    <strong>Strava:</strong> tot je ontkoppelt. Dan verwijderen we de koppeling en
                    de Strava-gegevens bij je workouts. Afgeronde workouts blijven afgerond.
                  </li>
                  <li>
                    <strong>Als je organisatie stopt met Stride:</strong> dan verwijderen we de
                    gegevens van de organisatie en de trainingsgegevens van haar leden uiterlijk 90
                    dagen na het einde, zoals afgesproken met de organisatie.
                  </li>
                </ul>
              </PolicySection>
            </div>
          </div>
        </div>
      </section>

      {/* Rights & other */}
      <section className="px-6 py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Jouw rechten
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{
              color: '#18181b',
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Controle over je gegevens
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <PolicySection title="Je rechten">
                <p>Je hebt recht op:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    <strong>inzage</strong> in de gegevens die we van je hebben;
                  </li>
                  <li>
                    <strong>correctie</strong> van gegevens die niet kloppen;
                  </li>
                  <li>
                    <strong>verwijdering</strong>, direct in de app (zie{' '}
                    <Link
                      href="/stride/account-deletion"
                      className="underline-offset-4 hover:underline"
                      style={{ color: '#4d7c0f' }}
                    >
                      Account verwijderen
                    </Link>
                    );
                  </li>
                  <li>
                    <strong>overdraagbaarheid</strong>: je gegevens in een bruikbaar bestand;
                  </li>
                  <li>
                    <strong>bezwaar</strong> tegen verwerking op grond van gerechtvaardigd belang;
                  </li>
                  <li>
                    <strong>intrekken van toestemming</strong>: ontkoppel Strava in Instellingen, of
                    trek je toestemming voor reflecties daar in. Wat we eerder verwerkten blijft
                    rechtmatig.
                  </li>
                </ul>
                <p>
                  Mail naar{' '}
                  <a
                    href="mailto:jochem@jversteeg.com"
                    className="underline-offset-4 hover:underline"
                    style={{ color: '#4d7c0f' }}
                  >
                    jochem@jversteeg.com
                  </a>
                  . We reageren binnen een maand. Hoor je bij een organisatie, dan kun je ook bij
                  die organisatie terecht.
                </p>
                <p>
                  Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht
                  indienen bij de{' '}
                  <a
                    href="https://autoriteitpersoonsgegevens.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                    style={{ color: '#4d7c0f' }}
                  >
                    Autoriteit Persoonsgegevens
                  </a>
                  .
                </p>
              </PolicySection>
            </div>

            <PolicySection title="Minimumleeftijd">
              <p>
                Stride is voor mensen van 16 jaar en ouder. Blijkt dat we gegevens hebben van iemand
                die jonger is, dan verwijderen we die.
              </p>
            </PolicySection>

            <PolicySection title="Beveiliging">
              <ul className="list-disc space-y-1 pl-5">
                <li>Alle verkeer is versleuteld (HTTPS).</li>
                <li>De database staat per rij alleen toe wat jouw rol mag zien.</li>
                <li>Wachtwoorden worden alleen versleuteld opgeslagen.</li>
                <li>
                  Back-ups zijn versleuteld voordat ze de database verlaten, en bevatten geen
                  wachtwoorden of Strava-sleutels.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Wijzigingen">
              <p>
                Veranderen we dit beleid op een belangrijk punt, dan vragen we je in de app opnieuw
                akkoord te gaan. De datum bovenaan zegt wanneer het voor het laatst is bijgewerkt.
              </p>
            </PolicySection>

            <PolicySection title="Contact">
              <p>
                Jochem Versteeg,{' '}
                <a
                  href="mailto:jochem@jversteeg.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  jochem@jversteeg.com
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StrideFooter
        links={[
          { href: '/stride/terms', label: 'Algemene voorwaarden' },
          { href: '/stride', label: 'Terug naar Stride' },
        ]}
      />
    </main>
  );
}
