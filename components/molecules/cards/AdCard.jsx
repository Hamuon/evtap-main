import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AdCard({ type, title, region, price, time, ad_img, id }) {
  return (
    <Link href={`/ads/${id}`}>
      <div className="flex 2xl:w-auto font-numerals m-3 h-56 z-50 justify-between rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-white">
        <div className="p-4 flex flex-col justify-center ">
          <span className="w-fit mb-4 p-1 rounded-lg text-xs bg-gray-200">
            {type}
          </span>
          <p className="sm:text-lg md:text-2xl font-semibold mb-2">{title}</p>
          <p className="text-xl font-semibold mb-4">{region}</p>
          <div className="flex gap-1 items-center text-gray-500">
            <span className="">{price}</span>
            <span>تومان</span>
          </div>
          <div className="text-gray-500 text-sm ">{time}</div>
        </div>
        <div className="relative bg-gray-200 w-44 h-full">
          <Image src={ad_img} fill style={{ objectFit: "cover" }} alt={title} />
        </div>
      </div>
    </Link>
  );
}
