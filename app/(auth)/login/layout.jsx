"use client"
import StepForm from '@/components/StepForm';
import { usePathname } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react'
import AuthFooter from '@/components/organisms/footer/AuthFooter'
import AuthNavigation from '@/components/organisms/navigation/AuthNavigation'
export default function AuthLayout({ children }) {

    const pathname = usePathname();
    const [showLogin, setShowLogin] = useState(pathname === "/login" ? true : false);

    useEffect(() => {
        if (pathname === "/login") {
            setShowLogin(true)

        } else {
            setShowLogin(false)
        }

    }, [pathname])

    return (
        <>
            <ToastContainer />
            <AuthNavigation />
            <div
                style={{
                    backgroundImage: `url("/media/bgotp.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
                className="absolute z-0 inset-0 h-full w-full"
            ></div>
            {
                showLogin ? <StepForm /> : null
            }
            {children}
            <AuthFooter />
        </>
    )
}
