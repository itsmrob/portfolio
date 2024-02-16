import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Header'
import Footer from '@/components/Footer';

import { roboto, capriola, adventPro, publicSans } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'Rob Lopez | Software Engineer and developer',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${capriola.variable} ${adventPro.variable} ${roboto.variable} ${publicSans.variable}`}>
      <body>
        <div>
          <div className='w-full mx-auto lg:px-8 xl:px-[15%] px-4'>
            <Nav />
            <main className='app'>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
