import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function AdCard() {
    return (
        <Link href="/ads/1">
            <div className="flex 2xl:w-auto font-numerals m-8 h-56 z-50 justify-between rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-white">
                <div className="p-4 flex flex-col justify-center ">
                    <span className="w-fit mb-4 p-1 rounded-lg text-xs bg-gray-200">فروش</span>
                    <p className="sm:text-lg md:text-2xl font-semibold mb-2">آپارتمان 200 متری</p>
                    <p className="text-xl font-semibold mb-4">کوی نصر</p>
                    <div className='flex gap-1 items-center text-gray-500'>
                        <span className="">17500000</span>
                        <span>تومان</span>
                    </div>
                    <div className='text-gray-500 text-sm '>
                        لحظاتی پیش
                    </div>
                </div>
                <div className='relative bg-gray-200 w-44 h-full'>
                    <Image src="/media/home.jpeg" fill style={{ objectFit: "cover" }} alt="Movie" />
                </div>
            </div>
        </Link>

    )
}
