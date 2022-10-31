import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.svg'
import mobileLogo from '../public/Ulaval_mobile.svg'
import { MagnifyingGlassIcon  } from '@heroicons/react/24/outline'


export default function Header() {
  return (

      <div className='flex items-center justify-between max-w-6xl'>
            {/*Logo*/}
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
            
        {/*Search bar*/}
        <div className='relative mt-1'>
            <div className='absolute left-2 top-2'>
                <MagnifyingGlassIcon  className='h-5 text-gray-500 '/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md '/>
        </div>
        {/*profil image*/}
            <h1>Profile</h1>
        </div>
  );
}
