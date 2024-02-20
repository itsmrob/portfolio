import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Header'
import Footer from '@/components/Footer';

import { roboto, capriola, adventPro, publicSans, robotoSlab } from '@/fonts/fonts';

export const metadata: Metadata = {
  title: 'Rob Lopez | Software Engineer and developer',
  description: 'Personal portfolio built with NextJS, this part of my learning process of this amazing framework.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClass = `
    ${capriola.variable} 
    ${adventPro.variable} 
    ${roboto.variable} 
    ${publicSans.variable}
    ${robotoSlab.variable}
  `;
  return (
    <html lang="en" className={fontClass}>
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
