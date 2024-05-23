"use client";
import React, { useState, useEffect } from "react";
import MyGallery from "@/components/ImageGallery";
import CallButton from "@/components/atoms/buttons/CallButton";
import ShareButton from "@/components/atoms/buttons/ShareButton";
import dynamic from "next/dynamic";
import { getSingleAd } from "@/services/authService";
import moment from "jalali-moment";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const AdPageMap = dynamic(() => import("@/components/AdPageMap"), {
  ssr: false,
});

export default function page({ params: { id } }) {
  const router = useRouter();
  const [ad, setAd] = React.useState(null);

  const defaultProps = {
    autoPlay: false,
    showPlayButton: false,
    items: [],
  };

  useEffect(() => {
    getSingleAd(id)
      .then((response) => {
        setAd(response.data.advertising);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (ad?.images?.length > 0) {
      ad?.images?.map((image) =>
        defaultProps.items.push({
          sizes: "767px, 767px",
          original: `https://new.evtap.ir/uploads/${image}`,
          thumbnail: `https://new.evtap.ir/uploads/${image}`,
        })
      );
    } else {
      defaultProps.items.push({
        sizes: "767px, 767px",
        original: `/media/imgHolder.jpg`,
        thumbnail: `/media/imgHolder.jpg`,
      });
    }
  }, [ad]);

  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(3) + " " + "میلیارد تومان"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
        ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(3) + " " + "میلیون تومان"
        : // Three Zeroes for Thousands
        Math.abs(Number(labelValue)) >= 1.0e3
          ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(3) + " " + "هزار تومان"
          : Math.abs(Number(labelValue));
  }

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(window.location.toString());
    toast.success("لینک آگهی کپی شد", {
      position: "top-center",
    });
  };

  const persianToArabicMap = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
  };

  function convertPersianToArabic(input) {
    return input.split('').map(char => persianToArabicMap[char] || char).join('');
  }

  return (
    <main className="w-full mx-auto flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pb-10 w-full lg:container z-0 gap-14">
        <div className="col-span-1 font-numerals sm:order-2 md:order-1 sm:px-6 sm:mb-3 md:mb-0">
          <div className="flex gap-1 font-semibold md:text-xl sm:text-base text-gray-400 mb-2">
            <span>آگهی ها</span>/
            <span>
              {ad?.type === "mortgage"
                ? "رهن"
                : ad?.type === "sale"
                  ? "فروش"
                  : ad?.type === "rent"
                    ? "اجاره"
                    : null}
            </span>
          </div>
          <div className="md:text-3xl sm:text-xl font-semibold mb-2">
            {ad?.title}
          </div>
          <div className="mb-8">
            {/* <div className="flex gap-1">
              <span>{moment(new Date(ad?.updated_at)).fromNow()}</span>
            </div> */}
            <p
              className="cursor-pointer text-button-primary-color font-semibold"
              onClick={() => router.push(`/request?address=${ad.address}`)}
            >
              درخواست کارشناسی{" "}
            </p>
          </div>
          {/* {ad?.type === "rent" ? (
            <div className="flex gap-1 md:text-base sm:text-base font-semibold mb-8 text-gray-400">
              <span>{convertToInternationalCurrencySystem(convertPersianToArabic(ad.pre_rent))}</span>
              <span>تومان پیش</span>
            </div>
          ) : null} */}
          <div className="w-full  font-semibold mb-6">
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>قیمت</span>
                <div className="flex gap-1 text-gray-500">
                  <span>
                    {ad?.type === "mortgage"
                      ? convertToInternationalCurrencySystem(convertPersianToArabic(ad.sale_price))
                      : ad?.type === "sale"
                        ? convertToInternationalCurrencySystem(convertPersianToArabic(ad.sale_price))
                        : ad?.type === "rent"
                          ? convertToInternationalCurrencySystem(convertPersianToArabic(ad.rent))
                          : null}
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>متراژ</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.size}</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>تعداد اتاق</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.room_count}</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>طبقه</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.floor}</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>سال ساخت</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.year}</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>پارکینگ</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.parking === "0" ? "ندارد" : "دارد"}</span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
              <div className="flex justify-between w-full">
                <span>آسانسور</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.elevator === "0" ? "ندارد" : "دارد"}</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <span>انباری</span>
                <div className="flex gap-1 text-gray-500">
                  <span>{ad?.warehouse === "0" ? "ندارد" : "دارد"}</span>
                </div>
              </div>
            </div>
            {ad?.type === "rent" ? (
              <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
                <div className="flex justify-between w-full">
                  <span>پیش</span>
                  <div className="flex gap-1 text-gray-500">
                    <span>{convertToInternationalCurrencySystem(convertPersianToArabic(ad?.pre_rent))}</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex justify-start w-full items-center mb-6 sm:order-1 md:order-2">
            <CallButton
              phoneNumber={ad?.user?.phone || "09140963009"}
              text="تماس با ثبت کننده آگهی"
            />
            <ShareButton handleClick={copyToClipboard} text="اشتراک گذاری" />
          </div>

          <div className="font-semibold">
            <div className="flex justify-between w-full border-b-2 border-gray-400 sm:px-0 md:px-6 py-2">
              <span>توضیحات </span>
            </div>
            <p className="sm:px-0 sm:pt-6 md:my-6 w-full text-justify whitespace-pre-wrap">
              {ad?.description}
            </p>
          </div>
          <div className="h-96 overflow-hidden w-full md:block sm:hidden">
            <AdPageMap lat={ad?.latitude} long={ad?.longitude} />
          </div>
        </div>
        <div className="col-span-1 aspect-square flex flex-col gap-6 lg:sticky lg:top-10">
          <MyGallery {...defaultProps} />
        </div>
        <div className="h-96 order-3 overflow-hidden w-full sm:flex justify-center md:hidden sm:mb-10 px-6">
          <AdPageMap lat={ad?.latitude} long={ad?.longitude} />
        </div>
      </div>
    </main>
  );
}
