import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://texashomeservices.example"),
  title: {
    default: "Texas Home Services — Local pros, made for Texas",
    template: "%s | Texas Home Services",
  },
  description:
    "Find screened, insured Texas home pros for plumbing, HVAC, roofing, foundation repair, and 30+ more services. Serving Houston, Dallas, Austin, San Antonio, and the rest of the state.",
  openGraph: {
    title: "Texas Home Services — Local pros, made for Texas",
    description:
      "Find screened Texas home pros across 30+ services and 18+ cities.",
    type: "website",
    siteName: "Texas Home Services",
    images: [{ url: "/og/default.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Home Services",
    description: "Local pros, made for Texas.",
    images: ["/og/default.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
