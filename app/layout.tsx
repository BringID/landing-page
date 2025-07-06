import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'BringID: Private Identity Based on Verifiable Web Credentials',
  description: 'BringID enables users to prove humanness with MPC-TLS and zero-knowledge proofs — without linking accounts or revealing identity.',
  generator: 'v0.dev',
  keywords: ['BringID', 'Sybil resistance', 'privacy', 'MPC-TLS', 'zero-knowledge', 'identity', 'Semaphore', 'TLSN'],
  authors: [{ name: 'BringID Team' }],
  openGraph: {
    title: 'BringID: Private Identity from Verified Web Credentials',
    description: 'Prove humanness without revealing identity. BringID uses MPC-TLS and Semaphore to create composable, unlinkable credentials.',
    url: 'https://www.bringid.org',
    siteName: 'BringID',
    type: 'website',
    images: ['https://www.bringid.org/bringId_og_image.png'], // optional OG image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BringID: Private Identity Based on Verifiable Web Credentials',
    description: 'A privacy-first identity protocol using MPC-TLS and zero-knowledge proofs.',
    creator: '@bring_id', // optional
    images: ['https://www.bringid.org/bringId_og_image.png'], // optional
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
