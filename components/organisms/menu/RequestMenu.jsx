import React from 'react'
import Image from 'next/image'
export default function RequestMenu({ toggleMenu, open }) {
    return (
        <div className={`w-72 h-screen fixed top-0 left-0 bg-white z-[1000] sm:block md:hidden transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <Image className="absolute top-8 right-8" src="/icons/close.svg" alt='close' width={25} height={25} onClick={() => toggleMenu(!open)} />
            <ul className='w-full h-full flex flex-col justify-center items-center gap-6 font-semibold'>
                <li>صفحه اصلی</li>
                <li>آگهی ها</li>
            </ul>
        </div>
    )
}
