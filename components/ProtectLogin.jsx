"use client"
import { AuthContext } from "@/context/AuthProvider"
import { usePathname, useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

function ProtectLogin({ children }) {

    const { isAuth } = useContext(AuthContext)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (isAuth && pathname === "/login") {
            router.replace("/profile")
        }
    }, [isAuth, router, pathname])

    if (!isAuth && pathname === "/login") {
        return children;
    }
    return null;
}

export default ProtectLogin;