"use client"
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react'
import AuthFooter from '@/components/organisms/footer/AuthFooter'
import AuthNavigation from '@/components/organisms/navigation/AuthNavigation'
import RequestModal from '@/components/molecules/modals/RequestModal';

export default function ReqLayout({ children }) {

    const pathname = usePathname();
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
            <AuthNavigation />
            <div
                style={{
                    backgroundImage: `url("/media/reqbg.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="absolute z-0 inset-0 h-full w-full"
            ></div>
            {
                showRequest ? <RequestModal /> : null
            }
            {children}
            <AuthFooter />
        </>
    )
}
