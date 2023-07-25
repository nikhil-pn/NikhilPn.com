import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Space from './components/Space'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: "nikhilpn.com",
    template: "%s | nikhilpn.com",
  },
  description: "FullStack Blockchain Developer at H3lios.in",
  openGraph: {
    title: "nikhilpn.com",
    description:
      "FullStack Blockchain Developer at H3lios.in",
    url: "https://nikhilpn.com",
    siteName: "nikhilpn.com",
    images: [
      {
        url: "https://nikhilpn.com/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nikhil PN",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`text-[8px]  fixed z-50 items-center gap-[6px]  top-8  right-8  `}
        >
          <Space></Space>
        </div>
        {children}
      </body>
    </html>
  )
}
