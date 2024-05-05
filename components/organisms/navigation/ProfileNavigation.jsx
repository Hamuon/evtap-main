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
                    <Image src="/media/evtapN.svg" alt="evtap logo" width={65} height={65} />
                </Link>

                <div className=' items-center sm:hidden lg:flex'>
                    <ul className='sm:hidden md:flex ml-6'>
                        <Link href="/request">
                            <li className='mr-12 font-semibold'>درخواست کارشناسی</li>
                        </Link>
                        <Link href="/ads">
                            <li className='mr-12 font-semibold'>آگهی ها </li>
                        </Link>
                    </ul>
                    <SubmitButton text="ثبت آگهی" handleClick={() => router.push("/add-ad")} type="button" className="mr-4" />
                </div>
            </div>
        </nav>
    )
}
