"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function ProfileMenu({ reqClick, adClick }) {
  const router = useRouter();
  //   const logoutHandler = (e) => {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //     router.refresh();
  //   };
  const menuItems = [
    {
      title: "درخواست ها",
      link: "/requests",
      icon: (
        <svg
          className="ml-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_425_2975"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 3.00043H21.499V22.4994H2V3.00043Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_425_2975)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8049 14.8178L14.4619 20.7508C14.6219 21.0108 14.8719 21.0078 14.9729 20.9938C15.0739 20.9798 15.3169 20.9178 15.4049 20.6228L19.9779 5.17783C20.0579 4.90483 19.9109 4.71883 19.8449 4.65283C19.7809 4.58683 19.5979 4.44583 19.3329 4.52083L3.87695 9.04683C3.58394 9.13283 3.51994 9.37883 3.50594 9.47983C3.49194 9.58283 3.48794 9.83783 3.74695 10.0008L9.74794 13.7538L15.0499 8.39583C15.3409 8.10183 15.8159 8.09883 16.1109 8.38983C16.4059 8.68083 16.4079 9.15683 16.1169 9.45083L10.8049 14.8178ZM14.8949 22.4998C14.1989 22.4998 13.5609 22.1458 13.1849 21.5378L9.30794 15.2468L2.95194 11.2718C2.26694 10.8428 1.90894 10.0788 2.01994 9.27583C2.12994 8.47283 2.68094 7.83483 3.45494 7.60783L18.9109 3.08183C19.6219 2.87383 20.3839 3.07083 20.9079 3.59283C21.4319 4.11983 21.6269 4.88983 21.4149 5.60383L16.8419 21.0478C16.6129 21.8248 15.9729 22.3738 15.1719 22.4808C15.0779 22.4928 14.9869 22.4998 14.8949 22.4998Z"
              fill="black"
            />
          </g>
        </svg>
      ),
      onClick: reqClick,
      additionalStyle: "",
    },
    {
      title: "آگهی های من",
      link: "https://melkevtap.ir/files",
      icon: (
        <svg
          className="ml-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_425_2982"
            maskUnits="userSpaceOnUse"
            x="3"
            y="2"
            width="18"
            height="20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 2.01172H20.0522V21.8652H3V2.01172Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_425_2982)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.57307 3.51172C5.91607 3.51172 4.54007 4.85372 4.50107 6.50872V17.2277C4.46507 18.9287 5.80507 20.3287 7.49007 20.3657H15.5731C17.2421 20.3057 18.5631 18.9287 18.5521 17.2327V8.33972L13.9181 3.51172H7.58507H7.57307ZM7.58507 21.8657H7.45907C4.94707 21.8117 2.94707 19.7237 3.00107 17.2117V6.49072C3.06007 4.00972 5.10807 2.01172 7.57007 2.01172H7.58807H14.2371C14.4411 2.01172 14.6361 2.09472 14.7781 2.24172L19.8441 7.51872C19.9771 7.65772 20.0521 7.84472 20.0521 8.03772V17.2277C20.0681 19.7367 18.1121 21.7757 15.5991 21.8657H7.58507Z"
              fill="black"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2976 8.98431H16.5436C14.7126 8.97931 13.2256 7.48731 13.2256 5.65931V2.75031C13.2256 2.33631 13.5616 2.00031 13.9756 2.00031C14.3896 2.00031 14.7256 2.33631 14.7256 2.75031V5.65931C14.7256 6.66331 15.5416 7.48131 16.5456 7.48431H19.2976C19.7116 7.48431 20.0476 7.82031 20.0476 8.23431C20.0476 8.64831 19.7116 8.98431 19.2976 8.98431Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1416 16.7002C10.7276 16.7002 10.3916 16.3642 10.3916 15.9502V9.90918C10.3916 9.49518 10.7276 9.15918 11.1416 9.15918C11.5556 9.15918 11.8916 9.49518 11.8916 9.90918V15.9502C11.8916 16.3642 11.5556 16.7002 11.1416 16.7002Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.79663 13.0146C8.60563 13.0146 8.41363 12.9416 8.26763 12.7956C7.97463 12.5036 7.97263 12.0296 8.26563 11.7356L10.6096 9.37961C10.8916 9.09661 11.3916 9.09661 11.6726 9.37961L14.0186 11.7356C14.3106 12.0296 14.3096 12.5036 14.0166 12.7956C13.7226 13.0876 13.2476 13.0876 12.9556 12.7936L11.1416 10.9716L9.32763 12.7936C9.18163 12.9416 8.98863 13.0146 8.79663 13.0146Z"
            fill="black"
          />
        </svg>
      ),
      onClick: adClick,
      additionalStyle: "",
    },
    {
      title: "خروج از حساب کاربری",
      link: "/saved-ads",
      icon: (
        <svg
          className="ml-2"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.31949 20H4.43349C1.98949 20 0.000488281 18.011 0.000488281 15.565V4.436C0.000488281 1.99 1.98949 0 4.43349 0H9.30849C11.7545 0 13.7445 1.99 13.7445 4.436V5.368C13.7445 5.782 13.4085 6.118 12.9945 6.118C12.5805 6.118 12.2445 5.782 12.2445 5.368V4.436C12.2445 2.816 10.9275 1.5 9.30849 1.5H4.43349C2.81649 1.5 1.50049 2.816 1.50049 4.436V15.565C1.50049 17.184 2.81649 18.5 4.43349 18.5H9.31949C10.9315 18.5 12.2445 17.188 12.2445 15.576V14.633C12.2445 14.219 12.5805 13.883 12.9945 13.883C13.4085 13.883 13.7445 14.219 13.7445 14.633V15.576C13.7445 18.016 11.7585 20 9.31949 20Z"
            fill="#F66120"
          />
          <mask
            id="mask0_816_4033"
            maskUnits="userSpaceOnUse"
            x="6"
            y="9"
            width="15"
            height="2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99609 9.25H20.537V10.75H6.99609V9.25Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_816_4033)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7871 10.75H7.74609C7.33209 10.75 6.99609 10.414 6.99609 10C6.99609 9.586 7.33209 9.25 7.74609 9.25H19.7871C20.2011 9.25 20.5371 9.586 20.5371 10C20.5371 10.414 20.2011 10.75 19.7871 10.75Z"
              fill="#F66120"
            />
          </g>
          <mask
            id="mask1_816_4033"
            maskUnits="userSpaceOnUse"
            x="16"
            y="6"
            width="5"
            height="8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1099 6.33527H20.5372V13.666H16.1099V6.33527Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_816_4033)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.8596 13.666C16.6676 13.666 16.4746 13.593 16.3286 13.445C16.0366 13.151 16.0376 12.677 16.3306 12.385L18.7246 10L16.3306 7.61602C16.0376 7.32402 16.0356 6.85002 16.3286 6.55602C16.6206 6.26202 17.0946 6.26202 17.3886 6.55402L20.3166 9.46902C20.4586 9.60902 20.5376 9.80102 20.5376 10C20.5376 10.199 20.4586 10.391 20.3166 10.531L17.3886 13.447C17.2426 13.593 17.0506 13.666 16.8596 13.666Z"
              fill="#F66120"
            />
          </g>
        </svg>
      ),
      onClick: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.refresh();
      },
      additionalStyle: "text-[#F66120]",
    },
  ];

  return (
    <div className="col-span-1 h-full w-full sm:mb-10 lg:mb-0">
      <div className="text-lg flex flex-col sm:h-fit lg:h-full rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
        {menuItems.map((item, index) => (
          <div
            onClick={item.onClick}
            key={index}
            className="flex items-center w-full p-3 border-b border-gray-200 cursor-pointer"
          >
            {item.icon}
            <span
              className={`${item.additionalStyle ? item.additionalStyle : null
                }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
