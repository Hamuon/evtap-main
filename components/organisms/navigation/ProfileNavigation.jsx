import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import { useRouter } from 'next/navigation'
export default function ProfileNavigation() {
    const router = useRouter()
    return (
        <nav className='flex justify-center mx-auto relative z-50'>
            <div className='flex w-full justify-between items-center md:px-10 sm:px-10 md:container h-32'>
                <div>
                    <Image src="/media/evtap-logo.png" alt="evtap logo" width={65} height={65} />
                </div>

                <div className=' items-center sm:hidden lg:flex'>
                    <ul className='sm:hidden md:flex ml-6'>
                        <Link href="/">
                            <li className='mr-12 font-semibold'>استعلام</li>
                        </Link>
                        <Link href="/request">
                            <li className='mr-12 font-semibold'>درخواست کارشناسی</li>
                        </Link>
                        <li className='mr-12 font-semibold'>آگهی ها </li>
                    </ul>
                    <SubmitButton text="ثبت آگهی" handleClick={() => router.push("/add-ad")} type="button" className="mr-4" />

                </div>
            </div>
        </nav>
    )
}
