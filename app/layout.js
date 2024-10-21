import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Rubik } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
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
  author: [
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
    icon: "https://github.com/michahl.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
