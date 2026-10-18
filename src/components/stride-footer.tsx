import Link from 'next/link';

const FOOTER_TEXT_STYLE = { color: '#71717a', fontFamily: 'inherit', fontWeight: 400 };

interface StrideFooterLink {
  href: string;
  label: string;
}

interface StrideFooterProps {
  links: StrideFooterLink[];
}

export default function StrideFooter({ links }: StrideFooterProps) {
  return (
    <footer
      className="border-t px-6 py-8"
      style={{ borderColor: '#e4e4e7', backgroundColor: '#f4f4f5' }}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm" style={FOOTER_TEXT_STYLE}>
          © 2026 Stride · by Jochem Versteeg
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm underline-offset-4 hover:underline"
              style={FOOTER_TEXT_STYLE}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
