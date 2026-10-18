import type { ReactNode } from 'react';

const BAND_BACKGROUNDS = ['#ffffff', '#f8faf5'];

interface TermsGroupProps {
  eyebrow: string;
  heading: string;
  index: number;
  isLast: boolean;
  children: ReactNode;
}

// Mirrors the banded sections on the privacy policy page: alternating
// backgrounds, each band casting a shadow onto the next one (except the last).
export function TermsGroup({ eyebrow, heading, index, isLast, children }: TermsGroupProps) {
  return (
    <section
      className="relative px-6 py-16"
      style={{
        zIndex: isLast ? undefined : 20 - index * 10,
        backgroundColor: BAND_BACKGROUNDS[index % BAND_BACKGROUNDS.length],
        boxShadow: isLast ? undefined : '0 4px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="mx-auto max-w-3xl">
        <p
          className="text-md tracking-[0.2em] uppercase"
          style={{ color: '#84cc16', fontFamily: 'inherit', fontWeight: 700 }}
        >
          {eyebrow}
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
          {heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">{children}</div>
      </div>
    </section>
  );
}
