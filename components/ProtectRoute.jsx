"use client"
import { useAuth } from "@/context/AuthProvider"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "react-toastify"

const publicPages = ["/", "/ads", "/login"]

function ProtectRoute({ children }) {

    const { isAuth, isLoading } = useAuth
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (isAuth || isLoading || publicPages.includes(pathname)) return
        router.replace("/login")
        toast.error("لطفا ابتدا وارد شوید", { position: "top-center" })
    }, [isAuth, isLoading, router, pathname])

    if (isLoading) {
        return (
            <div>
                <span>loading</span>
            </div>
        )
    }
    if (isAuth || publicPages.includes(pathname)) {
        return children;
    }
    return null;
}

export default ProtectRoute;