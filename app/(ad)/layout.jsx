"use client"
import React, { useState } from 'react'
import AdFooter from '@/components/organisms/footer/AdFooter'
import AdNavigation from '@/components/organisms/navigation/AdNavigation'
import AdSearchModal from '@/components/molecules/modals/AdSearchModal'
import useMenu from '@/hooks/useMenu'
import AdsMenu from '@/components/organisms/menu/AdsMenu'
export default function AdLayout({ children }) {
    const { toggleMenu, open } = useMenu()
    const [search, setSearch] = useState(false)

    return (
        <>
            <AdNavigation toggleMenu={toggleMenu} setSearch={setSearch} search={search} />
            {open ? <AdsMenu open={open} toggleMenu={toggleMenu} /> : null}
            {
                search ? <AdSearchModal setSearch={setSearch} /> : null
            }
            {children}
            <AdFooter />
        </>
    )
}
