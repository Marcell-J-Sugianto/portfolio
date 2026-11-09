import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
