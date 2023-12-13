import Image from 'next/image'
import BentoGrid from './../components/BentoGrid'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col p-24">
        <div>
          <BentoGrid />
        </div>
      </main>
    </div>
  )
}
