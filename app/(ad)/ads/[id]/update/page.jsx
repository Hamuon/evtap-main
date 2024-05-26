"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import EditSale from '@/components/organisms/forms/EditSale'
import EditRent from '@/components/organisms/forms/EditRent'
import EditMortgage from '@/components/organisms/forms/EditMortgage'
export default function page() {

    const searchParams = useSearchParams()
    const type = searchParams.get("type")
    const id = searchParams.get("id")

    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className='w-full md:container mt-10 px-10 flex flex-col items-center'>
                <div className='max-w-[60rem] w-full mb-20 flex flex-col gap-4 items-center'>
                    {
                        type === "sale" ? <EditSale id={id} /> : type === "rent" ? <EditRent id={id} /> : type === "mortgage" ? <EditMortgage id={id} /> : null
                    }
                </div>
            </div >
        </main>
    )
}
