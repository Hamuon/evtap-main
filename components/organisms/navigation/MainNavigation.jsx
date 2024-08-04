import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function MainNavigation() {

    return (
        <nav className='flex justify-between mx-auto fixed top-0 z-50 w-full'>
            <div className='flex w-full justify-between items-center md:px-10 sm:px-10 md:container mx-auto h-32'>
                {/* mobile visible navigation */}
                {/* desktop visible navigation */}
                <Link href="https://melkevtap.ir/files">
                    <span className=' font-semibold py-3 px-8 bg-white text-black cursor-pointer'>آگهی ها</span>
                </Link>
                <div className="flex items-center gap-4">
                    <div className=''>
                        <Image src="/media/evtap-logo.png" alt="evtap logo" width={60} height={60} />
                    </div>
                </div>
                {/* <ul className='sm:hidden md:flex'>
                    <Link href="/experts">
                        <li className='mr-12 font-semibold text-white '>کارشناسان</li>
                    </Link>
                    <Link href="https://melkevtap.ir/files">
                        <li className='mr-12 font-semibold text-white '>آگهی ها</li>
                    </Link>
                    <Link href="/request">
                        <li className='mr-12 font-semibold text-white '>درخواست کارشناسی</li>
                    </Link>
                    <li onClick={() => setInquiry(true)} className='mr-12 font-semibold text-white cursor-pointer'>استعلام</li>
                </ul> */}
                {/* <MenuButton toggleMenu={toggleMenu} open={open} /> */}
                {/* <div>
                </div> */}
            </div>
        </nav>
    )
}
