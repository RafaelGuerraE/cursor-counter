import ThemeProvider from '@/providers/ThemeProvider'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Counter App',
  description: 'A simple counter application built with Next.js and Material-UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
} 