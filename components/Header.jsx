import React from 'react'
import Image from 'next/image'
import logo from '../public/logo_ulaval.png'
import mobileLogo from '../public/Ulaval_mobile.svg'
import { MagnifyingGlassIcon, PlusCircleIcon} from '@heroicons/react/24/outline'
import {HomeIcon} from '@heroicons/react/24/solid'


export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className='flex items-center   justify-between max-w-6xl mx-4 xl:mx-auto'>
            {/*Logo*/}
            <div className='items-center cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image
                    src={logo}
                    layout= 'fill'
                    className='object-contain'
                    alt='logo'
                />
            </div>
            
            <div className='h-10 w-10 relative lg:hidden cursor-pointer'>
                <Image
                    src={mobileLogo}
                    layout= 'fill'
                    className='object-contain'
                    alt='logo'
                />
            </div>
            
        {/*Search bar*/}
        <div className='relative mt-1 mb-2'>
            <div className='absolute left-2 top-2'>
                <MagnifyingGlassIcon  className='h-5 text-gray-500 '/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md '/>
        </div>
        {/*profil image*/}
            <div className="flex space-x-4 items-center">
                <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
                <img src='https://avatars.githubusercontent.com/u/78082985?s=400&u=bca0e4d2c7282218a9f41d808fd85d7f1a5eb8e4&v=4' alt='user_image' className='rounded-full h-10 cursor-pointer' />
            </div>
        </div>
    </div>
  );
}
