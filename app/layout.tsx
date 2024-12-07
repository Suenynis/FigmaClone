import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Room } from "./Room";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 600 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A minimalist clone of Figme for minimalistic colloboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-primary-grey-200 ${geistMono.variable} antialiased`}>
          <Room>
        {children}
          </Room>
      </body>
    </html>
  );
}
