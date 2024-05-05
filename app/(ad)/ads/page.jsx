"use client"
import React, { useContext } from 'react'
import AdCard from '@/components/molecules/cards/AdCard'
import FilteredAdsContext from '@/context/FilteredAdsProvider'

export default function Ads() {
    const { filteredAds } = useContext(FilteredAdsContext)

    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full md:container z-0 sm:px-4 md:px-0 pb-10">
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
