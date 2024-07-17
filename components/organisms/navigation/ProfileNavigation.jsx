import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import { useRouter } from 'next/navigation'
export default function ProfileNavigation() {
    const router = useRouter()
    return (
        <nav className='flex justify-center mx-auto relative z-50 w-full'>
            <div className='flex w-full justify-between items-center md:px-10 sm:px-10 md:container mx-auto h-32'>
                <Link href="/">
                    <Image src="/media/evtap-logo.png" alt="evtap logo" width={50} height={50} />
                </Link>

                <div className=' items-center sm:hidden lg:flex'>
                    <ul className='sm:hidden md:flex ml-6'>
                        <Link href="/request">
                            <li className='mr-12 font-semibold'>درخواست کارشناسی</li>
                        </Link>
                        <Link href="https://melkevtap.ir/files">
                            <li className='mr-12 font-semibold'>آگهی ها </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
