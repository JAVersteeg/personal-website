import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { LocaleProvider } from "@/features/i18n/locale-context";
import { ThemeProvider } from "@/features/theme/theme-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = localFont({
  src: "../../public/fonts/Fraunces-VariableFont_SOFTWONKopszwght.ttf",
  variable: "--font-fraunces",
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jversteeg.com",
  description: "Personal website of Jochem Versteeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <LocaleProvider>
            <main>{children}</main>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
