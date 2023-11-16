import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'A personalised homepage',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="../path/to/flowbite/dist/flowbite.min.js"/>
      <body className={`${inter.className} text-white`}>{children}</body>
    </html>
  )
}
