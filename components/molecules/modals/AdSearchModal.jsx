"use client";
import SearchSale from "@/components/organisms/forms/SearchSale";
import React, { useState } from "react";
import FieldLabel from "@/components/atoms/labels/FieldLabel";
import SearchRent from "@/components/organisms/forms/SearchRent";
import SearchMortgage from "@/components/organisms/forms/SearchMortgage";
export default function AdSearchModal({ setSearch }) {

  const [adType, setAdType] = useState(null)

  return (
    <div className="modal-container fixed backdrop-blur-xl h-screen flex items-center z-50 overflow-hidden">
      <div className='w-full my-2 flex flex-col modal-form font-numerals relative sm:w-[350px] md:w-[450px]'>
        <div className="flex w-full justify-between mb-3 items-center">
          <span className="md:text-xl font-semibold ">جستجو</span>
          <span onClick={() => setSearch(false)} className="cursor-pointer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <FieldLabel>نوع آگهی</FieldLabel>
        <select defaultValue={"DEFAULT"} onChange={(e) => setAdType(e.target.value)} name='state' className="select select-bordered select-sm w-full my-2" >
          <option disabled value="DEFAULT">انتخاب کنید</option>
          <option value="rental">اجاره</option>
          <option value="mortgage">رهن</option>
          <option value="sale">فروش</option>
        </select>
        {
          adType === "sale" ? <SearchSale adType={adType} /> : adType === "rental" ? <SearchRent /> : adType === "mortgage" ? <SearchMortgage /> : null
        }
      </div>
    </div>
  );
}
