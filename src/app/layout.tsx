import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Providers } from '@/providers/Providers'

const R = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'IGentity - Social Media Dashboard',
  description: 'Modern social media management dashboard with Facebook integration'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${R.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
