"use client"
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import StepForm from "@/components/StepForm";
import { usePathname } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainFooter from "@/components/organisms/MainFooter";
import MainNavigation from "@/components/organisms/MainNavigation";
import RequestModal from "@/components/molecules/modals/RequestModal";
export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(pathname === "/login" ? true : false);
  const [showRequest, setShowRequest] = useState(pathname === "/request" ? true : false)

  const [mounted, setMounted] = useState(false)
  console.log(pathname);
  function getRouteBg() {
    if (pathname === "/") return "/media/mainbg.jpg";
    else if (pathname === "/request" || "/invoice") return "/media/reqbg.jpg"
    else if (pathname === "/login" || "complete-info") return "/media/bgotp.jpg"
    else return "/media/mainbg.jpg"
  }

  useEffect(() => {

    setMounted(true)
    if (pathname === "/login") {
      setShowLogin(true)
      setShowRequest(false)

    } else if (pathname === "/request") {
      setShowRequest(true)
      setShowLogin(false)

    } else {
      setShowLogin(false)
      setShowRequest(false)
    }

  }, [pathname])

  return (
    <html lang="fa">
      <body>
        {
          mounted &&
          <>
            <ToastContainer />
            <MainNavigation />
            <div
              style={{
                backgroundImage: `url(${getRouteBg()})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="absolute z-0 inset-0 h-full w-full"
            ></div>
            {
              showLogin ? <StepForm /> :
                showRequest ? <RequestModal /> : null
            }
            {children}
            <MainFooter />
          </>
        }
      </body>
    </html>
  );
}
