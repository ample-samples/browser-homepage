'use client'
import Image from 'next/image'
import palms from '../../public/palm_tree_sunset.webp'
import Clock from 'react-live-clock';
import { QuickLink } from './components/quickLink'
import Collapsible from 'react-collapsible';
import { useEffect, useState } from 'react';

export default function Home() {
  const quickLinkProps = {
    size: 48,
  }

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <div
        className='bg-palm-trees height-screen bg-no-repeat bg-cover bg-center
        bg-fixed h-screen flex justify-center items-center' >
        <div className='bg-gray-600 bg-opacity-20 py-9 px-12 rounded-md text-center' >
          <Collapsible trigger="" open={!isOpen} easing="ease-in-out">
            <h1 className='font-bold text-8xl' >
              Hello!
            </h1>
          </Collapsible>
          <Collapsible trigger="" open={isOpen} easing="ease-in-out">
            <p className='text-3xl'>
              The time is:
            </p>
            <Clock className='text-6xl' format={'HH:mm:ss'} ticking={true} />
            <div className='mt-10 flex space-between gap-x-4 justify-center items-center content-center w-full h-12' >
              <QuickLink href='https://www.github.com' src="/assets/github-mark-white.svg" size={quickLinkProps.size} />
              <QuickLink href='https://www.youtube.com' src="/assets/youtube-svgrepo-com.svg" size={quickLinkProps.size} />
              <QuickLink href='https://www.linkedin.com' src="/assets/iconmonstr-linkedin-3.svg" size={quickLinkProps.size} />
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  )
}
