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

export const metadata: Metadata = {
  title: "Azka Andya Safira | Fullstack Weebs",
  description: "Frontend Engineer with 4+ years of experience. Specialized in Next.js, React, and modern web development. Bringing sleek interfaces and solid code to the table.",
  keywords: ["Frontend Developer", "Next.js", "React", "Web Developer", "UI/UX", "Bekasi"],
  authors: [{ name: "Azka Andya Safira" }],
  creator: "Azka Andya Safira",
  metadataBase: new URL("https://azkaxism.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://azkaxism.com",
    siteName: "Azka Andya Safira - Frontend Developer",
    title: "Azka Andya Safira | Fullstack Weebs",
    description: "Frontend Engineer with 4+ years of experience. Specialized in Next.js, React, and modern web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azka Andya Safira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azka Andya Safira | Frontend Developer",
    description: "Frontend Engineer with 4+ years of experience in Next.js and React.",
    creator: "@azkaxism",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://azkaxism.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Azka Andya Safira",
    url: "https://azkaxism.com",
    jobTitle: "Frontend Engineer",
    description: "Frontend Engineer with 4+ years of experience in building sleek interfaces and solving complex problems.",
    sameAs: [
      "https://linkedin.com/in/azkaxism",
      "https://github.com/azkaxism",
    ],
    workLocation: {
      "@type": "Place",
      name: "Bekasi, Jawa Barat, Indonesia",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFD21E" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://azkaxism.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
