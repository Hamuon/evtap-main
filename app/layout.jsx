"use client"
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainFooter from "@/components/organisms/footer/MainFooter";
import MainNavigation from "@/components/organisms/navigation/MainNavigation";
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
          <>
            <ToastContainer />
            {
              pathname === "/" ? <MainNavigation /> : null
            }
            <div
              style={{
                backgroundImage: `url("/media/mainbg.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="absolute z-0 inset-0 h-full w-full"
            ></div>
            {children}
            {
              pathname === "/" ? <MainFooter /> : null
            }
          </>
        }
      </body>
    </html>
  );
}
