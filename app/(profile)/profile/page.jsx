import ProfileIntro from '@/components/organisms/menu/ProfileIntro'
import ProfileMenu from '@/components/organisms/menu/ProfileMenu'
import React from 'react'

export default function page() {
    return (
        <main className='flex justify-center mx-auto w-full h-full'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:px-10 sm:px-10 md:container lg:gap-6 w-full h-full'>
                <ProfileMenu />
                <div className='col-span-2 bg-gray-400 w-full'>
                    Data grids go here!
                </div>
                <ProfileIntro />
            </div>
        </main>
    )
}
