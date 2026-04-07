import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/components/ui/cookie-banner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Telva — The Future of Secure Transactions",
  description: "Apply in minutes. Pay anywhere in the world. Zero foreign fees, instant approvals. The premium payment card built for modern life.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Telva — The Future of Secure Transactions",
    description: "Apply in minutes. Pay anywhere in the world. Zero foreign fees, instant approvals.",
    siteName: "Telva",
    type: "website",
    images: [{ url: "/hero-graphic.png", width: 1200, height: 630, alt: "Telva Premium Payment Card" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telva — The Future of Secure Transactions",
    description: "Apply in minutes. Pay anywhere in the world. Zero foreign fees, instant approvals.",
    images: ["/hero-graphic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <CookieBanner />
          </ThemeProvider>
        </ClerkProvider>
        <Analytics />
      </body>
    </html>
  );
}
