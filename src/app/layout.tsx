import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Nav from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rob Lopez | Software Engineer and developer',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className=' '>
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
