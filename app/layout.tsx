import './globals.css'
import { Outfit, Space_Mono } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata = {
  title: 'CodeMaster - Learn iOS, Python, Django, PHP & Laravel | Expert Programming Courses',
  description: 'Master programming with expert-led courses in iOS development, Python, Django, PHP, and Laravel. Join 50,000+ students learning real-world projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}