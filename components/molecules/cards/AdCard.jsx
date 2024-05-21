import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from 'jalali-moment'
export default function AdCard({ type, title, region, price, time, ad_img, id }) {

  function convertToInternationalCurrencySystem(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

      ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(3) + " " + "میلیارد تومان"
      // Six Zeroes for Millions 
      : Math.abs(Number(labelValue)) >= 1.0e+6

        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(3) + " " + "میلیون تومان"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3

          ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(3) + " " + "هزار تومان"

          : Math.abs(Number(labelValue));

  }



  return (
    <Link href={`/ads/${id}`}>
      <div className="flex 2xl:w-auto font-numerals m-3 h-56 z-50 justify-between rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-white">
        <div className="p-4 flex flex-col justify-center ">
          <span className="w-fit mb-4 p-1 rounded-lg text-xs bg-gray-200">
            {type}
          </span>
          <p className="sm:text-lg md:text-2xl font-semibold mb-6">{title}</p>
          <div className="flex gap-1 items-center text-gray-500 mb-2">
            <span className="">{price == "0" ? "توافقی" : convertToInternationalCurrencySystem(price)}</span>
          </div>
          <div className="text-gray-500 text-sm ">{moment(time, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</div>
        </div>
        <div className="relative bg-gray-200 w-44 h-full">
          <img src={ad_img} className="w-full h-full object-cover" alt={title} />
        </div>
      </div>
    </Link>
  );
}
