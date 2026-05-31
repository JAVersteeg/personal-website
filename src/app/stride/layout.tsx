import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stride',
  description: 'Training management for running coaches and their trainees.',
}

interface StrideLayoutProps {
  children: ReactNode
}

export default function StrideLayout({ children }: StrideLayoutProps) {
  return (
    <div
      className={inter.className}
      style={{ fontFamily: inter.style.fontFamily }}
    >
      <style>{`
        .${inter.className} p,
        .${inter.className} a,
        .${inter.className} ul,
        .${inter.className} li,
        .${inter.className} span,
        .${inter.className} h1,
        .${inter.className} h2,
        .${inter.className} h3,
        .${inter.className} h4 {
          font-family: inherit !important;
          font-variation-settings: normal !important;
        }
        .${inter.className} p,
        .${inter.className} a,
        .${inter.className} ul,
        .${inter.className} li,
        .${inter.className} span {
          font-weight: 400;
        }
      `}</style>
      {children}
    </div>
  )
}
