import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const geistMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spaces",
  description: "Seek. Find. Book.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMontserrat.variable} ${geistInter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
