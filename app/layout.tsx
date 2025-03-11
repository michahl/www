import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Rubik } from "next/font/google";
import { siteConfig } from "@/config/site";
import "../styles/global.css";
import TransitionProvider from "@/components/transition-provider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.username,
    template: `%s | ${siteConfig.username}`
  },
  description: siteConfig.description,
  keywords: [
    "michahl christoforatos",
    "michahl christoforatos portfolio",
    "michahl",
    "michahl portfolio",
    "michahl github",
    "michahl developer"
  ],
  authors: [
    {
      name: siteConfig.username,
      url: siteConfig.url
    }
  ],
  creator: "michahl",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@michahl",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-32x32.png", sizes: "32x32" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16" },
      "/assets/favicon.ico"
    ],
    apple: "/assets/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/assets/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/assets/android-chrome-512x512.png", sizes: "512x512" }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={`${rubik.className} antialiased`}
      >
        <TransitionProvider>{children}</TransitionProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}