interface StrideLogoProps {
  width?: number
  className?: string
}

export function StrideLogo({ width = 80, className }: StrideLogoProps) {
  const aspectRatio = 40 / 120
  const height = width * aspectRatio

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 34"
      fill="none"
      className={className}
      aria-label="Stride"
    >
      <text
        x="0"
        y="24"
        fontSize="24"
        letterSpacing="-1"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-inter-black-italic)' }}
      >
        STRIDE
      </text>
      <rect x="16" y="30" width="16" height="3" rx="1.5" fill="#4d7c0f" />
      <rect x="36" y="30" width="60" height="3" rx="1.5" fill="#84cc16" />
    </svg>
  )
}
