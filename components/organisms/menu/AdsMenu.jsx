import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function AdsMenu({ toggleMenu, open }) {

    const pathname = usePathname()
    return (
        <div className={`w-full h-screen fixed top-0 left-0 shadow-md bg-white z-40 sm:block md:hidden transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul className='w-full h-full flex flex-col justify-center items-center gap-6 font-semibold'>
                <Link onClick={toggleMenu} href="/">
                    <li>صفحه اصلی</li>
                </Link>
                {
                    pathname === "/experts" ?
                        <Link onClick={toggleMenu} href="https://api.evtap.ir/admin/login">
                            <li>پنل کارشناس</li>
                        </Link> :
                        null
                }
                <Link onClick={toggleMenu} href="/add-ad">
                    <li>ثبت آگهی</li>
                </Link>
                <Link onClick={toggleMenu} href="/request">
                    <li>درخواست کارشناسی</li>
                </Link>
            </ul>
        </div>
    )
}
