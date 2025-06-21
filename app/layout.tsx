import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Pageant Empress | Where Crowns Meet Digital Empires',
    template: '%s | Pageant Empress'
  },
  description: 'Premium pageant content, rising stars spotlight, and expert analysis by George G. Professional pageant promotion and talent management services featuring new faces and crown moments.',
  keywords: [
    'pageant',
    'beauty queen',
    'miss universe',
    'george g',
    'pageant empress',
    'crown',
    'beauty',
    'talent management',
    'rising stars',
    'new faces',
    'pageant analysis',
    'beauty contest',
    'miss world',
    'pageant training'
  ],
  authors: [
    {
      name: 'George G.',
      url: 'https://www.youtube.com/@pageantempress'
    },
    {
      name: 'Thanattsitt S. (ThannxAI)',
      url: 'mailto:thanattsitt.info@yahoo.co.uk'
    }
  ],
  creator: 'Thanattsitt S. (ThannxAI)',
  publisher: 'Pageant Empress',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pageantempress.netlify.app',
    siteName: 'Pageant Empress',
    title: 'Pageant Empress | Where Crowns Meet Digital Empires',
    description: 'Premium pageant content, rising stars spotlight, and expert analysis by George G.',
    images: [
      {
        url: '/images/og-pageant-empress.jpg',
        width: 1200,
        height: 630,
        alt: 'Pageant Empress - Premium Pageant Content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pageant Empress | Where Crowns Meet Digital Empires',
    description: 'Premium pageant content, rising stars spotlight, and expert analysis by George G.',
    images: ['/images/twitter-pageant-empress.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://pageantempress.netlify.app',
  },
  category: 'Entertainment',
  classification: 'Pageant & Beauty Content',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4AF37' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pageantempress.netlify.app/#organization",
      "name": "Pageant Empress",
      "url": "https://pageantempress.netlify.app",
      "logo": {
        "@type": "