import Hero from '@/components/Hero'
import LinkCards from '@/components/LinkCards'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      
      <div className="w-full flex justify-center">
        <LinkCards img={'/artists.jpg'} link={'/artists'} text={'Artists'} />
      </div>
        <div className="w-full h-screen bg-red-300"></div>
    </main>
  )
}
