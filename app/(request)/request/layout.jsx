"use client"
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react'
import AuthFooter from '@/components/organisms/footer/AuthFooter'
import AuthNavigation from '@/components/organisms/navigation/AuthNavigation'
import ReqStepModal from '@/components/ReqStepForm';
import RequestMenu from '@/components/organisms/menu/RequestMenu';
import useMenu from '@/hooks/useMenu';

export default function ReqLayout({ children }) {

    const pathname = usePathname();
    const { toggleMenu, open } = useMenu()
    const [showRequest, setShowRequest] = useState(pathname === "/request" ? true : false)

    useEffect(() => {
        if (pathname === "/request") {
            setShowRequest(true)
        } else {
            setShowRequest(false)
        }

    }, [pathname])

    return (
        <>
            <ToastContainer />
            <AuthNavigation toggleMenu={toggleMenu} />
            {open ? <RequestMenu toggleMenu={toggleMenu} open={open} /> : null}
            {
                showRequest ? <ReqStepModal /> : null
            }
            {children}
            <AuthFooter />
        </>
    )
}
