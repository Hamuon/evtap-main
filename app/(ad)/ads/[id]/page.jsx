"use client"
import React from 'react'
import MyGallery from '@/components/ImageGallery'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import { MapComponent } from '@/components/Map'

export default function page({ params: { id } }) {

    const defaultProps = {
        autoPlay: false,
        showPlayButton: false,
        items: [

            {
                sizes: "767px, 767px",
                original: "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
                thumbnail: "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
            },
            {
                originalHeight: "100%",
                original: "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
                thumbnail: "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
            },
            {
                originalHeight: "100%",
                original: "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
                thumbnail: "https://www.kingscross.co.uk/media/P_KXC_B5_DEV_001_N96_kxweb.jpg",
            },
        ]
    }

    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:py-10 w-full lg:container z-0 gap-14'>
                <div className='col-span-1 font-numerals sm:order-2 md:order-1 sm:px-6 sm:mb-3 md:mb-0'>
                    <div className='flex gap-1 font-semibold md:text-xl sm:text-base text-gray-400 mb-2'>
                        <span>
                            آگهی ها
                        </span>
                        /
                        <span>
                            فروش
                        </span>
                    </div>
                    <div className='md:text-3xl sm:text-xl font-semibold mb-2'>
                        فروش خانه ویلایی 80 متری در رشدیه
                    </div>
                    <div className='mb-8'>
                        <div className='flex gap-1'>
                            <span>
                                354
                            </span>
                            <span>
                                بازدید
                            </span>
                        </div>
                        <div className='flex gap-1'>
                            <span>
                                2
                            </span>
                            <span>
                                روز پیش در
                            </span>
                            <span>
                                تبریز
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-1 md:text-2xl sm:text-base font-semibold mb-8'>
                        <span>
                            12000000000
                        </span>
                        <span>
                            تومان
                        </span>
                    </div>
                    <div className='w-full  font-semibold mb-6'>
                        <div className='flex justify-between w-full border-b-2 border-gray-400 md:px-6 py-2'>
                            <span>متراژ</span>
                            <div className='flex gap-1 text-gray-500'>
                                <span>80</span>
                                <span>متر مربع</span>
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
                            <div className='flex justify-between w-full'>
                                <span>تعداد اتاق</span>
                                <div className='flex gap-1 text-gray-500'>
                                    <span>2</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <span>طبقه</span>
                                <div className='flex gap-1 text-gray-500'>
                                    <span>همکف</span>
                                </div>
                            </div>

                        </div>
                        <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
                            <div className='flex justify-between w-full'>
                                <span>سال ساخت</span>
                                <div className='flex gap-1 text-gray-500'>
                                    <span>1386</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <span>پارکینگ</span>
                                <div className='flex gap-1 text-gray-500'>
                                    <span>دارد</span>
                                </div>
                            </div>

                        </div>
                        <div className="flex sm:flex-col md:flex-row md:gap-10 border-b-2 border-gray-400 md:px-6 py-2">
                            <div className='flex justify-between w-full'>
                                <span>آسانسور</span>
                                <div className='flex gap-1 text-gray-500'>
                                    <span>ندارد</span>
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <span>انباری</span>
                                <div className='flex gap-1 text-gray-500'>
                                    <span>ندارد</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-between w-full items-center px-4 mb-6 sm:order-1 md:order-2'>
                        <SubmitButton type="button" text="تماس" />
                        <div className='flex gap-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_436_1078" maskUnits="userSpaceOnUse" x="2" y="8" width="20" height="15">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00037 8.79395H22V22.5379H2.00037V8.79395Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_436_1078)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5654 22.5379H6.43537C3.99037 22.5379 2.00037 20.5489 2.00037 18.1029V13.2279C2.00037 10.7829 3.99037 8.79395 6.43537 8.79395H7.36837C7.78237 8.79395 8.11837 9.12995 8.11837 9.54395C8.11837 9.95795 7.78237 10.2939 7.36837 10.2939H6.43537C4.81637 10.2939 3.50037 11.6099 3.50037 13.2279V18.1029C3.50037 19.7219 4.81637 21.0379 6.43537 21.0379H17.5654C19.1834 21.0379 20.5004 19.7219 20.5004 18.1029V13.2189C20.5004 11.6059 19.1884 10.2939 17.5764 10.2939H16.6334C16.2194 10.2939 15.8834 9.95795 15.8834 9.54395C15.8834 9.12995 16.2194 8.79395 16.6334 8.79395H17.5764C20.0154 8.79395 22.0004 10.7789 22.0004 13.2189V18.1029C22.0004 20.5489 20.0104 22.5379 17.5654 22.5379Z" fill="black" />
                                </g>
                                <mask id="mask1_436_1078" maskUnits="userSpaceOnUse" x="11" y="2" width="2" height="14">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 2H12.75V15.5409H11.25V2Z" fill="white" />
                                </mask>
                                <g mask="url(#mask1_436_1078)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.541C11.586 15.541 11.25 15.205 11.25 14.791V2.75C11.25 2.336 11.586 2 12 2C12.414 2 12.75 2.336 12.75 2.75V14.791C12.75 15.205 12.414 15.541 12 15.541Z" fill="black" />
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08496 6.42853C8.89396 6.42853 8.70196 6.35553 8.55596 6.20953C8.26296 5.91753 8.26096 5.44353 8.55396 5.14953L11.469 2.22153C11.75 1.93853 12.25 1.93853 12.531 2.22153L15.447 5.14953C15.739 5.44353 15.738 5.91753 15.445 6.20953C15.151 6.50153 14.677 6.50153 14.385 6.20753L12 3.81353L9.61596 6.20753C9.46996 6.35553 9.27696 6.42853 9.08496 6.42853Z" fill="black" />
                            </svg>

                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_769_2982" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="21">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H17.0388V20.8467H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_769_2982)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34176 1.5C2.79276 1.5 1.49976 2.482 1.49976 4.421V19.145C1.49976 19.239 1.55376 19.29 1.59876 19.316C1.64376 19.344 1.71476 19.364 1.79676 19.318L8.17876 15.738C8.40676 15.611 8.68576 15.61 8.91476 15.739L15.2418 19.313C15.3248 19.361 15.3958 19.339 15.4408 19.312C15.4858 19.285 15.5388 19.234 15.5388 19.14V4.604C15.5388 3.837 15.5388 1.5 11.7008 1.5H5.34176ZM1.69876 20.847C1.40376 20.847 1.10876 20.768 0.840756 20.61C0.313756 20.303 -0.000244141 19.754 -0.000244141 19.145V4.421C-0.000244141 1.611 1.94676 0 5.34176 0H11.7008C15.0928 0 17.0388 1.679 17.0388 4.604V19.14C17.0388 19.75 16.7248 20.299 16.1968 20.606C15.6708 20.914 15.0368 20.92 14.5048 20.62L8.54476 17.253L2.52976 20.627C2.26976 20.773 1.98476 20.847 1.69876 20.847Z" fill="black" />
                                </g>
                            </svg>


                        </div>
                    </div>
                    <div className='font-semibold'>
                        <div className='flex justify-between w-full border-b-2 border-gray-400 sm:px-0 md:px-6 py-2'>
                            <span>توضیحات</span>
                        </div>
                        <p className='sm:px-0 md:px-6 py-2 w-full'>
                            تمامی توضیحات این آگهی که در قسمت ثبت آگهی توسط کاربر ثبت شده است در این قسمت نشان داده می شود.
                        </p>
                    </div>
                </div>
                <div className='col-span-1 aspect-square flex flex-col gap-6'>
                    <div className='h-96 overflow-hidden w-full md:block sm:hidden'>
                        <MapComponent />
                    </div>
                    <MyGallery {...defaultProps} />
                </div>
                <div className='h-96 order-3 overflow-hidden w-full sm:flex justify-center md:hidden sm:mb-10 px-6'>
                    <MapComponent />
                </div>
            </div>
        </main>
    )
}
