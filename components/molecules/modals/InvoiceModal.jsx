import React, { useEffect, useState } from 'react';
import SubmitButton from '@/components/atoms/buttons/SubmitButton';
import { useRouter } from 'next/navigation';
import { getDashboard } from '@/services/authService';
export default function InvoiceModal({ reqData }) {

    const [wallet, setWallet] = useState(0)
    const router = useRouter()

    async function getUser() {
        try {
            const response = await getDashboard();
            setWallet(response.data.user[0].wallet);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

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
                            <span>{reqData?.data.request?.address ? reqData.data.request.address : "هماهنگی با کارشناس"}</span>
                        </div>
                    </div>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>نام</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span>{reqData?.data.request?.user.first_name} {reqData?.data.request?.user.last_name}</span>
                        </div>
                    </div>
                    <div className='flex w-full border-b border-gray-300 md:px-6 py-2'>
                        <span className='ml-7 w-10'>هزینه</span>
                        <div className='flex gap-1 text-gray-500'>
                            <span>{reqData?.data.setting?.request_amount - wallet}</span>
                            <span className="ml-2"> ریال</span>
                            <span className='bg-green text-white px-3 py-1 text-xs rounded-lg'>{reqData?.data.request?.status_title}</span>
                        </div>
                    </div>
                </div>
                {
                    wallet > 0 ?
                        <p className="text-sm text-red mb-4 text-justify">
                            مبلغ پرداختی با احتساب اعتبار کیف پول و 9 درصد مالیات ارزش افزوده میباشد.
                        </p>
                        : null
                }
                <p className="text-sm text-gray-500 mb-4 text-justify">
                    کارشناس مربوطه در سریع ترین زمان ممکن با شما تماس خواهد گرفت، در صورت تاخیر در پیگیری کارشناس با شماره 04133356848 تماس حاصل فرمائید.
                </p>
                <div className='flex gap-2 mt-2 w-full'>
                    <SubmitButton handleClick={() => router.push(reqData?.data.url)} type="button" text="پرداخت" />
                </div>
            </div>
        </div >
    );
}





