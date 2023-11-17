'use client'
import Clock from 'react-live-clock';
import { QuickLink } from './quickLink'
import { useState } from 'react';
import { Transition } from '@headlessui/react';

export function GreetingPanel() {

  const quickLinkProps = {
    size: 48,
  }

  const [idShow, setIdShow] = useState(0);

  useState(() => {
    const interval = setInterval(() => {
      setIdShow((prevState: number) => {
        return prevState === 2 ? 0 : prevState + 1
      });
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className='backdrop-blur-sm shadow-xl bg-gray-600 bg-opacity-20 py-9 rounded-md text-center h-64 w-[360px] overflow-hidden' >
        <div className='h-24 relative grid-rows-3'>
          <Transition
            show={idShow === 0}
            enter="transition-all duration-700"
            enterFrom="opacity-0 -translate-x-80"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-700"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-80"
          >
            <h1 className='font-bold text-7xl static absolute top-0 left-2 right-0 text-center mx-auto' >
              Hello!
            </h1>
          </Transition>
          <Transition
            appear={true}
            show={idShow === 1}
            enter="transition-all duration-700"
            enterFrom="opacity-0 -translate-x-80"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-700"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-80"
          >
            <div className='static absolute top-9 left-2 right-0 text-center mx-auto'>
              <p className='text-4xl'>
                Have a nice stay!
              </p>
            </div>
          </Transition>
          <Transition
            show={idShow === 2}
            enter="transition-all duration-700"
            enterFrom="opacity-0 -translate-x-80"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all duration-700"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-80"
          >
            <div className=' static absolute top-9 left-2 right-0 text-center mx-auto'>
              <p className='text-4xl'>
                The time is:
              </p>
            </div>
          </Transition>
        </div>
        <Clock className='text-4xl' format={'HH:mm:ss'} ticking={true} />
      </div>
      <div className='relative bottom-28 mt-10 flex space-between gap-x-4 justify-center items-center content-center w-full h-12' >
        <QuickLink href='https://www.github.com' src="/assets/github-mark-white.svg" size={quickLinkProps.size} />
        <QuickLink href='https://www.youtube.com' src="/assets/youtube-svgrepo-com.svg" size={quickLinkProps.size} />
        <QuickLink href='https://www.linkedin.com' src="/assets/iconmonstr-linkedin-3.svg" size={quickLinkProps.size} />
      </div>
    </>
  )
}
