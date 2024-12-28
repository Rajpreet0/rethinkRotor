import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='w-fit h-full flex items-center justify-center invert-0 p-2 '>
        <Image src="/logo.png" width={80} height={150} alt='logo'/>
    </div>
  )
}

export default Logo
