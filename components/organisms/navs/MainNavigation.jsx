import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

export default function MainNavigation() {

    const pathname = usePathname()
    return (
        <nav className='flex justify-center mx-auto'>
            {
            pathname === "/" ? (
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
                        <li className='mr-12 font-semibold '>کارشناسان</li>
                        <li className='mr-12 font-semibold'>درباره ما</li>
                    </ul>
                </div>
            ) : (
                pathname === "/login" || pathname === "/signup" ? (
                    <div className='flex w-full justify-end items-center md:px-10 sm:px-10 md:container h-32'>
                        {/* mobile visible navigation */}
                        <ul className='sm:hidden md:flex'>
                            <Link href="/">
                                <li className='mr-12 font-semibold'>صفحه اصلی</li>
                            </Link>
                            <Link href="/advertisements">
                                <li className='mr-12 font-semibold'> آگهی ها</li>
                            </Link>
                            <li className='mr-12 font-semibold'> استعلام</li>
                        </ul>
                    </div>
                ) :  (
                    pathname === "/advertisements" ? (
                        <div className='flex w-full justify-end items-center md:px-10 sm:px-10 md:container h-32'>
                            {/* mobile visible navigation */}
                            <ul className='sm:hidden md:flex'>
                                <Link href="">
                                    <li className='mr-12 font-semibold mt-2'>تبریز</li>
                                </Link>
                                <Link href="">
                                    <li className='mr-12 font-semibold mt-2'>درخواست کارشناسی</li>
                                </Link>
                                <Link href="">
                                    <li className='mr-12 font-semibold mt-2'>آگهی های من</li>
                                </Link>
                                <form class="max-w-md mx-8">   
                                    <div class="relative">
                                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" class="block w-full py-2 pr-8 text-sm text-black border-2 border-black rounded-lg bg-transparent dark:bg-transparent dark:placeholder-gray-400 dark:text-black" placeholder="" required />
                                        <button type="submit" class="text-black absolute end-2.5 bottom-2.5 bg-transparent hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-2 pt-2 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent">جستجو</button>
                                    </div>
                                </form>
                                <SubmitButton class="" text="ثبت آگهی" />
                            </ul>
                        </div>
                    ) : null
                )
            )
            }

        </nav>
    )
}
