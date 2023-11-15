'use client'
import Image from 'next/image'
import palms from '../../public/palm_tree_sunset.webp'

export default function Home() {
  return (
    <>
      <div 
        className='bg-palm-trees height-screen
          bg-no-repeat bg-cover bg-center bg-fixed h-screen flex justify-center items-center'
      >
        <div
          className=''
        ><p>Hello!</p></div>
      </div>
    </>
  )
}
