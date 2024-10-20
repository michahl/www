import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "@michahl",
  description: "Software Developer",
  keywords: "michahl",
  author: "@michahl",
  icons: {
    icon: "https://github.com/michahl.png",
    appleIcon: "https://github.com/michahl.png",
    appleTouchIcon: "https://github.com/michahl.png"
  },
  openGraph: {
    title: "@michahl",
    description: "Software Developer",
    url: "https://michahl.com",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
