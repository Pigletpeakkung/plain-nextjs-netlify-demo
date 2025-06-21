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
                "@type": "ImageObject",
        "url": "https://pageantempress.netlify.app/images/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Premium pageant content, rising stars spotlight, and expert analysis",
      "founder": {
        "@type": "Person",
        "name": "George G.",
        "url": "https://www.youtube.com/@pageantempress"
      },
      "sameAs": [
        "https://www.youtube.com/@pageantempress",
        "https://www.instagram.com/pageantempress/"
      ]
    },
    {
      "@type": "Website",
      "@id": "https://pageantempress.netlify.app/#website",
      "url": "https://pageantempress.netlify.app",
      "name": "Pageant Empress",
      "description": "Where Crowns Meet Digital Empires",
      "publisher": {
        "@id": "https://pageantempress.netlify.app/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://pageantempress.netlify.app/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://pageantempress.netlify.app/#webpage",
      "url": "https://pageantempress.netlify.app",
      "name": "Pageant Empress | Where Crowns Meet Digital Empires",
      "isPartOf": {
        "@id": "https://pageantempress.netlify.app/#website"
      },
      "about": {
        "@id": "https://pageantempress.netlify.app/#organization"
      },
      "description": "Premium pageant content, rising stars spotlight, and expert analysis by George G."
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        
        {/* DNS Prefetch for social media */}
        <link rel="dns-prefetch" href="//youtube.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pageant Empress" />
        <meta name="application-name" content="Pageant Empress" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Copyright Information */}
        <meta name="copyright" content="© 2025 Thanattsitt S. All rights reserved." />
        <meta name="developer" content="Thanattsitt S. (ThannxAI)" />
        <meta name="contact" content="thanattsitt.info@yahoo.co.uk" />
        
        {/* Performance Hints */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="prefetch" href="/images/og-pageant-empress.jpg" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-400 text-black px-4 py-2 rounded-md z-50 font-semibold"
        >
          Skip to main content
        </a>
        
        {/* Main Layout Container */}
        <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black">
          {/* Navigation will be added here if needed */}
          <MobileNavigation />
          
          {/* Main Content */}
          <main id="main-content" className="relative">
            {children}
          </main>
          
          {/* Footer with Credits */}
          <Footer />
          
          {/* Analytics Script */}
          <Analytics />
        </div>
        
        {/* Service Worker Registration */}
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}

// Mobile Navigation Component
function MobileNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👑</span>
            <span className="font-bold text-white">Pageant Empress</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="p-2 text-white hover:text-yellow-400 transition-colors"
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900/20 to-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <span className="text-3xl">👑</span>
              <span className="text-2xl font-bold gradient-empress">Pageant Empress</span>
            </div>
            <p className="text-gray-300 mb-4">
              Where crowns meet digital empires
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.youtube.com/@pageantempress"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social bg-red-600 hover:bg-red-700"
                aria-label="Visit YouTube channel"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pageantempress/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social bg-gradient-to-r from-pink-500 to-purple-500"
                aria-label="Visit Instagram profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Content Creator Credit */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">🎬 Content Creator</h3>
            <div className="text-gray-300">
              <p className="font-semibold text-yellow-400 mb-2">George G.</p>
              <p className="text-sm mb-2">Expert pageant analysis & content</p>
              <a
                href="https://www.youtube.com/@pageantempress"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm underline"
              >
                @pageantempress
              </a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">💻 Website Development</h3>
            <div className="text-gray-300">
              <p className="font-semibold text-yellow-400 mb-2">Thanattsitt S. (ThannxAI)</p>
              <p className="text-sm mb-2">Full-stack development & design</p>
              <a
                href="mailto:thanattsitt.info@yahoo.co.uk"
                className="text-yellow-400 hover:text-yellow-300 text-sm underline"
              >
                thanattsitt.info@yahoo.co.uk
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 <span className="text-yellow-400 font-semibold">Pageant Empress</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Copyright © <span className="text-yellow-400">Thanattsitt S.</span> | Developed with 💛 for the pageant community
          </p>
        </div>
      </div>
    </footer>
  )
}

// Analytics Component
function Analytics() {
  return (
    <>
      {/* Google Analytics - Replace with your actual GA4 ID */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  )
}

// Service Worker Registration
function ServiceWorkerRegistration() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
                    if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW registered: ', registration);
                })
                .catch(function(registrationError) {
                  console.log('SW registration failed: ', registrationError);
                });
            });
          }
        `,
      }}
    />
  )
}