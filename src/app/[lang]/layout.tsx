import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NavbarsParentComponent from "@/components/navbar-parent";
import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n-config";
import type { NestedDictionary } from "./page";
import Footer from "@/components/footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "YUS Automation",
  description:
    "Automatiza, acelera y adapta tu empresa o negocio con la ultima tecnología",
};

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const wholeDictionary = await getDictionary(lang);
  const navDictionary = wholeDictionary["NavBar"];
  const footerDictionary = wholeDictionary["Footer"];

  return (
    <html className={`${GeistSans.variable}`} lang={lang}>
      <body className="flex min-w-screen min-h-screen flex-col justify-between bg-background antialiased font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarsParentComponent
            dictionary={navDictionary as NestedDictionary}
            lang={lang}
          />{" "}
          {children}
          <Footer dictionary={footerDictionary as NestedDictionary} />{" "}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
