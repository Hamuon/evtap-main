import React from "react";

export default function ExpertsCard({
  expert_amount,
  expert_img,
  city,
  co_op,
  expert_name,
}) {
  return (
    <div className="p-4 font-numerals">
      <div class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-8"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={expert_img}
            alt={expert_name}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {expert_name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {`${co_op} ماه سابقه فعالیت`}
          </span>
          <div class="flex mt-4 md:mt-6">
            <div class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg">
              {city}
            </div>
            <div class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 0">
              {`تعداد کارشناسی ${expert_amount}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
