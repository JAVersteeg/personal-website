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
          className="mt-2 space-y-3 text-sm leading-relaxed [&_p]:text-inherit [&_ul]:text-inherit [&_li]:text-inherit [&_ol]:text-inherit"
          style={{ fontFamily: 'inherit', fontWeight: 400, color: '#18181b', opacity: 0.7 }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Account verwijderen — Stride',
}

export default function StrideAccountDeletionPage() {
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
          Account verwijderen
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
        >
          Ingangsdatum: 5 september 2026 &nbsp;·&nbsp; Laatst bijgewerkt: 5 september 2026
        </p>
      </section>

      {/* Intro & how to delete */}
      <section
        className="relative z-20 px-6 py-16"
        style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
          >
            Je kunt op elk moment verwijdering van je Stride-account en alle bijbehorende gegevens
            aanvragen, rechtstreeks vanuit de app. Deze pagina legt uit hoe, en precies wat er
            wordt verwijderd.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Zo verwijder je je account">
              <ol className="list-decimal space-y-1 pl-5">
                <li>Open de Stride app en log in.</li>
                <li>Ga naar <strong>Instellingen</strong>, bereikbaar via het hamburgermenu.</li>
                <li>Scroll naar beneden en tik op <strong>Account verwijderen</strong>.</li>
                <li>Bevestig de melding. Verwijdering gebeurt direct en kan niet ongedaan worden gemaakt.</li>
              </ol>
              <p>
                Een coach met nog toegewezen lopers moet hen eerst verwijderen of overdragen — de
                app laat je weten of dit op jou van toepassing is.
              </p>
            </PolicySection>

            <PolicySection title="Geen toegang tot de app">
              <p>
                Heb je geen toegang meer tot de app (bijvoorbeeld omdat je je toestel bent kwijtgeraakt
                of niet kunt inloggen), mail dan naar{' '}
                <a
                  href="mailto:jochem@jversteeg.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  jochem@jversteeg.com
                </a>{' '}
                vanaf het e-mailadres van je account en wij verwijderen het account binnen 30 dagen
                voor je.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* What gets deleted */}
      <section
        className="relative z-10 px-6 py-16"
        style={{ backgroundColor: '#f8faf5', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Wat er wordt verwijderd
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Alles, direct en volledig
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Verwijderde gegevens">
              <p>Het verwijderen van je account verwijdert permanent:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Je accountgegevens (e-mailadres, naam, rol, tempozones).</li>
                <li>Je trainingsplannen en alle workouts daarin, inclusief voltooiingsstatus en reflecties.</li>
                <li>Je koppeling tussen coach en loper.</li>
                <li>Je vragenlijstantwoorden.</li>
                <li>Je inloggegevens (Supabase Auth-gebruiker).</li>
              </ul>
            </PolicySection>

            <PolicySection title="Geen bewaring">
              <p>
                Er wordt niets bewaard na verwijdering — er is geen aparte back-up of archiefkopie
                die door de app wordt bijgehouden.
              </p>
            </PolicySection>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="px-6 py-16"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-md uppercase tracking-[0.2em]"
            style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
          >
            Vragen
          </p>
          <h2
            className="mt-3 text-xl sm:text-3xl"
            style={{ color: '#18181b', fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Neem contact op
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PolicySection title="Contact">
              <p>
                Vragen over het verwijderen van je account of je gegevens:{' '}
                <a
                  href="mailto:jochem@jversteeg.com"
                  className="underline-offset-4 hover:underline"
                  style={{ color: '#4d7c0f' }}
                >
                  jochem@jversteeg.com
                </a>
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
                  Privacybeleid
                </Link>
                .
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
