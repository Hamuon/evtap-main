import React from 'react'
import Image from 'next/image'
export default function AuthFooter() {
    return (
        <footer className="flex mx-auto w-full justify-center absolute bottom-0 mt-32">
            <div className='flex w-full justify-between items-center md:container h-28 relative sm:px-10 lg:px-10'>
                {/* mobile visible footer */}
                <div className='flex items-center'>
                    <div className=''>
                        <Image src="/media/evtap-logo.png" alt="evtap logo" width={65} height={65} />
                    </div>
                    <h1 className='sm:hidden md:block'>
                        مجموعه کارشناسی املاک اوتاپ
                    </h1>
                </div>
                <div>
                    تماس با پشتیبانی
                </div>
                {/* desktop visible navigation */}
            </div>
        </footer>
    )
}
