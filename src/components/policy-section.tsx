import type { ReactNode } from 'react';

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

// The dot is an SVG circle rather than a rounded div: a div at a fractional x
// position gets its edges pixel-snapped independently, which can render it a
// device pixel wider than tall. The circle stays round inside the snapped box;
// overflow-visible stops the snapped box from clipping its anti-aliased edge.
// min-w-0 and break-words keep long words (e.g. email addresses) from
// overflowing on small screens.
export default function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <div className="flex gap-4">
      <svg
        aria-hidden="true"
        className="mt-1 shrink-0 overflow-visible"
        width="8"
        height="8"
        viewBox="0 0 8 8"
      >
        <circle cx="4" cy="4" r="4" fill="#84cc16" />
      </svg>
      <div className="min-w-0">
        <h4
          className="text-base leading-snug uppercase"
          style={{ fontFamily: 'inherit', fontWeight: 600, color: 'inherit' }}
        >
          {title}
        </h4>
        <div
          className="mt-2 space-y-3 text-sm leading-relaxed break-words [&_li]:text-inherit [&_ol]:text-inherit [&_p]:text-inherit [&_ul]:text-inherit"
          style={{ fontFamily: 'inherit', fontWeight: 400, color: '#18181b', opacity: 0.7 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
