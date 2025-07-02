import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://anascleaningservice.vercel.app'),
  title: "Ana&apos;s Cleaning Service — Spotless Every Time",
  description: "Professional cleaning services for homes, offices, and vacation rentals in the Coachella Valley. Specializing in Airbnb turnovers with same-day service available.",
  keywords: "cleaning services, airbnb cleaning, vacation rental cleaning, house cleaning, office cleaning, coachella valley, palm springs, palm desert, turnover cleaning",
  openGraph: {
    title: "Ana&apos;s Cleaning Service — Spotless Every Time",
    description: "Professional cleaning services for homes, offices, and vacation rentals. Specializing in Airbnb turnovers.",
    images: ['/og-cover.png'],
    type: 'website',
    url: '/',
    siteName: "Ana&apos;s Cleaning Service",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ana&apos;s Cleaning Service — Spotless Every Time",
    description: "Professional cleaning services for homes, offices, and vacation rentals. Specializing in Airbnb turnovers.",
    images: ['/og-cover.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 