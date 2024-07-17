import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function MobileMenu({ toggleMenu, open, setInquiry }) {
    return (
        <div className={`md:hidden h-screen shadow-md fixed top-0 z-40 bg-white w-full transition ease-in-out duration-300 ${open ? "translate-y-0 opacity-100 visible" : "-translate-y-[500px] opacity-0 invisible"}`}>
            <ul className='w-full h-full flex flex-col justify-center items-center gap-6 font-semibold'>
                <Link onClick={toggleMenu} href="/experts">
                    <li>کارشناسان</li>
                </Link>
                <Link onClick={toggleMenu} href="https://melkevtap.ir/files">
                    <li>آگهی ها</li>
                </Link>
                <Link onClick={toggleMenu} href="/request">
                    <li>درخواست کارشناسی</li>
                </Link>
                <li className='cursor-pointer' onClick={() => { setInquiry(true) }}>استعلام</li>
            </ul>
        </div>
    )
}
