import type { Metadata, Viewport } from "next";
import { Noto_Sans_Myanmar, Inter } from "next/font/google";
import "./globals.css";

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Myanmar Keyboard Layout Guide | SIL Myanmar (my3U)",
  description:
    "Learn how to type in Myanmar/Burmese using the SIL Myanmar3 keyboard layout. Comprehensive guide with visual keyboard charts and typing examples.",
  keywords: [
    "Myanmar keyboard",
    "Burmese typing",
    "SIL Myanmar",
    "my3U keyboard",
    "Unicode Myanmar",
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my">
      <body className={`${notoSansMyanmar.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
