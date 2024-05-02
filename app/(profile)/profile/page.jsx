import Table from '@/components/Table'
import ProfileIntro from '@/components/molecules/cards/ProfileIntro'
import ProfileMenu from '@/components/molecules/cards/ProfileMenu'
import React from 'react'

export default function page() {
    return (
        <main className='flex justify-center mx-auto w-full h-full'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:px-10 sm:px-10 md:container lg:gap-6 w-full h-full'>
            <ProfileIntro />
                
                <div className='col-span-2 w-full flex items-start flex-col sm:my-8' >
                    <span className="font-semibold mb-4">درخواست های من</span>
                    <Table />
                </div>
                <ProfileMenu />
            </div>
        </main>
    )
}