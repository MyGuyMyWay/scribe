import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const latoFont = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});

const poppsinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Scriber",
  description: "AI powered transcriber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${latoFont.variable} ${poppsinsFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
