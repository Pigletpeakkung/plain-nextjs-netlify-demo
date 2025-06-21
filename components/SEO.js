// components/SEO.js
import Head from 'next/head'

const SEO = ({ 
  title = "Pageant Empress | Where Crowns Meet Digital Empires",
  description = "Premium pageant content, rising stars spotlight, and expert analysis by George G. Professional pageant promotion and talent management services.",
  image = "/images/og-pageant-empress.jpg",
  url = "https://pageantempress.netlify.app",
  keywords = "pageant, beauty queen, miss universe, george g, pageant empress, crown, beauty, talent management, rising stars"
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Thanattsitt S. (ThannxAI)" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Pageant Empress" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Schema.org for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pageant Empress",
            "url": url,
            "logo": `${url}/images/logo.png`,
            "description": description,
            "founder": {
              "@type": "Person",
              "name": "George G."
            },
            "sameAs": [
              "https://www.youtube.com/@pageantempress",
              "https://www.instagram.com/pageantempress/"
            ]
          })
        }}
      />
    </Head>
  )
}

export default SEO