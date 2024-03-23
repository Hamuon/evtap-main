import React from 'react'
import AdCard from '@/components/molecules/cards/AdCard'
export default function Ads() {
    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:py-10 w-full md:container">
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
