import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saint Nicholas - A Legacy of Love and Giving',
  description: 'Celebrating the life and legacy of Saint Nicholas, patron saint of children and secret gift-giver who inspires charity and goodwill worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
