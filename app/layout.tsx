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
  description: 'Pediatra em Pinheiros, São Paulo (RQE 131771). Atendimento humanizado e integrativo para crianças de 0 a 12 anos. Título SBP 2024, pós-graduação Einstein. 7 anos de experiência. Agende via WhatsApp.',
  applicationName: 'Dra. Paula Andrade - Pediatria',
  appleWebApp: {
    capable: true,
    title: 'Dra. Paula Andrade',
    statusBarStyle: 'default',
  },
  icons: {
    icon: '/drapaulaped/favicon.svg',
    apple: '/drapaulaped/favicon.svg',
  },
  manifest: '/drapaulaped/manifest.json',
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
    description: 'Pediatra em Pinheiros (RQE 131771), São Paulo. Atendimento humanizado e integrativo. Título SBP 2024, pós-graduação Einstein. 7 anos de experiência. Consulta em 24-48h.',
    images: [
      {
        url: '/drapaulaandrade.webp',
        width: 1200,
        height: 630,
        alt: 'Dra. Paula Andrade - Pediatra em Pinheiros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Paula Andrade - Pediatra em Pinheiros',
    description: 'Pediatra em Pinheiros (RQE 131771), São Paulo. Atendimento humanizado e integrativo. Título SBP 2024, pós-graduação Einstein.',
    images: ['/drapaulaandrade.webp'],
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
  other: {
    'theme-color': '#0284c7',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <StructuredData />
      </body>
    </html>
  )
}
