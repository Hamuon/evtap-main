"use client"
import { useState, useEffect, useContext, createContext } from "react"
import useLocalStorage from "@/hooks/useLocalStorages"

const AuthContext = createContext()

function AuthProvider({ children }) {
    const { getItem } = useLocalStorage()

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [token, setToken] = useState("")
    const isAuth = !!token && !!user

    useEffect(() => {
        try {
            const token = getItem("token")
            const user = getItem("user")
            setIsLoading(true)
            if (token) {
                setToken(token)
                return
            }
            if (user) {
                setUser(user)
                return
            }
            setToken("")
            setUser({})
        } catch (error) {
            setToken("")
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }, [getItem]);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                isLoading,
                token,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

export default AuthProvider