import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Paula Andrade - Pediatra em Pinheiros | Pediatria Humanizada e Integrativa',
  description: 'Pediatra em Pinheiros, São Paulo. Atendimento humanizado e integrativo para crianças de 0 a 12 anos. Consulta em 24-48h. Mais de 15 anos de experiência. Agende via WhatsApp.',
  keywords: [
    'pediatra pinheiros',
    'pediatra em pinheiros',
    'pediatra são paulo',
    'pediatria integrativa',
    'pediatra perto de mim',
    'consulta pediátrica',
    'puericultura',
    'pediatra humanizada',
    'dra paula andrade',
    'pediatra vila madalena',
    'pediatra jardins',
  ],
  authors: [{ name: 'Dra. Paula Andrade' }],
  creator: 'Dra. Paula Andrade',
  publisher: 'Dra. Paula Andrade - Pediatria',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dra. Paula Andrade - Pediatria',
    title: 'Dra. Paula Andrade - Pediatra em Pinheiros | Pediatria Humanizada',
    description: 'Pediatra em Pinheiros, São Paulo. Atendimento humanizado e integrativo. Consulta em 24-48h. Mais de 15 anos de experiência.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Paula Andrade - Pediatra em Pinheiros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Paula Andrade - Pediatra em Pinheiros',
    description: 'Pediatra em Pinheiros, São Paulo. Atendimento humanizado e integrativo. Consulta em 24-48h.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
