import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function AuthNavigation({ toggleMenu }) {
    return (
        <nav className='flex justify-center mx-auto relative z-50'>
            <div className='flex w-full justify-end items-center md:px-10 sm:px-10 md:container h-32'>
                <div onClick={toggleMenu} className='md:hidden'>
                    <Image src="/icons/mobile-menu.svg" alt="mobile menu" width={45} height={45} />
                </div>
                {/* mobile visible navigation */}
                <ul className='sm:hidden md:flex'>
                    <Link href="/">
                        <li className='mr-12 font-semibold'>صفحه اصلی</li>
                    </Link>
                    <Link href="/ads">
                        <li className='mr-12 font-semibold'> آگهی ها</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}
