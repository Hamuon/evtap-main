"use client"
import React from 'react'
import ProfileNavigation from '@/components/organisms/navigation/ProfileNavigation'
export default function profileLayout({ children }) {

    return (
        <>
            <ProfileNavigation />
            {children}
        </>
    )
}
