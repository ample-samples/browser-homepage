import Image from 'next/image'

interface Props {
  size?: number
  src: string
  href: string
}

export function QuickLink(params: Props) {
  return (
    <a href={params.href} >
      <Image
        className='filter brightness-0 invert hover:h-10 hover:w-10 transition-all'
          src={params.src}
          alt="GitHub logo"
          width={params.size || 50}
          height={params.size || 50}
        />
    </a>
  )
}
