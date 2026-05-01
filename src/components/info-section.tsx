import { InfoSectionProps } from "@/types/types";

export default function InfoSection({ className, title, children, borderColor, backgroundColour }: InfoSectionProps) {
  if (!borderColor) borderColor = "var(--color-primary)";
  if (!backgroundColour) backgroundColour = "var(--color-background)";

  return (
  <div className={className + " rounded-3xl border border-3 p-4 "} style={{ borderColor, backgroundColor: backgroundColour }}
    >
        {title && <h3 className="card-title">{title}</h3>}
        {children}
    </div>
  );
}
