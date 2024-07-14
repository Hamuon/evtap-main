import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from '@/components/atoms/buttons/menu/MenuButton'
export default function MainNavigation({ toggleMenu, open }) {

    return (
        <nav className='flex justify-between mx-auto relative z-50 w-full'>
            <div className='flex w-full justify-between items-center md:px-10 sm:px-10 md:container mx-auto h-32'>
                {/* mobile visible navigation */}
                <MenuButton toggleMenu={toggleMenu} open={open} />
                <div className='md:hidden'>
                    <Image src="/media/evtap-logo.png" alt="evtap logo" width={50} height={50} />
                </div>
                {/* desktop visible navigation */}
                <h1 className='font-semibold sm:hidden md:block'>
                    مجموعه کارشناسی املاک اوتاپ
                </h1>
                <ul className='sm:hidden md:flex'>
                    <Link href="/experts">
                        <li className='mr-12 font-semibold'>کارشناسان</li>
                    </Link>
                    <Link href="https://api.evtap.ir/local/about">
                        <li className='mr-12 font-semibold'>درباره ما</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
