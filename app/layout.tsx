import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dra. Paula Ped',
  description: 'Website profissional',
  keywords: ['pediatria', 'saúde', 'medicina'],
  authors: [{ name: 'Dra. Paula Ped' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Dra. Paula Ped',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
