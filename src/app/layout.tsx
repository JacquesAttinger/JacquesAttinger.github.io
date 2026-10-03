// Last edited: 2026-10-03 13:20 CDT
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { Analytics } from "@/components/analytics/analytics";
import { name, headline, introduction } from '@/config/infoConfig'
import { siteUrl } from '@/config/siteConfig'
import '@/styles/tailwind.css'

const defaultTitle = `${name} - ${headline}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s - ${name}`,
    default: defaultTitle,
  },
  description: introduction,
  openGraph: {
    type: 'website',
    siteName: name,
    title: defaultTitle,
    description: introduction,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: introduction,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
