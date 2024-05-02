import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function AdsMenu({ toggleMenu, open }) {
    return (
        <div className={`w-72 h-screen fixed top-0 left-0 shadow-md bg-white z-[1000] sm:block md:hidden transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <Image className="absolute top-8 right-8" src="/icons/close.svg" alt='close' width={25} height={25} onClick={() => toggleMenu(!open)} />
            <ul className='w-full h-full flex flex-col justify-center items-center gap-6 font-semibold'>
                <Link href="/">
                    <li>صفحه اصلی</li>
                </Link>
                <Link href="/add-ad">
                    <li>ثبت آگهی</li>
                </Link>
                <Link href="/request">
                    <li>درخواست کارشناسی</li>
                </Link>
            </ul>
        </div>
    )
}
