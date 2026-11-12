import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Viewport } from 'next'
import { Fira_Code, Fira_Sans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

// Bundle Fira Sans with the site so mobile devices do not depend on an installed system font.
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fira-sans",
  display: "swap",
});

// Bundle Fira Code for headings so they render consistently across desktop and mobile.
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider fontClassName={`${firaSans.className} ${firaSans.variable} ${firaCode.variable}`}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
