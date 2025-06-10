import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
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

export const metadata: Metadata = {
  title: "پویا یگانه فر | توسعه‌دهنده وب و برنامه‌نویس",
  description:
    "توسعه‌دهنده وب با تخصص در React، Next.js و WordPress. متخصص در طراحی رابط کاربری و توسعه افزونه‌های وردپرس",
  keywords: [
    "توسعه وب",
    "طراحی سایت",
    "برنامه نویس",
    "وردپرس",
    "ری‌اکت",
    "نکست جی‌اس",
  ],
  authors: [{ name: "Pooya Yeganehfar" }],
  creator: "Pooya Yeganehfar",
  publisher: "Pooya Yeganehfar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "پویا یگانه فر | توسعه‌دهنده وب و برنامه‌نویس",
    description: "توسعه‌دهنده وب با تخصص در React، Next.js و WordPress",
    url: "https://pooya.dev",
    siteName: "Pooya.Dev",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "پویا یگانه فر",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "پویا یگانه فر | توسعه‌دهنده وب",
    description: "توسعه‌دهنده وب با تخصص در React، Next.js و WordPress",
    images: ["/img/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://pooya.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
