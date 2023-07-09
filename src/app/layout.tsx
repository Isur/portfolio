import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Artur "Isur" Bednarczyk',
  description: 'Portfolio Artur "Isur" Bednarczyk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth no-scrollbar bg-background text-primary" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
