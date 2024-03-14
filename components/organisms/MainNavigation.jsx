import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function MainNavigation() {

    const pathname = usePathname()
    return (
        <nav className='flex justify-center mx-auto'>
            {
                pathname === "/" ?
                    (
                        <div className='flex w-full justify-between items-center md:px-10 sm:px-10 md:container h-32'>
                            {/* mobile visible navigation */}
                            <div className='md:hidden'>
                                <Image src="/icons/mobile-menu.svg" alt="mobile menu" width={45} height={45} />
                            </div>
                            <div className='md:hidden'>
                                <Image src="/media/evtap-logo.png" alt="evtap logo" width={65} height={65} />
                            </div>
                            {/* desktop visible navigation */}
                            <h1 className='font-semibold sm:hidden md:block'>
                                مجموعه کارشناسی املاک اوتاپ
                            </h1>
                            <ul className='sm:hidden md:flex'>
                                <li className='mr-12 font-semibold'>کارشناسان</li>
                                <li className='mr-12 font-semibold'>درباره ما</li>
                            </ul>
                        </div>
                    ) : (
                        pathname === "/login" || "/signup" ? (
                            <div className='flex w-full justify-end items-center md:px-10 sm:px-10 md:container h-32'>
                                {/* mobile visible navigation */}
                                <ul className='sm:hidden md:flex'>
                                    <li className='mr-12 font-semibold'>صفحه اصلی</li>
                                    <li className='mr-12 font-semibold'> آگهی ها</li>
                                    <li className='mr-12 font-semibold'> استعلام</li>
                                </ul>
                            </div>
                        ) : null
                    )
            }
        </nav>
    )
}
