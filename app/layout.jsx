"use client"
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import StepForm from "@/components/StepForm";
import { usePathname } from "next/navigation";
import SignUpStepForm from "@/components/SignupStepForm";
import MainFooter from "@/components/organisms/MainFooter";
import MainNavigation from "@/components/organisms/MainNavigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(pathname === "/login" ? true : false);
  const [showSignup, setShowSignup] = useState(pathname === "/signup" ? true : false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (pathname === "/login") {
      setShowLogin(true)
      setShowSignup(false)
    } else if (pathname === "/signup") {
      setShowSignup(true)
      setShowLogin(false)
    } else {
      setShowLogin(false)
      setShowSignup(false)
    }
  }, [pathname])

  return (
    <html lang="fa">
      <body
        className=""
        style={{
          backgroundImage: `url(${pathname === "/" ? "/media/mainbg.jpg" : pathname === "/login" || "/signup" ? "/media/bgotp.jpg" : "/media/bgotp.jpg"})`,
          backgroundRepeat: "",
          backgroundSize: "cover",
        }}
      >
        {
          mounted &&
          <>
            <ToastContainer />
            <MainNavigation />
            {
              showLogin ? <StepForm showLogin={showLogin} setShowLogin={setShowLogin} setShowSignup={setShowSignup} /> :
                showSignup ? <SignUpStepForm showSignup={showSignup} setShowSignup={setShowSignup} setShowLogin={setShowLogin} /> : null
            }
            {children}
            <MainFooter />
          </>
        }
      </body>
    </html>
  );
}
