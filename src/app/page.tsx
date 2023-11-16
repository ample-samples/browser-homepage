'use client'
import Image from 'next/image'
import palms from '../../public/palm_tree_sunset.webp'
import Clock from 'react-live-clock';
import { QuickLink } from './components/quickLink'

export default function Home() {
  const quickLinkProps ={
    size: 48,
  }

  return (
    <>
      <div
        className='bg-palm-trees height-screen bg-no-repeat bg-cover bg-center
        bg-fixed h-screen flex justify-center items-center' >
        <div className='bg-gray-600 bg-opacity-20 py-9 px-14 rounded-md text-center' >
          <h1 className='font-bold text-8xl mb-7' >
            Hello!
          </h1>
          <p className='text-3xl'>
            The time is:
          </p>
          <Clock className='text-6xl' format={'HH:mm:ss'} ticking={true} />
          <div className='mt-10 flex space-between gap-x-4 justify-center items-center content-center w-full h-12' >
            <QuickLink href='https://www.github.com' src="/assets/github-mark-white.svg"   size={quickLinkProps.size} />
            <QuickLink href='https://www.youtube.com' src="/assets/youtube-svgrepo-com.svg" size={quickLinkProps.size} />
            <QuickLink href='https://www.linkedin.com' src="/assets/iconmonstr-linkedin-3.svg" size={quickLinkProps.size} />
          </div>
        </div>
      </div>
    </>
  )
}
