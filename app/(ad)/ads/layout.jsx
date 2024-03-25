import React from 'react'
import AdFooter from '@/components/organisms/footer/AdFooter'
import AdNavigation from '@/components/organisms/navigation/AdNavigation'
export default function AdLayout({ children }) {
    return (
        <>
            <AdNavigation />
            {children}
            <AdFooter />
        </>
    )
}
