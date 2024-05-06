"use client"
import React, { useContext, useEffect, useState } from 'react'
import AdCard from '@/components/molecules/cards/AdCard'
import FilteredAdsContext from '@/context/FilteredAdsProvider'
import { getAds } from '@/services/authService'

export default function Ads() {
    const { filteredAds } = useContext(FilteredAdsContext)
    const [ads, setAds] = useState([])

    const getAllAds = async () => {
        await getAds().then(response => {
            setAds(response.data.advertising.data)
        }).catch(error => {
            console.log(error)
        })
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    useEffect(() => {
        getAllAds()
    }, [])

    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full md:container z-0 sm:px-4 md:px-0 pb-10">
                {
                    ads?.map((ad, index) => (
                        <AdCard id={ad.id} type={ad.type === "mortgage" ? "رهن" : ad.type === "sale" ? "فروش" : ad.type === "rent" ? "اجاره" : null} title={ad.title} region={ad.region} price={ad.sale_price} time={formatDate(ad.updated_at)} ad_img={ad.images[0]} />
                    ))
                }
            </div>
        </main>
    )
}
