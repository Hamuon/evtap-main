"use client"
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainFooter from "@/components/organisms/footer/MainFooter";
import MainNavigation from "@/components/organisms/navigation/MainNavigation";
import ProtectRoute from "@/components/ProtectRoute";
export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="fa">
      <body>
        {
          mounted &&
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
        }
      </body>
    </html >
  );
}
