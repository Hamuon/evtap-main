import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export default function MainFooter() {
    const pathname = usePathname()
    return (
        <footer className='flex mx-auto w-full justify-center absolute bottom-0'>
            {
                pathname === "/" ? (
                    <div className='flex w-full justify-center items-center md:container px-10 h-28 relative'>
                        {/* mobile visible footer */}
                        <ul className='sm:flex md:hidden'>
                            <li className='border-2 border-black py-2 px-3 rounded-full font-semibold'>
                                <Image src="/icons/footer-instagram.svg" alt="instagram" width={20} height={20} />
                            </li>
                            <li className='border-2 border-black py-2 px-3 rounded-full font-semibold'>
                                <Image src="/icons/footer-telegram.svg" alt="telegram" width={20} height={20} />
                            </li>
                            <li className='border-2 border-black py-2 px-3 rounded-full font-semibold'>
                                <Image src="/icons/footer-whatsapp.svg" alt="whatsapp" width={20} height={20} />
                            </li>
                        </ul>
                        {/* desktop visible navigation */}
                        <div className='block absolute sm:hidden md:block w-full '>
                            <Image src="/media/evtap-logo.png" alt="evtap logo" width={65} height={65} />
                        </div>
                        <ul className='sm:hidden md:flex'>
                            <li className='px-6 py-1 border-2 border-black font-semibold rounded-full'>اینستاگرام</li>
                            <li className='px-6 py-1 border-2 border-black font-semibold rounded-full'>تلگرام</li>
                            <li className='px-6 py-1 border-2 border-black font-semibold rounded-full'>واتسپ </li>
                        </ul>
                    </div>
                ) : (
                    pathname === "/login" || "/signup" ? (
                        <div className='flex w-full justify-between items-center md:container h-28 relative px-10'>
                            {/* mobile visible footer */}
                            <div className='flex items-center'>
                                <div className=''>
                                    <Image src="/media/evtap-logo.png" alt="evtap logo" width={65} height={65} />
                                </div>
                                <h1>
                                    مجموعه کارشناسی املاک اوتاپ
                                </h1>
                            </div>
                            <div>
                                تماس با پشتیبانی
                            </div>
                            {/* desktop visible navigation */}
                        </div>
                    ) : null
                )
            }
        </footer>
    )
}
