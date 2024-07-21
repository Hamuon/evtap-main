import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubmitButton from "@/components/atoms/buttons/SubmitButton";
import { useRouter } from "next/navigation";
import MenuButton from "@/components/atoms/buttons/menu/MenuButton";
export default function AuthNavigation({ setSearch, search, toggleMenu, open }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex justify-between mx-auto relative z-50 w-full">
      <div className="flex w-full justify-between items-center md:px-9 sm:px-9 md:container h-32 mx-auto">
        <Link href="/">
          <Image
            src="/media/evtap-logo.png"
            alt="evtap logo"
            width={50}
            height={50}
          />
        </Link>

        <div className=" items-center flex sm:gap-2 md:gap-0">
          <ul className="sm:hidden md:flex ml-3">
            <Link href="/request">
              <li className="mr-12 font-semibold">درخواست کارشناسی</li>
            </Link>
            <Link href="/">
              <li className="mr-12 font-semibold"> صفحه اصلی</li>
            </Link>
            {pathname === "/experts" ? (
              <Link href="https://api.evtap.ir/admin/login">
                <li className="mr-12 font-semibold">پنل کارشناس</li>
              </Link>
            ) : null}
          </ul>
          {/* {pathname === "/ads" ? (
            <button
              onClick={() => setSearch(!search)}
              className="btn bg-white min-w-24 mr-12 border border-black "
            >
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_401_1802"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 2H2.5232V21.477H22V2Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_401_1802)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2612 3.5C16.8042 3.5 20.5002 7.195 20.5002 11.738C20.5002 16.281 16.8042 19.977 12.2612 19.977C7.71924 19.977 4.02324 16.281 4.02324 11.738C4.02324 7.195 7.71924 3.5 12.2612 3.5ZM12.2612 21.477C17.6312 21.477 22.0002 17.108 22.0002 11.738C22.0002 6.368 17.6312 2 12.2612 2C6.89124 2 2.52324 6.368 2.52324 11.738C2.52324 17.108 6.89124 21.477 12.2612 21.477Z"
                      fill="black"
                    />
                  </g>
                  <mask
                    id="mask1_401_1802"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="17"
                    width="6"
                    height="6"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.76001 17.7069H1.73596V22.7217H6.76001V17.7069Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_401_1802)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.48576 22.7217C2.67676 22.7217 2.86876 22.6487 3.01576 22.5027L6.53976 18.9887C6.83276 18.6957 6.83376 18.2207 6.54076 17.9277C6.24876 17.6327 5.77376 17.6347 5.47976 17.9257L1.95576 21.4407C1.66276 21.7337 1.66176 22.2077 1.95476 22.5007C2.10076 22.6487 2.29376 22.7217 2.48576 22.7217Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </span>
              <span>جستجو</span>
            </button>
          ) : null} */}
          <SubmitButton
            text="ثبت آگهی"
            handleClick={() => router.push("https://melkeavtap.ir/files")}
            type="button"
            className="mr-4 sm:hidden md:flex"
          />
          <MenuButton toggleMenu={toggleMenu} open={open} />
        </div>
      </div>
    </nav>
  );
}
