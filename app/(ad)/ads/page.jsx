import React from 'react'
import AdCard from '@/components/molecules/cards/AdCard'
export default function Ads() {
    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className="flex flex-wrap w-full justify-center items-center md:container bg-gray-400">
                <AdCard />
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
