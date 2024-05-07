"use client"
import React, { useContext, useEffect, useState } from 'react'
import AdCard from '@/components/molecules/cards/AdCard'
import FilteredAdsContext from '@/context/FilteredAdsProvider'
import { getAds } from '@/services/authService'
import { adsPerPage } from '@/services/authService'
import PageSpinner from '@/components/atoms/spinner/PageSpinner'
export default function Ads() {
    const { filteredAds } = useContext(FilteredAdsContext)

    const [loading, setLoading] = useState(false)
    const [ads, setAds] = useState(filteredAds ? filteredAds : [])
    const [page, setPage] = useState(1)
    const [pageLength, setPageLength] = useState()
    console.log(page);

    const getAllAds = async () => {
        await getAds().then(response => {
            setPageLength(response.data.advertising.links.length)
        }).catch(error => {
            console.log(error)
        })
    }

    const getAdsPerPage = async () => {
        setLoading(true)
        await adsPerPage(page)
            .then(response => {
                console.log(response);
                setAds(response.data.advertising.data)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
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
        getAdsPerPage()
    }, [page])

    return (
        <main className='w-full h-screen mx-auto flex flex-col items-center justify-between'>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full md:container z-0 sm:px-4 md:px-0 pb-10">
                {
                    ads ?
                        ads?.map((ad, index) => (
                            <AdCard id={ad.id} type={ad.type === "mortgage" ? "رهن" : ad.type === "sale" ? "فروش" : ad.type === "rent" ? "اجاره" : null} title={ad.title} region={ad.region} price={ad.sale_price} time={formatDate(ad.updated_at)} ad_img={ad?.images ? `https://evtap.ir/uploads/${ad.images[0]}` : "/media/imgHolder.jpg"} />
                        ))
                        :
                        <PageSpinner />
                }
            </div>
            <div className="join pb-10 font-numerals">
                <button disabled={page >= pageLength || loading} onClick={() => setPage(prevState => prevState + 1)} className="join-item btn">«</button>
                <button className="join-item btn"><span className='ml-1'>صفحه</span> {page}</button>
                <button disabled={page <= 1 || loading} onClick={() => setPage(prevState => prevState - 1)} className="join-item btn">»</button>
            </div>
        </main>
    )
}
