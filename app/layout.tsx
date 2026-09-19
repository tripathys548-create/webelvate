import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.webelvate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WebElvate | Websites for Sambalpur & Bargarh Businesses",
  description:
    "WebElvate builds fast, affordable websites for local businesses in Sambalpur and Bargarh, Odisha. Get a free sample site before you pay anything.",
  keywords: [
    "web design Sambalpur",
    "web design Bargarh",
    "website developer Odisha",
    "WebElvate",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "WebElvate | Websites for Sambalpur & Bargarh Businesses",
    description:
      "Fast, affordable websites for local businesses in Sambalpur and Bargarh, Odisha. See a free sample before you pay anything.",
    url: siteUrl,
    siteName: "WebElvate",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WebElvate | Websites for Sambalpur & Bargarh Businesses",
    description:
      "Fast, affordable websites for local businesses in Sambalpur and Bargarh, Odisha. See a free sample before you pay anything.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebElvate",
  url: siteUrl,
  description:
    "WebElvate designs and builds fast, mobile-friendly websites for local shops, clinics, hotels, and businesses in Sambalpur and Bargarh, Odisha.",
  areaServed: [
    { "@type": "City", name: "Sambalpur" },
    { "@type": "City", name: "Bargarh" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  telephone: "+91-7077652489",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${serifFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans">
        {children}
      </body>
    </html>
  );
}
