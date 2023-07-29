import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grønne Nabofællesskaber',
  description: 'Grønne Nabofællesskaber.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  )
}
