import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Leora Ayurveda Wellness Clinic',
    default: 'Leora Ayurveda Wellness Clinic | Holistic Healing in Aberdeen, Scotland',
  },
  description: "Discover holistic Ayurvedic healing at Leora Wellness Clinic in Aberdeen, Scotland. Authentic consultations, herbal medicine, women's health, and detox programs. Book your consultation today.",
  keywords: [
    'Ayurveda consultation Aberdeen',
    'holistic healing Scotland',
    'Ayurvedic medicine UK',
    'women\'s health Aberdeen',
    'detox programs Scotland',
    'herbal medicine consultation',
    'mind-body wellness Aberdeen',
    'digestive health ayurveda',
    'hormonal balance natural',
    'wellness clinic Aberdeen'
  ],
  authors: [{ name: 'Leora Ayurveda Wellness Clinic' }],
  creator: 'Leora Ayurveda Wellness Clinic',
  publisher: 'Leora Ayurveda Wellness Clinic',
  metadataBase: new URL('https://www.leoraayurveda.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.leoraayurveda.co.uk',
    siteName: 'Leora Ayurveda Wellness Clinic',
    title: 'Leora Ayurveda Wellness Clinic | Holistic Healing in Aberdeen, Scotland',
    description: "Discover holistic Ayurvedic healing at Leora Wellness Clinic in Aberdeen, Scotland. Authentic consultations, herbal medicine, women's health, and detox programs.",
    images: [
      {
        url: '/assets/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Leora Ayurveda Wellness Clinic - Holistic Healing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leora Ayurveda Wellness Clinic | Holistic Healing in Aberdeen, Scotland',
    description: "Discover holistic Ayurvedic healing at Leora Wellness Clinic in Aberdeen, Scotland. Book your consultation today.",
    images: ['/assets/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#4A7C59" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Leora Ayurveda Wellness Clinic",
              description: "Holistic Ayurvedic healing clinic in Aberdeen, Scotland offering authentic consultations, herbal medicine, and wellness programs.",
              url: "https://www.leoraayurveda.co.uk",
              telephone: "+44 7378 686 559",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Aberdeen",
                addressRegion: "Scotland",
                addressCountry: "UK"
              },
              openingHours: "Mo-Fr 09:00-17:00",
              priceRange: "££",
              image: "https://www.leoraayurveda.co.uk/assets/clinic-photo.jpg",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Ayurvedic Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ayurvedic Consultation"
                    }
                  },
                  {
                    "@type": "Offer", 
                    itemOffered: {
                      "@type": "Service",
                      name: "Herbal Medicine & Supplements"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service", 
                      name: "Women's Health & Hormonal Balance"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
