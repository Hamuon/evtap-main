import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function PaymentStatus() {
    return (
        <main className='flex justify-center mx-auto w-full h-full'>
            <div className='flex justify-center items-center md:px-10 sm:px-10 md:container w-full h-full'>
                <div className='flex flex-col gap-8 items-center'>
                    <div>
                        <Image src="/icons/success.png" width={100} height={100} alt='success' />
                    </div>
                    <span className='text-2xl font-semibold'>پرداخت موفقیت آمیز بود</span>
                    <Link href="/profile">
                        <span className=' text-gray-500'>رفتن به پروفایل</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}
