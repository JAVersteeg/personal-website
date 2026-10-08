import { InfoSectionProps } from '@/types/types';

export default function InfoSection({
  className,
  title,
  children,
  borderColor,
  backgroundColour,
}: InfoSectionProps) {
  if (!borderColor) borderColor = 'var(--color-primary)';
  if (!backgroundColour) backgroundColour = 'var(--color-background)';

  return (
    <div className={className + ' p-4'} style={{ borderColor, backgroundColor: backgroundColour }}>
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </div>
  );
}
