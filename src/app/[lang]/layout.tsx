import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";

import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "YUS Automation",
  description: "Automatiza, acelera y adapta tu empresa o negocio con la ultima tecnología",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  
  return (
    <html className={`${GeistSans.variable}`} lang={params.lang}>
      <body className="min-h-screen bg-background antialiased"><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >{children}<Toaster/></ThemeProvider></body>
    </html>
  );
}
