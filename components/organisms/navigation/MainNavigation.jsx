import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuButton from '@/components/atoms/buttons/menu/MenuButton'
export default function MainNavigation({ toggleMenu, open, setInquiry }) {

    return (
        <nav className='flex justify-between mx-auto fixed top-0 z-50 w-full'>
            <div className='flex w-full justify-between items-center md:px-10 sm:px-10 md:container mx-auto h-32'>
                {/* mobile visible navigation */}
                {/* desktop visible navigation */}
                <div className="flex items-center gap-4">
                    <MenuButton toggleMenu={toggleMenu} open={open} />
                    <div className=''>
                        <Image src="/media/evtap-logo.png" alt="evtap logo" width={50} height={50} />
                    </div>
                    <ul className='sm:hidden md:flex'>
                        <Link href="/experts">
                            <li className='mr-12 font-semibold '>کارشناسان</li>
                        </Link>
                        <Link href="https://melkevtap.ir/files">
                            <li className='mr-12 font-semibold '>آگهی ها</li>
                        </Link>
                        <Link href="/request">
                            <li className='mr-12 font-semibold '>درخواست کارشناسی</li>
                        </Link>
                        <li onClick={() => setInquiry(true)} className='mr-12 font-semibold cursor-pointer'>استعلام</li>
                    </ul>
                </div>
                <div>
                    <Link href="/profile">
                        <span className='mr-12 font-semibold text-[#808080] border-2 border-[#808080] py-3 px-5 hover:bg-[#808080] hover:text-white'>ورود / ثبت نام</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
