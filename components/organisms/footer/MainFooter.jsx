import React from "react";
import Image from "next/image";
export default function MainFooter() {
  return (
    <footer className="flex mx-auto w-full justify-center sm:mt-20 lg:mt-0">
      <div className="flex w-full justify-center items-center md:container px-10 h-28 relative">
        {/* mobile visible footer */}
        <ul className="sm:flex md:hidden">
          <li
            onClick={() =>
            (window.location.href =
              "https://www.instagram.com/evtap.ir?igsh=b2lmcGRjbzRrOGF5")
            }
            className="border-2 border-black py-2 px-3 rounded-full font-semibold"
          >
            <Image
              src="/icons/footer-instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </li>
          <li
            onClick={() => (window.location.href = "https://t.me/ev12t")}
            className="border-2 border-black py-2 px-3 rounded-full font-semibold"
          >
            <Image
              src="/icons/footer-telegram.svg"
              alt="telegram"
              width={20}
              height={20}
            />
          </li>
          <li
            onClick={() =>
              (window.location.href = "https://wa.me/989140963009")
            }
            className="border-2 border-black py-2 px-3 rounded-full font-semibold"
          >
            <Image
              src="/icons/footer-whatsapp.svg"
              alt="whatsapp"
              width={20}
              height={20}
            />
          </li>
        </ul>
        {/* desktop visible navigation */}
        <div className="block pb-6 absolute sm:hidden md:block w-full z-50">
          <Image
            src="/media/evtap-logo.svg"
            alt="evtap logo"
            width={50}
            height={50}
          />
        </div>
        <ul className="sm:hidden md:flex z-50 cursor-pointer">
          <li
            onClick={() =>
            (window.location.href =
              "https://www.instagram.com/evtap.ir?igsh=b2lmcGRjbzRrOGF5")
            }
            className="px-6 py-1 border-2 border-black font-semibold rounded-full"
          >
            اینستاگرام
          </li>
          <li
            onClick={() => (window.location.href = "https://t.me/ev12t")}
            className="px-6 py-1 border-2 border-black font-semibold rounded-full"
          >
            تلگرام
          </li>
          <li
            onClick={() =>
              (window.location.href = "https://wa.me/989140963009")
            }
            className="px-6 py-1 border-2 border-black font-semibold rounded-full"
          >
            واتسپ{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
}
