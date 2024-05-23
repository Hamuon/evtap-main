import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function AuthFooter() {
    return (
        <footer className="flex mx-auto w-full justify-center absolute bottom-0 mt-32">
            <div className='flex w-full justify-between items-center md:container h-28 relative sm:px-10 lg:px-10'>
                {/* mobile visible footer */}
                <div className='flex items-center'>
                    <Link href="/">
                        <Image src="/media/evtap-logo.png" alt="evtap logo" width={50} height={50} />
                    </Link>
                    <h1 className='sm:hidden md:block mx-4'>
                        مجموعه کارشناسی املاک اوتاپ
                    </h1>
                </div>
                <a href='tel:09388560310'>
                    تماس با پشتیبانی
                </a>
                {/* desktop visible navigation */}
            </div>
        </footer>
    )
}
