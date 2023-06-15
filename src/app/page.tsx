import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="w-full h-screen bg-red-300"></div>
    </main>
  )
}
