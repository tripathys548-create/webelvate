import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  openGraph: {
    title: "WebElvate | Websites for Sambalpur & Bargarh Businesses",
    description:
      "Fast, affordable websites for local businesses in Sambalpur and Bargarh, Odisha. See a free sample before you pay anything.",
    url: siteUrl,
    siteName: "WebElvate",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
