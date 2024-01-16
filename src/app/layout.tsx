import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shubham Bombarde | Developer',
  description: 'Shubham Bombarde | Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
    <script src="./javascript/vanilla-tilt.min.js"></script>
    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
    <script type="text/javascript" src="./javascript/valtilt.js"></script>
    </html>
  )
}
