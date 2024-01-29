import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "isur.dev",
  description: 'Artur "Isur" Bednarczyk Portfolio Website',
  applicationName: "isur.dev",
  generator: "nextjs, react, typescript",
  keywords: [
    "isur",
    "artur",
    "bednarczyk",
    "portfolio",
    "website",
    "personal",
    "projects",
    "skills",
    "nodejs",
    "typescript",
    "dotfiles",
    "contact",
    "dotfiles",
  ],
  creator: 'Artur "Isur" Bednarczyk',
  publisher: 'Artur "Isur" Bednarczyk',
  formatDetection: {
    telephone: false,
    address: false,
    email: true,
    url: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={jetbrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
