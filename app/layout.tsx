import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Appeal Helper — Navigate Payment Processor Suspensions',
  description: 'Step-by-step guidance, document templates, and alternative processor recommendations to recover your Stripe account fast.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2b1391f7-bf84-422b-a21b-a4ed14fe39f0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
