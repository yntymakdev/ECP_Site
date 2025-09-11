import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { I18nProvider } from "@/i18n/i18n";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo.constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(process.env.APP_URL || "https://example.com"),

  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: process.env.APP_URL || "https://example.com",
    siteName: SITE_NAME,
    images: [
      {
        url: "/path/to/your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Site Preview Image",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: `@yourTwitterHandle`,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },

  // Указываем alternates корректно
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Микроразметка для организации */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "${SITE_NAME}",
            "url": "${process.env.APP_URL || "https://example.com"}",
            "logo": "/path/to/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourPage",
              "https://twitter.com/yourTwitterHandle"
            ]
          }
        `}
      </script>

      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={SITE_DESCRIPTION} />

          {/* Open Graph */}
          <meta property="og:title" content={SITE_NAME} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content="/path/to/your-image.jpg" />
          <meta property="og:url" content={process.env.APP_URL || "https://example.com"} />
          <meta property="og:site_name" content={SITE_NAME} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourTwitterHandle" />
          <meta name="twitter:title" content={SITE_NAME} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta name="twitter:image" content="/path/to/your-image.jpg" />

          {/* Hreflang для мультиязычных страниц */}
          <link rel="alternate" hrefLang="en-US" href={`${process.env.APP_URL || "https://example.com"}/en/`} />
          <link rel="alternate" hrefLang="ru-RU" href={`${process.env.APP_URL || "https://example.com"}/ru/`} />

          <title>{SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <I18nProvider>{children}</I18nProvider>
        </body>
      </html>
    </>
  );
}
