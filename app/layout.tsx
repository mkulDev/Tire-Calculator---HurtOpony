import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import TopBar from '@/components/navigation/TopBar'
import Navbar from '@/components/navigation/Navbar'
import ProductMenu from '@/components/navigation/ProductMenu'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hurtownia Opon',
  description:
    'Tanie opony letnie i zimowe. Hurtowe ceny. Duży wybór opon: dostawcze, ciężarowe, rolnicze. DARMOWA dostawa! Wejdź i kup sobie opony.',
}

config.autoAddCss = false

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-full flex flex-col'>
          <TopBar />
          <Navbar />
          <ProductMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
