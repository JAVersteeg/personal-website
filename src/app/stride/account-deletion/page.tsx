import Link from 'next/link';
import PolicySection from '@/components/policy-section';
import StrideFooter from '@/components/stride-footer';

export const metadata = {
  title: 'Account verwijderen — Stride',
};

export default function StrideAccountDeletionPage() {
  return (
    <main
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'inherit' }}
    >
      {/* Hero header */}
      <section
        className="relative z-40 flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
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
          Account verwijderen
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
        >
          Ingangsdatum: 5 september 2026 &nbsp;·&nbsp; Laatst bijgewerkt: 21 oktober 2026
        </p>
      </section>

      {/* Intro & how to delete */}
      <section
        className="relative z-30 px-6 py-16"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-base leading-relaxed sm:text-lg"
            style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Je kunt je Stride-account op elk moment verwijderen, rechtstreeks in de app. Deze pagina
            legt uit hoe, wat er verdwijnt en wat er (kort) blijft.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Zo verwijder je je account">
              <ol className="list-decimal space-y-1 pl-5">
                <li>Open de Stride-app en log in.</li>
                <li>
                  Ga naar <strong>Instellingen</strong>:
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>als trainee via het tandwiel rechtsboven op Home;</li>
                    <li>als coach of beheerder via het menu.</li>
                  </ul>
                </li>
                <li>
                  Scroll naar beneden en tik op <strong>Account verwijderen</strong>.
                </li>
                <li>Bevestig.</li>
              </ol>
              <p>Je account wordt direct verwijderd. Dat kan niet ongedaan worden gemaakt.</p>
            </PolicySection>

            <PolicySection title="Geen toegang tot de app?">
              <p>
                Kun je niet meer inloggen, bijvoorbeeld omdat je je telefoon kwijt bent? Mail dan
                naar{' '}
                <a
                  href="mailto:jochem@jversteeg.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  jochem@jversteeg.com
                </a>{' '}
                vanaf het e-mailadres van je account. We verwijderen je account binnen een maand en
                laten je weten wanneer het gebeurd is.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* What gets deleted */}
      <section
        className="relative z-20 px-6 py-16"
        style={{ backgroundColor: '#f8faf5', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Wat er wordt verwijderd
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
            Direct verwijderd
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Je account">
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Je account: e-mailadres, naam, telefoonnummer, rol, tempozones en je
                  inloggegevens.
                </li>
                <li>Wanneer je welke versie van de voorwaarden accepteerde.</li>
                <li>Je koppeling met je coach, en de aanvragen om je te koppelen.</li>
                <li>Je antwoorden op de vragenlijst.</li>
                <li>Je Strava-koppeling, met de Strava-gegevens bij je workouts.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Als je getraind wordt">
              <p>
                Je trainingsschema&apos;s met alle workouts, je scores en reflecties, de
                periodisering, je pauze en het overzicht van je activiteit dat je coach ziet.
              </p>
            </PolicySection>

            <PolicySection title="Als je coach bent">
              <p>
                Je koppelingen met je trainees en je workoutbibliotheek. Je trainees houden hun
                schema&apos;s.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* What stays for a while */}
      <section
        className="relative z-10 px-6 py-16"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Wat er blijft
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
            Wat er nog even blijft
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Back-ups">
              <p>
                We maken elke nacht een versleutelde back-up. Daarin staan je gegevens nog maximaal
                14 dagen; daarna worden ze verwijderd.
              </p>
            </PolicySection>

            <PolicySection title="Foutmeldingen">
              <p>
                Een foutmelding bevat geen naam, e-mailadres of trainingsgegevens. In onze eigen
                foutmeldingen wordt je account-ID bij het verwijderen gewist. Foutrapporten bij
                Sentry, onze foutmonitoring, houden je account-ID tot ze na 90 dagen vervallen.
              </p>
            </PolicySection>

            <PolicySection title="Beslissingen als beheerder">
              <p>
                Aanvragen die je als beheerder hebt goedgekeurd of afgewezen blijven bestaan, maar
                niet meer op jouw naam.
              </p>
            </PolicySection>

            <PolicySection title="Je organisatie">
              <p>
                De naam en het logo van je organisatie horen bij de organisatie, niet bij jou, en
                blijven bestaan.
              </p>
            </PolicySection>

            <PolicySection title="Strava">
              <p>
                Stride heeft na het verwijderen geen toegang meer tot je Strava. Je activiteiten op
                Strava zelf blijven staan. Stride staat nog wel in je Strava-instellingen onder
                &ldquo;Mijn apps&rdquo;; daar kun je het ook verwijderen.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md tracking-[0.2em] uppercase"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Vragen
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
            Neem contact op
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Contact">
              <p>
                Mail naar{' '}
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

            <PolicySection title="Privacybeleid">
              <p>
                Zie ook ons{' '}
                <Link
                  href="/stride/privacy-policy"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  privacybeleid
                </Link>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StrideFooter links={[{ href: '/stride', label: 'Terug naar Stride' }]} />
    </main>
  );
}
