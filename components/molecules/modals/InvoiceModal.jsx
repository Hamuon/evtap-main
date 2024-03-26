import BackButton from '@/components/atoms/buttons/BackButton';
import SubmitButton from '@/components/atoms/buttons/SubmitButton';
import React from 'react'

export default function InvoiceModal() {



    return (
        <div className='modal-container'>
            <div className='modal-form font-numerals relative sm:w-[350px] md:w-[450px] h-auto sm:px-8 xl:px-10'>
                <div className='w-full flex flex-col items-start mb-4'>
                    <div className='text-2xl mb-1 font-semibold'>رسید پرداخت</div>
                    <p className='text-sm text-gray-500'>رسید پرداخت کارشناسی ملک شما</p>
                </div>
                <div className='w-full font-semibold mb-6'>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>خدمات</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span> درخواست کارشناسی ملک</span>
                        </div>
                    </div>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>آدرس</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span> استان، شهر، منطقه، محل، خیابان اصلی، کوچه، پلاک</span>
                        </div>
                    </div>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>کارشناس</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span> وحید افضلی نیا</span>
                        </div>
                    </div>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>هزینه</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span>7900000</span>
                            <span className="ml-2"> ریال</span>
                            <span className='bg-green text-white px-3 py-1 text-xs rounded-lg'>پرداخت شده</span>
                        </div>
                    </div>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>تاریخ</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span> 1402.12.22</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    کارشناس مربوطه در سریع ترین زمان ممکن با شما تماس خواهد گرفت، در صورت تاخیر در پیگیری کارشناس با شماره 04133356848 تماس حاصل فرمائید.
                </p>
                <div className='flex gap-2 mt-2 w-full'>
                    <SubmitButton className="w-full" type="button" text="پروفایل" />
                </div>
            </div>
        </div >
    );
}





