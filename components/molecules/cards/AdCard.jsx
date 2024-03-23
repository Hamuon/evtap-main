import React from 'react'
import Image from 'next/image'
export default function AdCard() {
    return (
        <div className="flex w-auto font-numerals m-8 h-56 z-50 justify-between rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="p-4 flex flex-col justify-center">
                <span className="badge mb-4">فروش</span>
                <p className="text-2xl font-semibold mb-2">آپارتمان 200 متری</p>
                <p className="text-xl font-semibold mb-4">کوی نصر</p>

                <div className='flex gap-1 items-center text-gray-500'>
                    <span className="">17500000</span>
                    <span>تومان</span>
                </div>
            </div>
            <div className='relative bg-gray-200 w-44 h-full'>
                <Image src="/media/home.jpeg" fill style={{ objectFit: "cover" }} alt="Movie" />
            </div>
        </div>
    )
}
