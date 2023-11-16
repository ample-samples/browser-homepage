'use client'
import Clock from 'react-live-clock';
import { QuickLink } from './quickLink'
import Collapsible from 'react-collapsible';
import { useEffect, useState } from 'react';
export function GreetingPanel() {

  const quickLinkProps = {
    size: 48,
  }

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [])

  useState(() => {
    const interval = setInterval(() => {
      setIsOpen((prevState) => !prevState);
    }, 6000);

    return () => clearInterval(interval);
  });

  return (
    <div className='bg-gray-600 bg-opacity-20 py-9 px-12 rounded-md text-center' >
      <Collapsible trigger="" open={!isOpen} easing="ease-in-out">
        <div className='h-24'>
          <h1 className='font-bold text-8xl' >
            Hello!
          </h1>
        </div>
      </Collapsible>
      <Collapsible trigger="" open={isOpen} easing="ease-in-out">
        <div className="h-24">
          <p className='text-3xl'>
            The time is:
          </p>
          <Clock className='text-6xl' format={'HH:mm:ss'} ticking={true} />
        </div>
      </Collapsible>
      <div className='mt-10 flex space-between gap-x-4 justify-center items-center content-center w-full h-12' >
        <QuickLink href='https://www.github.com' src="/assets/github-mark-white.svg" size={quickLinkProps.size} />
        <QuickLink href='https://www.youtube.com' src="/assets/youtube-svgrepo-com.svg" size={quickLinkProps.size} />
        <QuickLink href='https://www.linkedin.com' src="/assets/iconmonstr-linkedin-3.svg" size={quickLinkProps.size} />
      </div>
    </div>
  )
}
