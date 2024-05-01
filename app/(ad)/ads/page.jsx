import React from 'react'
import AdCard from '@/components/molecules/cards/AdCard'
export default function Ads() {
    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full md:container z-0 sm:px-4 md:px-0">
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
                <AdCard />
            </div>
        </main>
    )
}
