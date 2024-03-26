"use client"
import React, { useState } from 'react'
import AdFooter from '@/components/organisms/footer/AdFooter'
import AdNavigation from '@/components/organisms/navigation/AdNavigation'
import AdSearchModal from '@/components/molecules/modals/AdSearchModal'
export default function AdLayout({ children }) {
    const [search, setSearch] = useState(false)

    return (
        <>
            <AdNavigation setSearch={setSearch} search={search} />
            {
                search ? <AdSearchModal setSearch={setSearch} /> : null
            }
            {children}
            <AdFooter />
        </>
    )
}
