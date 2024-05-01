import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function AuthNavigation({ toggleMenu }) {
    return (
<<<<<<< HEAD
        <nav className='flex justify-center mx-auto relative z-50'>
            <div className='flex w-full justify-end items-end md:px-10 sm:px-10 md:container h-16 '>
=======
        <nav className='flex justify-between mx-auto z-50 w-full absolute top-0'>
            <div className='flex w-full justify-end items-center md:px-10 sm:px-10 mx-auto md:container h-32'>
>>>>>>> 040dd6341d3f98d84e70c3288d23f3cdadc9d6a1
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
