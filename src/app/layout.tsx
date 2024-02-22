import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Header'
import Footer from '@/components/Footer';
import RightSide from '@/components/RightSide';

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
      <body data-theme="winter">
        <div className='flex px-4 w-full mx-auto lg:px-8 '>
          <aside className="hidden lg:flex w-48 min-h-screen" aria-label="Sidebar"></aside>
          <div className="flex-1">
            <Nav />
            <main className='app'>
              {children}
            </main>
            <Footer />
          </div>
          <aside className="hidden lg:flex w-48 min-h-screen" aria-label="Sidebar">
            <RightSide />
          </aside>
        </div>
      </body>
    </html>
  )
}
