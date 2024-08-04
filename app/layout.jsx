"use client";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import MainNavigation from "@/components/organisms/navigation/MainNavigation";
import ProtectRoute from "@/components/ProtectRoute";
import AuthProvider from "@/context/AuthProvider";
import MobileMenu from "@/components/organisms/menu/MobileMenu";
import useMenu from "@/hooks/useMenu";
import { FilteredAdsProvider } from "@/context/FilteredAdsProvider";
import MenuContextProvider from "@/context/MenuContext";
export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const { open, toggleMenu } = useMenu();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html
      lang="fa"
      style={{
        backgroundImage: `url(${pathname === "/"
          ? "/media/wtc.jpg"
          : pathname === "/login"
            ? "/media/bgotp.jpg"
            : pathname === "/request"
              ? "/media/reqbg.jpg"
              : null
          })`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <head>
        <title>اوتاپ | کارشناسی تخصصی ملک</title>
      </head>
      <body
        className="h-screen"
      >
        {mounted && (
          <AuthProvider>
            <FilteredAdsProvider>
              <MenuContextProvider>
                <ProtectRoute>
                  <ToastContainer />
                  <div
                    className="flex flex-col justify-between min-h-full"
                  >
                    {pathname === "/" ? (
                      <MainNavigation toggleMenu={toggleMenu} open={open} />
                    ) : null}
                    {open ? (
                      <MobileMenu open={open} toggleMenu={toggleMenu} />
                    ) : null}
                    {children}
                  </div>
                </ProtectRoute>
              </MenuContextProvider>
            </FilteredAdsProvider>
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
