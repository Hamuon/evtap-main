"use client"
import { useState, useEffect, createContext } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const userToken = localStorage.getItem("token")
    const savedUser = localStorage.getItem("user")

    const [isLoading, setIsLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        setIsAuth(!!userToken || !!savedUser)
        setIsLoading(false)
    }, [savedUser, userToken]);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider