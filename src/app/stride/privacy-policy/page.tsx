import Link from 'next/link'

interface PolicySectionProps {
  title: string
  children: React.ReactNode
}

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <div className="flex gap-4">
      <div
        className="mt-1 rounded-full"
        style={{ backgroundColor: '#84cc16', width: '8px', height: '8px', flex: 'none' }}
      />
      <div>
        <h4
          className="text-base uppercase leading-snug"
          style={{ fontFamily: 'inherit', fontWeight: 600, color: 'inherit' }}
        >
          {title}
        </h4>
        <div
          className="mt-2 space-y-3 text-sm leading-relaxed [&_p]:text-inherit [&_ul]:text-inherit [&_li]:text-inherit"
          style={{ fontFamily: 'inherit', fontWeight: 400, color: '#18181b', opacity: 0.7 }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Privacybeleid — Stride',
}

export default function StridePrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'inherit' }}
    >
      {/* Hero header */}
      <section
        className="relative z-30 flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
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
          className="text-2xl font-black italic uppercase tracking-tight"
          style={{ color: '#84cc16', fontWeight: 900, fontFamily: 'inherit' }}
        >
          Stride
        </span>
        <h1
          className="mt-3 text-3xl sm:text-4xl"
          style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Privacybeleid
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
        >
          Ingangsdatum: 15 mei 2026 &nbsp;·&nbsp; Laatst bijgewerkt: 15 mei 2026
        </p>
      </section>

      {/* Intro */}
      <section
        className="relative z-20 px-6 py-16"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Stride (&ldquo;de app&rdquo;, &ldquo;wij&rdquo;, &ldquo;ons&rdquo;) is een trainingsapp
            voor coaches en lopers. Dit beleid legt uit welke persoonsgegevens wij verzamelen,
            waarom wij dat doen, hoe lang wij ze bewaren en welke rechten jij hebt.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Wie zijn wij">
              <p>
                Stride wordt ontwikkeld en beheerd door Jochem Versteeg. Heb je vragen over dit
                beleid of over je gegevens? Neem contact op via{' '}
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

            <PolicySection title="Welke gegevens">
              <p>Wij verzamelen alleen wat nodig is:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li><strong>Accountgegevens</strong> — e-mailadres, voornaam en achternaam.</li>
                <li><strong>Rol</strong> — admin, coach of loper. Toegewezen door een beheerder.</li>
                <li><strong>Trainingsdata</strong> — plannen, workouts, voltooiingen, reflecties en scores (1–10).</li>
              </ul>
              <p>
                Wij verzamelen <strong>geen </strong> locatiegegevens, betaalinformatie of
                apparaat-ID&rsquo;s.
              </p>
            </PolicySection>

            <PolicySection title="Waarom wij het verzamelen">
              <ul className="list-disc space-y-1 pl-5">
                <li><strong>Accountgegevens</strong> — om je te authenticeren en herkenbaar te maken voor je coach of lopers.</li>
                <li><strong>Trainingsdata</strong> — zodat coaches plannen kunnen maken en lopers hun workouts kunnen bijhouden.</li>
              </ul>
              <p>Er zitten geen advertenties, analytics of third-party trackers in de app.</p>
            </PolicySection>

            <PolicySection title="Juridische grondslag (AVG)">
              <p>
                Binnen de Europese Economische Ruimte verwerken wij je gegevens op basis van{' '}
                <strong>uitvoering van een overeenkomst</strong> (artikel 6(1)(b) AVG) — we
                hebben de gegevens nodig om de dienst te leveren waarvoor je je hebt aangemeld.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Storage & retention */}
      <section
        className="relative z-10 px-6 py-16"
        style={{ backgroundColor: '#f8faf5', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Opslag & bewaring
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Hoe wij je gegevens beschermen
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Opslag">
              <p>
                Alle gegevens worden opgeslagen in <strong>Supabase</strong>, een clouddatabase
                en authenticatieplatform. Data staat op servers in de Europese Unie (West-Europa).
                Supabase past encryptie toe in transit (TLS) en at rest. Bekijk het beveiligingsbeleid
                op{' '}
                <a
                  href="https://supabase.com/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  supabase.com/security
                </a>
                .
              </p>
              <p>
                Wij verkopen, verhuren of delen je gegevens niet met derden, behalve Supabase als
                infrastructuurprovider.
              </p>
            </PolicySection>

            <PolicySection title="Bewaartermijn">
              <p>
                Wij bewaren je gegevens zolang je account actief is. Bij verwijdering van je account
                worden alle persoonsgegevens en bijbehorende trainingsdata permanent verwijderd
                binnen <strong>30 dagen</strong>.
              </p>
              <p>
                Meer informatie over hoe je je account verwijdert en wat er precies wordt
                verwijderd vind je op de pagina{' '}
                <Link
                  href="/stride/account-deletion"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  Account verwijderen
                </Link>
                .
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Rights & other */}
      <section
        className="px-6 py-16"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Jouw rechten
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Controle over je gegevens
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Jouw rechten">
              <p>Je hebt het recht op:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li><strong>Inzage</strong> — een kopie opvragen van je persoonsgegevens.</li>
                <li><strong>Rectificatie</strong> — onjuiste gegevens laten corrigeren.</li>
                <li><strong>Verwijdering</strong> — je account en alle gegevens laten verwijderen.</li>
                <li><strong>Overdraagbaarheid</strong> — je gegevens ontvangen in een gestructureerd formaat.</li>
                <li><strong>Bezwaar</strong> — bezwaar maken tegen verwerking op basis van gerechtvaardigd belang (momenteel niet van toepassing).</li>
              </ul>
              <p>
                Neem contact op via{' '}
                <a
                  href="mailto:jochem@jversteeg.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  jochem@jversteeg.com
                </a>
                . Wij reageren binnen 30 dagen.
              </p>
            </PolicySection>

            <PolicySection title="Kinderen">
              <p>
                Stride is niet gericht op kinderen onder de 16 jaar. Wij verzamelen niet bewust
                persoonsgegevens van personen onder de 16. Als je denkt dat dit per ongeluk is
                gebeurd, neem dan contact met ons op en wij verwijderen de gegevens direct.
              </p>
            </PolicySection>

            <PolicySection title="Wijzigingen">
              <p>
                Bij wezenlijke wijzigingen in dit beleid passen wij de ingangsdatum bovenaan deze
                pagina aan. Bij significante wijzigingen kunnen wij gebruikers per e-mail informeren.
              </p>
            </PolicySection>

            <PolicySection title="Contact">
              <p>
                Vragen of verzoeken:{' '}
                <a
                  href="mailto:jochem@jversteeg.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  jochem@jversteeg.com
                </a>
              </p>
            </PolicySection>
          </div>
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
            © 2026 Jochem Versteeg · Stride
          </p>
          <Link
            href="/stride"
            className="text-sm underline-offset-4 hover:underline"
            style={{ color: '#71717a', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Terug naar Stride
          </Link>
        </div>
      </footer>
    </main>
  )
}
