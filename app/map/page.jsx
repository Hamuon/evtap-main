import React from 'react'
import MapComponent from '@/components/Map'
export default function page() {
    return (
        <div className='w-full mt-24 flex justify-center items-center absolute'>
            <div className='w-[800px] h-[500px] overflow-hidden flex justify-center items-center rounded-3xl'>
                <MapComponent />
            </div>
        </div>
    )
}
