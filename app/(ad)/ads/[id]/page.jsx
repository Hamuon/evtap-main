"use client";
import React from "react";
import MyGallery from "@/components/ImageGallery";
import CallButton from "@/components/atoms/buttons/CallButton";
import ShareButton from "@/components/atoms/buttons/ShareButton";
import dynamic from "next/dynamic";
const AdPageMap = dynamic(() => import("@/components/AdPageMap"), {
  ssr: false,
});

export default function page({ params: { id } }) {
  const defaultProps = {
    autoPlay: false,
    showPlayButton: false,
    items: [
      {
        sizes: "767px, 767px",
        original:
          "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
        thumbnail:
          "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
      },
      {
        originalHeight: "100%",
        original:
          "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
        thumbnail:
          "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
      },
      {
        originalHeight: "100%",
        original:
          "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
        thumbnail:
          "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
      },
    ],
  };

  return (
    <main className="w-full mx-auto flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-10 w-full lg:container z-0 gap-14">
        <div className="col-span-1 font-numerals sm:order-2 md:order-1 sm:px-6 sm:mb-3 md:mb-0">
          <div className="flex gap-1 font-semibold md:text-xl sm:text-base text-gray-400 mb-2">
            <span>آگهی ها</span>/<span>فروش</span>
          </div>
          <div className="md:text-3xl sm:text-xl font-semibold mb-2">
            فروش خانه ویلایی 80 متری در رشدیه
          </div>
          <div className="mb-8">
            <div className="flex gap-1">
              <span>2</span>
              <span>روز پیش در</span>
              <span>تبریز</span>
            </div>
          </div>
          <div className="flex gap-1 md:text-2xl sm:text-base font-semibold mb-8">
            <span>12000000000</span>
            <span>تومان</span>
          </div>
          <div className="w-full  font-semibold mb-6">
            <div className="flex justify-between w-full border-b-2 border-gray-400 md:px-6 py-2">
              <span>متراژ</span>
              <div className="flex gap-1 text-gray-500">
                <span>80</span>
                <span>متر مربع</span>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>تعداد اتاق</span>
                <div className="flex gap-1 text-gray-500">
                  <span>2</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>طبقه</span>
                <div className="flex gap-1 text-gray-500">
                  <span>همکف</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>سال ساخت</span>
                <div className="flex gap-1 text-gray-500">
                  <span>1386</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>پارکینگ</span>
                <div className="flex gap-1 text-gray-500">
                  <span>دارد</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>آسانسور</span>
                <div className="flex gap-1 text-gray-500">
                  <span>ندارد</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>انباری</span>
                <div className="flex gap-1 text-gray-500">
                  <span>ندارد</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start w-full items-center mb-6 sm:order-1 md:order-2">
            <CallButton phoneNumber="+1234567890" text="تماس با ثبت کننده آگهی" />
            <ShareButton text="انتشار" />
          </div>
          <div className="font-semibold">
            <div className="flex justify-between w-full border-b-2 border-gray-400 sm:px-0 md:px-6 py-2">
              <span>توضیحات</span>
            </div>
            <p className="sm:px-0 py-6 w-full text-justify">
              تمامی توضیحات این آگهی که در قسمت ثبت آگهی توسط کاربر ثبت شده است
              تمامی توضیحات این آگهی که در قسمت ثبت آگهی توسط کاربر ثبت شده است
              تمامی توضیحات این آگهی که در قسمت ثبت آگهی توسط کاربر ثبت شده است
              تمامی توضیحات این آگهی که در قسمت ثبت آگهی توسط کاربر ثبت شده است
              .در این قسمت نشان داده می شود.
            </p>
          </div>
          <div className="h-96 overflow-hidden w-full md:block sm:hidden">
            <AdPageMap />
          </div>
        </div>
        <div className="col-span-1 aspect-square flex flex-col gap-6">
          <MyGallery {...defaultProps} />
        </div>
        <div className="h-96 order-3 overflow-hidden w-full sm:flex justify-center md:hidden sm:mb-10 px-6">
          <AdPageMap />
        </div>
      </div>
    </main>
  );
}
