import React from 'react'
import Link from 'next/link'
export default function AuthNavigation() {
    return (
        <nav className='flex justify-center mx-auto relative z-50'>
            <div className='flex w-full justify-end items-center md:px-10 sm:px-10 md:container h-32'>
                {/* mobile visible navigation */}
                <ul className='sm:hidden md:flex'>
                    <Link href="/">
                        <li className='mr-12 font-semibold'>صفحه اصلی</li>
                    </Link>
                    <Link href="/advertisements">
                        <li className='mr-12 font-semibold'> آگهی ها</li>
                    </Link>
                    <li className='mr-12 font-semibold'> استعلام</li>
                </ul>
            </div>
        </nav>
    )
}
