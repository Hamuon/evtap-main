"use client"
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainFooter from "@/components/organisms/footer/MainFooter";
import { useRouter } from "next/navigation";
import MainNavigation from "@/components/organisms/navigation/MainNavigation";
import ProtectRoute from "@/components/ProtectRoute";
import AuthProvider from "@/context/AuthProvider";
import ProtectLogin from "@/components/ProtectLogin";
export default function RootLayout({ children }) {

  const pathname = usePathname();
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="fa">
      <head>
        <title>اوتاپ | کارشناسی تخصصی ملک</title>
      </head>
      <body>
        {
          mounted &&
          <AuthProvider>
            <ProtectRoute>
              <div
                style={{
                  backgroundImage: `url(${pathname === "/" ? "/media/mainbg.jpg" : pathname === "/login" ? "/media/bgotp.jpg" : pathname === "/request" ? "/media/reqbg.jpg" : null})`,
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              >
                <ToastContainer />
                {
                  pathname === "/" ? <MainNavigation /> : null
                }
                {children}
                {
                  pathname === "/" ? <MainFooter /> : null
                }
              </div>
            </ProtectRoute>
          </AuthProvider>
        }
      </body>
    </html >
  );
}
