'use client'
import Image from 'next/image'
import palms from '../../public/palm_tree_sunset.webp'
import Clock from 'react-live-clock';

export default function Home() {
  return (
    <>
      <div
        className='bg-palm-trees height-screen bg-no-repeat bg-cover bg-center
        bg-fixed h-screen flex justify-center items-center' >
        <div className='bg-gray-600 bg-opacity-20 py-9 px-14 rounded-md text-center' >
          <h1 className='font-bold text-8xl mb-7' >
            Hello!
          </h1>
          <p className='text-3xl' >
            The time is:
          </p>
          <Clock className='text-6xl' format={'HH:mm:ss'} ticking={true} />
        </div>
      </div>
    </>
  )
}
