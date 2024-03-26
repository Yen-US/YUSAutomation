import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Notery AI",
  description: "Free, gratis, CHATGPT like took, simple and fast chatbot for taking notes and reminders",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen bg-background antialiased"><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >{children}<Toaster/></ThemeProvider></body>
    </html>
  );
}
