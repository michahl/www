import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "@michahl",
  description: "Software Developer",
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
