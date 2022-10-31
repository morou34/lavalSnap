import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import mobileLogo from '../public/Ulaval_mobile.svg'

export default function Header() {
  return (
    <div>

        {/*Logo*/}
        <div className='flex items-center justify-between max-w-6xl'>
            <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
                <Image
                    src={logo}
                    layout= 'fill'
                    className='object-contain'
                />
            </div>
            
            <div className='h-12 w-12 relative lg:hidden cursor-pointer'>
                <Image
                    src={mobileLogo}
                    layout= 'fill'
                    className='object-contain'
                />
            </div>
            <h1>Profile</h1>
        </div>

        {/*Search bar*/}
        {/*profil image*/}



    </div>
  )
}
