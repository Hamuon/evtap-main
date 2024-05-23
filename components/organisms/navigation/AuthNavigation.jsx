import React from 'react'
import Link from 'next/link'
export default function AuthNavigation() {
    return (
        <nav className='flex justify-between mx-auto z-40 w-full absolute top-0'>
            <div className='flex w-full justify-end items-center md:px-10 sm:px-10 mx-auto md:container h-32'>
                <Link className='sm:block md:hidden' href="/">
                    <span className=' font-semibold'>صفحه اصلی</span>
                </Link>
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
