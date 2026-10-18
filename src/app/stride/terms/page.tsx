import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PolicySection from '@/components/policy-section';
import StrideFooter from '@/components/stride-footer';
import { TermsGroup } from '@/features/stride-terms/components/terms-group';
import { TERMS_MDX_COMPONENTS } from '@/features/stride-terms/components/terms-mdx-components';
import { getTerms } from '@/features/stride-terms/utils/terms';

export const metadata = {
  title: 'Algemene voorwaarden — Stride',
};

export default function StrideTermsPage() {
  const terms = getTerms();

  return (
    <main
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'inherit' }}
    >
      {/* Hero header */}
      <section
        className="relative z-30 flex flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
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
          Algemene voorwaarden
        </h1>
        <p
          className="mt-3 text-sm"
          style={{ color: '#52525b', fontFamily: 'inherit', fontWeight: 400 }}
        >
          {terms.version}
        </p>
      </section>

      {terms.groups.map((group, index) => (
        <TermsGroup
          key={group.heading}
          eyebrow={group.eyebrow}
          heading={group.heading}
          index={index}
          isLast={index === terms.groups.length - 1}
        >
          {group.sections.map((section) => (
            <PolicySection key={section.title} title={section.title}>
              <MDXRemote source={section.body} components={TERMS_MDX_COMPONENTS} />
            </PolicySection>
          ))}
        </TermsGroup>
      ))}

      {/* Footer */}
      <StrideFooter
        links={[
          { href: '/stride/privacy-policy', label: 'Privacybeleid' },
          { href: '/stride', label: 'Terug naar Stride' },
        ]}
      />
    </main>
  );
}
