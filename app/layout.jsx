"use client"
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import MainNavigation from "@/components/organisms/MainNavigation";
import MainFooter from "@/components/organisms/MainFooter";
import { usePathname } from "next/navigation";
import StepForm from "@/components/StepForm";
import SignUpStepForm from "@/components/SignupStepForm";
export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(pathname === "/login" ? true : pathname === "/signup" ? false : false);
  const [showSignup, setShowSignup] = useState(pathname === "/signup" ? true : pathname === "/login" ? false : false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (pathname === "/login") {
      setShowLogin(true)
      setShowSignup(false)
    } else if (pathname === "/signup") {
      setShowSignup(true)
      setShowLogin(false)
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
