import './index.css'
import { Roboto_Mono } from 'next/font/google'

const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
