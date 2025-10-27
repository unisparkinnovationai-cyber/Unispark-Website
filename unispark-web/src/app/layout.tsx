import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UniSpark Innovation - IT Infrastructure & Digital Transformation",
  description: "Transform your business with cutting-edge IT solutions, cloud migration, cybersecurity, and digital transformation services.",
  keywords: "IT infrastructure, cloud migration, cybersecurity, digital transformation, managed IT services",
  authors: [{ name: "UniSpark Innovation" }],
  openGraph: {
    title: "UniSpark Innovation - IT Infrastructure & Digital Transformation",
    description: "Transform your business with cutting-edge IT solutions and digital transformation services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
