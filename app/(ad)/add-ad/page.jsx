"use client"
import React from 'react'
import SaleForm from '@/components/organisms/forms/SaleForm'
import FieldLabel from '@/components/atoms/labels/FieldLabel'
import RentalForm from '@/components/organisms/forms/RentalForm'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import MortgageForm from '@/components/organisms/forms/MortgageForm'
const AddAdMap = dynamic(() => import('@/components/AddAdMap'), { ssr: false })
export default function AddAd() {
    // const [longitude, setLongitude] = useState(null)
    // const [latitude, setLatitude] = useState(null)
    const [adType, setAdType] = useState(null)

    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className='w-full md:container mt-10 px-10 flex flex-col items-center'>
                <div className='max-w-[60rem] w-full mb-20 flex flex-col gap-4 items-center'>
                    <div className='w-full my-2 flex flex-col'>
                        <FieldLabel>نوع آگهی</FieldLabel>
                        <select defaultValue={"DEFAULT"} onChange={(e) => setAdType(e.target.value)} name='state' className="select select-bordered " >
                            <option disabled value="DEFAULT">انتخاب کنید</option>
                            <option value="rental">اجاره</option>
                            <option value="mortgage">رهن</option>
                            <option value="sale">فروش</option>
                        </select>
                    </div>
                    {
                        adType === "sale" ? <SaleForm adType={adType} /> : adType === "rental" ? <RentalForm adType={adType} /> : adType === "mortgage" ? <MortgageForm adType={adType} /> : null
                    }
                </div>
            </div >
        </main >
    )
}
